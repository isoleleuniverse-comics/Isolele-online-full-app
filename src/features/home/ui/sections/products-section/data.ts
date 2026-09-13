import type { HomeLocale, HomeProductsContent } from "@/features/home/content/types";

export const PRODUCTS_FALLBACK_IMAGE =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plug%20hover%20load%20image%20isolele-JAz4XM8dgs50DBWVhN4NtyfcYj9rsF.jpg";

export const PRODUCTS_BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAICAgIChsICQkJChAODwoQFwwTGB8WFBcUFRYaFxwpHhcYGRgaGBgSHBwcHhcYGhj/2wBDAQcHBwoIChMICQsMCggKGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBj/wAARCABkAGQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWm5ybnJ2eoqOkpaanqKmqsrO0tba2uLm6wsPExcbHyMnK0tPU1dbW2Nna4uPk5ebn6Onq8vP09fb2+Pn6/8QAHwEAAwEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlbaWmJmaoqOkpaanqKmqsrO0tba2uLm6wsPExcbHyMnK0tPU1dbW2Nna4uPk5ebn6Onq8vP09fb2+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//Z";


export const productsData: Partial<Record<HomeLocale, HomeProductsContent>> & { en: HomeProductsContent } = {
  en: {
  title: "PRODUCTS ALREADY AVAILABLE",
  subtitle: "Discover our first collector pieces, books, and hero editions from the ISOLELE universe.",
  addToCartLabel: "Add to Cart",
  items: [
    {
      id: "zaiire-comic-1",
      name: "ZAIIRE - Prince of Kongo",
      description: "Collector comic edition introducing the Necklace of Destiny.",
      price: 36.99,
      originalPrice: 99.99,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZAIIRE%20-%20PRINCE%20OF%20KONGO-hmOq1ET63L87xXbWVilEom8IqvT0jo.jpg",
      badge: "AVAILABLE",
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
},
  fr: {
    title: "PRODUITS DÉJÀ DISPONIBLES",
    subtitle: "Découvrez nos premières pièces de collection, livres et éditions héros de l'univers ISOLELE.",
    addToCartLabel: "Ajouter au panier",
    items: [
      {
        id: "zaiire-comic-1",
        name: "ZAIIRE - Prince du Kongo",
        description: "Édition collector de la bande dessinée présentant le Collier de la Destinée.",
        price: 36.99,
        originalPrice: 99.99,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZAIIRE%20-%20PRINCE%20OF%20KONGO-hmOq1ET63L87xXbWVilEom8IqvT0jo.jpg",
        badge: "DISPONIBLE",
        type: "comic",
      },
      {
        id: "kimoya-deluxe",
        name: "KIMOYA Édition Deluxe",
        description: "Édition livre d'art premium célébrant la Kandake renaissante.",
        price: 49.99,
        originalPrice: 149.99,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg",
        badge: "LIMITÉE",
        type: "book",
      },
      {
        id: "isolele-artbook",
        name: "Livre d'Art ISOLELE",
        description: "Un voyage visuel à travers les concepts de héros, l'imagerie royale et la construction de l'univers.",
        price: 34.99,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Isolele%20ZAIIRE-EKnQs6Sp5EFeF3bYx9m4utnSu3LdM5.jpg",
        badge: "NOUVEAU",
        type: "book",
      },
    ],
  },
  pt: {
    title: "PRODUTOS JÁ DISPONÍVEIS",
    subtitle: "Descubra as nossas primeiras peças de coleção, livros e edições de heróis do universo ISOLELE.",
    addToCartLabel: "Adicionar ao Carrinho",
    items: [
      { id: "zaiire-comic-1", name: "ZAIIRE - Príncipe do Kongo", description: "Edição de coleção da BD que apresenta o Colar do Destino.", price: 36.99, originalPrice: 99.99, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZAIIRE%20-%20PRINCE%20OF%20KONGO-hmOq1ET63L87xXbWVilEom8IqvT0jo.jpg", badge: "DISPONÍVEL", type: "comic" },
      { id: "kimoya-deluxe", name: "KIMOYA Edição Deluxe", description: "Edição premium de livro de arte que celebra a Kandake ascendente.", price: 49.99, originalPrice: 149.99, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg", badge: "LIMITADA", type: "book" },
      { id: "isolele-artbook", name: "Livro de Arte ISOLELE", description: "Uma jornada visual pelos conceitos de heróis, imagética real e construção do universo.", price: 34.99, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Isolele%20ZAIIRE-EKnQs6Sp5EFeF3bYx9m4utnSu3LdM5.jpg", badge: "NOVO", type: "book" },
    ],
  },
  es: {
    title: "PRODUCTOS YA DISPONIBLES",
    subtitle: "Descubre nuestras primeras piezas de colección, libros y ediciones de héroes del universo ISOLELE.",
    addToCartLabel: "Añadir al Carrito",
    items: [
      { id: "zaiire-comic-1", name: "ZAIIRE - Príncipe de Kongo", description: "Edición coleccionista del cómic que presenta el Collar del Destino.", price: 36.99, originalPrice: 99.99, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZAIIRE%20-%20PRINCE%20OF%20KONGO-hmOq1ET63L87xXbWVilEom8IqvT0jo.jpg", badge: "DISPONIBLE", type: "comic" },
      { id: "kimoya-deluxe", name: "KIMOYA Edición Deluxe", description: "Edición premium de libro de arte que celebra a la Kandake ascendente.", price: 49.99, originalPrice: 149.99, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg", badge: "LIMITADA", type: "book" },
      { id: "isolele-artbook", name: "Libro de Arte ISOLELE", description: "Un viaje visual por conceptos de héroes, imaginería real y construcción del universo.", price: 34.99, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Isolele%20ZAIIRE-EKnQs6Sp5EFeF3bYx9m4utnSu3LdM5.jpg", badge: "NUEVO", type: "book" },
    ],
  },
  zu: {
    title: "IMIKHIQIZO SEYITHOLAKALA",
    subtitle: "Thola izinto zethu zokuqoqa zokuqala, izincwadi, kanye nezinguqulo zamaqhawe emhlabeni we-ISOLELE.",
    addToCartLabel: "Faka Ekulayini",
    items: [
      { id: "zaiire-comic-1", name: "ZAIIRE - Inkosana yaseKongo", description: "Uhlobo lwe-comic yokuqoqa oluqukethe Umgexo Wesiphetho.", price: 36.99, originalPrice: 99.99, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZAIIRE%20-%20PRINCE%20OF%20KONGO-hmOq1ET63L87xXbWVilEom8IqvT0jo.jpg", badge: "IYATHOLAKALA", type: "comic" },
      { id: "kimoya-deluxe", name: "KIMOYA Uhlobo Oluphakeme", description: "Uhlobo lwencwadi yobuciko lwamagugu olugubha iKandake evukayo.", price: 49.99, originalPrice: 149.99, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg", badge: "OKUNCIKI", type: "book" },
      { id: "isolele-artbook", name: "Incwadi Yobuciko ye-ISOLELE", description: "Uhambo lokubona kuwo wonke amaqhawe, izithombe zasebukhosini, kanye nokwakhiwa komhlaba.", price: 34.99, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Isolele%20ZAIIRE-EKnQs6Sp5EFeF3bYx9m4utnSu3LdM5.jpg", badge: "OKUSHA", type: "book" },
    ],
  },
  xh: {
    title: "IIMVELISO SELEZIFUMANEKA",
    subtitle: "Fumana izinto zethu zokuqokelela zokuqala, iincwadi, kunye neenguqulelo zamaqhawe kwihlabathi le-ISOLELE.",
    addToCartLabel: "Yongeza Kwitroli",
    items: [
      { id: "zaiire-comic-1", name: "ZAIIRE - Inkosana yaseKongo", description: "Uhlobo lwe-comic yokuqokelela olubandakanya iQhosha leSiphelo.", price: 36.99, originalPrice: 99.99, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZAIIRE%20-%20PRINCE%20OF%20KONGO-hmOq1ET63L87xXbWVilEom8IqvT0jo.jpg", badge: "IYAFUMANEKA", type: "comic" },
      { id: "kimoya-deluxe", name: "KIMOYA Uhlobo Oluphakamileyo", description: "Uhlobo lwencwadi yobugcisa oluphezulu olubhiyozela iKandake evukayo.", price: 49.99, originalPrice: 149.99, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg", badge: "EBALASELEYO", type: "book" },
      { id: "isolele-artbook", name: "Incwadi Yobugcisa ye-ISOLELE", description: "Uhambo lokubona kuzo zonke iingcamango zamaqhawe, imifanekiso yasebukhosini, kunye nokwakhiwa kwehlabathi.", price: 34.99, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Isolele%20ZAIIRE-EKnQs6Sp5EFeF3bYx9m4utnSu3LdM5.jpg", badge: "ENTSHA", type: "book" },
    ],
  },
  sw: {
    title: "BIDHAA TAYARI ZINAPATIKANA",
    subtitle: "Gundua vipande vyetu vya kwanza vya makusanyo, vitabu, na matoleo ya mashujaa kutoka ulimwengu wa ISOLELE.",
    addToCartLabel: "Ongeza kwenye Kikapu",
    items: [
      { id: "zaiire-comic-1", name: "ZAIIRE - Mkuu wa Kongo", description: "Toleo la kukusanya la katuni linaloanzisha Mkufu wa Hatima.", price: 36.99, originalPrice: 99.99, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZAIIRE%20-%20PRINCE%20OF%20KONGO-hmOq1ET63L87xXbWVilEom8IqvT0jo.jpg", badge: "INAPATIKANA", type: "comic" },
      { id: "kimoya-deluxe", name: "KIMOYA Toleo la Deluxe", description: "Toleo bora la kitabu cha sanaa linalosherehekea Kandake anayeinuka.", price: 49.99, originalPrice: 149.99, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg", badge: "ADIMU", type: "book" },
      { id: "isolele-artbook", name: "Kitabu cha Sanaa cha ISOLELE", description: "Safari ya kuona kupitia dhana za mashujaa, taswira za kifalme, na ujenzi wa ulimwengu.", price: 34.99, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Isolele%20ZAIIRE-EKnQs6Sp5EFeF3bYx9m4utnSu3LdM5.jpg", badge: "MPYA", type: "book" },
    ],
  },
  ln: {
    title: "BILOKO EZALI DÉJÀ NA MARCHÉ",
    subtitle: "Yeba biloko na biso ya liboso ya bosangisi, mikanda, mpe ba édition ya ba héros ya mokili ya ISOLELE.",
    addToCartLabel: "Bakisa na Panier",
    items: [
      { id: "zaiire-comic-1", name: "ZAIIRE - Mwana-mokonzi ya Kongo", description: "Édition ya bosangisi ya comic oyo eyebisi Mondele ya Destin.", price: 36.99, originalPrice: 99.99, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZAIIRE%20-%20PRINCE%20OF%20KONGO-hmOq1ET63L87xXbWVilEom8IqvT0jo.jpg", badge: "EZALI", type: "comic" },
      { id: "kimoya-deluxe", name: "KIMOYA Édition Deluxe", description: "Édition ya monene ya buku ya arts oyo esepelisi Kandake oyo azali komata.", price: 49.99, originalPrice: 149.99, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg", badge: "EKEMI", type: "book" },
      { id: "isolele-artbook", name: "Buku ya Arts ya ISOLELE", description: "Mobembo ya komona na kati ya makanisi ya ba héros, bililingi ya bokonzi, mpe botongi ya mokili.", price: 34.99, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Isolele%20ZAIIRE-EKnQs6Sp5EFeF3bYx9m4utnSu3LdM5.jpg", badge: "YA SIKA", type: "book" },
    ],
  },
};
