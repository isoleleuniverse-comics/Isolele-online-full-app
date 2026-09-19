import type { HomeReviewsContent } from "@/features/home/content/types";

export const reviewsData: Record<string, HomeReviewsContent> = {
  en: {
  title: "A CULTURAL PHENOMENON IN THE MAKING",
  subtitle: "IN STORES NOW",
  description:
    "Zaiire: The Prince of Kongo is already on bestseller shelves in Kenya. Real readers. Real impact. Real Africa.",
  items: [
    {
      image: "/images/bookstore-display.webp",
      imageAlt: "Nuria bookstore bestseller shelf in Nairobi, Kenya",
      text: "Zaiire reached the bestseller shelf at Nuria bookstore in Nairobi, Kenya without a distributor, without Hollywood, and without a marketing budget. Built in Kinshasa. Sold by the power of the story.",
      author: "ISOLELE",
      stars: 5,
      ctaLabel: "READ THE STORY THAT AFRICA IS BUYING — $60.97",
      ctaHref: process.env.NEXT_PUBLIC_ZAIIRE_BOOK_1_URL ?? "/comics",
    },
  ],
},
fr:{
  title: "UN PHÉNOMÈNE CULTUREL EN DEVENIR",
  subtitle: "DÉJÀ EN LIBRAIRIE",
  description:
    "Zaiire : Le Prince du Kongo est déjà en tête des ventes dans les librairies au Kenya. De vrais lecteurs. Un impact réel. Une Afrique réelle.",
  items: [
    {
      image: "/images/bookstore-display.webp",
      imageAlt: "Rayon des bestsellers de la librairie Nuria à Nairobi, Kenya",
      text: "Zaiire a atteint le rayon des bestsellers de la librairie Nuria à Nairobi, Kenya sans distributeur, sans Hollywood et sans budget marketing. Construit à Kinshasa. Vendu par la puissance de l'histoire.",author: "ISOLELE",
      stars: 5,
      ctaLabel: "LISEZ L'HISTOIRE QUE L'AFRIQUE ACHÈTE — 60,97 $",
      ctaHref: process.env.NEXT_PUBLIC_ZAIIRE_BOOK_1_URL ?? "/comics",
    },
  ],
},
  pt: {
    title: "UM FENÓMENO CULTURAL EM CONSTRUÇÃO",
    subtitle: "JÁ NAS LOJAS",
    description:
      "Zaiire: O Príncipe do Kongo já está nas prateleiras de mais vendidos no Quénia. Leitores reais. Impacto real. África real.",
    items: [
      {
        image: "/images/bookstore-display.webp",
        imageAlt: "Prateleira de mais vendidos da livraria Nuria em Nairóbi, Quénia",
        text: "Zaiire chegou à prateleira de mais vendidos da livraria Nuria em Nairóbi, Quénia, sem distribuidor, sem Hollywood e sem orçamento de marketing. Construído em Kinshasa. Vendido pelo poder da história.",
        author: "ISOLELE",
        stars: 5,
        ctaLabel: "LEIA A HISTÓRIA QUE A ÁFRICA ESTÁ A COMPRAR — $60.97",
        ctaHref: process.env.NEXT_PUBLIC_ZAIIRE_BOOK_1_URL ?? "/comics",
      },
    ],
  },
  es: {
    title: "UN FENÓMENO CULTURAL EN CONSTRUCCIÓN",
    subtitle: "YA EN LAS TIENDAS",
    description:
      "Zaiire: El Príncipe de Kongo ya está en las estanterías de más vendidos en Kenia. Lectores reales. Impacto real. África real.",
    items: [
      {
        image: "/images/bookstore-display.webp",
        imageAlt: "Estantería de más vendidos de la librería Nuria en Nairobi, Kenia",
        text: "Zaiire llegó a la estantería de más vendidos de la librería Nuria en Nairobi, Kenia, sin distribuidor, sin Hollywood y sin presupuesto de marketing. Construido en Kinshasa. Vendido por el poder de la historia.",
        author: "ISOLELE",
        stars: 5,
        ctaLabel: "LEE LA HISTORIA QUE ÁFRICA ESTÁ COMPRANDO — $60.97",
        ctaHref: process.env.NEXT_PUBLIC_ZAIIRE_BOOK_1_URL ?? "/comics",
      },
    ],
  },
  zu: {
    title: "ISIMANGALISO SAMASIKO ESISAKHIWA",
    subtitle: "SEKUTHOLAKALA EZITOLO",
    description:
      "Zaiire: Inkosana yaseKongo sekuvele kukhonkotha ezitezi zezithengiswa kakhulu eKenya. Abafundi bangempela. Umthelela wangempela. I-Afrika yangempela.",
    items: [
      {
        image: "/images/bookstore-display.webp",
        imageAlt: "Isiteji sezithengiswa kakhulu esitolo saseNuria eNairobi, eKenya",
        text: "UZaiire ufinyelele esitezini sezithengiswa kakhulu esitolo saseNuria eNairobi, eKenya ngaphandle komabhalane, ngaphandle kweHollywood, futhi ngaphandle kwesabelomali sokumaketha. Wakhiwa eKinshasa. Wathengiswa ngamandla endaba.",
        author: "ISOLELE",
        stars: 5,
        ctaLabel: "FUNDA INDABA I-AFRIKA EYITHENGAYO — $60.97",
        ctaHref: process.env.NEXT_PUBLIC_ZAIIRE_BOOK_1_URL ?? "/comics",
      },
    ],
  },
  xh: {
    title: "UMNYHADALA WENKCUBEKO OSAKHIWAYO",
    subtitle: "SELE SIVENKILENI",
    description:
      "Zaiire: Inkosana yaseKongo sele iphindwe kwiividyo zeencwadi ezithengiswa kakhulu eKenya. Abafundi bokwenyani. Iimpembelelo zokwenyani. I-Afrika yokwenyani.",
    items: [
      {
        image: "/images/bookstore-display.webp",
        imageAlt: "Ividyo yeencwadi ezithengiswa kakhulu kwivenkile yeeNuria eNairobi, eKenya",
        text: "UZaiire ufikelele kwividyo yeencwadi ezithengiswa kakhulu kwivenkile yeeNuria eNairobi, eKenya ngaphandle komthengisi, ngaphandle kweHollywood, kwaye ngaphandle kwebhajethi yentengiso. Yakhiwe eKinshasa. Yathengiswa ngamandla ebali.",
        author: "ISOLELE",
        stars: 5,
        ctaLabel: "FUNDA IBALI ELITHENGWA YI-AFRIKA — $60.97",
        ctaHref: process.env.NEXT_PUBLIC_ZAIIRE_BOOK_1_URL ?? "/comics",
      },
    ],
  },
  sw: {
    title: "JAMBO KUBWA LA KIUTAMADUNI LINALOJENGWA",
    subtitle: "SASA MADUKANI",
    description:
      "Zaiire: Mkuu wa Kongo tayari yupo kwenye rafu za vitabu vinavyouzwa zaidi nchini Kenya. Wasomaji halisi. Athari halisi. Afrika halisi.",
    items: [
      {
        image: "/images/bookstore-display.webp",
        imageAlt: "Rafu ya vitabu vinavyouzwa zaidi katika duka la vitabu la Nuria, Nairobi, Kenya",
        text: "Zaiire ilifika kwenye rafu ya vitabu vinavyouzwa zaidi katika duka la vitabu la Nuria huko Nairobi, Kenya bila msambazaji, bila Hollywood, na bila bajeti ya masoko. Ilijengwa Kinshasa. Iliuzwa kwa nguvu ya hadithi.",
        author: "ISOLELE",
        stars: 5,
        ctaLabel: "SOMA HADITHI AMBAYO AFRIKA INANUNUA — $60.97",
        ctaHref: process.env.NEXT_PUBLIC_ZAIIRE_BOOK_1_URL ?? "/comics",
      },
    ],
  },
  ln: {
    title: "LIKAMWISI YA MIMESENO OYO EZALI KOTONGAMA",
    subtitle: "EZALI DÉJÀ NA BA MAGASIN",
    description:
      "Zaiire: Mwana-mokonzi ya Kongo azali déjà na ba étagère ya mikanda oyo etekemi mingi na Kenya. Batangi ya solo. Effet ya solo. Afrika ya solo.",
    items: [
      {
        image: "/images/bookstore-display.webp",
        imageAlt: "Étagère ya mikanda oyo etekemi mingi na magazini ya Nuria na Nairobi, Kenya",
        text: "Zaiire ekomi na étagère ya mikanda oyo etekemi mingi na magazini ya Nuria na Nairobi, Kenya kozanga distributeur, kozanga Hollywood, mpe kozanga budget ya publicité. Etongami na Kinshasa. Etekemi na nguya ya lisolo.",
        author: "ISOLELE",
        stars: 5,
        ctaLabel: "TANGA LISOLO OYO AFRIKA EZALI KOSOMBA — $60.97",
        ctaHref: process.env.NEXT_PUBLIC_ZAIIRE_BOOK_1_URL ?? "/comics",
      },
    ],
  },
};

