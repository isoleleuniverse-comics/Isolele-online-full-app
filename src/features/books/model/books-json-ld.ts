import { absoluteUrl } from "@/shared/seo/site-url";
import type { SupportedLocale } from "@/shared/i18n/locales";
import type { BookPageData } from "./books.types";

export function getBookJsonLd(page: BookPageData, locale: SupportedLocale) {
  const url = absoluteUrl(`/${locale}/books/${page.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.metaDescription,
    inLanguage: locale,
    image: [page.heroImage],
    mainEntityOfPage: url,
    publisher: {
      "@type": "Organization",
      name: "ISOLELE",
      url: absoluteUrl("/"),
    },
    isPartOf: {
      "@type": "CreativeWorkSeries",
      name: "ISOLELE Universe",
      url: absoluteUrl(`/${locale}`),
    },
    about: page.keywords,
    url,
  };
}

export function getBookBreadcrumbJsonLd(page: BookPageData, locale: SupportedLocale) {
  const homeUrl = absoluteUrl(`/${locale}`);
  const booksUrl = absoluteUrl(`/${locale}/books/${page.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ISOLELE",
        item: homeUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.title,
        item: booksUrl,
      },
    ],
  };
}
