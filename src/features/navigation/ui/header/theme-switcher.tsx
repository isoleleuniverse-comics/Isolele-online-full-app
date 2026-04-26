"use client";

import { Palette } from "lucide-react";
import { useTheme, themes } from "@/shared/contexts/theme-context";

export function ThemeSwitcher() {
  const { currentTheme, setTheme } = useTheme();

  return (
    <div className="relative group/theme">
      <button
        className="rounded-full border p-2"
        style={{
          color: currentTheme.colors.textSecondary,
          borderColor: `${currentTheme.colors.accentPrimary}30`,
        }}
        aria-label="Theme switcher"
      >
        <Palette className="h-4 w-4" />
      </button>
      <div
        className="invisible absolute right-0 top-full z-20 mt-2 flex gap-2 rounded-lg border p-2 opacity-0 shadow-xl transition-all group-hover/theme:visible group-hover/theme:opacity-100"
        style={{
          backgroundColor: currentTheme.colors.background,
          borderColor: `${currentTheme.colors.accentPrimary}35`,
        }}
      >
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => setTheme(theme.id)}
            className="h-6 w-6 rounded-full border"
            style={{
              backgroundColor: theme.colors.accentPrimary,
              borderColor: theme.id === currentTheme.id ? "#FFFFFF" : "transparent",
            }}
            title={theme.name}
          />
        ))}
      </div>
    </div>
  );
}
