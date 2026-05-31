import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getComicDetailPageData, getComicStaticParams } from "@/features/comics/model/comics.data";
import ComicDetailPage from "@/features/comics/ui/details/page";
import { DEFAULT_LOCALE, isSupportedLocale, SUPPORTED_LOCALES, type SupportedLocale } from "@/shared/i18n/locales";

export function generateStaticParams() {
  const comics = getComicStaticParams();
  return SUPPORTED_LOCALES.flatMap((locale) => comics.map((item) => ({ locale, ...item })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const page = getComicDetailPageData(slug, safeLocale);

  if (!page) {
    return {};
  }

  const canonical = `/${safeLocale}/comics/${slug}`;

  return {
    title: `${page.title} | ISOLELE Comics`,
    description: page.description,
    alternates: {
      canonical,
      languages: {
        fr: `/fr/comics/${slug}`,
        en: `/en/comics/${slug}`,
      },
    },
    openGraph: {
      type: "article",
      url: canonical,
      title: `${page.title} | ISOLELE Comics`,
      description: page.description,
      images: [{ url: page.heroImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} | ISOLELE Comics`,
      description: page.description,
      images: [page.heroImage],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const page = getComicDetailPageData(slug, safeLocale);

  if (!page) {
    notFound();
  }

  return <ComicDetailPage page={page} locale={safeLocale} />;
}
