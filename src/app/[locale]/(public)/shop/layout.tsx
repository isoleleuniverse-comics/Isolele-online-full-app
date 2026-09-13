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
  const path = `/${safeLocale}/shop`;

  return {
    title: "ISOLELE Shop",
    description: "Collector hats and books from the ISOLELE universe, crafted by RoiRoyal.",
    alternates: {
      canonical: path,
      languages: buildLocaleAlternates((locale) => `/${locale}/shop`),
    },
    openGraph: {
      type: "website",
      url: path,
      title: "ISOLELE Shop",
      description: "Collector hats and books from the ISOLELE universe, crafted by RoiRoyal.",
    },
  };
}

export default function ShopLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
