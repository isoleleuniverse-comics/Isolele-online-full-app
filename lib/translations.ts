"use client"

export type Language = "en" | "fr" | "pt" | "es" | "zu" | "xh" | "sw" | "ln"

export const languageNames: Record<Language, string> = {
  en: "English",
  fr: "Francais",
  pt: "Portugues",
  es: "Espanol",
  zu: "Zulu",
  xh: "Xhosa",
  sw: "Swahili",
  ln: "Lingala",
}

export const languageFlags: Record<Language, string> = {
  en: "🇺🇸",
  fr: "🇫🇷",
  pt: "🇵🇹",
  es: "🇪🇸",
  zu: "🇿🇦",
  xh: "🇿🇦",
  sw: "🇹🇿",
  ln: "🇨🇩",
}

export interface TranslationKeys {
  // Navigation
  nav_home: string
  nav_about: string
  nav_founder: string
  nav_news: string
  nav_characters: string
  nav_shop: string
  nav_supporters: string
  nav_contact: string
  nav_games: string
  nav_all_characters: string
  nav_become_supporter: string
  nav_partners: string
  nav_restaurant: string
  nav_fashion: string
  nav_settings: string
  
  // Hero Section
  hero_title: string
  hero_subtitle: string
  hero_description: string
  hero_buy_now: string
  hero_discover: string
  hero_preorder: string
  hero_launch_price: string

  // Book Slides
  book_welcome_tag: string
  book_chosen_ones_title: string
  book_chosen_ones_subtitle: string
  book_chosen_ones_desc: string
  book_explore_universe: string

  book_makanda_tag: string
  book_makanda_title: string
  book_makanda_subtitle: string
  book_makanda_desc: string
  book_discover_makanda: string

  book_bambula_tag: string
  book_bambula_title: string
  book_bambula_subtitle: string
  book_bambula_desc: string
  book_discover_bambula: string

  book_mokele_tag: string
  book_mokele_title: string
  book_mokele_subtitle: string
  book_mokele_desc: string
  book_discover_mokele: string

  book_zaiire_tag: string
  book_zaiire_title: string
  book_zaiire_subtitle: string
  book_zaiire_desc: string
  book_discover_zaiire: string

  book_kufu_tag: string
  book_kufu_title: string
  book_kufu_subtitle: string
  book_kufu_desc: string
  book_explore_game: string

  book_amara_tag: string
  book_amara_title: string
  book_amara_subtitle: string
  book_amara_desc: string
  book_discover_amara: string

  book_zattar_tag: string
  book_zattar_title: string
  book_zattar_subtitle: string
  book_zattar_desc: string
  book_discover_zattar: string

  book_zaiko_tag: string
  book_zaiko_title: string
  book_zaiko_subtitle: string
  book_zaiko_desc: string
  book_discover_zaiko: string
  
  // Universe Section
  universe_title: string
  universe_subtitle: string
  universe_description: string
  universe_destiny_title: string
  universe_destiny_desc: string
  universe_heritage_title: string
  universe_heritage_desc: string
  universe_resurrection_title: string
  universe_resurrection_desc: string
  
  // Characters Section
  characters_title: string
  characters_subtitle: string
  characters_discover: string
  characters_zaire_title: string
  characters_zaire_desc: string
  characters_kimoya_title: string
  characters_kimoya_desc: string
  characters_zattar_title: string
  characters_zattar_desc: string
  characters_twins_title: string
  characters_twins_desc: string
  characters_imvula_title: string
  characters_imvula_desc: string
  
  // News Section
  news_title: string
  news_read_more: string
  news_minutes_read: string
  news_published: string
  
  // CTA Section
  cta_title: string
  cta_join_legend: string
  cta_description: string
  cta_explore: string
  cta_newsletter: string
  
  // Footer
  footer_description: string
  footer_explore: string
  footer_resources: string
  footer_newsletter_title: string
  footer_newsletter_desc: string
  footer_email_placeholder: string
  footer_subscribe: string
  footer_copyright: string
  footer_press: string
  footer_careers: string
  footer_contact: string
  footer_faq: string
  footer_terms: string
  footer_privacy: string
  
  // Shop
  shop_title: string
  shop_subtitle: string
  shop_add_to_cart: string
  shop_buy_now: string
  shop_price: string
  shop_sale: string
  shop_new: string
  shop_bestseller: string
  
  // Cart
  cart_title: string
  cart_empty: string
  cart_subtotal: string
  cart_shipping: string
  cart_total: string
  cart_checkout: string
  cart_continue_shopping: string
  cart_remove: string
  cart_quantity: string
  
  // Payment
  payment_title: string
  payment_card: string
  payment_google_pay: string
  payment_card_number: string
  payment_expiry: string
  payment_cvv: string
  payment_name: string
  payment_email: string
  payment_confirm: string
  payment_success: string
  payment_receipt_sent: string
  
  // About Page
  about_title: string
  about_what_is: string
  about_vision_title: string
  about_vision_desc: string
  about_pillars_title: string
  about_pillar1_title: string
  about_pillar1_desc: string
  about_pillar2_title: string
  about_pillar2_desc: string
  about_pillar3_title: string
  about_pillar3_desc: string
  about_pillar4_title: string
  about_pillar4_desc: string
  
  // Founder Page
  founder_title: string
  founder_name: string
  founder_role: string
  founder_bio: string
  
  // Common
  language: string
  theme: string
  discover: string
  latestNews: string
  loading: string
  error: string
  success: string
  cancel: string
  save: string
  edit: string
  delete: string
  search: string
  search_placeholder: string
  view_all: string
  learn_more: string
  back: string
  next: string
  previous: string
  site_map: string
  accessibility: string
  cookie_settings: string
  footer_thank_you: string
}

