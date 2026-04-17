"use client";

import { useState } from "react";
import { SiteFooter } from "@/features/navigation/ui/site-footer";
import { LoadingScreen } from "@/components/loading-screen";
import { SiteHeader } from "@/components/site-header";

export function PublicShell({ children }: { children: React.ReactNode }) {
  const [showLoading, setShowLoading] = useState(true);

  return (
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
        <main className="flex-1 w-full pb-28 pt-20 lg:pb-0 lg:pt-24">{children}</main>
        <SiteFooter />
      </div>
    </>
  );
}
