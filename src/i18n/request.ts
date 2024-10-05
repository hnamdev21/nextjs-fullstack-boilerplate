import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

import { routing } from "./routing";

const isLocaleValid = (locale: string) => routing.locales.includes(locale as any);

export default getRequestConfig(async ({ locale }) => {
  if (!isLocaleValid(locale)) {
    notFound();
  }

  return {
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
