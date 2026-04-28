import type { Theme } from "@/shared/contexts/theme-context";

export interface CarouselCharacter {
  id: string;
  name: string;
  title: string;
  image: string;
  color: string;
}

export interface InfiniteCarouselProps {
  characters: CarouselCharacter[];
  currentTheme: Theme;
}
