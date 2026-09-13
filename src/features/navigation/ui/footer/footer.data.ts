import { FaInstagram, FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";
import type { SupportedLocale } from "@/shared/i18n/locales";
import type { FooterContent, FooterLink, FooterSocialLink } from "./footer.types";

const quickLinksByLocale: Record<SupportedLocale, FooterLink[]> = {
  fr: [
    { label: "Boutique", href: "/shop" },
    { label: "Restaurant", href: "/restaurant" },
  ],
  en: [
    { label: "Shop", href: "/shop" },
    { label: "Restaurant", href: "/restaurant" },
  ],
  pt: [
    { label: "Loja", href: "/shop" },
    { label: "Restaurante", href: "/restaurant" },
  ],
  es: [
    { label: "Tienda", href: "/shop" },
    { label: "Restaurante", href: "/restaurant" },
  ],
  zu: [
    { label: "Isitolo", href: "/shop" },
    { label: "Irestorenti", href: "/restaurant" },
  ],
  xh: [
    { label: "Ivenkile", href: "/shop" },
    { label: "Indawo Yokutya", href: "/restaurant" },
  ],
  sw: [
    { label: "Duka", href: "/shop" },
    { label: "Mkahawa", href: "/restaurant" },
  ],
  ln: [
    { label: "Butiki", href: "/shop" },
    { label: "Lestolá", href: "/restaurant" },
  ],
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
  pt: [
    { label: "Carreiras", href: "/careers" },
    { label: "Contacto", href: "/contact" },
    { label: "Política de Privacidade", href: "/privacy" },
  ],
  es: [
    { label: "Empleo", href: "/careers" },
    { label: "Contacto", href: "/contact" },
    { label: "Política de Privacidad", href: "/privacy" },
  ],
  zu: [
    { label: "Imisebenzi", href: "/careers" },
    { label: "Xhumana", href: "/contact" },
    { label: "Inqubomgomo Yobumfihlo", href: "/privacy" },
  ],
  xh: [
    { label: "Imisebenzi", href: "/careers" },
    { label: "Qhagamshelana", href: "/contact" },
    { label: "Umgaqo-nkqubo Wabucala", href: "/privacy" },
  ],
  sw: [
    { label: "Kazi", href: "/careers" },
    { label: "Wasiliana Nasi", href: "/contact" },
    { label: "Sera ya Faragha", href: "/privacy" },
  ],
  ln: [
    { label: "Misala", href: "/careers" },
    { label: "Kokutana na biso", href: "/contact" },
    { label: "Politiki ya sekele", href: "/privacy" },
  ],
};

export const socialLinks: FooterSocialLink[] = [
  { icon: FaInstagram, href: "https://instagram.com/isolele", label: "Instagram" },
  { icon: FaFacebook, href: "https://facebook.com/isolele", label: "Facebook" },
  { icon: FaXTwitter, href: "https://twitter.com/isolele", label: "X" },
  { icon: FaYoutube, href: "https://youtube.com/isolele", label: "YouTube" },
];

export function getFooterContent(locale: SupportedLocale, content: FooterContent) {
  return {
    ...content,
    quickLinks: quickLinksByLocale[locale] ?? quickLinksByLocale.en,
    resourceLinks: resourceLinksByLocale[locale] ?? resourceLinksByLocale.en,
  };
}
