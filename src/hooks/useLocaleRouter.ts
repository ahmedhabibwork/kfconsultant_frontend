/* eslint-disable @typescript-eslint/no-explicit-any */
// src/hooks/useRouter.ts
'use client';

import { usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { useParams, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

// ✅ Import the router that triggers NextTopLoader
import { useRouter as useTopLoaderRouter } from 'nextjs-toploader/app';

export interface CustomRouterOptions {
  locale?: string;
  scroll?: boolean;
  shallow?: boolean; // kept for API parity, not used by app router
}

export interface CustomRouter {
  // Navigation methods
  push: (href: string, options?: CustomRouterOptions) => void;
  replace: (href: string, options?: CustomRouterOptions) => void;
  back: () => void;
  forward: () => void;
  refresh: () => void;

  // Route information
  pathname: string;
  query: Record<string, string | string[]>;
  locale: string;
  locales: string[];

  // Utility methods
  isActive: (href: string) => boolean;
  buildUrl: (href: string, locale?: string) => string;
  changeLocale: (newLocale: string, href?: string) => void;
}

export const useRouter = (): CustomRouter => {
  // 🔹 This router triggers the top loader on navigation
  const topLoaderRouter = useTopLoaderRouter();

  // From next-intl, pathname is WITHOUT locale prefix
  const pathname = usePathname();
  const currentLocale = useLocale();
  const searchParams = useSearchParams();

  // Convert search params to query object
  const query = Object.fromEntries(searchParams.entries());

  const normalizeHref = (href: string): string => {
    if (!href.startsWith('/')) return `/${href}`;
    return href;
  };

  const buildUrl = useCallback(
    (href: string, locale?: string) => {
      const targetLocale = locale ?? currentLocale;
      const normalized = normalizeHref(href);
      // /en + /about -> /en/about
      return `/${targetLocale}${normalized}`;
    },
    [currentLocale]
  );

  const push = useCallback(
    (href: string, options?: CustomRouterOptions) => {
      const { locale, scroll } = options || {};
      const url = buildUrl(href, locale);

      // This triggers navigation + top loader
      topLoaderRouter.push(url, { scroll });
    },
    [topLoaderRouter, buildUrl]
  );

  const replace = useCallback(
    (href: string, options?: CustomRouterOptions) => {
      const { locale, scroll } = options || {};
      const url = buildUrl(href, locale);

      // This triggers navigation + top loader
      topLoaderRouter.replace(url, { scroll });
    },
    [topLoaderRouter, buildUrl]
  );

  const back = useCallback(() => {
    topLoaderRouter.back();
  }, [topLoaderRouter]);

  const forward = useCallback(() => {
    topLoaderRouter.forward();
  }, [topLoaderRouter]);

  const refresh = useCallback(() => {
    topLoaderRouter.refresh();
  }, [topLoaderRouter]);

  const isActive = useCallback(
    (href: string) => {
      const normalized = normalizeHref(href);
      // pathname from next-intl is WITHOUT locale, so compare with normalized
      return pathname === normalized;
    },
    [pathname]
  );

  const changeLocale = useCallback(
    (newLocale: string, href?: string) => {
      // `pathname` here is something like "/about" (no /en or /ar)
      const targetPath = href ? normalizeHref(href) : pathname;

      // Build URL with new locale and navigate
      const localizedUrl = buildUrl(targetPath, newLocale);

      // This replace will:
      // - change locale (via URL)
      // - trigger NextTopLoader
      topLoaderRouter.replace(localizedUrl, { scroll: false });
    },
    [buildUrl, pathname, topLoaderRouter]
  );

  return {
    push,
    replace,
    back,
    forward,
    refresh,
    pathname,
    query,
    locale: currentLocale,
    locales: ['en', 'ar'], // make dynamic if needed
    isActive,
    buildUrl,
    changeLocale
  };
};

// Alternative hook with more advanced features
export const useAdvancedRouter = () => {
  const router = useRouter();
  const params = useParams();

  const navigateWithQuery = useCallback(
    (
      href: string,
      queryParams?: Record<string, string | number | boolean>,
      options?: CustomRouterOptions
    ) => {
      let url = href;

      if (queryParams) {
        const searchParams = new URLSearchParams();
        Object.entries(queryParams).forEach(([key, value]) => {
          searchParams.append(key, String(value));
        });
        url += `?${searchParams.toString()}`;
      }

      router.push(url, options);
    },
    [router]
  );

  const navigateWithState = useCallback(
    (href: string, state?: any, options?: CustomRouterOptions) => {
      // Store state in sessionStorage for client-side navigation
      if (state && typeof window !== 'undefined') {
        sessionStorage.setItem('navigation-state', JSON.stringify(state));
      }
      router.push(href, options);
    },
    [router]
  );

  const getNavigationState = useCallback(() => {
    if (typeof window === 'undefined') return null;
    try {
      const state = sessionStorage.getItem('navigation-state');
      return state ? JSON.parse(state) : null;
    } catch {
      return null;
    }
  }, []);

  const clearNavigationState = useCallback(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('navigation-state');
    }
  }, []);

  return {
    ...router,
    navigateWithQuery,
    navigateWithState,
    getNavigationState,
    clearNavigationState,
    params
  };
};
