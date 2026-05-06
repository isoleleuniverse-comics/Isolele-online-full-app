"use client";

import type { RoyalHistoryPageContent } from "@/features/royal-history/model/royal-history.data";
import { useTheme } from "@/shared/contexts/theme-context";

interface Props {
  intro: RoyalHistoryPageContent["intro"];
}

export function RoyalHistoryIntroSection({ intro }: Props) {
  const { currentTheme } = useTheme();

  return (
    <section className="px-4 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-wrap gap-3">
        {intro.items.map((item, index) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="rounded-full px-4 py-2 text-sm font-semibold transition-colors"
            style={{ backgroundColor: `${currentTheme.colors.backgroundSecondary}`, color: currentTheme.colors.textPrimary, border: `1px solid ${currentTheme.colors.accentPrimary}${index % 2 === 0 ? "20" : "10"}` }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </section>
  );
}
