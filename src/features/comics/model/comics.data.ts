import type { SupportedLocale } from "@/shared/i18n/locales";
import type {
  ComicBook,
  ComicCategory,
  ComicDetailPageData,
  ComicsPageContent,
} from "./comics.types";

const HOME_PRODUCTS_STRIPE_LINK = "https://buy.stripe.com/6oU6oH8lfaP2fmD4i96Zy0e";

const comicsByLocale: Partial<Record<SupportedLocale, Record<ComicCategory, ComicBook[]>>> & {
  en: Record<ComicCategory, ComicBook[]>;
} = {
  en: {
    featured: [
      {
        id: "zaiire",
        title: "ZAIIRE",
        description: "The prince of Kongo awakens the Necklace of Destiny and restores erased royal memory.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5413e9fc-976b-4c59-97bd-5858678b1f42.jpeg",
        price: 25.99,
      },
      {
        id: "bambula",
        title: "BAMBULA",
        description: "A sacred drum hero carrying rhythm, memory, and spiritual power across worlds.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bambula%201-UAlmQoZVy1GslUfmVvqc5bdDDdEQdX.jpg",
        price: 24.99,
      },
      {
        id: "mokele",
        title: "MOKELE",
        description: "Kinshasa forges a street survivor into a ruler no empire can contain.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mokele.png-7sTyiUJYN8wJbiGll8YdVThtR4F8FT.jpeg",
        price: 26.99,
      },
    ],
    bestseller: [
      {
        id: "makanda",
        title: "MAKANDA",
        description: "A hidden empire protected by the Sacred Flame waits to rise again.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg",
        price: 23.99,
      },
      {
        id: "sacred-flame",
        title: "Inside the Sacred Flame Blueprints",
        description: "A deep dive into the spiritual science hidden in ancestral archives.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cover%20Book%202%20Isolele-QCEiRH2KJp3oFt4O31Qocqap3nLgiJ.jpg",
        price: 27.99,
      },
      {
        id: "kufulula",
        title: "King Kufulula: The Founder",
        description: "The royal origin story behind the ISOLELE narrative empire.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1173-wrVJYiZhuW6ZvCM0Xronsu544ccrqV.jpeg",
        price: 29.99,
      },
    ],
    new: [
      {
        id: "how-isolele",
        title: "How ISOLELE Reclaims African Memory",
        description: "A cultural manifesto on memory, identity, and narrative sovereignty.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chrome_screenshot_Mar%2031%2C%202026%202_16_31%20PM%20GMT%2B02_00-v3ueG61JhSCQHjK2LqR5FJbw9dJJao.png",
        price: 21.99,
      },
      {
        id: "zattar",
        title: "ZATTAR",
        description: "A denied prince decides every throne in the universe should be his.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e9c64c65-3717-4fe3-a391-885767df3303-LbjnMwCViF43pwErKmoFv7iGxQdCeQ.jpeg",
        price: 22.99,
      },
      {
        id: "zaiko",
        title: "ZAIKO",
        description: "North Kivu and Kinshasa shape the rise of a king built from survival.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1175-njlosetUOsqZszKylrOXsIRLw0l3s7.jpeg",
        price: 24.99,
      },
    ],
  },
  fr: {
    featured: [
      {
        id: "zaiire",
        title: "ZAIIRE",
        description: "Le prince du Kongo éveille le Collier du Destin et restaure une mémoire royale effacée.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5413e9fc-976b-4c59-97bd-5858678b1f42.jpeg",
        price: 25.99,
      },
      {
        id: "bambula",
        title: "BAMBULA",
        description: "Un héros du tambour sacré qui porte rythme, mémoire et puissance spirituelle.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bambula%201-UAlmQoZVy1GslUfmVvqc5bdDDdEQdX.jpg",
        price: 24.99,
      },
      {
        id: "mokele",
        title: "MOKELE",
        description: "Kinshasa forge un survivant de la rue en souverain qu'aucun empire ne peut contenir.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mokele.png-7sTyiUJYN8wJbiGll8YdVThtR4F8FT.jpeg",
        price: 26.99,
      },
    ],
    bestseller: [
      {
        id: "makanda",
        title: "MAKANDA",
        description: "Un empire caché protégé par la Flamme Sacrée attend de se relever.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg",
        price: 23.99,
      },
      {
        id: "sacred-flame",
        title: "Au cœur des plans de la Flamme Sacrée",
        description: "Une exploration de la science spirituelle cachée dans les archives ancestrales.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cover%20Book%202%20Isolele-QCEiRH2KJp3oFt4O31Qocqap3nLgiJ.jpg",
        price: 27.99,
      },
      {
        id: "kufulula",
        title: "King Kufulula : Le fondateur",
        description: "L'origine royale derrière l'empire narratif ISOLELE.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1173-wrVJYiZhuW6ZvCM0Xronsu544ccrqV.jpeg",
        price: 29.99,
      },
    ],
    new: [
      {
        id: "how-isolele",
        title: "Comment ISOLELE restaure la mémoire africaine",
        description: "Un manifeste culturel sur la mémoire, l'identité et la souveraineté narrative.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chrome_screenshot_Mar%2031%2C%202026%202_16_31%20PM%20GMT%2B02_00-v3ueG61JhSCQHjK2LqR5FJbw9dJJao.png",
        price: 21.99,
      },
      {
        id: "zattar",
        title: "ZATTAR",
        description: "Un prince refusé par le destin décide de prendre tous les trônes de l'univers.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e9c64c65-3717-4fe3-a391-885767df3303-LbjnMwCViF43pwErKmoFv7iGxQdCeQ.jpeg",
        price: 22.99,
      },
      {
        id: "zaiko",
        title: "ZAIKO",
        description: "Le Nord-Kivu et Kinshasa façonnent l'ascension d'un roi né de la survie.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1175-njlosetUOsqZszKylrOXsIRLw0l3s7.jpeg",
        price: 24.99,
      },
    ],
  },
  pt: {
    featured: [
      { id: "zaiire", title: "ZAIIRE", description: "O príncipe do Kongo desperta o Colar do Destino e restaura a memória real apagada.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5413e9fc-976b-4c59-97bd-5858678b1f42.jpeg", price: 25.99 },
      { id: "bambula", title: "BAMBULA", description: "Um herói do tambor sagrado que carrega ritmo, memória e poder espiritual através dos mundos.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bambula%201-UAlmQoZVy1GslUfmVvqc5bdDDdEQdX.jpg", price: 24.99 },
      { id: "mokele", title: "MOKELE", description: "Kinshasa forja um sobrevivente das ruas em um governante que nenhum império pode conter.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mokele.png-7sTyiUJYN8wJbiGll8YdVThtR4F8FT.jpeg", price: 26.99 },
    ],
    bestseller: [
      { id: "makanda", title: "MAKANDA", description: "Um império escondido protegido pela Chama Sagrada espera para se erguer novamente.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg", price: 23.99 },
      { id: "sacred-flame", title: "Dentro dos Planos da Chama Sagrada", description: "Um mergulho profundo na ciência espiritual escondida em arquivos ancestrais.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cover%20Book%202%20Isolele-QCEiRH2KJp3oFt4O31Qocqap3nLgiJ.jpg", price: 27.99 },
      { id: "kufulula", title: "King Kufulula: O Fundador", description: "A história de origem real por trás do império narrativo ISOLELE.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1173-wrVJYiZhuW6ZvCM0Xronsu544ccrqV.jpeg", price: 29.99 },
    ],
    new: [
      { id: "how-isolele", title: "Como a ISOLELE Resgata a Memória Africana", description: "Um manifesto cultural sobre memória, identidade e soberania narrativa.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chrome_screenshot_Mar%2031%2C%202026%202_16_31%20PM%20GMT%2B02_00-v3ueG61JhSCQHjK2LqR5FJbw9dJJao.png", price: 21.99 },
      { id: "zattar", title: "ZATTAR", description: "Um príncipe negado decide que todos os tronos do universo deveriam ser dele.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e9c64c65-3717-4fe3-a391-885767df3303-LbjnMwCViF43pwErKmoFv7iGxQdCeQ.jpeg", price: 22.99 },
      { id: "zaiko", title: "ZAIKO", description: "O Kivu do Norte e Kinshasa moldam a ascensão de um rei forjado pela sobrevivência.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1175-njlosetUOsqZszKylrOXsIRLw0l3s7.jpeg", price: 24.99 },
    ],
  },
  es: {
    featured: [
      { id: "zaiire", title: "ZAIIRE", description: "El príncipe de Kongo despierta el Collar del Destino y restaura la memoria real borrada.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5413e9fc-976b-4c59-97bd-5858678b1f42.jpeg", price: 25.99 },
      { id: "bambula", title: "BAMBULA", description: "Un héroe del tambor sagrado que lleva ritmo, memoria y poder espiritual a través de los mundos.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bambula%201-UAlmQoZVy1GslUfmVvqc5bdDDdEQdX.jpg", price: 24.99 },
      { id: "mokele", title: "MOKELE", description: "Kinshasa forja a un superviviente de la calle en un gobernante que ningún imperio puede contener.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mokele.png-7sTyiUJYN8wJbiGll8YdVThtR4F8FT.jpeg", price: 26.99 },
    ],
    bestseller: [
      { id: "makanda", title: "MAKANDA", description: "Un imperio oculto protegido por la Llama Sagrada espera para resurgir.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg", price: 23.99 },
      { id: "sacred-flame", title: "Dentro de los Planos de la Llama Sagrada", description: "Una inmersión profunda en la ciencia espiritual escondida en archivos ancestrales.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cover%20Book%202%20Isolele-QCEiRH2KJp3oFt4O31Qocqap3nLgiJ.jpg", price: 27.99 },
      { id: "kufulula", title: "King Kufulula: El Fundador", description: "La historia de origen real detrás del imperio narrativo ISOLELE.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1173-wrVJYiZhuW6ZvCM0Xronsu544ccrqV.jpeg", price: 29.99 },
    ],
    new: [
      { id: "how-isolele", title: "Cómo ISOLELE Recupera la Memoria Africana", description: "Un manifiesto cultural sobre la memoria, la identidad y la soberanía narrativa.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chrome_screenshot_Mar%2031%2C%202026%202_16_31%20PM%20GMT%2B02_00-v3ueG61JhSCQHjK2LqR5FJbw9dJJao.png", price: 21.99 },
      { id: "zattar", title: "ZATTAR", description: "Un príncipe rechazado decide que todos los tronos del universo deberían ser suyos.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e9c64c65-3717-4fe3-a391-885767df3303-LbjnMwCViF43pwErKmoFv7iGxQdCeQ.jpeg", price: 22.99 },
      { id: "zaiko", title: "ZAIKO", description: "Kivu del Norte y Kinshasa moldean el ascenso de un rey forjado por la supervivencia.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1175-njlosetUOsqZszKylrOXsIRLw0l3s7.jpeg", price: 24.99 },
    ],
  },
  zu: {
    featured: [
      { id: "zaiire", title: "ZAIIRE", description: "Inkosana yaseKongo ivusa Umgexo Wesiphetho futhi ibuyisela inkumbulo yasebukhosini eyayisusiwe.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5413e9fc-976b-4c59-97bd-5858678b1f42.jpeg", price: 25.99 },
      { id: "bambula", title: "BAMBULA", description: "Iqhawe lesigubhu esingcwele eliphethe umculo, inkumbulo, kanye namandla omoya emhlabeni wonke.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bambula%201-UAlmQoZVy1GslUfmVvqc5bdDDdEQdX.jpg", price: 24.99 },
      { id: "mokele", title: "MOKELE", description: "IKinshasa yenza osindile emgwaqweni abe umbusi ongenakuvinjelwa umbuso.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mokele.png-7sTyiUJYN8wJbiGll8YdVThtR4F8FT.jpeg", price: 26.99 },
    ],
    bestseller: [
      { id: "makanda", title: "MAKANDA", description: "Umbuso ofihliwe ovikelwa uMlilo oNgcwele ulindele ukuvuka futhi.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg", price: 23.99 },
      { id: "sacred-flame", title: "Ngaphakathi Kwezinhlelo Zomlilo oNgcwele", description: "Ukugxila okujulile kwisayensi yomoya efihliwe emibhalweni yasendulo.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cover%20Book%202%20Isolele-QCEiRH2KJp3oFt4O31Qocqap3nLgiJ.jpg", price: 27.99 },
      { id: "kufulula", title: "King Kufulula: Umsunguli", description: "Indaba yobukhosi yokuqala ngemuva kombuso wendaba we-ISOLELE.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1173-wrVJYiZhuW6ZvCM0Xronsu544ccrqV.jpeg", price: 29.99 },
    ],
    new: [
      { id: "how-isolele", title: "Indlela I-ISOLELE Ebuyisa Ngayo Inkumbulo Yase-Afrika", description: "Isimemezelo samasiko mayelana nenkumbulo, ubunikazi kanye nobukhosi bendaba.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chrome_screenshot_Mar%2031%2C%202026%202_16_31%20PM%20GMT%2B02_00-v3ueG61JhSCQHjK2LqR5FJbw9dJJao.png", price: 21.99 },
      { id: "zattar", title: "ZATTAR", description: "Inkosana enqatshelwe inquma ukuthi zonke izihlalo zobukhosi emhlabeni kufanele zibe ezakhe.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e9c64c65-3717-4fe3-a391-885767df3303-LbjnMwCViF43pwErKmoFv7iGxQdCeQ.jpeg", price: 22.99 },
      { id: "zaiko", title: "ZAIKO", description: "ENyakatho Kivu neKinshasa kwakha ukukhuphuka kwenkosi eyakhiwe ukusinda.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1175-njlosetUOsqZszKylrOXsIRLw0l3s7.jpeg", price: 24.99 },
    ],
  },
  xh: {
    featured: [
      { id: "zaiire", title: "ZAIIRE", description: "Inkosana yaseKongo ivusa iQhosha leSiphelo kwaye ibuyisela inkumbulo yobukumkani eyayicinyiwe.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5413e9fc-976b-4c59-97bd-5858678b1f42.jpeg", price: 25.99 },
      { id: "bambula", title: "BAMBULA", description: "Iqhawe legubu elingcwele eliphethe umculo, inkumbulo, kunye namandla omoya kumazwe onke.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bambula%201-UAlmQoZVy1GslUfmVvqc5bdDDdEQdX.jpg", price: 24.99 },
      { id: "mokele", title: "MOKELE", description: "IKinshasa yenza umntu osindileyo esitratweni abe ngumlawuli ongenakuvalelwa nabuphi na ubukhosi.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mokele.png-7sTyiUJYN8wJbiGll8YdVThtR4F8FT.jpeg", price: 26.99 },
    ],
    bestseller: [
      { id: "makanda", title: "MAKANDA", description: "Ubukumkani obufihliweyo obukhuselwe nguMlilo oNgcwele bulindele ukuvuka kwakhona.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg", price: 23.99 },
      { id: "sacred-flame", title: "Ngaphakathi kweZicwangciso zoMlilo oNgcwele", description: "Ukungena nzulu kwisayensi yomoya efihlwe kwiirekhodi zamandulo.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cover%20Book%202%20Isolele-QCEiRH2KJp3oFt4O31Qocqap3nLgiJ.jpg", price: 27.99 },
      { id: "kufulula", title: "King Kufulula: Umseki", description: "Ibali lemvelaphi yasebukhosini ngasemva kobukumkani beentsomi be-ISOLELE.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1173-wrVJYiZhuW6ZvCM0Xronsu544ccrqV.jpeg", price: 29.99 },
    ],
    new: [
      { id: "how-isolele", title: "Indlela i-ISOLELE Ebuyisela Ngayo Inkumbulo yase-Afrika", description: "Isimemezelo senkcubeko malunga nenkumbulo, ubuni, kunye nobukhosi bebali.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chrome_screenshot_Mar%2031%2C%202026%202_16_31%20PM%20GMT%2B02_00-v3ueG61JhSCQHjK2LqR5FJbw9dJJao.png", price: 21.99 },
      { id: "zattar", title: "ZATTAR", description: "Inkosana ekhatywayo igqiba kwelokuba zonke izihlalo zobukumkani ehlabathini mazibe ngezakhe.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e9c64c65-3717-4fe3-a391-885767df3303-LbjnMwCViF43pwErKmoFv7iGxQdCeQ.jpeg", price: 22.99 },
      { id: "zaiko", title: "ZAIKO", description: "IKivu yaseMntla neKinshasa zibumba ukunyuka kwekumkani eyakhiwe kukusinda.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1175-njlosetUOsqZszKylrOXsIRLw0l3s7.jpeg", price: 24.99 },
    ],
  },
  sw: {
    featured: [
      { id: "zaiire", title: "ZAIIRE", description: "Mkuu wa Kongo anaamsha Mkufu wa Hatima na kurejesha kumbukumbu ya kifalme iliyofutwa.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5413e9fc-976b-4c59-97bd-5858678b1f42.jpeg", price: 25.99 },
      { id: "bambula", title: "BAMBULA", description: "Shujaa wa ngoma takatifu anayebeba mdundo, kumbukumbu, na nguvu za kiroho ulimwenguni kote.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bambula%201-UAlmQoZVy1GslUfmVvqc5bdDDdEQdX.jpg", price: 24.99 },
      { id: "mokele", title: "MOKELE", description: "Kinshasa inamgeuza mwokokaji wa mtaani kuwa mtawala ambaye hakuna dola linaloweza kumzuia.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mokele.png-7sTyiUJYN8wJbiGll8YdVThtR4F8FT.jpeg", price: 26.99 },
    ],
    bestseller: [
      { id: "makanda", title: "MAKANDA", description: "Dola lililofichwa linalolindwa na Moto Mtakatifu linasubiri kuinuka tena.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg", price: 23.99 },
      { id: "sacred-flame", title: "Ndani ya Michoro ya Moto Mtakatifu", description: "Uchunguzi wa kina wa sayansi ya kiroho iliyofichwa katika kumbukumbu za kale.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cover%20Book%202%20Isolele-QCEiRH2KJp3oFt4O31Qocqap3nLgiJ.jpg", price: 27.99 },
      { id: "kufulula", title: "King Kufulula: Mwanzilishi", description: "Hadithi ya asili ya kifalme nyuma ya dola la hadithi la ISOLELE.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1173-wrVJYiZhuW6ZvCM0Xronsu544ccrqV.jpeg", price: 29.99 },
    ],
    new: [
      { id: "how-isolele", title: "Jinsi ISOLELE Inavyorejesha Kumbukumbu ya Kiafrika", description: "Tamko la kiutamaduni kuhusu kumbukumbu, utambulisho, na enzi ya hadithi.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chrome_screenshot_Mar%2031%2C%202026%202_16_31%20PM%20GMT%2B02_00-v3ueG61JhSCQHjK2LqR5FJbw9dJJao.png", price: 21.99 },
      { id: "zattar", title: "ZATTAR", description: "Mkuu aliyekataliwa anaamua kuwa viti vyote vya enzi ulimwenguni vinapaswa kuwa vyake.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e9c64c65-3717-4fe3-a391-885767df3303-LbjnMwCViF43pwErKmoFv7iGxQdCeQ.jpeg", price: 22.99 },
      { id: "zaiko", title: "ZAIKO", description: "Kivu ya Kaskazini na Kinshasa zinaunda kuinuka kwa mfalme aliyeundwa na mapambano ya kuishi.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1175-njlosetUOsqZszKylrOXsIRLw0l3s7.jpeg", price: 24.99 },
    ],
  },
  ln: {
    featured: [
      { id: "zaiire", title: "ZAIIRE", description: "Mwana-mokonzi ya Kongo alamwisi Mondele ya Destin mpe azongisi bosikoli ya bokonzi oyo esilaki.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5413e9fc-976b-4c59-97bd-5858678b1f42.jpeg", price: 25.99 },
      { id: "bambula", title: "BAMBULA", description: "Elombe ya ngoma ya bule oyo amemi ngoma, bosikoli, mpe nguya ya molimo na mokili mobimba.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bambula%201-UAlmQoZVy1GslUfmVvqc5bdDDdEQdX.jpg", price: 24.99 },
      { id: "mokele", title: "MOKELE", description: "Kinshasa ekomisi moto oyo abikaki na balabala mokonzi oyo ata bokonzi moko te ekoki kokanga.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mokele.png-7sTyiUJYN8wJbiGll8YdVThtR4F8FT.jpeg", price: 26.99 },
    ],
    bestseller: [
      { id: "makanda", title: "MAKANDA", description: "Bokonzi ya kobombama oyo ebatelami na Moto ya Bule ezali kozela kotelema lisusu.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg", price: 23.99 },
      { id: "sacred-flame", title: "Na kati ya ba Plans ya Moto ya Bule", description: "Bolukiluki ya mozindo na siansi ya molimo oyo ebombami na ba archives ya bankoko.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cover%20Book%202%20Isolele-QCEiRH2KJp3oFt4O31Qocqap3nLgiJ.jpg", price: 27.99 },
      { id: "kufulula", title: "King Kufulula: Mobandisi", description: "Lisolo ya ebandeli ya bokonzi na sima ya bokonzi ya masolo ya ISOLELE.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1173-wrVJYiZhuW6ZvCM0Xronsu544ccrqV.jpeg", price: 29.99 },
    ],
    new: [
      { id: "how-isolele", title: "Ndenge ISOLELE Ezongisaka Bosikoli ya Afrika", description: "Manifeste ya mimeseno na ntina ya bosikoli, bomoto, mpe bonkolo ya lisolo.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chrome_screenshot_Mar%2031%2C%202026%202_16_31%20PM%20GMT%2B02_00-v3ueG61JhSCQHjK2LqR5FJbw9dJJao.png", price: 21.99 },
      { id: "zattar", title: "ZATTAR", description: "Mwana-mokonzi oyo baboyaki azwi mokano ete kiti nyonso ya bokonzi na mokili esengeli ezala ya ye.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e9c64c65-3717-4fe3-a391-885767df3303-LbjnMwCViF43pwErKmoFv7iGxQdCeQ.jpeg", price: 22.99 },
      { id: "zaiko", title: "ZAIKO", description: "Kivu ya Nord na Kinshasa ebongisi komata ya mokonzi moko oyo etongami na kobika.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1175-njlosetUOsqZszKylrOXsIRLw0l3s7.jpeg", price: 24.99 },
    ],
  },
};

