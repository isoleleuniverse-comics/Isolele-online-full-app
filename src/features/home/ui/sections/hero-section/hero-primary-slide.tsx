import Link from "next/link";
import { motion } from "framer-motion";
import type { Theme } from "@/shared/contexts/theme-context";
import { TypingText } from "./typing-text";

interface HeroPrimarySlideProps {
  theme: Theme;
  t: (key: string) => string;
}

export function HeroPrimarySlide({ theme, t }: HeroPrimarySlideProps) {
  return (
    <motion.div
      key="slide-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20 lg:py-0"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1
          className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-wider mb-4 min-h-[1.2em]"
          style={{
            color: theme.colors.textPrimary,
            textShadow: `0 0 40px ${theme.colors.accentPrimary}40`,
          }}
        >
          <TypingText text="ZAIIRE" delay={300} />
        </h1>
        <p className="text-lg sm:text-2xl lg:text-3xl font-bold tracking-widest mb-2" style={{ color: theme.colors.accentPrimary }}>
          {t("hero_prince_kongo")}
        </p>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-wide mb-6"
        style={{ color: theme.colors.textSecondary }}
      >
        {t("hero_necklace_destiny")}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
        style={{ color: theme.colors.textSecondary }}
      >
        {t("hero_description")}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Link href="/#hero">
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
            {t("hero_buy_now")}
          </motion.button>
        </Link>
        <Link href="/#hero">
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
            {t("hero_discover")}
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
