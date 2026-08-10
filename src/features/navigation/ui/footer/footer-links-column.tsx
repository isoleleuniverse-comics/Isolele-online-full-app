"use client";

import Link from "next/link";
import { useLanguage } from "@/shared/i18n/language-context";
import { withLocale } from "@/shared/i18n/locales";
import type { FooterLink, FooterSectionContext } from "./footer.types";

interface FooterLinksColumnProps extends FooterSectionContext {
  title: string;
  links: FooterLink[];
}

export function FooterLinksColumn({ currentTheme, title, links }: FooterLinksColumnProps) {
  const { locale } = useLanguage();

  return (
    <div>
      <h3 className="mb-6 text-lg font-bold tracking-wider" style={{ color: currentTheme.colors.accentPrimary }}>
        {title}
      </h3>
      <ul className="flex flex-wrap items-center gap-x-3 gap-y-3">
        {links.map((link, index) => (
          <li key={`${link.label}-${link.href}`} className="flex items-center gap-3">
            <Link
              href={withLocale(locale, link.href)}
              className="inline-block text-xs font-black uppercase tracking-[0.18em] transition-all hover:-translate-y-0.5"
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
            {index < links.length - 1 ? (
              <span aria-hidden="true" className="text-xs font-black" style={{ color: currentTheme.colors.accentPrimary }}>
                ·
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
