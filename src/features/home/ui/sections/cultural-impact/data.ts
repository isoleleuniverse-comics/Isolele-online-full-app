import { Globe, BookOpen, Film, Gamepad2, Palette, Users } from "lucide-react";
import type { CulturalImpactByLanguage } from "./types";

export const CULTURAL_IMPACT_CONTENT: CulturalImpactByLanguage = {
  en: {
    title: "BEYOND ENTERTAINMENT",
    subtitle: "A Global Movement",
    description:
      "Isolele isn't just a brand - it's a cultural awakening. A storytelling empire built on truth, spirit, and ancestral memory.",
    impacts: [
      {
        icon: BookOpen,
        title: "Publishing Revolution",
        description: "From comics to novels, creating authentic African narratives",
      },
      {
        icon: Film,
        title: "Cinematic Worlds",
        description: "Bringing African mythology to screens worldwide",
      },
      {
        icon: Gamepad2,
        title: "Gaming Universe",
        description: "Interactive experiences celebrating African heritage",
      },
      {
        icon: Palette,
        title: "Cultural Renaissance",
        description: "Reclaiming Africa's royal and divine identity",
      },
      {
        icon: Users,
        title: "Youth Empowerment",
        description: "Creating heroes that look like African children",
      },
      {
        icon: Globe,
        title: "Global Impact",
        description: "Reaching audiences across borders and generations",
      },
    ],
    statement: "Africa is not a backdrop. It is the origin.",
  },
  fr: {
    title: "AU-DELA DU DIVERTISSEMENT",
    subtitle: "Un Mouvement Mondial",
    description:
      "Isolele n'est pas qu'une marque - c'est un eveil culturel. Un empire de storytelling bati sur la verite, l'esprit et la memoire ancestrale.",
    impacts: [
      {
        icon: BookOpen,
        title: "Revolution Editoriale",
        description: "Des BD aux romans, creer des recits africains authentiques",
      },
      {
        icon: Film,
        title: "Mondes Cinematographiques",
        description: "Amener la mythologie africaine sur les ecrans du monde",
      },
      {
        icon: Gamepad2,
        title: "Univers Gaming",
        description: "Experiences interactives celebrant l'heritage africain",
      },
      {
        icon: Palette,
        title: "Renaissance Culturelle",
        description: "Recuperer l'identite royale et divine de l'Afrique",
      },
      {
        icon: Users,
        title: "Autonomisation des Jeunes",
        description: "Creer des heros qui ressemblent aux enfants africains",
      },
      {
        icon: Globe,
        title: "Impact Mondial",
        description: "Toucher des audiences au-dela des frontieres",
      },
    ],
    statement: "L'Afrique n'est pas un decor. C'est l'origine.",
  },
};
