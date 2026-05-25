import type { HomeProductsContent } from "@/features/home/content/types";
import type { SupportedLocale } from "@/shared/i18n/locales";

export const PRODUCTS_FALLBACK_IMAGE =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plug%20hover%20load%20image%20isolele-JAz4XM8dgs50DBWVhN4NtyfcYj9rsF.jpg";

export const PRODUCTS_BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAICAgIChsICQkJChAODwoQFwwTGB8WFBcUFRYaFxwpHhcYGRgaGBgSHBwcHhcYGhj/2wBDAQcHBwoIChMICQsMCggKGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBj/wAARCABkAGQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWm5ybnJ2eoqOkpaanqKmqsrO0tba2uLm6wsPExcbHyMnK0tPU1dbW2Nna4uPk5ebn6Onq8vP09fb2+Pn6/8QAHwEAAwEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlbaWmJmaoqOkpaanqKmqsrO0tba2uLm6wsPExcbHyMnK0tPU1dbW2Nna4uPk5ebn6Onq8vP09fb2+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//Z";


export const productsData: Partial<Record<SupportedLocale, HomeProductsContent>> = {
  en: {
    title: "PRODUCTS ALREADY AVAILABLE",
    subtitle:
      "Discover our first collector pieces, books, and hero editions from the ISOLELE universe.",
    addToCartLabel: "Add to Cart",
    items: [
      {
        id: "zaiire-comic-1",
        name: "ZAIIRE - Prince of Kongo",
        description:
          "Collector comic edition introducing the Necklace of Destiny.",
        price: 36.99,
        originalPrice: 99.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZAIIRE%20-%20PRINCE%20OF%20KONGO-hmOq1ET63L87xXbWVilEom8IqvT0jo.jpg",
        badge: "AVAILABLE",
        type: "comic",
      },
      {
        id: "kimoya-deluxe",
        name: "KIMOYA Deluxe Edition",
        description:
          "Premium art book edition celebrating the rising Kandake.",
        price: 49.99,
        originalPrice: 149.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg",
        badge: "LIMITED",
        type: "book",
      },
      {
        id: "isolele-artbook",
        name: "ISOLELE Art Book",
        description:
          "A visual journey across hero concepts, royal imagery, and worldbuilding.",
        price: 34.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Isolele%20ZAIIRE-EKnQs6Sp5EFeF3bYx9m4utnSu3LdM5.jpg",
        badge: "NEW",
        type: "book",
      },
    ],
  },

  fr: {
    title: "PRODUITS DÉJÀ DISPONIBLES",
    subtitle:
      "Découvrez nos premières pièces de collection, livres et éditions héros de l'univers ISOLELE.",
    addToCartLabel: "Ajouter au panier",
    items: [
      {
        id: "zaiire-comic-1",
        name: "ZAIIRE - Prince du Kongo",
        description:
          "Édition collector de la bande dessinée présentant le Collier de la Destinée.",
        price: 36.99,
        originalPrice: 99.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZAIIRE%20-%20PRINCE%20OF%20KONGO-hmOq1ET63L87xXbWVilEom8IqvT0jo.jpg",
        badge: "DISPONIBLE",
        type: "comic",
      },
      {
        id: "kimoya-deluxe",
        name: "KIMOYA Édition Deluxe",
        description:
          "Édition livre d'art premium célébrant la Kandake renaissante.",
        price: 49.99,
        originalPrice: 149.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg",
        badge: "LIMITÉE",
        type: "book",
      },
      {
        id: "isolele-artbook",
        name: "Livre d'Art ISOLELE",
        description:
          "Un voyage visuel à travers les concepts de héros, l'imagerie royale et la construction de l'univers.",
        price: 34.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Isolele%20ZAIIRE-EKnQs6Sp5EFeF3bYx9m4utnSu3LdM5.jpg",
        badge: "NOUVEAU",
        type: "book",
      },
    ],
  },
  
  sw: {
    title: "BIDHAA TAYARI ZINAPATIKANA",
    subtitle:
      "Gundua bidhaa zetu za kwanza za mkusanyiko, vitabu na matoleo ya mashujaa kutoka ulimwengu wa ISOLELE.",
    addToCartLabel: "Ongeza Kwenye Kikapu",
    items: [
      {
        id: "zaiire-comic-1",
        name: "ZAIIRE - Mwana wa Kifalme wa Kongo",
        description:
          "Toleo la collector la vibonzo linalotambulisha Mkufu wa Hatima.",
        price: 36.99,
        originalPrice: 99.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZAIIRE%20-%20PRINCE%20OF%20KONGO-hmOq1ET63L87xXbWVilEom8IqvT0jo.jpg",
        badge: "INAPATIKANA",
        type: "comic",
      },
      {
        id: "kimoya-deluxe",
        name: "KIMOYA Toleo la Deluxe",
        description:
          "Toleo la premium la kitabu cha sanaa linalosherehekea Kandake anayechomoza.",
        price: 49.99,
        originalPrice: 149.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg",
        badge: "LIMITED",
        type: "book",
      },
      {
        id: "isolele-artbook",
        name: "Kitabu cha Sanaa cha ISOLELE",
        description:
          "Safari ya kuona kupitia dhana za mashujaa, taswira za kifalme na ujenzi wa ulimwengu.",
        price: 34.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Isolele%20ZAIIRE-EKnQs6Sp5EFeF3bYx9m4utnSu3LdM5.jpg",
        badge: "MPYA",
        type: "book",
      },
    ],
  },

  es: {
    title: "PRODUCTOS YA DISPONIBLES",
    subtitle:
      "Descubre nuestras primeras piezas de colección, libros y ediciones de héroes del universo ISOLELE.",
    addToCartLabel: "Añadir al Carrito",
    items: [
      {
        id: "zaiire-comic-1",
        name: "ZAIIRE - Príncipe del Kongo",
        description:
          "Edición coleccionista del cómic que presenta el Collar del Destino.",
        price: 36.99,
        originalPrice: 99.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZAIIRE%20-%20PRINCE%20OF%20KONGO-hmOq1ET63L87xXbWVilEom8IqvT0jo.jpg",
        badge: "DISPONIBLE",
        type: "comic",
      },
      {
        id: "kimoya-deluxe",
        name: "KIMOYA Edición Deluxe",
        description:
          "Edición premium de libro de arte celebrando a la Kandake renaciente.",
        price: 49.99,
        originalPrice: 149.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg",
        badge: "LIMITADA",
        type: "book",
      },
      {
        id: "isolele-artbook",
        name: "Libro de Arte ISOLELE",
        description:
          "Un viaje visual a través de conceptos de héroes, imaginería real y construcción del universo.",
        price: 34.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Isolele%20ZAIIRE-EKnQs6Sp5EFeF3bYx9m4utnSu3LdM5.jpg",
        badge: "NUEVO",
        type: "book",
      },
    ],
  },

  zu: {
    title: "IMIKHIQIZO ESEYATHOLAKALA",
    subtitle:
      "Thola izingcezu zethu zokuqala zokuqoqwa, izincwadi nezinhlelo zamaqhawe ezivela emhlabeni we-ISOLELE.",
    addToCartLabel: "Faka Enqoleni",
    items: [
      {
        id: "zaiire-comic-1",
        name: "ZAIIRE - INkosana yaseKongo",
        description:
          "Uhlelo lwekhomikhi yokuqoqwa olwethula Umgexo Wesiphetho.",
        price: 36.99,
        originalPrice: 99.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZAIIRE%20-%20PRINCE%20OF%20KONGO-hmOq1ET63L87xXbWVilEom8IqvT0jo.jpg",
        badge: "IYATHOLAKALA",
        type: "comic",
      },
      {
        id: "kimoya-deluxe",
        name: "KIMOYA Uhlelo lwe-Deluxe",
        description:
          "Uhlelo lwe-premium lwencwadi yobuciko olugubha iKandake ephakamayo.",
        price: 49.99,
        originalPrice: 149.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg",
        badge: "LUNOMKHAWULO",
        type: "book",
      },
      {
        id: "isolele-artbook",
        name: "Incwadi Yobuciko ye-ISOLELE",
        description:
          "Uhambo olubonakalayo phakathi kwemibono yamaqhawe, izithombe zobukhosi nokwakhiwa komhlaba.",
        price: 34.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Isolele%20ZAIIRE-EKnQs6Sp5EFeF3bYx9m4utnSu3LdM5.jpg",
        badge: "ENTSHA",
        type: "book",
      },
    ],
  },

  xh: {
    title: "IIMVELISO SELE ZIKHO",
    subtitle:
      "Fumanisa izinto zethu zokuqala zokuqokelela, iincwadi kunye neenguqulelo zamaqhawe ezivela kwihlabathi le-ISOLELE.",
    addToCartLabel: "Yongeza Kwikharithi",
    items: [
      {
        id: "zaiire-comic-1",
        name: "ZAIIRE - INkosana yaseKongo",
        description:
          "Ushicilelo lwekhomikhi yokuqokelela oluzisa iKhola yeSiphelo.",
        price: 36.99,
        originalPrice: 99.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZAIIRE%20-%20PRINCE%20OF%20KONGO-hmOq1ET63L87xXbWVilEom8IqvT0jo.jpg",
        badge: "IKHO",
        type: "comic",
      },
      {
        id: "kimoya-deluxe",
        name: "KIMOYA Ushicilelo lwe-Deluxe",
        description:
          "Ushicilelo lwe-premium lwencwadi yobugcisa olubhiyozela iKandake ephumayo.",
        price: 49.99,
        originalPrice: 149.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg",
        badge: "LUNQONGOPHELE",
        type: "book",
      },
      {
        id: "isolele-artbook",
        name: "Incwadi YoBugcisa ye-ISOLELE",
        description:
          "Uhambo olubonakalayo phakathi kweengcinga zamaqhawe, imifanekiso yobukhosi kunye nokwakhiwa kwehlabathi.",
        price: 34.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Isolele%20ZAIIRE-EKnQs6Sp5EFeF3bYx9m4utnSu3LdM5.jpg",
        badge: "ENTSHA",
        type: "book",
      },
    ],
  },

  ln: {
    title: "PRODUITS OYO EZALI DÉJÀ",
    subtitle:
      "Mona biloko na biso ya liboso ya collection, mikanda mpe éditions ya ba héros ya mokili ya ISOLELE.",
    addToCartLabel: "Bakisa na Panier",
    items: [
      {
        id: "zaiire-comic-1",
        name: "ZAIIRE - Prince ya Kongo",
        description:
          "Édition collector ya bande dessinée oyo ezali kolakisa Collier ya Destin.",
        price: 36.99,
        originalPrice: 99.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZAIIRE%20-%20PRINCE%20OF%20KONGO-hmOq1ET63L87xXbWVilEom8IqvT0jo.jpg",
        badge: "EZALI",
        type: "comic",
      },
      {
        id: "kimoya-deluxe",
        name: "KIMOYA Édition Deluxe",
        description:
          "Édition premium ya livre d'art oyo ezali kosepela na Kandake oyo azali komata.",
        price: 49.99,
        originalPrice: 149.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg",
        badge: "LIMITÉ",
        type: "book",
      },
      {
        id: "isolele-artbook",
        name: "Livre d'Art ISOLELE",
        description:
          "Mobembo ya miso na kati ya concepts ya ba héros, bilili ya bokonzi mpe botongi ya mokili.",
        price: 34.99,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Isolele%20ZAIIRE-EKnQs6Sp5EFeF3bYx9m4utnSu3LdM5.jpg",
        badge: "YA SIKA",
        type: "book",
      },
    ],
  },
};
