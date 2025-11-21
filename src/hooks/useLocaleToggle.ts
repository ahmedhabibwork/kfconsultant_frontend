"use client";

import {useLocale} from "next-intl";
import {useRouter, usePathname} from "../i18n/navigation";
import {routing} from "../i18n/routing";
import {useParams} from "next/navigation";

export function useLocaleToggle() {
  const router = useRouter();
  const locale = useLocale() as (typeof routing.locales)[number];
  const pathname = usePathname();
  const params = useParams();
  const locales = routing.locales;
  const defaultLocale = routing.defaultLocale ?? locales[0];

  const setLocale = (nextLocale: (typeof locales)[number]) => {
    if (!locales.includes(nextLocale)) return;

    router.replace(
      // With `pathnames`, pass current pathname + params
      // TS usually needs an @ts-expect-error here because
      // next-intl ties pathname/params together strongly.
      // @ts-expect-error
      {pathname, params},
      {locale: nextLocale}
    );
  };

  const toggleLocale = () => {
    const index = locales.indexOf(locale ?? defaultLocale);
    const next = locales[(index + 1) % locales.length];
    setLocale(next);
  };

  return {locale, setLocale, toggleLocale, locales};
}
