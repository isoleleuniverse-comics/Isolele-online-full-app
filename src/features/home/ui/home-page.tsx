import dynamic from "next/dynamic";
import type { HomeJsonLd, HomeLocale } from "@/features/home/content";
import { getHomePageContent } from "@/features/home/content";
import { HomeContentProvider } from "@/features/home/model";
import { HomeStructuredData } from "@/features/home/seo/home-structured-data";
import { BookHeroSection, UniverseSection, CharactersSection } from "@/features/home/ui/sections";

const StorySection = dynamic(
  () => import("@/features/home/ui/sections/story-section/story-section").then((mod) => ({ default: mod.StorySection })),
  {
    loading: () => <div className="h-96 bg-background" />,
    ssr: true,
  }
);

const ProductsSection = dynamic(
  () => import("@/features/home/ui/sections/products-section/products-section").then((mod) => ({ default: mod.ProductsSection })),
  {
    loading: () => <div className="h-96 bg-background" />,
    ssr: true,
  }
);

const FounderPreview = dynamic(
  () => import("@/features/home/ui/sections/founder-preview/founder-preview").then((mod) => ({ default: mod.FounderPreview })),
  {
    loading: () => <div className="h-96 bg-background" />,
    ssr: true,
  }
);

const BookstoreDisplaySection = dynamic(
  () =>
    import("@/features/home/ui/sections/bookstore-display-section/bookstore-display-section").then((mod) => ({
      default: mod.BookstoreDisplaySection,
    })),
  {
    loading: () => <div className="h-96 bg-background" />,
    ssr: true,
  }
);

const ReviewsSection = dynamic(
  () => import("@/features/home/ui/sections/reviews-section/reviews-section").then((mod) => ({ default: mod.ReviewsSection })),
  {
    loading: () => <div className="h-96 bg-background" />,
    ssr: true,
  }
);

const NewsSection = dynamic(
  () => import("@/features/home/ui/sections/news-section/news-section").then((mod) => ({ default: mod.NewsSection })),
  {
    loading: () => <div className="h-96 bg-background" />,
    ssr: true,
  }
);

const FashionPreview = dynamic(
  () => import("@/features/home/ui/sections/fashion-preview/fashion-preview").then((mod) => ({ default: mod.FashionPreview })),
  {
    loading: () => <div className="h-96 bg-background" />,
    ssr: true,
  }
);

const CharactersShowcase = dynamic(
  () =>
    import("@/features/home/ui/sections/characters-showcase/characters-showcase").then((mod) => ({
      default: mod.CharactersShowcase,
    })),
  {
    loading: () => <div className="h-96 bg-background" />,
    ssr: true,
  }
);

const CtaSection = dynamic(
  () => import("@/features/home/ui/sections/cta-section/cta-section").then((mod) => ({ default: mod.CtaSection })),
  {
    loading: () => <div className="h-96 bg-background" />,
    ssr: true,
  }
);

interface HomePageProps {
  locale: HomeLocale;
  seo: HomeJsonLd;
}

export function HomePage({ locale, seo }: HomePageProps) {
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
      <NewsSection />
      <FashionPreview />
      <CharactersShowcase />
      <CtaSection />
    </HomeContentProvider>
  );
}
