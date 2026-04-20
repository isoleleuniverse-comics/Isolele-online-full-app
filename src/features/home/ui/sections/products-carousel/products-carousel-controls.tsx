import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Theme } from "@/lib/theme-context";

interface ProductsCarouselControlsProps {
  totalSlides: number;
  activeSlide: number;
  autoPlay: boolean;
  theme: Theme;
  onSelect: (index: number) => void;
  onPrevious: () => void;
  onNext: () => void;
}

export function ProductsCarouselControls({
  totalSlides,
  activeSlide,
  autoPlay,
  theme,
  onSelect,
  onPrevious,
  onNext,
}: ProductsCarouselControlsProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="flex flex-wrap gap-3 justify-center">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => onSelect(idx)}
            className="transition-all duration-300 rounded-full"
            style={{
              width: activeSlide === idx ? "32px" : "12px",
              height: "12px",
              backgroundColor: activeSlide === idx ? theme.colors.accentPrimary : `${theme.colors.textSecondary}50`,
            }}
            whileHover={{ scale: 1.2 }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <div className="flex gap-4">
        <motion.button
          onClick={onPrevious}
          className="p-4 rounded-full transition-all"
          style={{
            backgroundColor: `${theme.colors.accentPrimary}20`,
            color: theme.colors.accentPrimary,
          }}
          whileHover={{
            scale: 1.1,
            backgroundColor: `${theme.colors.accentPrimary}40`,
          }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </motion.button>
        <motion.button
          onClick={onNext}
          className="p-4 rounded-full transition-all"
          style={{
            backgroundColor: `${theme.colors.accentPrimary}20`,
            color: theme.colors.accentPrimary,
          }}
          whileHover={{
            scale: 1.1,
            backgroundColor: `${theme.colors.accentPrimary}40`,
          }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </motion.button>
      </div>

      <motion.div
        className="text-sm px-4 py-2 rounded-full"
        style={{
          backgroundColor: `${theme.colors.accentPrimary}20`,
          color: theme.colors.accentPrimary,
        }}
        animate={{ opacity: autoPlay ? 1 : 0.5 }}
      >
        {autoPlay ? "Auto-play" : "Paused"}
      </motion.div>
    </div>
  );
}
