import type { Metadata } from "next";
import { isSupportedLocale, DEFAULT_LOCALE, type SupportedLocale } from "@/shared/i18n/locales";
import { PrivacyPage } from "./privacy-page";

const privacyMetadata = {
  en: {
    title: "Privacy Policy",
    description: "Understand how ISOLELE collects, uses, and protects your personal information.",
  },
  fr: {
    title: "Politique de Confidentialité",
    description: "Comprenez comment ISOLELE collecte, utilise et protège vos informations personnelles.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  
  const title = privacyMetadata[safeLocale]?.title ?? privacyMetadata.en.title;
  const description = privacyMetadata[safeLocale]?.description ?? privacyMetadata.en.description;

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

export default function Page() {
  return <PrivacyPage />;
}
