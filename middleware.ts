import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_LOCALE, isLocale, negotiateLocale } from "@/lib/i18n";

const COOKIE = "NEXT_LOCALE";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1];

  if (isLocale(first)) {
    const response = NextResponse.next();
    response.cookies.set(COOKIE, first, { path: "/", maxAge: 60 * 60 * 24 * 365 });
    return response;
  }

  const cookie = request.cookies.get(COOKIE)?.value;
  const locale =
    cookie && isLocale(cookie) ? cookie : negotiateLocale(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  const response = NextResponse.redirect(url);
  response.cookies.set(COOKIE, locale || DEFAULT_LOCALE, { path: "/", maxAge: 60 * 60 * 24 * 365 });
  return response;
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
