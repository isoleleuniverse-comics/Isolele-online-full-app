import type { ComponentType, CSSProperties } from "react";

export type ImpactIcon = ComponentType<{ className?: string; style?: CSSProperties }>;

export interface CulturalImpactItem {
  icon: ImpactIcon;
  title: string;
  description: string;
}

export interface CulturalImpactContent {
  title: string;
  subtitle: string;
  description: string;
  impacts: CulturalImpactItem[];
  statement: string;
}

export type CulturalImpactByLanguage = Record<string, CulturalImpactContent>;
