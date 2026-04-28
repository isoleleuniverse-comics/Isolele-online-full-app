import { CHARACTER_SLUGS } from "@/features/characters/model/characters.data";
import type { navContent } from "@/features/navigation/content/nav.content";
import { BookOpen, Gamepad2, Home, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const HEADER_LOGO_SRC = "/LOGO%20HORIZONTAL.png";

export interface NavLink {
  key: keyof typeof navContent.en;
  href: string;
  hasDropdown?: boolean;
  icon?: LucideIcon;
  mobileLabel?: string;
}

export const NAV_LINKS: NavLink[] = [
  { key: "nav_home",       href: "/",           icon: Home,     mobileLabel: "Home" },
  { key: "nav_comics",     href: "/comics",     icon: BookOpen, mobileLabel: "Comics" },
  { key: "nav_characters", href: "/characters", icon: Users,    mobileLabel: "Characters", hasDropdown: true },
  { key: "nav_games",      href: "/kufu-game",  icon: Gamepad2, mobileLabel: "Game" },
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
