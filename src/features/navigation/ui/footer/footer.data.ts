import { FaInstagram, FaRegEnvelope, FaYoutube } from "react-icons/fa6";
import type { SupportedLocale } from "@/shared/i18n/locales";
import type { FooterContent, FooterLink, FooterSocialLink } from "./footer.types";

const quickLinksByLocale: Record<SupportedLocale, FooterLink[]> = {
  fr: [],
  en: [],
};

const footerPageLinks: FooterLink[] = [
  { label: "PRIVACY POLICY", href: "/privacy" },
  { label: "CAREERS", href: "/careers" },
  { label: "CONTACT", href: "/contact" },
];

const resourceLinksByLocale: Record<SupportedLocale, FooterLink[]> = {
  fr: footerPageLinks,
  en: footerPageLinks,
};

export const socialLinks: FooterSocialLink[] = [
  { icon: FaInstagram, href: "https://www.instagram.com/isoleleuniverse1?igsh=NTc4MTIwNjQ2YQ==", label: "Instagram" },
  { icon: FaRegEnvelope, href: "mailto:empire@isoleleuniverse.com", label: "Email" },
  { icon: FaYoutube, href: "https://youtube.com/@isoleleuniverse?si=7R8MdKyg56K89QZF", label: "YouTube" },
];

export function getFooterContent(locale: SupportedLocale, content: FooterContent) {
  return {
    ...content,
    quickLinks: quickLinksByLocale[locale] ?? quickLinksByLocale.en,
    resourceLinks: resourceLinksByLocale[locale] ?? resourceLinksByLocale.en,
  };
}
