import { FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import type { SupportedLocale } from "@/shared/i18n/locales";
import type { FooterContent, FooterLink, FooterSocialLink } from "./footer.types";

const quickLinksByLocale: Record<SupportedLocale, FooterLink[]> = {
  fr: [],
  en: [],
};

const resourceLinksByLocale: Record<SupportedLocale, FooterLink[]> = {
  fr: [
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
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
  {
    icon: FaYoutube,
    href: "https://youtube.com/@isoleleuniverse?si=7R8MdKyg56K89QZF",
    label: "YouTube",
  },
  {
    icon: MdEmail,
    href: "mailto:Empire@isoleleuniverse.com",
    label: "Email",
  },
];

export function getFooterContent(locale: SupportedLocale, content: FooterContent) {
  return {
    ...content,
    quickLinks: quickLinksByLocale[locale] ?? quickLinksByLocale.en,
    resourceLinks: resourceLinksByLocale[locale] ?? resourceLinksByLocale.en,
  };
}
