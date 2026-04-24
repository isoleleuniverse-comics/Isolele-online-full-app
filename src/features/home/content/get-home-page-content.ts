import { bookHeroEn } from "./book-hero/en";
import { bookHeroFr } from "./book-hero/fr";
import { universeEn } from "./universe/en";
import { universeFr } from "./universe/fr";
import { charactersEn } from "./characters/en";
import { charactersFr } from "./characters/fr";
import { storyEn } from "./story/en";
import { storyFr } from "./story/fr";
import { productsEn } from "./products/en";
import { productsFr } from "./products/fr";
import { founderEn } from "./founder/en";
import { founderFr } from "./founder/fr";
import { bookstoreDisplayEn } from "./bookstore-display/en";
import { bookstoreDisplayFr } from "./bookstore-display/fr";
import { reviewsEn } from "./reviews/en";
import { reviewsFr } from "./reviews/fr";
import { newsEn } from "./news/en";
import { newsFr } from "./news/fr";
import { fashionEn } from "./fashion/en";
import { fashionFr } from "./fashion/fr";
import { charactersShowcaseEn } from "./characters-showcase/en";
import { charactersShowcaseFr } from "./characters-showcase/fr";
import { ctaEn } from "./cta/en";
import { ctaFr } from "./cta/fr";
import type { HomeLocale, HomePageContent } from "./types";

const contentByLocale: Record<HomeLocale, Omit<HomePageContent, "locale">> = {
  en: {
    bookHero: bookHeroEn,
    universe: universeEn,
    characters: charactersEn,
    story: storyEn,
    products: productsEn,
    founder: founderEn,
    bookstoreDisplay: bookstoreDisplayEn,
    reviews: reviewsEn,
    news: newsEn,
    fashion: fashionEn,
    charactersShowcase: charactersShowcaseEn,
    cta: ctaEn,
  },
  fr: {
    bookHero: bookHeroFr,
    universe: universeFr,
    characters: charactersFr,
    story: storyFr,
    products: productsFr,
    founder: founderFr,
    bookstoreDisplay: bookstoreDisplayFr,
    reviews: reviewsFr,
    news: newsFr,
    fashion: fashionFr,
    charactersShowcase: charactersShowcaseFr,
    cta: ctaFr,
  },
};

export function getHomePageContent(locale: HomeLocale): HomePageContent {
  return {
    locale,
    ...contentByLocale[locale],
  };
}
