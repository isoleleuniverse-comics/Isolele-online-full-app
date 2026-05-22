import type { ArticleBlock } from "@/features/articles/model/article-blocks";
import type { SupportedLocale } from "@/shared/i18n/locales";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export interface StaticArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  coverImage: string | null;
  published: boolean;
  blocksJson: ArticleBlock[];
  createdAt: Date;
  updatedAt: Date;
}

// ---------------------------------------------------------------------------
// Locale-aware data map
// ---------------------------------------------------------------------------
const ARTICLES_BY_LOCALE: Record<SupportedLocale, StaticArticle[]> = {

  // ══════════════════════════════════════════════════════════════════════════
  //  FRANÇAIS
  // ══════════════════════════════════════════════════════════════════════════
  fr: [
    // ── Article 1 ───────────────────────────────────────────────────────────
    {
      id: "article-univers-isolele",
      slug: "lunivers-disolele-entre-mythe-et-modernite",
      title: "L'univers d'Isolele : entre mythe et modernité",
      excerpt:
        "Plongez au cœur de la création d'Isolele, un monde où les légendes africaines rencontrent la narration graphique contemporaine.",
      coverImage: "/royal-palace-background.png",
      published: true,
      createdAt: new Date("2026-04-01T10:00:00Z"),
      updatedAt: new Date("2026-04-15T08:30:00Z"),
      blocksJson: [
        {
          id: "h1",
          type: "heading",
          text: "Les racines d'un monde imaginaire",
        },
        {
          id: "t1",
          type: "paragraph",
          text: "Isolele est né d'une ambition simple mais profonde : donner vie aux récits oraux de l'Afrique centrale à travers la bande dessinée. Chaque ligne dessinée, chaque couleur choisie, chaque mot posé sur la page est le fruit d'un dialogue entre tradition et innovation.\n\nLe roi Kufulula, figure centrale de l'univers, n'est pas seulement un personnage de fiction. Il est l'incarnation de siècles de sagesse, de guerres oubliées et de pactes scellés sous des arbres millénaires. Son règne est une métaphore de la quête identitaire que vivent des millions de personnes à travers le monde.",
        },
        {
          id: "q1",
          type: "quote",
          text: "Un conte qui ne voyage pas est un conte qui meurt.",
          author: "Proverbe Kongo",
        },
        {
          id: "h2",
          type: "heading",
          text: "Une esthétique délibérément hybride",
        },
        {
          id: "t2",
          type: "paragraph",
          text: "La direction artistique d'Isolele refuse de choisir entre les codes de la bande dessinée franco-belge, du manga et de l'illustration africaine contemporaine. Ce métissage revendiqué produit un style immédiatement reconnaissable : des aplats de couleurs chaudes empruntés aux tissus wax, des compositions dynamiques héritées du 9e art européen, et une typographie qui intègre des glyphes inspirés des idéogrammes nsibidi.\n\nChaque case est pensée comme un tableau autonome, capable d'exister indépendamment de la séquence narrative tout en contribuant à l'élan dramatique de l'histoire.",
        },
        {
          id: "d1",
          type: "divider",
        },
        {
          id: "h3",
          type: "heading",
          text: "Kufu Game : le monde dans tes mains",
        },
        {
          id: "t3",
          type: "paragraph",
          text: "L'extension vidéoludique de l'univers Isolele, baptisée Kufu Game, transpose les mécaniques narratives de la BD en expérience interactive. Les joueurs explorent le royaume, résolvent des énigmes fondées sur la cosmologie locale et participent à des rituels virtuels qui reflètent des pratiques culturelles authentiques.\n\nLoin d'être un simple produit dérivé, Kufu Game est conçu comme un vecteur d'éducation culturelle, accessible dès l'âge de 7 ans et validé par un comité de linguistes et d'anthropologues partenaires du projet.",
        },
        {
          id: "cta1",
          type: "cta",
          title: "Découvrez le premier tome",
          description:
            "Commandez le premier volume de la saga Isolele et rejoignez des milliers de lecteurs à travers le monde.",
          buttonLabel: "Voir les livres",
          href: "/fr/books",
        },
      ],
    },

    // ── Article 2 ───────────────────────────────────────────────────────────
    {
      id: "article-kufulula-roi",
      slug: "kufulula-anatomie-dun-roi-hors-du-commun",
      title: "Kufulula : anatomie d'un roi hors du commun",
      excerpt:
        "Qui est vraiment le roi Kufulula ? Portrait d'un personnage complexe, à la fois guerrier, diplomate et gardien des ancêtres.",
      coverImage: "/royal-palace-background.png",
      published: true,
      createdAt: new Date("2026-04-10T14:00:00Z"),
      updatedAt: new Date("2026-04-20T11:00:00Z"),
      blocksJson: [
        {
          id: "h1",
          type: "heading",
          text: "L'enfance du roi",
        },
        {
          id: "t1",
          type: "paragraph",
          text: "Avant d'être roi, Kufulula était enfant. Né pendant une éclipse lunaire dans la province de Mbata, il fut immédiatement confié aux devins du palais qui virent dans sa naissance un signe ambigu : à la fois promesse de prospérité et présage de bouleversements profonds.\n\nSon éducation fut rigoureuse. Dès l'âge de cinq ans, il apprenait à lire les étoiles, à identifier les plantes médicinales et à écouter les ancêtres à travers le murmure du vent dans les hautes herbes de la savane. Son mentor, le vieux Nsamba, lui enseigna que la force d'un roi ne réside pas dans ses armées, mais dans sa capacité à comprendre les silences de son peuple.",
        },
        {
          id: "q1",
          type: "quote",
          text: "Gouverner, c'est d'abord savoir se taire au bon moment.",
          author: "Nsamba, conseiller royal",
        },
        {
          id: "h2",
          type: "heading",
          text: "La guerre des Trois Rivières",
        },
        {
          id: "t2",
          type: "paragraph",
          text: "Le baptême du feu de Kufulula survint lors de la guerre des Trois Rivières, un conflit territorial qui opposa le royaume d'Isolele à deux royaumes voisins pendant sept saisons. À dix-neuf ans, il commandait le flanc ouest des armées royales avec une habileté tactique qui dérouta ses adversaires.\n\nCe qui distingue Kufulula des conquérants ordinaires, c'est qu'après chaque victoire militaire, il s'asseyait avec les chefs ennemis défaits pour boire le même vin de palme. Pour lui, la paix n'est pas l'absence de guerre — c'est une architecture délicate qu'on bâtit patiemment, pierre après pierre.",
        },
        {
          id: "d1",
          type: "divider",
        },
        {
          id: "h3",
          type: "heading",
          text: "Les pouvoirs du gardien",
        },
        {
          id: "t3",
          type: "paragraph",
          text: "Dans la mythologie d'Isolele, le roi n'est pas simplement un chef politique. Il est le nexus entre le monde des vivants et celui des ancêtres. Kufulula hérite de ce rôle avec un mélange de foi sincère et de scepticisme discret — une tension qui le rend particulièrement humain et attachant.\n\nSes pouvoirs, décrits dans les tomes comme des manifestations de sa connexion aux forces ancestrales, sont toujours représentés avec une sobriété visuelle remarquable : pas d'effets spéciaux tapageurs, mais des petits détails subtils — une flamme qui ne vacille pas par vent fort, une plante qui fleurit hors saison à son passage.",
        },
        {
          id: "cta2",
          type: "cta",
          title: "Explorez les personnages",
          description:
            "Découvrez toute la galerie des personnages qui peuplent l'univers d'Isolele.",
          buttonLabel: "Voir les personnages",
          href: "/fr/characters",
        },
      ],
    },

    // ── Article 3 ───────────────────────────────────────────────────────────
    {
      id: "article-processus-creatif",
      slug: "dessiner-lafrique-autrement-le-processus-creatif-disolele",
      title: "Dessiner l'Afrique autrement : le processus créatif d'Isolele",
      excerpt:
        "De l'esquisse au produit final, découvrez les coulisses de la création des planches d'Isolele et la vision artistique qui les anime.",
      coverImage: "/royal-palace-background.png",
      published: true,
      createdAt: new Date("2026-05-01T09:00:00Z"),
      updatedAt: new Date("2026-05-05T16:45:00Z"),
      blocksJson: [
        {
          id: "h1",
          type: "heading",
          text: "Tout commence par un carnet",
        },
        {
          id: "t1",
          type: "paragraph",
          text: "Le processus créatif d'Isolele commence invariablement par des carnets de croquis. Des centaines de pages couvertes de visages, de postures, d'expressions — une exploration patiente de la façon dont les émotions s'écrivent sur les corps africains, si souvent mal représentés dans la culture populaire mondiale.\n\nL'équipe créative refuse le raccourci des stéréotypes visuels. Chaque personnage est documenté : sa tribu, ses vêtements, ses scarifications le cas échéant, ses bijoux, sa façon de marcher. Ce travail de documentation prend parfois plus de temps que la réalisation des planches elles-mêmes.",
        },
        {
          id: "q1",
          type: "quote",
          text: "Chaque visage que je dessine est une promesse faite à quelqu'un que je n'ai jamais rencontré mais que je respecte profondément.",
          author: "L'auteur d'Isolele",
        },
        {
          id: "h2",
          type: "heading",
          text: "La couleur comme langage",
        },
        {
          id: "t2",
          type: "paragraph",
          text: "La palette chromatique d'Isolele n'est pas aléatoire. Chaque arc narratif possède sa propre dominante colorielle, qui évolue imperceptiblement au fil des planches pour accompagner les états émotionnels des personnages. Les scènes de paix baignent dans des ocres chauds et des verts profonds. Les moments de tension glissent vers des bleus nuit et des rouges sang discrets.\n\nCette cohérence chromatique est le résultat d'une collaboration étroite entre le scénariste et le coloriste, qui se réunissent régulièrement pour calibrer l'atmosphère de chaque chapitre avant même que le crayon ne touche le papier.",
        },
        {
          id: "d1",
          type: "divider",
        },
        {
          id: "h3",
          type: "heading",
          text: "L'impression : un acte militant",
        },
        {
          id: "t3",
          type: "paragraph",
          text: "Isolele est imprimé sur du papier certifié FSC, en Europe, avec des encres végétales. Ce choix n'est pas anodin : il s'inscrit dans une réflexion plus large sur la responsabilité écologique de l'industrie de l'édition et sur la cohérence entre les valeurs portées par l'œuvre et les conditions matérielles de sa production.\n\nLes couvertures sont réalisées en impression numérique haute définition avec un vernis sélectif sur certains éléments graphiques, créant un effet de relief qui invite le lecteur à toucher le livre avant même de l'ouvrir. Le livre comme objet sensoriel — une philosophie qui court tout au long du projet Isolele.",
        },
        {
          id: "cta3",
          type: "cta",
          title: "Suivez l'aventure Isolele",
          description:
            "Rejoignez notre communauté et recevez les dernières actualités, planches exclusives et événements à venir.",
          buttonLabel: "Découvrir l'univers",
          href: "/fr/comics",
        },
      ],
    },
  ],

  // ══════════════════════════════════════════════════════════════════════════
  //  ENGLISH
  // ══════════════════════════════════════════════════════════════════════════
  en: [
    // ── Article 1 ───────────────────────────────────────────────────────────
    {
      id: "article-univers-isolele",
      slug: "the-isolele-universe-between-myth-and-modernity",
      title: "The Isolele Universe: Between Myth and Modernity",
      excerpt:
        "Dive into the heart of Isolele's creation — a world where African legends collide with contemporary graphic storytelling.",
      coverImage: "/royal-palace-background.png",
      published: true,
      createdAt: new Date("2026-04-01T10:00:00Z"),
      updatedAt: new Date("2026-04-15T08:30:00Z"),
      blocksJson: [
        {
          id: "h1",
          type: "heading",
          text: "The roots of an imaginary world",
        },
        {
          id: "t1",
          type: "paragraph",
          text: "Isolele was born from a simple yet profound ambition: to breathe life into the oral traditions of Central Africa through comics. Every line drawn, every color chosen, every word set on the page is the result of a dialogue between tradition and innovation.\n\nKing Kufulula, the central figure of the universe, is not merely a fictional character. He is the embodiment of centuries of wisdom, forgotten wars, and pacts sealed beneath ancient trees. His reign is a metaphor for the quest for identity lived by millions of people around the world.",
        },
        {
          id: "q1",
          type: "quote",
          text: "A story that does not travel is a story that dies.",
          author: "Kongo Proverb",
        },
        {
          id: "h2",
          type: "heading",
          text: "A deliberately hybrid aesthetic",
        },
        {
          id: "t2",
          type: "paragraph",
          text: "The artistic direction of Isolele refuses to choose between the codes of Franco-Belgian comics, manga, and contemporary African illustration. This deliberate blending produces an immediately recognizable style: warm flat colors borrowed from wax fabrics, dynamic compositions inherited from the European 9th art, and typography that integrates glyphs inspired by nsibidi ideograms.\n\nEach panel is conceived as an autonomous painting, capable of existing independently of the narrative sequence while contributing to the dramatic momentum of the story.",
        },
        {
          id: "d1",
          type: "divider",
        },
        {
          id: "h3",
          type: "heading",
          text: "Kufu Game: The World in Your Hands",
        },
        {
          id: "t3",
          type: "paragraph",
          text: "The video game extension of the Isolele universe, called Kufu Game, transposes the narrative mechanics of the comic into an interactive experience. Players explore the kingdom, solve puzzles rooted in local cosmology, and participate in virtual rituals reflecting authentic cultural practices.\n\nFar from being a simple spin-off, Kufu Game is designed as a vehicle for cultural education, accessible from age 7 and validated by a committee of linguists and anthropologists partnering with the project.",
        },
        {
          id: "cta1",
          type: "cta",
          title: "Discover the first volume",
          description:
            "Order the first volume of the Isolele saga and join thousands of readers around the world.",
          buttonLabel: "See the books",
          href: "/en/books",
        },
      ],
    },

    // ── Article 2 ───────────────────────────────────────────────────────────
    {
      id: "article-kufulula-roi",
      slug: "kufulula-anatomy-of-an-extraordinary-king",
      title: "Kufulula: Anatomy of an Extraordinary King",
      excerpt:
        "Who is King Kufulula really? A portrait of a complex character — warrior, diplomat, and guardian of the ancestors all at once.",
      coverImage: "/royal-palace-background.png",
      published: true,
      createdAt: new Date("2026-04-10T14:00:00Z"),
      updatedAt: new Date("2026-04-20T11:00:00Z"),
      blocksJson: [
        {
          id: "h1",
          type: "heading",
          text: "The king's childhood",
        },
        {
          id: "t1",
          type: "paragraph",
          text: "Before becoming king, Kufulula was a child. Born during a lunar eclipse in the province of Mbata, he was immediately entrusted to the palace diviners, who saw in his birth an ambiguous sign — both a promise of prosperity and an omen of profound upheaval.\n\nHis education was rigorous. From the age of five, he learned to read the stars, identify medicinal plants, and listen to the ancestors through the whisper of the wind in the tall savanna grass. His mentor, old Nsamba, taught him that a king's strength lies not in his armies, but in his ability to understand the silences of his people.",
        },
        {
          id: "q1",
          type: "quote",
          text: "To rule is first to know when to remain silent.",
          author: "Nsamba, Royal Advisor",
        },
        {
          id: "h2",
          type: "heading",
          text: "The War of the Three Rivers",
        },
        {
          id: "t2",
          type: "paragraph",
          text: "Kufulula's baptism by fire came during the War of the Three Rivers, a territorial conflict that pitted the kingdom of Isolele against two neighboring kingdoms for seven seasons. At nineteen, he commanded the western flank of the royal armies with tactical skill that confounded his adversaries.\n\nWhat sets Kufulula apart from ordinary conquerors is that after every military victory, he would sit with the defeated enemy chiefs to share the same palm wine. For him, peace is not the absence of war — it is a delicate architecture built patiently, stone by stone.",
        },
        {
          id: "d1",
          type: "divider",
        },
        {
          id: "h3",
          type: "heading",
          text: "The guardian's powers",
        },
        {
          id: "t3",
          type: "paragraph",
          text: "In the mythology of Isolele, the king is not simply a political leader. He is the nexus between the world of the living and that of the ancestors. Kufulula inherits this role with a blend of sincere faith and quiet skepticism — a tension that makes him particularly human and endearing.\n\nHis powers, described in the volumes as manifestations of his connection to ancestral forces, are always depicted with remarkable visual restraint: no flashy special effects, but small subtle details — a flame that does not flicker in strong wind, a plant that blooms out of season at his passing.",
        },
        {
          id: "cta2",
          type: "cta",
          title: "Explore the characters",
          description:
            "Discover the full gallery of characters who populate the Isolele universe.",
          buttonLabel: "See the characters",
          href: "/en/characters",
        },
      ],
    },

    // ── Article 3 ───────────────────────────────────────────────────────────
    {
      id: "article-processus-creatif",
      slug: "drawing-africa-differently-isolele-creative-process",
      title: "Drawing Africa Differently: Isolele's Creative Process",
      excerpt:
        "From sketch to final product, discover the behind-the-scenes of creating Isolele's pages and the artistic vision that drives them.",
      coverImage: "/royal-palace-background.png",
      published: true,
      createdAt: new Date("2026-05-01T09:00:00Z"),
      updatedAt: new Date("2026-05-05T16:45:00Z"),
      blocksJson: [
        {
          id: "h1",
          type: "heading",
          text: "It all starts with a sketchbook",
        },
        {
          id: "t1",
          type: "paragraph",
          text: "Isolele's creative process invariably begins with sketchbooks. Hundreds of pages filled with faces, postures, and expressions — a patient exploration of how emotions are written on African bodies, so often poorly represented in mainstream global culture.\n\nThe creative team refuses the shortcut of visual stereotypes. Every character is documented: their tribe, their clothing, their scarifications if any, their jewelry, their way of walking. This documentation work sometimes takes longer than producing the panels themselves.",
        },
        {
          id: "q1",
          type: "quote",
          text: "Every face I draw is a promise made to someone I have never met but deeply respect.",
          author: "The author of Isolele",
        },
        {
          id: "h2",
          type: "heading",
          text: "Color as language",
        },
        {
          id: "t2",
          type: "paragraph",
          text: "Isolele's color palette is not random. Each narrative arc has its own dominant hue, which shifts imperceptibly across panels to accompany the emotional states of the characters. Peaceful scenes are bathed in warm ochres and deep greens. Moments of tension slide toward midnight blues and discreet blood reds.\n\nThis chromatic consistency is the result of close collaboration between the writer and the colorist, who meet regularly to calibrate the atmosphere of each chapter even before pencil touches paper.",
        },
        {
          id: "d1",
          type: "divider",
        },
        {
          id: "h3",
          type: "heading",
          text: "Printing: a political act",
        },
        {
          id: "t3",
          type: "paragraph",
          text: "Isolele is printed on FSC-certified paper, in Europe, with vegetable-based inks. This choice is not incidental — it is part of a broader reflection on the ecological responsibility of the publishing industry and on the coherence between the values carried by the work and the material conditions of its production.\n\nThe covers are produced in high-definition digital printing with selective varnishing on certain graphic elements, creating a relief effect that invites the reader to touch the book before even opening it. The book as a sensory object — a philosophy that runs throughout the Isolele project.",
        },
        {
          id: "cta3",
          type: "cta",
          title: "Follow the Isolele adventure",
          description:
            "Join our community and receive the latest news, exclusive pages, and upcoming events.",
          buttonLabel: "Discover the universe",
          href: "/en/comics",
        },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Public helpers — same API shape as the data service, but static
// ---------------------------------------------------------------------------

/** Returns published articles for a given locale, sorted newest-first. */
export function getStaticPublishedArticles(locale: SupportedLocale = "fr") {
  return (ARTICLES_BY_LOCALE[locale] ?? ARTICLES_BY_LOCALE.fr)
    .filter((a) => a.published)
    .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
}

/** Finds a published article by slug within a given locale. */
export function getStaticArticleBySlug(
  slug: string,
  locale: SupportedLocale = "fr"
) {
  const list = ARTICLES_BY_LOCALE[locale] ?? ARTICLES_BY_LOCALE.fr;
  return list.find((a) => a.slug === slug && a.published) ?? null;
}
