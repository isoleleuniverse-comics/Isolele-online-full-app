import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
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
  { icon: FaInstagram, href: "https://instagram.com/isolele", label: "Instagram" },
  { icon: FaFacebookF, href: "https://facebook.com/isolele", label: "Facebook" },
  { icon: FaTwitter, href: "https://twitter.com/isolele", label: "Twitter" },
  { icon: FaYoutube, href: "https://youtube.com/isolele", label: "YouTube" },
];

export function getFooterContent(locale: SupportedLocale, content: FooterContent) {
  return {
    ...content,
    quickLinks: quickLinksByLocale[locale] ?? quickLinksByLocale.en,
    resourceLinks: resourceLinksByLocale[locale] ?? resourceLinksByLocale.en,
  };
}
