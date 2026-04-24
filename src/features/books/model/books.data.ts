import type { SupportedLocale } from "@/lib/i18n/locales";
import type { BookPageData, BookSlug } from "./books.types";
import { BOOKS_CTA_LINKS } from "./books-cta-links";

const zaiireBookICover =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5413e9fc-976b-4c59-97bd-5858678b1f42.jpeg";
const zaiireBookIICover =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cover%20Book%202%20Isolele-QCEiRH2KJp3oFt4O31Qocqap3nLgiJ.jpg";

const booksPagesEn: Record<BookSlug, BookPageData> = {
  isolele: {
    slug: "isolele",
    title: "ISOLELE: The First Black African Superhero Universe",
    metaDescription:
      "ISOLELE is the first Black African superhero universe rooted in Kongo civilization, produced in Kinshasa and distributed worldwide.",
    heroImage: zaiireBookIICover,
    heroTag: "THE CHOSEN ONE",
    accentColor: "#F6B800",
    keywords: ["Black African superhero universe", "Kongo civilization comics", "ISOLELE universe", "African origin storytelling"],
    sections: [
      {
        type: "prose",
        paragraphs: [
          "ISOLELE is not a comic book company. It is a universe. Born from the roots of the Kongo civilization, the most powerful empire Central Africa has ever known, ISOLELE exists to give African children heroes who look like them, speak their language, and carry their ancestry. Every character, every story, every battle inside ISOLELE is rooted in real African history, real African spirituality, and real African royalty.",
          "Founded by King Kufulula, traditional King of the Bapindi people of the Democratic Republic of Congo, ISOLELE is produced in Kinshasa and distributed worldwide. This is not African inspiration. This is African origin.",
          "The ISOLELE universe spans comics, card games, board games, and luxury fragrances.",
        ],
      },
    ],
    ctas: [{ id: "explore-universe", label: "EXPLORE THE UNIVERSE", href: "/" }],
  },
  mokele: {
    slug: "mokele",
    title: "Mokele: From Child to Lord of Kinshasa | Black African Comics | ISOLELE",
    metaDescription:
      "Mokele is born into struggle. From the streets of Kinshasa to lord of the city. A Black African comic series set in the DRC, produced in Kinshasa. Part of the ISOLELE universe.",
    heroImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mokele.png-7sTyiUJYN8wJbiGll8YdVThtR4F8FT.jpeg",
    heroTag: "MOKELE",
    accentColor: "#4169E1",
    keywords: ["Mokele comic", "Black African comics", "Kinshasa comics", "DRC superhero universe"],
    sections: [
      {
        type: "prose",
        paragraphs: [
          "Mokele is not born a king. He is born into struggle. The streets of Kinshasa teach him before school ever could, where loyalty is fragile, violence is normal, and survival is everything. From child to hustler to lord. He builds power, money, and respect. In Kinshasa, you either get eaten\u2026 Or you become the predator. Mokele is a Black African comic character born in the streets of Kinshasa, DRC, where survival builds empires.",
        ],
      },
      {
        type: "image_quote",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mokele.png-7sTyiUJYN8wJbiGll8YdVThtR4F8FT.jpeg",
        imageAlt: "Mokele in Kinshasa",
        quote:
          "Kinshasa is not a backdrop. It is a character. Every street, every deal, every betrayal shaped Mokele into what no school, no king, and no empire could have built.",
        attribution: "BAMBULA",
      },
    ],
    ctas: [
      { id: "read-book-1", label: "READ BOOK I", href: BOOKS_CTA_LINKS.mokeleBookI },
      { id: "explore-universe", label: "EXPLORE THE UNIVERSE", href: "/", style: "secondary" },
    ],
  },
  bambula: {
    slug: "bambula",
    title: "Bambula: Child of Rhythm | Black African Superhero | ISOLELE Comics",
    metaDescription:
      "Bambula walks between the spirit world and the living, armed with the sacred drum. A Black African superhero rooted in Kongo spiritual tradition. Part of the ISOLELE universe, produced in Kinshasa, DRC.",
    heroImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bambula%201-UAlmQoZVy1GslUfmVvqc5bdDDdEQdX.jpg",
    heroTag: "BAMBULA",
    accentColor: "#B3541E",
    keywords: ["Bambula superhero", "Kongo spiritual tradition", "Black African superhero", "sacred drum hero"],
    sections: [
      {
        type: "prose",
        paragraphs: [
          "Before words, there was rhythm. Bambula was the child who heard everything. When the drums were taken and the land went silent, he kept the rhythm alive inside him. Armed with the sacred drum, he walks between the spirit world and the living. He does not fight to destroy. He protects to remember. Bambula is a Black African superhero rooted in Kongo spiritual tradition, where the sacred drum connects the living to the ancestors.",
        ],
      },
      {
        type: "image_quote",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bambula%201-UAlmQoZVy1GslUfmVvqc5bdDDdEQdX.jpg",
        imageAlt: "Bambula and the sacred drum",
        quote:
          "The drum was never just music. In Kongo tradition, the drum was a language, a weapon, and a bridge between worlds. Bambula carries all three.",
      },
    ],
    ctas: [
      { id: "read-chapter-1", label: "READ CHAPTER I", href: BOOKS_CTA_LINKS.bambulaChapterI },
      { id: "explore-universe", label: "EXPLORE THE UNIVERSE", href: "/", style: "secondary" },
    ],
  },
  makanda: {
    slug: "makanda",
    title: "Makanda: The Hidden Black African Dynasty | ISOLELE Comics",
    metaDescription:
      "Makanda is the most powerful empire in history that was never lost. A Black African comic series rooted in Kongo civilization, produced in Kinshasa, DRC. Part of the ISOLELE universe.",
    heroImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg",
    heroTag: "MAKANDA",
    accentColor: "#C0392B",
    keywords: ["Makanda dynasty", "Kongo civilization comics", "hidden African empire comic", "Black African comic series"],
    sections: [
      {
        type: "prose",
        paragraphs: [
          "Deep within Central Africa existed a civilization the world was never meant to know about. Spiritually awakened. Technologically advanced. Protected by the Sacred Flame. When outside forces came for what was theirs, the Makanda did not fall. They disappeared. Their city was never lost. It was waiting for the one born to carry the flame again.",
        ],
      },
      {
        type: "image_quote",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg",
        imageAlt: "Makanda sacred city",
        quote:
          "The Makanda are not refugees. They are not survivors. They are a civilization that chose disappearance over defeat. Now they return.",
      },
    ],
    ctas: [
      { id: "read-book-1", label: "READ BOOK I", href: BOOKS_CTA_LINKS.makandaBookI },
      { id: "explore-universe", label: "EXPLORE THE UNIVERSE", href: "/", style: "secondary" },
    ],
  },
  zaiire: {
    slug: "zaiire",
    title: "Zaiire: The Prince of Kongo | Black African Demi-God Superhero | ISOLELE",
    metaDescription:
      "Zaiire is the first Black African Demi-God superhero, Prince of the Kongo Kingdom, son of Shango and Princess Kimoya. The Necklace of Destiny awakens his power. Read the comic produced in Kinshasa, DRC.",
    heroImage: zaiireBookICover,
    heroTag: "ZAIIRE",
    accentColor: "#F6B800",
    keywords: ["Zaiire Prince of Kongo", "Black African demi-god superhero", "Necklace of Destiny", "Kongo kingdom comic"],
    sections: [
      {
        type: "heading_group",
        sections: [
          {
            heading: "The Origin of Zaiire",
            body: "Zaiire is not born a hero. He is born chosen. Son of Shango, the divine lord of thunder, and Princess Kimoya, a warrior queen of the Kongo royal bloodline, Zaiire carries two worlds inside him. The mortal world of kings, wars, and sacrifice. And the divine world of ancestral power, cosmic destiny, and forces older than any kingdom. He does not know his full power. He does not yet understand what the necklace means. But the necklace knows. It always knew.",
          },
          {
            heading: "The Necklace of Destiny",
            body: "Forged in the heart of the Kongo Kingdom, the Necklace of Destiny was never made to be worn. It was made to choose. Passed through centuries of fire, war, and silence, it carries the soul of every king who bled for their people and every queen who held the world together with bare hands. When it finds Zaiire, it does not shine. It awakens. Every ancestor who came before him speaks through it. Every battle they fought lives inside it. The necklace does not give Zaiire power. It returns to him what was always his.",
          },
          {
            heading: "The Mission",
            body: "Zaiire crosses the cosmos to find his mother Kimoya. What begins as a son searching for his mother becomes something larger than any one kingdom. Along the way, Zaiire discovers that the forces trying to erase Kongo history are not finished. They never were. He is not just a prince fighting for his mother. He is the last defense of a civilization the world tried to forget.",
          },
          {
            heading: "What Zaiire Represents",
            body: "Zaiire exists because African children deserve to see themselves as Demi-Gods. Not sidekicks. Not supporting characters. Not the diversity addition to someone else's universe. The hero. The chosen one. The prince whose bloodline carries the weight of one of the greatest civilizations in human history. Every child who reads Zaiire will know that their ancestors were kings and queens who fought, built, and never surrendered. Zaiire is proof that Africa has always had heroes.",
          },
        ],
      },
      {
        type: "books_gallery",
        heading: "The Books",
        images: [
          { src: zaiireBookICover, alt: "Zaiire Book I cover" },
          { src: zaiireBookIICover, alt: "Zaiire Book II cover" },
        ],
        caption:
          "Zaiire: The Prince of Kongo and the Necklace of Destiny \u2014 Book I is available now. Book II launches June 30, 2026, Congo Independence Day. The day the Kongo universe expands.",
      },
    ],
    ctas: [
      { id: "read-book-1", label: "READ BOOK I", href: BOOKS_CTA_LINKS.zaiireBookI },
      { id: "preorder-book-2", label: "PRE-ORDER BOOK II", href: BOOKS_CTA_LINKS.zaiireBookIIPreorder },
      { id: "explore-universe", label: "EXPLORE THE UNIVERSE", href: "/", style: "secondary" },
    ],
  },
  kufu: {
    slug: "kufu",
    title: "Kufu: The First Pan-African Card Game | African Kings and Queens | ISOLELE",
    metaDescription:
      "Kufu is the first Pan-African card game featuring 103 cards of African kings, queens, and warriors rooted in Kongo civilization. Every game is a coronation. Launching June 30, 2026.",
    heroImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260311-WA0030-kydmLlQEI33of4mfyTaGi2r6TNvZWz.jpg",
    heroTag: "KUFU",
    accentColor: "#F8B90D",
    keywords: ["Pan-African card game", "Kufu card game", "African kings and queens cards", "Kongo strategy game"],
    sections: [
      {
        type: "heading_group",
        sections: [
          {
            heading: "What is Kufu",
            body: "Kufu is not just a card game. It is a ceremony. 103 cards featuring the most powerful figures in African history, Kongo royalty, African warriors, and the characters of the ISOLELE universe. From Kufulula, the supreme card, down through RoiRoyal, Bantu, African Royalty, Spades, Royal Court, and Numbers. Every card carries a name, a history, and a power. To win at Kufu is not just to outplay your opponent. It is to prove you are worthy of the crown.",
          },
          {
            heading: "The Cards",
            body: "The 103 cards of Kufu feature real African historical figures including Shaka Zulu, Queen Nzinga, Patrice Lumumba, and Kimpa Vita. They feature ISOLELE universe characters rooted in Kongo mythology. And they feature one deliberate statement: Leopold II is a Joker card, the lowest card in the deck with no power. In Kufu, history is corrected. African kings and queens stand above their oppressors. Always.",
          },
          {
            heading: "Three Ways to Play",
            body: "Kufu offers three variant game modes. Sudden Coronation, where the crown is claimed in one decisive moment. Twin Prophecy, where destiny splits and two paths lead to power. And People's Crown, where the people decide who rules. Every mode is a different lesson in African leadership, strategy, and royalty.",
          },
          {
            heading: "Launch Date",
            body: "Kufu launches June 30, 2026. Congo Independence Day. The day the Kongo universe gives the world its first Pan-African card game.",
          },
        ],
      },
      {
        type: "image_quote",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260311-WA0030-kydmLlQEI33of4mfyTaGi2r6TNvZWz.jpg",
        imageAlt: "Kufu cards visual",
        quote: "Every game is a coronation.",
      },
    ],
    ctas: [
      { id: "preorder-kufu", label: "PRE-ORDER KUFU", href: BOOKS_CTA_LINKS.kufuPreorder },
      { id: "explore-universe", label: "EXPLORE THE UNIVERSE", href: "/", style: "secondary" },
    ],
  },
};

