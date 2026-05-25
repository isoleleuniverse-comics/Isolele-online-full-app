export const SUPPORTED_LOCALES = ["fr", "en", "sw", "es", "ln", "xh", "zu"] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: SupportedLocale = "fr";

export const LOCALE_COOKIE_NAME = "isolele_locale";

export const LOCALE_LABELS: Record<SupportedLocale, string> = {
  fr: "Francais",
  en: "English",
  sw: "Swahili",
  es: "Español",
  ln: "Lingala",
  xh: "Xhosa",
  zu: "Zulu",
};

export function isSupportedLocale(value: string | undefined | null): value is SupportedLocale {
  return !!value && (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

export function getLocaleFromPathname(pathname: string): SupportedLocale | null {
  const segment = pathname.split("/")[1];
  return isSupportedLocale(segment) ? segment : null;
}

export function stripLocaleFromPathname(pathname: string): string {
  const locale = getLocaleFromPathname(pathname);
  if (!locale) return pathname;
  const stripped = pathname.replace(new RegExp(`^/${locale}`), "");
  return stripped.length ? stripped : "/";
}

export function resolveLocaleFromPathname(pathname: string): SupportedLocale {
  return getLocaleFromPathname(pathname) ?? DEFAULT_LOCALE;
}

export function withLocale(locale: SupportedLocale, href: string): string {
  if (!href.startsWith("/")) return `/${locale}/${href}`;
  if (href === "/") return `/${locale}`;
  return `/${locale}${href}`;
}
