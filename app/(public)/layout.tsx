"use client"

import { useState, useEffect, type ReactNode } from "react"
import { ThemeProvider } from "@/lib/theme-context"
import { LanguageProvider } from "@/lib/language-context"
import { CartProvider } from "@/lib/cart-context"
import { NotificationsProvider } from "@/lib/notifications-context"
import { BillHistoryProvider } from "@/lib/bill-history-context"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CartDrawer } from "@/components/cart-drawer"
import { AnalyticsProvider } from "@/components/analytics-provider"

export default function PublicLayout({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider>
      <LanguageProvider>
        <CartProvider>
          <NotificationsProvider>
            <BillHistoryProvider>
              <AnalyticsProvider>
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