const comicsPageContent: Partial<Record<SupportedLocale, Omit<ComicsPageContent, "locale">>> & {
  en: Omit<ComicsPageContent, "locale">;
} = {
  fr: {
    hero: {
      title: "ISOLELE Comics",
      description: "Découvrez des récits premium, des héros souverains et des aventures ancrées dans la mémoire africaine.",
    },
    sections: [
      { id: "featured", title: "Collections vedettes", ctaLabel: "Voir tout", ctaHref: "/books", books: comicsByLocale.fr.featured },
      { id: "bestseller", title: "Meilleures ventes", ctaLabel: "Voir tout", ctaHref: "/books", books: comicsByLocale.fr.bestseller },
      { id: "new", title: "Nouvelles sorties", ctaLabel: "Voir tout", ctaHref: "/books", books: comicsByLocale.fr.new },
    ],
    footer: {
      description: "Des histoires puissantes pour célébrer l'héritage africain à travers des icônes, des royaumes et des destins.",
      primaryCtaLabel: "Retour à l'accueil",
      primaryCtaHref: "/",
      secondaryCtaLabel: "Explorer le jeu Kufu",
      secondaryCtaHref: "/kufu-game",
    },
    ui: {
      readLabel: "Lire",
      scrollLeftLabel: "Défiler vers la gauche",
      scrollRightLabel: "Défiler vers la droite",
    },
  },
  en: {
    hero: {
      title: "ISOLELE Comics",
      description: "Explore premium stories, sovereign heroes, and adventures rooted in African memory.",
    },
    sections: [
      { id: "featured", title: "Featured collections", ctaLabel: "See all", ctaHref: "/books", books: comicsByLocale.en.featured },
      { id: "bestseller", title: "Best sellers", ctaLabel: "See all", ctaHref: "/books", books: comicsByLocale.en.bestseller },
      { id: "new", title: "New releases", ctaLabel: "See all", ctaHref: "/books", books: comicsByLocale.en.new },
    ],
    footer: {
      description: "Powerful stories celebrating African heritage through icons, kingdoms, and destiny.",
      primaryCtaLabel: "Back to home",
      primaryCtaHref: "/",
      secondaryCtaLabel: "Explore Kufu Game",
      secondaryCtaHref: "/kufu-game",
    },
    ui: {
      readLabel: "Read",
      scrollLeftLabel: "Scroll left",
      scrollRightLabel: "Scroll right",
    },
  },
  pt: {
    hero: { title: "ISOLELE Comics", description: "Explore histórias premium, heróis soberanos e aventuras enraizadas na memória africana." },
    sections: [
      { id: "featured", title: "Coleções em destaque", ctaLabel: "Ver tudo", ctaHref: "/books", books: comicsByLocale.pt.featured },
      { id: "bestseller", title: "Mais vendidos", ctaLabel: "Ver tudo", ctaHref: "/books", books: comicsByLocale.pt.bestseller },
      { id: "new", title: "Novos lançamentos", ctaLabel: "Ver tudo", ctaHref: "/books", books: comicsByLocale.pt.new },
    ],
    footer: {
      description: "Histórias poderosas que celebram a herança africana através de ícones, reinos e destino.",
      primaryCtaLabel: "Voltar ao início",
      primaryCtaHref: "/",
      secondaryCtaLabel: "Explorar o jogo Kufu",
      secondaryCtaHref: "/kufu-game",
    },
    ui: { readLabel: "Ler", scrollLeftLabel: "Deslizar para a esquerda", scrollRightLabel: "Deslizar para a direita" },
  },
  es: {
    hero: { title: "ISOLELE Comics", description: "Explora historias premium, héroes soberanos y aventuras arraigadas en la memoria africana." },
    sections: [
      { id: "featured", title: "Colecciones destacadas", ctaLabel: "Ver todo", ctaHref: "/books", books: comicsByLocale.es.featured },
      { id: "bestseller", title: "Más vendidos", ctaLabel: "Ver todo", ctaHref: "/books", books: comicsByLocale.es.bestseller },
      { id: "new", title: "Nuevos lanzamientos", ctaLabel: "Ver todo", ctaHref: "/books", books: comicsByLocale.es.new },
    ],
    footer: {
      description: "Historias poderosas que celebran la herencia africana a través de íconos, reinos y destino.",
      primaryCtaLabel: "Volver al inicio",
      primaryCtaHref: "/",
      secondaryCtaLabel: "Explorar el juego Kufu",
      secondaryCtaHref: "/kufu-game",
    },
    ui: { readLabel: "Leer", scrollLeftLabel: "Desplazar a la izquierda", scrollRightLabel: "Desplazar a la derecha" },
  },
  zu: {
    hero: { title: "ISOLELE Comics", description: "Hlola izindaba eziphambili, amaqhawe abusayo, kanye nezinto ezenzeka ezigxile enkumbulweni yase-Afrika." },
    sections: [
      { id: "featured", title: "Iqoqo eliqavile", ctaLabel: "Bona konke", ctaHref: "/books", books: comicsByLocale.zu.featured },
      { id: "bestseller", title: "Okuthengiswa kakhulu", ctaLabel: "Bona konke", ctaHref: "/books", books: comicsByLocale.zu.bestseller },
      { id: "new", title: "Okusha okukhishiwe", ctaLabel: "Bona konke", ctaHref: "/books", books: comicsByLocale.zu.new },
    ],
    footer: {
      description: "Izindaba ezinamandla ezigubha ifa lase-Afrika ngezithombe, imibuso, kanye nesiphetho.",
      primaryCtaLabel: "Buyela ekhaya",
      primaryCtaHref: "/",
      secondaryCtaLabel: "Hlola Umdlalo iKufu",
      secondaryCtaHref: "/kufu-game",
    },
    ui: { readLabel: "Funda", scrollLeftLabel: "Sheshisa kwesobunxele", scrollRightLabel: "Sheshisa kwesokudla" },
  },
  xh: {
    hero: { title: "ISOLELE Comics", description: "Hlola amabali aphezulu, amaqhawe alawulayo, kunye nezinto ezenzekayo ezingcamele kwinkumbulo yase-Afrika." },
    sections: [
      { id: "featured", title: "Iindibaniselwano ezibalaseleyo", ctaLabel: "Bona zonke", ctaHref: "/books", books: comicsByLocale.xh.featured },
      { id: "bestseller", title: "Ezona zithengiswa kakhulu", ctaLabel: "Bona zonke", ctaHref: "/books", books: comicsByLocale.xh.bestseller },
      { id: "new", title: "Ezikhutshwe kutsha", ctaLabel: "Bona zonke", ctaHref: "/books", books: comicsByLocale.xh.new },
    ],
    footer: {
      description: "Amabali anamandla abhiyozela ilifa lase-Afrika ngemifanekiso, oobukumkani, kunye nesiphelo.",
      primaryCtaLabel: "Buyela ekhaya",
      primaryCtaHref: "/",
      secondaryCtaLabel: "Hlola uMdlalo we-Kufu",
      secondaryCtaHref: "/kufu-game",
    },
    ui: { readLabel: "Funda", scrollLeftLabel: "Tyibilika ngasekhohlo", scrollRightLabel: "Tyibilika ngasekunene" },
  },
  sw: {
    hero: { title: "ISOLELE Comics", description: "Gundua hadithi bora, mashujaa watawala, na matukio yaliyojikita katika kumbukumbu ya Kiafrika." },
    sections: [
      { id: "featured", title: "Mikusanyiko maalum", ctaLabel: "Ona vyote", ctaHref: "/books", books: comicsByLocale.sw.featured },
      { id: "bestseller", title: "Vinavyouzwa zaidi", ctaLabel: "Ona vyote", ctaHref: "/books", books: comicsByLocale.sw.bestseller },
      { id: "new", title: "Matoleo mapya", ctaLabel: "Ona vyote", ctaHref: "/books", books: comicsByLocale.sw.new },
    ],
    footer: {
      description: "Hadithi zenye nguvu zinazosherehekea urithi wa Kiafrika kupitia alama, falme, na hatima.",
      primaryCtaLabel: "Rudi nyumbani",
      primaryCtaHref: "/",
      secondaryCtaLabel: "Gundua Mchezo wa Kufu",
      secondaryCtaHref: "/kufu-game",
    },
    ui: { readLabel: "Soma", scrollLeftLabel: "Sogeza kushoto", scrollRightLabel: "Sogeza kulia" },
  },
  ln: {
    hero: { title: "ISOLELE Comics", description: "Luká masolo ya monene, ba héros ya bokonzi, mpe misala oyo ezali na botindi na bosikoli ya Afrika." },
    sections: [
      { id: "featured", title: "Mabongisi ya minene", ctaLabel: "Talá nyonso", ctaHref: "/books", books: comicsByLocale.ln.featured },
      { id: "bestseller", title: "Bikelelami mingi", ctaLabel: "Talá nyonso", ctaHref: "/books", books: comicsByLocale.ln.bestseller },
      { id: "new", title: "Ebimeli ya sika", ctaLabel: "Talá nyonso", ctaHref: "/books", books: comicsByLocale.ln.new },
    ],
    footer: {
      description: "Masolo ya makasi oyo ezali kosepela na libula ya Afrika na nzela ya bilembo, mikili, mpe destin.",
      primaryCtaLabel: "Zonga na ndako",
      primaryCtaHref: "/",
      secondaryCtaLabel: "Luká Lisano ya Kufu",
      secondaryCtaHref: "/kufu-game",
    },
    ui: { readLabel: "Tanga", scrollLeftLabel: "Kende na loboko ya mwasi", scrollRightLabel: "Kende na loboko ya mobali" },
  },
};

