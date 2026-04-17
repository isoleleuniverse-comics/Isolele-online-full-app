export type ProductType = "comic" | "book";

export interface ProductItem {
  id: string;
  name_key: string;
  desc_key: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge_key?: string;
  type: ProductType;
}

