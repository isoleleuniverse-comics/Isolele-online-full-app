import { CHARACTER_SLUGS } from "@/features/characters/model/characters.data";
import type { NavLinkLabelKey } from "@/features/navigation/content/nav.content";
import { BookOpen, Gamepad2, Home, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const HEADER_LOGO_SRC = "/isolele-official-logo.png";

export interface NavLink {
  key: NavLinkLabelKey;
  href: string;
  hasDropdown?: boolean;
  icon?: LucideIcon;
}

export const NAV_LINKS: NavLink[] = [
  { key: "nav_home", href: "/", icon: Home },
  { key: "nav_comics", href: "/comics", icon: BookOpen },
  { key: "nav_characters", href: "/characters", icon: Users, hasDropdown: true },
  { key: "nav_games", href: "/kufu-game", icon: Gamepad2 },
];

export const CHARACTER_NAV_LINKS = CHARACTER_SLUGS.map((slug) => ({
  slug,
  name: slug.toUpperCase(),
  href: `/characters/${slug}`,
}));

export function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
