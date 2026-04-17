import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "African Comic Collection",
  description:
    "Explore ISOLELE African comic stories, characters, and mythology in a premium universe built for global readers.",
  keywords: [
    "african comic",
    "african comics",
    "black superhero comics",
    "kongo mythology comics",
    "isolele comics",
  ],
  alternates: {
    canonical: "/comics",
  },
  openGraph: {
    type: "website",
    url: "/comics",
    title: "ISOLELE Comics - African Comic Collection",
    description:
      "Read the ISOLELE African comic collection and discover legendary heroes, kingdoms, and mythological adventures.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ISOLELE Comics - African Comic Collection",
    description:
      "Discover ISOLELE African comic stories with powerful heroes and epic mythology from the Kongo universe.",
  },
};

export default function ComicsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
