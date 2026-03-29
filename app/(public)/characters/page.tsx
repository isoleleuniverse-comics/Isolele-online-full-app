"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { Zap, Shield, Flame, Droplets, Crown, Eye, Sword } from "lucide-react"
import Link from "next/link"
import { BreadcrumbJsonLd } from "@/components/json-ld"
import Image from "next/image"

const characters = [
  {
    id: "zaire",
    name: "ZAIRE",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260106-WA0013-uGz1WsLuJsQwaeoa9FGYTgKiIf9rZA.jpg",
    title: { en: "Prince of Kongo", fr: "Prince du Kongo", pt: "Príncipe do Kongo", es: "Príncipe del Kongo", zu: "Inkoosi Yenhloko yeKongo", xh: "Inkosana yeKongo", sw: "Mkuu wa Kongo", ln: "Mwana wa Kongo" },
    description: {
      en: "Son of thunder and royalty, chosen by the Necklace of Destiny. Zaire must balance his privileged life with the demands of a hero's calling.",
      fr: "Fils du tonnerre et de la royaute, choisi par le Collier de la Destinee. Zaire doit équilibrer sa vie privilégiée avec les exigences de l'appel d'un héros.",
      pt: "Filho do trovão e da realeza, escolhido pelo Colar do Destino. Zaire deve equilibrar sua vida privilegiada com as demandas do chamado de um herói.",
      es: "Hijo del trueno y la realeza, elegido por el Collar del Destino. Zaire debe equilibrar su vida privilegiada con las demandas del llamado de un héroe.",
      zu: "Unyana wezindlulamithi nakabusika, okhethwe iKhanga Lenganekwane. UZaire kufanele alinganisele ubuhle bakhe nobuntu ngobambo lokuhamba ngawo umuntu ongamadla.",
      xh: "Unyana wombani nokusika, okhethelwe yiHlaba yeNdawo. UZaire kufanele alibhalise ubuhle bakhe nobuntu ngobambo lokuhamba ngawo umntu ongaqhelani.",
      sw: "Mwana wa radi na ukurusi, akichagua kwa Mkufu wa Hatimaye. Zaire lazima libalalise maishaa yake yenye heshima na mahitaji ya mwomeko wa shujaa.",
      ln: "Mwana wa mipata mpe ba-injini, okhethwe na Mbele ya Suka. Zaire asengeli kobondisa mayele makasi na ndakisa ya kosala misala ya miwa."
    },
    powers: [
      { icon: Zap, name: { en: "Lightning Control", fr: "Contrôle de la Foudre", pt: "Controle de Raios", es: "Control de Rayos", zu: "Ukulawula Indlulamithi", xh: "Ukulawula iZindlulamithi", sw: "Kudhibiti Umeme", ln: "Kofunda Mipata" } },
      { icon: Crown, name: { en: "Royal Authority", fr: "Autorité Royale", pt: "Autoridade Real", es: "Autoridad Real", zu: "Amandla Inkosi", xh: "Amandla Enkosi", sw: "Nguvu ya Ukurusi", ln: "Likambi la Mokonzi" } },
      { icon: Shield, name: { en: "Ancestral Protection", fr: "Protection Ancestrale", pt: "Proteção Ancestral", es: "Protección Ancestral", zu: "Ukuvikelwa Kwabazali", xh: "Ukuvikelwa Kwabazali", sw: "Kuzuia kwa Wazazi", ln: "Bokonzi bya Bakoko" } }
    ],
    color: "#D4AF37",
    kingdom: { en: "Kingdom of Kongo", fr: "Royaume du Kongo", pt: "Reino do Kongo", es: "Reino del Kongo", zu: "Umbuso Wakwasikhuni", xh: "Umbuso weKongo", sw: "Nchi ya Kongo", ln: "Bokonzi bya Kongo" }
  },
  {
    id: "kimoya",
    name: "KIMOYA",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260106-WA0010-XZRyXzQwD9znnsx8mxHbTBRNzjmtHm.jpg",
    title: { en: "The Reborn Kandake", fr: "La Kandake Renaissante", pt: "A Kandake Renascida", es: "La Kandake Renacida", zu: "INkosikazi Ephinde Yavuka", xh: "Inkosikazi Ephinde Yavuka", sw: "Kandake Iliyozaliwa Tena", ln: "Kandake Ozongeleme" },
    description: {
      en: "Heir of warrior queens, shadow hunter and protector of the Ethercobalt. She carries the power of Nubian gods in her veins.",
      fr: "Héritière des reines guerrières, chasseuse d'ombres et protectrice de l'Ethercobalt. Elle porte le pouvoir des dieux nubiens dans ses veines.",
      pt: "Herdeira das rainhas guerreiras, caçadora de sombras e protetora do Etercóbato. Ela carrega o poder dos deuses núbios em suas veias.",
      es: "Heredera de reinas guerreras, cazadora de sombras y protectora del Etercóbalo. Lleva el poder de los dioses nubios en sus venas.",
      zu: "Ingane yemakosikazi azomlwandelela, Umzingeli Womthunzi kanye Nomlindi weEthercobalt. Uthwala amandla ezimu zeNubian.",
      xh: "Ingane yemakosikazi azomlwandelela, Umzingeli Womthunzi kanye Nomlindi weEthercobalt. Uthwala amandla eezimu zeNubian.",
      sw: "Mrithi wa malkia wapiganaji, mwaliko wa vivuli na mlindi wa Ethercobalt. Anabeba nguvu za miungu ya Nubian katika mishipa yake.",
      ln: "Mwana wa makadi basangi, Mounda ya elili mpe Mwali ya Ethercobalt. Amataka makambu ma dieu ya Nubian na tolo yake."
    },
    powers: [
      { icon: Eye, name: { en: "Shadow Sight", fr: "Vision de l'Ombre", pt: "Visão das Sombras", es: "Visión de las Sombras", zu: "Ukubona kweThunzi", xh: "Ukubona kweThunzi", sw: "Macho ya Vivuli", ln: "Longi la Elili" } },
      { icon: Sword, name: { en: "Divine Combat", fr: "Combat Divin", pt: "Combate Divino", es: "Combate Divino", zu: "Ukulwa kweNkosi", xh: "Ukulwa kweNkosi", sw: "Vita Kuu", ln: "Molɔnɔ mwa Nzambe" } },
      { icon: Shield, name: { en: "Nubian Shield", fr: "Bouclier Nubien", pt: "Escudo Núbio", es: "Escudo Nubio", zu: "Isihlangu saseNubia", xh: "Isihlangu saseNubia", sw: "Ngao ya Nubia", ln: "Isihlangu sa Nubia" } }
    ],
    color: "#B3541E",
    kingdom: { en: "Kingdom of Kush", fr: "Royaume de Kush", pt: "Reino de Kush", es: "Reino de Kush", zu: "Umbuso weKush", xh: "Umbuso weKush", sw: "Nchi ya Kush", ln: "Bokonzi bya Kush" }
  },
  {
    id: "zattar",
    name: "ZATTAR",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260106-WA0011-UqXFP6gWl4Khrn6sXFwj5ZtTTbvkiP.jpg",
    title: { en: "The Blood Architect", fr: "L'Architecte de Sang", pt: "O Arquiteto de Sangue", es: "El Arquitecto de Sangre", zu: "Umkhi Wegazi", xh: "Umkhi Wegazi", sw: "Mwalimu wa Moto", ln: "Mokambi wa Makila" },
    description: {
      en: "Cursed genius of forbidden technology. Master of techno-mystical constructs that blur the line between science and ancient magic.",
      fr: "Génie maudit de la technologie interdite. Maître des constructions techno-mystiques qui brouillent la frontière entre science et magie ancienne.",
      pt: "Gênio amaldiçoado da tecnologia proibida. Mestre de construtos tecno-místicos que borram a linha entre ciência e magia antiga.",
      es: "Genio maldito de la tecnología prohibida. Maestro de construcciones tecno-místicas que difuminan la línea entre ciencia y magia antigua.",
      zu: "Ongciwane onembezi eyinzululwazi iyinqumo. Umkhi wokwakha okwakha kwesayensi nokuhlanga.",
      xh: "Ongciwane onembezi eyinzululwazi iyinqumo. Umkhi wokwakha okwakha kwesayensi nokuhlanga.",
      sw: "Bahati mbaya ya teknolohiji iliyokataliwa. Mwalimu wa muundo wa umeme-kichawi ambayo huzunguka mipaka kati ya sayansi na uchawi wa kale.",
      ln: "Molendo mwanso wa tetekeli ya likimi. Mkakela wa makakela makakela makakela makakela makakela."
    },
    powers: [
      { icon: Flame, name: { en: "Blood Technology", fr: "Technologie de Sang", pt: "Tecnologia de Sangue", es: "Tecnología de Sangre", zu: "Ubunzima beGazi", xh: "Ubunzima beGazi", sw: "Teknolohiji ya Damu", ln: "Tetekeli ya Makila" } },
      { icon: Shield, name: { en: "Construct Creation", fr: "Création de Constructs", pt: "Criação de Construtos", es: "Creación de Constructos", zu: "Ukwakha Izakhi", xh: "Ukwakha Izakhi", sw: "Ujenzi wa Miundo", ln: "Lisantu la Nakupakamo" } },
      { icon: Eye, name: { en: "Pattern Vision", fr: "Vision des Motifs", pt: "Visão de Padrões", es: "Visión de Patrones", zu: "Ukubona Amaphathini", xh: "Ukubona Amaphathini", sw: "Macho ya Mifumo", ln: "Longi la Mbapo" } }
    ],
    color: "#8B0000",
    kingdom: { en: "Iron Desert of Tsoro", fr: "Désert de Fer de Tsoro", pt: "Deserto de Ferro de Tsoro", es: "Desierto de Hierro de Tsoro", zu: "Inzungu Yesinyamazane yeTsoro", xh: "Inzungu Yesinyamazane yeTsoro", sw: "Jangwa la Chuma la Tsoro", ln: "Eliki ya Fele ya Tsoro" }
  },
  {
    id: "jumeaux-njoko",
    name: { en: "THE NJOKO TWINS", fr: "LES JUMEAUX NJOKO", pt: "OS GÊMEOS NJOKO", es: "LOS GEMELOS NJOKO", zu: "IZINTANDANE ZIKANJOKO", xh: "IZINTANDANE ZIKANJOKO", sw: "WAJUMBE WA NJOKO", ln: "BANA MBILELI NJOKO" },
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260106-WA0012-HZAFyQIAHjVxMaTAyLn0TKRpvB9DPc.jpg",
    title: { en: "Orphan Prophets", fr: "Prophètes Orphelins", pt: "Profetas Órfãos", es: "Profetas Huérfanos", zu: "Abaphrofesithi Abafileyo", xh: "Abaphrofesithi Abafileyo", sw: "Manabii wazimu", ln: "Banyimi ba Boyikoli" },
    description: {
      en: "Orphan prophets who speak with rivers and stars. Their dual nature connects the physical realm to the spirit world.",
      fr: "Prophètes orphelins qui parlent avec les rivières et les étoiles. Leur double nature connecte le royaume physique au monde des esprits.",
      pt: "Profetas órfãos que falam com rios e estrelas. Sua natureza dual conecta o reino físico ao mundo dos espíritos.",
      es: "Profetas huérfanos que hablan con ríos y estrellas. Su naturaleza dual conecta el reino físico con el mundo de los espíritus.",
      zu: "Abaphrofesithi ababileleyo abakhokhisana nezifula nazikhwezi. Izici zabo ezimbili zixhumanisa umhlaba nendawo yezilungu.",
      xh: "Abaphrofesithi ababileleyo abakhokhisana nezifula nazikhwezi. Izici zabo ezimbili zixhumanisa umhlaba nendawo yezilungu.",
      sw: "Manabii wazimu wanazungumza na mito na nyota. Asili yao mbalimbali inaunganisha dunia halisi na dunia ya roho.",
      ln: "Banyimi ba boyikoli ba monwani lokola minzoto mpe minzita. Singa yabo mibale ilinganisa motema ya Nzambe na motema ya banzambe."
    },
    powers: [
      { icon: Droplets, name: { en: "Water Communion", fr: "Communion Aquatique", pt: "Comunhão Aquática", es: "Comunión Acuática", zu: "Inxwaneleano Yamanzi", xh: "Inxwaneleano Yamanzi", sw: "Urafiki wa Maji", ln: "Lisantu la Minzoto" } },
      { icon: Eye, name: { en: "Star Reading", fr: "Lecture des Étoiles", pt: "Leitura de Estrelas", es: "Lectura de Estrellas", zu: "Ukufunda Izakhiwo", xh: "Ukufunda Izakhiwo", sw: "Kusoma Nyota", ln: "Kolisa Minzita" } },
      { icon: Shield, name: { en: "Twin Bond", fr: "Lien Gemellaire", pt: "Vínculo Gêmeo", es: "Vínculo Gemelo", zu: "Isibopho SezintandanE", xh: "Isibopho SezintandanE", sw: "Uhusiano wa Wajumbe", ln: "Libakeli la Bana" } }
    ],
    color: "#00CED1",
    kingdom: { en: "Oracle Nation of M'Bara", fr: "Nation Oracle de M'Bara", pt: "Nação Oráculo de M'Bara", es: "Nación Oráculo de M'Bara", zu: "Isizwe seOracle saseM'Bara", xh: "Isizwe seOracle saseM'Bara", sw: "Taifa la Mtaalam wa M'Bara", ln: "Lisantu la Banyimi bya M'Bara" }
  },
  {
    id: "reine-imvula",
    name: { en: "QUEEN IMVULA", fr: "REINE IMVULA", pt: "RAINHA IMVULA", es: "REINA IMVULA", zu: "INKOSIKAZI IMVULA", xh: "INKOSIKAZI IMVULA", sw: "MALKIA IMVULA", ln: "MWAMI IMVULA" },
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260106-WA0015-ixHtpvXFjUsQoB2wP6rqZlYnT62ir7.jpg",
    title: { en: "Guardian of Sky Beasts", fr: "Gardienne des Bêtes du Ciel", pt: "Guardiã das Bestas Celestes", es: "Guardiana de las Bestias Celestiales", zu: "Umlindi wezilwane Zasezulwini", xh: "Umlindi wezilwane Zasezulwini", sw: "Mlindi wa Wanyama wa Anga", ln: "Mwali wa Bisengo bya Likolo" },
    description: {
      en: "Sovereign of Stormglass, guardian of the celestial creatures that patrol the boundaries between worlds.",
      fr: "Souveraine de Stormglass, gardienne des créatures célestes qui patrouillent les frontières entre les mondes.",
      pt: "Soberana de Stormglass, guardiã das criaturas celestiais que patrulham as fronteiras entre mundos.",
      es: "Soberana de Stormglass, guardiana de las criaturas celestiales que patrullan las fronteras entre mundos.",
      zu: "Isokhela seStormglass, umlindi wezilwane zasezulwini esikhulela emngcele phakathi kweizwe.",
      xh: "Isokhela seStormglass, umlindi wezilwane zasezulwini esikhulela emngcele phakathi kweizwe.",
      sw: "Mfalme wa Stormglass, mlindi wa wanyama waziwa wanayewazamii katika mipaka kati ya ulimwengu.",
      ln: "Mokonzi wa Stormglass, mwali wa bisengo bya likolo bisalamukaka na mipaka ya bambwe."
    },
    powers: [
      { icon: Crown, name: { en: "Sky Command", fr: "Commandement du Ciel", pt: "Comando do Céu", es: "Comando del Cielo", zu: "Umlayo woZulu", xh: "Umlayo woZulu", sw: "Amri ya Anga", ln: "Mokonzi wa Likolo" } },
      { icon: Shield, name: { en: "Beast Bond", fr: "Lien des Bêtes", pt: "Vínculo com Bestas", es: "Vínculo de Bestias", zu: "Isibopho Sezilwane", xh: "Isibopho Sezilwane", sw: "Uhusiano wa Wanyama", ln: "Libakeli la Bisengo" } },
      { icon: Zap, name: { en: "Storm Summoning", fr: "Invocation des Tempêtes", pt: "Invocação de Tempestades", es: "Invocación de Tormentas", zu: "Ukubiza Izilindi", xh: "Ukubiza Izilindi", sw: "Kukamatia Mabingu", ln: "Koiso ya Elindi" } }
    ],
    color: "#9370DB",
    kingdom: { en: "Skyfall Islands", fr: "Îles Skyfall", pt: "Ilhas Skyfall", es: "Islas Skyfall", zu: "Iziqalo zeSkyfall", xh: "Iziqalo zeSkyfall", sw: "Visiwa vya Skyfall", ln: "Bikoko bya Skyfall" }
  },
  {
    id: "bambula",
    name: "BAMBULA",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bambula%201-UAlmQoZVy1GslUfmVvqc5bdDDdEQdX.jpg",
    title: { en: "Guardian of the Savanna", fr: "Gardienne de la Savane", pt: "Guardiã da Savana", es: "Guardiana de la Sabana", zu: "Umlindi weSavana", xh: "Umlindi weSavana", sw: "Mlindi wa Savana", ln: "Mwali wa Savana" },
    description: {
      en: "A fearless warrior of the savanna, mastering sacred fire and the wild nature of Africa. She is the protector of the land and its people.",
      fr: "Une guerrière intrépide de la savane, maîtrisant le feu sacré et la nature sauvage de l'Afrique. Elle est la protectrice de la terre et de son peuple.",
      pt: "Uma guerreira destemida da savana, dominando o fogo sagrado e a natureza selvagem da África. Ela é a protetora da terra e seu povo.",
      es: "Una guerrera intrépida de la sabana, dominando el fuego sagrado y la naturaleza salvaje de África. Ella es la protectora de la tierra y su pueblo.",
      zu: "Umuntu osilela womuva womvikeleli opethemulayo ofa omvu nokuvela ngamafire womuntu",
      xh: "Umuntu osilela womuva womvikeleli opethemulayo ofa omvu nokuvela ngamafire womuntu",
      sw: "Mpigania jasiri wa savana, shahiri wa moto takatifu na asili ya Afrika. Yeye ni mlindi wa ardhi na watu wake.",
      ln: "Mwali ya motema ya savana, ndolo ya moto masantu mpe na nzambe. Ayi mulindi wa nzambe mpe bavatu."
    },
    powers: [
      { icon: Flame, name: { en: "Fire Mastery", fr: "Maîtrise du Feu", pt: "Domínio do Fogo", es: "Dominio del Fuego", zu: "Ubugcweletsheni bomvu", xh: "Ubugcweletsheni bomvu", sw: "Ustadi wa Moto", ln: "Litebi la Moto" } },
      { icon: Shield, name: { en: "Nature Control", fr: "Contrôle de la Nature", pt: "Controle da Natureza", es: "Control de la Naturaleza", zu: "Ukulawula Isikathi", xh: "Ukulawula Isikathi", sw: "Kudhibiti Asili", ln: "Kosunga Nzambe" } },
      { icon: Sword, name: { en: "Combat Excellence", fr: "Excellence au Combat", pt: "Excelência em Combate", es: "Excelencia en Combate", zu: "Ubugcweletsheni behuluza", xh: "Ubugcweletsheni behuluza", sw: "Ustadi wa Vita", ln: "Litebi la Molɔnɔ" } }
    ],
    color: "#B3541E",
    kingdom: { en: "Savanna Realm", fr: "Royaume de la Savane", pt: "Reino da Savana", es: "Reino de la Sabana", zu: "Umbuso Wesavana", xh: "Umbuso Wesavana", sw: "Nchi ya Savana", ln: "Bokonzi bya Savana" }
  },
  {
    id: "mokele",
    name: "MOKELE",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mokele-lZToplq4eNUuy08B5V6faXETr5YnKg.jpg",
    title: { en: "Crowned by the Streets", fr: "Couronné par les Rues", pt: "Coroado pelas Ruas", es: "Coronado por las Calles", zu: "Umkosi Westreets", xh: "Umkosi Westreets", sw: "Mfalme wa Mitaa", ln: "Mokonzi wa Basangu" },
    description: {
      en: "The heir of urban chaos and ancestral power. Born in the concrete jungles where tradition meets modernity, he bridges the gap between ancient heritage and contemporary struggle.",
      fr: "L'héritier du chaos urbain et du pouvoir ancestral. Né dans les jungles de béton où la tradition rencontre la modernité, il comble le fossé entre l'héritage ancien et la lutte contemporaine.",
      pt: "O herdeiro do caos urbano e do poder ancestral. Nascido nas selvas de concreto onde a tradição encontra a modernidade, ele preenche a lacuna entre a herança antiga e a luta contemporânea.",
      es: "El heredero del caos urbano y del poder ancestral. Nacido en las junglas de concreto donde la tradición se encuentra con la modernidad, él cubre la brecha entre la herencia antigua y la lucha contemporánea.",
      zu: "Ingane yomkosi womubuso nesiyaya. Bezaliwe emhlabeni wezithandane komuntu nendlela kamuva",
      xh: "Ingane yomkosi womubuso nesiyaya. Bezaliwe emhlabeni wezithandane komuntu nendlela kamuva",
      sw: "Mrithi wa machafuko ya jiji na nguvu ya mzazi. Alizaliwa katika jangwa la chuma ambapo jadi hukutana na kisasa.",
      ln: "Ingane ya bolokoli bya batu mpe makambu ma bakoko. Alavanga na molongo ya makaya oyo mya batu."
    },
    powers: [
      { icon: Zap, name: { en: "Urban Mastery", fr: "Maîtrise Urbaine", pt: "Domínio Urbano", es: "Dominio Urbano", zu: "Ubugcweletsheni beGradi", xh: "Ubugcweletsheni beGradi", sw: "Ustadi wa Jiji", ln: "Litebi la Bapela" } },
      { icon: Shield, name: { en: "Ancestral Heritage", fr: "Héritage Ancestral", pt: "Herança Ancestral", es: "Herencia Ancestral", zu: "Ibusika lezintandane", xh: "Ibusika lezintandane", sw: "Urithi wa Mzazi", ln: "Ibeka la Bakoko" } },
      { icon: Eye, name: { en: "Street Wisdom", fr: "Sagesse des Rues", pt: "Sabedoria das Ruas", es: "Sabiduría de las Calles", zu: "Uxolo olusisiziwe", xh: "Uxolo olusisiziwe", sw: "Hekima ya Mitaa", ln: "Bonsomi ya Basangu" } }
    ],
    color: "#4169E1",
    kingdom: { en: "Urban Kingdom", fr: "Royaume Urbain", pt: "Reino Urbano", es: "Reino Urbano", zu: "Umbuso weGradi", xh: "Umbuso weGradi", sw: "Nchi ya Jiji", ln: "Bokonzi bya Bapela" }
  },
  {
    id: "zattar",
    name: "ZATTAR",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260106-WA0011-UqXFP6gWl4Khrn6sXFwj5ZtTTbvkiP.jpg",
    title: { en: "The Blood Architect", fr: "L'Architecte de Sang", pt: "O Arquiteto de Sangue", es: "El Arquitecto de Sangue", zu: "Umkhi weGazi", xh: "Umkhi weGazi", sw: "Mwalimu wa Damu", ln: "Mokambi wa Makila" },
    description: {
      en: "Cursed genius of forbidden technology. Master of techno-mystical constructs that blur the line between science and ancient magic.",
      fr: "Génie maudit de la technologie interdite. Maître des constructions techno-mystiques qui brouillent la frontière entre science et magie ancienne.",
      pt: "Gênio amaldiçoado da tecnologia proibida. Mestre de construtos tecno-místicos que borram a linha entre ciência e magia antiga.",
      es: "Genio maldito de la tecnología prohibida. Maestro de construcciones tecno-místicas que difuminan la línea entre ciencia y magia antigua.",
      zu: "Ongciwane onembezi eyinzululwazi iyinqumo",
      xh: "Ongciwane onembezi eyinzululwazi iyinqumo",
      sw: "Bahati mbaya ya teknolohiji iliyokataliwa. Mwalimu wa muundo wa umeme-kichawi.",
      ln: "Molendo mwanso wa tetekeli ya likimi"
    },
    powers: [
      { icon: Flame, name: { en: "Blood Technology", fr: "Technologie de Sang", pt: "Tecnologia de Sangue", es: "Tecnología de Sangue", zu: "Tetekeli ya Gazi", xh: "Tetekeli ya Gazi", sw: "Teknolohiji ya Damu", ln: "Litebi la Makila" } },
      { icon: Shield, name: { en: "Construct Creation", fr: "Création de Constructs", pt: "Criação de Construtos", es: "Creación de Constructos", zu: "Ukwakha Izakhi", xh: "Ukwakha Izakhi", sw: "Ujenzi wa Miundo", ln: "Lisantu la Makama" } },
      { icon: Eye, name: { en: "Pattern Vision", fr: "Vision des Motifs", pt: "Visão de Padrões", es: "Visión de Patrones", zu: "Ukubona Amaphathini", xh: "Ukubona Amaphathini", sw: "Macho ya Mifumo", ln: "Longi la Mbapo" } }
    ],
    color: "#8B0000",
    kingdom: { en: "Iron Desert of Tsoro", fr: "Désert de Fer de Tsoro", pt: "Deserto de Ferro de Tsoro", es: "Desierto de Hierro de Tsoro", zu: "Inzungu Yesinyamazane yeTsoro", xh: "Inzungu Yesinyamazane yeTsoro", sw: "Jangwa la Chuma la Tsoro", ln: "Eliki ya Fele ya Tsoro" }
  },
  {
    id: "jumeaux-njoko",
    name: { en: "THE NJOKO TWINS", fr: "LES JUMEAUX NJOKO", pt: "OS GÊMEOS NJOKO", es: "LOS GEMELOS NJOKO", zu: "IZINTANDANE ZIKANJOKO", xh: "IZINTANDANE ZIKANJOKO", sw: "WAJUMBE WA NJOKO", ln: "BANA MBILELI NJOKO" },
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260106-WA0012-HZAFyQIAHjVxMaTAyLn0TKRpvB9DPc.jpg",
    title: { en: "Orphan Prophets", fr: "Prophètes Orphelins", pt: "Profetas Órfãos", es: "Profetas Huérfanos", zu: "Abaphrofesithi Abafileyo", xh: "Abaphrofesithi Abafileyo", sw: "Manabii wazimu", ln: "Banyimi ba Boyikoli" },
    description: {
      en: "Orphan prophets who speak with rivers and stars. Their dual nature connects the physical realm to the spirit world.",
      fr: "Prophètes orphelins qui parlent avec les rivières et les étoiles. Leur double nature connecte le royaume physique au monde des esprits.",
      pt: "Profetas órfãos que falam com rios e estrelas. Sua natureza dual conecta o reino físico ao mundo dos espíritos.",
      es: "Profetas huérfanos que hablan con ríos y estrellas. Su naturaleza dual conecta el reino físico con el mundo de los espíritus.",
      zu: "Abaphrofesithi ababileleyo abakhokhisana nezifula nazikhwezi",
      xh: "Abaphrofesithi ababileleyo abakhokhisana nezifula nazikhwezi",
      sw: "Manabii wazimu wanazungumza na mito na nyota",
      ln: "Banyimi ba boyikoli ba monwani lokola minzoto mpe minzita"
    },
    powers: [
      { icon: Droplets, name: { en: "Water Communion", fr: "Communion Aquatique", pt: "Comunhão Aquática", es: "Comunión Acuática", zu: "Inxwaneleano Yamanzi", xh: "Inxwaneleano Yamanzi", sw: "Urafiki wa Maji", ln: "Lisantu la Minzoto" } },
      { icon: Eye, name: { en: "Star Reading", fr: "Lecture des Étoiles", pt: "Leitura de Estrelas", es: "Lectura de Estrellas", zu: "Ukufunda Izakhiwo", xh: "Ukufunda Izakhiwo", sw: "Kusoma Nyota", ln: "Kolisa Minzita" } },
      { icon: Shield, name: { en: "Twin Bond", fr: "Lien Gemellaire", pt: "Vínculo Gêmeo", es: "Vínculo Gemelo", zu: "Isibopho SezintandanE", xh: "Isibopho SezintandanE", sw: "Uhusiano wa Wajumbe", ln: "Libakeli la Bana" } }
    ],
    color: "#00CED1",
    kingdom: { en: "Oracle Nation of M'Bara", fr: "Nation Oracle de M'Bara", pt: "Nação Oráculo de M'Bara", es: "Nación Oráculo de M'Bara", zu: "Isizwe seOracle saseM'Bara", xh: "Isizwe seOracle saseM'Bara", sw: "Taifa la Mtaalam wa M'Bara", ln: "Lisantu la Banyimi bya M'Bara" }
  }
]

