"use client";

import Link from "next/link";
import type { FooterLink, FooterSectionContext } from "./footer.types";

interface FooterLinksColumnProps extends FooterSectionContext {
  title: string;
  links: FooterLink[];
}

export function FooterLinksColumn({ currentTheme, title, links }: FooterLinksColumnProps) {
  return (
    <div>
      <h3 className="mb-6 text-lg font-bold tracking-wider" style={{ color: currentTheme.colors.accentPrimary }}>
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={`${link.label}-${link.href}`}>
            <Link
              href={link.href}
              className="inline-block text-sm transition-colors hover:translate-x-1"
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
          </li>
        ))}
      </ul>
    </div>
  );
}
