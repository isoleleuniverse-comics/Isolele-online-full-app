import { FaEnvelope, FaInstagram, FaYoutube } from "react-icons/fa6";
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
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/isoleleuniverse1?igsh=NTc4MTIwNjQ2YQ==",
    label: "Instagram",
  },
  { icon: FaEnvelope, href: "mailto:empire@isoleleuniverse.com", label: "Email" },
  {
    icon: FaYoutube,
    href: "https://youtube.com/@isoleleuniverse?si=7R8MdKyg56K89QZF",
    label: "YouTube",
  },
];

export function getFooterContent(locale: SupportedLocale, content: FooterContent) {
  return {
    ...content,
    quickLinks: quickLinksByLocale[locale] ?? quickLinksByLocale.en,
    resourceLinks: resourceLinksByLocale[locale] ?? resourceLinksByLocale.en,
  };
}
