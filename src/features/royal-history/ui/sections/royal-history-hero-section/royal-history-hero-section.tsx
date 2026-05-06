"use client";

import { motion } from "framer-motion";
import { Crown, Sparkles } from "lucide-react";
import type { RoyalHistoryPageContent } from "@/features/royal-history/model/royal-history.data";
import { useTheme } from "@/shared/contexts/theme-context";

interface Props {
  hero: RoyalHistoryPageContent["hero"];
}

export function RoyalHistoryHeroSection({ hero }: Props) {
  const { currentTheme } = useTheme();

  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold tracking-widest"
          style={{ backgroundColor: `${currentTheme.colors.accentPrimary}20`, color: currentTheme.colors.accentPrimary, border: `1px solid ${currentTheme.colors.accentPrimary}30` }}
        >
          <Crown className="h-4 w-4" />
          {hero.badge}
          <Sparkles className="h-4 w-4" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.06 }}
          className="mt-6 text-4xl font-black tracking-tight text-balance sm:text-5xl lg:text-6xl"
          style={{ color: currentTheme.colors.textPrimary, lineHeight: 1.05 }}
        >
          {hero.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.16 }}
          className="mt-6 grid gap-3 text-lg leading-relaxed sm:text-xl"
          style={{ color: currentTheme.colors.textSecondary }}
        >
          {hero.lead.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
