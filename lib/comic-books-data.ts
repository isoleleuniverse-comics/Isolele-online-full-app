"use client"

export interface ComicBook {
  id: string
  titleKey: string
  descriptionKey: string
  excerptKey: string
  image: string
  dateKey?: string
  link?: string
  price?: number
}

export const comicBooks: ComicBook[] = [
  // Livres existants du projet (livres de l'univers)
  {
    id: "zaiire",
    titleKey: "book_zaiire_title",
    descriptionKey: "book_zaiire_description",
    excerptKey: "universe_destiny_desc",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/book-cover-zaiire.jpg",
    price: 25.99,
    link: "/characters/zaiire"
  },
  {
    id: "kimoya",
    titleKey: "book_kimoya_title",
    descriptionKey: "book_kimoya_description",
    excerptKey: "universe_heritage_desc",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/book-cover-kimoya.jpg",
    price: 22.99,
    link: "/characters/kimoya"
  },
  {
    id: "bambula",
    titleKey: "book_bambula_title",
    descriptionKey: "book_bambula_description",
    excerptKey: "universe_resurrection_desc",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/book-cover-bambula.jpg",
    price: 24.99,
    link: "/characters/bambula"
  },
  {
    id: "mokele",
    titleKey: "book_mokele_title",
    descriptionKey: "book_mokele_description",
    excerptKey: "book_mokele_story",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/book-cover-mokele.jpg",
    price: 26.99,
    link: "/characters/mokele"
  },
  {
    id: "kufulula",
    titleKey: "book_kufulula_title",
    descriptionKey: "book_kufulula_description",
    excerptKey: "universe_founder_desc",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/book-cover-kufulula.jpg",
    price: 29.99,
    link: "/the-founder"
  },
  // Nouveaux livres de l'image (ISOLELE NEWS)
  {
    id: "lost-tribe-wakanda",
    titleKey: "news_title_makanda",
    descriptionKey: "news_excerpt_makanda",
    excerptKey: "The Lost Tribe Behind Wakanda Was Real: Meet the Makanda of Congo",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lost-tribe-wakanda.jpg",
    dateKey: "news_date_march",
    price: 19.99
  },
  {
    id: "isolele-reclaims-african",
    titleKey: "book_isolele_reclaims_title",
    descriptionKey: "book_isolele_reclaims_desc",
    excerptKey: "How the Isolele Universe Reclaims African Memory",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/isolele-reclaims.jpg",
    dateKey: "news_date_july",
    price: 21.99
  },
  {
    id: "myth-to-manuscript",
    titleKey: "book_myth_manuscript_title",
    descriptionKey: "book_myth_manuscript_desc",
    excerptKey: "From Myth to Manuscript: Mapping the Makanda Empire",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/myth-manuscript.jpg",
    dateKey: "news_date_july",
    price: 23.99
  },
  {
    id: "sacred-flame-blueprints",
    titleKey: "book_sacred_flame_title",
    descriptionKey: "book_sacred_flame_desc",
    excerptKey: "Inside the Sacred Flame Blueprints: What Technology Did They Leave Behind?",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sacred-flame.jpg",
    dateKey: "news_date_july",
    price: 27.99
  },
  {
    id: "hidden-message-cover",
    titleKey: "book_hidden_message_title",
    descriptionKey: "book_hidden_message_desc",
    excerptKey: "The Hidden Message of the Cover of Zaiire: The Prince of Kongo, The Necklace of Destiny",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hidden-message.jpg",
    dateKey: "news_date_september",
    price: 18.99
  },
  {
    id: "isolele-first-superhero",
    titleKey: "book_isolele_superhero_title",
    descriptionKey: "book_isolele_superhero_desc",
    excerptKey: "Isolele: The First Congolese Superhero Universe",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/isolele-superhero.jpg",
    dateKey: "news_date_september",
    price: 24.99
  }
]
