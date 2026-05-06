import type { SupportedLocale } from "@/shared/i18n/locales";

export type ComicCategory = "featured" | "bestseller" | "new";

export interface ComicBook {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
}

export interface ComicsCategorySection {
  id: ComicCategory;
  title: string;
  ctaLabel: string;
  ctaHref: string;
  books: ComicBook[];
}

export interface ComicsPageContent {
  locale: SupportedLocale;
  hero: {
    title: string;
    description: string;
  };
  sections: ComicsCategorySection[];
  footer: {
    description: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
  };
  ui: {
    readLabel: string;
    scrollLeftLabel: string;
    scrollRightLabel: string;
  };
}
