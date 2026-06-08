import type { Metadata } from "next";
import { isSupportedLocale, DEFAULT_LOCALE, type SupportedLocale } from "@/shared/i18n/locales";
import { translations } from "@/shared/i18n/translations";
import { CareersPage } from "./careers-page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const trans = translations[safeLocale] ?? translations.en;
  
  const title = trans.careers_title;
  const description = trans.careers_subtitle;

  return {
    title,
    description,
    alternates: {
      canonical: `/${safeLocale}/careers`,
    },
    openGraph: {
      title,
      description,
      url: `/${safeLocale}/careers`,
      type: "website",
    },
  };
}

export default async function Page() {
  return <CareersPage />;
}
