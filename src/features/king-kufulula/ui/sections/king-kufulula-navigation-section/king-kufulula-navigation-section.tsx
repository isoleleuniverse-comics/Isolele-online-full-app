"use client";

import type { KingKufululaPageContent } from "@/features/king-kufulula/model/king-kufulula.data";
import { useTheme } from "@/shared/contexts/theme-context";

interface Props {
  navigation: KingKufululaPageContent["navigation"];
}

export function KingKufululaNavigationSection({ navigation }: Props) {
  const { currentTheme } = useTheme();

  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-wrap gap-3">
        {navigation.items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="rounded-full px-4 py-2 text-sm font-semibold transition-colors"
            style={{ backgroundColor: `${currentTheme.colors.backgroundSecondary}`, color: currentTheme.colors.textPrimary, border: `1px solid ${currentTheme.colors.accentPrimary}20` }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </section>
  );
}
