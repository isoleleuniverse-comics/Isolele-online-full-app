import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  DEFAULT_LOCALE,
  isSupportedLocale,
  LOCALE_COOKIE_NAME,
  SUPPORTED_LOCALES,
} from "@/shared/i18n/locales";

const CMS_COOKIE_NAME = "isolele_cms_session";

function shouldIgnorePath(pathname: string) {
  if (pathname.startsWith("/_next")) return true;
  if (pathname.startsWith("/api")) return true;
  if (pathname.startsWith("/dashboard")) return true;
  if (pathname === "/robots.txt" || pathname === "/sitemap.xml") return true;
  return pathname.includes(".");
}

function detectLocale(request: NextRequest) {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE_NAME)?.value;
  if (isSupportedLocale(cookieLocale)) return cookieLocale;

  const header = request.headers.get("accept-language") ?? "";
  const lower = header.toLowerCase();

  for (const locale of SUPPORTED_LOCALES) {
    if (lower.includes(locale)) return locale;
  }

  return DEFAULT_LOCALE;
}


export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname === "/dashboard/login") {
    return NextResponse.next();
  }

  if (pathname === "/dashboard" || pathname.startsWith("/dashboard/")) {
    const cmsSessionSecret = process.env.CMS_SESSION_SECRET || "dev-cms-session-secret";
    if (request.cookies.get(CMS_COOKIE_NAME)?.value === cmsSessionSecret) {
      return NextResponse.next();
    }

    const url = request.nextUrl.clone();
    url.pathname = "/dashboard/login";
    url.search = "";
    return NextResponse.redirect(url);
  }

  if (pathname.startsWith("/admin") || pathname === "/login" || pathname.startsWith("/login/")) {
    const locale = detectLocale(request);
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    url.search = "";
    return NextResponse.redirect(url);
  }

  if (shouldIgnorePath(pathname)) {
    return NextResponse.next();
  }

  const pathLocale = pathname.split("/")[1];
  if (isSupportedLocale(pathLocale)) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", pathLocale);

    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

    response.cookies.set(LOCALE_COOKIE_NAME, pathLocale, {
      path: "/",
      httpOnly: false,
      sameSite: "lax",
    });

    return response;
  }

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  url.search = search;

  const response = NextResponse.redirect(url);
  response.cookies.set(LOCALE_COOKIE_NAME, locale, {
    path: "/",
    httpOnly: false,
    sameSite: "lax",
  });

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
