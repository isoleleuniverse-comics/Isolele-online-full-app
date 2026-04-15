export type SupportedLang = "en" | "fr" | "pt" | "es" | "zu" | "xh" | "sw" | "ln";

export interface Character {
  id: string;
  name: string;
  title: Record<SupportedLang, string>;
  description: string;
  image: string;
  color: string;
}

export interface CharacterSectionTranslations {
  title: Record<SupportedLang, string>;
  subtitle: Record<SupportedLang, string>;
  discover: Record<SupportedLang, string>;
}

