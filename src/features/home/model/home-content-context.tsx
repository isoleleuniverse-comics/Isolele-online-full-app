"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { HomePageContent } from "@/features/home/content";

const HomeContentContext = createContext<HomePageContent | null>(null);

export function HomeContentProvider({
  content,
  children,
}: {
  content: HomePageContent;
  children: ReactNode;
}) {
  return <HomeContentContext.Provider value={content}>{children}</HomeContentContext.Provider>;
}

export function useHomePageContent() {
  const context = useContext(HomeContentContext);

  if (!context) {
    throw new Error("useHomePageContent must be used within a HomeContentProvider");
  }

  return context;
}