export const translations: Record<Language, TranslationKeys> = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About",
    nav_founder: "Founder",
    nav_news: "Comics News",
    nav_characters: "Characters",
    nav_shop: "Shop",
    nav_supporters: "Supporters",
    nav_contact: "Contact",
    nav_games: "Games",
    nav_all_characters: "All Characters",
    nav_become_supporter: "Become a Supporter",
    nav_partners: "Partners",
    nav_restaurant: "Partner Restaurant",
    nav_fashion: "Fashion",
    nav_settings: "Settings",
    
    // Hero Section
    hero_title: "ZAIIRE - PRINCE OF KONGO",
    hero_subtitle: "The Necklace of Destiny",
    hero_description: "An uplifting action-packed adventure that echoes the spirit of The Lion King and Black Panther, while offering young readers a celebration of heritage, courage and self-discovery.",
    hero_buy_now: "BUY NOW",
    hero_discover: "DISCOVER THE STORY",
    hero_preorder: "Pre-order",
    hero_launch_price: "Launch price",
    
    // Book Slides
    book_welcome_tag: "WELCOME TO ISOLELE",
    book_chosen_ones_title: "THE CHOSEN ONES",
    book_chosen_ones_subtitle: "An entire universe born from the roots of Kongo...",
    book_chosen_ones_desc: "Isolele is a visionary universe born to restore the soul of African storytelling, a mythological empire where superheroes are chosen by destiny, kingdoms never forgotten, and ancestral power is alive in every page, every prophecy, every battle. Every child who reads Isolele will discover superheroes who look like them, speak their language, protect their land, and honor their ancestors. This is for the next generation of kings, queens, warriors, inventors, and storytellers.",
    book_explore_universe: "EXPLORE THE UNIVERSE",

    book_makanda_tag: "THE MAKANDA DYNASTY — BOOK I",
    book_makanda_title: "MAKANDA",
    book_makanda_subtitle: "The Most Powerful Empire in History Was Not Lost. It Was Hidden On Purpose.",
    book_makanda_desc: "Deep within Central Africa existed a civilization the world was never meant to know about. Spiritually awakened. Technologically advanced. Protected by the Sacred Flame. When outside forces came for what was theirs, the Makanda did not fall. They disappeared. Their city was never lost. It was waiting for the one born to carry the flame again.",
    book_discover_makanda: "DISCOVER MAKANDA",

    book_bambula_tag: "BAMBULA: CHILD OF RHYTHM",
    book_bambula_title: "BAMBULA",
    book_bambula_subtitle: "CHAPTER I · THE SACRED DRUM",
    book_bambula_desc: "Before words, there was rhythm. Bambula was the child who heard everything. When the drums were taken and the land went silent, he kept the rhythm alive inside him. Armed with the sacred drum, he walks between the spirit world and the living. He does not fight to destroy. He protects to remember.",
    book_discover_bambula: "DISCOVER BAMBULA",

    book_mokele_tag: "MOKELE: BORN INTO STRUGGLE",
    book_mokele_title: "MOKELE",
    book_mokele_subtitle: "From Child to Lord of Kinshasa",
    book_mokele_desc: "Mokele is not born a king. He is born into struggle. The streets of Kinshasa teach him before school ever could, where loyalty is fragile, violence is normal, and survival is everything. From child to hustler to lord. He builds power, money, and respect. In Kinshasa, you either get eaten... or you become the predator.",
    book_discover_mokele: "DISCOVER MOKELE",

    book_zaiire_tag: "ZAIIRE: THE PRINCE OF KONGO",
    book_zaiire_title: "THE PRINCE OF KONGO",
    book_zaiire_subtitle: "The Necklace of Destiny",
    book_zaiire_desc: "Forged in the heart of the Kongo Kingdom, the Necklace of Destiny was never made to be worn. It was made to choose. Passed through centuries of fire, war, and silence, it carries the soul of every king who bled for their people and every queen who held the world together with bare hands. When it finds Zaiire, it does not shine. It awakens.",
    book_discover_zaiire: "DISCOVER ZAIIRE",

    book_kufu_tag: "KUFU: THE CROWN GAME",
    book_kufu_title: "KUFU",
    book_kufu_subtitle: "THE OFFICIAL GAME OF THE ISOLELE UNIVERSE",
    book_kufu_desc: "This is not just a card game. It is a ceremony. Gather your warriors. Build your kingdom. Outplay every opponent at the table. But to claim the crown there is only one way to win. You must raise your voice and speak the name of the king out loud. Then someone places the necklace over your head. Not by your own hand. By another. Because a true king is not crowned alone. KUFU is where African royalty becomes something you feel in your hands, hear in your voice, and carry around your neck. Every game is a coronation. Every winner is a king.",
    book_explore_game: "EXPLORE THE GAME",

    book_amara_tag: "AMARA: QUEEN OF THE SEAS",
    book_amara_title: "AMARA",
    book_amara_subtitle: "CHAPTER I · QUEEN OF THE PIRATES OF AMAZON",
    book_amara_desc: "Every pirate fears the ocean. Amara owns it. She is the Queen of the Seas. The most feared captain on every water in the world. No ship has outrun her. No king has outsmarted her. No army has stopped her fleet. But Amara does not sail alone. Beside her stand four women bound by blood, loyalty and destiny. Five queens of the sea who together carry a power that will shake every throne on the continent. From their union the Agojie dynasty is born. And from that dynasty rise the five women kings who will change the course of African history forever. This is not just a pirate story. This is where the greatest female dynasty in the ISOLELE universe begins.",
    book_discover_amara: "DISCOVER AMARA",

    book_zattar_tag: "ZATTAR: THE PRINCE OF THE UNIVERSE",
    book_zattar_title: "ZATTAR",
    book_zattar_subtitle: "The Conqueror of Thrones",
    book_zattar_desc: "When Destiny Refused Him One Kingdom, He Decided to Take Them All. Prince Zattar was born to inherit the throne of Bapindi. But when the Ancestors chose another, something inside him did not break. It ignited. He studied the First and Second Wars of Vegas, legends of devastation that shook the world before he was even born. Where others saw warning, Zattar saw a map. He started the Third War of Vegas. Not out of madness. Not out of pain. But because he looked at the entire universe and reached one conclusion: It belongs to someone. And that someone is Zattar. He was not chosen. So he chose the universe instead.",
    book_discover_zattar: "DISCOVER ZATTAR",

    book_zaiko_tag: "ZAÏKO: LAST KING OF THE STREETS OF KIVUS",
    book_zaiko_title: "THE LEGEND OF ZAÏKO",
    book_zaiko_subtitle: "He Did Not Rise From the Streets. He Conquered Them.",
    book_zaiko_desc: "Born in North Kivu. Forged in Kinshasa. Zaïko was never meant to survive. But survival was never enough. In a world ruled by power, money, and fear, he rises from nothing. Not as a hero. But as a force. With his brother, he builds the most feared empire the Kivus have ever known. No crown was given. No destiny was written. Everything was taken.",
    book_discover_zaiko: "DISCOVER ZAÏKO",
    
    // Universe Section
    universe_title: "THE ISOLELE UNIVERSE",
    universe_subtitle: "The Chosen Ones",
    universe_description: "Isolele is a visionary universe born to restore the soul of African storytelling - a mythological empire where Superheroes are chosen by destiny, kingdoms never forgotten, and ancestral power lives in every page, every prophecy, every battle.",
    universe_destiny_title: "Destiny is Not a Choice",
    universe_destiny_desc: "It is a Call. Every character is summoned by bloodlines, ancient spirits, and the unfinished stories of their ancestors.",
    universe_heritage_title: "Royal Bloodlines Carry Ancient Power",
    universe_heritage_desc: "Royal blood carries the memory and might of forgotten kingdoms, waiting to be awakened by the chosen ones.",
    universe_resurrection_title: "Ancestral Spirits Never Die",
    universe_resurrection_desc: "Africa was never powerless. The prophecy has returned, and with it, the resurrection of buried myths.",
    
    // Characters Section
    characters_title: "THE CHOSEN ONES",
    characters_subtitle: "Meet the heroes, legends, and guardians of the Isolele Universe",
    characters_discover: "DISCOVER",
    characters_zaire_title: "Prince of Kongo",
    characters_zaire_desc: "Son of thunder and royalty, chosen by the Necklace of Destiny.",
    characters_kimoya_title: "The Reborn Kandake",
    characters_kimoya_desc: "Heir of warrior queens, shadow hunter.",
    characters_zattar_title: "The Blood Architect",
    characters_zattar_desc: "Cursed genius of forbidden technology.",
    characters_twins_title: "Orphan Prophets",
    characters_twins_desc: "Orphan prophets who speak with rivers and stars.",
    characters_imvula_title: "Queen of Stormglass",
    characters_imvula_desc: "Sovereign of Stormglass, guardian of the Sky Beasts.",
    
    // News Section
    news_title: "LATEST NEWS",
    news_read_more: "READ ARTICLE",
    news_minutes_read: "min read",
    news_published: "Published",
    
    // CTA Section
    cta_title: "JOIN THE LEGEND",
    cta_join_legend: "JOIN THE LEGEND",
    cta_description: "Be part of a revolutionary comic book universe that celebrates African heritage while inspiring the next generation of superheroes.",
    cta_explore: "EXPLORE THE UNIVERSE",
    cta_newsletter: "SUBSCRIBE TO NEWSLETTER",
    
    // Footer
    footer_description: "Isolele is a visionary universe born to restore the soul of African storytelling - a mythological empire where Superheroes are chosen by destiny, kingdoms never forgotten, and ancestral power lives in every page, every prophecy, every battle.",
    footer_explore: "EXPLORE",
    footer_resources: "RESOURCES",
    footer_newsletter_title: "STAY INFORMED",
    footer_newsletter_desc: "Subscribe to our newsletter to receive exclusive updates on new releases, events and special offers.",
    footer_email_placeholder: "Your email address",
    footer_subscribe: "SUBSCRIBE",
    footer_thank_you: "THANK YOU!",
    footer_copyright: "2026 Isolele. All rights reserved. A We Love Congo initiative.",
    footer_press: "Press",
    footer_careers: "Careers",
    footer_contact: "Contact Us",
    footer_faq: "FAQ",
    footer_terms: "Terms of Use",
    footer_privacy: "Privacy Policy",
    
    // Shop
    shop_title: "SHOP",
    shop_subtitle: "Discover our collection of comics and merchandise",
    shop_add_to_cart: "Add to Cart",
    shop_buy_now: "Buy Now",
    shop_price: "Price",
    shop_sale: "Sale",
    shop_new: "New",
    shop_bestseller: "Bestseller",
    
    // Cart
    cart_title: "Your Cart",
    cart_empty: "Your cart is empty",
    cart_subtotal: "Subtotal",
    cart_shipping: "Shipping",
    cart_total: "Total",
    cart_checkout: "Checkout",
    cart_continue_shopping: "Continue Shopping",
    cart_remove: "Remove",
    cart_quantity: "Quantity",
    
    // Payment
    payment_title: "Payment",
    payment_card: "Credit Card",
    payment_google_pay: "Google Pay",
    payment_card_number: "Card Number",
    payment_expiry: "Expiry Date",
    payment_cvv: "CVV",
    payment_name: "Cardholder Name",
    payment_email: "Email Address",
    payment_confirm: "Confirm Payment",
    payment_success: "Payment Successful!",
    payment_receipt_sent: "Receipt sent to your email",
    
    // About Page
    about_title: "ABOUT ISOLELE",
    about_what_is: "What is ISOLELE?",
    about_vision_title: "THE VISION",
    about_vision_desc: "Restore Africa as the center of myth, magic and power. Create a living tapestry of legends that awaken pride, purpose and prophecy in every soul they touch across borders, generations and platforms.",
    about_pillars_title: "The Four Pillars of Isolele",
    about_pillar1_title: "A Mythological Universe",
    about_pillar1_desc: "A vast interconnected world inspired by real African kingdoms - from the thrones of Kongo, Kush and Axum to hidden empires guided by gods, warrior queens and oracles.",
    about_pillar2_title: "A Publishing and Media Movement",
    about_pillar2_desc: "From comics to novels, animations, games and cinematic worlds - Isolele builds a platform enabling African creatives to tell their own legends with excellence, scale and soul.",
    about_pillar3_title: "A Cultural Renovation",
    about_pillar3_desc: "Isolele is part of a larger renaissance - a movement to reclaim, celebrate, and reimagine Africa's royal, mythic, and divine identity.",
    about_pillar4_title: "A Legacy Engine",
    about_pillar4_desc: "Every child who reads Isolele will discover superheroes who look like them, speak their language, protect their land and honor their ancestors.",
    
    // Founder Page
    founder_title: "THE FOUNDER",
    founder_name: "H.R.M King Kufulula",
    founder_role: "Founder & Creator of Isolele Universe",
    founder_bio: "The visionary behind Isolele, dedicated to restoring the soul of African storytelling and creating superheroes that reflect the true heritage of Africa.",
    
    // Common
    language: "Language",
    theme: "Theme",
    discover: "Discover",
    latestNews: "Latest News",
    loading: "Loading...",
    error: "Error",
    success: "Success",
    cancel: "Cancel",
    save: "Save",
    edit: "Edit",
    delete: "Delete",
    search: "Search",
    search_placeholder: "Search...",
    view_all: "View All",
    learn_more: "Learn More",
    back: "Back",
    next: "Next",
    previous: "Previous",
    site_map: "Site Map",
    accessibility: "Accessibility",
    cookie_settings: "Cookie Settings",
    footer_thank_you: "Thank You!",
  },
  
  fr: {
    // Navigation
    nav_home: "Accueil",
    nav_about: "À Propos",
    nav_founder: "Fondateur",
    nav_news: "Actualités BD",
    nav_characters: "Personnages",
    nav_shop: "Boutique",
    nav_supporters: "Supporteurs",
    nav_contact: "Contact",
    nav_games: "Jeux",
    nav_all_characters: "Tous les Personnages",
    nav_become_supporter: "Devenir Supporteur",
    nav_partners: "Partenaires",
    nav_restaurant: "Restaurant Partenaire",
    nav_fashion: "Mode",
    nav_settings: "Paramètres",
    
    // Hero Section
    hero_title: "ZAÏRE - PRINCE DU KONGO",
    hero_subtitle: "Le Collier de la Destinée",
    hero_description: "Une aventure palpitante et édifiante qui fait écho à l'esprit du Roi Lion et de Black Panther, tout en offrant aux jeunes lecteurs une célébration de l'héritage, du courage et de la découverte de soi.",
    hero_buy_now: "ACHETER MAINTENANT",
    hero_discover: "DÉCOUVRIR L'HISTOIRE",
    hero_preorder: "Pré-commande",
    hero_launch_price: "Prix de lancement",
    
    // Book Slides
    book_welcome_tag: "BIENVENUE À ISOLELE",
    book_chosen_ones_title: "LES ÉLUS",
    book_chosen_ones_subtitle: "Un univers entier né des racines du Kongo...",
    book_chosen_ones_desc: "Isolele est un univers visionnaire né pour restaurer l'âme du storytelling africain, un empire mythologique où les superhéros sont choisis par le destin, les royaumes jamais oubliés, et le pouvoir ancestral est vivant dans chaque page, chaque prophétie, chaque bataille. Chaque enfant qui lit Isolele découvrira des superhéros qui lui ressemblent, parlent sa langue, protègent sa terre et honorent ses ancêtres. C'est pour la prochaine génération de rois, reines, guerriers, inventeurs et conteurs.",
    book_explore_universe: "EXPLORER L'UNIVERS",

    book_makanda_tag: "LA DYNASTIE MAKANDA — LIVRE I",
    book_makanda_title: "MAKANDA",
    book_makanda_subtitle: "L'Empire le Plus Puissant de l'Histoire n'a Pas Été Perdu. Il a Été Caché à Dessein.",
    book_makanda_desc: "Au cœur de l'Afrique centrale existait une civilisation que le monde ne devait jamais connaître. Spirituellement éveillée. Technologiquement avancée. Protégée par la Flamme Sacrée. Quand les forces extérieures sont venues pour ce qui était à eux, les Makanda n'ont pas chuté. Ils ont disparu. Leur ville n'a jamais été perdue. Elle attendait celui né pour porter la flamme à nouveau.",
    book_discover_makanda: "DÉCOUVRIR MAKANDA",

    book_bambula_tag: "BAMBULA: ENFANT DU RYTHME",
    book_bambula_title: "BAMBULA",
    book_bambula_subtitle: "CHAPITRE I · LE TAMBOUR SACRÉ",
    book_bambula_desc: "Avant les mots, il y avait le rythme. Bambula était l'enfant qui entendait tout. Quand les tambours ont été pris et la terre s'est tue, il a gardé le rythme vivant en lui. Armé du tambour sacré, il marche entre le monde des esprits et les vivants. Il ne combat pas pour détruire. Il protège pour se souvenir.",
    book_discover_bambula: "DÉCOUVRIR BAMBULA",

    book_mokele_tag: "MOKELE: NÉ DANS LA LUTTE",
    book_mokele_title: "MOKELE",
    book_mokele_subtitle: "De l'Enfant au Seigneur de Kinshasa",
    book_mokele_desc: "Mokele n'est pas né roi. Il est né dans la lutte. Les rues de Kinshasa lui enseignent avant que l'école n'en ait l'occasion, où la loyauté est fragile, la violence est normale, et la survie est tout. De l'enfant au hustler au seigneur. Il construit le pouvoir, l'argent et le respect. À Kinshasa, soit tu te fais manger... soit tu deviens le prédateur.",
    book_discover_mokele: "DÉCOUVRIR MOKELE",

    book_zaiire_tag: "ZAÏRE: LE PRINCE DU KONGO",
    book_zaiire_title: "LE PRINCE DU KONGO",
    book_zaiire_subtitle: "Le Collier de la Destinée",
    book_zaiire_desc: "Forgé au cœur du Royaume du Kongo, le Collier de la Destinée n'a jamais été conçu pour être porté. Il a été conçu pour choisir. Passé à travers des siècles de feu, de guerre et de silence, il porte l'âme de chaque roi qui a saigné pour son peuple et chaque reine qui a tenu le monde ensemble avec des mains nues. Quand il trouve Zaïre, il ne brille pas. Il s'éveille.",
    book_discover_zaiire: "DÉCOUVRIR ZAÏRE",

    book_kufu_tag: "KUFU: LE JEU DE LA COURONNE",
    book_kufu_title: "KUFU",
    book_kufu_subtitle: "LE JEU OFFICIEL DE L'UNIVERS ISOLELE",
    book_kufu_desc: "Ce n'est pas juste un jeu de cartes. C'est une cérémonie. Rassembles tes guerriers. Construis ton royaume. Surpasse chaque adversaire à la table. Mais pour réclamer la couronne, il n'y a qu'un seul moyen de gagner. Tu dois élever ta voix et prononcer le nom du roi à haute voix. Puis quelqu'un place le collier sur ta tête. Pas de ta propre main. Par une autre. Car un vrai roi n'est pas couronné seul. KUFU est là où la royauté africaine devient quelque chose que tu sens dans tes mains, entends dans ta voix et porte autour de ton cou. Chaque jeu est une couronnement. Chaque gagnant est un roi.",
    book_explore_game: "EXPLORER LE JEU",

    book_amara_tag: "AMARA: REINE DES MERS",
    book_amara_title: "AMARA",
    book_amara_subtitle: "CHAPITRE I · REINE DES PIRATES DE L'AMAZONE",
    book_amara_desc: "Chaque pirate craint l'océan. Amara le possède. Elle est la Reine des Mers. La capitaine la plus redoutée sur chaque eau du monde. Aucun navire ne l'a surpassée. Aucun roi ne l'a surpassée en ruse. Aucune armée n'a arrêté sa flotte. Mais Amara ne navigue pas seule. À côté d'elle se tiennent quatre femmes liées par le sang, la loyauté et le destin. Cinq reines de la mer qui ensemble portent un pouvoir qui ébranlerait chaque trône du continent. De leur union naît la dynastie Agojie. Et de cette dynastie surgissent les cinq reines femmes qui changeront à jamais le cours de l'histoire africaine. Ce n'est pas juste une histoire de pirates. C'est là où commence la plus grande dynastie féminine de l'univers ISOLELE.",
    book_discover_amara: "DÉCOUVRIR AMARA",

    book_zattar_tag: "ZATTAR: LE PRINCE DE L'UNIVERS",
    book_zattar_title: "ZATTAR",
    book_zattar_subtitle: "Le Conquérant des Trônes",
    book_zattar_desc: "Quand le Destin lui a Refusé un Royaume, il a Décidé de les Prendre Tous. Le Prince Zattar est né pour hériter du trône de Bapindi. Mais quand les Ancêtres en ont choisi un autre, quelque chose en lui ne s'est pas brisé. Cela s'est enflammé. Il a étudié les Première et Deuxième Guerres de Vegas, des légendes de dévastation qui ont secoué le monde avant même qu'il ne soit né. Où d'autres voyaient un avertissement, Zattar voyait une carte. Il a lancé la Troisième Guerre de Vegas. Pas par folie. Pas par douleur. Mais parce qu'il a regardé l'univers entier et est arrivé à une conclusion: Il appartient à quelqu'un. Et ce quelqu'un est Zattar. Il n'a pas été choisi. Alors il a choisi l'univers à la place.",
    book_discover_zattar: "DÉCOUVRIR ZATTAR",

    book_zaiko_tag: "ZAÏKO: DERNIER ROI DES RUES DE KIVUS",
    book_zaiko_title: "LA LÉGENDE DE ZAÏKO",
    book_zaiko_subtitle: "Il n'a Pas Émergé des Rues. Il les a Conquises.",
    book_zaiko_desc: "Né au Nord-Kivu. Forgé à Kinshasa. Zaïko n'était jamais destiné à survivre. Mais la survie n'était jamais suffisante. Dans un monde gouverné par le pouvoir, l'argent et la peur, il surgit de rien. Pas comme un héros. Mais comme une force. Avec son frère, il construit l'empire le plus redouté que les Kivus n'aient jamais connu. Aucune couronne n'a été donnée. Aucun destin n'a été écrit. Tout a été pris.",
    book_discover_zaiko: "DÉCOUVRIR ZAÏKO",
    
    // Universe Section
    universe_title: "L'UNIVERS ISOLELE",
    universe_subtitle: "Les Élus",
    universe_description: "Isolele est un univers visionnaire né pour restaurer l'âme du storytelling africain - un empire mythologique où les Superhéros sont choisis par le destin, les royaumes jamais oubliés, et le pouvoir ancestral est vivant dans chaque page, chaque prophétie, chaque bataille.",
    universe_destiny_title: "La Destinée n'est pas un Choix",
    universe_destiny_desc: "C'est un Appel. Chaque personnage est invoqué par les lignées sanguines, les esprits anciens et les histoires inachevées de leurs ancêtres.",
    universe_heritage_title: "Les Lignées Royales Portent un Pouvoir Ancien",
    universe_heritage_desc: "Le sang royal transporte la mémoire et la puissance des royaumes oubliés, attendant d'être réveillées par les élus.",
    universe_resurrection_title: "Les Esprits Ancestraux ne Meurent Jamais",
    universe_resurrection_desc: "L'Afrique n'a jamais été impuissante. La prophétie est revenue, et avec elle, la résurrection des mythes enterrés.",
    
    // Characters Section
    characters_title: "LES ÉLUS",
    characters_subtitle: "Rencontrez les héros, légendes et gardiens de l'Univers Isolele",
    characters_discover: "DÉCOUVRIR",
    characters_zaire_title: "Prince du Kongo",
    characters_zaire_desc: "Fils du tonnerre et de la royauté, choisi par le Collier de la Destinée.",
    characters_kimoya_title: "La Kandake Renaissante",
    characters_kimoya_desc: "Héritière des reines guerrières, chasseuse d'ombres.",
    characters_zattar_title: "L'Architecte de Sang",
    characters_zattar_desc: "Génie maudit de la technologie interdite.",
    characters_twins_title: "Prophètes Orphelins",
    characters_twins_desc: "Orphelins prophètes qui parlent avec les rivières et les étoiles.",
    characters_imvula_title: "Reine de Stormglass",
    characters_imvula_desc: "Souveraine de Stormglass, gardienne des Bêtes du Ciel.",
    
    // News Section
    news_title: "DERNIÈRES ACTUALITÉS",
    news_read_more: "LIRE L'ARTICLE",
    news_minutes_read: "min de lecture",
    news_published: "Publié",
    
    // CTA Section
    cta_title: "REJOIGNEZ LA LÉGENDE",
    cta_join_legend: "REJOIGNEZ LA LÉGENDE",
    cta_description: "Faites partie d'un univers de bande dessinée révolutionnaire qui célèbre l'héritage africain tout en inspirant la prochaine génération de super-héros.",
    cta_explore: "EXPLORER L'UNIVERS",
    cta_newsletter: "S'ABONNER À LA NEWSLETTER",
    
    // Footer
    footer_description: "Isolele est un univers visionnaire né pour restaurer l'âme du storytelling africain - un empire mythologique où les Superhéros sont choisis par le destin, les royaumes jamais oubliés, et le pouvoir ancestral est vivant dans chaque page, chaque prophétie, chaque bataille.",
    footer_explore: "EXPLORER",
    footer_resources: "RESSOURCES",
    footer_newsletter_title: "RESTEZ INFORMÉ",
    footer_newsletter_desc: "Inscrivez-vous à notre newsletter pour recevoir des mises à jour exclusives sur les nouvelles sorties, les événements et les offres spéciales.",
    footer_email_placeholder: "Votre adresse email",
    footer_subscribe: "S'INSCRIRE",
    footer_thank_you: "MERCI!",
    footer_copyright: "© 2026 Isolele. Tous droits réservés. Une initiative We Love Congo.",
    footer_press: "Presse",
    footer_careers: "Carrières",
    footer_contact: "Nous Contacter",
    footer_faq: "FAQ",
    footer_terms: "Conditions d'utilisation",
    footer_privacy: "Politique de confidentialité",
    
    // Shop
    shop_title: "BOUTIQUE",
    shop_subtitle: "Découvrez notre collection de bandes dessinées et produits dérivés",
    shop_add_to_cart: "Ajouter au Panier",
    shop_buy_now: "Acheter Maintenant",
    shop_price: "Prix",
    shop_sale: "Promo",
    shop_new: "Nouveau",
    shop_bestseller: "Best-seller",
    
    // Cart
    cart_title: "Votre Panier",
    cart_empty: "Votre panier est vide",
    cart_subtotal: "Sous-total",
    cart_shipping: "Livraison",
    cart_total: "Total",
    cart_checkout: "Commander",
    cart_continue_shopping: "Continuer vos achats",
    cart_remove: "Supprimer",
    cart_quantity: "Quantité",
    
    // Payment
    payment_title: "Paiement",
    payment_card: "Carte de Crédit",
    payment_google_pay: "Google Pay",
    payment_card_number: "Numéro de Carte",
    payment_expiry: "Date d'Expiration",
    payment_cvv: "CVV",
    payment_name: "Nom du Titulaire",
    payment_email: "Adresse Email",
    payment_confirm: "Confirmer le Paiement",
    payment_success: "Paiement Réussi!",
    payment_receipt_sent: "Reçu envoyé à votre email",
    
    // About Page
    about_title: "À PROPOS D'ISOLELE",
    about_what_is: "Qu'est-ce qu'ISOLELE?",
    about_vision_title: "LA VISION",
    about_vision_desc: "Restaurer l'Afrique comme centre du mythe, de la magie et de la puissance. Créer une tapisserie vivante de légendes qui éveillent la fierté, le but et la prophétie dans chaque âme qu'elles touchent à travers les frontières, les générations et les plateformes.",
    about_pillars_title: "Les Quatre Piliers d'Isolele",
    about_pillar1_title: "Un Univers Mythologique",
    about_pillar1_desc: "Un vaste monde interconnecté inspiré des vrais royaumes africains - des trônes du Kongo, de Kush et d'Axum aux empires cachés guidés par des dieux, des reines guerrières et des oracles.",
    about_pillar2_title: "Un Mouvement d'Édition et de Médias",
    about_pillar2_desc: "Des bandes dessinées aux romans, animations, jeux et mondes cinématographiques - Isolele construit une plateforme qui permet aux créatifs africains de raconter leurs propres légendes avec excellence, échelle et âme.",
    about_pillar3_title: "Une Rénovation Culturelle",
    about_pillar3_desc: "Isolele fait partie d'une plus grande renaissance - un mouvement pour récupérer, célébrer et réimaginer l'identité royale, mythique et divine de l'Afrique.",
    about_pillar4_title: "Un Moteur d'Héritage",
    about_pillar4_desc: "Chaque enfant qui lit Isolele découvrira des super-héros qui leur ressemblent, parlent leur langue, protègent leur terre et honorent leurs ancêtres.",
    
    // Founder Page
    founder_title: "LE FONDATEUR",
    founder_name: "H.R.M King Kufulula",
    founder_role: "Fondateur et Créateur de l'Univers Isolele",
    founder_bio: "Le visionnaire derrière Isolele, dédié à restaurer l'âme du storytelling africain et à créer des super-héros qui reflètent le véritable héritage de l'Afrique.",
    
    // Common
    language: "Langue",
    theme: "Thème",
    discover: "Découvrir",
    latestNews: "Dernières Nouvelles",
    loading: "Chargement...",
    error: "Erreur",
    success: "Succès",
    cancel: "Annuler",
    save: "Enregistrer",
    edit: "Modifier",
    delete: "Supprimer",
    search: "Rechercher",
    search_placeholder: "Rechercher...",
    view_all: "Voir Tout",
    learn_more: "En Savoir Plus",
    back: "Retour",
    next: "Suivant",
    previous: "Précédent",
    site_map: "Plan du site",
    accessibility: "Accessibilité",
    cookie_settings: "Paramètres des cookies",
    footer_thank_you: "Merci!",
  },
  
  pt: {
    nav_home: "Inicio",
    nav_about: "Sobre",
    nav_founder: "Fundador",
    nav_news: "Noticias HQ",
    nav_characters: "Personagens",
    nav_shop: "Loja",
    nav_supporters: "Apoiadores",
    nav_contact: "Contato",
    nav_games: "Jogos",
    nav_all_characters: "Todos os Personagens",
    nav_become_supporter: "Torne-se um Apoiador",
    nav_partners: "Parceiros",
    nav_restaurant: "Restaurante Parceiro",
    hero_title: "ZAIIRE - PRINCIPE DO KONGO",
    hero_subtitle: "O Colar do Destino",
    hero_description: "Uma aventura emocionante e edificante que ecoa o espirito de O Rei Leao e Pantera Negra, oferecendo aos jovens leitores uma celebracao da heranca, coragem e autodescoberta.",
    hero_buy_now: "COMPRAR AGORA",
    hero_discover: "DESCOBRIR A HISTORIA",
    hero_preorder: "Pre-venda",
    hero_launch_price: "Preco de lancamento",
    universe_title: "O UNIVERSO ISOLELE",
    universe_subtitle: "Os Escolhidos",
    universe_description: "Isolele e um universo visionario nascido para restaurar a alma da narrativa africana - um imperio mitologico onde Super-herois sao escolhidos pelo destino.",
    universe_destiny_title: "O Destino nao e uma Escolha",
    universe_destiny_desc: "E um Chamado. Cada personagem e convocado por linhagens sanguineas, espiritos antigos e historias inacabadas de seus ancestrais.",
    universe_heritage_title: "Linhagens Reais Carregam Poder Antigo",
    universe_heritage_desc: "O sangue real carrega a memoria e o poder de reinos esquecidos, esperando para serem despertados pelos escolhidos.",
    universe_resurrection_title: "Espiritos Ancestrais Nunca Morrem",
    universe_resurrection_desc: "A Africa nunca foi impotente. A profecia retornou, e com ela, a ressurreicao dos mitos enterrados.",
    characters_title: "OS ESCOLHIDOS",
    characters_subtitle: "Conheca os herois, lendas e guardioes do Universo Isolele",
    characters_discover: "DESCOBRIR",
    characters_zaire_title: "Principe do Kongo",
    characters_zaire_desc: "Filho do trovao e da realeza, escolhido pelo Colar do Destino.",
    characters_kimoya_title: "A Kandake Renascida",
    characters_kimoya_desc: "Herdeira das rainhas guerreiras, cacadora de sombras.",
    characters_zattar_title: "O Arquiteto de Sangue",
    characters_zattar_desc: "Genio amaldicoado da tecnologia proibida.",
    characters_twins_title: "Profetas Orfaos",
    characters_twins_desc: "Orfaos profetas que falam com rios e estrelas.",
    characters_imvula_title: "Rainha de Stormglass",
    characters_imvula_desc: "Soberana de Stormglass, guardia das Bestas do Ceu.",
    news_title: "ULTIMAS NOTICIAS",
    news_read_more: "LER ARTIGO",
    news_minutes_read: "min de leitura",
    news_published: "Publicado",
    cta_title: "JUNTE-SE A LENDA",
    cta_description: "Faca parte de um universo revolucionario de quadrinhos que celebra a heranca africana enquanto inspira a proxima geracao de super-herois.",
    cta_explore: "EXPLORAR O UNIVERSO",
    cta_newsletter: "ASSINAR NEWSLETTER",
    footer_description: "Isolele e um universo visionario nascido para restaurar a alma da narrativa africana.",
    footer_explore: "EXPLORAR",
    footer_resources: "RECURSOS",
    footer_newsletter_title: "FIQUE INFORMADO",
    footer_newsletter_desc: "Inscreva-se para receber atualizacoes exclusivas.",
    footer_email_placeholder: "Seu endereco de email",
    footer_subscribe: "INSCREVER",
    footer_thank_you: "OBRIGADO!",
    footer_copyright: "2026 Isolele. Todos os direitos reservados. Uma iniciativa We Love Congo.",
    footer_press: "Imprensa",
    footer_careers: "Carreiras",
    footer_contact: "Contate-nos",
    footer_faq: "FAQ",
    footer_terms: "Termos de Uso",
    footer_privacy: "Politica de Privacidade",
    shop_title: "LOJA",
    shop_subtitle: "Descubra nossa colecao de quadrinhos e produtos",
    shop_add_to_cart: "Adicionar ao Carrinho",
    shop_buy_now: "Comprar Agora",
    shop_price: "Preco",
    shop_sale: "Promocao",
    shop_new: "Novo",
    shop_bestseller: "Mais Vendido",
    cart_title: "Seu Carrinho",
    cart_empty: "Seu carrinho esta vazio",
    cart_subtotal: "Subtotal",
    cart_shipping: "Frete",
    cart_total: "Total",
    cart_checkout: "Finalizar Compra",
    cart_continue_shopping: "Continuar Comprando",
    cart_remove: "Remover",
    cart_quantity: "Quantidade",
    payment_title: "Pagamento",
    payment_card: "Cartao de Credito",
    payment_google_pay: "Google Pay",
    payment_card_number: "Numero do Cartao",
    payment_expiry: "Data de Validade",
    payment_cvv: "CVV",
    payment_name: "Nome no Cartao",
    payment_email: "Endereco de Email",
    payment_confirm: "Confirmar Pagamento",
    payment_success: "Pagamento Realizado!",
    payment_receipt_sent: "Recibo enviado para seu email",
    about_title: "SOBRE ISOLELE",
    about_what_is: "O que e ISOLELE?",
    about_vision_title: "A VISAO",
    about_vision_desc: "Restaurar a Africa como centro do mito, magia e poder.",
    about_pillars_title: "Os Quatro Pilares de Isolele",
    about_pillar1_title: "Um Universo Mitologico",
    about_pillar1_desc: "Um vasto mundo interconectado inspirado em reinos africanos reais.",
    about_pillar2_title: "Um Movimento de Publicacao e Midia",
    about_pillar2_desc: "De quadrinhos a romances, animacoes, jogos e mundos cinematograficos.",
    about_pillar3_title: "Uma Renovacao Cultural",
    about_pillar3_desc: "Isolele faz parte de um renascimento maior.",
    about_pillar4_title: "Um Motor de Legado",
    about_pillar4_desc: "Cada crianca que le Isolele descobrira super-herois que se parecem com ela.",
    founder_title: "O FUNDADOR",
    founder_name: "H.R.M King Kufulula",
    founder_role: "Fundador e Criador do Universo Isolele",
    founder_bio: "O visionario por tras de Isolele.",
    language: "Idioma",
    theme: "Tema",
    discover: "Descobrir",
    latestNews: "Ultimas Noticias",
    loading: "Carregando...",
    error: "Erro",
    success: "Sucesso",
    cancel: "Cancelar",
    save: "Salvar",
    edit: "Editar",
    delete: "Excluir",
    search: "Buscar",
    search_placeholder: "Buscar...",
    view_all: "Ver Todos",
    learn_more: "Saiba Mais",
    back: "Voltar",
    next: "Proximo",
    previous: "Anterior",
    site_map: "Mapa do site",
    accessibility: "Acessibilidade",
    cookie_settings: "Configuracoes de cookies",
    footer_thank_you: "Obrigado!",
  },
  
  es: {
    nav_home: "Inicio",
    nav_about: "Acerca de",
    nav_founder: "Fundador",
    nav_news: "Noticias Comics",
    nav_characters: "Personajes",
    nav_shop: "Tienda",
    nav_supporters: "Seguidores",
    nav_contact: "Contacto",
    nav_games: "Juegos",
    nav_all_characters: "Todos los Personajes",
    nav_become_supporter: "Convertirse en Seguidor",
    nav_partners: "Socios",
    nav_restaurant: "Restaurante Asociado",
    hero_title: "ZAIIRE - PRINCIPE DEL KONGO",
    hero_subtitle: "El Collar del Destino",
    hero_description: "Una aventura emocionante y edificante que hace eco del espiritu de El Rey Leon y Pantera Negra, ofreciendo a los jovenes lectores una celebracion de la herencia, el coraje y el autodescubrimiento.",
    hero_buy_now: "COMPRAR AHORA",
    hero_discover: "DESCUBRIR LA HISTORIA",
    hero_preorder: "Pre-orden",
    hero_launch_price: "Precio de lanzamiento",
    universe_title: "EL UNIVERSO ISOLELE",
    universe_subtitle: "Los Elegidos",
    universe_description: "Isolele es un universo visionario nacido para restaurar el alma de la narrativa africana - un imperio mitologico donde los Superheroes son elegidos por el destino.",
    universe_destiny_title: "El Destino no es una Eleccion",
    universe_destiny_desc: "Es un Llamado. Cada personaje es convocado por linajes sanguineos, espiritus antiguos e historias inconclusas de sus ancestros.",
    universe_heritage_title: "Los Linajes Reales Portan Poder Antiguo",
    universe_heritage_desc: "La sangre real lleva la memoria y el poder de reinos olvidados, esperando ser despertados por los elegidos.",
    universe_resurrection_title: "Los Espiritus Ancestrales Nunca Mueren",
    universe_resurrection_desc: "Africa nunca fue impotente. La profecia ha regresado, y con ella, la resurreccion de mitos enterrados.",
    characters_title: "LOS ELEGIDOS",
    characters_subtitle: "Conoce a los heroes, leyendas y guardianes del Universo Isolele",
    characters_discover: "DESCUBRIR",
    characters_zaire_title: "Principe del Kongo",
    characters_zaire_desc: "Hijo del trueno y la realeza, elegido por el Collar del Destino.",
    characters_kimoya_title: "La Kandake Renacida",
    characters_kimoya_desc: "Heredera de las reinas guerreras, cazadora de sombras.",
    characters_zattar_title: "El Arquitecto de Sangre",
    characters_zattar_desc: "Genio maldito de la tecnologia prohibida.",
    characters_twins_title: "Profetas Huerfanos",
    characters_twins_desc: "Huerfanos profetas que hablan con rios y estrellas.",
    characters_imvula_title: "Reina de Stormglass",
    characters_imvula_desc: "Soberana de Stormglass, guardiana de las Bestias del Cielo.",
    news_title: "ULTIMAS NOTICIAS",
    news_read_more: "LEER ARTICULO",
    news_minutes_read: "min de lectura",
    news_published: "Publicado",
    cta_title: "UNETE A LA LEYENDA",
    cta_description: "Se parte de un universo de comics revolucionario que celebra la herencia africana mientras inspira a la proxima generacion de superheroes.",
    cta_explore: "EXPLORAR EL UNIVERSO",
    cta_newsletter: "SUSCRIBIRSE AL BOLETIN",
    footer_description: "Isolele es un universo visionario nacido para restaurar el alma de la narrativa africana.",
    footer_explore: "EXPLORAR",
    footer_resources: "RECURSOS",
    footer_newsletter_title: "MANTENTE INFORMADO",
    footer_newsletter_desc: "Suscribete para recibir actualizaciones exclusivas.",
    footer_email_placeholder: "Tu direccion de email",
    footer_subscribe: "SUSCRIBIRSE",
    footer_thank_you: "GRACIAS!",
    footer_copyright: "2026 Isolele. Todos los derechos reservados. Una iniciativa We Love Congo.",
    footer_press: "Prensa",
    footer_careers: "Carreras",
    footer_contact: "Contactanos",
    footer_faq: "FAQ",
    footer_terms: "Terminos de Uso",
    footer_privacy: "Politica de Privacidad",
    shop_title: "TIENDA",
    shop_subtitle: "Descubre nuestra coleccion de comics y productos",
    shop_add_to_cart: "Anadir al Carrito",
    shop_buy_now: "Comprar Ahora",
    shop_price: "Precio",
    shop_sale: "Oferta",
    shop_new: "Nuevo",
    shop_bestseller: "Mas Vendido",
    cart_title: "Tu Carrito",
    cart_empty: "Tu carrito esta vacio",
    cart_subtotal: "Subtotal",
    cart_shipping: "Envio",
    cart_total: "Total",
    cart_checkout: "Pagar",
    cart_continue_shopping: "Seguir Comprando",
    cart_remove: "Eliminar",
    cart_quantity: "Cantidad",
    payment_title: "Pago",
    payment_card: "Tarjeta de Credito",
    payment_google_pay: "Google Pay",
    payment_card_number: "Numero de Tarjeta",
    payment_expiry: "Fecha de Vencimiento",
    payment_cvv: "CVV",
    payment_name: "Nombre en la Tarjeta",
    payment_email: "Direccion de Email",
    payment_confirm: "Confirmar Pago",
    payment_success: "Pago Exitoso!",
    payment_receipt_sent: "Recibo enviado a tu email",
    about_title: "ACERCA DE ISOLELE",
    about_what_is: "Que es ISOLELE?",
    about_vision_title: "LA VISION",
    about_vision_desc: "Restaurar Africa como centro del mito, la magia y el poder.",
    about_pillars_title: "Los Cuatro Pilares de Isolele",
    about_pillar1_title: "Un Universo Mitologico",
    about_pillar1_desc: "Un vasto mundo interconectado inspirado en reinos africanos reales.",
    about_pillar2_title: "Un Movimiento de Publicacion y Medios",
    about_pillar2_desc: "De comics a novelas, animaciones, juegos y mundos cinematograficos.",
    about_pillar3_title: "Una Renovacion Cultural",
    about_pillar3_desc: "Isolele es parte de un renacimiento mayor.",
    about_pillar4_title: "Un Motor de Legado",
    about_pillar4_desc: "Cada nino que lee Isolele descubrira superheroes que se parecen a el.",
    founder_title: "EL FUNDADOR",
    founder_name: "H.R.M King Kufulula",
    founder_role: "Fundador y Creador del Universo Isolele",
    founder_bio: "El visionario detras de Isolele.",
    language: "Idioma",
    theme: "Tema",
    discover: "Descubrir",
    latestNews: "Ultimas Noticias",
    loading: "Cargando...",
    error: "Error",
    success: "Exito",
    cancel: "Cancelar",
    save: "Guardar",
    edit: "Editar",
    delete: "Eliminar",
    search: "Buscar",
    search_placeholder: "Buscar...",
    view_all: "Ver Todo",
    learn_more: "Saber Mas",
    back: "Atras",
    next: "Siguiente",
    previous: "Anterior",
    site_map: "Mapa del sitio",
    accessibility: "Accesibilidad",
    cookie_settings: "Configuracion de cookies",
    footer_thank_you: "¡Gracias!",
  },
  
  zu: {
    nav_home: "Ikhaya",
    nav_about: "Mayelana",
    nav_founder: "Umsunguli",
    nav_news: "Izindaba",
    nav_characters: "Abalingiswa",
    nav_shop: "Isitolo",
    nav_supporters: "Abasekeli",
    nav_contact: "Xhumana",
    nav_all_characters: "Bonke Abalingiswa",
    nav_become_supporter: "Yiba Umsekeli",
    nav_partners: "Abahlanganyeli",
    nav_restaurant: "Indawo Yokudla",
    hero_title: "ZAIIRE - INKOSANA YAKONGO",
    hero_subtitle: "Umgexo Wesiphetho",
    hero_description: "Uhambo olumnandi olugcwele amandla elenza echo yomoya weNkosi yeZilwane nePanther Emnyama.",
    hero_buy_now: "THENGA MANJE",
    hero_discover: "THOLA INDABA",
    hero_preorder: "Oda kuqala",
    hero_launch_price: "Intengo yokuqala",
    universe_title: "UMHLABA WEISOLELE",
    universe_subtitle: "Abakhethiwe",
    universe_description: "I-Isolele umhlaba obonayo owazalwa ukubuyisela umphefumulo wendaba yase-Afrika.",
    universe_destiny_title: "Isiphetho Akukhona Ukukhetha",
    universe_destiny_desc: "Yimbizo. Umlingiswa ngamunye ubizwa ngezizukulwane zegazi.",
    universe_heritage_title: "Izinzalo Zobukhosi Ziphethe Amandla Asendulo",
    universe_heritage_desc: "Igazi lobukhosi lithwala inkumbulo namandla emibuso ekhohlakele.",
    universe_resurrection_title: "Imimoya Yamadlozi Ayifi Naphakade",
    universe_resurrection_desc: "I-Afrika ayikaze ingabi namandla. Isiprofetho sibuyile.",
    characters_title: "ABAKHETHIWE",
    characters_subtitle: "Hlangana namaqhawe, izinganekwane nabalindi",
    characters_discover: "THOLA",
    characters_zaire_title: "Inkosana YaKongo",
    characters_zaire_desc: "Indodana yezulu nobukhosi, ekhethwe nguMgexo Wesiphetho.",
    characters_kimoya_title: "IKandake Ezalwe Kabusha",
    characters_kimoya_desc: "Indlalifa yamakhosikazi ahlasela.",
    characters_zattar_title: "Umakhi Wegazi",
    characters_zattar_desc: "Isiphiwo esiqalekisiwe sobuchwepheshe obuvaliwe.",
    characters_twins_title: "Abaprofethi Izintandane",
    characters_twins_desc: "Izintandane abaprofethi abakhuluma nemifula nezinkanyezi.",
    characters_imvula_title: "INdlovukazi YaseStormglass",
    characters_imvula_desc: "Umbusi waseStormglass, umgcini weZilo Zasezulwini.",
    news_title: "IZINDABA ZAKAMUVA",
    news_read_more: "FUNDA ISIHLOKO",
    news_minutes_read: "imizuzu yokufunda",
    news_published: "Kushicilelwe",
    cta_title: "JOYINA INGANEKWANE",
    cta_description: "Yiba ingxenye yomhlaba wama-comic oguqulayo ogubha ifa lase-Afrika.",
    cta_explore: "HLOLA UMHLABA",
    cta_newsletter: "BHALISA IZINDABA",
    footer_description: "I-Isolele umhlaba obonayo owazalwa ukubuyisela umphefumulo wendaba yase-Afrika.",
    footer_explore: "HLOLA",
    footer_resources: "IZINSIZA",
    footer_newsletter_title: "HLALA WAZI",
    footer_newsletter_desc: "Bhalisa ukuthola izibuyekezo ezikhethekile.",
    footer_email_placeholder: "Ikheli lakho le-imeyili",
    footer_subscribe: "BHALISA",
    footer_thank_you: "NGIYABONGA!",
    footer_copyright: "2026 Isolele. Wonke amalungelo agodliwe. Umsebenzi WeWe Love Congo.",
    footer_press: "Abezindaba",
    footer_careers: "Imisebenzi",
    footer_contact: "Xhumana Nathi",
    footer_faq: "FAQ",
    footer_terms: "Imigomo",
    footer_privacy: "Inqubomgomo",
    shop_title: "ISITOLO",
    shop_subtitle: "Thola iqoqo lethu",
    shop_add_to_cart: "Faka Ebhasikidini",
    shop_buy_now: "Thenga Manje",
    shop_price: "Intengo",
    shop_sale: "Ukuthengisa",
    shop_new: "Okusha",
    shop_bestseller: "Okuthengiswa Kakhulu",
    cart_title: "Ibhasikidi Lakho",
    cart_empty: "Ibhasikidi lakho alinalutho",
    cart_subtotal: "Ingxenye Yenani",
    cart_shipping: "Ukuthunyelwa",
    cart_total: "Isamba",
    cart_checkout: "Khokha",
    cart_continue_shopping: "Qhubeka Uthenga",
    cart_remove: "Susa",
    cart_quantity: "Inani",
    payment_title: "Ukukhokha",
    payment_card: "Ikhadi Lesikweletu",
    payment_google_pay: "Google Pay",
    payment_card_number: "Inombolo Yekhadi",
    payment_expiry: "Usuku Lokuphelelwa",
    payment_cvv: "CVV",
    payment_name: "Igama Elikhekhadi",
    payment_email: "Ikheli Le-imeyili",
    payment_confirm: "Qinisekisa Ukukhokha",
    payment_success: "Ukukhokha Kuphumelele!",
    payment_receipt_sent: "Irisidi ithunyelwe ku-imeyili yakho",
    about_title: "MAYELANA NE-ISOLELE",
    about_what_is: "Yini I-ISOLELE?",
    about_vision_title: "UMBONO",
    about_vision_desc: "Buyisela i-Afrika njengobukhona benganekwane, umlingo namandla.",
    about_pillars_title: "Izinsika Ezine ze-Isolele",
    about_pillar1_title: "Umhlaba Wenganekwane",
    about_pillar1_desc: "Umhlaba omkhulu oxhumene ogqugquzelwa yimibuso yase-Afrika yangempela.",
    about_pillar2_title: "Ukunyakaza Kokushicilela",
    about_pillar2_desc: "Kusuka kuma-comic kuya emanovelini, ama-animation, imidlalo nezwe zefilimu.",
    about_pillar3_title: "Ukuvuselelwa Kwamasiko",
    about_pillar3_desc: "I-Isolele iyingxenye yokuvuselelwa okukhulu.",
    about_pillar4_title: "Injini Yefa",
    about_pillar4_desc: "Ngane ngayinye efunda i-Isolele izothola ama-superhero afana nayo.",
    founder_title: "UMSUNGULI",
    founder_name: "H.R.M King Kufulula",
    founder_role: "Umsunguli noMdali woMhlaba we-Isolele",
    founder_bio: "Obonayo ngemuva kwe-Isolele.",
    loading: "Iyalayisha...",
    error: "Iphutha",
    success: "Impumelelo",
    cancel: "Khansela",
    save: "Gcina",
    edit: "Hlela",
    delete: "Susa",
    search: "Sesha",
    search_placeholder: "Sesha...",
    view_all: "Buka Konke",
    learn_more: "Funda Kabanzi",
    back: "Emuva",
    next: "Okulandelayo",
    previous: "Okwangaphambili",
    site_map: "Ibalazwe Lesayithi",
    accessibility: "Ukufinyelela",
    cookie_settings: "Izilungiselelo Zamakhukhi",
  },
  
  xh: {
    nav_home: "Ikhaya",
    nav_about: "Malunga",
    nav_founder: "Umseki",
    nav_news: "Iindaba",
    nav_characters: "Abalinganiswa",
    nav_shop: "Ivenkile",
    nav_supporters: "Abaxhasi",
    nav_contact: "Qhagamshelana",
    nav_all_characters: "Bonke Abalinganiswa",
    nav_become_supporter: "Yiba Ngumxhasi",
    nav_partners: "Amahlakani",
    nav_restaurant: "Indawo Yokutya",
    hero_title: "ZAIIRE - INKOSANA YAKONGO",
    hero_subtitle: "Umxholo Wesiphelo",
    hero_description: "Uhambo olumnandi olugcwele amandla.",
    hero_buy_now: "THENGA NGOKU",
    hero_discover: "FUMANA IBALI",
    hero_preorder: "Odola kuqala",
    hero_launch_price: "Ixabiso lokuqala",
    universe_title: "INDALO YEISOLELE",
    universe_subtitle: "Abanyuliweyo",
    universe_description: "I-Isolele yindalo ebonayo eyazalwa ukubuyisela umphefumlo webali lase-Afrika.",
    universe_destiny_title: "Isiphelo Ayikokukhetha",
    universe_destiny_desc: "Yimbizo. Umlinganiswa ngamnye ubizwa ngezizukulwane zegazi.",
    universe_heritage_title: "Iinzalo Zobukhosi Zithwele Amandla Akudala",
    universe_heritage_desc: "Igazi lobukhosi lithwele inkumbulo namandla emibuso elibaliweyo.",
    universe_resurrection_title: "Imimoya Yookhokho Ayifi Naphakade",
    universe_resurrection_desc: "I-Afrika ayizange ingabi namandla. Isiprofeto sibuyile.",
    characters_title: "ABANYULIWEYO",
    characters_subtitle: "Hlangana namaqhawe neentsomi",
    characters_discover: "FUMANA",
    characters_zaire_title: "Inkosana YaKongo",
    characters_zaire_desc: "Unyana weendudumo nobukhosi.",
    characters_kimoya_title: "IKandake Ezalwe Kwakhona",
    characters_kimoya_desc: "Indlalifa yamakhosikazi asilwayo.",
    characters_zattar_title: "Umakhi Wegazi",
    characters_zattar_desc: "Isiphiwo esiqalekisiweyo sobuchwepheshe obuvaliweyo.",
    characters_twins_title: "Abaprofeti Iinkedama",
    characters_twins_desc: "Iinkedama abaprofeti abathetha nemilamba neenkwenkwezi.",
    characters_imvula_title: "UKumkanikazi waseStormglass",
    characters_imvula_desc: "Umlawuli waseStormglass, umgcini weZilwanyana Zasezulwini.",
    news_title: "IINDABA ZAMVA",
    news_read_more: "FUNDA INQAKU",
    news_minutes_read: "imizuzu yokufunda",
    news_published: "Ipapashiwe",
    cta_title: "JOYINA INTSOMI",
    cta_description: "Yiba yinxalenye yehlabathi lekomiki eguqulayo.",
    cta_explore: "PHONONONGA INDALO",
    cta_newsletter: "BHALISA IINDABA",
    footer_description: "I-Isolele yindalo ebonayo ukubuyisela umphefumlo webali lase-Afrika.",
    footer_explore: "PHONONONGA",
    footer_resources: "IZIXHOBO",
    footer_newsletter_title: "HLALA USAZI",
    footer_newsletter_desc: "Bhalisa ukufumana izibuyekezo ezikhethekileyo.",
    footer_email_placeholder: "Idilesi yakho ye-imeyile",
    footer_subscribe: "BHALISA",
    footer_thank_you: "ASANTE!",
    footer_copyright: "2026 Isolele. Onke amalungelo agciniwe. Umsebenzi WeWe Love Congo.",
    footer_press: "Abamajelo eendaba",
    footer_careers: "Imisebenzi",
    footer_contact: "Qhagamshelana Nathi",
    footer_faq: "FAQ",
    footer_terms: "Imimmiselo",
    footer_privacy: "Imigaqo-nkqubo",
    shop_title: "IVENKILE",
    shop_subtitle: "Fumana iqoqo lethu",
    shop_add_to_cart: "Faka Ebhasikidini",
    shop_buy_now: "Thenga Ngoku",
    shop_price: "Ixabiso",
    shop_sale: "Ukuthengisa",
    shop_new: "Okutsha",
    shop_bestseller: "Okuthengiswa Kakhulu",
    cart_title: "Ibhasikidi Yakho",
    cart_empty: "Ibhasikidi yakho ayinanto",
    cart_subtotal: "Inxalenye Yexabiso",
    cart_shipping: "Ukuthunyelwa",
    cart_total: "Isixa",
    cart_checkout: "Hlawula",
    cart_continue_shopping: "Qhubeka Uthenga",
    cart_remove: "Susa",
    cart_quantity: "Ubungakanani",
    payment_title: "Intlawulo",
    payment_card: "Ikhadi Letyala",
    payment_google_pay: "Google Pay",
    payment_card_number: "Inombolo Yekhadi",
    payment_expiry: "Umhla Wokuphelelwa",
    payment_cvv: "CVV",
    payment_name: "Igama Elikhekhadi",
    payment_email: "Idilesi Ye-imeyile",
    payment_confirm: "Qinisekisa Intlawulo",
    payment_success: "Intlawulo Iphumelele!",
    payment_receipt_sent: "Irisithi ithunyelwe kwi-imeyile yakho",
    about_title: "MALUNGA NE-ISOLELE",
    about_what_is: "Yintoni I-ISOLELE?",
    about_vision_title: "UMBONO",
    about_vision_desc: "Buyisela i-Afrika njengombindi wentsomi, umlingo namandla.",
    about_pillars_title: "Iintsika Ezine ze-Isolele",
    about_pillar1_title: "Indalo Yentsomi",
    about_pillar1_desc: "Ihlabathi elikhulu elidibanisiweyo eligqugquzelwe yimibuso yase-Afrika yokwenyani.",
    about_pillar2_title: "Intshukumo Yokupapasha",
    about_pillar2_desc: "Ukusuka kwikomiki ukuya kwinoveli, ii-animation, imidlalo nehlabathi lefilimu.",
    about_pillar3_title: "Uhlaziyeko Lwenkcubeko",
    about_pillar3_desc: "I-Isolele yinxalenye yohlaziyeko olukhulu.",
    about_pillar4_title: "Injini Yelifa",
    about_pillar4_desc: "Umntwana ngamnye ofunda i-Isolele uza kufumana ii-superhero ezifana naye.",
    founder_title: "UMSEKI",
    founder_name: "H.R.M King Kufulula",
    founder_role: "Umseki noMdali weNdalo ye-Isolele",
    founder_bio: "Obonayo ngasemva kwe-Isolele.",
    language: "Ulwimi",
    theme: "Intetho",
    discover: "Fumana",
    latestNews: "Iindaba Zakamuva",
    loading: "Iyalayisha...",
    error: "Impazamo",
    success: "Impumelelo",
    cancel: "Rhoxisa",
    save: "Gcina",
    edit: "Hlela",
    delete: "Cima",
    search: "Khangela",
    search_placeholder: "Khangela...",
    view_all: "Bona Konke",
    learn_more: "Funda Ngakumbi",
    back: "Emva",
    next: "Okulandelayo",
    previous: "Okwangaphambili",
    site_map: "Imephu Yesiza",
    accessibility: "Ukufikelela",
    cookie_settings: "Iisetingi Zeekhukhi",
    footer_thank_you: "Enkosi!",
  },
  
  sw: {
    // Navigation
    nav_home: "Nyumbani",
    nav_about: "Kuhusu",
    nav_founder: "Mwanzilishi",
    nav_news: "Habari za Katuni",
    nav_characters: "Wahusika",
    nav_shop: "Duka",
    nav_supporters: "Wafuasi",
    nav_contact: "Wasiliana",
    nav_games: "Michezo",
    nav_all_characters: "Wahusika Wote",
    nav_become_supporter: "Kuwa Mfuasi",
    nav_partners: "Washirika",
    nav_restaurant: "Mkahawa Mshirika",
    nav_fashion: "Mitindo",
    nav_settings: "Mipangilio",
    
    // Hero Section
    hero_title: "ZAÏRE - MKUU WA KONGO",
    hero_subtitle: "Mkufu wa Hatima",
    hero_description: "Safari ya kusisimua yenye nguvu inayoakisi roho ya Simba Mfalme na Black Panther, wakati wa kujiuliza watoto wageni ujifunze urithi, ujasiri na kujitambua.",
    hero_buy_now: "NUNUA SASA",
    hero_discover: "GUNDUA HADITHI",
    hero_preorder: "Agiza Mapema",
    hero_launch_price: "Bei ya Uzinduzi",
    
    // Book Slides
    book_welcome_tag: "KARIBU KWA ISOLELE",
    book_chosen_ones_title: "WACHAGUZI",
    book_chosen_ones_subtitle: "Ulimwengu mzima umzaliwa kutoka kwenye mizizi ya Kongo...",
    book_chosen_ones_desc: "Isolele ni ulimwengu wenye mawazo umzaliwa kurudisha roho ya hadithi za Kiafrika, nchi ya hadithi ambapo wabunga wakamatwa na bahati, falme hazisahauliwi, na nguvu za wazazi ziko hai katika kila ukurasa, kila kauli ya kaida, kila vita. Kila mtoto anayesoma Isolele atakuta wabunga wanaofanana naye, wanazungumza lugha yake, wanalinda ardhi yake, na kuheshimu wazazi wake. Hii ni kwa kizazi kinachofuata cha wafalme, wafalme, wapiganaji, wajenzi, na wazazi wa hadithi.",
    book_explore_universe: "GUNDUA ULIMWENGU",

    book_makanda_tag: "UKOO WA MAKANDA — KITABU I",
    book_makanda_title: "MAKANDA",
    book_makanda_subtitle: "Nchi Yenye Nguvu Zaidi Tangu Ensi Haikupotea. Ilijificha Kwa Makusudi.",
    book_makanda_desc: "Katikati ya Afrika ya Kati kulikuwa na tamaduni ulimwengu ulihifadhiwa asiwe najua. Iliyoamkia kiroho. Iliyoendelea kwa teknolojia. Iliyolindwa na Moto Mtakatifu. Wakati Nguvu za Nje zikaja kwa nini lilikuwa lao, Makanda hawakukufa. Walianguka. Jiji lao halilipotea. Ilikuwa ikingoja yule ambaye alizaliwa kuuzisha Moto tena.",
    book_discover_makanda: "GUNDUA MAKANDA",

    book_bambula_tag: "BAMBULA: MTOTO WA RITMU",
    book_bambula_title: "BAMBULA",
    book_bambula_subtitle: "SURA I · NGOMA MTAKATIFU",
    book_bambula_desc: "Kabla ya maneno, kulikuwa na ritmu. Bambula alikuwa mtoto aliyesikia kila kitu. Wakati ngoma zilichukuliwa na ardhi ikatulia, akaendelea na ritmu ndani yake. Akiwa na ngoma mtakatifu, anatembea kati ya ulimwengu wa roho na wahai. Hajapigania kufa. Analinda kuanzia.",
    book_discover_bambula: "GUNDUA BAMBULA",

    book_mokele_tag: "MOKELE: UMZALIWA KATIKA KUPINGA",
    book_mokele_title: "MOKELE",
    book_mokele_subtitle: "Kutoka Mtoto hadi Bwana wa Kinshasa",
    book_mokele_desc: "Mokele hajazaliwa mkuu. Anazaliwa katika kupinga. Barabara za Kinshasa zina mufti kabla shule inaweza, mahali ambapo kuaminiana ni laini, vurugu ni kawaida, na kuokoa ni kila kitu. Kutoka mtoto hadi mlipuko hadi bwana. Anajenga nguvu, pesa, na heshima. Kinshasa, mtu yeyote akula... au unakuwa mbu.",
    book_discover_mokele: "GUNDUA MOKELE",

    book_zaiire_tag: "ZAÏRE: MKUU WA KONGO",
    book_zaiire_title: "MKUU WA KONGO",
    book_zaiire_subtitle: "Mkufu wa Hatima",
    book_zaiire_desc: "Kuweka katikati ya Nchi ya Kongo, Mkufu wa Hatima haikutengenezwa kuwa kilvatu. Ilitengenezwa kuchagua. Ilipita katika karne za moto, vita, na kimya, inauzisha roho ya kila mkuu aliyeharisha kwa watu wake na kila malkia aliyeweka dunia yote kwa mikono tupu. Wakati inapata Zaïre, hiyo hailangiki. Itakamka.",
    book_discover_zaiire: "GUNDUA ZAÏRE",

    book_kufu_tag: "KUFU: MCHEZO WA TAAJ",
    book_kufu_title: "KUFU",
    book_kufu_subtitle: "MCHEZO WA RASMI WA ULIMWENGU WA ISOLELE",
    book_kufu_desc: "Hii sio tu mchezo wa kadi. Ni sherehe. Kwa pamoja na wapiganaji wako. Jenga nchi yako. Shangia kila mpinzani katika meza. Lakini kuishi taaj kuna njia moja tu ya kushinda. Lazima kuinua sauti yako na kusema jina la mkuu kwa sauti. Kisha mtu akavweka kapu juu ya kichwa chako. Sio kwa mkono wako. Kwa mkono wa mtu mwingine. Kwa sababu mkuu wa kweli hakuishi peke yake. Kufu ni mahali ambapo ukoo wa Kiafrika unakuwa kitu unakirasa kwa mikono yako, kusikia kwa sauti yako, na kuuvaa kuzunguka shingo yako. Kila mchezo ni sherehe ya taaj. Kila mshindi ni mkuu.",
    book_explore_game: "GUNDUA MCHEZO",

    book_amara_tag: "AMARA: MALKIA WA BAHARI",
    book_amara_title: "AMARA",
    book_amara_subtitle: "SURA I · MALKIA WA WAPICHA WA AMAZON",
    book_amara_desc: "Kila picha anachohesabu bahari. Amara inamiliki. Anaweza kuwa Malkia wa Bahari. Mkapteni anachokamatwa zaidi katika kila maji ya ulimwengu. Hakuna meli iliyomshinda. Hakuna mkuu aliyemshinda kwa hila. Hakuna jeshi lililo zidisha jeshi lake. Lakini Amara hatembei peke yake. Kwa upande wake kuna wanawake wanne wamuunganisha kwa damu, kuaminiana na kaida. Wafalme watano wa bahari wanayobeba nguvu itayumba kila taaj lililo kiganja. Kutoka kwa kuunganisha kwao ukoo wa Agojie unazaliwa. Na kutoka ukoo hilo wafalme watano wa kike wanatakuja kuzabuni mwendo wa tarehe ya Kiafrika kwa milele. Hii sio hadithi ya wapicha tu. Hii ni mahali ambapo ukoo mkuu wa kike wa ulimwengu wa ISOLELE unaanza.",
    book_discover_amara: "GUNDUA AMARA",

    book_zattar_tag: "ZATTAR: MKUU WA ULIMWENGU",
    book_zattar_title: "ZATTAR",
    book_zattar_subtitle: "Mkamata wa Taaj",
    book_zattar_desc: "Wakati Hatimaye Ilikataa Nchi Moja, Alifanya Maamuzi ya Kuchukua Zote Zote. Mkuu Zattar alizaliwa kurithi taaj ya Bapindi. Lakini wakati Babu walichagua nyingine, kitu kila Zattar habakufa. Ilianza. Anasoma Vita vya Kwanza na Vya Pili vya Vegas, hadithi za uharibifu ambazo zilitikisa ulimwengu kabla ajazaliwa. Mahali ambapo wengine walijua onyo, Zattar alijua ramani. Alianza Vita vya Tatu vya Vegas. Sio kwa wazimu. Sio kwa maumivu. Lakini kwa sababu alitazama ulimwengu mzima na kwankuanzia hitimisho: Inamjua mtu. Na yule mtu ni Zattar. Hakuchaguliwa. Kwa hiyo akachagua ulimwengu badala yake.",
    book_discover_zattar: "GUNDUA ZATTAR",

    book_zaiko_tag: "ZAÏKO: MKUU WA MWISHO WA BARABARA ZA KIVUS",
    book_zaiko_title: "HADITHI YA ZAÏKO",
    book_zaiko_subtitle: "Hakuja Kutoka Barabara. Aliziegeuzilia.",
    book_zaiko_desc: "Umzaliwa Kaskazini mwa Kivu. Kutengana Kinshasa. Zaïko alikuwa hajafanikiwa kuokoa. Lakini kuokoa hakuwa wa kutosha. Katika ulimwengu unaotawaliwa na nguvu, pesa, na woga, anakuja kutoka wala kitu. Sio kama mbinguni. Lakini kama nguvu. Na kwa ndugu wake, anajenga nchi inayoachokamatwa zaidi Kivus inayofahamika. Hakuna taaj iliyotolewa. Hakuna kaida iliyoandikwa. Kila kitu kilichukuwa.",
    book_discover_zaiko: "GUNDUA ZAÏKO",
    
    // Universe Section
    universe_title: "ULIMWENGU WA ISOLELE",
    universe_subtitle: "Waliochaguliwa",
    universe_description: "Isolele ni ulimwengu wa maono uliozaliwa kurudisha roho ya hadithi za Kiafrika.",
    universe_destiny_title: "Hatima Si Chaguo",
    universe_destiny_desc: "Ni Wito. Kila mhusika anaitwa na ukoo wa damu, roho za zamani na hadithi ambazo hazijamalizika.",
    universe_heritage_title: "Ukoo wa Kifalme Ubeba Nguvu za Zamani",
    universe_heritage_desc: "Damu ya kifalme inabeba kumbukumbu na nguvu ya falme zilizosahauliwa.",
    universe_resurrection_title: "Roho za Mababu Hazifi Kamwe",
    universe_resurrection_desc: "Afrika haikuwa dhaifu kamwe. Unabii umerudi, na nao, ufufuo wa hadithi zilizozikwa.",
    characters_title: "WALIOCHAGULIWA",
    characters_subtitle: "Kutana na mashujaa, hadithi na walinzi wa Ulimwengu wa Isolele",
    characters_discover: "GUNDUA",
    characters_zaire_title: "Mwana wa Mfalme wa Kongo",
    characters_zaire_desc: "Mwana wa radi na ufalme, aliyechaguliwa na Mkufu wa Hatima.",
    characters_kimoya_title: "Kandake Aliyezaliwa Upya",
    characters_kimoya_desc: "Mrithi wa malkia wapiganaji, mwindaji wa kivuli.",
    characters_zattar_title: "Mbunifu wa Damu",
    characters_zattar_desc: "Kipaji kilicholaaniwa cha teknolojia iliyokatazwa.",
    characters_twins_title: "Manabii Yatima",
    characters_twins_desc: "Yatima manabii wanaozungumza na mito na nyota.",
    characters_imvula_title: "Malkia wa Stormglass",
    characters_imvula_desc: "Mtawala wa Stormglass, mlinzi wa Wanyama wa Anga.",
    news_title: "HABARI ZA KARIBUNI",
    news_read_more: "SOMA MAKALA",
    news_minutes_read: "dakika za kusoma",
    news_published: "Imechapishwa",
    
    // CTA Section
    cta_title: "JIUNGE NA HADITHI",
    cta_join_legend: "JIUNGE NA HADITHI",
    cta_description: "Kuwa sehemu ya ulimwengu wa katuni unaobadilisha unaosherehekea urithi wa Kiafrika.",
    cta_explore: "GUNDUA ULIMWENGU",
    cta_newsletter: "JIANDIKISHE KWA HABARI",
    
    // Footer
    footer_description: "Isolele ni ulimwengu wa mawazo umzaliwa kurudisha roho ya hadithi za Kiafrika.",
    footer_explore: "GUNDUA",
    footer_resources: "RASILIMALI",
    footer_newsletter_title: "KUWA MJIFUNZE",
    footer_newsletter_desc: "Jiandikishe kupokea habari za kipekee kuhusu uzinduzi mpya, matangazo, na bia maalum.",
    footer_email_placeholder: "Anwani yako ya barua pepe",
    footer_subscribe: "JIANDIKISHE",
    footer_thank_you: "ASANTE!",
    footer_copyright: "© 2026 Isolele. Haki zote zimehifadhiwa. Mpango wa We Love Congo.",
    footer_press: "Vyombo vya habari",
    footer_careers: "Kazi",
    footer_contact: "Wasiliana Nasi",
    footer_faq: "FAQ",
    footer_terms: "Masharti ya Matumizi",
    footer_privacy: "Sera ya Faragha",
    shop_title: "DUKA",
    shop_subtitle: "Gundua mkusanyiko wetu wa katuni na bidhaa",
    shop_add_to_cart: "Ongeza kwenye Kikapu",
    shop_buy_now: "Nunua Sasa",
    shop_price: "Bei",
    shop_sale: "Punguzo",
    shop_new: "Mpya",
    shop_bestseller: "Inayouzwa Zaidi",
    cart_title: "Kikapu Chako",
    cart_empty: "Kikapu chako hakina kitu",
    cart_subtotal: "Jumla Ndogo",
    cart_shipping: "Usafirishaji",
    cart_total: "Jumla",
    cart_checkout: "Lipia",
    cart_continue_shopping: "Endelea Kununua",
    cart_remove: "Ondoa",
    cart_quantity: "Kiasi",
    payment_title: "Malipo",
    payment_card: "Kadi ya Mkopo",
    payment_google_pay: "Google Pay",
    payment_card_number: "Nambari ya Kadi",
    payment_expiry: "Tarehe ya Kumalizika",
    payment_cvv: "CVV",
    payment_name: "Jina kwenye Kadi",
    payment_email: "Anwani ya Barua Pepe",
    payment_confirm: "Thibitisha Malipo",
    payment_success: "Malipo Yamefanikiwa!",
    payment_receipt_sent: "Risiti imetumwa kwenye barua pepe yako",
    about_title: "KUHUSU ISOLELE",
    about_what_is: "ISOLELE ni Nini?",
    about_vision_title: "MAONO",
    about_vision_desc: "Kurudisha Afrika kama kitovu cha hadithi, uchawi na nguvu.",
    about_pillars_title: "Nguzo Nne za Isolele",
    about_pillar1_title: "Ulimwengu wa Hadithi",
    about_pillar1_desc: "Ulimwengu mkubwa uliounganishwa uliochochewa na falme za Kiafrika za kweli.",
    about_pillar2_title: "Harakati za Uchapishaji na Vyombo vya Habari",
    about_pillar2_desc: "Kutoka kwa katuni hadi riwaya, uhuishaji, michezo na ulimwengu wa sinema.",
    about_pillar3_title: "Ukarabati wa Kitamaduni",
    about_pillar3_desc: "Isolele ni sehemu ya uamsho mkubwa zaidi.",
    about_pillar4_title: "Injini ya Urithi",
    about_pillar4_desc: "Kila mtoto anayesoma Isolele atagundua mashujaa wa nguvu wanaofanana naye.",
    founder_title: "MWANZILISHI",
    founder_name: "H.R.M King Kufulula",
    founder_role: "Mwanzilishi na Mbunifu wa Ulimwengu wa Isolele",
    founder_bio: "Mwenye maono nyuma ya Isolele.",
    language: "Lugha",
    theme: "Mada",
    discover: "Gundua",
    latestNews: "Habari za Karibuni",
    loading: "Inapakia...",
    error: "Hitilafu",
    success: "Mafanikio",
    cancel: "Ghairi",
    save: "Hifadhi",
    edit: "Hariri",
    delete: "Futa",
    search: "Tafuta",
    search_placeholder: "Tafuta...",
    view_all: "Tazama Yote",
    learn_more: "Jifunze Zaidi",
    back: "Nyuma",
    next: "Ifuatayo",
    previous: "Iliyotangulia",
    site_map: "Ramani ya Tovuti",
    accessibility: "Ufikiaji",
    cookie_settings: "Mipangilio ya Vidakuzi",
    footer_thank_you: "Asante!",
  },
  
  ln: {
    nav_home: "Ndako",
    nav_about: "Na tina",
    nav_founder: "Mosungi",
    nav_news: "Sango ya BD",
    nav_characters: "Bato ya masolo",
    nav_shop: "Magazini",
    nav_supporters: "Basungi",
    nav_contact: "Kokutana",
    nav_all_characters: "Bato Nyonso",
    nav_become_supporter: "Kokoma Mosungi",
    nav_partners: "Baninga",
    nav_restaurant: "Restaurant ya Baninga",
    hero_title: "ZAIIRE - MWANA YA MOKONZI YA KONGO",
    hero_subtitle: "Singa ya Mokano",
    hero_description: "Mobembo moko ya esengo oyo ezali kolanda molimo ya Lion King mpe Black Panther.",
    hero_buy_now: "SOMA SIKA",
    hero_discover: "YEBA LISOLO",
    hero_preorder: "Kotia liboso",
    hero_launch_price: "Ntalo ya kobanda",
    universe_title: "MOKILI YA ISOLELE",
    universe_subtitle: "Baponami",
    universe_description: "Isolele ezali mokili moko ya makanisi oyo ebotamaki mpo na kozongisa molimo ya masolo ya Afrika.",
    universe_destiny_title: "Mokano Ezali Te Kopona",
    universe_destiny_desc: "Ezali Kobenga. Moto nyonso abengami na makila, milimo ya kala mpe masolo oyo esilaki te.",
    universe_heritage_title: "Makila ya Bokonzi Ememi Nguya ya Kala",
    universe_heritage_desc: "Makila ya bokonzi ememi bososoli mpe nguya ya mikili oyo ebosanami.",
    universe_resurrection_title: "Milimo ya Bankoko Ekufaka Te",
    universe_resurrection_desc: "Afrika ezalaki na nguya ntango nyonso. Esakweli ezongaki.",
    characters_title: "BAPONAMI",
    characters_subtitle: "Kutana na basimba, masolo mpe bakengeli ya Mokili ya Isolele",
    characters_discover: "YEBA",
    characters_zaire_title: "Mwana ya Mokonzi ya Kongo",
    characters_zaire_desc: "Mwana ya nkake mpe bokonzi, aponamaki na Singa ya Mokano.",
    characters_kimoya_title: "Kandake Oyo Abotami Lisusu",
    characters_kimoya_desc: "Mokitani ya basi ya bitumba, mobomi ya elili.",
    characters_zattar_title: "Motongi ya Makila",
    characters_zattar_desc: "Mayele oyo elakelami mabe ya teknoloji epekisami.",
    characters_twins_title: "Baprofeta Bana Bitike",
    characters_twins_desc: "Bana bitike baprofeta oyo balobaka na bibale mpe minzoto.",
    characters_imvula_title: "Mokonzi Mwasi ya Stormglass",
    characters_imvula_desc: "Moyangeli ya Stormglass, mokengeli ya Banyama ya Likolo.",
    news_title: "SANGO YA SIKA",
    news_read_more: "TANGA LISOLO",
    news_minutes_read: "miniti ya kotanga",
    news_published: "Ebimaki",
    cta_title: "KOTA NA LISOLO",
    cta_description: "Zala ndambo ya mokili ya BD oyo ezali kobongola oyo ezali kosepela bomoi ya Afrika.",
    cta_explore: "TALELA MOKILI",
    cta_newsletter: "KOMISA NA SANGO",
    footer_description: "Isolele ezali mokili ya makanisi mpo na kozongisa molimo ya masolo ya Afrika.",
    footer_explore: "TALELA",
    footer_resources: "BISALELI",
    footer_newsletter_title: "YEBA NTANGO NYONSO",
    footer_newsletter_desc: "Komisa mpo na kozwa sango ya ntina.",
    footer_email_placeholder: "Adresi ya email na yo",
    footer_subscribe: "KOMISA",
    footer_copyright: "2026 Isolele. Mibeko nyonso ebatelami. Mosala ya We Love Congo.",
    footer_press: "Presse",
    footer_careers: "Misala",
    footer_contact: "Kokutana Na Biso",
    footer_faq: "FAQ",
    footer_terms: "Mibeko ya Kosalela",
    footer_privacy: "Politique ya Kobomba",
    shop_title: "MAGAZINI",
    shop_subtitle: "Yeba lisanganelo na biso ya BD mpe biloko",
    shop_add_to_cart: "Tia na Panier",
    shop_buy_now: "Soma Sika",
    shop_price: "Ntalo",
    shop_sale: "Promo",
    shop_new: "Ya Sika",
    shop_bestseller: "Etekamaka Mingi",
    cart_title: "Panier Na Yo",
    cart_empty: "Panier na yo ezali mpamba",
    cart_subtotal: "Ndambo ya Ntalo",
    cart_shipping: "Kowelisa",
    cart_total: "Ntalo Nyonso",
    cart_checkout: "Kofuta",
    cart_continue_shopping: "Kokoba Kosomba",
    cart_remove: "Kolongola",
    cart_quantity: "Motango",
    payment_title: "Kofuta",
    payment_card: "Carte ya Credit",
    payment_google_pay: "Google Pay",
    payment_card_number: "Numero ya Carte",
    payment_expiry: "Mokolo ya Kosuka",
    payment_cvv: "CVV",
    payment_name: "Nkombo na Carte",
    payment_email: "Adresi ya Email",
    payment_confirm: "Kondima Kofuta",
    payment_success: "Kofuta Elongaki!",
    payment_receipt_sent: "Recu etindamaki na email na yo",
    about_title: "NA TINA YA ISOLELE",
    about_what_is: "ISOLELE Ezali Nini?",
    about_vision_title: "EMONELI",
    about_vision_desc: "Kozongisa Afrika lokola esika ya lisolo, magie mpe nguya.",
    about_pillars_title: "Makonzi Minei ya Isolele",
    about_pillar1_title: "Mokili ya Lisolo",
    about_pillar1_desc: "Mokili monene oyo ekangani oyo euti na mikili ya Afrika ya solo.",
    about_pillar2_title: "Mosala ya Kobimisa mpe Media",
    about_pillar2_desc: "Longwa na BD tii na roman, animation, masano mpe mokili ya film.",
    about_pillar3_title: "Kobongisa Bokoko",
    about_pillar3_desc: "Isolele ezali ndambo ya kozongisa monene.",
    about_pillar4_title: "Machine ya Bomoi",
    about_pillar4_desc: "Mwana nyonso oyo atangi Isolele akozwa basimba oyo bazali lokola ye.",
    founder_title: "MOSUNGI",
    founder_name: "H.R.M King Kufulula",
    founder_role: "Mosungi mpe Mokelisi ya Mokili ya Isolele",
    founder_bio: "Moto ya makanisi nsima ya Isolele.",
    language: "Lokota",
    theme: "Sengo",
    discover: "Yeba",
    latestNews: "Sango ya Sika",
    loading: "Ezali kotia...",
    error: "Libunga",
    success: "Elongi",
    cancel: "Koboya",
    save: "Kobomba",
    edit: "Kobongisa",
    delete: "Kolongola",
    search: "Koluka",
    search_placeholder: "Koluka...",
    view_all: "Tala Nyonso",
    learn_more: "Yeba Mingi",
    back: "Kozonga",
    next: "Oyo Elandi",
    previous: "Oyo Eleki",
    site_map: "Carte ya Site",
    accessibility: "Kozwa Nzela",
    cookie_settings: "Mibeko ya Cookies",
    footer_thank_you: "Merci!",
  },

  // Portuguese (Portugal)
  pt: {
    // Navigation
    nav_home: "Início",
    nav_about: "Sobre",
    nav_founder: "Fundador",
    nav_news: "Notícias em Quadrinhos",
    nav_characters: "Personagens",
    nav_shop: "Loja",
    nav_supporters: "Apoiadores",
    nav_contact: "Contato",
    nav_games: "Jogos",
    nav_all_characters: "Todos os Personagens",
    nav_become_supporter: "Torne-se um Apoiador",
    nav_partners: "Parceiros",
    nav_restaurant: "Restaurante Parceiro",
    nav_fashion: "Moda",
    nav_settings: "Configurações",
    
    // Hero Section
    hero_title: "ZAÏRE - PRÍNCIPE DO KONGO",
    hero_subtitle: "O Colar do Destino",
    hero_description: "Uma aventura emocionante e edificante que ecoa o espírito de O Rei Leão e Pantera Negra, enquanto oferece aos jovens leitores uma celebração do legado, coragem e autodescoberta.",
    hero_buy_now: "COMPRAR AGORA",
    hero_discover: "DESCOBRIR A HISTÓRIA",
    hero_preorder: "Pré-encomenda",
    hero_launch_price: "Preço de lançamento",
    
    // Book Slides
    book_welcome_tag: "BEM-VINDO A ISOLELE",
    book_chosen_ones_title: "OS ESCOLHIDOS",
    book_chosen_ones_subtitle: "Um universo inteiro nascido das raízes do Kongo...",
    book_chosen_ones_desc: "Isolele é um universo visionário nascido para restaurar a alma da narrativa africana, um império mitológico onde super-heróis são escolhidos pelo destino, reinos nunca esquecidos, e o poder ancestral está vivo em cada página, cada profecia, cada batalha. Cada criança que ler Isolele descobrirá super-heróis que se parecem com eles, falam sua língua, protegem sua terra e honram seus antepassados. Isto é para a próxima geração de reis, rainhas, guerreiros, inventores e contadores de histórias.",
    book_explore_universe: "EXPLORAR O UNIVERSO",

    book_makanda_tag: "A DINASTIA MAKANDA — LIVRO I",
    book_makanda_title: "MAKANDA",
    book_makanda_subtitle: "O Império Mais Poderoso da História Não Foi Perdido. Foi Escondido de Propósito.",
    book_makanda_desc: "No coração da África Central existia uma civilização que o mundo nunca deveria conhecer. Espiritualmente acordada. Tecnologicamente avançada. Protegida pela Chama Sagrada. Quando forças externas vieram buscar o que era delas, os Makanda não caíram. Desapareceram. Sua cidade nunca foi perdida. Estava esperando por aquele nascido para carregar a chama novamente.",
    book_discover_makanda: "DESCOBRIR MAKANDA",

    book_bambula_tag: "BAMBULA: CRIANÇA DO RITMO",
    book_bambula_title: "BAMBULA",
    book_bambula_subtitle: "CAPÍTULO I · O TAMBOR SAGRADO",
    book_bambula_desc: "Antes das palavras, havia o ritmo. Bambula era a criança que ouvia tudo. Quando os tambores foram levados e a terra silenciou, ele manteve o ritmo vivo dentro de si. Armado com o tambor sagrado, ele caminha entre o mundo dos espíritos e os vivos. Ele não combate para destruir. Ele protege para lembrar.",
    book_discover_bambula: "DESCOBRIR BAMBULA",

    book_mokele_tag: "MOKELE: NASCIDO NA LUTA",
    book_mokele_title: "MOKELE",
    book_mokele_subtitle: "De Criança a Senhor de Kinshasa",
    book_mokele_desc: "Mokele não nasce rei. Ele nasce na luta. As ruas de Kinshasa o ensinam antes da escola conseguir, onde a lealdade é frágil, a violência é normal, e a sobrevivência é tudo. De criança a ganancioso a senhor. Ele constrói poder, dinheiro e respeito. Em Kinshasa, você é comido... ou se torna o predador.",
    book_discover_mokele: "DESCOBRIR MOKELE",

    book_zaiire_tag: "ZAÏRE: O PRÍNCIPE DO KONGO",
    book_zaiire_title: "O PRÍNCIPE DO KONGO",
    book_zaiire_subtitle: "O Colar do Destino",
    book_zaiire_desc: "Forjado no coração do Reino do Kongo, o Colar do Destino nunca foi feito para ser usado. Foi feito para escolher. Passado através de séculos de fogo, guerra e silêncio, ele carrega a alma de cada rei que sangrou por seu povo e cada rainha que segurou o mundo inteiro com as mãos nuas. Quando encontra Zaïre, não brilha. Desperta.",
    book_discover_zaiire: "DESCOBRIR ZAÏRE",

    book_kufu_tag: "KUFU: O JOGO DA COROA",
    book_kufu_title: "KUFU",
    book_kufu_subtitle: "O JOGO OFICIAL DO UNIVERSO ISOLELE",
    book_kufu_desc: "Isto não é apenas um jogo de cartas. É uma cerimônia. Reúna seus guerreiros. Construa seu reino. Supere cada adversário na mesa. Mas para reclamar a coroa, há apenas uma maneira de ganhar. Você deve levantar sua voz e pronunciar o nome do rei em voz alta. Então alguém coloca o colar em sua cabeça. Não pela sua própria mão. Por outra. Porque um verdadeiro rei não é coroado sozinho. KUFU é onde a realeza africana se torna algo que você sente em suas mãos, ouve em sua voz e carrega ao redor do pescoço. Cada jogo é uma coroação. Cada vencedor é um rei.",
    book_explore_game: "EXPLORAR O JOGO",

    book_amara_tag: "AMARA: RAINHA DOS MARES",
    book_amara_title: "AMARA",
    book_amara_subtitle: "CAPÍTULO I · RAINHA DOS PIRATAS DA AMAZÔNIA",
    book_amara_desc: "Cada pirata teme o oceano. Amara o possui. Ela é a Rainha dos Mares. A capitã mais temida em cada água do mundo. Nenhum navio a ultrapassou. Nenhum rei a superou em astúcia. Nenhum exército deteve sua frota. Mas Amara não navega sozinha. Ao seu lado estão quatro mulheres unidas por sangue, lealdade e destino. Cinco rainhas do mar que juntas carregam um poder que abalará cada trono do continente. De sua união nasce a dinastia Agojie. E dessa dinastia surgem as cinco rainhas mulheres que mudarão para sempre o curso da história africana. Isto não é apenas uma história de piratas. É onde a maior dinastia feminina do universo ISOLELE começa.",
    book_discover_amara: "DESCOBRIR AMARA",

    book_zattar_tag: "ZATTAR: O PRÍNCIPE DO UNIVERSO",
    book_zattar_title: "ZATTAR",
    book_zattar_subtitle: "O Conquistador de Tronos",
    book_zattar_desc: "Quando o Destino Recusou um Reino, Ele Decidiu Tomar Todos. O Príncipe Zattar nasceu para herdar o trono de Bapindi. Mas quando os Ancestrais escolheram outro, algo dentro dele não se quebrou. Inflamou-se. Ele estudou as Primeira e Segunda Guerras de Vegas, lendas de devastação que abalaram o mundo antes mesmo de nascer. Onde outros viam aviso, Zattar via um mapa. Ele começou a Terceira Guerra de Vegas. Não por loucura. Não por dor. Mas porque olhou para o universo inteiro e chegou a uma conclusão: Pertence a alguém. E esse alguém é Zattar. Ele não foi escolhido. Então escolheu o universo em seu lugar.",
    book_discover_zattar: "DESCOBRIR ZATTAR",

    book_zaiko_tag: "ZAÏKO: ÚLTIMO REI DAS RUAS DE KIVUS",
    book_zaiko_title: "A LENDA DE ZAÏKO",
    book_zaiko_subtitle: "Ele Não Subiu das Ruas. Ele as Conquistou.",
    book_zaiko_desc: "Nascido no Norte de Kivu. Forjado em Kinshasa. Zaïko nunca foi destinado a sobreviver. Mas a sobrevivência nunca foi suficiente. Em um mundo governado pelo poder, dinheiro e medo, ele surge do nada. Não como herói. Mas como uma força. Com seu irmão, ele constrói o império mais temido que Kivus já conheceu. Nenhuma coroa foi dada. Nenhum destino foi escrito. Tudo foi tomado.",
    book_discover_zaiko: "DESCOBRIR ZAÏKO",
    
    // Universe Section
    universe_title: "O UNIVERSO ISOLELE",
    universe_subtitle: "Os Escolhidos",
    universe_description: "Isolele é um universo visionário nascido para restaurar a alma da narrativa africana - um império mitológico onde super-heróis são escolhidos pelo destino, reinos nunca esquecidos, e o poder ancestral está vivo em cada página, cada profecia, cada batalha.",
    universe_destiny_title: "O Destino Não é uma Escolha",
    universe_destiny_desc: "É um Chamado. Cada personagem é invocado por linhagens de sangue, espíritos antigos e histórias inacabadas de seus antepassados.",
    universe_heritage_title: "As Linhagens Reais Carregam um Poder Antigo",
    universe_heritage_desc: "O sangue real transporta a memória e o poder dos reinos esquecidos, esperando ser despertado pelos escolhidos.",
    universe_resurrection_title: "Os Espíritos Ancestrais Nunca Morrem",
    universe_resurrection_desc: "A África nunca foi impotente. A profecia voltou, e com ela, a ressurreição dos mitos enterrados.",
    
    // Characters Section
    characters_title: "OS ESCOLHIDOS",
    characters_subtitle: "Conheça os heróis, lendas e guardiões do Universo Isolele",
    characters_discover: "DESCOBRIR",
    characters_zaire_title: "Príncipe do Kongo",
    characters_zaire_desc: "Filho do trovão e da realeza, escolhido pelo Colar do Destino.",
    characters_kimoya_title: "A Kandake Renascida",
    characters_kimoya_desc: "Herdeira das rainhas guerreiras, caçadora de sombras.",
    characters_zattar_title: "O Arquiteto de Sangue",
    characters_zattar_desc: "Gênio amaldiçoado da tecnologia proibida.",
    characters_twins_title: "Profetas Órfãos",
    characters_twins_desc: "Órfãos profetas que falam com rios e estrelas.",
    characters_imvula_title: "Rainha de Stormglass",
    characters_imvula_desc: "Soberana de Stormglass, guardiã das Bestas do Céu.",
    
    // News Section
    news_title: "ÚLTIMAS NOTÍCIAS",
    news_read_more: "LER ARTIGO",
    news_minutes_read: "min de leitura",
    news_published: "Publicado",
    
    // CTA Section
    cta_title: "JUNTE-SE À LENDA",
    cta_join_legend: "JUNTE-SE À LENDA",
    cta_description: "Faça parte de um universo de quadrinhos revolucionário que celebra o legado africano enquanto inspira a próxima geração de super-heróis.",
    cta_explore: "EXPLORAR O UNIVERSO",
    cta_newsletter: "INSCREVER-SE NA NEWSLETTER",
    
    // Footer
    footer_description: "Isolele é um universo visionário nascido para restaurar a alma da narrativa africana - um império mitológico onde super-heróis são escolhidos pelo destino, reinos nunca esquecidos, e o poder ancestral está vivo em cada página, cada profecia, cada batalha.",
    footer_explore: "EXPLORAR",
    footer_resources: "RECURSOS",
    footer_newsletter_title: "MANTENHA-SE INFORMADO",
    footer_newsletter_desc: "Inscreva-se para receber atualizações exclusivas sobre novos lançamentos, eventos e ofertas especiais.",
    footer_email_placeholder: "Seu endereço de email",
    footer_subscribe: "INSCREVER",
    footer_thank_you: "OBRIGADO!",
    footer_copyright: "© 2026 Isolele. Todos os direitos reservados. Uma iniciativa We Love Congo.",
    footer_press: "Imprensa",
    footer_careers: "Carreiras",
    footer_contact: "Entre em Contato",
    footer_faq: "FAQ",
    footer_terms: "Termos de Uso",
    footer_privacy: "Política de Privacidade",
    
    // Shop
    shop_title: "LOJA",
    shop_subtitle: "Descubra nossa coleção de quadrinhos e produtos derivados",
    shop_add_to_cart: "Adicionar ao Carrinho",
    shop_buy_now: "Comprar Agora",
    shop_price: "Preço",
    shop_sale: "Promoção",
    shop_new: "Novo",
    shop_bestseller: "Mais Vendido",
    
    // Cart
    cart_title: "Seu Carrinho",
    cart_empty: "Seu carrinho está vazio",
    cart_subtotal: "Subtotal",
    cart_shipping: "Envio",
    cart_total: "Total",
    cart_checkout: "Fazer Pedido",
    cart_continue_shopping: "Continuar Comprando",
    cart_remove: "Remover",
    cart_quantity: "Quantidade",
    
    // Payment
    payment_title: "Pagamento",
    payment_card: "Cartão de Crédito",
    payment_google_pay: "Google Pay",
    payment_card_number: "Número do Cartão",
    payment_expiry: "Data de Validade",
    payment_cvv: "CVV",
    payment_name: "Nome do Titular",
    payment_email: "Endereço de Email",
    payment_confirm: "Confirmar Pagamento",
    payment_success: "Pagamento Bem-sucedido!",
    payment_receipt_sent: "Recibo enviado para seu email",
    
    // About Page
    about_title: "SOBRE ISOLELE",
    about_what_is: "O que é ISOLELE?",
    about_vision_title: "A VISÃO",
    about_vision_desc: "Restaurar a África como centro do mito, magia e poder. Criar uma tapeçaria viva de lendas que despertam orgulho, propósito e profecia em cada alma que tocam através das fronteiras, gerações e plataformas.",
    about_pillars_title: "Os Quatro Pilares do Isolele",
    about_pillar1_title: "Um Universo Mitológico",
    about_pillar1_desc: "Um vasto mundo interconectado inspirado em verdadeiros reinos africanos - dos tronos do Kongo, Kush e Axum aos impérios escondidos guiados por deuses, rainhas guerreiras e oráculos.",
    about_pillar2_title: "Um Movimento de Publicação e Mídia",
    about_pillar2_desc: "De quadrinhos a romances, animações, jogos e mundos cinematográficos - Isolele constrói uma plataforma que permite criadores africanos contar suas próprias lendas com excelência, escala e alma.",
    about_pillar3_title: "Uma Renovação Cultural",
    about_pillar3_desc: "Isolele faz parte de um renascimento maior - um movimento para recuperar, celebrar e reimaginar a identidade real, mítica e divina da África.",
    about_pillar4_title: "Um Motor de Legado",
    about_pillar4_desc: "Cada criança que lê Isolele descobrirá super-heróis que se parecem com eles, falam sua língua, protegem sua terra e honram seus antepassados.",
    
    // Founder Page
    founder_title: "O FUNDADOR",
    founder_name: "H.R.M King Kufulula",
    founder_role: "Fundador e Criador do Universo Isolele",
    founder_bio: "O visionário por trás de Isolele, dedicado a restaurar a alma da narrativa africana e criar super-heróis que refletem o verdadeiro legado da África.",
    
    // Common
    loading: "Carregando...",
    error: "Erro",
    success: "Sucesso",
    cancel: "Cancelar",
    save: "Salvar",
    edit: "Editar",
    delete: "Deletar",
    search: "Pesquisar",
    search_placeholder: "Pesquisar...",
    view_all: "Ver Tudo",
    learn_more: "Saber Mais",
    back: "Voltar",
    next: "Próximo",
    previous: "Anterior",
    site_map: "Mapa do Site",
    accessibility: "Acessibilidade",
    cookie_settings: "Configurações de Cookies",
  },

  // Spanish (España)
  es: {
    // Navigation
    nav_home: "Inicio",
    nav_about: "Acerca de",
    nav_founder: "Fundador",
    nav_news: "Noticias de Cómics",
    nav_characters: "Personajes",
    nav_shop: "Tienda",
    nav_supporters: "Seguidores",
    nav_contact: "Contacto",
    nav_games: "Juegos",
    nav_all_characters: "Todos los Personajes",
    nav_become_supporter: "Conviértete en Seguidor",
    nav_partners: "Socios",
    nav_restaurant: "Restaurante Asociado",
    nav_fashion: "Moda",
    nav_settings: "Configuración",
    
    // Hero Section
    hero_title: "ZAÏRE - PRÍNCIPE DEL KONGO",
    hero_subtitle: "El Collar del Destino",
    hero_description: "Una aventura emocionante y edificante que hace eco del espíritu del Rey León y Pantera Negra, mientras ofrece a los jóvenes lectores una celebración del legado, el coraje y el autodescubrimiento.",
    hero_buy_now: "COMPRAR AHORA",
    hero_discover: "DESCUBRIR LA HISTORIA",
    hero_preorder: "Pre-pedido",
    hero_launch_price: "Precio de lanzamiento",
    
    // Book Slides
    book_welcome_tag: "BIENVENIDO A ISOLELE",
    book_chosen_ones_title: "LOS ELEGIDOS",
    book_chosen_ones_subtitle: "Un universo entero nacido de las raíces del Kongo...",
    book_chosen_ones_desc: "Isolele es un universo visionario nacido para restaurar el alma de la narrativa africana, un imperio mitológico donde los superhéroes son elegidos por el destino, reinos nunca olvidados, y el poder ancestral está vivo en cada página, cada profecía, cada batalla. Cada niño que lea Isolele descubrirá superhéroes que se parecen a él, hablan su idioma, protegen su tierra y honran a sus antepasados. Esto es para la próxima generación de reyes, reinas, guerreros, inventores y narradores.",
    book_explore_universe: "EXPLORAR EL UNIVERSO",

    book_makanda_tag: "LA DINASTÍA MAKANDA — LIBRO I",
    book_makanda_title: "MAKANDA",
    book_makanda_subtitle: "El Imperio Más Poderoso de la Historia No Fue Perdido. Fue Escondido a Propósito.",
    book_makanda_desc: "En el corazón de África Central existía una civilización que el mundo nunca debería conocer. Espiritualmente despierta. Tecnológicamente avanzada. Protegida por la Llama Sagrada. Cuando fuerzas externas vinieron por lo que era suyo, los Makanda no cayeron. Desaparecieron. Su ciudad nunca fue perdida. Estaba esperando al que nació para llevar la llama de nuevo.",
    book_discover_makanda: "DESCUBRIR MAKANDA",

    book_bambula_tag: "BAMBULA: HIJO DEL RITMO",
    book_bambula_title: "BAMBULA",
    book_bambula_subtitle: "CAPÍTULO I · EL TAMBOR SAGRADO",
    book_bambula_desc: "Antes de las palabras, había ritmo. Bambula era el niño que lo oía todo. Cuando los tambores fueron llevados y la tierra enmudeció, mantuvo el ritmo vivo dentro de él. Armado con el tambor sagrado, camina entre el mundo de los espíritus y los vivos. No lucha para destruir. Protege para recordar.",
    book_discover_bambula: "DESCUBRIR BAMBULA",

    book_mokele_tag: "MOKELE: NACIDO EN LA LUCHA",
    book_mokele_title: "MOKELE",
    book_mokele_subtitle: "De Niño a Señor de Kinshasa",
    book_mokele_desc: "Mokele no nace rey. Nace en la lucha. Las calles de Kinshasa lo enseñan antes de que la escuela pudiera, donde la lealtad es frágil, la violencia es normal, y la supervivencia lo es todo. De niño a traficante a señor. Construye poder, dinero y respeto. En Kinshasa, o te comen... o te conviertes en el depredador.",
    book_discover_mokele: "DESCUBRIR MOKELE",

    book_zaiire_tag: "ZAÏRE: EL PRÍNCIPE DEL KONGO",
    book_zaiire_title: "EL PRÍNCIPE DEL KONGO",
    book_zaiire_subtitle: "El Collar del Destino",
    book_zaiire_desc: "Forjado en el corazón del Reino del Kongo, el Collar del Destino nunca fue hecho para ser usado. Fue hecho para elegir. Pasado a través de siglos de fuego, guerra y silencio, lleva el alma de cada rey que sangró por su pueblo y cada reina que sostuvo el mundo entero con manos desnudas. Cuando encuentra a Zaïre, no brilla. Se despierta.",
    book_discover_zaiire: "DESCUBRIR ZAÏRE",

    book_kufu_tag: "KUFU: EL JUEGO DE LA CORONA",
    book_kufu_title: "KUFU",
    book_kufu_subtitle: "EL JUEGO OFICIAL DEL UNIVERSO ISOLELE",
    book_kufu_desc: "Esto no es solo un juego de cartas. Es una ceremonia. Reúne a tus guerreros. Construye tu reino. Vence a cada oponente en la mesa. Pero para reclamar la corona, solo hay una forma de ganar. Debes alzar tu voz y pronunciar el nombre del rey en voz alta. Luego alguien coloca el collar sobre tu cabeza. No por tu propia mano. Por la de otro. Porque un verdadero rey no es coronado solo. KUFU es donde la realeza africana se convierte en algo que sientes en tus manos, escuchas en tu voz y llevas alrededor de tu cuello. Cada juego es una coronación. Cada ganador es un rey.",
    book_explore_game: "EXPLORAR EL JUEGO",

    book_amara_tag: "AMARA: REINA DE LOS MARES",
    book_amara_title: "AMARA",
    book_amara_subtitle: "CAPÍTULO I · REINA DE LOS PIRATAS DE AMAZON",
    book_amara_desc: "Cada pirata teme al océano. Amara lo posee. Es la Reina de los Mares. La capitana más temida en cada agua del mundo. Ningún barco la ha superado. Ningún rey la ha superado en astucia. Ningún ejército ha detenido su flota. Pero Amara no navega sola. A su lado hay cuatro mujeres unidas por sangre, lealtad y destino. Cinco reinas del mar que juntas llevan un poder que sacudirá cada trono del continente. De su unión nace la dinastía Agojie. Y de esa dinastía surge las cinco reinas mujeres que cambiarán para siempre el curso de la historia africana. Esto no es solo una historia de piratas. Es donde comienza la mayor dinastía femenina del universo ISOLELE.",
    book_discover_amara: "DESCUBRIR AMARA",

    book_zattar_tag: "ZATTAR: EL PRÍNCIPE DEL UNIVERSO",
    book_zattar_title: "ZATTAR",
    book_zattar_subtitle: "El Conquistador de Tronos",
    book_zattar_desc: "Cuando el Destino le Negó un Reino, Decidió Tomar Todos. El Príncipe Zattar nació para heredar el trono de Bapindi. Pero cuando los Ancestros eligieron a otro, algo dentro de él no se rompió. Se encendió. Estudió las Primera y Segunda Guerras de Vegas, leyendas de devastación que sacudieron el mundo antes de que naciera. Donde otros veían advertencia, Zattar veía un mapa. Comenzó la Tercera Guerra de Vegas. No por locura. No por dolor. Sino porque miró el universo entero y llegó a una conclusión: Le pertenece a alguien. Y ese alguien es Zattar. No fue elegido. Así que eligió el universo en su lugar.",
    book_discover_zattar: "DESCUBRIR ZATTAR",

    book_zaiko_tag: "ZAÏKO: ÚLTIMO REY DE LAS CALLES DE KIVUS",
    book_zaiko_title: "LA LEYENDA DE ZAÏKO",
    book_zaiko_subtitle: "No Surgió de las Calles. Las Conquistó.",
    book_zaiko_desc: "Nacido en Kivu del Norte. Forjado en Kinshasa. Zaïko nunca fue destinado a sobrevivir. Pero la supervivencia nunca fue suficiente. En un mundo gobernado por el poder, el dinero y el miedo, surge de la nada. No como héroe. Sino como una fuerza. Con su hermano, construye el imperio más temido que Kivus jamás ha conocido. Ninguna corona fue dada. Ningún destino fue escrito. Todo fue tomado.",
    book_discover_zaiko: "DESCUBRIR ZAÏKO",
    
    // Universe Section
    universe_title: "EL UNIVERSO ISOLELE",
    universe_subtitle: "Los Elegidos",
    universe_description: "Isolele es un universo visionario nacido para restaurar el alma de la narrativa africana - un imperio mitológico donde los superhéroes son elegidos por el destino, reinos nunca olvidados, y el poder ancestral está vivo en cada página, cada profecía, cada batalla.",
    universe_destiny_title: "El Destino No es una Elección",
    universe_destiny_desc: "Es un Llamado. Cada personaje es invocado por linajes de sangre, espíritus antiguos e historias inacabadas de sus antepasados.",
    universe_heritage_title: "Los Linajes Reales Llevan un Poder Antiguo",
    universe_heritage_desc: "La sangre real transporta la memoria y el poder de los reinos olvidados, esperando ser despertada por los elegidos.",
    universe_resurrection_title: "Los Espíritus Ancestrales Nunca Mueren",
    universe_resurrection_desc: "África nunca fue impotente. La profecía ha vuelto, y con ella, la resurrección de los mitos enterrados.",
    
    // Characters Section
    characters_title: "LOS ELEGIDOS",
    characters_subtitle: "Conoce a los héroes, leyendas y guardianes del Universo Isolele",
    characters_discover: "DESCUBRIR",
    characters_zaire_title: "Príncipe del Kongo",
    characters_zaire_desc: "Hijo del trueno y la realeza, elegido por el Collar del Destino.",
    characters_kimoya_title: "La Kandake Renacida",
    characters_kimoya_desc: "Heredera de reinas guerreras, cazadora de sombras.",
    characters_zattar_title: "El Arquitecto de Sangre",
    characters_zattar_desc: "Genio maldito de la tecnología prohibida.",
    characters_twins_title: "Profetas Huérfanos",
    characters_twins_desc: "Profetas huérfanos que hablan con ríos y estrellas.",
    characters_imvula_title: "Reina de Stormglass",
    characters_imvula_desc: "Soberana de Stormglass, guardiana de las Bestias del Cielo.",
    
    // News Section
    news_title: "ÚLTIMAS NOTICIAS",
    news_read_more: "LEER ARTÍCULO",
    news_minutes_read: "min de lectura",
    news_published: "Publicado",
    
    // CTA Section
    cta_title: "ÚNETE A LA LEYENDA",
    cta_join_legend: "ÚNETE A LA LEYENDA",
    cta_description: "Forma parte de un universo de cómics revolucionario que celebra el legado africano mientras inspira a la próxima generación de superhéroes.",
    cta_explore: "EXPLORAR EL UNIVERSO",
    cta_newsletter: "SUSCRIBIRSE AL BOLETÍN",
    
    // Footer
    footer_description: "Isolele es un universo visionario nacido para restaurar el alma de la narrativa africana - un imperio mitológico donde los superhéroes son elegidos por el destino, reinos nunca olvidados, y el poder ancestral está vivo en cada página, cada profecía, cada batalla.",
    footer_explore: "EXPLORAR",
    footer_resources: "RECURSOS",
    footer_newsletter_title: "MANTÉNTE INFORMADO",
    footer_newsletter_desc: "Suscríbete para recibir actualizaciones exclusivas sobre nuevos lanzamientos, eventos y ofertas especiales.",
    footer_email_placeholder: "Tu dirección de correo electrónico",
    footer_subscribe: "SUSCRIBIRSE",
    footer_thank_you: "¡GRACIAS!",
    footer_copyright: "© 2026 Isolele. Todos los derechos reservados. Una iniciativa We Love Congo.",
    footer_press: "Prensa",
    footer_careers: "Carreras",
    footer_contact: "Contactar",
    footer_faq: "FAQ",
    footer_terms: "Términos de Uso",
    footer_privacy: "Política de Privacidad",
    
    // Shop
    shop_title: "TIENDA",
    shop_subtitle: "Descubre nuestra colección de cómics y productos relacionados",
    shop_add_to_cart: "Agregar al Carrito",
    shop_buy_now: "Comprar Ahora",
    shop_price: "Precio",
    shop_sale: "Oferta",
    shop_new: "Nuevo",
    shop_bestseller: "Más Vendido",
    
    // Cart
    cart_title: "Tu Carrito",
    cart_empty: "Tu carrito está vacío",
    cart_subtotal: "Subtotal",
    cart_shipping: "Envío",
    cart_total: "Total",
    cart_checkout: "Proceder al Pago",
    cart_continue_shopping: "Continuar Comprando",
    cart_remove: "Eliminar",
    cart_quantity: "Cantidad",
    
    // Payment
    payment_title: "Pago",
    payment_card: "Tarjeta de Crédito",
    payment_google_pay: "Google Pay",
    payment_card_number: "Número de Tarjeta",
    payment_expiry: "Fecha de Vencimiento",
    payment_cvv: "CVV",
    payment_name: "Nombre del Titular",
    payment_email: "Dirección de Correo Electrónico",
    payment_confirm: "Confirmar Pago",
    payment_success: "¡Pago Exitoso!",
    payment_receipt_sent: "Recibo enviado a tu correo electrónico",
    
    // About Page
    about_title: "ACERCA DE ISOLELE",
    about_what_is: "¿Qué es ISOLELE?",
    about_vision_title: "LA VISIÓN",
    about_vision_desc: "Restaurar África como centro del mito, la magia y el poder. Crear un tapiz vivo de leyendas que despierten orgullo, propósito y profecía en cada alma que tocan a través de fronteras, generaciones y plataformas.",
    about_pillars_title: "Los Cuatro Pilares de Isolele",
    about_pillar1_title: "Un Universo Mitológico",
    about_pillar1_desc: "Un vasto mundo interconectado inspirado en verdaderos reinos africanos - desde los tronos del Kongo, Kush y Axum hasta imperios ocultos guiados por dioses, reinas guerreras y oráculos.",
    about_pillar2_title: "Un Movimiento de Publicación y Medios",
    about_pillar2_desc: "Desde cómics hasta novelas, animaciones, juegos y mundos cinematográficos - Isolele construye una plataforma que permite a los creadores africanos contar sus propias leyendas con excelencia, escala y alma.",
    about_pillar3_title: "Una Renovación Cultural",
    about_pillar3_desc: "Isolele es parte de un renacimiento mayor - un movimiento para recuperar, celebrar e reimaginar la identidad real, mítica y divina de África.",
    about_pillar4_title: "Un Motor de Legado",
    about_pillar4_desc: "Cada niño que lee Isolele descubrirá superhéroes que se parecen a él, hablan su idioma, protegen su tierra y honran a sus antepasados.",
    
    // Founder Page
    founder_title: "EL FUNDADOR",
    founder_name: "H.R.M King Kufulula",
    founder_role: "Fundador y Creador del Universo Isolele",
    founder_bio: "El visionario detrás de Isolele, dedicado a restaurar el alma de la narrativa africana y crear superhéroes que reflejen el verdadero legado de África.",
    
    // Common
    loading: "Cargando...",
    error: "Error",
    success: "Éxito",
    cancel: "Cancelar",
    save: "Guardar",
    edit: "Editar",
    delete: "Eliminar",
    search: "Buscar",
    search_placeholder: "Buscar...",
    view_all: "Ver Todo",
    learn_more: "Saber Más",
    back: "Atrás",
    next: "Siguiente",
    previous: "Anterior",
    site_map: "Mapa del Sitio",
    accessibility: "Accesibilidad",
    cookie_settings: "Configuración de Cookies",
  },

  // Zulu (South Africa)
  zu: {
    // Navigation
    nav_home: "Ikhaya",
    nav_about: "Mayelana",
    nav_founder: "Umumbirhi",
    nav_news: "Izindaba zezakhiwo",
    nav_characters: "Abantu Bensika",
    nav_shop: "Ivenkile",
    nav_supporters: "Abavikeli",
    nav_contact: "Uknxibelelano",
    nav_games: "Imidlalo",
    nav_all_characters: "Bonke Abantu Bensika",
    nav_become_supporter: "Become Umvikeli",
    nav_partners: "Izinhlangano",
    nav_restaurant: "Indawo Yokulamula Enelungile",
    nav_fashion: "Indlela Yokukenkezela",
    nav_settings: "Izilungiselelo",
    
    // Hero Section
    hero_title: "ZAÏRE - ISIKHOSANA SASE-KONGO",
    hero_subtitle: "Isigubhu Sokusebenza",
    hero_description: "Umdlalo omangalisa kanye nomuntu oqondakalayo owenza izingcezu ze-The Lion King kanye ne-Black Panther, ngenkathi enabza abasufuni abasha ngokubhungaza inzuzo, isibindi kanye nokutholakala kwabo.",
    hero_buy_now: "THENGA MANJE",
    hero_discover: "THOLA INDABA",
    hero_preorder: "Ngaphambi kokuthenga",
    hero_launch_price: "Intengo yokuqala",
    
    // Book Slides
    book_welcome_tag: "WEMUKELE KU-ISOLELE",
    book_chosen_ones_title: "OKHETHIWE",
    book_chosen_ones_subtitle: "Izwe lonke elizaliwe ezimpandleni zase-Kongo...",
    book_chosen_ones_desc: "I-Isolele yindawo yesijulele elubuyisele umoya wezindaba zaseAfrika, umbuso omizwa owabancindezeli abakhethiwe yisikhathi, amakhosi akakhohlwi, kanye namandla omuntu wakudala aphilile ku-ekuhlukeni, okukusebenzisa amandla, okuthembisa, nokushaya. Umuntu oyingane kufunda I-Isolele uzohlola uqobo lwabaphathalali ababantu abafaneleka naye, babhale ulimi lwakhe, balinde umhlaba wakhe kanye nokuhlonipha abakhe.",
    book_explore_universe: "HLOLA IZWE",

    book_makanda_tag: "INZUZO YAKAMAKANDA — INCWADI I-I",
    book_makanda_title: "MAKANDA",
    book_makanda_subtitle: "Umbuso Onamandla Kakhulu Emlandelalweni Akuphumelela. Wafihla Kuzinza.",
    book_makanda_desc: "Enkosini yaseAfrika Ecentrali kwakukho inzuzo ethi uhlaba kadalwa angakoyiswa. Ivuma kuhamba. Imishini yepiki. Evikele iNqamulelo Engcwele. Lapho amandla angaphandle afikile, abaMakanda abalandeli. Balahlahlela. Isixeko sabo asikuphumelele. Belilinde umuntu ozaliwe ukhonza iNqamulelo kabusha.",
    book_discover_makanda: "THOLA MAKANDA",

    book_bambula_tag: "BAMBULA: UMUNTU WOMCULO",
    book_bambula_title: "BAMBULA",
    book_bambula_subtitle: "INGXENYE I-I · ISIGUBHU ENGCWELE",
    book_bambula_desc: "Ngaphambi kwamahlo, kwakukho umculo. Bambula wayengumuntu owakufunda konke. Lapho izigubhu zathathwa kanye nomhlaba wathula, wahlonza umculo endaweni yakhe. Ebikezela isigubhu engcwele, uphakamisele isilela kuhambela phakathi kwemhlaba yozifo kanye nabantu abaphilile. Akuzambi ukubhubhisa. Uvikela ukukhumbula.",
    book_discover_bambula: "THOLA BAMBULA",

    book_mokele_tag: "MOKELE: OZALIWE EMPHAKATHINI",
    book_mokele_title: "MOKELE",
    book_mokele_subtitle: "Kusuka Kumuntu Yosindlela Wamakhosi AseKinshasa",
    book_mokele_desc: "UMokele azaliwa njengekhosi. Azaliwa emphakathini. Izindlela zaseKinshasa zamfundisa ngaphambi kokuba isikole sikwazi, lapho ukuthembela kufaneleka, udlame kuvamile, kanye nokuzingela konke. Kusuka kumuntu yosindlela umkhulu yomkosi. Wakha amandla, imali, kanye nokugubeka. EKinshasa, noma ushoywe... noma ube isikhoba.",
    book_discover_mokele: "THOLA MOKELE",

    book_zaiire_tag: "ZAÏRE: ISIKHOSANA SASE-KONGO",
    book_zaiire_title: "ISIKHOSANA SASE-KONGO",
    book_zaiire_subtitle: "Isigubhu Sokusebenza",
    book_zaiire_desc: "Kwakubikezwa entabeni ye-Kongo, isigubhu sokusebenza asilizo ukusulaniswa. Kwakubikezwa ukukhetha. Kudlule izinkathi zemiphakathi, udlame, nemikhonsane, isinco amankhosi ayaphakamisela abantu babo kanye nenkosikazi ethethe izwe lonke ngesandla encinane. Lapho itholakala ku-Zaïre, ayibheke. Ivuka.",
    book_discover_zaiire: "THOLA ZAÏRE",

    book_kufu_tag: "KUFU: IMIDLALO YEKHASI",
    book_kufu_title: "KUFU",
    book_kufu_subtitle: "IMIDLALO YESISEKELO YEULIMWENGU WESIZOLELELE",
    book_kufu_desc: "Lokhu akuwona imidlalo yekhadi kuphela. Liyindlela yokucameka. Qoqa izinhlangano zakho. Wakha umbuso wakho. Phakamisela umuntu yonke entalawonindlela. Kodwa ukuze uqamule ikhasi, kukhona indlela eyodwa yokuphumelela. Kufanele uphakamise izwi lakho kanye nothi igama lenhlanganyelelo kulezwi eliphakeme. Ngemuva kwalokho umuntu ubeka ikhasu ngebulu lwakho. Hhayi ngesandla sakho. Ngesandla somunye. Njengoba inkhosi yenyaniso ayakhonzwa ikhasi yodwa. Kufu kuphumela ubuntu bafirika fumana okukubheka ngesandla sakho, izwi lakho, kanye ukhonze ikhasu uzonakele kumbili wakho. Yonke imidlalo iyikhasi lokucameka. Yonke iphakamise iyikhasi.",
    book_explore_game: "HLOLA IMIDLALO",

    book_amara_tag: "AMARA: INKOSIKAZI YOLWANDLE",
    book_amara_title: "AMARA",
    book_amara_subtitle: "INGXENYE I-I · INKOSIKAZI YEZIGEBENGU ZOLWANDLE ZE-AMAZON",
    book_amara_desc: "Yonke isigebengu isolwandle. UAmara uyilo. Uyinkosikazi yolwandle. Umkazi okuthi akajumekile emanzini yonke emhlabeni. Abanumzi abakhulukhulu akayilulekile. Inkhosi ayivele ayiluthele. Amabutho angazimisele iflithi yakhe. Kodwa uAmara akuchelekeli uqobo. Ngesikhathi sakhe kunamakosikazi amane abothwane ngegazi, ukuthembela kanye nesisekelo. Abakosikazi abahlanu bolwandle abakufidele amandla ayobhula isigqalelo esigqhithisele iafrika. Kusuka ekusethembiseni kwabo kukhona isizuzo se-Agojie. Kusuka ekusethembiseni kwalokho kukhona abakosikazi abahlanu abazobhulukhula intshisekelo yesaga le-Afrika ngunaphakade. Lokhu akuwona indaba yezigebengu kuphela. Yilapho kuqala inzuzo yamakosikazi abalefulekile emhlabeni we-ISOLELE.",
    book_discover_amara: "THOLA AMARA",

    book_zattar_tag: "ZATTAR: ISIKHOSANA SEULIMWENGU",
    book_zattar_title: "ZATTAR",
    book_zattar_subtitle: "Isikhosana Sokuqhatsha Izigqalelo",
    book_zattar_desc: "Lapho Isikhathi Sokuqhatsha Akumkhohlwisele Umbuso, Wacinzela Ukuzithathe Zonke. UMnu uZattar azaliwe ukuthola isikhosi seThrone ye-Bapindi. Kodwa lapho Abadluliswa bakaZattar bakhetha omunye, okuthile engqondweni yakhe akavuthwali. Kwavuma. Wafundza iMpi Yokuqala Kanye Yesibili YaseVegas, izindaba zokufa ezashaya umhlaba ngaphambi kokuzaliwa. Lapho abantu babheka kuxaka, uZattar wabona imephu. Waqala iMpi Yesithathu YaseVegas. Hhayi ngobuhlungu. Hhayi ngoludlamo. Kodwa ngoba abheke izwe lonke umuntu wavela ekugcineni: Lingomnye. Futhi lo mnye ungaZattar. Akakhethiwe. Ngakho-ke wazikhethela izwe esikhundleni sakhe.",
    book_discover_zattar: "THOLA ZATTAR",

    book_zaiko_tag: "ZAÏKO: INKHOSI YOKUGCINA YEZINDLELA ZEKIVUS",
    book_zaiko_title: "ISAGA LIKA-ZAÏKO",
    book_zaiko_subtitle: "Akaveli Ezindleleni. Awase Zihlambela.",
    book_zaiko_desc: "Lazaluswayo EKivu Elintshupu. Kwakubikezwa eKinshasa. UZaïko akazange akwazi ukulalela. Kodwa inkulimo ayenzele impilo. Emhlabeni obuswa amandla, imali, kanye noyuki, avuka kunontuthuko. Hhayi njengemuntu omuhle. Kodwa njengamandla. Kanye nobhuti wakhe, wakha umbuso okuthi akajumekile emhlabeni weKivus akuze ukwazi. Akasiwe ikhasi. Akasiwe isikhathi. Konke kwathatwive.",
    book_discover_zaiko: "THOLA ZAÏKO",
    
    // Universe Section
    universe_title: "ULIMWENGU WE-ISOLELE",
    universe_subtitle: "Okhethiwe",
    universe_description: "I-Isolele yindawo yesijulele elubuyisele umoya wezindaba zaseAfrika - umbuso omizwa owabancindezeli abakhethiwe yisikhathi, amakhosi akakhohlwi, kanye namandla omuntu wakudala aphilile ku-ekuhlukeni, okukusebenzisa amandla, okuthembisa, nokushaya.",
    universe_destiny_title: "Isikhathi Akuwukhetho",
    universe_destiny_desc: "Liyikhokhelo. Umuntu oyingane ubizwa umbuzi wegazi, izithwala zakudala kanye nendaba ezingasosiwe zabadluliswa bakhe.",
    universe_heritage_title: "Izimuli Zamahubo Zibambe Amandla Akudala",
    universe_heritage_desc: "Igazi lesikhosi libambe inkulumo kanye namandla amakhosiho agibhile, ilindela ukuvukwa ngukhethiwe.",
    universe_resurrection_title: "Izithwala Zakudala Aziswi Kanti",
    universe_resurrection_desc: "IAfrika ayenzele bulukhuni. Unabili ubuyile, kanye nalo, ukuvukela kwemizwa ebisikiwe.",
    
    // Characters Section
    characters_title: "OKHETHIWE",
    characters_subtitle: "Qaphela abancindezeli, izindaba kanye nobasango bolimwengu besizolelele",
    characters_discover: "THOLA",
    characters_zaire_title: "Isikhosana SaseKongo",
    characters_zaire_desc: "Umuntu wamandla kanye nobuntu, okhethiwe isigubhu sokusebenza.",
    characters_kimoya_title: "I-Kandake Evukwa",
    characters_kimoya_desc: "Isizuzo samahubo abalulamisi, umzingeli wezithunzi.",
    characters_zattar_title: "Umkumbuli Wegazi",
    characters_zattar_desc: "Ubuhlakani bufuqile bumzombo okunqoba okubaliwe.",
    characters_twins_title: "Abanabekele Abashiwo",
    characters_twins_desc: "Abanabakele abanabekele abakhuluma nazilamasi kanye neminkondo.",
    characters_imvula_title: "Inkosikazi yeStormglass",
    characters_imvula_desc: "Unomshenzi weStormglass, umlingisele weZisilwane Zesibhakela.",
    
    // News Section
    news_title: "IZINDABA ZAKAMUVA",
    news_read_more: "FUNDA ISIHLOKO",
    news_minutes_read: "amaminithi okufunda",
    news_published: "Kupapashwe",
    
    // CTA Section
    cta_title: "JOYINA ISAGA",
    cta_join_legend: "JOYINA ISAGA",
    cta_description: "Baba inxenye yeulimwengu wekhanda eloliphakamisa elushesha ububunikazi bweafrika ngenkathi luxhasa inkurtheni elandelanayo yabancindezeli.",
    cta_explore: "HLOLA ULIMWENGU",
    cta_newsletter: "BHALISA EMBHALWENI YEZINDABA",
    
    // Footer
    footer_description: "I-Isolele yindawo yesijulele elubuyisele umoya wezindaba zaseAfrika - umbuso omizwa owabancindezeli abakhethiwe yisikhathi, amakhosi akakhohlwi, kanye namandla omuntu wakudala aphilile ku-ekuhlukeni, okukusebenzisa amandla, okuthembisa, nokushaya.",
    footer_explore: "HLOLA",
    footer_resources: "IZINSIZA",
    footer_newsletter_title: "LAHLEKILE ELOBUDLELANE",
    footer_newsletter_desc: "Bhalisa ukuze uthole izivumelwano zisisekelo nezimo ezintsha, izahluko kanye nokuphakamisela okukhetha.",
    footer_email_placeholder: "Ikheli lakho lethuyela",
    footer_subscribe: "BHALISA",
    footer_thank_you: "NGIYABONGA!",
    footer_copyright: "© 2026 Isolele. Onke amalungelo alondolozwa. Inkulumo ka-We Love Congo.",
    footer_press: "Izindaba",
    footer_careers: "Imisebenzi",
    footer_contact: "Xhumana Nasi",
    footer_faq: "FAQ",
    footer_terms: "Imigomo Yokusetshenziswa",
    footer_privacy: "Inhloso Yezimfihlo",
    
    // Shop
    shop_title: "IVENKILE",
    shop_subtitle: "Thola inkokhela yesandla sakhona kanye nokhiqizini oluvakashini",
    shop_add_to_cart: "Engeza Esitubeni",
    shop_buy_now: "THENGA MANJE",
    shop_price: "Intengo",
    shop_sale: "Ukucitsha",
    shop_new: "Okutsha",
    shop_bestseller: "Othengiswa kakhulu",
    
    // Cart
    cart_title: "Isitubeni Sakho",
    cart_empty: "Isitubeni sakho asinalutho",
    cart_subtotal: "Inani",
    cart_shipping: "Ukuthunyelwa",
    cart_total: "Inani Lonke",
    cart_checkout: "Makwesezi",
    cart_continue_shopping: "Qhubeka Nokuthengisa",
    cart_remove: "Susa",
    cart_quantity: "Inani",
    
    // Payment
    payment_title: "Okukhokayo",
    payment_card: "Ikhadi Le-Credi",
    payment_google_pay: "Google Pay",
    payment_card_number: "Inombolo yekhadi",
    payment_expiry: "Usuku Lokuxhitshwa",
    payment_cvv: "CVV",
    payment_name: "Igama Lomnini",
    payment_email: "Ikheli Le-emel",
    payment_confirm: "Qinisekeza Okukhokayo",
    payment_success: "Okukhokayo Kuphumele!",
    payment_receipt_sent: "Amakwesezi athunyelwe kwe-emel yakho",
    
    // About Page
    about_title: "MAYELANA NE-ISOLELE",
    about_what_is: "Iyini I-ISOLELE?",
    about_vision_title: "IJOMETRI",
    about_vision_desc: "Buyisela iAfrika njengendawo yezindaba, imanyoya kanye namandla. Enza ibhasi eliphilile lezindaba ezikhulumela isithembiso, inhloso kanye nonabili kuvela muva esithweni ngalinye ethinta kuzoluluza, izikhathi, kanye nengalasi.",
    about_pillars_title: "Izinzuzo Ezine I-Isolele",
    about_pillar1_title: "Ulimwengu Lomizwa",
    about_pillar1_desc: "Umhlaba omkhulu oxhume olukuthusa amakhosi anele weafrika - kusukela ethroneni laseKongo, yeKush kanye ye-Axum kuze kuya embusonobhuso ebafihlile ebagubhelwa abathakathi, amahwebo abalekela kanye namaguquli.",
    about_pillar2_title: "Ukunyakaza Kakushicilela Nokwesindawo",
    about_pillar2_desc: "Kusukela ekhonda kuya emicabango, okubukhela, imidlalo kanye nomhlaba wesinema - I-Isolele yakha ingalasi evumela abenzi baseAfrika ukuthi baleth izindaba zabo nabambali namanani, isicaba kanye nomhambezi.",
    about_pillar3_title: "Ukuvukwa Koluntu",
    about_pillar3_desc: "I-Isolele yinxenye yokuqala okukhulu - ukunyakaza ukuze uthole, ubhungaze kanye nokubenza kabusha ubukhosi, umizwa kanye nokudlula kweAfrika.",
    about_pillar4_title: "Inyawo Yezilumamu",
    about_pillar4_desc: "Umuntu oyingane kufunda I-Isolele uzohlola uqobo lwabaphathalali ababantu abafaneleka naye, babhale ulimi lwakhe, balinde umhlaba wakhe kanye nokuhlonipha abakhe.",
    
    // Founder Page
    founder_title: "UMMBULI",
    founder_name: "H.R.M King Kufulula",
    founder_role: "Umumbirhi kanye Nokwakha Ulimwengu We-Isolele",
    founder_bio: "Umuntu onezombang emva kwe-Isolele, ozitshele ukubuyisela umoya wezindaba zaseAfrika kanye nokuthi abaphathalali abamele ububunikazi bobubunikazi beAfrika.",
    
    // Common
    language: "Ulwimi",
    theme: "Isixwayiso",
    discover: "Thola",
    latestNews: "Izindaba Zakamuva",
    loading: "Kwilodi...",
    error: "Iphutha",
    success: "Impumelelo",
    cancel: "Khansela",
    save: "Gcina",
    edit: "Lungisa",
    delete: "Susa",
    search: "Sesha",
    search_placeholder: "Sesha...",
    view_all: "Bheka Bonke",
    learn_more: "Funda okuthile",
    back: "Emuva",
    next: "Okulandelayo",
    previous: "Okulangaphambilini",
    site_map: "Imephu Yesite",
    accessibility: "Ukufikelela",
    cookie_settings: "Izilungiselelo zeKhukhi",
    footer_thank_you: "Ngiyabonga!",
  },
}

export function getTranslation(lang: Language, key: keyof TranslationKeys): string {
  return translations[lang]?.[key] || translations.en[key] || key
}
