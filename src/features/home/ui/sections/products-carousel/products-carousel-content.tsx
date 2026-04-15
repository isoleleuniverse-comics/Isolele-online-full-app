import Link from "next/link";
import { motion } from "framer-motion";
import type { Theme } from "@/lib/theme-context";
import type { ProductSlide } from "./types";

interface ProductsCarouselContentProps {
  activeSlide: number;
  product: ProductSlide;
  isEnglish: boolean;
  theme: Theme;
}

export function ProductsCarouselContent({
  activeSlide,
  product,
  isEnglish,
  theme,
}: ProductsCarouselContentProps) {
  return (
    <motion.div
      key={`content-${activeSlide}`}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <div>
        <h2
          className="text-5xl sm:text-6xl font-black tracking-wider mb-2"
          style={{
            color: theme.colors.textPrimary,
            textShadow: `0 0 40px ${theme.colors.accentPrimary}40`,
          }}
        >
          {isEnglish ? product.title : product.titleFr}
        </h2>
        <p className="text-2xl sm:text-3xl font-bold tracking-widest" style={{ color: theme.colors.accentPrimary }}>
          {isEnglish ? product.subtitle : product.subtitleFr}
        </p>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg leading-relaxed max-w-xl"
        style={{ color: theme.colors.textSecondary }}
      >
        {isEnglish ? product.description : product.descriptionFr}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 pt-4"
      >
        <Link href={product.link}>
          <motion.button
            className="px-8 py-4 rounded-lg text-lg font-bold tracking-wider transition-all"
            style={{
              backgroundColor: theme.colors.accentPrimary,
              color: theme.colors.background,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 0 30px ${theme.colors.accentPrimary}80`,
            }}
            whileTap={{ scale: 0.95 }}
          >
            {isEnglish ? "DISCOVER" : "DECOUVRIR"}
          </motion.button>
        </Link>
        <Link href="/shop">
          <motion.button
            className="px-8 py-4 rounded-lg text-lg font-bold tracking-wider transition-all border-2"
            style={{
              borderColor: theme.colors.accentPrimary,
              color: theme.colors.accentPrimary,
              backgroundColor: "transparent",
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: `${theme.colors.accentPrimary}20`,
            }}
            whileTap={{ scale: 0.95 }}
          >
            {isEnglish ? "SHOP NOW" : "ACHETER"}
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
