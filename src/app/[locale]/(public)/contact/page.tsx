import type { Metadata } from "next";
import { isSupportedLocale, DEFAULT_LOCALE, type SupportedLocale } from "@/shared/i18n/locales";
import { ContactPage } from "@/features/contact/ui/page";

const contactMetadata = {
  en: {
    title: "Contact the Royal Court",
    description: "Reach out to the ISOLELE team for partnerships, press inquiries, or general support.",
  },
  fr: {
    title: "Contacter la Cour Royale",
    description: "Contactez l'équipe ISOLELE pour des partenariats, des demandes de presse ou une assistance générale.",
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
