"use client";

import { useTheme } from "@/shared/contexts/theme-context";
import { useLanguage } from "@/shared/i18n/language-context";
import { getNavigationContent } from "@/features/navigation/content/nav.content";
import { getFooterContent } from "./footer.data";
import { FooterTopBorder } from "./footer-top-border";
import { FooterBrand } from "./footer-brand";
import { FooterLinksColumn } from "./footer-links-column";
import { FooterBottomBar } from "./footer-bottom-bar";
import { FooterBackground } from "./footer-background";

export function SiteFooter() {
  const { currentTheme } = useTheme();
  const { locale } = useLanguage();
  const navigation = getNavigationContent(locale);
  const footerContent = getFooterContent(locale, navigation.footer);

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: currentTheme.colors.backgroundSecondary }}>
      <FooterTopBorder currentTheme={currentTheme} />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <FooterBrand currentTheme={currentTheme} content={footerContent} />
          </div>
          <div>
            <FooterLinksColumn
              currentTheme={currentTheme}
              content={footerContent}
              title={footerContent.resourcesTitle}
              links={footerContent.resourceLinks ?? []}
            />
          </div>
        </div>

        <FooterBottomBar currentTheme={currentTheme} content={footerContent} />
      </div>

      <FooterBackground currentTheme={currentTheme} />
    </footer>
  );
}
