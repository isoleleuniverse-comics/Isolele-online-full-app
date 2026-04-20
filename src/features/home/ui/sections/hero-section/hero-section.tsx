"use client";

import { AnimatePresence } from "framer-motion";
import { useTheme } from "@/lib/theme-context";
import { useLanguage } from "@/lib/language-context";
import { HeroBackgroundEffects } from "./hero-background-effects";
import { HeroPrimarySlide } from "./hero-primary-slide";
import { HeroSecondarySlide } from "./hero-secondary-slide";
import { HeroSlideIndicators } from "./hero-slide-indicators";
import { HeroScrollIndicator } from "./hero-scroll-indicator";
import { useHeroRotation } from "./use-hero-rotation";

export function HeroSection() {
  const { currentTheme } = useTheme();
  const { t } = useLanguage();
  const { activeSlide, setActiveSlide } = useHeroRotation();

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <HeroBackgroundEffects theme={currentTheme} />

      <div className="relative z-10 w-full">
        <AnimatePresence mode="wait">
          {activeSlide === 0 ? (
            <HeroPrimarySlide theme={currentTheme} t={t} />
          ) : (
            <HeroSecondarySlide />
          )}
        </AnimatePresence>
      </div>

      <HeroSlideIndicators
        activeSlide={activeSlide}
        onSelect={setActiveSlide}
        activeColor={currentTheme.colors.accentPrimary}
        inactiveColor={`${currentTheme.colors.textSecondary}50`}
      />

      <HeroScrollIndicator
        borderColor={currentTheme.colors.textSecondary}
        dotColor={currentTheme.colors.accentPrimary}
      />
    </section>
  );
}
