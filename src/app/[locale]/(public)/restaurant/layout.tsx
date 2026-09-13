import type { ReactNode } from "react";
import type { Metadata } from "next";
import { buildLocaleAlternates, DEFAULT_LOCALE, isSupportedLocale, type SupportedLocale } from "@/shared/i18n/locales";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const path = `/${safeLocale}/restaurant`;

  return {
    title: "Kitsune House x ISOLELE | Partner Restaurant",
    description:
      "Kitsune House in Miami is the first official ISOLELE partner restaurant, where African heroes meet anime energy.",
    alternates: {
      canonical: path,
      languages: buildLocaleAlternates((locale) => `/${locale}/restaurant`),
    },
    openGraph: {
      type: "website",
      url: path,
      title: "Kitsune House x ISOLELE | Partner Restaurant",
      description:
        "Kitsune House in Miami is the first official ISOLELE partner restaurant, where African heroes meet anime energy.",
    },
  };
}

export default function RestaurantLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
