import { Sparkles } from "lucide-react";
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
];

export const UNIVERSE_BACKGROUND_IMAGES = ["/golden-throne-beasts.jpg"];

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
        discoverMoreLabel: "DISCOVER ZAIiRE",
      },
    ],
  },
  fr: {
    title: "L'UNIVERS ISOLELE",
    subtitle: "L'Afrique a toujours eu des héros. ISOLELE leur donne un univers.",
    description:
      "Né des racines du Kongo. Construit pour chaque enfant africain qui ne s'est jamais vu en héros. ISOLELE est l'univers qui a toujours été destiné à exister. Le royaume n'a jamais été perdu. Il attendait ses conteurs. ISOLELE POUR TOUJOURS.",
    discoverMoreLabel: "DÉCOUVRIR",
    pillars: [
      {
        key: "destiny",
        title: "Le Lion a Appris à Écrire",
        description:
          "Un proverbe africain dit : « Jusqu'à ce que le lion apprenne à écrire, chaque histoire glorifiera le chasseur. » ISOLELE est la plume du lion. L'Afrique écrit sa propre histoire. Pour la première fois dans l'histoire, la civilisation Kongo a son propre univers de super-héros. Des héros noirs africains créés à Kinshasa, RDC, pour chaque enfant sur terre qui mérite de se voir comme l'élu.",
        href: "/#hero",
        characterName: "Zaiire",
        discoverMoreLabel: "DÉCOUVRIR ZAIIRE",
      },
    ],
  },
};
