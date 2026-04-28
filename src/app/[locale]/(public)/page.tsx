import type { Metadata } from "next";
import { getHomeSeo } from "@/features/home/seo/get-home-seo";
import { HomePage } from "@/features/home/ui/home-page";
import { isSupportedLocale, DEFAULT_LOCALE, type SupportedLocale } from "@/shared/i18n/locales";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;

  return getHomeSeo(safeLocale).metadata;
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const seo = getHomeSeo(safeLocale);

  return <HomePage locale={safeLocale} seo={seo.jsonLd} />;
}
 
