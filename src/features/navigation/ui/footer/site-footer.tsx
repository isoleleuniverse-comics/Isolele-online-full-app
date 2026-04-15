"use client";

import { useTheme } from "@/lib/theme-context";
import { useLanguage } from "@/lib/language-context";
import { quickLinks, resourceLinks } from "./footer.data";
import { FooterTopBorder } from "./footer-top-border";
import { FooterBrand } from "./footer-brand";
import { FooterLinksColumn } from "./footer-links-column";
import { FooterNewsletter } from "./footer-newsletter";
import { FooterBottomBar } from "./footer-bottom-bar";
import { FooterBackground } from "./footer-background";

export function SiteFooter() {
  const { currentTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: currentTheme.colors.backgroundSecondary }}>
      <FooterTopBorder currentTheme={currentTheme} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <FooterBrand currentTheme={currentTheme} t={t} />
          <FooterLinksColumn currentTheme={currentTheme} t={t} titleKey="footer_explore" links={quickLinks} />
          <FooterLinksColumn currentTheme={currentTheme} t={t} titleKey="footer_resources" links={resourceLinks} />
          <FooterNewsletter currentTheme={currentTheme} t={t} />
        </div>

        <FooterBottomBar currentTheme={currentTheme} t={t} />
      </div>

      <FooterBackground currentTheme={currentTheme} />
    </footer>
  );
}