const booksPagesFr: Record<BookSlug, BookPageData> = {
  ...booksPagesEn,
  isolele: {
    ...booksPagesEn.isolele,
    title: "ISOLELE: Le premier univers de super-heros africains noirs",
    metaDescription:
      "ISOLELE est le premier univers de super-heros africains noirs, enraciné dans la civilisation Kongo, produit a Kinshasa et diffuse dans le monde.",
    heroTag: "THE CHOSEN ONE",
    keywords: ["univers de super-heros africains noirs", "civilisation Kongo comics", "univers ISOLELE", "origine africaine"],
    sections: [
      {
        type: "prose",
        paragraphs: [
          "ISOLELE n'est pas une maison de comics. C'est un univers. Ne des racines de la civilisation Kongo, l'empire le plus puissant qu'ait connu l'Afrique centrale, ISOLELE existe pour donner aux enfants africains des heros qui leur ressemblent, parlent leur langue et portent leur lignage.",
          "Fonde par le roi Kufulula, roi traditionnel du peuple Bapindi en Republique Democratique du Congo, ISOLELE est produit a Kinshasa et diffuse dans le monde. Ce n'est pas une inspiration africaine. C'est une origine africaine.",
          "L'univers ISOLELE s'etend aux comics, jeux de cartes, jeux de societe et parfums de luxe.",
        ],
      },
    ],
    ctas: [{ id: "explore-universe", label: "EXPLORER L'UNIVERS", href: "/" }],
  },
  mokele: {
    ...booksPagesEn.mokele,
    title: "Mokele: De l'enfant au seigneur de Kinshasa | Comics africains noirs | ISOLELE",
    metaDescription:
      "Mokele nait dans la lutte. Des rues de Kinshasa au controle de la ville. Une serie de comics africains noirs produite a Kinshasa, RDC.",
    keywords: ["Mokele comic", "comics africains noirs", "Kinshasa", "RDC"],
    sections: [
      {
        type: "prose",
        paragraphs: [
          "Mokele n'est pas ne roi. Il est ne dans la lutte. Les rues de Kinshasa lui apprennent avant l'ecole, la ou la loyaute est fragile, la violence normale et la survie essentielle. De l'enfant au hustler puis au seigneur, il construit pouvoir, argent et respect. A Kinshasa, soit on te devore... soit tu deviens le predateur. Mokele est un personnage de comic africain noir ne dans les rues de Kinshasa, RDC, ou la survie construit des empires.",
        ],
      },
      {
        type: "image_quote",
        image: booksPagesEn.mokele.heroImage,
        imageAlt: "Mokele a Kinshasa",
        quote:
          "Kinshasa n'est pas un decor. C'est un personnage. Chaque rue, chaque deal, chaque trahison a faconne Mokele en ce qu'aucune ecole, aucun roi et aucun empire n'aurait pu construire.",
        attribution: "BAMBULA",
      },
    ],
    ctas: [
      { id: "read-book-1", label: "LIRE LE LIVRE I", href: BOOKS_CTA_LINKS.mokeleBookI },
      { id: "explore-universe", label: "EXPLORER L'UNIVERS", href: "/", style: "secondary" },
    ],
  },
  bambula: {
    ...booksPagesEn.bambula,
    title: "Bambula: Enfant du rythme | Super-heros africain noir | ISOLELE Comics",
    metaDescription:
      "Bambula marche entre le monde des esprits et celui des vivants, arme du tambour sacre. Un super-heros africain noir ancre dans la tradition Kongo.",
    keywords: ["Bambula", "super-heros africain noir", "tradition Kongo", "tambour sacre"],
    sections: [
      {
        type: "prose",
        paragraphs: [
          "Avant les mots, il y avait le rythme. Bambula etait l'enfant qui entendait tout. Quand les tambours furent pris et que la terre devint silencieuse, il garda le rythme vivant en lui. Arme du tambour sacre, il marche entre le monde des esprits et celui des vivants. Il ne combat pas pour detruire. Il protege pour se souvenir.",
        ],
      },
      {
        type: "image_quote",
        image: booksPagesEn.bambula.heroImage,
        imageAlt: "Bambula et le tambour sacre",
        quote:
          "Le tambour n'a jamais ete seulement de la musique. Dans la tradition Kongo, le tambour etait une langue, une arme et un pont entre les mondes. Bambula porte les trois.",
      },
    ],
    ctas: [
      { id: "read-chapter-1", label: "LIRE LE CHAPITRE I", href: BOOKS_CTA_LINKS.bambulaChapterI },
      { id: "explore-universe", label: "EXPLORER L'UNIVERS", href: "/", style: "secondary" },
    ],
  },
  makanda: {
    ...booksPagesEn.makanda,
    title: "Makanda: La dynastie africaine noire cachee | ISOLELE Comics",
    metaDescription:
      "Makanda est l'empire le plus puissant de l'histoire qui n'a jamais ete perdu. Serie de comics africains noirs ancree dans la civilisation Kongo.",
    keywords: ["Makanda", "civilisation Kongo", "empire africain", "comics africains noirs"],
    sections: [
      {
        type: "prose",
        paragraphs: [
          "Au coeur de l'Afrique centrale existait une civilisation que le monde n'etait jamais cense connaitre. Eveillee spirituellement. Technologiquement avancee. Protegee par la Flamme Sacree. Quand des forces exterieures sont venues prendre ce qui leur appartenait, les Makanda ne sont pas tombes. Ils ont disparu. Leur cite n'a jamais ete perdue. Elle attendait celle ou celui qui devait porter la flamme a nouveau.",
        ],
      },
      {
        type: "image_quote",
        image: booksPagesEn.makanda.heroImage,
        imageAlt: "Cite sacree de Makanda",
        quote:
          "Les Makanda ne sont pas des refugies. Ils ne sont pas des survivants. Ils sont une civilisation qui a choisi la disparition plutot que la defaite. Maintenant, ils reviennent.",
      },
    ],
    ctas: [
      { id: "read-book-1", label: "LIRE LE LIVRE I", href: BOOKS_CTA_LINKS.makandaBookI },
      { id: "explore-universe", label: "EXPLORER L'UNIVERS", href: "/", style: "secondary" },
    ],
  },
  zaiire: {
    ...booksPagesEn.zaiire,
    title: "Zaiire: Le Prince du Kongo | Demi-Dieu super-heros africain noir | ISOLELE",
    metaDescription:
      "Zaiire est le premier Demi-Dieu super-heros africain noir, prince du Royaume Kongo, fils de Shango et de la princesse Kimoya.",
    keywords: ["Zaiire", "Prince du Kongo", "Demi-Dieu africain", "Collier du Destin"],
    sections: [
      {
        type: "heading_group",
        sections: [
          {
            heading: "L'origine de Zaiire",
            body: "Zaiire ne nait pas heros. Il nait choisi. Fils de Shango, seigneur divin de la foudre, et de la princesse Kimoya, reine guerriere de sang royal Kongo, Zaiire porte deux mondes en lui: le monde mortel des rois, des guerres et du sacrifice, et le monde divin de la puissance ancestrale et du destin cosmique.",
          },
          {
            heading: "Le Collier du Destin",
            body: "Forge au coeur du Royaume Kongo, le Collier du Destin n'a jamais ete fait pour etre porte. Il a ete fait pour choisir. Traverse par des siecles de feu, de guerre et de silence, il porte l'ame des rois et des reines qui ont defendu leur peuple.",
          },
          {
            heading: "La mission",
            body: "Zaiire traverse le cosmos pour retrouver sa mere Kimoya. Ce qui commence comme la quete d'un fils devient plus grand que n'importe quel royaume: la defense finale d'une civilisation que le monde a tente d'effacer.",
          },
          {
            heading: "Ce que Zaiire represente",
            body: "Zaiire existe parce que les enfants africains meritent de se voir comme des Demi-Dieux. Pas des sidekicks. Pas des personnages secondaires. Le heros principal.",
          },
        ],
      },
      {
        type: "books_gallery",
        heading: "Les livres",
        images: [
          { src: zaiireBookICover, alt: "Couverture Zaiire Livre I" },
          { src: zaiireBookIICover, alt: "Couverture Zaiire Livre II" },
        ],
        caption:
          "Zaiire: Le Prince du Kongo et le Collier du Destin — Le Livre I est disponible. Le Livre II sort le 30 juin 2026, jour de l'Independance du Congo.",
      },
    ],
    ctas: [
      { id: "read-book-1", label: "LIRE LE LIVRE I", href: BOOKS_CTA_LINKS.zaiireBookI },
      { id: "preorder-book-2", label: "PRECOMMANDER LE LIVRE II", href: BOOKS_CTA_LINKS.zaiireBookIIPreorder },
      { id: "explore-universe", label: "EXPLORER L'UNIVERS", href: "/", style: "secondary" },
    ],
  },
  kufu: {
    ...booksPagesEn.kufu,
    title: "Kufu: Le premier jeu de cartes panafricain | Rois et reines d'Afrique | ISOLELE",
    metaDescription:
      "Kufu est le premier jeu de cartes panafricain avec 103 cartes de rois, reines et guerriers africains, enraciné dans la civilisation Kongo.",
    keywords: ["Kufu", "jeu de cartes panafricain", "rois et reines d'Afrique", "strategie Kongo"],
    sections: [
      {
        type: "heading_group",
        sections: [
          {
            heading: "Qu'est-ce que Kufu",
            body: "Kufu n'est pas seulement un jeu de cartes. C'est une ceremonie. 103 cartes avec des figures majeures de l'histoire africaine, la royaute Kongo, des guerriers africains et les personnages de l'univers ISOLELE.",
          },
          {
            heading: "Les cartes",
            body: "Les 103 cartes de Kufu incluent des figures historiques africaines telles que Shaka Zulu, la reine Nzinga, Patrice Lumumba et Kimpa Vita, ainsi que des personnages ISOLELE lies a la mythologie Kongo.",
          },
          {
            heading: "Trois modes de jeu",
            body: "Kufu propose trois variantes: Sudden Coronation, Twin Prophecy et People's Crown. Chaque mode enseigne une facon differente de penser le leadership, la strategie et la royaute africaine.",
          },
          {
            heading: "Date de lancement",
            body: "Kufu sort le 30 juin 2026, jour de l'Independance du Congo.",
          },
        ],
      },
      {
        type: "image_quote",
        image: booksPagesEn.kufu.heroImage,
        imageAlt: "Visuel des cartes Kufu",
        quote: "Chaque partie est un couronnement.",
      },
    ],
    ctas: [
      { id: "preorder-kufu", label: "PRECOMMANDER KUFU", href: BOOKS_CTA_LINKS.kufuPreorder },
      { id: "explore-universe", label: "EXPLORER L'UNIVERS", href: "/", style: "secondary" },
    ],
  },
};

const booksPagesByLocale: Record<SupportedLocale, Record<BookSlug, BookPageData>> = {
  en: booksPagesEn,
  fr: booksPagesFr,
};

export function getBooksStaticParams() {
  return Object.keys(booksPagesEn).map((slug) => ({ slug }));
}

export function getBookBySlug(slug: string, locale: SupportedLocale = "en") {
  const pages = booksPagesByLocale[locale] ?? booksPagesByLocale.en;
  return pages[slug as BookSlug] ?? booksPagesByLocale.en[slug as BookSlug] ?? null;
}
