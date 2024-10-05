import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

import { locale, locales } from "./config/locale";
import { routing } from "./i18n/routing";

const handleI18nRouting = createMiddleware(routing);

export default async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

  if (pathnameHasLocale) {
    const shouldHandle = pathname === "/" || new RegExp(`^/(${locales.join("|")})(/.*)?$`).test(pathname);

    if (!shouldHandle) return;

    return handleI18nRouting(req);
  }

  const absoluteUrl = req.nextUrl.clone();
  absoluteUrl.pathname = `/${locale}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;

  return NextResponse.redirect(absoluteUrl);
}

// Routes that don't need to be handled by the middleware
export const config = {
  matcher: ["/((?!_next).*)", "/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
