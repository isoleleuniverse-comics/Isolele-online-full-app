import type { Metadata } from "next";
import { isSupportedLocale, DEFAULT_LOCALE, type SupportedLocale } from "@/shared/i18n/locales";
import { CareersPage } from "./careers-page";

const careersMetadata = {
  en: {
    title: "Careers at ISOLELE Universe",
    description: "Build the first Pan-African superhero universe with ISOLELE Universe.",
  },
  fr: {
    title: "Careers chez ISOLELE Universe",
    description: "Construire le premier univers super-héroïque panafricain avec ISOLELE Universe.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const title = careersMetadata[safeLocale].title;
  const description = careersMetadata[safeLocale].description;

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

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  return <CareersPage locale={safeLocale} />;
}
