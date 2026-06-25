import { lazySection } from "@/shared/lib/lazy-section";
import type { HomeJsonLd, HomeLocale } from "../content";
import { getHomePageContent } from "../content";
import { HomeContentProvider } from "../model";
import { HomeStructuredData } from "../seo/home-structured-data";

// Eagerly loaded — above the fold
import { BookHeroSection } from "./sections/book-hero-section/book-hero-section";
import { UniverseSection } from "./sections/universe-section/universe-section";
import { CharactersSection } from "./sections/characters-section/characters-section";

// Lazily loaded — below the fold
const StorySection = lazySection(() => import("./sections/story-section/story-section"), "StorySection");
const ProductsSection = lazySection(() => import("./sections/products-section/products-section"), "ProductsSection");
const FounderPreview = lazySection(() => import("./sections/founder-preview/founder-preview"), "FounderPreview");
const BookstoreDisplaySection = lazySection(() => import("./sections/bookstore-display-section/bookstore-display-section"), "BookstoreDisplaySection");
const ReviewsSection = lazySection(() => import("./sections/reviews-section/reviews-section"), "ReviewsSection");
const NewsSection = lazySection(() => import("./sections/news-section/news-section"), "NewsSection");
const FashionPreview = lazySection(() => import("./sections/fashion-preview/fashion-preview"), "FashionPreview");
const CharactersShowcase = lazySection(() => import("./sections/characters-showcase/characters-showcase"), "CharactersShowcase");
const CtaSection = lazySection(() => import("./sections/cta-section/cta-section"), "CtaSection");

interface HomePageProps {
  locale: HomeLocale;
  seo: HomeJsonLd;
  latestArticles: any[];
}

export function HomePage({ locale, seo, latestArticles }: HomePageProps) {
  const content = getHomePageContent(locale);

  return (
    <HomeContentProvider content={content}>
      <HomeStructuredData organization={seo.organization} comicSeries={seo.comicSeries} website={seo.website} />

      <BookHeroSection />
      <UniverseSection />
      <CharactersSection />
      <StorySection />
      <ProductsSection />
      <FounderPreview />
      <BookstoreDisplaySection />
      <ReviewsSection />
      <NewsSection  latestArticles={latestArticles} />
      <FashionPreview />
      <CharactersShowcase />
      <CtaSection />
    </HomeContentProvider>
  );
}
