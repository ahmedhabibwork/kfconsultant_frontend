// src/i18n/request.ts
import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  /* 1️⃣  Await the requestLocale promise first */
  const resolvedLocale = await requestLocale;
  
  /* 2️⃣  Pick the effective locale ("en" or "ar") */
  const locale =
    routing.locales.includes(resolvedLocale as 'en' | 'ar')
      ? resolvedLocale!
      : routing.defaultLocale;

  /* 3️⃣  List every JSON file (= namespace) you want to ship */
  const namespaces = ["header"];      // <-- add "header" here

  /* 4️⃣  Load each file and store it under its own key */
  const messages = Object.fromEntries(
    await Promise.all(
      namespaces.map(async ns => [
        ns,                                               // key = "header"
        (await import(`./locals/${locale}/${ns}.json`))    // value = JSON
          .default
      ])
    )
  );

  return {locale, messages};   // now {header: {...}, home: {...}}
});