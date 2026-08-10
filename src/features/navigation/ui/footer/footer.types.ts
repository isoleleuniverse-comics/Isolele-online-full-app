import type { IconType } from "react-icons";
import type { Theme } from "@/shared/contexts/theme-context";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSocialLink {
  href: string;
  label: string;
  icon: IconType;
}

export interface FooterContent {
  brandAlt: string;
  description: string;
  exploreTitle: string;
  resourcesTitle: string;
  newsletterTitle: string;
  newsletterDescription: string;
  emailPlaceholder: string;
  subscribeLabel: string;
  thankYouLabel: string;
  copyright: string;
  bottomLinks: FooterLink[];
  quickLinks?: FooterLink[];
  resourceLinks?: FooterLink[];
}

export interface FooterSectionContext {
  currentTheme: Theme;
  content: FooterContent;
}