const zaiireDetailByLocale: Partial<Record<SupportedLocale, ComicDetailPageData>> & { en: ComicDetailPageData } = {
  en: {
    slug: "zaiire",
    title: "ZAIIRE",
    eyebrow: "The Prince of Kongo",
    subtitle: "The Necklace of Destiny",
    description:
      "A royal odyssey where memory, thunder, and destiny collide. Zaiire inherits more than a kingdom when the Necklace of Destiny awakens.",
    heroImage: "/Fichier%202@0.5x.png",
    heroBackground: "/HERO.webp",
    heroImageAlt: "Zaiire Prince of Kongo cover art",
    price: 36.99,
    purchaseHref: HOME_PRODUCTS_STRIPE_LINK,
    characters: [
      {
        name: "Zaiire",
        role: "Chosen prince",
        description: "Son of Shango and Kimoya, he carries royal blood, divine force, and the burden of restoring erased memory.",
        image: "/characters/zaiire-kongo-throne.jpg",
      },
      {
        name: "Kimoya",
        role: "Warrior queen",
        description: "A sovereign mother whose strength, sacrifice, and royal lineage set Zaiire's destiny in motion.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260308-WA0013-6Xt165l5rPK1nNYEUoAqZBFN42ioH4.jpg",
      }
    ],
    synopsisTitle: "Synopsis",
    synopsis: [
      "Raised between privilege and silence, Zaiire thinks he understands the world that made him. Everything changes when he reunites with his mother in Kinshasa and receives the Necklace of Destiny.",
      "The relic does not simply reveal power. It reveals history, bloodlines, and a war against memory itself. What begins as a search for family becomes a larger fight for the soul of the Kongo kingdom.",
      "As thunder, prophecy, and royal memory awaken inside him, Zaiire must decide whether he will remain a prince or become the chosen force his ancestors have waited for.",
    ],
    galleryTitle: "Selected Pages",
    gallery: [
      { image: "/images/zaiire-cast-ensemble.webp", alt: "Zaiire cast ensemble" },
      { image: "/images/necklace-transformation.webp", alt: "The Necklace of Destiny transformation" },
      { image: "/images/royal-bloodlines.webp", alt: "Royal bloodlines visual" },
      { image: "/images/body-transformation.webp", alt: "Zaiire power awakening" },
    ],
    authorTitle: "Author",
    authorName: "HRM King Kufulula",
    authorDescription:
      "Traditional king, cultural architect, and founder of ISOLELE. He builds stories that restore African memory through royalty, mythology, and sovereign imagination.",
    authorImage: "/king-kufulula.jpg",
    backLabel: "Back to all comics",
    comingSoon: false,
  },
  fr: {
    slug: "zaiire",
    title: "ZAIIRE",
    eyebrow: "Le Prince du Kongo",
    subtitle: "Le Collier du Destin",
    description:
      "Une odyssée royale où mémoire, tonnerre et destin se rencontrent. Zaiire n'hérite pas seulement d'un royaume quand le Collier du Destin s'éveille.",
    heroImage: "/Fichier%202@0.5x.png",
    heroBackground: "/HERO.webp",
    heroImageAlt: "Couverture Zaiire Prince du Kongo",
    price: 36.99,
    purchaseHref: HOME_PRODUCTS_STRIPE_LINK,
    characters: [
      {
        name: "Zaiire",
        role: "Prince élu",
        description: "Fils de Shango et de Kimoya, il porte un sang royal, une force divine et la mission de restaurer une mémoire effacée.",
        image: "/characters/zaiire-kongo-throne.jpg",
      },
      {
        name: "Kimoya",
        role: "Reine guerrière",
        description: "Mère souveraine dont la force, le sacrifice et la lignée royale mettent en marche le destin de Zaiire.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260308-WA0013-6Xt165l5rPK1nNYEUoAqZBFN42ioH4.jpg",
      },
    ],
    synopsisTitle: "Synopsis",
    synopsis: [
      "Élevé entre privilège et silences, Zaiire croit comprendre le monde qui l'a formé. Tout change lorsqu'il retrouve sa mère à Kinshasa et reçoit le Collier du Destin.",
      "La relique ne révèle pas seulement une puissance. Elle révèle une histoire, des lignées et une guerre menée contre la mémoire elle-même. La quête familiale devient alors un combat pour l'âme du royaume Kongo.",
      "Alors que le tonnerre, la prophétie et la mémoire royale s'éveillent en lui, Zaiire doit choisir s'il restera un prince ou deviendra la force attendue par ses ancêtres.",
    ],
    galleryTitle: "Quelques planches",
    gallery: [
      { image: "/images/zaiire-cast-ensemble.webp", alt: "Ensemble des personnages de Zaiire" },
      { image: "/images/necklace-transformation.webp", alt: "Transformation du Collier du Destin" },
      { image: "/images/royal-bloodlines.webp", alt: "Lignées royales du Kongo" },
      { image: "/images/body-transformation.webp", alt: "Éveil du pouvoir de Zaiire" },
    ],
    authorTitle: "Auteur",
    authorName: "HRM King Kufulula",
    authorDescription:
      "Roi traditionnel, architecte culturel et fondateur d'ISOLELE. Il construit des histoires qui restaurent la mémoire africaine à travers la royauté, la mythologie et l'imaginaire souverain.",
    authorImage: "/king-kufulula.jpg",
    backLabel: "Retour aux comics",
    comingSoon: false,
  },
  pt: {
    slug: "zaiire",
    title: "ZAIIRE",
    eyebrow: "O Príncipe do Kongo",
    subtitle: "O Colar do Destino",
    description:
      "Uma odisseia real onde memória, trovão e destino colidem. Zaiire herda mais do que um reino quando o Colar do Destino desperta.",
    heroImage: "/Fichier%202@0.5x.png",
    heroBackground: "/HERO.webp",
    heroImageAlt: "Capa de Zaiire, Príncipe do Kongo",
    price: 36.99,
    purchaseHref: HOME_PRODUCTS_STRIPE_LINK,
    characters: [
      {
        name: "Zaiire",
        role: "Príncipe escolhido",
        description: "Filho de Shango e Kimoya, ele carrega sangue real, força divina e o fardo de restaurar a memória apagada.",
        image: "/characters/zaiire-kongo-throne.jpg",
      },
      {
        name: "Kimoya",
        role: "Rainha guerreira",
        description: "Uma mãe soberana cuja força, sacrifício e linhagem real põem em movimento o destino de Zaiire.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260308-WA0013-6Xt165l5rPK1nNYEUoAqZBFN42ioH4.jpg",
      },
    ],
    synopsisTitle: "Sinopse",
    synopsis: [
      "Criado entre privilégio e silêncio, Zaiire acredita entender o mundo que o formou. Tudo muda quando ele reencontra sua mãe em Kinshasa e recebe o Colar do Destino.",
      "A relíquia não revela apenas poder. Ela revela história, linhagens e uma guerra contra a própria memória. O que começa como uma busca pela família se torna uma luta maior pela alma do reino do Kongo.",
      "Enquanto o trovão, a profecia e a memória real despertam dentro dele, Zaiire deve decidir se permanecerá um príncipe ou se tornará a força escolhida que seus ancestrais esperavam.",
    ],
    galleryTitle: "Páginas Selecionadas",
    gallery: [
      { image: "/images/zaiire-cast-ensemble.webp", alt: "Elenco de Zaiire" },
      { image: "/images/necklace-transformation.webp", alt: "Transformação do Colar do Destino" },
      { image: "/images/royal-bloodlines.webp", alt: "Linhagens reais" },
      { image: "/images/body-transformation.webp", alt: "Despertar do poder de Zaiire" },
    ],
    authorTitle: "Autor",
    authorName: "HRM King Kufulula",
    authorDescription:
      "Rei tradicional, arquiteto cultural e fundador da ISOLELE. Ele constrói histórias que restauram a memória africana através da realeza, mitologia e imaginação soberana.",
    authorImage: "/king-kufulula.jpg",
    backLabel: "Voltar a todos os comics",
    comingSoon: false,
  },
  es: {
    slug: "zaiire",
    title: "ZAIIRE",
    eyebrow: "El Príncipe de Kongo",
    subtitle: "El Collar del Destino",
    description:
      "Una odisea real donde la memoria, el trueno y el destino colisionan. Zaiire hereda más que un reino cuando el Collar del Destino despierta.",
    heroImage: "/Fichier%202@0.5x.png",
    heroBackground: "/HERO.webp",
    heroImageAlt: "Portada de Zaiire, Príncipe de Kongo",
    price: 36.99,
    purchaseHref: HOME_PRODUCTS_STRIPE_LINK,
    characters: [
      {
        name: "Zaiire",
        role: "Príncipe elegido",
        description: "Hijo de Shango y Kimoya, lleva sangre real, fuerza divina y la carga de restaurar la memoria borrada.",
        image: "/characters/zaiire-kongo-throne.jpg",
      },
      {
        name: "Kimoya",
        role: "Reina guerrera",
        description: "Una madre soberana cuya fuerza, sacrificio y linaje real ponen en marcha el destino de Zaiire.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260308-WA0013-6Xt165l5rPK1nNYEUoAqZBFN42ioH4.jpg",
      },
    ],
    synopsisTitle: "Sinopsis",
    synopsis: [
      "Criado entre el privilegio y el silencio, Zaiire cree entender el mundo que lo formó. Todo cambia cuando se reencuentra con su madre en Kinshasa y recibe el Collar del Destino.",
      "La reliquia no solo revela poder. Revela historia, linajes y una guerra contra la memoria misma. Lo que comienza como una búsqueda familiar se convierte en una lucha mayor por el alma del reino de Kongo.",
      "Mientras el trueno, la profecía y la memoria real despiertan en él, Zaiire debe decidir si seguirá siendo un príncipe o se convertirá en la fuerza elegida que sus ancestros esperaban.",
    ],
    galleryTitle: "Páginas Seleccionadas",
    gallery: [
      { image: "/images/zaiire-cast-ensemble.webp", alt: "Elenco de Zaiire" },
      { image: "/images/necklace-transformation.webp", alt: "Transformación del Collar del Destino" },
      { image: "/images/royal-bloodlines.webp", alt: "Linajes reales" },
      { image: "/images/body-transformation.webp", alt: "Despertar del poder de Zaiire" },
    ],
    authorTitle: "Autor",
    authorName: "HRM King Kufulula",
    authorDescription:
      "Rey tradicional, arquitecto cultural y fundador de ISOLELE. Construye historias que restauran la memoria africana a través de la realeza, la mitología y la imaginación soberana.",
    authorImage: "/king-kufulula.jpg",
    backLabel: "Volver a todos los comics",
    comingSoon: false,
  },
  zu: {
    slug: "zaiire",
    title: "ZAIIRE",
    eyebrow: "Inkosana yaseKongo",
    subtitle: "Umgexo Wesiphetho",
    description:
      "Uhambo lobukhosi lapho inkumbulo, unyazi, kanye nesiphetho kuhlangana khona. UZaiire uzuza okungaphezu kombuso lapho Umgexo Wesiphetho uvuka.",
    heroImage: "/Fichier%202@0.5x.png",
    heroBackground: "/HERO.webp",
    heroImageAlt: "Isithombe sangaphambili sikaZaiire, Inkosana yaseKongo",
    price: 36.99,
    purchaseHref: HOME_PRODUCTS_STRIPE_LINK,
    characters: [
      {
        name: "Zaiire",
        role: "Inkosana ekhethiwe",
        description: "Indodana kaShango noKimoya, uphethe igazi lobukhosi, amandla obuNkulunkulu, kanye nomthwalo wokubuyisela inkumbulo esusiwe.",
        image: "/characters/zaiire-kongo-throne.jpg",
      },
      {
        name: "Kimoya",
        role: "Indlovukazi elwayo",
        description: "Umama obusayo onamandla akhe, umhlatshelo, kanye nolibo lobukhosi okuqalisa isiphetho sikaZaiire.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260308-WA0013-6Xt165l5rPK1nNYEUoAqZBFN42ioH4.jpg",
      },
    ],
    synopsisTitle: "Isifinyezo",
    synopsis: [
      "Ekhuliswe phakathi kwelungelo nokuthula, uZaiire ucabanga ukuthi uyawuqonda umhlaba omenza. Konke kuyashintsha lapho ehlangana nomama wakhe eKinshasa futhi ethola Umgexo Wesiphetho.",
      "Le nsalela ayikhombisi amandla kuphela. Ikhombisa umlando, ulibo, kanye nempi emelene nenkumbulo uqobo. Okuqala njengoseshi lomndeni kuphenduka impi enkulu yomphefumulo wombuso waseKongo.",
      "Njengoba unyazi, isiprofetho, kanye nenkumbulo yasebukhosini kuvuka ngaphakathi kwakhe, uZaiire kufanele akhethe ukuthi uzohlala eyinkosana noma abe amandla akhethiwe okhokho bakhe abelokhu belindile.",
    ],
    galleryTitle: "Amakhasi Akhethiwe",
    gallery: [
      { image: "/images/zaiire-cast-ensemble.webp", alt: "Iqembu likaZaiire" },
      { image: "/images/necklace-transformation.webp", alt: "Ukuguqulwa kukaMgexo Wesiphetho" },
      { image: "/images/royal-bloodlines.webp", alt: "Ulibo lobukhosi" },
      { image: "/images/body-transformation.webp", alt: "Ukuvuka kwamandla kaZaiire" },
    ],
    authorTitle: "Umbhali",
    authorName: "HRM King Kufulula",
    authorDescription:
      "Inkosi yendabuko, umakhi wamasiko, kanye nomsunguli we-ISOLELE. Wakha izindaba ezibuyisela inkumbulo yase-Afrika ngobukhosi, izinganekwane, kanye nomcabango obusayo.",
    authorImage: "/king-kufulula.jpg",
    backLabel: "Buyela kuwo wonke ama-comics",
    comingSoon: false,
  },
  xh: {
    slug: "zaiire",
    title: "ZAIIRE",
    eyebrow: "Inkosana yaseKongo",
    subtitle: "IQhosha leSiphelo",
    description:
      "Uhambo lobukhosi apho inkumbulo, ingqondo, kunye nesiphelo kudibana khona. UZaiire uzuza ngaphezu kobukumkani xa iQhosha leSiphelo livuka.",
    heroImage: "/Fichier%202@0.5x.png",
    heroBackground: "/HERO.webp",
    heroImageAlt: "Umfanekiso wangaphambili kaZaiire, Inkosana yaseKongo",
    price: 36.99,
    purchaseHref: HOME_PRODUCTS_STRIPE_LINK,
    characters: [
      {
        name: "Zaiire",
        role: "Inkosana ekhethiweyo",
        description: "Unyana kaShango noKimoya, uthwele igazi lasebukhosini, amandla obuthixo, kunye nomthwalo wokubuyisela inkumbulo eyayicinyiwe.",
        image: "/characters/zaiire-kongo-throne.jpg",
      },
      {
        name: "Kimoya",
        role: "Ukumkanikazi elwayo",
        description: "Umama olawulayo onamandla akhe, idini, kunye nolwelo lobukhosi olubangela isiphelo sikaZaiire.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260308-WA0013-6Xt165l5rPK1nNYEUoAqZBFN42ioH4.jpg",
      },
    ],
    synopsisTitle: "Isishwankathelo",
    synopsis: [
      "Ekhuliswe phakathi kwelungelo nokuthula, uZaiire ucinga ukuba uyawuqonda umhlaba omenzileyo. Yonke into iyatshintsha xa edibana nomama wakhe eKinshasa aze afumane iQhosha leSiphelo.",
      "Esi sixhobo asikhombisi amandla kuphela. Sikhombisa imbali, uhlobo, kunye nemfazwe echasene nenkumbulo ngokwayo. Oko kuqala njengophando losapho kuguqukela kwimfazwe enkulu yomphefumlo wobukumkani baseKongo.",
      "Njengoko induli, isiprofeto, kunye nenkumbulo yasebukhosini kuvuka ngaphakathi kwakhe, uZaiire kufuneka akhethe ukuba uya kuhlala eyinkosana okanye abe ngamandla akhethiweyo awokhokho bakhe bebelinde.",
    ],
    galleryTitle: "Amaphepha Akhethiweyo",
    gallery: [
      { image: "/images/zaiire-cast-ensemble.webp", alt: "Iqela likaZaiire" },
      { image: "/images/necklace-transformation.webp", alt: "Uguquko lweQhosha leSiphelo" },
      { image: "/images/royal-bloodlines.webp", alt: "Uhlobo lobukhosi" },
      { image: "/images/body-transformation.webp", alt: "Ukuvuka kwamandla kaZaiire" },
    ],
    authorTitle: "Umbhali",
    authorName: "HRM King Kufulula",
    authorDescription:
      "Ukumkani wemveli, umyili wenkcubeko, kunye nomseki we-ISOLELE. Wakha amabali abuyisela inkumbulo yase-Afrika ngobukhosi, iintsomi, kunye nombono olawulayo.",
    authorImage: "/king-kufulula.jpg",
    backLabel: "Buyela kuzo zonke ii-comics",
    comingSoon: false,
  },
  sw: {
    slug: "zaiire",
    title: "ZAIIRE",
    eyebrow: "Mkuu wa Kongo",
    subtitle: "Mkufu wa Hatima",
    description:
      "Safari ya kifalme ambapo kumbukumbu, radi, na hatima hukutana. Zaiire anarithi zaidi ya ufalme wakati Mkufu wa Hatima unapoamka.",
    heroImage: "/Fichier%202@0.5x.png",
    heroBackground: "/HERO.webp",
    heroImageAlt: "Jalada la Zaiire, Mkuu wa Kongo",
    price: 36.99,
    purchaseHref: HOME_PRODUCTS_STRIPE_LINK,
    characters: [
      {
        name: "Zaiire",
        role: "Mkuu aliyeteuliwa",
        description: "Mwana wa Shango na Kimoya, anabeba damu ya kifalme, nguvu ya kimungu, na jukumu la kurejesha kumbukumbu iliyofutwa.",
        image: "/characters/zaiire-kongo-throne.jpg",
      },
      {
        name: "Kimoya",
        role: "Malkia shujaa",
        description: "Mama mtawala ambaye nguvu yake, dhabihu, na ukoo wa kifalme huamsha hatima ya Zaiire.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260308-WA0013-6Xt165l5rPK1nNYEUoAqZBFN42ioH4.jpg",
      },
    ],
    synopsisTitle: "Muhtasari",
    synopsis: [
      "Alilelewa kati ya fursa na ukimya, Zaiire anadhani anaelewa ulimwengu uliomuumba. Kila kitu kinabadilika anapokutana tena na mama yake huko Kinshasa na kupokea Mkufu wa Hatima.",
      "Hirizi hiyo haifunui nguvu tu. Inafunua historia, koo, na vita dhidi ya kumbukumbu yenyewe. Kile kinachoanza kama utafutaji wa familia kinakuwa vita kubwa zaidi kwa ajili ya roho ya ufalme wa Kongo.",
      "Radi, unabii, na kumbukumbu ya kifalme vinapoamka ndani yake, Zaiire lazima aamue kama atabaki mkuu au kuwa nguvu teule ambayo mababu zake walikuwa wakisubiri.",
    ],
    galleryTitle: "Kurasa Zilizochaguliwa",
    gallery: [
      { image: "/images/zaiire-cast-ensemble.webp", alt: "Kundi la wahusika wa Zaiire" },
      { image: "/images/necklace-transformation.webp", alt: "Mabadiliko ya Mkufu wa Hatima" },
      { image: "/images/royal-bloodlines.webp", alt: "Koo za kifalme" },
      { image: "/images/body-transformation.webp", alt: "Kuamka kwa nguvu za Zaiire" },
    ],
    authorTitle: "Mwandishi",
    authorName: "HRM King Kufulula",
    authorDescription:
      "Mfalme wa asili, mbunifu wa utamaduni, na mwanzilishi wa ISOLELE. Anaunda hadithi zinazorejesha kumbukumbu ya Kiafrika kupitia ufalme, hekaya, na mawazo tawala.",
    authorImage: "/king-kufulula.jpg",
    backLabel: "Rudi kwa comics zote",
    comingSoon: false,
  },
  ln: {
    slug: "zaiire",
    title: "ZAIIRE",
    eyebrow: "Mwana-mokonzi ya Kongo",
    subtitle: "Mondele ya Destin",
    description:
      "Mobembo ya bokonzi esika bosikoli, nkake, mpe destin ekutanaka. Zaiire azwi koleka kaka bokonzi ntango Mondele ya Destin elamwisi.",
    heroImage: "/Fichier%202@0.5x.png",
    heroBackground: "/HERO.webp",
    heroImageAlt: "Couverture ya Zaiire, Mwana-mokonzi ya Kongo",
    price: 36.99,
    purchaseHref: HOME_PRODUCTS_STRIPE_LINK,
    characters: [
      {
        name: "Zaiire",
        role: "Mwana-mokonzi aponomi",
        description: "Mwana ya Shango na Kimoya, amemi makila ya bokonzi, nguya ya Nzambe, mpe mokumba ya kozongisa bosikoli oyo esilaki.",
        image: "/characters/zaiire-kongo-throne.jpg",
      },
      {
        name: "Kimoya",
        role: "Reine ya bitumba",
        description: "Mama ya bokonzi oyo makasi na ye, ebonza na ye, mpe libota ya bokonzi ebandisi destin ya Zaiire.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260308-WA0013-6Xt165l5rPK1nNYEUoAqZBFN42ioH4.jpg",
      },
    ],
    synopsisTitle: "Molɔ́ngɔ́",
    synopsis: [
      "Abokolamaki na kati ya libaku mpe kimia, Zaiire akanisi ete ayebi mokili oyo esalaki ye. Nyonso ebongwani ntango akutani na mama na ye na Kinshasa mpe azwi Mondele ya Destin.",
      "Eloko yango emonisi kaka nguya te. Emonisi lisolo, mabota, mpe etumba na botelemi ya bosikoli yango moko. Oyo ebandaki lokola boluki ya libota ekomi etumba ya monene mpo na molimo ya bokonzi ya Kongo.",
      "Ntango nkake, esakweli, mpe bosikoli ya bokonzi elamwisi na kati na ye, Zaiire asengeli kopona soki akotikala mwana-mokonzi to akokoma nguya oyo bankoko na ye bazalaki kozela.",
    ],
    galleryTitle: "Bakasa Baponomi",
    gallery: [
      { image: "/images/zaiire-cast-ensemble.webp", alt: "Ekipi ya Zaiire" },
      { image: "/images/necklace-transformation.webp", alt: "Mbongwana ya Mondele ya Destin" },
      { image: "/images/royal-bloodlines.webp", alt: "Mabota ya bokonzi" },
      { image: "/images/body-transformation.webp", alt: "Kolamuka ya nguya ya Zaiire" },
    ],
    authorTitle: "Mokomi",
    authorName: "HRM King Kufulula",
    authorDescription:
      "Mokonzi ya bonkoko, motongi ya mimeseno, mpe mobandisi ya ISOLELE. Atongi masolo oyo ezongisaka bosikoli ya Afrika na nzela ya bokonzi, masapo, mpe makanisi ya bokonzi.",
    authorImage: "/king-kufulula.jpg",
    backLabel: "Zonga na ba comics nyonso",
    comingSoon: false,
  },
};

