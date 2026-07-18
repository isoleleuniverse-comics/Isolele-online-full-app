import type { Metadata } from "next";
import { isSupportedLocale, DEFAULT_LOCALE, type SupportedLocale } from "@/shared/i18n/locales";
import { ContactPage } from "@/features/contact/ui/page";

const contactMetadata = {
  title: "Contact the Royal Court",
  description: "Reach out to the ISOLELE team for partnerships, press inquiries, or general support.",
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: contactMetadata.title,
    description: contactMetadata.description,
    alternates: {
      canonical: `/contact`,
    },
    openGraph: {
      title: contactMetadata.title,
      description: contactMetadata.description,
      url: `/contact`,
      type: "website",
    },
  };
}

export default function Page() {
  const safeLocale: SupportedLocale = DEFAULT_LOCALE;
  return <ContactPage locale={safeLocale} />;
}
