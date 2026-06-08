import type { Metadata } from "next";
import { isSupportedLocale, DEFAULT_LOCALE, type SupportedLocale } from "@/shared/i18n/locales";
import { translations } from "@/shared/i18n/translations";
import { ContactPage } from "./contact-page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const trans = translations[safeLocale] ?? translations.en;
  
  const title = trans.contact_title;
  const description = trans.contact_subtitle;

  return {
    title,
    description,
    alternates: {
      canonical: `/${safeLocale}/contact`,
    },
    openGraph: {
      title,
      description,
      url: `/${safeLocale}/contact`,
      type: "website",
    },
  };
}

export default async function Page() {
  return <ContactPage />;
}
