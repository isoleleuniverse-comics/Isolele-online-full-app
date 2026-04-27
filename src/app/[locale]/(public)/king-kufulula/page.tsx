import type { Metadata } from "next";
import { isSupportedLocale, DEFAULT_LOCALE, type SupportedLocale } from "@/shared/i18n/locales";
import { KingKufululaPage } from "@/features/king-kufulula/ui/king-kufulula-page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;

  const title = "HRM King Kufulula Bapindi Manikongo: The African King Who Built a Universe From Nothing";
  const description =
    "HRM King Kufulula Bapindi Manikongo is the traditional King of the Bapindi people and Manikongo of the Kongo royal lineage. Founder of ISOLELE, the first Black African superhero universe, built from Kinshasa, DRC for the world.";

  return {
    title,
    description,
    alternates: {
      canonical: `/${safeLocale}/king-kufulula`,
    },
    openGraph: {
      title,
      description,
      url: `/${safeLocale}/king-kufulula`,
      type: "article",
    },
  };
}

export default function Page() {
  return <KingKufululaPage />;
}

