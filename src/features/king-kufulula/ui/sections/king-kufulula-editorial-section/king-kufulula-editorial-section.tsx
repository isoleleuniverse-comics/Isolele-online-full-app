"use client";

import { motion } from "framer-motion";
import type { KingKufululaPageContent } from "@/features/king-kufulula/model/king-kufulula.data";
import { useTheme } from "@/shared/contexts/theme-context";

interface Props {
  editorial: KingKufululaPageContent["editorial"];
}

export function KingKufululaEditorialSection({ editorial }: Props) {
  const { currentTheme } = useTheme();

  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-5xl gap-10">
        {editorial.sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <motion.article
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.04 }}
              className="relative overflow-hidden rounded-3xl p-6 sm:p-8"
              style={{ backgroundColor: currentTheme.colors.backgroundSecondary, border: `1px solid ${currentTheme.colors.accentPrimary}22` }}
            >
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-2xl font-black tracking-tight sm:text-3xl" style={{ color: currentTheme.colors.textPrimary }}>
                    {section.title}
                  </h2>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl" style={{ backgroundColor: `${currentTheme.colors.accentPrimary}18`, border: `1px solid ${currentTheme.colors.accentPrimary}26` }}>
                    <Icon className="h-5 w-5" style={{ color: currentTheme.colors.accentPrimary }} />
                  </div>
                </div>

                <div className="mt-4 h-1 w-24 rounded-full" style={{ backgroundColor: currentTheme.colors.accentPrimary }} />

                <p className="mt-5 text-base leading-relaxed sm:text-lg" style={{ color: currentTheme.colors.textSecondary }}>
                  {section.body}
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
