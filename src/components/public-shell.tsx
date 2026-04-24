"use client";

import { useState } from "react";
import { SiteFooter } from "@/features/navigation/ui/site-footer";
import { LoadingScreen } from "@/components/loading-screen";
import { SiteHeader } from "@/components/site-header";
import type { SupportedLocale } from "@/lib/i18n/locales";
import { ThemeProvider } from "@/lib/theme-context";
import { LanguageProvider } from "@/lib/language-context";
import { CartProvider } from "@/lib/cart-context";

export function PublicShell({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: SupportedLocale;
}) {
  const [showLoading, setShowLoading] = useState(true);

  return (
    <ThemeProvider>
      <LanguageProvider initialLanguage={locale}>
        <CartProvider>
          <>
            {showLoading && <LoadingScreen onComplete={() => setShowLoading(false)} />}

            <div
              className="flex min-h-screen w-full flex-col overflow-x-hidden transition-colors duration-700"
              style={{
                backgroundColor: "var(--isolele-bg)",
                color: "var(--isolele-text)",
              }}
            >
              <SiteHeader />
              <main className="flex-1 w-full pb-28 pt-16 lg:pb-0 lg:pt-20">{children}</main>
              <SiteFooter />
            </div>
          </>
        </CartProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
