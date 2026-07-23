import { Instagram, Facebook, Twitter, PlayCircle } from "lucide-react";
import type { SupportedLocale } from "@/shared/i18n/locales";
import type { FooterContent, FooterLink, FooterSocialLink } from "./footer.types";

const quickLinksByLocale: Record<SupportedLocale, FooterLink[]> = {
  fr: [],
  en: [],
};

const resourceLinksByLocale: Record<SupportedLocale, FooterLink[]> = {
  fr: [
    { label: "Carrières", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Politique de confidentialité", href: "/privacy" },
  ],
  en: [
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

export const socialLinks: FooterSocialLink[] = [
  { icon: Instagram, href: "https://www.instagram.com/isolelecomics", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/isolelecomics", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/isolelecomics", label: "Twitter" },
  { icon: PlayCircle, href: "https://www.youtube.com/@isolelecomics", label: "YouTube" },
];

export function getFooterContent(locale: SupportedLocale, content: FooterContent) {
  return {
    ...content,
    quickLinks: quickLinksByLocale[locale] ?? quickLinksByLocale.en,
    resourceLinks: resourceLinksByLocale[locale] ?? resourceLinksByLocale.en,
  };
}