export default function CharactersPage() {
  const { currentLanguage } = useLanguage()
  const lang = currentLanguage.code
  const t = (obj: { en: string; fr: string; pt?: string; es?: string; zu?: string; xh?: string; sw?: string; ln?: string } | string) => {
    if (typeof obj === 'string') return obj
    return obj[lang as 'en' | 'fr' | 'pt' | 'es' | 'zu' | 'xh' | 'sw' | 'ln'] || obj.en
  }
  const language = currentLanguage.code

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://isolele.com" },
        { name: "Characters", url: "https://isolele.com/characters" }
      ]} />
      
      <main className="min-h-screen py-20" style={{ backgroundColor: 'var(--isolele-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* The Chosen One Section - HRM King Kufulula */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 p-12 rounded-3xl overflow-hidden relative"
            style={{ 
              background: 'linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(179,84,30,0.1) 100%)',
              border: '2px solid rgba(212,175,55,0.3)'
            }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden"
                style={{ border: '3px solid #D4AF37' }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260202-WA0007-oizvrYvXZmN98swSFrMjDIldyIoV8Z.jpg"
                  alt="HRM King Kufulula - The Chosen One"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </motion.div>
              
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <span 
                    className="text-sm font-medium px-4 py-2 rounded-full"
                    style={{ backgroundColor: 'rgba(212,175,55,0.3)', color: '#D4AF37' }}
                  >
                    {lang === 'fr' ? "L'ARCHITECTE ROYAL" : lang === 'pt' ? "O ARQUITETO REAL" : lang === 'es' ? "EL ARQUITECTO REAL" : lang === 'zu' ? "UMKHI WOMBUSO" : lang === 'xh' ? "UMKHI WOMBUSO" : lang === 'sw' ? "MWALIMU WA UKURUSI" : lang === 'ln' ? "MOKAMBI WA BOKONZI" : "ROYAL ARCHITECT"}
                  </span>
                  <h2 className="text-5xl md:text-6xl font-bold mt-6 mb-2" style={{ color: '#D4AF37' }}>
                    HRM King<br />Kufulula
                  </h2>
                  <h3 className="text-2xl mt-3" style={{ color: 'var(--isolele-text-secondary)' }}>
                    {lang === 'fr' ? "Le Fondateur Visionnaire" : lang === 'pt' ? "O Fundador Visionário" : lang === 'es' ? "El Fundador Visionario" : lang === 'zu' ? "Umsebenzi ka-Vshiya" : lang === 'xh' ? "Umsebenzi ka-Vshiya" : lang === 'sw' ? "Mwanzilishi Mwenye Mawazo" : lang === 'ln' ? "Mosungi Mokinili" : "The Visionary Founder"}
                  </h3>
                </div>
                
                <p className="text-lg leading-relaxed" style={{ color: 'var(--isolele-text)' }}>
                  {lang === 'fr'
                    ? "Gardien du patrimoine congolais et architecte culturel, le Roi Kufulula a fondé ISOLELE pour restaurer l'identité africaine et créer un empire mythologique où les super-héros émergent de l'histoire authentique."
                    : lang === 'pt'
                    ? "Guardião do patrimônio congolês e arquiteto cultural, o Rei Kufulula fundou ISOLELE para restaurar a identidade africana e criar um império mitológico onde super-heróis emergem da história autêntica."
                    : lang === 'es'
                    ? "Guardián del patrimonio congoleño y arquitecto cultural, el Rey Kufulula fundó ISOLELE para restaurar la identidad africana y crear un imperio mitológico donde los superhéroes emergen de la historia auténtica."
                    : lang === 'zu'
                    ? "Umlindi wesintu sesikoBukhongi kanye nomkhi womuntu, iKosikazi Kufulula yasungula iISOLELE ukulusuleleka inhlonipho yesikoBukhongi kanye nokwakha umbuso owenziwe ngezindlunkulu lapho abantu abanesimangaliso bavela eziugini."
                    : lang === 'xh'
                    ? "Umlindi wesintu sesikoBukhongi kanye nomkhi womuntu, iKosikazi Kufulula yasungula iISOLELE ukulusuleleka inhlonipho yesikoBukhongi kanye nokwakha umbuso owenziwe ngezindlunkulu lapho abantu abanesimangaliso bavela eziugini."
                    : lang === 'sw'
                    ? "Mlindi wa urithi wa Kongo na mwalimu wa kitamaduni, Mfalme Kufulula asisitiza ISOLELE kurudisha utambulisho wa Afrika na kujenga nchi ya hadithi ambapo wabunga wanatoka kwenye historia halisi."
                    : lang === 'ln'
                    ? "Mwali wa basangu ba Kongo mpe mokambi wa boyokoli, Mokonzi Kufulula asunda ISOLELE mpo ya kusunika singa ya Bafriki mpe kutu nzambe eya boyikoli kobina ndeko."
                    : "Custodian of Congolese heritage and cultural architect, King Kufulula founded ISOLELE to restore African identity and create a mythological empire where superheroes rise from authentic history."}
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    href="/characters/kufulula"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold transition-all hover:scale-105"
                    style={{ backgroundColor: '#D4AF37', color: '#000' }}
                  >
                    {lang === 'fr' ? 'DÉCOUVRIR' : lang === 'pt' ? 'DESCOBRIR' : lang === 'es' ? 'DESCUBRIR' : lang === 'zu' ? 'THOLA' : lang === 'xh' ? 'THOLA' : lang === 'sw' ? 'GUNDUA' : lang === 'ln' ? 'TALA' : 'DISCOVER'}
                    <span>→</span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="my-12 h-1 w-24 mx-auto rounded-full" style={{ backgroundColor: '#D4AF37' }} />

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: 'var(--isolele-accent)' }}>
              {lang === 'fr' ? "LES ÉLUS" : lang === 'pt' ? "OS ESCOLHIDOS" : lang === 'es' ? "LOS ELEGIDOS" : lang === 'zu' ? "ABASAKHETHIWE" : lang === 'xh' ? "ABASAKHETHIWE" : lang === 'sw' ? "WACHAGUZI" : lang === 'ln' ? "BAYA LIKONDE" : "THE CHOSEN ONES"}
            </h1>
            <p className="text-xl max-w-3xl mx-auto italic" style={{ color: 'var(--isolele-text-secondary)' }}>
              {lang === 'fr'
                ? "Ces ne sont pas des héros empruntés à des mythes étrangers. Ils sont nés du sol, de l'esprit et du ciel du continent mère."
                : lang === 'pt'
                ? "Estes não são heróis emprestados de mitos estrangeiros. Eles nasceram do solo, espírito e céu do continente-mãe."
                : lang === 'es'
                ? "Estos no son héroes tomados de mitos extranjeros. Nacieron de la tierra, el espíritu y el cielo del continente madre."
                : lang === 'zu'
                ? "Lawa akukho izilwanelwane ezitholiwe emithwabileni eyabantu bezoshaya. Bezalwa emhlabeni, emoyeni nasezulwini sehlelu."
                : lang === 'xh'
                ? "Lawa akukho izilwanelwane ezitholiwe emithwabileni eyabantu bezoshaya. Bezalwa emhlabeni, emoyeni nasezulwini sehlelu."
                : lang === 'sw'
                ? "Hawa si wabunga walichukuliwa kutoka kwenye hadithi za kigeni. Walizaliwa kutoka ardhi, roho na anga la bara."
                : lang === 'ln'
                ? "Bantu oyo akukho baninga baye mpe bayikoli ya bambwa. Baye bazaliwe na nzambe, mpe likolo mpe eliki."
                : "These are not heroes borrowed from foreign myths. They are born from the soil, spirit and sky of the mother continent."}
            </p>
          </motion.div>

          {/* Characters Grid */}
          <div className="grid gap-12">
            {characters.map((character, index) => (
              <motion.div
                key={character.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid md:grid-cols-2 gap-8 items-center"
                style={{
                  flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
                }}
              >
                {/* Character Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`relative aspect-[3/4] rounded-2xl overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}
                  style={{ 
                    border: `2px solid ${character.color}`,
                    boxShadow: `0 0 40px ${character.color}40`
                  }}
                >
                  {character.image ? (
                    <>
                      <Image
                        src={character.image}
                        alt={typeof character.name === 'string' ? character.name : character.name.en}
                        fill
                        className="object-cover"
                      />
                      <div 
                        className="absolute inset-0"
                        style={{ 
                          background: `linear-gradient(180deg, transparent 0%, ${character.color}40 100%)`
                        }}
                      />
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900">
                      <div className="text-center">
                        <Crown className="w-24 h-24 mx-auto mb-4" style={{ color: character.color }} />
                        <span className="text-2xl font-bold" style={{ color: character.color }}>
                          {typeof character.name === 'string' ? character.name : t(character.name)}
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Character Info */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <span 
                      className="text-sm font-medium px-4 py-1 rounded-full"
                      style={{ backgroundColor: `${character.color}30`, color: character.color }}
                    >
                      {t(character.kingdom)}
                    </span>
                    
                    <h2 
                      className="text-4xl md:text-5xl font-bold mt-4 mb-2"
                      style={{ color: character.color }}
                    >
                      {typeof character.name === 'string' ? character.name : t(character.name)}
                    </h2>
                    
                    <h3 className="text-xl mb-6" style={{ color: 'var(--isolele-text-secondary)' }}>
                      {t(character.title)}
                    </h3>
                    
                    <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--isolele-text)' }}>
                      {t(character.description)}
                    </p>

                    {/* Powers */}
                    <div className="flex flex-wrap gap-4 mb-8">
                      {character.powers.map((power, powerIndex) => (
                        <motion.div
                          key={powerIndex}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + powerIndex * 0.1 }}
                          className="flex items-center gap-2 px-4 py-2 rounded-full"
                          style={{ 
                            backgroundColor: 'var(--isolele-bg-secondary)',
                            border: `1px solid ${character.color}50`
                          }}
                        >
                          <power.icon className="w-4 h-4" style={{ color: character.color }} />
                          <span className="text-sm" style={{ color: 'var(--isolele-text)' }}>
                            {t(power.name)}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <Link
                      href={`/characters/${character.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105"
                      style={{ 
                        backgroundColor: character.color,
                        color: '#000'
                      }}
                    >
                      {lang === 'fr' ? "VOIR LE PROFIL COMPLET" : lang === 'pt' ? "VER PERFIL COMPLETO" : lang === 'es' ? "VER PERFIL COMPLETO" : lang === 'zu' ? "BUKA ISIKHUNDLA ESIJULILE" : lang === 'xh' ? "BUKA ISIKHUNDLA ESIJULILE" : lang === 'sw' ? "TAZAMA WASIFU KAMILI" : lang === 'ln' ? "TALA LISANTU LYOYO" : "VIEW FULL PROFILE"}
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-20 text-lg italic"
            style={{ color: 'var(--isolele-text-secondary)' }}
          >
            {lang === 'fr' 
              ? "(Des centaines d'autres attendent...)"
              : lang === 'pt'
              ? "(Centenas de outros aguardam...)"
              : lang === 'es'
              ? "(Cientos de otros esperan...)"
              : lang === 'zu'
              ? "(Amakhulu amanye akulindela...)"
              : lang === 'xh'
              ? "(Amakhulu amanye akulindela...)"
              : lang === 'sw'
              ? "(Mamia mengine yanasubiri...)"
              : lang === 'ln'
              ? "(Likambi lindelela.)"
              : "(Hundreds more await...)"}
          </motion.p>
        </div>
      </main>
    </>
  )
}
  const language = currentLanguage.code; // Declare the language variable

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://isolele.com" },
        { name: "Characters", url: "https://isolele.com/characters" }
      ]} />
      
      <main className="min-h-screen py-20" style={{ backgroundColor: 'var(--isolele-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* The Chosen One Section - HRM King Kufulula */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 p-12 rounded-3xl overflow-hidden relative"
            style={{ 
              background: 'linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(179,84,30,0.1) 100%)',
              border: '2px solid rgba(212,175,55,0.3)'
            }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden"
                style={{ border: '3px solid #D4AF37' }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260202-WA0007-oizvrYvXZmN98swSFrMjDIldyIoV8Z.jpg"
                  alt="HRM King Kufulula - The Chosen One"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </motion.div>
              
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <span 
                    className="text-sm font-medium px-4 py-2 rounded-full"
                    style={{ backgroundColor: 'rgba(212,175,55,0.3)', color: '#D4AF37' }}
                  >
                    {lang === 'fr' ? 'L\'ARCHÉTICTE ROYAL' : 'ROYAL ARCHITECT'}
                  </span>
                  <h2 className="text-5xl md:text-6xl font-bold mt-6" style={{ color: '#D4AF37' }}>
                    HRM King<br />Kufulula
                  </h2>
                  <h3 className="text-2xl mt-3" style={{ color: 'var(--isolele-text-secondary)' }}>
                    {lang === 'fr' ? 'Le Fondateur Visionnaire' : 'The Visionary Founder'}
                  </h3>
                </div>
                
                <p className="text-lg leading-relaxed" style={{ color: 'var(--isolele-text)' }}>
                  {lang === 'fr'
                    ? 'Gardien du patrimoine congolais et architecte culturel, le Roi Kufulula a fondé ISOLELE pour restaurer l\'identité africaine et créer un empire mythologique où les super-héros émergent de l\'histoire authentique.'
                    : 'Custodian of Congolese heritage and cultural architect, King Kufulula founded ISOLELE to restore African identity and create a mythological empire where superheroes rise from authentic history.'}
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    href="/founder"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold transition-all hover:scale-105"
                    style={{ backgroundColor: '#D4AF37', color: '#000' }}
                  >
                    {lang === 'fr' ? 'DÉCOUVRIR' : 'DISCOVER'}
                    <span>→</span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="my-12 h-1 w-24 mx-auto rounded-full" style={{ backgroundColor: '#D4AF37' }} />

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: 'var(--isolele-accent)' }}>
              {lang === 'fr' ? "LES ELUS" : "THE CHOSEN ONES"}
            </h1>
            <p className="text-xl max-w-3xl mx-auto italic" style={{ color: 'var(--isolele-text-secondary)' }}>
              {lang === 'fr'
                ? "Ces ne sont pas des héros empruntés à des mythes étrangers. Ils sont nés du sol, de l'esprit et du ciel du continent mère."
                : "These are not heroes borrowed from foreign myths. They are born from the soil, spirit and sky of the mother continent."}
            </p>
          </motion.div>

          {/* Characters Grid */}
          <div className="grid gap-12">
            {characters.map((character, index) => (
              <motion.div
                key={character.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid md:grid-cols-2 gap-8 items-center"
                style={{
                  flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
                }}
              >
                {/* Character Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`relative aspect-[3/4] rounded-2xl overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}
                  style={{ 
                    border: `2px solid ${character.color}`,
                    boxShadow: `0 0 40px ${character.color}40`
                  }}
                >
                  {character.image ? (
                    <>
                      <Image
                        src={character.image}
                        alt={typeof character.name === 'string' ? character.name : character.name.en}
                        fill
                        className="object-cover"
                      />
                      <div 
                        className="absolute inset-0"
                        style={{ 
                          background: `linear-gradient(180deg, transparent 0%, ${character.color}40 100%)`
                        }}
                      />
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900">
                      <div className="text-center">
                        <Crown className="w-24 h-24 mx-auto mb-4" style={{ color: character.color }} />
                        <span className="text-2xl font-bold" style={{ color: character.color }}>
                          {typeof character.name === 'string' ? character.name : t(character.name)}
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Character Info */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <span 
                      className="text-sm font-medium px-4 py-1 rounded-full"
                      style={{ backgroundColor: `${character.color}30`, color: character.color }}
                    >
                      {t(character.kingdom)}
                    </span>
                    
                    <h2 
                      className="text-4xl md:text-5xl font-bold mt-4 mb-2"
                      style={{ color: character.color }}
                    >
                      {typeof character.name === 'string' ? character.name : t(character.name)}
                    </h2>
                    
                    <h3 className="text-xl mb-6" style={{ color: 'var(--isolele-text-secondary)' }}>
                      {t(character.title)}
                    </h3>
                    
                    <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--isolele-text)' }}>
                      {t(character.description)}
                    </p>

                    {/* Powers */}
                    <div className="flex flex-wrap gap-4 mb-8">
                      {character.powers.map((power, powerIndex) => (
                        <motion.div
                          key={powerIndex}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + powerIndex * 0.1 }}
                          className="flex items-center gap-2 px-4 py-2 rounded-full"
                          style={{ 
                            backgroundColor: 'var(--isolele-bg-secondary)',
                            border: `1px solid ${character.color}50`
                          }}
                        >
                          <power.icon className="w-4 h-4" style={{ color: character.color }} />
                          <span className="text-sm" style={{ color: 'var(--isolele-text)' }}>
                            {t(power.name)}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <Link
                      href={`/characters/${character.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105"
                      style={{ 
                        backgroundColor: character.color,
                        color: '#000'
                      }}
                    >
                      {lang === 'fr' ? "VOIR LE PROFIL COMPLET" : "VIEW FULL PROFILE"}
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-20 text-lg italic"
            style={{ color: 'var(--isolele-text-secondary)' }}
          >
            {lang === 'fr' 
              ? "(Des centaines d'autres attendent...)"
              : "(Hundreds more await...)"}
          </motion.p>
        </div>
      </main>
    </>
  )
}
