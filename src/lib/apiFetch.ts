/* eslint-disable @typescript-eslint/no-explicit-any */
import 'server-only'
import { ok, err, Result } from "neverthrow";

type NextExtras = {
  revalidate?: number | false;
  tags?: string[];
  forceDynamic?: true;
};

interface ApiFetchOpts extends Omit<RequestInit, "next" | "headers"> {
  auth?: boolean;
  next?: NextExtras;
  headers?: HeadersInit;
  avoid?: boolean;
  cache?: RequestCache;
  retries?: number;
  retryDelay?: number;
}

const API_BASE = process.env.API_ENDPOINT!;

// --- logging controls (env) ---
const LOG_FETCH = (process.env.LOG_FETCH ?? '').toLowerCase() === '1' || (process.env.LOG_FETCH ?? '').toLowerCase() === 'true';
const LOG_HOSTS = (process.env.LOG_FETCH_HOSTS ?? '')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);

// helper
function shouldLog(urlStr: string) {
  try {
    const u = new URL(urlStr);
    const isExternal = u.hostname !== 'localhost' && u.hostname !== '127.0.0.1';
    const inAllowList = LOG_HOSTS.length === 0 || LOG_HOSTS.includes(u.hostname);
    return LOG_FETCH && isExternal && inAllowList && typeof window === 'undefined';
  } catch {
    return false;
  }
}

// Generate cURL command for debugging
function generateCurlCommand(url: string, method: string, headers: Headers, body?: any): string {
  let curl = `curl -X ${method} '${url}'`;

  // Add headers
  headers.forEach((value, key) => {
    curl += ` \\\n  -H '${key}: ${value}'`;
  });

  // Add body if present
  if (body) {
    if (body instanceof FormData) {
      curl += ` \\\n  --form (FormData - see browser network tab for details)`;
    } else if (typeof body === 'string') {
      curl += ` \\\n  -d '${body.replace(/'/g, "\\'")}'`;
    } else if (typeof body === 'object') {
      curl += ` \\\n  -d '${JSON.stringify(body).replace(/'/g, "\\'")}'`;
    }
  }

  return curl;
}

/**
 * Generic wrapper that returns a `Result<Ok, Err>` from **neverthrow**
 * instead of throwing.
 *   • `ok(data)`  on success
 *   • `err(error)` on failure
 */
export async function apiFetch<T, E = { message: string; status: number }>(
  path: string,
  {
    avoid = false,
    headers,
    next,
    cache = 'no-store',
    retries = 2,
    retryDelay = 1000,
    ...init
  }: ApiFetchOpts = {},
): Promise<Result<T, E>> {

  if (avoid) {
    return err("Request skipped" as unknown as E);
  }

  const fullUrl = `${API_BASE}${path}`;
  const method = (init.method ?? 'GET').toUpperCase();
  const t0 = Date.now();

  // merged headers (don’t force Content-Type for FormData)
  const merged = new Headers(headers);
  const isFormData = (init as any)?.body instanceof FormData;
  if (!isFormData) {
    merged.set("Content-Type", merged.get("Content-Type") ?? "application/json");
  }

  // Increase timeout for production environment
  const timeoutMs = process.env.NODE_ENV === 'production' ? 30_000 : 15_000;

  const req: RequestInit & { next?: NextExtras } = {
    ...init,
    headers: merged,
    signal: AbortSignal.timeout(timeoutMs),
    cache,
    next,
  };

  let statusForLog = 0;
  let lastError: any = null;

  // Retry logic for failed requests
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      // Add delay between retries (except for first attempt)
      if (attempt > 0) {
        await new Promise(resolve => setTimeout(resolve, retryDelay * attempt));
      }

      // Debug: Log cURL command in development
      const curlCommand = generateCurlCommand(fullUrl, method, merged, (init as any)?.body);
      console.debug('\n🔍 API Request (cURL):\n' + curlCommand + '\n');

      const res = await fetch(fullUrl, req);
      statusForLog = res.status;

      let body: unknown;
      try {
        body = await res.clone().json();
      } catch {
        body = await res.clone().text();
      }

      if (!res.ok) {
        // Don't retry for client errors (4xx), only server errors (5xx)
        if (res.status >= 400 && res.status < 500) {
          const msg =
            typeof body === "object" && body && (body as any).message
              ? (body as any).message
              : res.statusText;

          const errorDetails =
            typeof body === "object" && body && (body as any).error
              ? (body as any).error
              : "";

          const fullMessage = errorDetails ? `${msg}: ${errorDetails}` : msg;

          const errorResult = {
            status: res.status,
            message: fullMessage
          } as unknown as E;

          return err(errorResult);
        }

        // For server errors, throw to trigger retry
        throw new Error(`Server error: ${res.status} ${res.statusText}`);
      }

      // Success - return the result
      return ok(body as T);
    } catch (error: any) {
      lastError = error;
      // Continue to next retry attempt
      if (attempt < retries) {
        continue;
      }
    }
  }

  // If we got here, all retries failed
  // Provide more detailed error messages
  let errorMessage = 'fetch failed';
  let errorStatus = 0;

  if (lastError) {
    if (lastError.name === 'AbortError' || lastError.name === 'TimeoutError') {
      errorMessage = 'Request timeout - please check your connection and try again';
      errorStatus = 408; // Request Timeout
    } else if (lastError.message) {
      errorMessage = lastError.message;
    }
  }


  return err({ message: errorMessage, status: errorStatus } as E);
}