interface DetailUiContent {
  comingSoonEyebrow: string;
  comingSoonSubtitle: string;
  comingSoonBody: string;
  authorTitle: string;
  authorName: string;
  authorDescription: string;
  backLabel: string;
}

const detailUi: Partial<Record<SupportedLocale, DetailUiContent>> & { en: DetailUiContent } = {
  en: {
    comingSoonEyebrow: "New chapter loading",
    comingSoonSubtitle: "A full comic page is on the way.",
    comingSoonBody:
      "This title is already part of the ISOLELE universe, but its dedicated reading page is still being prepared. Return soon to discover the full cast, synopsis, and selected pages.",
    authorTitle: "Author",
    authorName: "ISOLELE Studio",
    authorDescription:
      "ISOLELE develops stories from the DRC for a global audience, blending mythology, royalty, and contemporary African imagination.",
    backLabel: "Back to all comics",
  },
  fr: {
    comingSoonEyebrow: "Nouveau chapitre en préparation",
    comingSoonSubtitle: "La page complète arrive bientôt.",
    comingSoonBody:
      "Ce titre fait déjà partie de l'univers ISOLELE, mais sa page de lecture détaillée est encore en préparation. Revenez bientôt pour découvrir les personnages, le synopsis et quelques planches.",
    authorTitle: "Auteur",
    authorName: "Studio ISOLELE",
    authorDescription:
      "ISOLELE développe depuis la RDC des histoires pour le monde, entre mythologie, royauté et imagination africaine contemporaine.",
    backLabel: "Retour aux comics",
  },
  pt: {
    comingSoonEyebrow: "Novo capítulo a caminho",
    comingSoonSubtitle: "Uma página completa do comic está a caminho.",
    comingSoonBody:
      "Este título já faz parte do universo ISOLELE, mas sua página de leitura dedicada ainda está sendo preparada. Volte em breve para descobrir o elenco completo, a sinopse e páginas selecionadas.",
    authorTitle: "Autor",
    authorName: "ISOLELE Studio",
    authorDescription:
      "A ISOLELE desenvolve histórias da RDC para um público global, misturando mitologia, realeza e imaginação africana contemporânea.",
    backLabel: "Voltar a todos os comics",
  },
  es: {
    comingSoonEyebrow: "Nuevo capítulo en camino",
    comingSoonSubtitle: "Una página completa del cómic está en camino.",
    comingSoonBody:
      "Este título ya forma parte del universo ISOLELE, pero su página de lectura dedicada aún se está preparando. Vuelve pronto para descubrir el elenco completo, la sinopsis y páginas seleccionadas.",
    authorTitle: "Autor",
    authorName: "ISOLELE Studio",
    authorDescription:
      "ISOLELE desarrolla historias desde la RDC para una audiencia global, mezclando mitología, realeza e imaginación africana contemporánea.",
    backLabel: "Volver a todos los comics",
  },
  zu: {
    comingSoonEyebrow: "Isahluko esisha siyeza",
    comingSoonSubtitle: "Ikhasi eliphelele le-comic liyeza.",
    comingSoonBody:
      "Lesi sihloko sesivele siyingxenye yomhlaba we-ISOLELE, kodwa ikhasi lalo elizinikele lokufunda lisalungiswa. Buyela maduze uzobona iqembu eliphelele, isifinyezo, kanye namakhasi akhethiwe.",
    authorTitle: "Umbhali",
    authorName: "ISOLELE Studio",
    authorDescription:
      "I-ISOLELE ithuthukisa izindaba ezivela e-DRC zabalaleli bomhlaba wonke, ihlanganisa izinganekwane, ubukhosi, kanye nomcabango wanamuhla wase-Afrika.",
    backLabel: "Buyela kuwo wonke ama-comics",
  },
  xh: {
    comingSoonEyebrow: "Isahluko esitsha siyeza",
    comingSoonSubtitle: "Iphepha elipheleleyo le-comic liyeza.",
    comingSoonBody:
      "Esi sihloko sele siyinxalenye yehlabathi le-ISOLELE, kodwa iphepha lalo elizinikeleyo lokufunda lisalungiswa. Buyela kungekudala ukuze ubone iqela elipheleleyo, isishwankathelo, kunye namaphepha akhethiweyo.",
    authorTitle: "Umbhali",
    authorName: "ISOLELE Studio",
    authorDescription:
      "I-ISOLELE iphuhlisa amabali avela kwi-DRC kubaphulaphuli behlabathi liphela, idibanisa iintsomi, ubukhosi, kunye nombono wale mihla wase-Afrika.",
    backLabel: "Buyela kuzo zonke ii-comics",
  },
  sw: {
    comingSoonEyebrow: "Sura mpya inakuja",
    comingSoonSubtitle: "Ukurasa kamili wa comic unakuja.",
    comingSoonBody:
      "Kichwa hiki tayari ni sehemu ya ulimwengu wa ISOLELE, lakini ukurasa wake maalum wa kusoma bado unaandaliwa. Rudi hivi karibuni kugundua wahusika wote, muhtasari, na kurasa zilizochaguliwa.",
    authorTitle: "Mwandishi",
    authorName: "ISOLELE Studio",
    authorDescription:
      "ISOLELE inaendeleza hadithi kutoka DRC kwa hadhira ya kimataifa, ikichanganya hekaya, ufalme, na mawazo ya kisasa ya Kiafrika.",
    backLabel: "Rudi kwa comics zote",
  },
  ln: {
    comingSoonEyebrow: "Chapitre ya sika ezali koya",
    comingSoonSubtitle: "Lokasa ya mobimba ya comic ezali koya.",
    comingSoonBody:
      "Motó oyo ezali déjà eteni ya mokili ya ISOLELE, kasi lokasa na yango ya kotanga ezali naino kobongisama. Zongá kala mpo na koyeba ekipi mobimba, molɔ́ngɔ́, mpe bakasa baponomi.",
    authorTitle: "Mokomi",
    authorName: "ISOLELE Studio",
    authorDescription:
      "ISOLELE etongi masolo kowuta na RDC mpo na bayoki ya mokili mobimba, esangisi masapo, bokonzi, mpe makanisi ya sika ya Afrika.",
    backLabel: "Zonga na ba comics nyonso",
  },
};

