import { Sparkles, Crown, Flame } from "lucide-react";
import type { UniversePillar } from "./types";

export const UNIVERSE_PILLARS: UniversePillar[] = [
  {
    key: "destiny",
    icon: Sparkles,
    title: "",
    description: "",
    href: "/#hero",
    characterName: "Zaiire",
  },
  {
    key: "heritage",
    icon: Crown,
    title: "",
    description: "",
    href: "/#hero",
    characterName: "Kimoya",
  },
  {
    key: "resurrection",
    icon: Flame,
    title: "",
    description: "",
    href: "/#hero",
    characterName: "Bambula",
  },
  {
    key: "founder",
    icon: Crown,
    title: "The Visionary Founder",
    description: "HRM King Kufulula Bapind Manikongo founded ISOLELE to restore the soul of African storytelling and create a mythological empire where African superheroes rise from authentic Kongo history. The traditional King of the Bapindi people. The Manikongo. Built from Kinshasa for the world",
    href: "/#hero",
    characterName: "King Kufulula",
  },
];

export const UNIVERSE_BACKGROUND_IMAGES = [
  "/golden-throne-beasts.jpg",
  "/kongo-spiritual-background.jpg",
  "/royal-palace-background.png",
  "/king-kufulula-background.png",
];

export const universeData = {
  en: {
  title: "THE ISOLELE UNIVERSE",
  subtitle: "Africa has always had heroes. ISOLELE gives them a universe.",
  description:
    "Born from the roots of Kongo. Built for every African child who never saw themselves as a hero. ISOLELE is the universe that was always meant to exist. The kingdom was never lost. It was waiting for its storytellers. ISOLELE FOREVER.",
  discoverMoreLabel: "DISCOVER",
  pillars: [ 
    {
      key: "destiny",
      title: "The Lion Has Learned to Write",
      description:
        "An African proverb says: ‘Until the lion learns to write, every story will glorify the hunter.’ ISOLELE is the lion’s pen. Africa is writing its own story. For the first time in history, the Kongo civilization has its own superhero universe. Black African heroes created in Kinshasa, DRC, for every child on earth who deserves to see themselves as the chosen one.",
      href: "/#hero",
      characterName: "Zaiire",
      discoverMoreLabel: "DISCOVER ZAIRE",
    },
    {
      key: "heritage",
      title: "Everything Begins in Kongo",
      description:
        "Music. Dance. Royalty. Fashion. Culture. History. Before the world had names for these things, the Kongo had mastered them all. Africa is not a continent. It is a source. And the Congo is not just part of that source. The Congo IS the source. The trigger of all human culture. The heartbeat that started everything. ISOLELE was born there. Not by accident. By destiny. The Kongo civilization is the foundation of the ISOLELE universe. Every hero, every story, every battle begins where all human culture began. In Kongo.",
      href: "/#hero",
      characterName: "Kimoya",
      discoverMoreLabel: "DISCOVER KIMOYA",
    },
    {
      key: "resurrection",
      title: "You Have Always Been Royal",
      description:
        "Before anyone told you who you were, the ancestors already knew. Every child born on African soil, every member of the diaspora who crossed oceans and survived, every person who carries African blood in their veins has always carried a crown they were never told about. ISOLELE exists to give it back. Not as a gift. As a reminder. You were never lost. You were never less. You were never without power. You were just waiting for someone to tell you the truth. Welcome home. This is the truth history forgot to teach. Africa was not the beginning of slavery. Africa was the beginning of civilization.",
      href: "/royal-history",
      characterName: "Bambula",
      discoverMoreLabel: "DISCOVER YOUR ROYAL HISTORY",
    },
    {
      key: "founder",
      title: "HRM King Kufulula Bapindi Manikongo",
      description:
        "HRM King Kufulula Bapindi Manikongo founded ISOLELE to restore the soul of African storytelling and create a mythological empire where African superheroes rise from authentic Kongo history. The traditional King of the Bapindi people. The Manikongo. Built from Kinshasa for the world.",
      href: "/king-kufulula",
      characterName: "King Kufulula",
      discoverMoreLabel: "DISCOVER KING KUFULULA",
    },
  ],
}
};
