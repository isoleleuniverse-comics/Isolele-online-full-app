import type { Metadata } from "next";
import { isSupportedLocale, DEFAULT_LOCALE, type SupportedLocale } from "@/shared/i18n/locales";
import { translations } from "@/shared/i18n/translations";
import { PrivacyPage } from "./privacy-page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const trans = translations[safeLocale] ?? translations.en;
  
  const title = trans.privacy_title;
  const description = trans.privacy_subtitle;

  return {
    title,
    description,
    alternates: {
      canonical: `/${safeLocale}/privacy`,
    },
    openGraph: {
      title,
      description,
      url: `/${safeLocale}/privacy`,
      type: "website",
    },
  };
}

export default async function Page() {
  return <PrivacyPage />;
}
