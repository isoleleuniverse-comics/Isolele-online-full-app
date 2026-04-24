import type { HomePageContent } from "../types";

export const productsEn: HomePageContent["products"] = {
  title: "PRODUCTS ALREADY AVAILABLE",
  subtitle: "Discover our first collector pieces, books, and hero editions from the ISOLELE universe.",
  addToCartLabel: "Add to Cart",
  items: [
    {
      id: "zaiire-comic-1",
      name: "ZAIIRE - Prince of Kongo",
      description: "Collector comic edition introducing the Necklace of Destiny.",
      price: 26.99,
      originalPrice: 99.99,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZAIIRE%20-%20PRINCE%20OF%20KONGO-hmOq1ET63L87xXbWVilEom8IqvT0jo.jpg",
      badge: "PREORDER",
      type: "comic",
    },
    {
      id: "kimoya-deluxe",
      name: "KIMOYA Deluxe Edition",
      description: "Premium art book edition celebrating the rising Kandake.",
      price: 49.99,
      originalPrice: 149.99,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg",
      badge: "LIMITED",
      type: "book",
    },
    {
      id: "isolele-artbook",
      name: "ISOLELE Art Book",
      description: "A visual journey across hero concepts, royal imagery, and worldbuilding.",
      price: 34.99,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Isolele%20ZAIIRE-EKnQs6Sp5EFeF3bYx9m4utnSu3LdM5.jpg",
      badge: "NEW",
      type: "book",
    },
  ],
};
