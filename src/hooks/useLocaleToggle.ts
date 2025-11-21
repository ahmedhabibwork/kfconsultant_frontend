// src/hooks/useLocaleToggle.ts
"use client";

import {useLocale} from "next-intl";
import {usePathname, useRouter} from "../i18n/navigation";

type Locale = "en" | "ar";

export function useLocaleToggle() {
  const router = useRouter();
  const pathname = usePathname();   // from i18n/navigation ✅
  const locale = useLocale() as Locale;

  const toggleLocale = () => {
    const nextLocale: Locale = locale === "ar" ? "en" : "ar";

    router.replace(pathname, {locale: nextLocale});
    // Optional, but helps when you use t() in Server Components:
    // router.refresh();
  };

  return {locale, toggleLocale};
}
