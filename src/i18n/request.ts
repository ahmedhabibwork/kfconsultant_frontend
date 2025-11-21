import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({locale}) => {
  const namespaces = ["header"];
  const activeLocale = typeof locale === 'string' && locale
    ? locale
    : routing.defaultLocale ?? routing.locales[0];

  const messages = Object.fromEntries(
    await Promise.all(
      namespaces.map(async ns => [
        ns,
        (await import(`../../messages/${activeLocale}/${ns}.json`)).default
      ])
    )
  );

  return {
    locale: activeLocale,
    messages
  };
});