import type { SupportedLocale } from "@/shared/i18n/locales";

export type ComicCategory = "featured" | "bestseller" | "new";

export interface ComicBook {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
}

export interface ComicDetailCharacter {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface ComicDetailGalleryItem {
  image: string;
  alt: string;
}

export interface ComicDetailPageData {
  slug: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  price: number;
  purchaseHref?: string;
  characters: ComicDetailCharacter[];
  synopsisTitle: string;
  synopsis: string[];
  galleryTitle: string;
  gallery: ComicDetailGalleryItem[];
  authorTitle: string;
  authorName: string;
  authorDescription: string;
  authorImage: string;
  backLabel: string;
  comingSoon: boolean;
  comingSoonLabel?: string;
  comingSoonBody?: string;
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
