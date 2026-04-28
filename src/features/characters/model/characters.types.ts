import type { LucideIcon } from "lucide-react";

export interface CharactersUIStrings {
  heroTagline: string;
  heroTitleLine1: string;
  heroTitleLine2: string;
  heroDescription: string;
  statCharacters: string;
  statKingdoms: string;
  statUniverses: string;
  viewProfile: string;
  powersTitle: string;
  biography: string;
  backToCharacters: string;
  exploreComics: string;
  discoverPrefix: string;
}

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

export interface CharactersPageContent {
  ui: CharactersUIStrings;
  filters: CharacterFilter[];
}
