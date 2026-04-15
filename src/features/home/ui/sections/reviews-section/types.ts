export interface ReviewItem {
  text: Record<string, string>;
  author: string;
  stars: number;
}

export interface ReviewsContentItem {
  title: string;
  subtitle: string;
  description: string;
}

export type ReviewsContentByLanguage = Record<string, ReviewsContentItem>;
