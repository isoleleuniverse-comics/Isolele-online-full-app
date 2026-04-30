import { NextRequest, NextResponse } from "next/server";
import {
  DEFAULT_LOCALE,
  isSupportedLocale,
  LOCALE_COOKIE_NAME,
  SUPPORTED_LOCALES,
} from "@/shared/i18n/locales";

function shouldIgnorePath(pathname: string) {
  // Skip Next internals, API, and static assets.
  if (pathname.startsWith("/_next")) return true;
  if (pathname.startsWith("/api")) return true;
  if (pathname === "/robots.txt" || pathname === "/sitemap.xml") return true;
  return pathname.includes(".");
}

function detectLocale(req: NextRequest) {
  const cookieLocale = req.cookies.get(LOCALE_COOKIE_NAME)?.value;
  if (isSupportedLocale(cookieLocale)) return cookieLocale;

  const header = req.headers.get("accept-language") ?? "";
  const lower = header.toLowerCase();
  // Very small parser: look for "fr" or "en" in preference order.
  for (const locale of SUPPORTED_LOCALES) {
    if (lower.includes(locale)) return locale;
  }
  return DEFAULT_LOCALE;
}

export function proxy(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // Public-only mode: block admin and login surfaces.
  if (pathname.startsWith("/admin") || pathname === "/login" || pathname.startsWith("/login/")) {
    const locale = detectLocale(req);
    const url = req.nextUrl.clone();
    url.pathname = `/${locale}`;
    url.search = "";
    return NextResponse.redirect(url);
  }

  if (shouldIgnorePath(pathname)) {
    return NextResponse.next();
  }

  const pathLocale = pathname.split("/")[1];
  if (isSupportedLocale(pathLocale)) {
    // Propagate locale to server components via request headers.
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("x-locale", pathLocale);

    const res = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

    // Persist last chosen locale.
    res.cookies.set(LOCALE_COOKIE_NAME, pathLocale, {
      path: "/",
      httpOnly: false,
      sameSite: "lax",
    });
    return res;
  }

  const locale = detectLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  url.search = search;

  const res = NextResponse.redirect(url);
  res.cookies.set(LOCALE_COOKIE_NAME, locale, {
    path: "/",
    httpOnly: false,
    sameSite: "lax",
  });
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
