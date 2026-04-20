"use client";

import type { FooterContext } from "./footer.types";

export function FooterTopBorder({ currentTheme }: Pick<FooterContext, "currentTheme">) {
  return (
    <div
      className="h-1"
      style={{
        background: `linear-gradient(90deg, transparent, ${currentTheme.colors.accentPrimary}, transparent)`,
      }}
    />
  );
}

