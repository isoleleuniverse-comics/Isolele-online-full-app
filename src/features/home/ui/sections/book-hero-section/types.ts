export interface HeroSlide {
  id: string;
  type: "book" | "game";
  tagKey: string;
  titleKey: string;
  subtitleKey: string;
  descKey: string;
  buttonKey: string;
  image: string;
  href: string;
  accentColor: string;
}

export interface LocalizedHeroSlide extends HeroSlide {
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

