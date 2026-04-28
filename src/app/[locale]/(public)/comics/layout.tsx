import type { ReactNode } from "react";
import type { Metadata } from "next";
import { DEFAULT_LOCALE, isSupportedLocale, type SupportedLocale } from "@/shared/i18n/locales";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const path = `/${safeLocale}/comics`;

  return {
    title: "African Comic Collection",
    description:
      "Explore ISOLELE African comic stories, characters, and mythology in a premium universe built for global readers.",
    keywords: [
      "african comic",
      "african comics",
      "black superhero comics",
      "kongo mythology comics",
      "isolele comics",
    ],
    alternates: {
      canonical: path,
      languages: {
        fr: "/fr/comics",
        en: "/en/comics",
      },
    },
    openGraph: {
      type: "website",
      url: path,
      title: "ISOLELE Comics - African Comic Collection",
      description:
        "Read the ISOLELE African comic collection and discover legendary heroes, kingdoms, and mythological adventures.",
    },
    twitter: {
      card: "summary_large_image",
      title: "ISOLELE Comics - African Comic Collection",
      description:
        "Discover ISOLELE African comic stories with powerful heroes and epic mythology from the Kongo universe.",
    },
  };
}

export default function ComicsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
