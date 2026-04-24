import { withLocale, type SupportedLocale } from "@/lib/i18n/locales";

function normalizeBaseUrl(value: string) {
  if (value.startsWith("http://") || value.startsWith("https://")) return value;
  return `https://${value}`;
}

export function getSiteUrl() {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.VERCEL_URL ||
    "";

  if (!envUrl) return "http://localhost:3000";
  return normalizeBaseUrl(envUrl);
}

export function absoluteUrl(path: string) {
  return new URL(path, getSiteUrl()).toString();
}

export function localizedPath(locale: SupportedLocale, path: string) {
  return withLocale(locale, path);
}

export function localizedAbsoluteUrl(locale: SupportedLocale, path: string) {
  return absoluteUrl(localizedPath(locale, path));
}

