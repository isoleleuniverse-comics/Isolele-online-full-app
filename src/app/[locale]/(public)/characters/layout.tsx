import type { Metadata } from "next";
import { DEFAULT_LOCALE, isSupportedLocale, type SupportedLocale } from "@/lib/i18n/locales";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const path = `/${safeLocale}/characters`;

  return {
    title: "Characters | ISOLELE Universe",
    description: "Discover the heroes and legends of the ISOLELE universe.",
    alternates: {
      canonical: path,
      languages: {
        fr: "/fr/characters",
        en: "/en/characters",
      },
    },
    openGraph: {
      type: "website",
      url: path,
      title: "ISOLELE Characters",
      description: "Meet the legendary heroes, queens, kings, and spirits of the ISOLELE universe.",
    },
    twitter: {
      card: "summary_large_image",
      title: "ISOLELE Characters",
      description: "Discover ISOLELE characters from African mythology, royalty, and modern legend.",
    },
  };
}

export default function CharactersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
