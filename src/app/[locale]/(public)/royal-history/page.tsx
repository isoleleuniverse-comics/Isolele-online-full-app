import type { Metadata } from "next";
import { isSupportedLocale, DEFAULT_LOCALE, type SupportedLocale } from "@/shared/i18n/locales";
import { RoyalHistoryPage } from "@/features/royal-history/ui/royal-history-page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;

  const title = "You Have Always Been Royal: The African History They Never Taught You";
  const description =
    "The first kings of Rome were Black. Europe was named after an African princess. The Moors ruled Europe for 700 years. The Kongo Empire was one of the greatest civilizations in human history. This is the truth ISOLELE was born to restore.";

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

export default function Page() {
  return <RoyalHistoryPage />;
}

