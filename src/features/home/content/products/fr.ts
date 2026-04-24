import type { HomePageContent } from "../types";

export const productsFr: HomePageContent["products"] = {
  title: "PRODUITS DEJA DISPONIBLES",
  subtitle: "Decouvrez nos premieres pieces collectors, livres et editions de heros de l'univers ISOLELE.",
  addToCartLabel: "Ajouter au panier",
  items: [
    {
      id: "zaiire-comic-1",
      name: "ZAIIRE - Prince du Kongo",
      description: "Edition collector du comic qui introduit le Collier du Destin.",
      price: 26.99,
      originalPrice: 99.99,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZAIIRE%20-%20PRINCE%20OF%20KONGO-hmOq1ET63L87xXbWVilEom8IqvT0jo.jpg",
      badge: "PRECOMMANDE",
      type: "comic",
    },
    {
      id: "kimoya-deluxe",
      name: "Edition Deluxe KIMOYA",
      description: "Edition premium celebrant la Kandake renaissante.",
      price: 49.99,
      originalPrice: 149.99,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg",
      badge: "LIMITE",
      type: "book",
    },
    {
      id: "isolele-artbook",
      name: "Art Book ISOLELE",
      description: "Un voyage visuel a travers les concepts de heros, l'imagerie royale et le worldbuilding.",
      price: 34.99,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Isolele%20ZAIIRE-EKnQs6Sp5EFeF3bYx9m4utnSu3LdM5.jpg",
      badge: "NOUVEAU",
      type: "book",
    },
  ],
};
