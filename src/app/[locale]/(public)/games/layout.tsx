import type { Metadata } from "next";
import { isSupportedLocale, type SupportedLocale } from "@/shared/i18n/locales";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : "en";
  const path = `/${safeLocale}/games`;

  if (safeLocale === "fr") {
    return {
      title: "Jeux ISOLELE | KUFU Ludo et jeu de cartes KUFU",
      description:
        "Explorez la collection de jeux ISOLELE, du KUFU Ludo au jeu de cartes KUFU, entre strategie, ceremonie et royaute africaine.",
      alternates: {
        canonical: path,
        languages: {
          fr: "/fr/games",
          en: "/en/games",
        },
      },
    };
  }

  return {
    title: "ISOLELE Games | KUFU Ludo and KUFU card game",
    description:
      "Explore ISOLELE's games collection, from KUFU Ludo to the KUFU card game, where strategy, ceremony, and African royalty meet.",
    alternates: {
      canonical: path,
      languages: {
        fr: "/fr/games",
        en: "/en/games",
      },
    },
  };
}

export default function GamesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
