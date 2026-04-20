import type { ProductItem } from "./types";

export const PRODUCTS: ProductItem[] = [
  {
    id: "zaiire-comic-1",
    name_key: "product_zaiire_name",
    desc_key: "product_zaiire_desc",
    price: 26.99,
    originalPrice: 99.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZAIIRE%20-%20PRINCE%20OF%20KONGO-hmOq1ET63L87xXbWVilEom8IqvT0jo.jpg",
    badge_key: "product_badge_preorder",
    type: "comic",
  },
  {
    id: "kimoya-deluxe",
    name_key: "product_kimoya_name",
    desc_key: "product_kimoya_desc",
    price: 49.99,
    originalPrice: 149.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg",
    badge_key: "product_badge_limited",
    type: "book",
  },
  {
    id: "isolele-artbook",
    name_key: "product_art_name",
    desc_key: "product_art_desc",
    price: 34.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Isolele%20ZAIIRE-EKnQs6Sp5EFeF3bYx9m4utnSu3LdM5.jpg",
    badge_key: "product_badge_new",
    type: "book",
  },
];

export const PRODUCT_FALLBACK_IMAGE =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plug%20hover%20load%20image%20isolele-JAz4XM8dgs50DBWVhN4NtyfcYj9rsF.jpg";

export const PRODUCT_BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAICAgIChsICQkJChAODwoQFwwTGB8WFBcUFRYaFxwpHhcYGRgaGBgSHBwcHhcYGhj/2wBDAQcHBwoIChMICQsMCggKGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBj/wAARCABkAGQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWm5ybnJ2eoqOkpaanqKmqsrO0tba2uLm6wsPExcbHyMnK0tPU1dbW2Nna4uPk5ebn6Onq8vP09fb2+Pn6/8QAHwEAAwEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlbaWmJmaoqOkpaanqKmqsrO0tba2uLm6wsPExcbHyMnK0tPU1dbW2Nna4uPk5ebn6Onq8vP09fb2+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//Z";

