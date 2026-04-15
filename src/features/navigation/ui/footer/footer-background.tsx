"use client";

import type { FooterContext } from "./footer.types";

export function FooterBackground({ currentTheme }: Pick<FooterContext, "currentTheme">) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
      <div
        className="absolute -bottom-1/2 -right-1/4 w-[800px] h-[800px] rounded-full"
        style={{
          background: `radial-gradient(circle, ${currentTheme.colors.accentPrimary} 0%, transparent 70%)`,
        }}
      />
    </div>
  );
}

