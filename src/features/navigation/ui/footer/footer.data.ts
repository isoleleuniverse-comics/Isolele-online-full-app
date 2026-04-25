import { Camera, Globe, MessageCircle, PlayCircle } from "lucide-react";
import type { FooterLink, FooterSocialLink } from "./footer.types";

export const quickLinks: FooterLink[] = [
  { key: "nav_home", href: "/" },
  { key: "nav_about", href: "/#hero" },
  { key: "nav_founder", href: "/#hero" },
  { key: "nav_news", href: "/#hero" },
  { key: "nav_characters", href: "/characters" },
  { key: "nav_shop", href: "/#hero" },
];

export const resourceLinks: FooterLink[] = [
  { key: "footer_press", href: "/#hero" },
  { key: "footer_careers", href: "/#hero" },
  { key: "footer_contact", href: "/#hero" },
  { key: "footer_faq", href: "/#hero" },
  { key: "footer_terms", href: "/#hero" },
  { key: "footer_privacy", href: "/#hero" },
];

export const socialLinks: FooterSocialLink[] = [
  { icon: Camera, href: "https://instagram.com/isolele", label: "Instagram" },
  { icon: Globe, href: "https://facebook.com/isolele", label: "Facebook" },
  { icon: MessageCircle, href: "https://twitter.com/isolele", label: "Twitter" },
  { icon: PlayCircle, href: "https://youtube.com/isolele", label: "YouTube" },
];

