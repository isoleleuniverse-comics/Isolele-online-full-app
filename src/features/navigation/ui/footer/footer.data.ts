import { Camera, BookOpen, MessageCircle, PlayCircle } from "lucide-react";
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
  { icon: Camera, href: "https://instagram.com/isolele", label: "Instagram" },
  { icon: BookOpen, href: "https://facebook.com/isolele", label: "Facebook" },
  { icon: MessageCircle, href: "https://twitter.com/isolele", label: "Twitter" },
  { icon: PlayCircle, href: "https://youtube.com/isolele", label: "YouTube" },
];

export function getFooterContent(locale: SupportedLocale, content: FooterContent) {
  return {
    ...content,
    quickLinks: quickLinksByLocale[locale] ?? quickLinksByLocale.en,
    resourceLinks: resourceLinksByLocale[locale] ?? resourceLinksByLocale.en,
  };
}
