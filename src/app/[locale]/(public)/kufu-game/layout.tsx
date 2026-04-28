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
  const path = `/${safeLocale}/kufu-game`;

  return {
    title: "African Games - KUFU The Crown Game",
    description:
      "Play KUFU, one of the signature African games from ISOLELE, where strategy, royalty, and cultural symbolism meet.",
    keywords: [
      "african games",
      "african board games",
      "kufu game",
      "isolele game",
      "strategy african game",
    ],
    alternates: {
      canonical: path,
      languages: {
        fr: "/fr/kufu-game",
        en: "/en/kufu-game",
      },
    },
    openGraph: {
      type: "website",
      url: path,
      title: "KUFU - African Games by ISOLELE",
      description:
        "Discover KUFU, an African games experience from ISOLELE blending strategy, clan power, and ancestral symbolism.",
    },
    twitter: {
      card: "summary_large_image",
      title: "KUFU - African Games by ISOLELE",
      description:
        "KUFU is a premium African games experience rooted in royal strategy and cultural storytelling.",
    },
  };
}

export default function KufuGameLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
