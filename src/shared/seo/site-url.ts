const DEFAULT_DEV_SITE_URL = "http://localhost:3000";
const DEFAULT_PROD_SITE_URL = "https://isolele.com";

function normalizeUrl(url: string): string {
  const trimmed = url.trim();
  if (!trimmed) return "";

  const prefixed = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;

  try {
    const parsed = new URL(prefixed);
    return parsed.origin.replace(/\/$/, "");
  } catch {
    return "";
  }
}

export function getSiteUrl(): string {
  const envUrl = normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL ?? "");
  if (envUrl) return envUrl;

  if (process.env.NODE_ENV === "production") {
    return DEFAULT_PROD_SITE_URL;
  }

  return DEFAULT_DEV_SITE_URL;
}

export function absoluteUrl(path: string): string {
  const baseUrl = getSiteUrl();
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${normalizedPath}`;
}
