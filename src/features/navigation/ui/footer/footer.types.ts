import type { LucideIcon } from "lucide-react";
import type { Theme } from "@/lib/theme-context";

export interface FooterLink {
  key: string;
  href: string;
}

export interface FooterSocialLink {
  href: string;
  label: string;
  icon: LucideIcon;
}

export interface FooterContext {
  currentTheme: Theme;
  t: (key: string) => string;
}

