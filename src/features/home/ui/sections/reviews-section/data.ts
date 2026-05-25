import type { HomeReviewsContent } from "@/features/home/content/types";

export const reviewsData: Record<string, HomeReviewsContent> = {
  en: {
    title: "A CULTURAL PHENOMENON IN THE MAKING",
    subtitle: "IN STORES NOW",
    description:
      "Zaiire: The Prince of Kongo is already on bestseller shelves in Kenya. Real readers. Real impact. Real Africa.",
    items: [
      {
        image: "/images/bookstore-display.jpg",
        imageAlt: "Nuria bookstore bestseller shelf in Nairobi, Kenya",
        text:
          "Zaiire reached the bestseller shelf at Nuria bookstore in Nairobi, Kenya without a distributor, without Hollywood, and without a marketing budget. Built in Kinshasa. Sold by the power of the story.",
        author: "ISOLELE",
        stars: 5,
        ctaLabel:
          "READ THE STORY THAT AFRICA IS BUYING — $36.99",
        ctaHref:
          process.env.NEXT_PUBLIC_ZAIIRE_BOOK_1_URL ?? "/comics",
      },
    ],
  },

  fr: {
    title: "UN PHÉNOMÈNE CULTUREL EN DEVENIR",
    subtitle: "DÉJÀ EN LIBRAIRIE",
    description:
      "Zaiire : Le Prince du Kongo est déjà en tête des ventes dans les librairies au Kenya. De vrais lecteurs. Un impact réel. Une Afrique réelle.",
    items: [
      {
        image: "/images/bookstore-display.jpg",
        imageAlt:
          "Rayon des bestsellers de la librairie Nuria à Nairobi, Kenya",
        text:
          "Zaiire a atteint le rayon des bestsellers de la librairie Nuria à Nairobi, Kenya sans distributeur, sans Hollywood et sans budget marketing. Construit à Kinshasa. Vendu par la puissance de l'histoire.",
        author: "ISOLELE",
        stars: 5,
        ctaLabel:
          "LISEZ L'HISTOIRE QUE L'AFRIQUE ACHÈTE — 36,99 $",
        ctaHref:
          process.env.NEXT_PUBLIC_ZAIIRE_BOOK_1_URL ?? "/comics",
      },
    ],
  },

  sw: {
    title: "FENOMENA YA KITAMADUNI INAYOZALIWA",
    subtitle: "TAYARI MADUKANI",
    description:
      "Zaiire: Mwana wa Kifalme wa Kongo tayari ipo kwenye rafu za vitabu vinavyouzwa zaidi nchini Kenya. Wasomaji halisi. Athari halisi. Afrika halisi.",
    items: [
      {
        image: "/images/bookstore-display.jpg",
        imageAlt:
          "Rafu ya vitabu vinavyouzwa zaidi ya duka la vitabu la Nuria mjini Nairobi, Kenya",
        text:
          "Zaiire ilifika kwenye rafu ya bestsellers katika duka la vitabu la Nuria mjini Nairobi, Kenya bila msambazaji, bila Hollywood na bila bajeti ya matangazo. Ilijengwa Kinshasa. Iliuzwa kwa nguvu ya hadithi.",
        author: "ISOLELE",
        stars: 5,
        ctaLabel:
          "SOMA HADITHI AMBAYO AFRIKA INANUNUA — $36.99",
        ctaHref:
          process.env.NEXT_PUBLIC_ZAIIRE_BOOK_1_URL ?? "/comics",
      },
    ],
  },

  es: {
    title: "UN FENÓMENO CULTURAL EN CRECIMIENTO",
    subtitle: "YA EN LIBRERÍAS",
    description:
      "Zaiire: El Príncipe del Kongo ya está en las estanterías de los más vendidos en Kenia. Lectores reales. Impacto real. África real.",
    items: [
      {
        image: "/images/bookstore-display.jpg",
        imageAlt:
          "Estantería de bestsellers de la librería Nuria en Nairobi, Kenia",
        text:
          "Zaiire llegó a la estantería de bestsellers de la librería Nuria en Nairobi, Kenia sin distribuidor, sin Hollywood y sin presupuesto de marketing. Construido en Kinshasa. Vendido por el poder de la historia.",
        author: "ISOLELE",
        stars: 5,
        ctaLabel:
          "LEE LA HISTORIA QUE ÁFRICA ESTÁ COMPRANDO — $36.99",
        ctaHref:
          process.env.NEXT_PUBLIC_ZAIIRE_BOOK_1_URL ?? "/comics",
      },
    ],
  },

  zu: {
    title: "ISIMANGA SAMASIKO ESIQALAYO",
    subtitle: "SEYATHOLAKALA EZITOLO",
    description:
      "UZaiire: INkosana yaseKongo usemathalofini ezincwadi ezidayiswa kakhulu eKenya. Abafundi bangempela. Umthelela wangempela. I-Afrika yangempela.",
    items: [
      {
        image: "/images/bookstore-display.jpg",
        imageAlt:
          "Ishalofu lezincwadi ezidayiswa kakhulu esitolo sezincwadi iNuria eNairobi, Kenya",
        text:
          "UZaiire wafinyelela eshalofini lezincwadi ezidayiswa kakhulu esitolo sezincwadi iNuria eNairobi, Kenya ngaphandle komsabalalisi, ngaphandle kweHollywood futhi ngaphandle kwesabelomali sokumaketha. Wakhiwe eKinshasa. Wadayiswa ngamandla endaba.",
        author: "ISOLELE",
        stars: 5,
        ctaLabel:
          "FUNDA INDABA ETHENGWA YI-AFRIKA — $36.99",
        ctaHref:
          process.env.NEXT_PUBLIC_ZAIIRE_BOOK_1_URL ?? "/comics",
      },
    ],
  },

  xh: {
    title: "INTSOMI YENKCUBEKO ESELWAKHIWENI",
    subtitle: "SELE IKWIIVENKILE",
    description:
      "UZaiire: INkosana yaseKongo sele ikwiishelufu zeencwadi ezithengiswa kakhulu eKenya. Abafundi bokwenene. Impembelelo yokwenene. Afrika yokwenene.",
    items: [
      {
        image: "/images/bookstore-display.jpg",
        imageAlt:
          "Ishelufu yeebestseller kwivenkile yeencwadi iNuria eNairobi, Kenya",
        text:
          "UZaiire wafikelela kwishelufu yeebestseller kwivenkile yeencwadi iNuria eNairobi, Kenya ngaphandle komsasazi, ngaphandle kweHollywood nangaphandle kwebhajethi yokuthengisa. Yakhiwe eKinshasa. Ithengiswe ngamandla ebali.",
        author: "ISOLELE",
        stars: 5,
        ctaLabel:
          "FUNDA IBALI ELITHENGWA YI-AFRIKA — $36.99",
        ctaHref:
          process.env.NEXT_PUBLIC_ZAIIRE_BOOK_1_URL ?? "/comics",
      },
    ],
  },

  ln: {
    title: "LIKAMBO YA CULTURE OYO EZALI KOBOTAMA",
    subtitle: "DÉJÀ NA LIBRAIRIE",
    description:
      "Zaiire : Prince ya Kongo ezali déjà na ba rayons ya bestsellers na Kenya. Batangi ya solo. Impact ya solo. Afrika ya solo.",
    items: [
      {
        image: "/images/bookstore-display.jpg",
        imageAlt:
          "Rayon ya bestsellers ya librairie Nuria na Nairobi, Kenya",
        text:
          "Zaiire ekomaki na rayon ya bestsellers na librairie Nuria na Nairobi, Kenya sans distributeur, sans Hollywood mpe sans budget marketing. Etongamaki na Kinshasa. Etekamaki na nguya ya lisolo.",
        author: "ISOLELE",
        stars: 5,
        ctaLabel:
          "TANGA LISOLÓ OYO AFRIKA EZALI KOSOMBA — $36.99",
        ctaHref:
          process.env.NEXT_PUBLIC_ZAIIRE_BOOK_1_URL ?? "/comics",
      },
    ],
  },
};

