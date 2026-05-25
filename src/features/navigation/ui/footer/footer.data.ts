import { Camera, Globe, MessageCircle, PlayCircle } from "lucide-react";
import { resolveContentLocale, type ContentLocale, type SupportedLocale } from "@/shared/i18n/locales";
import type { FooterContent, FooterLink, FooterSocialLink } from "./footer.types";

const quickLinksByLocale: Record<ContentLocale, FooterLink[]> = {
  fr: [
    { label: "Accueil", href: "/" },
    { label: "A propos", href: "/#hero" },
    { label: "Fondateur", href: "/#hero" },
    { label: "Actualites", href: "/#hero" },
    { label: "Personnages", href: "/characters" },
    { label: "Boutique", href: "/#hero" },
  ],
  en: [
    { label: "Home", href: "/" },
    { label: "About", href: "/#hero" },
    { label: "Founder", href: "/#hero" },
    { label: "News", href: "/#hero" },
    { label: "Characters", href: "/characters" },
    { label: "Shop", href: "/#hero" },
  ],
};

const resourceLinksByLocale: Record<ContentLocale, FooterLink[]> = {
  fr: [
    { label: "Presse", href: "/#hero" },
    { label: "Carrieres", href: "/#hero" },
    { label: "Contact", href: "/#hero" },
    { label: "FAQ", href: "/#hero" },
    { label: "Conditions", href: "/#hero" },
    { label: "Confidentialite", href: "/#hero" },
  ],
  en: [
    { label: "Press", href: "/#hero" },
    { label: "Careers", href: "/#hero" },
    { label: "Contact", href: "/#hero" },
    { label: "FAQ", href: "/#hero" },
    { label: "Terms", href: "/#hero" },
    { label: "Privacy", href: "/#hero" },
  ],
};

export const socialLinks: FooterSocialLink[] = [
  { icon: Camera, href: "https://instagram.com/isolele", label: "Instagram" },
  { icon: Globe, href: "https://facebook.com/isolele", label: "Facebook" },
  { icon: MessageCircle, href: "https://twitter.com/isolele", label: "Twitter" },
  { icon: PlayCircle, href: "https://youtube.com/isolele", label: "YouTube" },
];

export function getFooterContent(locale: SupportedLocale, content: FooterContent) {
  const contentLocale = resolveContentLocale(locale);
  return {
    ...content,
    quickLinks: quickLinksByLocale[contentLocale],
    resourceLinks: resourceLinksByLocale[contentLocale],
  };
}
