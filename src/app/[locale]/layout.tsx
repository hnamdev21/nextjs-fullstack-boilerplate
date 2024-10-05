import "@styles/app.scss";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import React from "react";

import { locales } from "@/config/locale";
import { useGetSession } from "@/hooks/usecases/useGetSession";
import Providers from "@/providers";
import SessionProvider from "@/providers/SessionProvider";

export const generateStaticParams = async () => {
  return locales.map((locale) => ({ lang: locale }));
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const [session, messages] = await Promise.all([useGetSession(), getMessages()]);

  const locale = params.locale;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <SessionProvider session={session}>
            <Providers>{children}</Providers>
          </SessionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
