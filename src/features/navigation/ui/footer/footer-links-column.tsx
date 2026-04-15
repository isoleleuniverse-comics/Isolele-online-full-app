"use client";

import Link from "next/link";
import type { FooterContext, FooterLink } from "./footer.types";

interface FooterLinksColumnProps extends FooterContext {
  titleKey: string;
  links: FooterLink[];
}

export function FooterLinksColumn({ currentTheme, t, titleKey, links }: FooterLinksColumnProps) {
  return (
    <div>
      <h3 className="text-lg font-bold tracking-wider mb-6" style={{ color: currentTheme.colors.accentPrimary }}>
        {t(titleKey)}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className="text-sm transition-colors hover:translate-x-1 inline-block"
              style={{ color: currentTheme.colors.textSecondary }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = currentTheme.colors.accentPrimary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = currentTheme.colors.textSecondary;
              }}
            >
              {t(link.key)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

