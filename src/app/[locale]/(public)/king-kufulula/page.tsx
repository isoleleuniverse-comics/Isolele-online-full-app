import type { Metadata } from "next";
import { isSupportedLocale, DEFAULT_LOCALE, type SupportedLocale } from "@/shared/i18n/locales";
import { getKingKufululaPageContent } from "@/features/king-kufulula/model/king-kufulula.data";
import { KingKufululaPage } from "@/features/king-kufulula/ui/king-kufulula-page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const content = getKingKufululaPageContent(safeLocale);
  const title = content.seo.title;
  const description = content.seo.description;

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

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  return <KingKufululaPage locale={safeLocale} />;
}
