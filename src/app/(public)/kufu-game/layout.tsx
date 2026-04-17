import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "African Games - KUFU The Crown Game",
  description:
    "Play KUFU, one of the signature African games from ISOLELE, where strategy, royalty, and cultural symbolism meet.",
  keywords: [
    "african games",
    "african board games",
    "kufu game",
    "isolele game",
    "strategy african game",
  ],
  alternates: {
    canonical: "/kufu-game",
  },
  openGraph: {
    type: "website",
    url: "/kufu-game",
    title: "KUFU - African Games by ISOLELE",
    description:
      "Discover KUFU, an African games experience from ISOLELE blending strategy, clan power, and ancestral symbolism.",
  },
  twitter: {
    card: "summary_large_image",
    title: "KUFU - African Games by ISOLELE",
    description:
      "KUFU is a premium African games experience rooted in royal strategy and cultural storytelling.",
  },
};

export default function KufuGameLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