export function getComicsPageContent(locale: SupportedLocale): ComicsPageContent {
  const content = comicsPageContent[locale] ?? comicsPageContent.en;
  return { locale, ...content };
}

export function getAllComicBooks(locale: SupportedLocale): ComicBook[] {
  const sections = comicsByLocale[locale] ?? comicsByLocale.en;
  return Object.values(sections).flat();
}

export function getComicBookBySlug(slug: string, locale: SupportedLocale): ComicBook | null {
  return getAllComicBooks(locale).find((book) => book.id === slug) ?? null;
}

export function getComicStaticParams() {
  const slugs = new Set(getAllComicBooks("en").map((book) => book.id));
  return Array.from(slugs).map((slug) => ({ slug }));
}

export function getComicDetailPageData(slug: string, locale: SupportedLocale): ComicDetailPageData | null {
  if (slug === "zaiire") {
    return zaiireDetailByLocale[locale] ?? zaiireDetailByLocale.en;
  }

  const book = getComicBookBySlug(slug, locale);
  if (!book) {
    return null;
  }

  const ui = detailUi[locale] ?? detailUi.en;

  return {
    slug: book.id,
    title: book.title,
    eyebrow: ui.comingSoonEyebrow,
    subtitle: ui.comingSoonSubtitle,
    description: book.description,
    heroImage: book.image,
    heroImageAlt: book.title,
    heroBackground: "/HERO.webp",
    price: book.price,
    purchaseHref: HOME_PRODUCTS_STRIPE_LINK,
    characters: [],
    synopsisTitle: ui.comingSoonSubtitle,
    synopsis: [ui.comingSoonBody],
    galleryTitle: "",
    gallery: [],
    authorTitle: ui.authorTitle,
    authorName: ui.authorName,
    authorDescription: ui.authorDescription,
    authorImage: "/king-kufulula.jpg",
    backLabel: ui.backLabel,
    comingSoon: true,
    comingSoonLabel: locale === "fr" ? "Coming soon" : "Coming soon",
    comingSoonBody: ui.comingSoonBody,
  };
}
