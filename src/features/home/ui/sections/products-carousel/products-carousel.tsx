"use client";

import { useTheme } from "@/lib/theme-context";
import { useLanguage } from "@/lib/language-context";
import { PRODUCT_SLIDES } from "./data";
import { useProductsCarousel } from "./use-products-carousel";
import { ProductsCarouselBackground } from "./products-carousel-background";
import { ProductsCarouselContent } from "./products-carousel-content";
import { ProductsCarouselControls } from "./products-carousel-controls";
import { ProductsCarouselScrollIndicator } from "./products-carousel-scroll-indicator";

export function ProductsCarousel() {
  const { currentTheme } = useTheme();
  const { currentLanguage } = useLanguage();
  const { activeSlide, autoPlay, nextSlide, prevSlide, setActiveSlide, stopAutoPlay } = useProductsCarousel();

  const currentProduct = PRODUCT_SLIDES[activeSlide];
  if (!currentProduct) return null;

  const isEnglish = currentLanguage.code === "en";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ProductsCarouselBackground image={currentProduct.image} theme={currentTheme} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ProductsCarouselContent
            activeSlide={activeSlide}
            product={currentProduct}
            isEnglish={isEnglish}
            theme={currentTheme}
          />

          <ProductsCarouselControls
            totalSlides={PRODUCT_SLIDES.length}
            activeSlide={activeSlide}
            autoPlay={autoPlay}
            theme={currentTheme}
            onSelect={(index) => {
              setActiveSlide(index);
              stopAutoPlay();
            }}
            onPrevious={() => {
              prevSlide();
              stopAutoPlay();
            }}
            onNext={() => {
              nextSlide();
              stopAutoPlay();
            }}
          />
        </div>
      </div>

      <ProductsCarouselScrollIndicator
        borderColor={currentTheme.colors.textSecondary}
        dotColor={currentTheme.colors.accentPrimary}
      />
    </section>
  );
}
