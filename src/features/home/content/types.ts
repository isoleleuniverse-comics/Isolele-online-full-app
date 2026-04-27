import type { Metadata } from "next";

export type HomeLocale = "fr" | "en";

export interface HomeHeroSlide {
  id: string;
  type: "book" | "game";
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  image: string;
  href: string;
  accentColor: string;
}

export interface HomeUniversePillarContent {
  key: string;
  title: string;
  description: string;
  href: string;
  characterName: string;
  discoverMoreLabel?: string;
}

export interface HomeUniverseContent {
  title: string;
  subtitle: string;
  description: string;
  discoverMoreLabel: string;
  pillars: HomeUniversePillarContent[];
}

export interface HomeCharacterContent {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  color: string;
}

export interface HomeCharactersContent {
  title: string;
  subtitle: string;
  discoverLabel: string;
  items: HomeCharacterContent[];
}

export interface HomeStoryContent {
  founderLabel: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  conclusion: string;
  cta: string;
}

export interface HomeProductContent {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  type: "comic" | "book";
}

export interface HomeProductsContent {
  title: string;
  subtitle: string;
  addToCartLabel: string;
  items: HomeProductContent[];
}

export interface HomeFounderContent {
  locationLabel: string;
  roleLabel: string;
  title: string;
  subtitle: string;
  description: string;
  quote: string;
  ctaLabel: string;
}

export interface HomeBookstoreDisplayContent {
  headingTagline: string;
  headingTitle: string;
  headingDescription: string;
  imageSrc: string;
  imageAlt: string;
  caption: string;
}

export interface HomeReviewContent {
  text: string;
  author: string;
  stars: number;
  image?: string;
  imageAlt?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface HomeReviewsContent {
  title: string;
  subtitle: string;
  description: string;
  items: HomeReviewContent[];
}

export interface HomeNewsArticleContent {
  id: number;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
}

export interface HomeNewsContent {
  title: string;
  minutesReadLabel: string;
  readArticleLabel: string;
  viewAllLabel: string;
  articles: HomeNewsArticleContent[];
}

export interface HomeFashionImageContent {
  src: string;
  alt: string;
  label: string;
}

export interface HomeFashionContent {
  title: string;
  subtitle: string;
  viewFullLabel: string;
  images: HomeFashionImageContent[];
}

export interface HomeShowcaseCharacterContent {
  name: string;
  image: string;
  color: string;
}

export interface HomeCharactersShowcaseContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  characters: HomeShowcaseCharacterContent[];
}

export interface HomeCtaContent {
  joinLegendTitle: string;
  imageAlt: string;
  description: string;
  exploreLabel: string;
  newsletterLabel: string;
}

export interface HomePageContent {
  locale: HomeLocale;
}

export interface HomeJsonLd {
  organization: Record<string, unknown>;
  comicSeries: Record<string, unknown>;
  website: Record<string, unknown>;
}

export interface HomeSeoConfig {
  metadata: Metadata;
  jsonLd: HomeJsonLd;
}
