export type ShopCategory = "hats" | "books";

export interface ShopProduct {
  id: string;
  category: ShopCategory;
  brand?: string;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  priceLabel: string;
  rating: {
    value: number;
    count: number;
  };
  image: string;
  checkoutLink: string;
  checkoutLabel: string;
  specifications?: string[];
  soldOut?: boolean;
}

export interface ShopPageContent {
  heroTitle: string;
  heroDescription: string;
  hatsTitle: string;
  booksTitle: string;
  buyLabel: string;
  soldOutLabel: string;
  backLabel: string;
}
