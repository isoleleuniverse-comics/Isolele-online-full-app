export interface StoryContentItem {
  title: string;
  subtitle: string;
  paragraphs: string[];
  conclusion: string;
  cta: string;
}

export type StoryContentByLanguage = Record<string, StoryContentItem>;
