import type { Metadata } from "next";
import { isSupportedLocale, DEFAULT_LOCALE, type SupportedLocale } from "@/shared/i18n/locales";
import { getRoyalHistoryPageContent } from "@/features/royal-history/model/royal-history.data";
import { RoyalHistoryPage } from "@/features/royal-history/ui/royal-history-page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const content = getRoyalHistoryPageContent(safeLocale);
  const title = content.seo.title;
  const description = content.seo.description;

  return {
    title,
    description,
    alternates: {
      canonical: `/${safeLocale}/royal-history`,
    },
    openGraph: {
      title,
      description,
      url: `/${safeLocale}/royal-history`,
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

  return <RoyalHistoryPage locale={safeLocale} />;
}

