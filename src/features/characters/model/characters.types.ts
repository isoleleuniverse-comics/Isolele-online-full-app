import type { LucideIcon } from "lucide-react";

export interface Character {
  id: string;
  name: string;
  title: string;
  origin: string;
  color: string;
  image: string;
  alt?: string;
  description: string;
  powers: string[];
  powerIcons: LucideIcon[];
}

export interface CharacterFilter {
  id: string;
  label: string;
}

export interface CharacterProfile {
  name: string;
  title: string;
  origin: string;
  image: string;
  alt?: string;
  description: string;
  powers: string[];
}

