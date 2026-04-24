import type { ComponentType, CSSProperties } from "react";

export type UniverseIcon = ComponentType<{ className?: string; style?: CSSProperties }>;

export interface UniversePillar {
  key: string;
  icon: UniverseIcon;
  title: string;
  description: string;
  href: string;
  characterName: string;
}
