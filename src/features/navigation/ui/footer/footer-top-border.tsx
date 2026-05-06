"use client";

import type { FooterSectionContext } from "./footer.types";

export function FooterTopBorder({ currentTheme }: Pick<FooterSectionContext, "currentTheme">) {
  return (
    <div
      className="h-1"
      style={{
        background: `linear-gradient(90deg, transparent, ${currentTheme.colors.accentPrimary}, transparent)`,
      }}
    />
  );
}

