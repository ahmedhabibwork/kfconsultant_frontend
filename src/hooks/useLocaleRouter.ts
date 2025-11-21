/* eslint-disable @typescript-eslint/no-explicit-any */
// src/hooks/useRouter.ts
'use client';

import { useRouter as useNextIntlRouter, usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { useParams, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
// Import NextTopLoader router for progress indication
import { useRouter as useTopLoaderRouter } from 'nextjs-toploader/app';

export interface CustomRouterOptions {
  locale?: string;
  scroll?: boolean;
  shallow?: boolean;
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
  const router = useNextIntlRouter();
  const topLoaderRouter = useTopLoaderRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const searchParams = useSearchParams();

  // Convert search params to query object
  const query = Object.fromEntries(searchParams.entries());

  const push = useCallback((href: string, options?: CustomRouterOptions) => {
    const { locale, ...routerOptions } = options || {};
    // Use toploader router for progress indication
    topLoaderRouter.push(href, routerOptions);
    // Also trigger next-intl navigation
    router.push(href, { locale: locale || currentLocale, ...routerOptions });
  }, [router, topLoaderRouter, currentLocale]);

  const replace = useCallback((href: string, options?: CustomRouterOptions) => {
    const { locale, ...routerOptions } = options || {};
    // Use toploader router for progress indication
    topLoaderRouter.replace(href, routerOptions);
    // Also trigger next-intl navigation
    router.replace(href, { locale: locale || currentLocale, ...routerOptions });
  }, [router, topLoaderRouter, currentLocale]);

  const back = useCallback(() => {
    topLoaderRouter.back();
  }, [topLoaderRouter]);

  const forward = useCallback(() => {
    topLoaderRouter.forward();
  }, [topLoaderRouter]);

  const refresh = useCallback(() => {
    topLoaderRouter.refresh();
  }, [topLoaderRouter]);

  const isActive = useCallback((href: string) => {
    return pathname === href;
  }, [pathname]);

  const buildUrl = useCallback((href: string, locale?: string) => {
    const targetLocale = locale || currentLocale;
    return `/${targetLocale}${href}`;
  }, [currentLocale]);

  const changeLocale = useCallback((newLocale: string, href?: string) => {
    const targetHref = href || pathname;
    router.replace(targetHref, { locale: newLocale });
  }, [router, pathname]);

  return {
    push,
    replace,
    back,
    forward,
    refresh,
    pathname,
    query,
    locale: currentLocale,
    locales: ['en', 'ar'], // You can make this dynamic by importing from routing
    isActive,
    buildUrl,
    changeLocale,
  };
};

// Alternative hook with more advanced features
export const useAdvancedRouter = () => {
  const router = useRouter();
  const params = useParams();

  const navigateWithQuery = useCallback((
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
  }, [router]);

  const navigateWithState = useCallback((
    href: string,
    state?: any,
    options?: CustomRouterOptions
  ) => {
    // Store state in sessionStorage for client-side navigation
    if (state && typeof window !== 'undefined') {
      sessionStorage.setItem('navigation-state', JSON.stringify(state));
    }
    router.push(href, options);
  }, [router]);

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
    params,
  };
};