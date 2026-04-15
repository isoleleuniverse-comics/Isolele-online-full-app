"use client";

import { useLanguage } from "@/lib/language-context";
import { HERO_SLIDES } from "./data";
import type { LocalizedHeroSlide } from "./types";
import { useBookHeroCarousel } from "./use-book-hero-carousel";
import { BookHeroSlide } from "./book-hero-slide";
import { BookHeroNavigation } from "./book-hero-navigation";

export function BookHeroSection() {
  const { t } = useLanguage();
  const { current, direction, selectSlide } = useBookHeroCarousel(HERO_SLIDES.length);

  const slide = HERO_SLIDES[current];
  if (!slide) return null;

  const localizedSlide: LocalizedHeroSlide = {
    ...slide,
    tag: t(slide.tagKey),
    title: t(slide.titleKey),
    subtitle: t(slide.subtitleKey),
    description: t(slide.descKey),
    buttonText: t(slide.buttonKey),
  };

  return (
    <section className="relative w-full h-screen overflow-hidden" style={{ backgroundColor: "#000" }}>
      <BookHeroSlide slide={slide} localizedSlide={localizedSlide} current={current} direction={direction} />
      <BookHeroNavigation count={HERO_SLIDES.length} current={current} onSelect={selectSlide} />
    </section>
  );
}

