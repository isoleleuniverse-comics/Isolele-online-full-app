import type { SupportedLocale } from "@/shared/i18n/locales";

export const BOOK_SLUGS = ["isolele", "zaiire", "makanda", "bambula", "mokele", "kufu", "zattar", "zaiko"] as const;
export type BookSlug = typeof BOOK_SLUGS[number];

export interface BookCta {
  id: string;
  label: string;
  href: string;
  style?: "primary" | "secondary";
}

export interface ProseSection {
  type: "prose";
  paragraphs: string[];
}

export interface ImageQuoteSection {
  type: "image_quote";
  image: string;
  imageAlt: string;
  quote: string;
  attribution?: string;
}

export interface HeadingSection {
  heading: string;
  body: string;
}

export interface HeadingGroupSection {
  type: "heading_group";
  sections: HeadingSection[];
}

export interface BookGallerySection {
  type: "books_gallery";
  heading: string;
  images: Array<{
    src: string;
    alt: string;
  }>;
  caption: string;
}

export type BookPageSection = ProseSection | ImageQuoteSection | HeadingGroupSection | BookGallerySection;

export interface BookPageData {
  slug: BookSlug;
  title: string;
  metaDescription: string;
  heroImage: string;
  heroTag: string;
  accentColor: string;
  keywords: string[];
  sections: BookPageSection[];
  ctas: BookCta[];
}

export interface BookPageLookup {
  locale: SupportedLocale;
  page: BookPageData;
}
