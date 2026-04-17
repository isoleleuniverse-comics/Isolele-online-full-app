"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "@/shared/contexts/theme-context";
import { LanguageProvider } from "@/shared/i18n/language-context";
import { CartProvider } from "@/shared/cart/cart-context";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <CartProvider>{children}</CartProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
