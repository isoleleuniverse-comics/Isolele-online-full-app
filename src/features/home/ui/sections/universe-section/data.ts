import { Sparkles, Crown, Flame } from "lucide-react";
import type { UniversePillar } from "./types";

export const UNIVERSE_PILLARS: UniversePillar[] = [
  {
    key: "destiny",
    icon: Sparkles,
    titleKey: "universe_destiny_title",
    descriptionKey: "universe_destiny_desc",
    href: "/the-founder",
    characterName: "Zaiire",
  },
  {
    key: "heritage",
    icon: Crown,
    titleKey: "universe_heritage_title",
    descriptionKey: "universe_heritage_desc",
    href: "/the-founder",
    characterName: "Kimoya",
  },
  {
    key: "resurrection",
    icon: Flame,
    titleKey: "universe_resurrection_title",
    descriptionKey: "universe_resurrection_desc",
    href: "/the-founder",
    characterName: "Bambula",
  },
  {
    key: "founder",
    icon: Crown,
    titleKey: "universe_founder_title",
    descriptionKey: "universe_founder_desc",
    href: "/the-founder",
    characterName: "King Kufulula",
  },
];

export const UNIVERSE_BACKGROUND_IMAGES = [
  "/golden-throne-beasts.jpg",
  "/kongo-spiritual-background.jpg",
  "/royal-palace-background.png",
  "/king-kufulula-background.png",
];
