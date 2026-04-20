import dynamic from "next/dynamic";
import { BookHeroSection, UniverseSection, CharactersSection } from "@/features/home/ui/sections";
import { OrganizationJsonLd, ComicSeriesJsonLd, WebsiteJsonLd } from "@/shared/seo/json-ld";

const StorySection = dynamic(
  () => import("@/features/home/ui/components/story-section").then((mod) => ({ default: mod.StorySection })),
  {
    loading: () => <div className="h-96 bg-background" />,
    ssr: true,
  }
);

const ProductsSection = dynamic(
  () => import("@/features/home/ui/components/products-section").then((mod) => ({ default: mod.ProductsSection })),
  {
    loading: () => <div className="h-96 bg-background" />,
    ssr: true,
  }
);

const FounderPreview = dynamic(
  () => import("@/features/home/ui/components/founder-preview").then((mod) => ({ default: mod.FounderPreview })),
  {
    loading: () => <div className="h-96 bg-background" />,
    ssr: true,
  }
);

const BookstoreDisplaySection = dynamic(
  () =>
    import("@/features/home/ui/components/bookstore-display-section").then((mod) => ({
      default: mod.BookstoreDisplaySection,
    })),
  {
    loading: () => <div className="h-96 bg-background" />,
    ssr: true,
  }
);

const ReviewsSection = dynamic(
  () => import("@/features/home/ui/components/reviews-section").then((mod) => ({ default: mod.ReviewsSection })),
  {
    loading: () => <div className="h-96 bg-background" />,
    ssr: true,
  }
);

const NewsSection = dynamic(
  () => import("@/features/home/ui/components/news-section").then((mod) => ({ default: mod.NewsSection })),
  {
    loading: () => <div className="h-96 bg-background" />,
    ssr: true,
  }
);

const FashionPreview = dynamic(
  () => import("@/features/home/ui/components/fashion-preview").then((mod) => ({ default: mod.FashionPreview })),
  {
    loading: () => <div className="h-96 bg-background" />,
    ssr: true,
  }
);

const CharactersShowcase = dynamic(
  () =>
    import("@/features/home/ui/components/characters-showcase").then((mod) => ({
      default: mod.CharactersShowcase,
    })),
  {
    loading: () => <div className="h-96 bg-background" />,
    ssr: true,
  }
);

const CtaSection = dynamic(
  () => import("@/features/home/ui/components/cta-section").then((mod) => ({ default: mod.CtaSection })),
  {
    loading: () => <div className="h-96 bg-background" />,
    ssr: true,
  }
);

export function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <ComicSeriesJsonLd />
      <WebsiteJsonLd />

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
    </>
  );
}
