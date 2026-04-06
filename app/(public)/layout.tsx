"use client"

import type { ReactNode } from "react"
import { useState } from "react"
import { ThemeProvider } from "@/lib/theme-context"
import { LanguageProvider } from "@/lib/language-context"
import { CartProvider } from "@/lib/cart-context"
import { NotificationsProvider } from "@/lib/notifications-context"
import { BillHistoryProvider } from "@/lib/bill-history-context"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CartDrawer } from "@/components/cart-drawer"
import { AnalyticsProvider } from "@/components/analytics-provider"
import { LoadingScreen } from "@/components/loading-screen"

export default function PublicLayout({ children }: { children: ReactNode }) {
  const [showLoading, setShowLoading] = useState(true)

  return (
    <ThemeProvider>
      <LanguageProvider>
        <CartProvider>
          <NotificationsProvider>
            <BillHistoryProvider>
              <AnalyticsProvider>
                {showLoading && <LoadingScreen onComplete={() => setShowLoading(false)} />}
                <div 
                  className="w-screen min-h-screen flex flex-col transition-colors duration-800 overflow-x-hidden"
                  style={{ 
                    backgroundColor: "var(--isolele-bg)",
                    color: "var(--isolele-text)"
                  }}
                >
                  <SiteHeader />
                  <main className="flex-1 w-full pb-28 lg:pb-0 lg:pt-24">
                    {children}
                  </main>
                  <SiteFooter />
                  <CartDrawer />
                </div>
              </AnalyticsProvider>
            </BillHistoryProvider>
          </NotificationsProvider>
        </CartProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}
