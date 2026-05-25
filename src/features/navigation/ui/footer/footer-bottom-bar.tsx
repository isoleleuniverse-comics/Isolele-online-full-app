"use client";

import Link from "next/link";
import type { FooterSectionContext } from "./footer.types";
import { FooterLocaleSwitcher } from "./footer-locale-switcher";

export function FooterBottomBar({ currentTheme, content }: FooterSectionContext) {
  return (
    <div
      className="mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row"
      style={{ borderColor: `${currentTheme.colors.accentPrimary}20` }}
    >
      <p className="flex items-center gap-2 text-center text-sm md:text-left" style={{ color: currentTheme.colors.textSecondary }}>
        {content.copyright}
      </p>
      <div className="flex flex-col items-center gap-4 md:items-end">
        <FooterLocaleSwitcher currentTheme={currentTheme} />
        <div className="flex flex-wrap justify-center gap-4 text-sm">
        {content.bottomLinks.map((link, index) => (
          <div key={`${link.label}-${link.href}`} className="flex items-center gap-4">
            <Link
              href={link.href}
              className="transition-colors"
              style={{ color: currentTheme.colors.textSecondary }}
              onMouseEnter={(event) => {
                event.currentTarget.style.color = currentTheme.colors.accentPrimary;
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.color = currentTheme.colors.textSecondary;
              }}
            >
              {link.label}
            </Link>
            {index < content.bottomLinks.length - 1 ? (
              <span style={{ color: currentTheme.colors.textSecondary }}>|</span>
            ) : null}
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
