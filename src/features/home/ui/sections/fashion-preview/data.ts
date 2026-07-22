import type { FashionImageItem } from "./types";

export const FASHION_FEATURE_IMAGE = {
  src: "/images/IMG-20260722-WA0047.jpg",
  alt: "2026 FIFA World Cup Congo DR artwork for the ISOLELE universe",
  label: "Congo DR 2026",
};

export const FASHION_IMAGES: FashionImageItem[] = [
  {
    src: FASHION_FEATURE_IMAGE.src,
    key: "congo_dr_2026_world_cup_artwork",
  },
];

export const fashionData = {
  en: {
    title: "THE COLLECTION IS COMING",
    subtitle: "Fashion, spectacle, and royal attitude from the ISOLELE universe.",
    viewFullLabel: "VIEW THE FULL COLLECTION",
    images: [FASHION_FEATURE_IMAGE],
  },
  fr: {
    title: "LA COLLECTION ARRIVE",
    subtitle: "Mode, spectacle et attitude royale de l'univers ISOLELE.",
    viewFullLabel: "VOIR LA COLLECTION COMPLÈTE",
    images: [
      {
        ...FASHION_FEATURE_IMAGE,
        alt: "Illustration Congo RD 2026 FIFA World Cup pour l'univers ISOLELE",
        label: "Congo RD 2026",
      },
    ],
  },
};
