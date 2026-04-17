"use client";

import { characterFilters } from "@/features/characters/model/characters.data";
import { useTheme } from "@/lib/theme-context";

interface CharactersFilterBarProps {
  activeFilter: string;
  onChangeFilter: (filterId: string) => void;
}

export function CharactersFilterBar({ activeFilter, onChangeFilter }: CharactersFilterBarProps) {
  const { currentTheme } = useTheme();

  return (
    <div
      className="sticky top-16 z-30 border-b px-4 py-4 lg:top-24"
      style={{
        backgroundColor: currentTheme.colors.background,
        borderColor: `${currentTheme.colors.accentPrimary}20`,
      }}
    >
      <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {characterFilters.map((filterOption) => (
          <button
            key={filterOption.id}
            onClick={() => onChangeFilter(filterOption.id)}
            className="shrink-0 rounded-full px-5 py-2 text-xs font-bold tracking-widest transition-all"
            style={{
              backgroundColor:
                activeFilter === filterOption.id
                  ? currentTheme.colors.accentPrimary
                  : `${currentTheme.colors.accentPrimary}12`,
              color: activeFilter === filterOption.id ? "#000000" : currentTheme.colors.textSecondary,
            }}
          >
            {filterOption.label}
          </button>
        ))}
      </div>
    </div>
  );
}

