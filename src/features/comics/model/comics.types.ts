export type ComicCategory = "featured" | "bestseller" | "new";

export interface ComicBook {
  id: string;
  titleEn?: string;
  titleFr?: string;
  titleKey?: string;
  descEn?: string;
  descFr?: string;
  descKey?: string;
  image: string;
  price: number;
  category: ComicCategory;
}

export type TranslationFn = (key: string) => string;

