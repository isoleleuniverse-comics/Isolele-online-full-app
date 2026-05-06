"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { RoyalHistoryPageContent } from "@/features/royal-history/model/royal-history.data";
import { useTheme } from "@/shared/contexts/theme-context";

interface Props {
  cta: RoyalHistoryPageContent["cta"];
}

export function RoyalHistoryCtaSection({ cta }: Props) {
  const { currentTheme } = useTheme();

  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl p-8 text-center sm:p-10"
        style={{ backgroundColor: currentTheme.colors.background, border: `1px solid ${currentTheme.colors.accentPrimary}35`, boxShadow: `0 24px 60px ${currentTheme.colors.accentPrimary}14` }}
      >
        <div className="relative">
          <p className="mb-6 text-base font-semibold sm:text-lg" style={{ color: currentTheme.colors.textSecondary }}>
            {cta.text}
          </p>

          <Link href={cta.href}>
            <motion.button
              className="inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 font-black uppercase tracking-wider"
              style={{ backgroundColor: currentTheme.colors.accentPrimary, color: currentTheme.colors.background }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              {cta.label}
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
