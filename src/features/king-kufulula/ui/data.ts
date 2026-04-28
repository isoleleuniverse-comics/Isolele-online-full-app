import {Crown, Shield, Flame} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface kingKufululaSection {
    id:string;
    h2: string;
    body: string;
    icon: LucideIcon;
}

export interface KingKufululaContent {
    title: string;
    metaDescription: string;
    founderBadge: string;
    sections : kingKufululaSection [];
    ctas : {label:string; href:string} []
}

export const KingKufululaData: Record <"en"|"fr", KingKufululaContent> = {
    en: {
    title:
      "HRM King Kufulula Bapindi Manikongo : Le Roi Africain Qui a Bâti un Univers à Partir de Rien",
    metaDescription:
      "HRM King Kufulula Bapindi Manikongo est le Roi traditionnel du peuple Bapindi et Manikongo de la lignée royale Kongo. Fondateur d'ISOLELE, le premier univers de super-héros noirs africains, construit depuis Kinshasa, RDC, pour le monde entier.",
    founderBadge: "FONDATEUR D'ISOLELE",
    sections: [
      {
        id: "king",
        h2: "Le Roi Derrière l'Univers",
        body: "HRM King Kufulula Bapindi Manikongo n'est pas un créateur de bandes dessinées qui a choisi un thème africain. C'est un roi africain qui a choisi de bâtir un univers. En tant que Roi traditionnel du peuple Bapindi de la République Démocratique du Congo et Manikongo de la lignée royale Kongo, son identité, son sang et sa responsabilité envers son peuple ne sont pas une source d'inspiration pour ISOLELE. Ils sont ISOLELE. Chaque royaume de l'univers est réel parce que l'homme qui l'a construit est royauté. Chaque héros qui se bat pour son peuple est réel parce que l'homme qui les a créés se bat pour le sien chaque jour.",
        icon: Crown,
      },
      {
        id: "zaiire",
        h2: "Zaiire, C'est Son Histoire",
        body: "Zaiire est le Prince du Kongo qui cherche sa mère à travers le cosmos. King Kufulula sait ce que signifie chercher. Être séparé de ce qu'on aime. Porter un destin qui a été choisi pour vous avant que vous ne compreniez ce qu'il signifiait. L'exil. La distance. La responsabilité d'une couronne que vous n'avez pas demandée mais que vous ne pouvez pas poser. Le voyage de Zaiire n'est pas de la fiction. C'est un miroir. Quand vous lisez Zaiire traverser le cosmos pour trouver sa mère Kimoya, vous lisez un roi qui traite sa propre vérité à travers le seul langage assez puissant pour la contenir. L'histoire.",
        icon: Shield,
      },
      {
        id: "war",
        h2: "Construit au Milieu de la Guerre",
        body: "Construire ISOLELE n'a jamais été qu'un défi créatif. C'était une question de survie. La RDC est l'un des pays les plus touchés par les conflits sur terre. Le Nord et le Sud-Kivu, où se déroulent certaines des histoires d'ISOLELE, sont des territoires où les groupes armés, les forces rebelles et la violence sont des réalités quotidiennes. Lors de la création d'ISOLELE, trois de nos illustrateurs ont été tués par des rebelles. Trois artistes qui ont donné leurs mains, leur talent et leur vie pour construire quelque chose de beau pour les enfants africains. ISOLELE porte leurs noms sur chaque page. Leur sacrifice n'est pas oublié. Il est le fondement.",
        icon: Flame,
      },
      {
        id: "made-in-congo",
        h2: "Fabriqué au Congo. Délibérément.",
        body: "King Kufulula a pris une décision que la plupart des gens lui ont dit impossible. Tout ce qu'ISOLELE produit sera fabriqué au Congo. Pas en Chine. Pas en sous-traitance. Pas dépendant d'une chaîne d'approvisionnement étrangère qui extrait la valeur de l'Afrique sans rien rendre. Les costumes de super-héros sont fabriqués au Congo. L'art est produit à Kinshasa. Les flacons de parfum sont façonnés à Kinshasa. Ce n'est pas une déclaration de marque. C'est une déclaration d'indépendance économique. King Kufulula en avait assez d'un monde qui prend tout à l'Afrique et ne donne rien aux créateurs africains en retour. ISOLELE existe pour prouver que l'Afrique peut créer pour le monde, pas seulement l'approvisionner.",
        icon: Crown,
      },
      {
        id: "children",
        h2: "Investir dans les Enfants de la Guerre",
        body: "Une partie de la mission d'ISOLELE est dédiée aux enfants du Nord et du Sud-Kivu, des jeunes qui grandissent dans des zones de conflit actif et à qui on n'a jamais dit que leur histoire comptait. ISOLELE gère un programme d'éducation artistique gratuit pour les jeunes de ces territoires, car King Kufulula croit qu'un enfant qui apprend à dessiner son propre héros ne peut pas être entièrement brisé par la guerre. L'art est une armure. L'histoire est une survie. Et chaque enfant qui prend un crayon au Kivu est déjà un guerrier.",
        icon: Shield,
      },
      {
        id: "goal",
        h2: "Un Seul Objectif",
        body: "HRM King Kufulula Bapindi Manikongo n'a qu'un seul objectif. Construire à partir de zéro ce que le monde a dit que l'Afrique ne pouvait pas construire. Un empire créatif de style de vie complet — comics, jeux, parfums, mode — tout produit sur le sol africain par des mains africaines, distribué dans le monde entier. Pas comme un projet caritatif. Pas comme une curiosité culturelle. En tant que concurrent. ISOLELE n'aspire pas à être reconnu par le monde. Il vient le changer. Le roi n'attend pas d'être découvert. Il construit ce pour quoi le monde devra un jour venir à lui.",
        icon: Crown,
      },
    ],
    ctas: [
      { label: "EXPLORER L'UNIVERS ISOLELE", href: "/#hero" },
      { label: "LIRE ZAIIRE", href: "/books/zaiire" },
      { label: "DÉCOUVRIR VOTRE HISTOIRE ROYALE", href: "/royal-history" },
    ],
  },
    fr: {
    title:
      "HRM King Kufulula Bapindi Manikongo : Le Roi Africain Qui a Bâti un Univers à Partir de Rien",
    metaDescription:
      "HRM King Kufulula Bapindi Manikongo est le Roi traditionnel du peuple Bapindi et Manikongo de la lignée royale Kongo. Fondateur d'ISOLELE, le premier univers de super-héros noirs africains, construit depuis Kinshasa, RDC, pour le monde entier.",
    founderBadge: "FONDATEUR D'ISOLELE",
    sections: [
      {
        id: "king",
        h2: "Le Roi Derrière l'Univers",
        body: "HRM King Kufulula Bapindi Manikongo n'est pas un créateur de bandes dessinées qui a choisi un thème africain. C'est un roi africain qui a choisi de bâtir un univers. En tant que Roi traditionnel du peuple Bapindi de la République Démocratique du Congo et Manikongo de la lignée royale Kongo, son identité, son sang et sa responsabilité envers son peuple ne sont pas une source d'inspiration pour ISOLELE. Ils sont ISOLELE. Chaque royaume de l'univers est réel parce que l'homme qui l'a construit est royauté. Chaque héros qui se bat pour son peuple est réel parce que l'homme qui les a créés se bat pour le sien chaque jour.",
        icon: Crown,
      },
      {
        id: "zaiire",
        h2: "Zaiire, C'est Son Histoire",
        body: "Zaiire est le Prince du Kongo qui cherche sa mère à travers le cosmos. King Kufulula sait ce que signifie chercher. Être séparé de ce qu'on aime. Porter un destin qui a été choisi pour vous avant que vous ne compreniez ce qu'il signifiait. L'exil. La distance. La responsabilité d'une couronne que vous n'avez pas demandée mais que vous ne pouvez pas poser. Le voyage de Zaiire n'est pas de la fiction. C'est un miroir. Quand vous lisez Zaiire traverser le cosmos pour trouver sa mère Kimoya, vous lisez un roi qui traite sa propre vérité à travers le seul langage assez puissant pour la contenir. L'histoire.",
        icon: Shield,
      },
      {
        id: "war",
        h2: "Construit au Milieu de la Guerre",
        body: "Construire ISOLELE n'a jamais été qu'un défi créatif. C'était une question de survie. La RDC est l'un des pays les plus touchés par les conflits sur terre. Le Nord et le Sud-Kivu, où se déroulent certaines des histoires d'ISOLELE, sont des territoires où les groupes armés, les forces rebelles et la violence sont des réalités quotidiennes. Lors de la création d'ISOLELE, trois de nos illustrateurs ont été tués par des rebelles. Trois artistes qui ont donné leurs mains, leur talent et leur vie pour construire quelque chose de beau pour les enfants africains. ISOLELE porte leurs noms sur chaque page. Leur sacrifice n'est pas oublié. Il est le fondement.",
        icon: Flame,
      },
      {
        id: "made-in-congo",
        h2: "Fabriqué au Congo. Délibérément.",
        body: "King Kufulula a pris une décision que la plupart des gens lui ont dit impossible. Tout ce qu'ISOLELE produit sera fabriqué au Congo. Pas en Chine. Pas en sous-traitance. Pas dépendant d'une chaîne d'approvisionnement étrangère qui extrait la valeur de l'Afrique sans rien rendre. Les costumes de super-héros sont fabriqués au Congo. L'art est produit à Kinshasa. Les flacons de parfum sont façonnés à Kinshasa. Ce n'est pas une déclaration de marque. C'est une déclaration d'indépendance économique. King Kufulula en avait assez d'un monde qui prend tout à l'Afrique et ne donne rien aux créateurs africains en retour. ISOLELE existe pour prouver que l'Afrique peut créer pour le monde, pas seulement l'approvisionner.",
        icon: Crown,
      },
      {
        id: "children",
        h2: "Investir dans les Enfants de la Guerre",
        body: "Une partie de la mission d'ISOLELE est dédiée aux enfants du Nord et du Sud-Kivu, des jeunes qui grandissent dans des zones de conflit actif et à qui on n'a jamais dit que leur histoire comptait. ISOLELE gère un programme d'éducation artistique gratuit pour les jeunes de ces territoires, car King Kufulula croit qu'un enfant qui apprend à dessiner son propre héros ne peut pas être entièrement brisé par la guerre. L'art est une armure. L'histoire est une survie. Et chaque enfant qui prend un crayon au Kivu est déjà un guerrier.",
        icon: Shield,
      },
      {
        id: "goal",
        h2: "Un Seul Objectif",
        body: "HRM King Kufulula Bapindi Manikongo n'a qu'un seul objectif. Construire à partir de zéro ce que le monde a dit que l'Afrique ne pouvait pas construire. Un empire créatif de style de vie complet — comics, jeux, parfums, mode — tout produit sur le sol africain par des mains africaines, distribué dans le monde entier. Pas comme un projet caritatif. Pas comme une curiosité culturelle. En tant que concurrent. ISOLELE n'aspire pas à être reconnu par le monde. Il vient le changer. Le roi n'attend pas d'être découvert. Il construit ce pour quoi le monde devra un jour venir à lui.",
        icon: Crown,
      },
    ],
    ctas: [
      { label: "EXPLORER L'UNIVERS ISOLELE", href: "/#hero" },
      { label: "LIRE ZAIIRE", href: "/books/zaiire" },
      { label: "DÉCOUVRIR VOTRE HISTOIRE ROYALE", href: "/royal-history" },
    ],
  },

}