import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Characters | ISOLELE Universe",
  description: "Discover the heroes and legends of the ISOLELE universe.",
  alternates: {
    canonical: "/characters",
  },
  openGraph: {
    type: "website",
    url: "/characters",
    title: "ISOLELE Characters",
    description: "Meet the legendary heroes, queens, kings, and spirits of the ISOLELE universe.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ISOLELE Characters",
    description: "Discover ISOLELE characters from African mythology, royalty, and modern legend.",
  },
};

export default function CharactersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
