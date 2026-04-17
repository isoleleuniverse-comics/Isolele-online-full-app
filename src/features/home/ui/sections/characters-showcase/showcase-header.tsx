"use client";

import { motion } from "framer-motion";
import type { ShowcaseLabels } from "./types";

interface ShowcaseHeaderProps {
  labels: ShowcaseLabels;
  isInView: boolean;
  accentColor: string;
  textPrimary: string;
  textSecondary: string;
}

export function ShowcaseHeader({
  labels,
  isInView,
  accentColor,
  textPrimary,
  textSecondary,
}: ShowcaseHeaderProps) {
  return (
    <div className="text-center mb-14">
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-xs font-bold tracking-[0.4em] mb-3"
        style={{ color: accentColor }}
      >
        ISOLELE UNIVERSE
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl sm:text-6xl font-black tracking-wider mb-4 text-balance"
        style={{ color: textPrimary }}
      >
        {labels.title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-base max-w-xl mx-auto text-balance"
        style={{ color: textSecondary }}
      >
        {labels.subtitle}
      </motion.p>
    </div>
  );
}
