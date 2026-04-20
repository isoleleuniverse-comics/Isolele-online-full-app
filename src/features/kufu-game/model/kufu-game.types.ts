import type { LucideIcon } from "lucide-react";

export type KufuTab = "overview" | "characters" | "reviews";

export interface KufuGameConfig {
  title: string;
  subtitle: string;
  tagline: string;
  rating: number;
  reviewCount: number;
  price: number;
  players: string;
  age: string;
  duration: string;
  category: string;
  description: string;
  longDescription: string[];
  developer: string;
  publisher: string;
  languages: string[];
}

export interface KufuScreenshot {
  url: string;
  label: string;
}

export interface KufuFeature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface KufuCharacter {
  name: string;
  role: string;
  image: string;
}

export interface KufuReview {
  name: string;
  country: string;
  rating: number;
  text: string;
}

