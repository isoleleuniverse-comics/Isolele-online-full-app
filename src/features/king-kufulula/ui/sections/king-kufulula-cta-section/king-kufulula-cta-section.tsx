"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { KingKufululaPageContent } from "@/features/king-kufulula/model/king-kufulula.data";
import { useTheme } from "@/shared/contexts/theme-context";

interface Props {
  cta: KingKufululaPageContent["cta"];
}

export function KingKufululaCtaSection({ cta }: Props) {
  const { currentTheme } = useTheme();

  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl p-8 text-center sm:p-10"
        style={{ backgroundColor: currentTheme.colors.background, border: `1px solid ${currentTheme.colors.accentPrimary}35`, boxShadow: `0 24px 60px ${currentTheme.colors.accentPrimary}14` }}
      >
        <div className="relative">
          <p className="mb-7 text-base font-semibold sm:text-lg" style={{ color: currentTheme.colors.textSecondary }}>
            {cta.eyebrow}
          </p>

          <div className="flex flex-col justify-center gap-3">
            {cta.links.map((link) => (
              <Link key={link.label} href={link.href}>
                <motion.button
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 font-black uppercase tracking-wider sm:w-auto"
                  style={{ backgroundColor: currentTheme.colors.accentPrimary, color: currentTheme.colors.background }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.label}
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
