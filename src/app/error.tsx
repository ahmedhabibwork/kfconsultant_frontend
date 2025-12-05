"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-primary mb-4">Oops!</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Something went wrong
          </h2>
          <p className="text-gray-500 mb-6">
            We couldn't load this project. Please try again.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium"
          >
            Try Again
          </button>
          <Link
            href="/projects"
            className="px-6 py-3 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors font-medium"
          >
            Back to Projects
          </Link>
        </div>

        {process.env.NODE_ENV === "development" && (
          <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-md text-left">
            <p className="text-sm text-red-800 font-mono break-all">
              {error.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
