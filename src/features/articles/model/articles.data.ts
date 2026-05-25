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
const ARTICLES_BY_LOCALE: Partial<Record<SupportedLocale, StaticArticle[]>> = {

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
          type: "text",
          text: "Isolele est né d'une ambition simple mais profonde : donner vie aux récits oraux de l'Afrique centrale à travers la bande dessinée. Chaque ligne dessinée, chaque couleur choisie, chaque mot posé sur la page est le fruit d'un dialogue entre tradition et innovation.\n\nLe roi Kufulula, figure centrale de l'univers, n'est pas seulement un personnage de fiction. Il est l'incarnation de siècles de sagesse, de guerres oubliées et de pactes scellés sous des arbres millénaires. Son règne est une métaphore de la quête identitaire que vivent des millions de personnes à travers le monde.",
        },
        {
          id: "q1",
          type: "quote",
          text: "Un conte qui ne voyage pas est un conte qui meurt.",
          source: "Proverbe Kongo",
        },
        {
          id: "h2",
          type: "heading",
          text: "Une esthétique délibérément hybride",
        },
        {
          id: "t2",
          type: "text",
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
          type: "text",
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
          type: "text",
          text: "Avant d'être roi, Kufulula était enfant. Né pendant une éclipse lunaire dans la province de Mbata, il fut immédiatement confié aux devins du palais qui virent dans sa naissance un signe ambigu : à la fois promesse de prospérité et présage de bouleversements profonds.\n\nSon éducation fut rigoureuse. Dès l'âge de cinq ans, il apprenait à lire les étoiles, à identifier les plantes médicinales et à écouter les ancêtres à travers le murmure du vent dans les hautes herbes de la savane. Son mentor, le vieux Nsamba, lui enseigna que la force d'un roi ne réside pas dans ses armées, mais dans sa capacité à comprendre les silences de son peuple.",
        },
        {
          id: "q1",
          type: "quote",
          text: "Gouverner, c'est d'abord savoir se taire au bon moment.",
          source: "Nsamba, conseiller royal",
        },
        {
          id: "h2",
          type: "heading",
          text: "La guerre des Trois Rivières",
        },
        {
          id: "t2",
          type: "text",
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
          type: "text",
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
          type: "text",
          text: "Le processus créatif d'Isolele commence invariablement par des carnets de croquis. Des centaines de pages couvertes de visages, de postures, d'expressions — une exploration patiente de la façon dont les émotions s'écrivent sur les corps africains, si souvent mal représentés dans la culture populaire mondiale.\n\nL'équipe créative refuse le raccourci des stéréotypes visuels. Chaque personnage est documenté : sa tribu, ses vêtements, ses scarifications le cas échéant, ses bijoux, sa façon de marcher. Ce travail de documentation prend parfois plus de temps que la réalisation des planches elles-mêmes.",
        },
        {
          id: "q1",
          type: "quote",
          text: "Chaque visage que je dessine est une promesse faite à quelqu'un que je n'ai jamais rencontré mais que je respecte profondément.",
          source: "L'auteur d'Isolele",
        },
        {
          id: "h2",
          type: "heading",
          text: "La couleur comme langage",
        },
        {
          id: "t2",
          type: "text",
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
          type: "text",
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

  sw: [
    // ── Makala ya 1 ───────────────────────────────────────────────────────────
    {
      id: "article-univers-isolele",
      slug: "ulimwengu-wa-isolele-kati-ya-hadithi-na-usasa",
      title: "Ulimwengu wa Isolele: kati ya hadithi na usasa",
      excerpt:
        "Zama ndani ya uumbaji wa Isolele, ulimwengu ambapo hadithi za Kiafrika hukutana na simulizi za kisasa za picha.",
      coverImage: "/royal-palace-background.png",
      published: true,
      createdAt: new Date("2026-04-01T10:00:00Z"),
      updatedAt: new Date("2026-04-15T08:30:00Z"),
      blocksJson: [
        {
          id: "h1",
          type: "heading",
          text: "Mizizi ya ulimwengu wa kufikirika",
        },
        {
          id: "t1",
          type: "text",
          text: "Isolele ilizaliwa kutokana na azma rahisi lakini yenye kina: kuzipa uhai simulizi za mdomo za Afrika ya Kati kupitia vibonzo. Kila mstari uliochorwa, kila rangi iliyochaguliwa, kila neno lililoandikwa kwenye ukurasa ni matokeo ya mazungumzo kati ya mila na ubunifu.\n\nMfalme Kufulula, mhusika mkuu wa ulimwengu huu, si tu mhusika wa kubuni. Yeye ni mfano wa karne nyingi za hekima, vita vilivyosahaulika na maagano yaliyofungwa chini ya miti ya maelfu ya miaka. Utawala wake ni taswira ya safari ya kutafuta utambulisho ambayo mamilioni ya watu duniani hupitia.",
        },
        {
          id: "q1",
          type: "quote",
          text: "Hadithi isiyosafiri ni hadithi inayokufa.",
          source: "Methali ya Kongo",
        },
        {
          id: "h2",
          type: "heading",
          text: "Mtindo wa makusudi uliounganishwa",
        },
        {
          id: "t2",
          type: "text",
          text: "Mwelekeo wa kisanii wa Isolele unakataa kuchagua kati ya misimbo ya vibonzo vya Kifaransa na Kibelgiji, manga na michoro ya kisasa ya Kiafrika. Mchanganyiko huu unaodaiwa wazi huzalisha mtindo unaotambulika mara moja: rangi za joto zilizoongozwa na vitambaa vya wax, mpangilio wenye nguvu uliorithiwa kutoka sanaa ya vibonzo ya Ulaya, na taipografia inayojumuisha alama zilizochochewa na ideogramu za nsibidi.\n\nKila fremu imeundwa kama mchoro unaoweza kujisimamia wenyewe huku ukiendeleza nguvu ya kihisia ya simulizi.",
        },
        {
          id: "d1",
          type: "divider",
        },
        {
          id: "h3",
          type: "heading",
          text: "Kufu Game: ulimwengu mikononi mwako",
        },
        {
          id: "t3",
          type: "text",
          text: "Upanuzi wa mchezo wa video wa ulimwengu wa Isolele, uitwao Kufu Game, hubadilisha mifumo ya simulizi ya vibonzo kuwa uzoefu wa mwingiliano. Wachezaji huchunguza ufalme, kutatua mafumbo yanayotokana na kosmolojia ya eneo hilo na kushiriki katika ibada za mtandaoni zinazowakilisha mila halisi za kitamaduni.\n\nMbali na kuwa bidhaa ya pembeni, Kufu Game imeundwa kama chombo cha elimu ya kitamaduni, kinachoweza kufikiwa kuanzia umri wa miaka 7 na kuthibitishwa na kamati ya wanaisimu na wanaanthropolojia washirika wa mradi.",
        },
        {
          id: "cta1",
          type: "cta",
          title: "Gundua juzuu ya kwanza",
          description:
            "Agiza juzuu ya kwanza ya sakata ya Isolele na jiunge na maelfu ya wasomaji duniani kote.",
          buttonLabel: "Tazama vitabu",
          href: "/sw/books",
        },
      ],
    },

    // ── Makala ya 2 ───────────────────────────────────────────────────────────
    {
      id: "article-kufulula-roi",
      slug: "kufulula-anatomia-ya-mfalme-wa-kipekee",
      title: "Kufulula: anatomia ya mfalme wa kipekee",
      excerpt:
        "Kwa kweli mfalme Kufulula ni nani? Taswira ya mhusika changamano, shujaa, mwanadiplomasia na mlinzi wa mababu.",
      coverImage: "/royal-palace-background.png",
      published: true,
      createdAt: new Date("2026-04-10T14:00:00Z"),
      updatedAt: new Date("2026-04-20T11:00:00Z"),
      blocksJson: [
        {
          id: "h1",
          type: "heading",
          text: "Utoto wa mfalme",
        },
        {
          id: "t1",
          type: "text",
          text: "Kabla ya kuwa mfalme, Kufulula alikuwa mtoto. Alizaliwa wakati wa kupatwa kwa mwezi katika jimbo la Mbata, na mara moja akakabidhiwa kwa waganga wa ikulu walioona kuzaliwa kwake kama ishara yenye pande mbili: ahadi ya ustawi na dalili ya mabadiliko makubwa.\n\nElimu yake ilikuwa kali. Kuanzia umri wa miaka mitano, alijifunza kusoma nyota, kutambua mimea ya dawa na kusikiliza mababu kupitia sauti ya upepo kwenye nyasi ndefu za savana. Mshauri wake, mzee Nsamba, alimfundisha kwamba nguvu ya mfalme haiko katika majeshi yake, bali katika uwezo wake wa kuelewa ukimya wa watu wake.",
        },
        {
          id: "q1",
          type: "quote",
          text: "Kutawala ni kwanza kujua kunyamaza wakati unaofaa.",
          source: "Nsamba, mshauri wa kifalme",
        },
        {
          id: "h2",
          type: "heading",
          text: "Vita vya Mito Mitatu",
        },
        {
          id: "t2",
          type: "text",
          text: "Jaribio la kwanza la vita kwa Kufulula lilikuja wakati wa Vita vya Mito Mitatu, mzozo wa ardhi uliokabilisha ufalme wa Isolele dhidi ya falme mbili jirani kwa misimu saba. Akiwa na miaka kumi na tisa, aliongoza upande wa magharibi wa jeshi la kifalme kwa ustadi wa kijeshi uliowashangaza maadui wake.\n\nKinachomtenganisha Kufulula na washindi wa kawaida ni kwamba baada ya kila ushindi wa kijeshi, aliketi pamoja na viongozi wa maadui walioshindwa kunywa divai ileile ya mtende. Kwa kwake, amani si kutokuwepo kwa vita — ni usanifu dhaifu unaojengwa kwa uvumilivu, jiwe baada ya jiwe.",
        },
        {
          id: "d1",
          type: "divider",
        },
        {
          id: "h3",
          type: "heading",
          text: "Nguvu za mlinzi",
        },
        {
          id: "t3",
          type: "text",
          text: "Katika mitholojia ya Isolele, mfalme si kiongozi wa kisiasa tu. Yeye ni kiunganishi kati ya ulimwengu wa walio hai na ule wa mababu. Kufulula anarithi jukumu hili akiwa na mchanganyiko wa imani ya dhati na mashaka ya ndani — mvutano unaomfanya kuwa wa kibinadamu na wa kuvutia.\n\nNguvu zake, zinazofafanuliwa katika juzuu kama maonyesho ya uhusiano wake na nguvu za mababu, daima huwasilishwa kwa unyenyekevu mkubwa wa kuona: hakuna athari za kupitiliza, bali maelezo madogo ya kificho — mwali usiotikisika hata upepo ukiwa mkali, mmea unaochanua nje ya msimu anapopita.",
        },
        {
          id: "cta2",
          type: "cta",
          title: "Chunguza wahusika",
          description:
            "Gundua wahusika wote wanaoujaza ulimwengu wa Isolele.",
          buttonLabel: "Tazama wahusika",
          href: "/sw/characters",
        },
      ],
    },

    // ── Makala ya 3 ───────────────────────────────────────────────────────────
    {
      id: "article-processus-creatif",
      slug: "kuichora-afrika-kwa-namna-nyingine-mchakato-wa-ubunifu-wa-isolele",
      title: "Kuichora Afrika kwa namna nyingine: mchakato wa ubunifu wa Isolele",
      excerpt:
        "Kutoka rasimu hadi bidhaa ya mwisho, gundua nyuma ya pazia la uundaji wa kurasa za Isolele na maono ya kisanii yanayoziendesha.",
      coverImage: "/royal-palace-background.png",
      published: true,
      createdAt: new Date("2026-05-01T09:00:00Z"),
      updatedAt: new Date("2026-05-05T16:45:00Z"),
      blocksJson: [
        {
          id: "h1",
          type: "heading",
          text: "Kila kitu huanza na daftari",
        },
        {
          id: "t1",
          type: "text",
          text: "Mchakato wa ubunifu wa Isolele huanza kila mara na madaftari ya michoro. Mamia ya kurasa zilizofunikwa na nyuso, misimamo na hisia — uchunguzi wa polepole wa namna ambavyo hisia huonekana kwenye miili ya Waafrika, ambao mara nyingi huwakilishwa vibaya katika utamaduni maarufu wa dunia.\n\nTimu ya ubunifu inakataa njia rahisi ya mitazamo ya stereotaipu za kuona. Kila mhusika huchunguzwa: kabila lake, mavazi yake, michoro ya mwilini ikiwa ipo, vito vyake na namna yake ya kutembea. Kazi hii ya utafiti wakati mwingine huchukua muda zaidi kuliko utengenezaji wa kurasa zenyewe.",
        },
        {
          id: "q1",
          type: "quote",
          text: "Kila uso ninaouchora ni ahadi kwa mtu ambaye sijawahi kukutana naye lakini ninamheshimu kwa dhati.",
          source: "Mwandishi wa Isolele",
        },
        {
          id: "h2",
          type: "heading",
          text: "Rangi kama lugha",
        },
        {
          id: "t2",
          type: "text",
          text: "Paleti ya rangi ya Isolele si ya kubahatisha. Kila safu ya simulizi ina rangi kuu yake, ambayo hubadilika taratibu katika kurasa ili kuandamana na hali za kihisia za wahusika. Matukio ya amani huzama katika kahawia za joto na kijani kibichi. Nyakati za mvutano hugeukia buluu za usiku na nyekundu za damu zilizofichika.\n\nUwiano huu wa rangi ni matokeo ya ushirikiano wa karibu kati ya mwandishi wa simulizi na mpakaji rangi, ambao hukutana mara kwa mara kurekebisha mazingira ya kila sura kabla hata penseli haijagusa karatasi.",
        },
        {
          id: "d1",
          type: "divider",
        },
        {
          id: "h3",
          type: "heading",
          text: "Uchapishaji: kitendo cha mapambano",
        },
        {
          id: "t3",
          type: "text",
          text: "Isolele huchapishwa kwenye karatasi yenye uthibitisho wa FSC, Ulaya, kwa kutumia wino wa mimea. Chaguo hili si la kawaida: linaingia katika tafakari pana kuhusu wajibu wa kimazingira wa sekta ya uchapishaji na uwiano kati ya maadili ya kazi hii na hali halisi za uzalishaji wake.\n\nJalada hutengenezwa kwa uchapishaji wa kidijitali wa ubora wa juu pamoja na varnish maalum kwenye baadhi ya vipengele vya picha, na kuunda athari ya kuinuka inayomfanya msomaji atake kugusa kitabu kabla hata ya kukifungua. Kitabu kama kitu cha kihisia — falsafa inayopita katika mradi mzima wa Isolele.",
        },
        {
          id: "cta3",
          type: "cta",
          title: "Fuata safari ya Isolele",
          description:
            "Jiunge na jamii yetu na upokee habari za hivi karibuni, kurasa za kipekee na matukio yajayo.",
          buttonLabel: "Gundua ulimwengu",
          href: "/sw/comics",
        },
      ],
    },
  ],

  es: [
    // ── Artículo 1 ───────────────────────────────────────────────────────────
    {
      id: "article-univers-isolele",
      slug: "el-universo-de-isolele-entre-mito-y-modernidad",
      title: "El universo de Isolele: entre mito y modernidad",
      excerpt:
        "Sumérgete en el corazón de la creación de Isolele, un mundo donde las leyendas africanas se encuentran con la narrativa gráfica contemporánea.",
      coverImage: "/royal-palace-background.png",
      published: true,
      createdAt: new Date("2026-04-01T10:00:00Z"),
      updatedAt: new Date("2026-04-15T08:30:00Z"),
      blocksJson: [
        {
          id: "h1",
          type: "heading",
          text: "Las raíces de un mundo imaginario",
        },
        {
          id: "t1",
          type: "text",
          text: "Isolele nació de una ambición simple pero profunda: dar vida a los relatos orales de África Central a través del cómic. Cada línea dibujada, cada color elegido y cada palabra escrita en la página es el fruto de un diálogo entre tradición e innovación.\n\nEl rey Kufulula, figura central del universo, no es solamente un personaje de ficción. Es la encarnación de siglos de sabiduría, guerras olvidadas y pactos sellados bajo árboles milenarios. Su reinado es una metáfora de la búsqueda de identidad que viven millones de personas en todo el mundo.",
        },
        {
          id: "q1",
          type: "quote",
          text: "Un cuento que no viaja es un cuento que muere.",
          source: "Proverbio Kongo",
        },
        {
          id: "h2",
          type: "heading",
          text: "Una estética deliberadamente híbrida",
        },
        {
          id: "t2",
          type: "text",
          text: "La dirección artística de Isolele se niega a elegir entre los códigos del cómic franco-belga, el manga y la ilustración africana contemporánea. Este mestizaje reivindicado produce un estilo inmediatamente reconocible: colores cálidos inspirados en los tejidos wax, composiciones dinámicas heredadas del noveno arte europeo y una tipografía que integra glifos inspirados en los ideogramas nsibidi.\n\nCada viñeta está pensada como una obra autónoma, capaz de existir independientemente de la secuencia narrativa mientras contribuye al impulso dramático de la historia.",
        },
        {
          id: "d1",
          type: "divider",
        },
        {
          id: "h3",
          type: "heading",
          text: "Kufu Game: el mundo en tus manos",
        },
        {
          id: "t3",
          type: "text",
          text: "La extensión videolúdica del universo Isolele, llamada Kufu Game, transforma las mecánicas narrativas del cómic en una experiencia interactiva. Los jugadores exploran el reino, resuelven enigmas basados en la cosmología local y participan en rituales virtuales que reflejan prácticas culturales auténticas.\n\nLejos de ser un simple producto derivado, Kufu Game está concebido como una herramienta de educación cultural, accesible desde los 7 años y validada por un comité de lingüistas y antropólogos asociados al proyecto.",
        },
        {
          id: "cta1",
          type: "cta",
          title: "Descubre el primer tomo",
          description:
            "Ordena el primer volumen de la saga Isolele y únete a miles de lectores alrededor del mundo.",
          buttonLabel: "Ver los libros",
          href: "/es/books",
        },
      ],
    },

    // ── Artículo 2 ───────────────────────────────────────────────────────────
    {
      id: "article-kufulula-roi",
      slug: "kufulula-anatomia-de-un-rey-extraordinario",
      title: "Kufulula: anatomía de un rey extraordinario",
      excerpt:
        "¿Quién es realmente el rey Kufulula? Retrato de un personaje complejo, a la vez guerrero, diplomático y guardián de los ancestros.",
      coverImage: "/royal-palace-background.png",
      published: true,
      createdAt: new Date("2026-04-10T14:00:00Z"),
      updatedAt: new Date("2026-04-20T11:00:00Z"),
      blocksJson: [
        {
          id: "h1",
          type: "heading",
          text: "La infancia del rey",
        },
        {
          id: "t1",
          type: "text",
          text: "Antes de ser rey, Kufulula fue un niño. Nació durante un eclipse lunar en la provincia de Mbata y fue inmediatamente confiado a los adivinos del palacio, quienes vieron en su nacimiento una señal ambigua: al mismo tiempo promesa de prosperidad y presagio de grandes cambios.\n\nSu educación fue rigurosa. Desde los cinco años aprendió a leer las estrellas, identificar plantas medicinales y escuchar a los ancestros a través del murmullo del viento en las altas hierbas de la sabana. Su mentor, el viejo Nsamba, le enseñó que la fuerza de un rey no reside en sus ejércitos, sino en su capacidad de comprender los silencios de su pueblo.",
        },
        {
          id: "q1",
          type: "quote",
          text: "Gobernar es, ante todo, saber callar en el momento adecuado.",
          source: "Nsamba, consejero real",
        },
        {
          id: "h2",
          type: "heading",
          text: "La guerra de los Tres Ríos",
        },
        {
          id: "t2",
          type: "text",
          text: "El bautismo de fuego de Kufulula ocurrió durante la guerra de los Tres Ríos, un conflicto territorial que enfrentó al reino de Isolele con dos reinos vecinos durante siete estaciones. A los diecinueve años comandaba el flanco oeste de los ejércitos reales con una habilidad táctica que desconcertó a sus adversarios.\n\nLo que distingue a Kufulula de los conquistadores ordinarios es que, después de cada victoria militar, se sentaba con los líderes enemigos derrotados para beber el mismo vino de palma. Para él, la paz no es la ausencia de guerra: es una arquitectura delicada que se construye pacientemente, piedra por piedra.",
        },
        {
          id: "d1",
          type: "divider",
        },
        {
          id: "h3",
          type: "heading",
          text: "Los poderes del guardián",
        },
        {
          id: "t3",
          type: "text",
          text: "En la mitología de Isolele, el rey no es simplemente un líder político. Es el nexo entre el mundo de los vivos y el de los ancestros. Kufulula hereda este papel con una mezcla de fe sincera y escepticismo discreto, una tensión que lo hace particularmente humano y entrañable.\n\nSus poderes, descritos en los tomos como manifestaciones de su conexión con las fuerzas ancestrales, siempre son representados con una notable sobriedad visual: sin efectos especiales exagerados, sino con pequeños detalles sutiles — una llama que no se apaga bajo un fuerte viento, una planta que florece fuera de temporada a su paso.",
        },
        {
          id: "cta2",
          type: "cta",
          title: "Explora los personajes",
          description:
            "Descubre toda la galería de personajes que habitan el universo de Isolele.",
          buttonLabel: "Ver los personajes",
          href: "/es/characters",
        },
      ],
    },

    // ── Artículo 3 ───────────────────────────────────────────────────────────
    {
      id: "article-processus-creatif",
      slug: "dibujar-africa-de-otra-manera-el-proceso-creativo-de-isolele",
      title: "Dibujar África de otra manera: el proceso creativo de Isolele",
      excerpt:
        "Desde el boceto hasta el producto final, descubre el detrás de escena de la creación de las páginas de Isolele y la visión artística que las impulsa.",
      coverImage: "/royal-palace-background.png",
      published: true,
      createdAt: new Date("2026-05-01T09:00:00Z"),
      updatedAt: new Date("2026-05-05T16:45:00Z"),
      blocksJson: [
        {
          id: "h1",
          type: "heading",
          text: "Todo comienza con un cuaderno",
        },
        {
          id: "t1",
          type: "text",
          text: "El proceso creativo de Isolele comienza invariablemente con cuadernos de bocetos. Cientos de páginas cubiertas de rostros, posturas y expresiones: una exploración paciente de la manera en que las emociones se escriben sobre los cuerpos africanos, tan a menudo mal representados en la cultura popular mundial.\n\nEl equipo creativo rechaza el atajo de los estereotipos visuales. Cada personaje está documentado: su tribu, su vestimenta, sus escarificaciones cuando las tiene, sus joyas y su manera de caminar. Este trabajo de documentación a veces toma más tiempo que la realización de las propias páginas.",
        },
        {
          id: "q1",
          type: "quote",
          text: "Cada rostro que dibujo es una promesa hecha a alguien que nunca he conocido pero a quien respeto profundamente.",
          source: "El autor de Isolele",
        },
        {
          id: "h2",
          type: "heading",
          text: "El color como lenguaje",
        },
        {
          id: "t2",
          type: "text",
          text: "La paleta cromática de Isolele no es aleatoria. Cada arco narrativo posee su propia dominante de color, que evoluciona imperceptiblemente a lo largo de las páginas para acompañar los estados emocionales de los personajes. Las escenas de paz están bañadas en ocres cálidos y verdes profundos. Los momentos de tensión se deslizan hacia azules nocturnos y discretos rojos sangre.\n\nEsta coherencia cromática es el resultado de una estrecha colaboración entre el guionista y el colorista, quienes se reúnen regularmente para calibrar la atmósfera de cada capítulo incluso antes de que el lápiz toque el papel.",
        },
        {
          id: "d1",
          type: "divider",
        },
        {
          id: "h3",
          type: "heading",
          text: "La impresión: un acto militante",
        },
        {
          id: "t3",
          type: "text",
          text: "Isolele se imprime en papel certificado FSC, en Europa, con tintas vegetales. Esta elección no es trivial: forma parte de una reflexión más amplia sobre la responsabilidad ecológica de la industria editorial y la coherencia entre los valores transmitidos por la obra y las condiciones materiales de su producción.\n\nLas cubiertas se realizan con impresión digital de alta definición y barniz selectivo sobre ciertos elementos gráficos, creando un efecto de relieve que invita al lector a tocar el libro incluso antes de abrirlo. El libro como objeto sensorial: una filosofía que atraviesa todo el proyecto Isolele.",
        },
        {
          id: "cta3",
          type: "cta",
          title: "Sigue la aventura de Isolele",
          description:
            "Únete a nuestra comunidad y recibe las últimas noticias, páginas exclusivas y próximos eventos.",
          buttonLabel: "Descubrir el universo",
          href: "/es/comics",
        },
      ],
    },
  ],

  zu: [
    // ── Isihloko 1 ───────────────────────────────────────────────────────────
    {
      id: "article-univers-isolele",
      slug: "umhlaba-we-isolele-phakathi-kwenganekwane-nobunjalo-besimanje",
      title: "Umhlaba we-Isolele: phakathi kwenganekwane nobunjalo besimanje",
      excerpt:
        "Ngena emhlabeni wokudalwa kwe-Isolele, indawo lapho izinganekwane zase-Afrika zihlangana khona nokuxoxa kwezindaba zesimanje ngezithombe.",
      coverImage: "/royal-palace-background.png",
      published: true,
      createdAt: new Date("2026-04-01T10:00:00Z"),
      updatedAt: new Date("2026-04-15T08:30:00Z"),
      blocksJson: [
        {
          id: "h1",
          type: "heading",
          text: "Izimpande zomhlaba oqanjiwe",
        },
        {
          id: "t1",
          type: "text",
          text: "Isolele yazalwa ngenhloso elula kodwa ejulile: ukunika impilo izindaba zomlomo zase-Afrika Ephakathi ngokusebenzisa amahlaya ezithombe. Yonke imigqa edwetshiwe, yonke imibala ekhethiwe, nawo wonke amagama abhalwe ekhasini kuwumphumela wengxoxo phakathi kwesiko nokusungula izinto ezintsha.\n\nInkosi uKufulula, ongumlingiswa oyinhloko walomhlaba, akayena nje umlingiswa oqanjiwe. Uyisifaniso samakhulu eminyaka okuhlakanipha, izimpi ezakhohlwayo nezivumelwano ezenziwa ngaphansi kwezihlahla ezineminyaka eyizinkulungwane. Umbuso wakhe uyisifaniso sohambo lokufuna ubuwena oluphila izigidi zabantu emhlabeni wonke.",
        },
        {
          id: "q1",
          type: "quote",
          text: "Inganekwane engahambi iyinganekwane efa.",
          source: "Isaga samaKongo",
        },
        {
          id: "h2",
          type: "heading",
          text: "Ubuhle obuhlanganiswe ngenhloso",
        },
        {
          id: "t2",
          type: "text",
          text: "Ukuqondiswa kobuciko kwe-Isolele kuyenqaba ukukhetha phakathi kwemithetho yamahlaya aseFranco-Belgium, i-manga kanye nemidwebo yesimanje yase-Afrika. Lokhu kuhlanganiswa kwezindlela kudala isitayela esibonakala ngokushesha: imibala efudumele ephefumulelwe izindwangu ze-wax, ukuhlelwa okunamandla okuvela kubuciko bamahlaya baseYurophu kanye nokubhalwa okuhlanganisa izimpawu ezikhuthazwe ama-ideogram e-nsibidi.\n\nIsithombe ngasinye sicatshangwa njengomdwebo ozimelayo, okwazi ukuphila ngaphandle kokulandelana kwendaba kodwa ngesikhathi esifanayo unikele emandleni omzwelo endabeni.",
        },
        {
          id: "d1",
          type: "divider",
        },
        {
          id: "h3",
          type: "heading",
          text: "Kufu Game: umhlaba usezandleni zakho",
        },
        {
          id: "t3",
          type: "text",
          text: "Ukwandiswa komhlaba we-Isolele emidlalweni yevidiyo, okubizwa nge-Kufu Game, kuguqula indlela yokuxoxa indaba yamahlaya ibe isipiliyoni esisebenzisanayo. Abadlali bahlola umbuso, baxazulule izimfihlakalo ezisekelwe emibonweni yendawo futhi babambe iqhaza emikhosini ebonakalayo ekhombisa amasiko angempela.\n\nKude nokuba ngumkhiqizo oseceleni nje, i-Kufu Game yakhelwe ukuba ithuluzi lemfundo yamasiko, elifinyeleleka kusukela eminyakeni engu-7 futhi eliqinisekiswe yikomidi losolimi kanye nososayensi bezamasiko abasebenzisana nephrojekthi.",
        },
        {
          id: "cta1",
          type: "cta",
          title: "Thola umqulu wokuqala",
          description:
            "Oda umqulu wokuqala wesaga se-Isolele futhi ujoyine izinkulungwane zabafundi emhlabeni wonke.",
          buttonLabel: "Bona izincwadi",
          href: "/zu/books",
        },
      ],
    },

    // ── Isihloko 2 ───────────────────────────────────────────────────────────
    {
      id: "article-kufulula-roi",
      slug: "kufulula-ukwakheka-kwenkosi-eyingqayizivele",
      title: "Kufulula: ukwakheka kwenkosi eyingqayizivele",
      excerpt:
        "Ngubani ngempela inkosi uKufulula? Isithombe somlingiswa oyinkimbinkimbi, ongumqhawe, usomlomo kanye nomvikeli wabokhokho.",
      coverImage: "/royal-palace-background.png",
      published: true,
      createdAt: new Date("2026-04-10T14:00:00Z"),
      updatedAt: new Date("2026-04-20T11:00:00Z"),
      blocksJson: [
        {
          id: "h1",
          type: "heading",
          text: "Ubuntwana benkosi",
        },
        {
          id: "t1",
          type: "text",
          text: "Ngaphambi kokuba abe yinkosi, uKufulula wayeyingane. Wazalwa ngesikhathi sokufiphala kwenyanga esifundazweni saseMbata futhi ngokushesha wanikezwa ababhuli basesigodlweni ababona ukuzalwa kwakhe njengophawu olungaqondakali: isithembiso sokuchuma kanye nesixwayiso sezinguquko ezinkulu.\n\nImfundo yakhe yayiqinile. Kusukela eneminyaka emihlanu wafunda ukufunda izinkanyezi, ukubona izitshalo zokwelapha nokulalela okhokho ngomoya ovunguza ezitshalweni ezinde zesavana. Umeluleki wakhe, uNsamba omdala, wamfundisa ukuthi amandla enkosi awasekho emabuthweni ayo kodwa ekhonweni layo lokuqonda ukuthula kwabantu bayo.",
        },
        {
          id: "q1",
          type: "quote",
          text: "Ukubusa kusho ukwazi ukuthula ngesikhathi esifanele.",
          source: "UNsamba, umeluleki wasebukhosini",
        },
        {
          id: "h2",
          type: "heading",
          text: "Impi Yemifula Emithathu",
        },
        {
          id: "t2",
          type: "text",
          text: "Ukuhlolwa kukaKufulula empini kwenzeka ngesikhathi seMpi Yemifula Emithathu, impi yomhlaba eyahlanganisa umbuso wase-Isolele neminye imibuso emibili engomakhelwane izikhathi eziyisikhombisa zonyaka. Eneminyaka eyishumi nesishiyagalolunye wayehola uhlangothi olusentshonalanga lwamabutho asebukhosini ngobuhlakani obadida izitha zakhe.\n\nOkuhlukanisa uKufulula kwabanye abanqobi ukuthi ngemva kokunqoba ngakunye wayehlala phansi nabaholi bezitha ezinqotshiwe aphuze nabo iwayini lesundu elifanayo. Kuye, ukuthula akusikho ukungabikho kwempi — kuwukwakhiwa okubuthakathaka okwakhiwa ngesineke, itshe phezu kwetshe.",
        },
        {
          id: "d1",
          type: "divider",
        },
        {
          id: "h3",
          type: "heading",
          text: "Amandla omvikeli",
        },
        {
          id: "t3",
          type: "text",
          text: "Ezinganekwaneni ze-Isolele, inkosi ayisona nje isikhulu sezepolitiki. Iyisixhumanisi phakathi komhlaba wabaphilayo nowabokhokho. UKufulula uthola lendima enokholo oluqotho kanye nokungabaza okufihlekile — ukungezwani okumenza abe ngumuntu futhi athandeke.\n\nAmandla akhe, achazwe emiqulwini njengokubonakaliswa kokuxhumana kwakhe namandla okhokho, aboniswa ngokuzithoba okukhulu: akukho miphumela emikhulu ekhangayo, kodwa imininingwane emincane efihlekile — ilangabi elinganyakazi emoyeni onamandla noma isitshalo esiqhakaza ngaphandle kwesikhathi lapho edlula khona.",
        },
        {
          id: "cta2",
          type: "cta",
          title: "Hlola abalingiswa",
          description:
            "Thola bonke abalingiswa abagcwalisa umhlaba we-Isolele.",
          buttonLabel: "Bona abalingiswa",
          href: "/zu/characters",
        },
      ],
    },

    // ── Isihloko 3 ───────────────────────────────────────────────────────────
    {
      id: "article-processus-creatif",
      slug: "ukudweba-i-afrika-ngenye-indlela-inqubo-yokudala-ye-isolele",
      title: "Ukudweba i-Afrika ngenye indlela: inqubo yokudala ye-Isolele",
      excerpt:
        "Kusukela emdwebeni wokuqala kuya kumkhiqizo wokugcina, thola okwenzeka ngemuva kokwakhiwa kwamakhasi e-Isolele nombono wobuciko owawaphefumulela.",
      coverImage: "/royal-palace-background.png",
      published: true,
      createdAt: new Date("2026-05-01T09:00:00Z"),
      updatedAt: new Date("2026-05-05T16:45:00Z"),
      blocksJson: [
        {
          id: "h1",
          type: "heading",
          text: "Konke kuqala ngenothibhuku",
        },
        {
          id: "t1",
          type: "text",
          text: "Inqubo yokudala ye-Isolele iqala njalo ngamabhuku okudweba. Amakhulu amakhasi agcwele ubuso, izimo zomzimba kanye nemizwa — ukuhlola ngokubekezela indlela imizwa ebonakala ngayo emizimbeni yabantu base-Afrika, abavame ukumelwa kabi emasikweni omhlaba adumile.\n\nIqembu labadali liyenqaba indlela emfushane yezifaniso ezijwayelekile. Umlingiswa ngamunye uyacwaningwa: isizwe sakhe, izingubo zakhe, izibazi zakhe uma zikhona, ubucwebe bakhe kanye nendlela yakhe yokuhamba. Lomsebenzi wokucwaninga kwesinye isikhathi uthatha isikhathi eside kunokudalwa kwamakhasi uqobo.",
        },
        {
          id: "q1",
          type: "quote",
          text: "Ubuso bonke engibudwebayo buyisithembiso engisenzela umuntu engingakaze ngihlangane naye kodwa engimhlonipha kakhulu.",
          source: "Umbhali we-Isolele",
        },
        {
          id: "h2",
          type: "heading",
          text: "Umbala njengolimi",
        },
        {
          id: "t2",
          type: "text",
          text: "Iphalethi yemibala ye-Isolele ayenziwanga ngenhlanhla. Isigaba ngasinye sendaba sinombala waso oyinhloko, oshintsha kancane kancane emakhashini ukuze uhambisane nemizwa yabalingiswa. Izikhathi zokuthula zigcwele imibala efudumele kanye noluhlaza olujulile. Izikhathi zengcindezi ziguqukela koluhlaza okwesibhakabhaka basebusuku kanye nobomvu begazi obuthambile.\n\nLokhu kuhambisana kwemibala kuwumphumela wokubambisana okusondelene phakathi kombhali nombalisi wemibala, abahlangana njalo ukuze balungise umoya wesahluko ngasinye ngaphambi kokuba ipensela lithinte iphepha.",
        },
        {
          id: "d1",
          type: "divider",
        },
        {
          id: "h3",
          type: "heading",
          text: "Ukuphrinta: isenzo sokuzibophezela",
        },
        {
          id: "t3",
          type: "text",
          text: "Isolele iphrintwa ephepheni eliqinisekiswe yi-FSC eYurophu kusetshenziswa uyinki ovela ezitshalweni. Lokhu akusona isinqumo esingenamsebenzi: kuyingxenye yokucabanga okubanzi ngomthwalo wemvelo wemboni yokushicilela kanye nokuhambisana phakathi kwamagugu omsebenzi nezimo zangempela zokukhiqizwa kwawo.\n\nAmakhava enziwa ngokuphrinta kwedijithali okusezingeni eliphezulu kanye ne-varnish ekhethiwe kwezinye izingxenye zezithombe, okudala umuzwa wokuphakama omema umfundi ukuthi athinte incwadi ngaphambi kokuyivula. Incwadi njengento ethinta imizwa — ifilosofi egijima kuwo wonke umsebenzi we-Isolele.",
        },
        {
          id: "cta3",
          type: "cta",
          title: "Landela uhambo lwe-Isolele",
          description:
            "Joyina umphakathi wethu futhi uthole izindaba zakamuva, amakhasi akhethekile nemicimbi ezayo.",
          buttonLabel: "Thola umhlaba",
          href: "/zu/comics",
        },
      ],
    },
  ],

  xh: [
    // ── Inqaku 1 ───────────────────────────────────────────────────────────
    {
      id: "article-univers-isolele",
      slug: "ihlabathi-le-isolele-phakathi-kwentsomi-nobuxhakaxhaka-banamhlanje",
      title: "Ihlabathi le-Isolele: phakathi kwentsomi nobuxhakaxhaka banamhlanje",
      excerpt:
        "Ngena nzulu ekudalweni kwe-Isolele, ihlabathi apho iintsomi zaseAfrika zidibana nokubalisa amabali ngemizobo yale mihla.",
      coverImage: "/royal-palace-background.png",
      published: true,
      createdAt: new Date("2026-04-01T10:00:00Z"),
      updatedAt: new Date("2026-04-15T08:30:00Z"),
      blocksJson: [
        {
          id: "h1",
          type: "heading",
          text: "Iingcambu zehlabathi elicingelwayo",
        },
        {
          id: "t1",
          type: "text",
          text: "Isolele yazalwa ngenjongo elula kodwa enzulu: ukunika ubomi amabali omlomo aseAfrika Ephakathi ngokusebenzisa iikhomikhi. Umgca ngamnye ozotyiweyo, umbala ngamnye okhethiweyo kunye nelizwi ngalinye elibhalwe ephepheni ziziphumo zengxoxo phakathi kwesithethe nokuqamba okutsha.\n\nUKumkani uKufulula, ongumlinganiswa ophambili kweli hlabathi, akangomntu nje oqanjiweyo. Ungumfuziselo wamakhulu eminyaka obulumko, iimfazwe ezalityelwayo kunye nezivumelwano ezenziwa phantsi kwemithi emidala kakhulu. Ulawulo lwakhe luyimfuziselo yokukhangela ubuwena obujamelene nezigidi zabantu kwihlabathi lonke.",
        },
        {
          id: "q1",
          type: "quote",
          text: "Ibali elingahambiyo libali elifayo.",
          source: "Isaga samaKongo",
        },
        {
          id: "h2",
          type: "heading",
          text: "Ubuhle obuxubeneyo ngenjongo",
        },
        {
          id: "t2",
          type: "text",
          text: "Ulwalathiso lobugcisa lwe-Isolele alukhethi phakathi kweendlela zeekhomic zaseFranco-Belgian, i-manga kunye nemizobo yale mihla yaseAfrika. Olu dityaniswa lweendlela lwenza isitayile esibonakala ngokukhawuleza: imibala efudumeleyo ephefumlelwe ziingubo ze-wax, ulungelelwaniso olunamandla oluphuma kubugcisa beekhomikhi zaseYurophu, kunye nefonti edibanisa imiqondiso ephefumlelwe zi-ideogram ze-nsibidi.\n\nIsakhelo ngasinye sicingelwa njengomsebenzi wobugcisa ozimeleyo, okwaziyo ukuphila ngaphandle kolandelelwano lwebali ngelixa lusongeza amandla emvakalelo kwibali.",
        },
        {
          id: "d1",
          type: "divider",
        },
        {
          id: "h3",
          type: "heading",
          text: "Kufu Game: ihlabathi ezandleni zakho",
        },
        {
          id: "t3",
          type: "text",
          text: "Ulwandiso lomdlalo wevidiyo lwehlabathi le-Isolele, olubizwa ngokuba yi-Kufu Game, luguqula indlela yokubalisa amabali yeekhomic ibe ngamava asebenzisanayo. Abadlali baphonononga ubukumkani, basombulule iimfihlakalo ezisekelwe kwinkolo yendawo kwaye bathathe inxaxheba kwizithethe ezibonakalayo ezibonisa amasiko okwenyani.\n\nKude nokuba yimveliso ephuma ecaleni, i-Kufu Game yenzelwe ukuba sisixhobo semfundo yenkcubeko, esifikeleleka kubantwana abaneminyaka esi-7 nangaphezulu kwaye siqinisekiswe liqela leengcali zolwimi ne-anthropology ezisebenzisana neprojekthi.",
        },
        {
          id: "cta1",
          type: "cta",
          title: "Fumanisa umqulu wokuqala",
          description:
            "Oda umqulu wokuqala wesaga se-Isolele kwaye ujoyine amawaka abafundi kwihlabathi liphela.",
          buttonLabel: "Jonga iincwadi",
          href: "/xh/books",
        },
      ],
    },

    // ── Inqaku 2 ───────────────────────────────────────────────────────────
    {
      id: "article-kufulula-roi",
      slug: "kufulula-uhlalutyo-lokumkani-ongaqhelekanga",
      title: "Kufulula: uhlalutyo lokumkani ongaqhelekanga",
      excerpt:
        "Ngubani ngenene ukumkani uKufulula? Umfanekiso womlinganiswa ontsonkothileyo, igorha, unozakuzaku kunye nomkhuseli wookhokho.",
      coverImage: "/royal-palace-background.png",
      published: true,
      createdAt: new Date("2026-04-10T14:00:00Z"),
      updatedAt: new Date("2026-04-20T11:00:00Z"),
      blocksJson: [
        {
          id: "h1",
          type: "heading",
          text: "Ubuntwana bokumkani",
        },
        {
          id: "t1",
          type: "text",
          text: "Phambi kokuba abe ngumkani, uKufulula wayengumntwana. Wazalwa ngexesha lokusithwa kwenyanga kwiphondo laseMbata kwaye wanikelwa ngoko nangoko kubavumisi basebukhosini ababona ukuzalwa kwakhe njengophawu oludidayo: isithembiso sempumelelo kunye nesilumkiso sotshintsho olukhulu.\n\nImfundo yakhe yayiqatha. Ukusukela kwiminyaka emihlanu wafunda ukufunda iinkwenkwezi, ukuchonga izityalo zonyango nokuphulaphula ookhokho ngesandi somoya phakathi kwengca ende yesavanna. Umcebisi wakhe, uNsamba omdala, wamfundisa ukuba amandla okumkani awasekho kumkhosi wakhe, kodwa akwikhono lakhe lokuqonda ukuthula kwabantu bakhe.",
        },
        {
          id: "q1",
          type: "quote",
          text: "Ukulawula kuthetha kuqala ukwazi ukuthula ngexesha elifanelekileyo.",
          source: "UNsamba, umcebisi wasebukhosini",
        },
        {
          id: "h2",
          type: "heading",
          text: "Imfazwe yeMilambo Emithathu",
        },
        {
          id: "t2",
          type: "text",
          text: "Uvavanyo lokuqala lukaKufulula emfazweni lwenzeka ngexesha leMfazwe yeMilambo Emithathu, ungquzulwano lomhlaba olwajongana nobukumkani be-Isolele nobunye ubukumkani obubini obungabamelwane kangangezizini ezisixhenxe. Xa wayeneminyaka elishumi elinesithoba wayekhokela icala lasentshona lomkhosi wasebukhosini ngobuchule obamangalisa iintshaba zakhe.\n\nInto eyahlula uKufulula kubanqobi abaqhelekileyo kukuba emva koyiso ngalunye wayehlala phantsi neenkokeli zeentshaba ezoyisiweyo ukuze basela iwayini yesundu efanayo. Kuye, uxolo alusosiphumo sokungabikho kwemfazwe — luyisakhiwo esibuthathaka esakhiwa ngomonde, ilitye phezu kwelitye.",
        },
        {
          id: "d1",
          type: "divider",
        },
        {
          id: "h3",
          type: "heading",
          text: "Amandla omkhuseli",
        },
        {
          id: "t3",
          type: "text",
          text: "Kwintsomi ye-Isolele, ukumkani akangomlawuli wezopolitiko kuphela. Ungumdibaniso phakathi kwehlabathi labaphilayo nelabookhokho. UKufulula ufumana le ndima enokholo olunyanisekileyo kunye nokungathandabuzi okufihlakeleyo — uxinaniso olumenza abe ngumntu kwaye athandeke ngakumbi.\n\nAmandla akhe, achazwe kwiincwadi njengembonakaliso yonxibelelwano lwakhe namandla ookhokho, asoloko emelwe ngobulula obukhulu bokubonwayo: akukho ziphumo zigqithisileyo, kodwa iinkcukacha ezincinci ezifihlakeleyo — ilangatye elingacimiyo emoyeni onamandla okanye isityalo esidubula ngaphandle kwexesha xa edlula.",
        },
        {
          id: "cta2",
          type: "cta",
          title: "Phonononga abalinganiswa",
          description:
            "Fumanisa bonke abalinganiswa abagcwalisa ihlabathi le-Isolele.",
          buttonLabel: "Jonga abalinganiswa",
          href: "/xh/characters",
        },
      ],
    },

    // ── Inqaku 3 ───────────────────────────────────────────────────────────
    {
      id: "article-processus-creatif",
      slug: "ukuzoba-i-afrika-ngenye-indlela-inkqubo-yokudala-ye-isolele",
      title: "Ukuzoba i-Afrika ngenye indlela: inkqubo yokudala ye-Isolele",
      excerpt:
        "Ukusuka kumzobo wokuqala ukuya kwimveliso yokugqibela, fumana okwenzeka emva kwezigcawu ekudalweni kwamaphepha e-Isolele kunye nombono wobugcisa owawaphefumlela.",
      coverImage: "/royal-palace-background.png",
      published: true,
      createdAt: new Date("2026-05-01T09:00:00Z"),
      updatedAt: new Date("2026-05-05T16:45:00Z"),
      blocksJson: [
        {
          id: "h1",
          type: "heading",
          text: "Yonke into iqala ngenotebook",
        },
        {
          id: "t1",
          type: "text",
          text: "Inkqubo yokudala ye-Isolele iqala rhoqo ngeencwadi zemizobo. Amakhulu amaphepha agqunywe bubuso, iindlela zokuma kunye neemvakalelo — uphononongo olunomonde lwendlela iimvakalelo ezibhalwa ngayo emizimbeni yabantu baseAfrika, abasoloko bemelwe kakubi kwinkcubeko yehlabathi ethandwayo.\n\nIqela loyilo liyala indlela emfutshane yeestereotype ezibonakalayo. Umlinganiswa ngamnye uyaphandwa: isizwe sakhe, impahla yakhe, amanxeba esiko ukuba akhona, ubucwebe bakhe kunye nendlela yakhe yokuhamba. Lo msebenzi wophando ngamanye amaxesha uthatha ixesha elide kunokwenziwa kwamaphepha ngokwawo.",
        },
        {
          id: "q1",
          type: "quote",
          text: "Ubuso bonke endibuzobayo sisithembiso endisenzela umntu endingazange ndidibane naye kodwa endimhlonipha kakhulu.",
          source: "Umbhali we-Isolele",
        },
        {
          id: "h2",
          type: "heading",
          text: "Umbala njengolwimi",
        },
        {
          id: "t2",
          type: "text",
          text: "Iphalethi yemibala ye-Isolele ayenziwanga ngokungacwangciswanga. Icandelo ngalinye lebali lineyona mibala ilawulayo, etshintsha kancinci kumaphepha ukuze ihambelane neemeko zemvakalelo zabalinganiswa. Iindawo zoxolo zigutyungelwe yimibala efudumeleyo kunye noluhlaza olunzulu. Amaxesha oxinzelelo ajika abe luhlaza olumnyama kunye nobomvu begazi obuthambileyo.\n\nOku kuhambelana kwemibala sisiphumo sentsebenziswano esondeleyo phakathi kombhali nombalisi wemibala, abahlangana rhoqo ukuze balungelelanise umoya wesahluko ngasinye nangaphambi kokuba ipensile ichukumise iphepha.",
        },
        {
          id: "d1",
          type: "divider",
        },
        {
          id: "h3",
          type: "heading",
          text: "Ushicilelo: isenzo sokuzinikela",
        },
        {
          id: "t3",
          type: "text",
          text: "Isolele ishicilelwa ephepheni eliqinisekiswe yi-FSC eYurophu kusetyenziswa i-inki yezityalo. Olu khetho alusosiganeko nje: luyinxalenye yokucinga okubanzi malunga noxanduva lokusingqongileyo kushishino lokupapasha kunye nokuhambelana phakathi kwemilinganiselo yomsebenzi kunye neemeko zokuveliswa kwawo.\n\nIikhava zenziwa ngoshicilelo lwedijithali olukumgangatho ophezulu kunye ne-varnish ekhethiweyo kwezinye izinto zemizobo, nto leyo eyenza umphumo ophakamileyo omema umfundi ukuba achukumise incwadi ngaphambi kokuyivula. Incwadi njengento yeemvakalelo — ifilosofi eqhubeka kuyo yonke iprojekthi ye-Isolele.",
        },
        {
          id: "cta3",
          type: "cta",
          title: "Landela uhambo lwe-Isolele",
          description:
            "Joyina uluntu lwethu kwaye ufumane iindaba zamva nje, amaphepha akhethekileyo kunye nemisitho ezayo.",
          buttonLabel: "Fumanisa ihlabathi",
          href: "/xh/comics",
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
          type: "text",
          text: "Isolele was born from a simple yet profound ambition: to breathe life into the oral traditions of Central Africa through comics. Every line drawn, every color chosen, every word set on the page is the result of a dialogue between tradition and innovation.\n\nKing Kufulula, the central figure of the universe, is not merely a fictional character. He is the embodiment of centuries of wisdom, forgotten wars, and pacts sealed beneath ancient trees. His reign is a metaphor for the quest for identity lived by millions of people around the world.",
        },
        {
          id: "q1",
          type: "quote",
          text: "A story that does not travel is a story that dies.",
          source: "Kongo Proverb",
        },
        {
          id: "h2",
          type: "heading",
          text: "A deliberately hybrid aesthetic",
        },
        {
          id: "t2",
          type: "text",
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
          type: "text",
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
          type: "text",
          text: "Before becoming king, Kufulula was a child. Born during a lunar eclipse in the province of Mbata, he was immediately entrusted to the palace diviners, who saw in his birth an ambiguous sign — both a promise of prosperity and an omen of profound upheaval.\n\nHis education was rigorous. From the age of five, he learned to read the stars, identify medicinal plants, and listen to the ancestors through the whisper of the wind in the tall savanna grass. His mentor, old Nsamba, taught him that a king's strength lies not in his armies, but in his ability to understand the silences of his people.",
        },
        {
          id: "q1",
          type: "quote",
          text: "To rule is first to know when to remain silent.",
          source: "Nsamba, Royal Advisor",
        },
        {
          id: "h2",
          type: "heading",
          text: "The War of the Three Rivers",
        },
        {
          id: "t2",
          type: "text",
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
          type: "text",
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
          type: "text",
          text: "Isolele's creative process invariably begins with sketchbooks. Hundreds of pages filled with faces, postures, and expressions — a patient exploration of how emotions are written on African bodies, so often poorly represented in mainstream global culture.\n\nThe creative team refuses the shortcut of visual stereotypes. Every character is documented: their tribe, their clothing, their scarifications if any, their jewelry, their way of walking. This documentation work sometimes takes longer than producing the panels themselves.",
        },
        {
          id: "q1",
          type: "quote",
          text: "Every face I draw is a promise made to someone I have never met but deeply respect.",
          source: "The author of Isolele",
        },
        {
          id: "h2",
          type: "heading",
          text: "Color as language",
        },
        {
          id: "t2",
          type: "text",
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
          type: "text",
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

  // ══════════════════════════════════════════════════════════════════════════
  //  LINGALA
  // ══════════════════════════════════════════════════════════════════════════
  ln: [
    // ── Lisolo 1 ───────────────────────────────────────────────────────────
    {
      id: "article-univers-isolele",
      slug: "mokili-ya-isolele-kati-na-masapo-mpe-bomodele-ya-sika",
      title: "Mokili ya Isolele: kati na masapo mpe bomodele ya sika",
      excerpt:
        "Kota na kati ya bokeli ya Isolele, mokili epai masapo ya Afrika ekutani na lisolo ya bilili ya mikolo oyo.",
      coverImage: "/royal-palace-background.png",
      published: true,
      createdAt: new Date("2026-04-01T10:00:00Z"),
      updatedAt: new Date("2026-04-15T08:30:00Z"),
      blocksJson: [
        {
          id: "h1",
          type: "heading",
          text: "Misisa ya mokili ya makanisi",
        },
        {
          id: "t1",
          type: "text",
          text: "Isolele abotamaki na posa moko ya pete kasi ya mozindo: kopesa bomoi na masapo ya monoko ya Afrika ya Kati na nzela ya bande dessinée. Molongo nyonso oyo ebendami, langi nyonso oyo eponami mpe liloba nyonso oyo ekomami na lokasa ezali mbuma ya lisolo kati na bonkoko mpe bokeli ya sika.\n\nMokonzi Kufulula, moto ya motuya na mokili oyo, azali kaka te moto ya lisapo. Azali elilingi ya bankama ya bambula ya bwanya, bitumba oyo ebosanami mpe boyokani oyo esalemaki na nse ya banzete ya kala mingi. Bokonzi na ye ezali lokola mobembo ya boluki bomoto oyo bato ebele na mokili bazali koleka.",
        },
        {
          id: "q1",
          type: "quote",
          text: "Lisapo oyo etambolaka te ezali lisapo oyo ekufaka.",
          source: "Masese ya Kongo",
        },
        {
          id: "h2",
          type: "heading",
          text: "Bokitani ya kitoko oyo esangisami",
        },
        {
          id: "t2",
          type: "text",
          text: "Direction artistique ya Isolele eboyi kopona kati na lolenge ya bande dessinée ya Franco-Belge, manga mpe bilili ya Afrika ya mikolo oyo. Bosangani oyo eboti style oyo eyebani mbala moko: balangi ya moto oyo euti na bilamba ya wax, ndenge ya kobongisa bilili oyo euti na art européen mpe makomi oyo esangisi bilembo oyo epemami na nsibidi.\n\nCadre nyonso ekanisami lokola tableau oyo ekoki kozala yango moko wana ezali mpe kopesa nguya na lisolo nyonso.",
        },
        {
          id: "d1",
          type: "divider",
        },
        {
          id: "h3",
          type: "heading",
          text: "Kufu Game: mokili na maboko na yo",
        },
        {
          id: "t3",
          type: "text",
          text: "Version ya jeu vidéo ya mokili ya Isolele, oyo babengi Kufu Game, ebongoli lolenge ya lisolo ya BD mpo ekoma expérience interactive. Baponi bakotambola na bokonzi, bakosilisa mabombami oyo ewutaka na cosmologie ya mboka mpe bakokota na rites virtuels oyo ezali kolakisa mimeseno ya solo.\n\nMosika na kozala kaka produit dérivé, Kufu Game esalemi lokola nzela ya mateya ya culture, oyo bana ya mibu 7 bakoki kosalela mpe oyo endimami na groupe ya ba linguistes mpe anthropologues oyo basalaka na projet.",
        },
        {
          id: "cta1",
          type: "cta",
          title: "Mona volume ya liboso",
          description:
            "Somba volume ya liboso ya saga ya Isolele mpe kota na kati ya bankoto ya batangi na mokili mobimba.",
          buttonLabel: "Mona mikanda",
          href: "/ln/books",
        },
      ],
    },

    // ── Lisolo 2 ───────────────────────────────────────────────────────────
    {
      id: "article-kufulula-roi",
      slug: "kufulula-bomoto-ya-mokonzi-ya-kokamwa",
      title: "Kufulula: bomoto ya mokonzi ya kokamwa",
      excerpt:
        "Nani solo mokonzi Kufulula? Elilingi ya moto ya mindondo, elombe, diplomate mpe mobateli ya bankoko.",
      coverImage: "/royal-palace-background.png",
      published: true,
      createdAt: new Date("2026-04-10T14:00:00Z"),
      updatedAt: new Date("2026-04-20T11:00:00Z"),
      blocksJson: [
        {
          id: "h1",
          type: "heading",
          text: "Bomwana ya mokonzi",
        },
        {
          id: "t1",
          type: "text",
          text: "Liboso akoma mokonzi, Kufulula azalaki mwana. Abotamaki tango sanza ezipamaki na etuka ya Mbata mpe bapesaki ye mbala moko na banganga ya ndako ya bokonzi oyo bamonaki kobotama na ye lokola elembo ya ndenge mibale: elaka ya bomengo mpe elembo ya mbongwana minene.\n\nMateya na ye ezalaki makasi. Banda na mibu mitano, azalaki koyekola kotanga minzoto, koyeba banzete ya nkisi mpe koyoka bankoko na mongongo ya mopepe na kati ya matiti milayi ya savane. Moteyi na ye, mobange Nsamba, ateyaki ye ete nguya ya mokonzi ezali te na mampinga na ye kasi na makoki na ye ya koyeba kimia ya bato na ye.",
        },
        {
          id: "q1",
          type: "quote",
          text: "Kokonza ezali liboso koyeba kofanda nye na tango ya malamu.",
          source: "Nsamba, mopesi toli ya bokonzi",
        },
        {
          id: "h2",
          type: "heading",
          text: "Bitumba ya Bibale Misato",
        },
        {
          id: "t2",
          type: "text",
          text: "Momekano ya liboso ya Kufulula na bitumba eyaki na tango ya Bitumba ya Bibale Misato, conflit ya mabele oyo etelemisi bokonzi ya Isolele liboso ya bokonzi mibale ya pembeni na bileko sambo. Na mibu zomi na libwa, azalaki kokamba eteni ya west ya mampinga ya bokonzi na mayele oyo ekamwisaki banguna na ye.\n\nOyo ekesenisaka Kufulula na bato ya kolonga basusu ezali ete nsima ya kolonga nyonso, afandaka na bakambi ya banguna oyo balongamaki mpo bamela vin de palme moko. Mpo na ye, kimia ezali kaka te kozanga bitumba — ezali ndako moko ya malembe oyo etongamaka malembe malembe, libanga likolo ya libanga.",
        },
        {
          id: "d1",
          type: "divider",
        },
        {
          id: "h3",
          type: "heading",
          text: "Nguya ya mobateli",
        },
        {
          id: "t3",
          type: "text",
          text: "Na mythology ya Isolele, mokonzi azali kaka te mokambi ya politiki. Azali pont kati na mokili ya bato ya bomoi mpe ya bankoko. Kufulula azwi mosala oyo na bondimi ya solo mpe mwa ntembe ya sekele — tension oyo esalaka ete azala moto ya penza mpe ya bolingo.\n\nNguya na ye, oyo balobaka na ba volumes lokola bilembo ya boyokani na ye na nguya ya bankoko, elakisamaka tango nyonso na simplicité: ba effets spéciaux ya makasi te, kasi makambo mike ya mayele — moto oyo eninganaka te na mopepe makasi to nzete oyo ebimisi bafele na eleko oyo ezali ya yango te tango aleki.",
        },
        {
          id: "cta2",
          type: "cta",
          title: "Tala bato ya lisolo",
          description:
            "Mona bato nyonso oyo batondisi mokili ya Isolele.",
          buttonLabel: "Mona personnages",
          href: "/ln/characters",
        },
      ],
    },

    // ── Lisolo 3 ───────────────────────────────────────────────────────────
    {
      id: "article-processus-creatif",
      slug: "kobenda-afrika-na-ndenge-mosusu-procesus-creatif-ya-isolele",
      title: "Kobenda Afrika na ndenge mosusu: processus créatif ya Isolele",
      excerpt:
        "Kobanda na esquisse kino produit final, tala ndenge oyo bapekisaka ba planches ya Isolele mpe vision artistique oyo ezali kotambwisa yango.",
      coverImage: "/royal-palace-background.png",
      published: true,
      createdAt: new Date("2026-05-01T09:00:00Z"),
      updatedAt: new Date("2026-05-05T16:45:00Z"),
      blocksJson: [
        {
          id: "h1",
          type: "heading",
          text: "Nyonso ebandaka na carnet",
        },
        {
          id: "t1",
          type: "text",
          text: "Processus créatif ya Isolele ebandaka tango nyonso na ba carnets ya dessin. Bankama ya nkasa etondi na bilongi, ba positions mpe ba expressions — boluki ya malembe ya ndenge oyo mayoki emonisamaka na nzoto ya bato ya Afrika, oyo mbala mingi balakisamaka mabe na culture populaire ya mokili.\n\nÉquipe créative eboyi kosalela ba stéréotypes visuels. Personnage nyonso esalemaka étude na yango: tribu na ye, bilamba na ye, ba scarifications soki ezali, bijoux na ye mpe ndenge atambolaka. Mosala oyo ya documentation mbala mosusu ezwaka tango mingi koleka kosala ba planches yango moko.",
        },
        {
          id: "q1",
          type: "quote",
          text: "Longi nyonso oyo nabendaka ezali elaka mpo na moto oyo naino nakutana na ye te kasi oyo namemaka lokumu mingi.",
          source: "Mokomi ya Isolele",
        },
        {
          id: "h2",
          type: "heading",
          text: "Langi lokola monoko",
        },
        {
          id: "t2",
          type: "text",
          text: "Palette chromatique ya Isolele ezali ya hasard te. Arc narratif nyonso ezali na langi na yango ya monene, oyo ebongwanaka malembe malembe na kati ya ba planches mpo na kolanda mayoki ya personnages. Ba scènes ya kimia etondaka na marron ya moto mpe vert profond. Tango ya tension ekendaka na bleu ya butu mpe rouge ya makila oyo ezali malembe.\n\nCohérence chromatique oyo ezali mbuma ya mosala ya pene kati na scénariste mpe coloriste, oyo bakutanaka mbala mingi mpo na kobongisa atmosphère ya chapitre nyonso liboso kutu crayon esimba papier.",
        },
        {
          id: "d1",
          type: "divider",
        },
        {
          id: "h3",
          type: "heading",
          text: "Impression: mosala ya komipesa",
        },
        {
          id: "t3",
          type: "text",
          text: "Isolele eprimeramaka na papier oyo ezali certifié FSC na Europe, na encres végétales. Pona oyo ezali mpamba te: ezali kati ya makanisi minene na ntina ya responsabilité écologique ya industrie ya édition mpe boyokani kati na ba valeurs ya œuvre mpe ndenge oyo esalemaka.\n\nBa couvertures esalemaka na impression numérique haute définition mpe vernis sélectif na biloko mosusu ya graphique, oyo esalaka effet ya relief oyo ebengaka motangi asimba buku liboso kutu afungola yango. Buku lokola objet sensoriel — philosophie oyo ezali kotambola na projet nyonso ya Isolele.",
        },
        {
          id: "cta3",
          type: "cta",
          title: "Landa aventure ya Isolele",
          description:
            "Kota na communauté na biso mpe zwa sango ya sika, ba planches exclusives mpe événements oyo ezali koya.",
          buttonLabel: "Mona mokili",
          href: "/ln/comics",
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
