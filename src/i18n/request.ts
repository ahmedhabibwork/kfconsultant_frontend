import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async () => {
  // Static for now, we'll change this later
  const locale = 'en';
 
  const namespaces = ["header"];
  
  const messages = Object.fromEntries(
    await Promise.all(
      namespaces.map(async ns => [
        ns,
        (await import(`../../messages/${locale}/${ns}.json`)).default
      ])
    )
  );
 
  return {
    locale,
    messages
  };
});