import type { Metadata } from "next";
import { isSupportedLocale, DEFAULT_LOCALE, type SupportedLocale } from "@/shared/i18n/locales";
import { ContactPage } from "@/features/contact/ui/page";

const contactMetadata = {
  en: {
    title: "Contact",
    description: "Contact ISOLELE Universe for press, cultural institutions, licensing, distribution, retail, careers, and community inquiries.",
  },
  fr: {
    title: "Contact",
    description: "Contactez ISOLELE Universe pour les demandes de presse, partenariats culturels, licences, distribution, retail, carrières et communauté.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  
  const title = contactMetadata[safeLocale]?.title ?? contactMetadata.en.title;
  const description = contactMetadata[safeLocale]?.description ?? contactMetadata.en.description;

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

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  
  return <ContactPage locale={safeLocale} />;
}
