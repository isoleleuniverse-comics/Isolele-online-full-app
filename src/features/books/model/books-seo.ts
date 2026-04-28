import type { Metadata } from "next";
import { absoluteUrl } from "@/shared/seo/site-url";
import { DEFAULT_LOCALE, isSupportedLocale, type SupportedLocale } from "@/shared/i18n/locales";
import { getBookBySlug } from "./books.data";

export function getBookMetadata(locale: string, slug: string): Metadata {
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const page = getBookBySlug(slug, safeLocale);

  if (!page) {
    return {
      title: "Book Not Found | ISOLELE",
      description: "The page you requested does not exist in the ISOLELE universe.",
    };
  }

  const path = `/${safeLocale}/books/${page.slug}`;

  return {
    title: page.title,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: {
      canonical: path,
      languages: {
        fr: `/fr/books/${page.slug}`,
        en: `/en/books/${page.slug}`,
      },
    },
    openGraph: {
      type: "article",
      url: path,
      title: page.title,
      description: page.metaDescription,
      images: [
        {
          url: page.heroImage,
          width: 1200,
          height: 1600,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.metaDescription,
      images: [page.heroImage],
    },
    other: {
      "og:locale": safeLocale === "fr" ? "fr_FR" : "en_US",
      "og:site_name": "ISOLELE",
      "article:publisher": absoluteUrl("/"),
    },
  };
}
