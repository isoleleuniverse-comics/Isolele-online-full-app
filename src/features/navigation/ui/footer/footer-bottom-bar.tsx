"use client";

import Link from "next/link";
import type { FooterContext } from "./footer.types";

export function FooterBottomBar({ currentTheme, t }: FooterContext) {
  return (
    <div
      className="mt-16 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
      style={{ borderColor: `${currentTheme.colors.accentPrimary}20` }}
    >
      <p className="text-sm text-center md:text-left flex items-center gap-2" style={{ color: currentTheme.colors.textSecondary }}>
        {t("footer_copyright")}
      </p>
      <div className="flex flex-wrap justify-center gap-4 text-sm">
        <Link
          href="/sitemap"
          className="transition-colors"
          style={{ color: currentTheme.colors.textSecondary }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = currentTheme.colors.accentPrimary;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = currentTheme.colors.textSecondary;
          }}
        >
          {t("site_map")}
        </Link>
        <span style={{ color: currentTheme.colors.textSecondary }}>|</span>
        <Link
          href="/accessibility"
          className="transition-colors"
          style={{ color: currentTheme.colors.textSecondary }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = currentTheme.colors.accentPrimary;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = currentTheme.colors.textSecondary;
          }}
        >
          {t("accessibility")}
        </Link>
        <span style={{ color: currentTheme.colors.textSecondary }}>|</span>
        <button
          className="transition-colors"
          style={{ color: currentTheme.colors.textSecondary }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = currentTheme.colors.accentPrimary;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = currentTheme.colors.textSecondary;
          }}
        >
          {t("cookie_settings")}
        </button>
      </div>
    </div>
  );
}

