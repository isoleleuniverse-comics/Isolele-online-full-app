import { Camera, Globe, MessageCircle, PlayCircle } from "lucide-react";
import type { FooterLink, FooterSocialLink } from "./footer.types";

export const quickLinks: FooterLink[] = [
  { key: "nav_home", href: "/" },
  { key: "nav_about", href: "/about" },
  { key: "nav_founder", href: "/founder" },
  { key: "nav_news", href: "/news" },
  { key: "nav_characters", href: "/characters" },
  { key: "nav_shop", href: "/shop" },
];

export const resourceLinks: FooterLink[] = [
  { key: "footer_press", href: "/press" },
  { key: "footer_careers", href: "/careers" },
  { key: "footer_contact", href: "/contact" },
  { key: "footer_faq", href: "/faq" },
  { key: "footer_terms", href: "/terms" },
  { key: "footer_privacy", href: "/privacy" },
];

export const socialLinks: FooterSocialLink[] = [
  { icon: Camera, href: "https://instagram.com/isolele", label: "Instagram" },
  { icon: Globe, href: "https://facebook.com/isolele", label: "Facebook" },
  { icon: MessageCircle, href: "https://twitter.com/isolele", label: "Twitter" },
  { icon: PlayCircle, href: "https://youtube.com/isolele", label: "YouTube" },
];

