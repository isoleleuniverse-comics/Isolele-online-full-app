export type LanguageDefinition = {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  enabled: boolean;
  isDefault: boolean;
};

export const LANGUAGES = [
  {
    code: "fr",
    name: "French",
    nativeName: "Français",
    flag: "🇫🇷",
    enabled: true,
    isDefault: true,
  },
  {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "🇺🇸",
    enabled: true,
    isDefault: false,
  },
  {
    code: "sw",
    name: "Swahili",
    nativeName: "Kiswahili",
    flag: "🇨🇩",
    enabled: true,
    isDefault: false,
  },
] as const satisfies readonly LanguageDefinition[];

export type LanguageCode = (typeof LANGUAGES)[number]["code"];

export function getEnabledLanguages() {
  return LANGUAGES.filter((language) => language.enabled);
}

export function getDefaultLanguage() {
  return getEnabledLanguages().find((language) => language.isDefault) ?? getEnabledLanguages()[0] ?? LANGUAGES[0];
}

export function getLanguageByCode(code: string | null | undefined) {
  return LANGUAGES.find((language) => language.code === code) ?? null;
}
