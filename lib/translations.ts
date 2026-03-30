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
  nav_comics: string
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
  hero_prince_kongo: string
  hero_necklace_destiny: string
  hero_description: string
  hero_buy_now: string
  hero_discover: string
  hero_preorder: string
  hero_launch_price: string
  
  // Fashion Section
  fashion_collection_title: string
  fashion_collection_subtitle: string
  fashion_view_full: string
  fashion_fire_performance: string
  fashion_monument_power: string
  fashion_sacred_geometry: string
  fashion_runway_essence: string

  // Founder Preview
  founder_title: string
  founder_subtitle: string
  founder_location: string
  founder_description: string
  founder_quote: string
  founder_cta: string
  founder_creator_author: string
  
  // Products Section
  products_already_available: string
  products_subtitle: string
  product_zaiire_name: string
  product_zaiire_desc: string
  product_kimoya_name: string
  product_kimoya_desc: string
  product_art_name: string
  product_art_desc: string
  product_badge_preorder: string
  product_badge_limited: string
  product_badge_new: string

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
  
  // Zaiire Character Page
  zaiire_title: string
  zaiire_epic_subtitle: string
  zaiire_intro_paragraph: string
  zaiire_description_p1: string
  zaiire_description_p2: string
  zaiire_description_p3: string
  zaiire_description_p4: string
  zaiire_description_p5: string
  zaiire_quote: string
  
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
    nav_comics: "Comics",
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
    hero_prince_kongo: "Prince of Kongo",
    hero_necklace_destiny: "The Necklace of Destiny",
    hero_description: "An uplifting action-packed adventure that echoes the spirit of The Lion King and Black Panther, while offering young readers a celebration of heritage, courage and self-discovery.",
    hero_buy_now: "BUY NOW",
    hero_discover: "DISCOVER THE STORY",
    hero_preorder: "Pre-order",
    hero_launch_price: "Launch price",
    
    // Fashion Section
    fashion_collection_title: "Fashion Collection",
    fashion_collection_subtitle: "Discover our fashion collection inspired by the ISOLELE universe",
    fashion_view_full: "View Full Collection",
    fashion_fire_performance: "Fire Performance",
    fashion_monument_power: "Monument of Power",
    fashion_sacred_geometry: "Sacred Geometry",
    fashion_runway_essence: "Runway Essence",

    // Founder Preview
    founder_title: "H.R.M KING KUFULULA",
    founder_subtitle: "The Visionary Behind ISOLELE",
    founder_location: "King Kufulula — New York",
    founder_description: "A cultural architect and storyteller, King Kufulula founded ISOLELE to restore the soul of African storytelling. His vision is to create a mythological empire where African superheroes rise from authentic history, not borrowed myths.",
    founder_quote: "We don't just create characters. We create a lineage. We create a legacy.",
    founder_cta: "Meet the Founder",
    founder_creator_author: "Creator & Author",
    
    // Products Section
    products_already_available: "ALREADY AVAILABLE",
    products_subtitle: "Dive into the Isolele universe with our collection of comics and books",
    product_zaiire_name: "Zaiire: The Necklace of Destiny",
    product_zaiire_desc: "The epic first chapter of the ISOLELE Universe — ZAIIRE Le Prince du Kongo",
    product_kimoya_name: "Kimoya: The Rising Kandake",
    product_kimoya_desc: "Collector's edition — the royal court of the Rising Kandake",
    product_art_name: "The Art of ISOLELE",
    product_art_desc: "Behind the scenes artwork — The Chosen Ones universe poster edition",
    product_badge_preorder: "PRE-ORDER",
    product_badge_limited: "LIMITED",
    product_badge_new: "NEW",
    
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
    
    // Zaiire Character Page
    zaiire_title: "ZAIIRE: The Prince of Kongo — An African Superhero Comic",
    zaiire_epic_subtitle: "An African Fantasy Epic of Heritage, Power, and Destiny",
    zaiire_intro_paragraph: "In the heart of the Kongo Kingdom, where ancient African mythology collides with the modern streets of Kinshasa, one young prince will discover the destiny written in his blood.",
    zaiire_description_p1: "ZAIIRE is the flagship African superhero comic from ISOLELE, the Pan-African comics universe rooted in Congolese heritage. Follow Zaiire, a young prince raised in unimaginable wealth in Kinshasa, DRC, whose life is shattered when he visits his estranged mother in the city's poorest slums.",
    zaiire_description_p2: "During their reunion, Kimoya places around his neck the Necklace of Destiny, an ancient relic passed through generations of Congolese royalty. The necklace awakens his inner power, binding him to the primal forces of the earth, the spirits of his Kongo ancestors, and the true role he was born to play as protector of his people.",
    zaiire_description_p3: "ZAIIRE is the African graphic novel that Black superhero fans across the world have been waiting for, grounded in real Kongo history, Congolese mythology, and Pan-African pride.",
    zaiire_description_p4: "The destiny of a nation rests in his hands. Will Zaiire embrace his legacy and protect his people from the forces that threaten to destroy everything he loves?",
    zaiire_description_p5: "Experience a tale of transformation, redemption, and awakening as one young prince becomes the hero his people have been waiting for.",
    zaiire_quote: "The destiny of a nation rests around his neck. Will Zaiire embrace it?",
    
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
    footer_copyright: "© 2026 ISOLELE. All rights reserved. A Congolese Heritage Initiative",
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
    nav_comics: "Comics",
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
    hero_title: "ZAIIRE - PRINCE DU KONGO",
    hero_subtitle: "Le Collier de la Destinée",
    hero_prince_kongo: "Prince du Kongo",
    hero_necklace_destiny: "Le Collier de la Destinée",
    hero_description: "Une aventure d'action inspirante qui écho l'esprit du Roi Lion et Black Panther, tout en offrant aux jeunes lecteurs une célébration du patrimoine, du courage et de l'autodécouverte.",
    hero_buy_now: "ACHETER MAINTENANT",
    hero_discover: "DÉCOUVRIR L'HISTOIRE",
    hero_preorder: "Précommande",
    hero_launch_price: "Prix de lancement",
    
    // Fashion Section
    fashion_collection_title: "Collection Mode",
    fashion_collection_subtitle: "Découvrez notre collection de mode inspirée par l'univers ISOLELE",
    fashion_view_full: "Voir la Collection Complète",
    fashion_fire_performance: "Performance du Feu",
    fashion_monument_power: "Monument du Pouvoir",
    fashion_sacred_geometry: "Géométrie Sacrée",
    fashion_runway_essence: "Essence de la Piste",

    // Founder Preview
    founder_title: "S.A.R. ROI KUFULULA",
    founder_subtitle: "Le Visionnaire Derrière ISOLELE",
    founder_location: "Roi Kufulula — New York",
    founder_description: "Architecte culturel et conteur, le Roi Kufulula a fondé ISOLELE pour restaurer l'âme de la narration africaine. Sa vision est de créer un empire mythologique où les super-héros africains émergent de l'histoire authentique.",
    founder_quote: "Nous ne créons pas seulement des personnages. Nous créons une lignée. Nous créons un héritage.",
    founder_cta: "Rencontrer le Fondateur",
    founder_creator_author: "Créateur & Auteur",
    
    // Products Section
    products_already_available: "DEJA DISPONIBLE",
    products_subtitle: "Plongez dans l'univers Isolele avec notre collection de bandes dessinées et livres",
    product_zaiire_name: "Zaiire: Le Collier de la Destinée",
    product_zaiire_desc: "Le premier chapitre épique de l'univers ISOLELE",
    product_kimoya_name: "Kimoya: La Kandake Montante",
    product_kimoya_desc: "Édition collector — la cour royale de la Kandake Montante",
    product_art_name: "L'Art d'ISOLELE",
    product_art_desc: "Les illustrations et concepts de l'univers des Élus",
    product_badge_preorder: "PRECOMMANDE",
    product_badge_limited: "LIMITE",
    product_badge_new: "NOUVEAU",
    
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
    
    // Zaiire Character Page (French)
    zaiire_title: "ZAIIRE: Le Prince du Kongo — Une Bande Dessinée Superhéros Africaine",
    zaiire_epic_subtitle: "Une Épopée de Fantaisie Africaine d'Héritage, de Pouvoir et de Destinée",
    zaiire_intro_paragraph: "Au cœur du Royaume du Kongo, où la mythologie africaine ancienne entre en collision avec les rues modernes de Kinshasa, un jeune prince découvrira la destinée écrite dans son sang.",
    zaiire_description_p1: "ZAIIRE est la bande dessinée superhéros africaine phare d'ISOLELE, l'univers comics pan-africain enraciné dans l'héritage congolais. Suivez Zaiire, un jeune prince élevé dans une richesse inimaginable à Kinshasa, RDC, dont la vie est brisée quand il visite sa mère estrangée dans les bidonvilles les plus pauvres de la ville.",
    zaiire_description_p2: "Lors de leurs retrouvailles, Kimoya place autour de son cou le Collier de la Destinée, un relique ancienne transmise à travers les générations de la royauté congolaise. Le collier éveille son pouvoir intérieur, le liant aux forces primales de la terre, aux esprits de ses ancêtres Kongo, et au rôle véritable qu'il est né pour jouer en tant que protecteur de son peuple.",
    zaiire_description_p3: "ZAIIRE est le roman graphique africain que les fans de superhéros noirs du monde entier attendaient, ancré dans la véritable histoire du Kongo, la mythologie congolaise et la fierté pan-africaine.",
    zaiire_description_p4: "La destinée d'une nation repose entre ses mains. Zaiire embrassera-t-il son héritage et protègera-t-il son peuple des forces qui menacent de détruire tout ce qu'il aime?",
    zaiire_description_p5: "Vivez un récit de transformation, de rédemption et d'illumination alors qu'un jeune prince devient le héros que son peuple attendait.",
    zaiire_quote: "La destinée d'une nation repose autour de son cou. Zaiire l'embrassera-t-il?",
    
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
    footer_copyright: "© 2026 Isolele. Tous droits réservés. Une initiative du patrimoine congolais.",
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
    nav_fashion: "Moda",
    nav_settings: "Configuracoes",
    hero_title: "ZAIIRE - PRINCIPE DO KONGO",
    hero_subtitle: "O Colar do Destino",
    hero_prince_kongo: "Principe do Kongo",
    hero_necklace_destiny: "O Colar do Destino",
    hero_description: "Uma aventura emocionante e edificante que ecoa o espirito de O Rei Leao e Pantera Negra, oferecendo aos jovens leitores uma celebracao da heranca, coragem e autodescoberta.",
    hero_buy_now: "COMPRAR AGORA",
    hero_discover: "DESCOBRIR A HISTORIA",
    hero_preorder: "Pre-venda",
    hero_launch_price: "Preco de lancamento",
    fashion_collection_title: "Colecao de Moda",
    fashion_collection_subtitle: "Descubra nossa colecao de moda inspirada no universo ISOLELE",
    fashion_view_full: "Ver Colecao Completa",
    fashion_fire_performance: "Performance de Fogo",
    fashion_monument_power: "Monumento do Poder",
    fashion_sacred_geometry: "Geometria Sagrada",
    fashion_runway_essence: "Essencia da Passarela",
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
    
    // Zaiire Character Page (Portuguese)
    zaiire_title: "ZAIIRE: O Príncipe do Kongo — Uma História em Quadrinhos de Super-Herói Africano",
    zaiire_epic_subtitle: "Uma Epopéia de Fantasia Africana de Herança, Poder e Destino",
    zaiire_intro_paragraph: "No coração do Reino do Kongo, onde a mitologia africana antiga colide com as ruas modernas de Kinshasa, um jovem príncipe descobrirá o destino escrito em seu sangue.",
    zaiire_description_p1: "ZAIIRE é a história em quadrinhos de super-herói africana mais importante da ISOLELE, o universo de quadrinhos pan-africano enraizado na herança congolesa. Siga Zaiire, um jovem príncipe criado em riqueza inimaginável em Kinshasa, RDC, cuja vida é destruída quando ele visita sua mãe afastada nas favelas mais pobres da cidade.",
    zaiire_description_p2: "Durante o reencontro, Kimoya coloca ao redor de seu pescoço o Colar do Destino, uma relíquia antiga transmitida através de gerações de realeza congolesa. O colar desperta seu poder interior, ligando-o às forças primárias da terra, aos espíritos de seus ancestrais Kongo, e ao verdadeiro papel para o qual nasceu para proteger seu povo.",
    zaiire_description_p3: "ZAIIRE é o romance gráfico africano que os fãs de super-heróis negros do mundo inteiro esperam, enraizado na verdadeira história do Kongo, na mitologia congolesa e no orgulho pan-africano.",
    zaiire_description_p4: "O destino de uma nação repousa em suas mãos. Zaiire abraçará seu legado e protegerá seu povo das forças que ameaçam destruir tudo que ele ama?",
    zaiire_description_p5: "Experimente um conto de transformação, redenção e iluminação enquanto um jovem príncipe se torna o herói que seu povo esperava.",
    zaiire_quote: "O destino de uma nação repousa ao redor de seu pescoço. Zaiire o abraçará?",
    
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
    book_chosen_ones_desc: "Isolele es un universo visionario nacido para restaurar el alma de la narrativa africana, un imperio mitológico donde los superhéroes son elegidos por el destino, reinos nunca olvidados, y el poder ancestral está vivo en cada página, cada profecía, cada batalla. Cada niño que lea Isolele descubrir�� superhéroes que se parecen a él, hablan su idioma, protegen su tierra y honran a sus antepasados. Esto es para la próxima generación de reyes, reinas, guerreros, inventores y narradores.",
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
    
    // Zaiire Character Page (Spanish)
    zaiire_title: "ZAIIRE: El Príncipe del Kongo — Un Cómic de Superhéroe Africano",
    zaiire_epic_subtitle: "Una Epopeya de Fantasía Africana de Herencia, Poder y Destino",
    zaiire_intro_paragraph: "En el corazón del Reino del Kongo, donde la mitología africana antigua se cruza con las calles modernas de Kinshasa, un joven príncipe descubrirá el destino escrito en su sangre.",
    zaiire_description_p1: "ZAIIRE es el cómic de superhéroe africano insignia de ISOLELE, el universo de cómics panafricano enraizado en la herencia congoleña. Sigue a Zaiire, un joven príncipe criado en riqueza inimaginable en Kinshasa, RDC, cuya vida se hace añicos cuando visita a su madre distanciada en los barrios más pobres de la ciudad.",
    zaiire_description_p2: "Durante el reencuentro, Kimoya coloca alrededor de su cuello el Collar del Destino, una reliquia antigua transmitida a través de generaciones de la realeza congoleña. El collar despierta su poder interior, uniéndolo a las fuerzas primales de la tierra, a los espíritus de sus antepasados Kongo, y al verdadero papel para el cual nació como protector de su pueblo.",
    zaiire_description_p3: "ZAIIRE es la novela gráfica africana que los fans de superhéroes negros en todo el mundo han estado esperando, enraizada en la verdadera historia del Kongo, la mitología congoleña y el orgullo panafricano.",
    zaiire_description_p4: "El destino de una nación reposa en sus manos. ¿Abrazará Zaiire su legado y protegerá a su pueblo de las fuerzas que amenazan destruir todo lo que ama?",
    zaiire_description_p5: "Experimenta un cuento de transformación, redención e iluminación mientras un joven príncipe se convierte en el héroe que su pueblo esperaba.",
    zaiire_quote: "El destino de una nación reposa alrededor de su cuello. ¿Lo abrazará Zaiire?",
    
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

  // Lingala (Congo)
  ln: {
    // Navigation
    nav_home: "Kala",
    nav_about: "Mabongeza Mosusu",
    nav_founder: "Mokonzi wa Mbala",
    nav_news: "Salangazo ya Masini",
    nav_characters: "Bato Badiseli",
    nav_shop: "Lopeka",
    nav_supporters: "Ba Sosteni",
    nav_contact: "Kolela",
    nav_games: "Maye",
    nav_all_characters: "Bato Badiseli Nyoso",
    nav_become_supporter: "Yaka Sosteni",
    nav_partners: "Bolangani",
    nav_restaurant: "Lopeka ya Mwala",
    nav_fashion: "Bilakisi",
    nav_settings: "Mizaleli",
    
    // Hero Section
    hero_title: "ZAIIRE - MOKONZI WA KONGO",
    hero_subtitle: "Molinga ya Muhairi",
    hero_description: "Lingomba lya bolinga na lisakwa na motema oyo esali na nzoto na makakana, kino kopesa bana ba mbongo elaka, litomboli, na koyeba ye-kila-mo.",
    hero_buy_now: "KANDA SIKA",
    hero_discover: "KOMONA LINGOMBA",
    hero_preorder: "Kanda Liboso",
    hero_launch_price: "Motuzo ya Dibuka",
    
    // Book Slides
    book_welcome_tag: "KAMATUKA KU-ISOLELE",
    book_chosen_ones_title: "BAYE NA LISUSU",
    book_chosen_ones_subtitle: "Ndakota mobimba iliyambikaki na matanda ya Kongo...",
    book_chosen_ones_desc: "ISOLELE ezali ndakota ya motema oyo eyanoka molinga ma Afrika, umbuso wa bozimu oyo balekaka na muhairi, mokonzi akokiki te, mpe makambu ma baboti a liboso elambaka na makasisi nyonso, palaver, mpe nkita. Mwana nyoso okofunda ISOLELE akoyeba bozani oyo eyambaka ye, lokuta ye, banzela ya ye, mpe kokunga papa na mama.",
    book_explore_universe: "KOMONA NDAKOTA",

    book_makanda_tag: "LIKOLO LA MAKANDA — BONDOKI I",
    book_makanda_title: "MAKANDA",
    book_makanda_subtitle: "Likolo Oyo Elonga Mingi Te. Ebomi Kaka.",
    book_makanda_desc: "Pembeni ya Afrike Sentrale elekaki likolo liyoko ayebi te. Lipilipili ya Nzambe. Mimbeko ya lolenge oyo molongi akoki kopeza te. Elindami na Molinga Mosantu. Tango bakoya penza, Makanda bakonyokeli te. Balimbi. Engumba ya Makanda ebomi.",
    book_discover_makanda: "KOMONA MAKANDA",

    book_bambula_tag: "BAMBULA: MWANA WA NYIMBO",
    book_bambula_title: "BAMBULA",
    book_bambula_subtitle: "ZINGILA I · NYIMBO MOSANTU",
    book_bambula_desc: "Liboso ya maloba, elekaki nyimbo. Bambula azalaki mwana oyo akoyingi nyimbo nyonso. Tango nkembo ezalaki kopwala mpe Mboka ezalaki kuzangela, asimbaki nyimbo pembeni ya ye. Na nkembo mosantu, alongaka pakati ya Mboka ya Bazimu mpe Mboka ya Bavila. Akokumina te. Abikisi koyumba.",
    book_discover_bambula: "KOMONA BAMBULA",

    book_mokele_tag: "MOKELE: MWANA WA NDENGE",
    book_mokele_title: "MOKELE",
    book_mokele_subtitle: "Kusukela Mwana Kanda Mokonzi wa Kinshasa",
    book_mokele_desc: "Mokele azali te mwana ya mokonzi. Azali mwana ya ndenge. Binzela ya Kinshasa etembelaki ye liboso ya likolo, wapi limpiko eleki, likibi ezalaka malamu, mpe kofa ezalaka kikasakasa. Kusukela mwana Kanda mokonzi. Atongaki makambu, mbongo, mpe lokumu. Na Kinshasa, o to nakoma, o to ozali bosiki.",
    book_discover_mokele: "KOMONA MOKELE",

    book_zaiire_tag: "ZAIIRE: MOKONZI WA KONGO",
    book_zaiire_title: "MOKONZI WA KONGO",
    book_zaiire_subtitle: "Molinga ya Muhairi",
    book_zaiire_desc: "Koinzwa pembeni ya Mokonzi ya Kongo, Molinga ya Muhairi ezali te nini mpo na kotiama. Ezali mpo na kozinza. Lisusu lilobi ya putulu, bulakani, mpe silense, molinga oyo ekangi mokonzi nyonso oyo asopaki makila na bato banso, mpe ekasi ezalaki kobondela mokili yonso na maboko makasi. Tango molinga eyebi Zaiire, eyiba na kimama te. Evutu.",
    book_discover_zaiire: "KOMONA ZAIIRE",

    book_kufu_tag: "KUFU: MASINI YA MOKONZI",
    book_kufu_title: "KUFU",
    book_kufu_subtitle: "MASINI YA MOBIMBA SOKI ISOLELE",
    book_kufu_desc: "Ezali te masini ya makadi kaka. Ezali lingomba. Bosana ya lokumu. Motonga Mokonzi. Likolokwe mokonzi nyonso na mesa. Kasi mpo kozinga mokonzi, eleki nde moko kaka ya kopanda. Akaya liloba na makasi mpe asembi gina ya mokonzi na zemi oyo eleka likolo. Eleko likolo epetaka molinga. Hata te na maboko ya ye. Na maboko ya mosusu. Mpo mokonzi ya makasi azingwaka na likita te. KUFU azali wapi mokonzi nyonso akotonga na bosantu. Masini nyoso azali lingomba ya mokonzi.",
    book_explore_game: "KOMONA MASINI",

    book_amara_tag: "AMARA: MOKASI WA MAYI",
    book_amara_title: "AMARA",
    book_amara_subtitle: "ZINGILA I · MOKASI WA BANYIKIMI YA AMAZON",
    book_amara_desc: "Nyikimi nyonso esutaka mayi. Amara azali ya mayi. Azali mokasi wa mayi. Liboso oyo akoti na yango te na mayi nyonso. Mabu mabinga akoti na ye. Mokonzi te akokota ye. Molondo te akobimba mabu ya ye. Kasi Amara alembaka te soki. Pembeni ya ye eleki bakasi babozo oyo balegana na makila, limpiko, mpe muhairi. Bakasi babozo ya mayi oyo ba-embe makambu oyo ekobingisa esiki nyonso. Kusukela lisangamieselo, libota ya Agojie ebwa. Kusukela libota oyo libota ya bakasi babozo ebobingisa libota ya Afrika nkara. Ezali te lingomba ya banyikimi kaka. Wapi libota oyo libonika uta pembeni ya ISOLELE ebimba.",
    book_discover_amara: "KOMONA AMARA",

    book_zattar_tag: "ZATTAR: MOKONZI WA NDAKOTA",
    book_zattar_title: "ZATTAR",
    book_zattar_subtitle: "Oyo Abomi Bisigila",
    book_zattar_desc: "Tango Muhairi Akatisaki Ye Likolo Moko, Asombaki Kolamba Nyoso. Zattar azalaki mwana wa kolandela Likolo ya Bapindi. Kasi tango Baluzembo bazingaki mosusu, okini pembeni ya ye akanyikitsuki te. Akavema. Afundaki Ntanda Liboso mpe Lisusu ya Vegas, mbalakela ya bolonga oyo ekweli se molenge liboso ya kozala. Wapi bato ba boyebi nkani, Zattar amonaki masini. Abomaki Ntanda Lisusu ya Vegas. Hata na doluki te. Hata na lisingi te. Kasi mpo amonaki molinga mobimba moto oyo akati mayele: Ezali ya moto. Moto oyo azali Zattar. Azingwaka te. Yaka azingaki molinga esikilisi.",
    book_discover_zattar: "KOMONA ZATTAR",

    book_zaiko_tag: "ZAÏKO: MOKONZI YA LIKITA OLIKITA YA KIVUS",
    book_zaiko_title: "LINGOMBA YA ZAÏKO",
    book_zaiko_subtitle: "Aveli Te Na Likita. Abandaki Ye.",
    book_zaiko_desc: "Koinzwa Kivu Oyo Elamba Elamba. Atongwaki Kinshasa. Zaïko azalaki na mpesa te okozala. Kasi kozala ezalaki te mpesa mosusu. Na molinga oyo buswa makambu, mbongo, mpe somo, avela kusuka na liyamba. Hata te ndenge mosusu te. Kasi ndenge ya makambu. Na moninga wa ye, atongaki likolo oyo elinga likita ya Kivus akokiki te. Likolo azingwaki te. Likolo elambwaki te. Likolo nyoso ebomwaki.",
    book_discover_zaiko: "KOMONA ZAÏKO",
    
    // Universe Section
    universe_title: "NDAKOTA YA ISOLELE",
    universe_subtitle: "Baye na Lisusu",
    universe_description: "ISOLELE ezali ndakota ya motema oyo eyanoka molinga ma Afrika, likolo oyo balekaka na muhairi, mokonzi akokiki te, mpe makambu ma baboti elambaka makasisi nyonso.",
    universe_destiny_title: "Muhairi Azali Te Zingela",
    universe_destiny_desc: "Ezali koya. Moto nyoso asendiwe na makila, bazimu bakudala, mpe lingomba oyo ebomi te ya baboti.",
    universe_heritage_title: "Makila ma Mokonzi Ebamba Makambu Akudala",
    universe_heritage_desc: "Makila ma mokonzi ebamba yumbo mpe makambu ya likolo oyo elimbwaki, ilindaka kopimwa na baye na lisusu.",
    universe_resurrection_title: "Bazimu Ba Baboti Bakufa Te Kanti",
    universe_resurrection_desc: "Afrika eleki bulukhuni te kanti. Unabilo ubuyaki, mpe na yango molinga ya bazimu ebotamaki.",
    
    // Characters Section
    characters_title: "BAYE NA LISUSU",
    characters_subtitle: "Komona basaleli, lingomba, mpe basangani ya ndakota ISOLELE",
    characters_discover: "KOMONA",
    characters_zaire_title: "Mokonzi wa Kongo",
    characters_zaire_desc: "Mwana wa amba na mokonzi, ozingwaki na Molinga ya Muhairi.",
    characters_kimoya_title: "Kandake Oyo Evukaki",
    characters_kimoya_desc: "Libota ya bakasi ba nkita, momateli ya bazimu.",
    characters_zattar_title: "Motomba wa Makila",
    characters_zattar_desc: "Boni ya molongo epesongwaki makambu oyo makozela.",
    characters_twins_title: "Bazimu Babili",
    characters_twins_desc: "Bazimu babili oyo balobaka na maye mpe bambondele.",
    characters_imvula_title: "Mokasi wa Stormglass",
    characters_imvula_desc: "Mokonzi wa Stormglass, mulingi wa Bibima ya Likolo.",
    
    // Zaiire Character Page
    zaiire_title: "ZAIIRE: Mokonzi wa Kongo — Masini ya Mokonzi wa Afrika",
    zaiire_epic_subtitle: "Lingomba ya Afrika Makasi ya Libota, Makambu, na Muhairi",
    zaiire_intro_paragraph: "Na kati ya Likolo ya Kongo, wapi lingomba ya Afrika ekutanaka na binzela ya sika ya Kinshasa, mokonzi mwana moko akoyeba muhairi oyo elandi pembeni ya ye.",
    zaiire_description_p1: "ZAIIRE ezali masini ya mokonzi oyo ISOLELE etongi, ndakota ya mokonzi ya Afrika oyo etonga pembeni ya libota ya Kongo. Landela Zaiire, mokonzi mwana oyo atongwaki na mbongo oyo moto akokota ye te na Kinshasa, DRC, oyo bomemeli bakweli ba ye liboso ya bolinga ya ye ba makasi.",
    zaiire_description_p2: "Tango ba sosolaka, Kimoya apakaki pembeni ya ye Molinga ya Muhairi, sango ya bakudala oyo ezalaki pembeni ya bakosi ya Kongo bambongo. Molinga oyo eveiki makambu ya ye ya pembeni, amataka ye pembeni ya makambu ma mobele, bazimu ba baboti ba ye, mpe mosala ya makasi oyo ababengaki kolinga bato ba ye.",
    zaiire_description_p3: "ZAIIRE ezali masini ya Afrika oyo bakasi oyo ba motema basundolaki, etonga pembeni ya ingomba ya Kongo, songe ya Kongo, mpe lipilipili ya Afrika.",
    zaiire_description_p4: "Muhairi wa likolo ezali pembeni ya maboko ya ye. Zaiire akokamata muhairi mpe akolinda bato ba ye kowumbu mosusu?",
    zaiire_description_p5: "Lola lingomba ya molongoli, moto oyo asemba, mpe mavua tango mokonzi mwana azali mosaleli oyo bato ba ye basundolaki.",
    zaiire_quote: "Muhairi wa likolo ezali pembeni ya maboko ya ye. Zaiire akokamata?",
    
    // News Section
    news_title: "SALANGAZO YA SIKA",
    news_read_more: "SOMA SANGO",
    news_minutes_read: "miniti ya kosoma",
    news_published: "Bokitaki",
    
    // CTA Section
    cta_title: "YAKA NA LINGOMBA",
    cta_join_legend: "YAKA NA LINGOMBA",
    cta_description: "Mbe ya lisangamieselo ya masini oyo ezali moto na moto oyo elakisi libota ya Afrika mpe ezali kosangisa lisolo libota ya mokonzi oyo ezali koya.",
    cta_explore: "KOMONA NDAKOTA",
    cta_newsletter: "YAKA NA MOKANDA",
    
    // Footer
    footer_description: "ISOLELE ezali ndakota ya motema oyo eyanoka molinga ma Afrika, likolo oyo balekaka na muhairi, mokonzi akokiki te, mpe makambu ma baboti elambaka makasisi nyonso.",
    footer_explore: "KOMONA",
    footer_resources: "BILOKO",
    footer_newsletter_title: "MAMPI YA SIKA",
    footer_newsletter_desc: "Yaka na mokanda mpo okumwa salangazo ya sika mabongeza, likambo, mpe biloko oyo ezali malamu.",
    footer_email_placeholder: "Adlesi ya yo ya Emeli",
    footer_subscribe: "YAKA",
    footer_thank_you: "MERCI!",
    footer_copyright: "© 2026 ISOLELE. Likambo nyoso elundisami. Mosala wa Kongo",
    footer_press: "Salangazo",
    footer_careers: "Misala",
    footer_contact: "Kolela Biso",
    footer_faq: "FAQ",
    footer_terms: "Mikiliseli ya Kosedekela",
    footer_privacy: "Solange ya Bozelileli",
    
    // Shop
    shop_title: "LOPEKA",
    shop_subtitle: "Komona masini mpe biloko oyo tuko na ye",
    shop_add_to_cart: "Solanga na Bilamba",
    shop_buy_now: "KANDA SIKA",
    shop_price: "Motuzo",
    shop_sale: "Kungidia",
    shop_new: "Oyo Moyeni",
    shop_bestseller: "Oyo Masini Mongi",
    
    // Cart
    cart_title: "Bilamba Ya Yo",
    cart_empty: "Bilamba Ya Yo Ezali Pamba",
    cart_subtotal: "Motuzo Oyo Mwangu",
    cart_shipping: "Kopiwa",
    cart_total: "Motuzo Nyoso",
    cart_checkout: "Kandela",
    cart_continue_shopping: "Komba Kanda",
    cart_remove: "Longola",
    cart_quantity: "Bomokondeke",
    
    // Payment
    payment_title: "Kozongela Mbongo",
    payment_card: "Likate ya Banki",
    payment_google_pay: "Google Pay",
    payment_card_number: "Nomere ya Likate",
    payment_expiry: "Sima ya Tiyelo",
    payment_cvv: "CVV",
    payment_name: "Kombo ya Bakonzi ya Likate",
    payment_email: "Adlesi ya Emeli",
    payment_confirm: "Bimisi Kozongela",
    payment_success: "Kozongela Elendeki!",
    payment_receipt_sent: "Papele ya Kandela ethunyelaki na Emeli ya Yo",
    
    // About Page
    about_title: "Mabongeza ISOLELE",
    about_what_is: "ISOLELE Ezali Nini?",
    about_vision_title: "LIYEBI",
    about_vision_desc: "Buondola Afrika ndenge ya lingomba, molinga, mpe makambu. Tonga liselo elambaka lingomba oyo ekosanga lipilipili, lilasalo, mpe unabilo pembeni ya moto nyoso oyo eyelami.",
    about_pillars_title: "Bakainda Basankutuku ba ISOLELE",
    about_pillar1_title: "Ndakota ya Lingomba",
    about_pillar1_desc: "Mobele monyoyi oyo ezali tata lingomba ya Afrika - kusukela Likolo ya Kongo, Kush, na Axum, kanda Likolo oyo efalaki oyo eyangiwa na Nzambe, bakasi ba nkita, mpe basosolaki.",
    about_pillar2_title: "Mosala ya Kobimba mpe Masuwa",
    about_pillar2_desc: "Kusukela masini kanda mambongo, tele, maye, mpe sinema - ISOLELE etonga ndako oyo ezali na mawa mpo basaleli ba Afrika bokota lingomba ba ye na makambu mabota, esika, mpe motema.",
    about_pillar3_title: "Buondola ya Libota",
    about_pillar3_desc: "ISOLELE ezali lindu la bayebi mosusu - mosala mpo okuyemba, kosangisa, mpe kobongola muhairi, lingomba, mpe makambu ya Nzambe ya Afrika.",
    about_pillar4_title: "Mosungu ya Bomoto",
    about_pillar4_desc: "Mwana nyoso oyo akofunda ISOLELE akoyeba basaleli oyo eyambaka ye, balobaka ye, balingaka ye, mpe bakungaka baboti ba ye.",
    
    // Founder Page
    founder_title: "MOKONZI OYO ATONGAKI",
    founder_name: "H.R.M Mokonzi Kufulula",
    founder_role: "Motongaki mpe Mobakoli ya Ndakota ISOLELE",
    founder_bio: "Moto oyo ayebaki maliki ya ISOLELE, ozangelaki mpo buondola molinga ma Afrika mpe kolinga basaleli oyo eyambaka libota ya makasi ya Afrika.",
    
    // Common
    language: "Lokuta",
    theme: "Litara",
    discover: "Komona",
    latestNews: "Salangazo ya Sika",
    loading: "Kolanda...",
    error: "Lipata",
    success: "Elendeki",
    cancel: "Longola",
    save: "Kotia",
    edit: "Lungisa",
    delete: "Longola",
    search: "Tanda",
    search_placeholder: "Tanda...",
    view_all: "Komona Nyoso",
    learn_more: "Funda Mosusu",
    back: "Liboso",
    next: "Oyo Ezali Kaya",
    previous: "Oyo Elekaki Liboso",
    site_map: "Masini ya Site",
    accessibility: "Kozala na Nta Likoki",
    cookie_settings: "Mizaleli ya Cookie",
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
    
    // Zaiire Character Page (Zulu)
    zaiire_title: "ZAIIRE: Isikhosana SaseKongo — Indlela YabaSuapahiro Baseafrika",
    zaiire_epic_subtitle: "I-Epic Ye Fantasi YaseAfrika Yobubuntu, Amaampilo, Nokubhisene",
    zaiire_intro_paragraph: "Enkathini Yekhosi YaseKongo, apho Imbali Yakudala YaseAfrika Ikhuleka Namandlela OkaMuva AseKinshasa, Isikhosana Sinye Sizakuthola Inzalo Ebhaliwe Engubeni Yalo.",
    zaiire_description_p1: "ZAIIRE Yindlu Egubhile Ye-ISOLELE, Ulimwengu Wabasuahereo BaseAfrika Ongububele Kubuntu BaseKongo. Landela uZaiire, Isikhosana Esikhuliswe Engubeni Ezimali AseKinshasa, DRC, Obhaliweyo Ekugodini Likababa Lakhe.",
    zaiire_description_p2: "Ngesikhathi Sokubuyisana Naye, Umakhe Ubeka Isigubhu Ezweni Lakhe Esibizwa Nge-Necklace of Destiny, Into Enkulu Eyapigiwe Iminyaka Yonke Yabakhosi BaseKongo. Isigubhu Livuselela Amaampilo Akhe Angaphakathi, Amunamthela Kwelulamani Lobukhosi, Amasipiriti Ezikhosikazi Zakhe, Nokusebenza Kwenzalo Yakhe Ukuba Umlingisele Wabantu Bakhe.",
    zaiire_description_p3: "ZAIIRE Yindlela Ibhalwe Kude Baseafrika Abadala Emhlabeni Ubhaliweyo, Isikhumbuzo Sengqondo YaseKongo, Isikhumbuzo SaBantu, Nezikhosano ZaseAfrika.",
    zaiire_description_p4: "Inzalo Yebukhosi Ibhaliswe Ezandleni Zakhe. UZaiire Uzakwemukela Ubuntu Bakhe Nokuvikela Abantu Bakhe Kubububulo Obuzokwenza Zonke Izinto Azithanda.",
    zaiire_description_p5: "Mane Isaga Sokuguquka, Umyeni, Nebukhosi Ngesikhathi Isikhosana Sibe Umlingisele Abaliwa Abantu Bakhe.",
    zaiire_quote: "Inzalo Yebukhosi Ibhaliswe Ezweni Lakhe. UZaiire Uzakwemukela?",
    
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
    footer_copyright: "© 2026 Isolele. Onke amalungelo alondolozwa. Likabelo le-Umkhosi Wakongo.",
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
  
  // Chinese
  zh: {
    nav_home: "首页", nav_about: "关于", nav_founder: "创始人", nav_news: "新闻", nav_characters: "角色",
    nav_shop: "商店", nav_supporters: "支持者", nav_contact: "联系", nav_games: "游戏", nav_all_characters: "所有角色",
    nav_become_supporter: "成为支持者", nav_partners: "合作伙伴", nav_restaurant: "合作餐厅", nav_fashion: "时尚", nav_settings: "设置",
    hero_title: "扎伊尔-刚果王子", hero_subtitle: "命运的项链", hero_description: "一部令人振奋的动作冒险故事，回应《狮子王》和《黑豹》的精神，同时为年���读者呈现遗产、勇气和自我发现的庆祝。",
    hero_buy_now: "立即购买", hero_discover: "发现故事", hero_preorder: "预订", hero_launch_price: "发布价格",
    book_welcome_tag: "欢迎来到孤独灵魂", book_chosen_ones_title: "被选者", book_chosen_ones_subtitle: "一个源于刚果根源的完整宇宙...",
    book_chosen_ones_desc: "孤独灵��是一个远大的宇宙，旨在恢复非洲叙事的灵魂，一个神话帝国，其中超级英雄被命运选中，王国永远不会被遗忘，祖先的力量活在每一页、每一个预言、每一场战斗中。",
    book_explore_universe: "探索宇宙", book_makanda_tag: "玛卡达王朝-第一册", book_makanda_title: "玛卡达",
    book_makanda_subtitle: "历史上最���大的帝国没有失落。它被故意隐藏了。", book_makanda_desc: "在中非深处存在一个世界不���道的文明。精神上觉醒。技术先进。由圣火保护。",
    book_discover_makanda: "发现玛卡达", book_bambula_tag: "班布拉：节奏之子", book_bambula_title: "班布拉",
    book_bambula_subtitle: "第一章·圣鼓", book_bambula_desc: "在文字之前，有节奏。班布拉是听到一切的孩子。",
    book_discover_bambula: "发现班布拉", book_mokele_tag: "莫克勒：在斗争中出生",
    book_mokele_title: "莫克勒", book_mokele_subtitle: "从孩子到金沙萨之主", book_mokele_desc: "莫克勒不是作为国王出生。他生在斗争中。",
    book_discover_mokele: "发现莫克勒", book_zaiire_tag: "扎伊尔：刚果王子", book_zaiire_title: "刚果王子",
    book_zaiire_subtitle: "命运的项链", book_zaiire_desc: "在刚果王国的心脏中锻造，命运的项链从不被穿着。", book_discover_zaiire: "发现扎伊尔",
    book_kufu_tag: "库夫：皇冠游戏", book_kufu_title: "库夫", book_kufu_subtitle: "孤独灵魂宇宙的官方游戏",
    book_kufu_desc: "这不仅仅是一个纸牌游戏。这是一个仪式。", book_explore_game: "探索游戏",
    book_amara_tag: "阿玛拉：海之女王", book_amara_title: "阿玛拉", book_amara_subtitle: "第一章·亚马逊海盗之女王",
    book_amara_desc: "每个海盗都害怕大海。阿玛拉拥有它。", book_discover_amara: "发现阿玛拉",
    book_zattar_tag: "扎塔尔：宇宙王子", book_zattar_title: "扎塔尔", book_zattar_subtitle: "王座征服者",
    book_zattar_desc: "当命运拒绝了他一个王国时，他决定夺取所有王国。", book_discover_zattar: "发现扎塔尔",
    book_zaiko_tag: "扎伊科：基武斯街道最后的国王", book_zaiko_title: "扎伊科的传说",
    book_zaiko_subtitle: "他没有从街道上崛起。他征服了他们。", book_zaiko_desc: "生于北基武斯。在金沙萨锻造。扎伊科从不打算生存。",
    book_discover_zaiko: "发现扎伊科",
    universe_title: "孤独灵魂宇宙", universe_subtitle: "被选者", universe_description: "孤独灵魂是一个远大的宇宙，旨在恢复非洲叙事的灵魂",
    universe_destiny_title: "命运不是选择", universe_destiny_desc: "这是一个召唤。", 
    universe_heritage_title: "王室血脉携带古老力量", universe_heritage_desc: "王血携带被遗忘王国的记忆和力量。",
    universe_resurrection_title: "祖先灵魂永不消亡", universe_resurrection_desc: "非洲从不无力。",
    characters_title: "被选者", characters_subtitle: "认识孤独灵魂宇宙的英雄、传奇和守护者",
    characters_discover: "发现", characters_zaire_title: "刚果王子", characters_zaire_desc: "雷鸣和皇族之子，被命运项链选中。",
    characters_kimoya_title: "基莫亚", characters_kimoya_desc: "被火焰之女赋予力量的战士。", characters_zattar_title: "扎塔尔",
    characters_zattar_desc: "宇宙的征服者。", characters_twins_title: "双胞胎", characters_twins_desc: "命运的守护者。",
    characters_imvula_title: "因夫拉", characters_imvula_desc: "雨的女人。",
    news_title: "新闻", news_read_more: "阅读更多", news_minutes_read: "分钟阅读", news_published: "发布于",
    cta_title: "加入传奇", cta_join_legend: "成为传奇的一部��", cta_description: "发现孤独灵魂宇宙中的故事",
    cta_explore: "探索", cta_newsletter: "通讯",
    footer_description: "孤独灵魂：恢复非洲叙事的灵魂", footer_explore: "探索", footer_resources: "资源",
    footer_newsletter_title: "订阅我们的���讯", footer_newsletter_desc: "了解最新故事和更新",
    footer_email_placeholder: "输入您的电子邮件", footer_subscribe: "订阅", footer_copyright: "版权所有",
    footer_press: "新闻", footer_careers: "职业", footer_contact: "联系", footer_faq: "常见问题",
    footer_terms: "条款", footer_privacy: "隐私", shop_title: "商店", shop_subtitle: "购买独家商品",
    shop_add_to_cart: "添加到购物车", shop_buy_now: "立即购买", shop_price: "价格", shop_sale: "销售",
    shop_new: "新品", shop_bestseller: "畅销书", cart_title: "购物车", cart_empty: "您的购物车是空的",
    cart_subtotal: "小计", cart_shipping: "运费", cart_total: "总计", cart_checkout: "结账",
    cart_continue_shopping: "继续购物", cart_remove: "移除", cart_quantity: "数量",
    payment_title: "付款", payment_card: "信用卡", payment_google_pay: "Google Pay",
    payment_card_number: "卡号", payment_expiry: "有效期", payment_cvv: "CVV",
    payment_name: "持卡人名字", payment_email: "电子邮件", payment_confirm: "确认付款",
    payment_success: "付款成功！", payment_receipt_sent: "收据已发送至您的电子邮件",
    about_title: "关于孤独灵魂", about_what_is: "什么是孤独灵魂？",
    about_vision_title: "愿景", about_vision_desc: "恢复非洲作为故事、想象力和力量的源泉的地位。",
    about_pillars_title: "孤独灵魂的四个支柱", about_pillar1_title: "精神世界",
    about_pillar1_desc: "充满了足够的国王和皇后来统治整个非洲，从刚果王位到库什，再到阿克苏姆。",
    about_pillar2_title: "创意出版和本地化", about_pillar2_desc: "从故事到思想，从游戏到电影，孤独灵魂为非洲创意工作者创建了一个平台。",
    about_pillar3_title: "人类觉醒", about_pillar3_desc: "孤独灵魂是一个伟大的目标的第一部分，旨在发现、探���和恢复非洲的皇族、精神和超越。",
    about_pillar4_title: "��童脚步", about_pillar4_desc: "阅读孤独灵魂的儿童将发现看起来像他们的保护者，讲他们的语言，保护他们的土地，尊重他们的祖先。",
    founder_title: "创始人", founder_name: "库夫鲁鲁国王陛下", founder_role: "孤独灵魂宇宙的创造者和建筑师",
    founder_bio: "孤独灵魂背后的远见者，致力于恢复非洲叙事的灵魂和庆祝非洲皇族身份。",
    language: "语言", theme: "主题", discover: "发现", latestNews: "最新新闻", loading: "加载中...",
    error: "错误", success: "成功", cancel: "取消", save: "保存", edit: "编辑", delete: "删除",
    search: "搜索", search_placeholder: "搜索...", view_all: "查看全部", learn_more: "了解更多",
    back: "返回", next: "下一步", previous: "上一步", site_map: "网站地图", accessibility: "无障碍",
    cookie_settings: "Cookie设置", footer_thank_you: "谢谢！",
  },
  
  // Hindi
  hi: {
    nav_home: "होम", nav_about: "परिचय", nav_founder: "संस्थापक", nav_news: "समाचार", nav_characters: "पात्र",
    nav_shop: "दुकान", nav_supporters: "समर्थक", nav_contact: "संपर्क", nav_games: "खेल", nav_all_characters: "सभी पात्र",
    nav_become_supporter: "समर्थक बनें", nav_partners: "भागीदार", nav_restaurant: "भागीदार रेस्तरां", nav_fashion: "फैशन", nav_settings: "सेटिंग्स",
    hero_title: "जायरे - कांगो के ���ाजकुमा���", hero_subtitle: "नियति का हार", hero_description: "एक प्रेरणादायक कार्य-संचालित साहसिक कथा जो द लायन किंग और ब्लैक पैंथर की भावना को प्रतिध्वनित करती है।",
    hero_buy_now: "अभी खरीदें", hero_discover: "कहानी की खोज करें", hero_preorder: "पूर्व-ऑर्डर करें", hero_launch_price: "लॉन्च मूल्य",
    book_welcome_tag: "आइसलेल में स्वागत है", book_chosen_ones_title: "चुने हुए", book_chosen_ones_subtitle: "कांगो की जड़ों से जन्मी एक पूरी दुनिया...",
    book_chosen_ones_desc: "आइसलेल एक दूरदर्शी ब्रह्मांड है जो अफ्रीकी कथा की आत्मा को बहाल करने के लिए जन्मा।",
    book_explore_universe: "ब्रह्मांड की खोज करें", book_makanda_tag: "मकांडा राजवंश - पुस्तक I", book_makanda_title: "मकांडा",
    book_makanda_subtitle: "इतिहास का सबसे शक्तिशाली साम्राज्य खो नहीं गया। इसे जानबूझकर छिपाया गया।", book_makanda_desc: "मध्य अफ्रीका में गहराई में एक सभ्यता ��ौजूद थी।",
    book_discover_makanda: "मकांडा की खोज करें", book_bambula_tag: "बांबुला: लय का बालक", book_bambula_title: "बांबुला",
    book_bambula_subtitle: "अध्याय I · पवित्र ड्रम", book_bambula_desc: "शब्दों से पहले, लय थी।", 
    book_discover_bambula: "बांबुला की खोज करें", book_mokele_tag: "मोकेल: संघर्ष में जन्मा",
    book_mokele_title: "मोकेल", book_mokele_subtitle: "बालक स��� किनशासा के प्रभु तक", book_mokele_desc: "मोकेल राजा के रूप में जन्मा नहीं।",
    book_discover_mokele: "मोकेल की खोज करें", book_zaiire_tag: "जायरे: कांगो का राजकुमार", book_zaiire_title: "कांगो का राजकुमार",
    book_zaiire_subtitle: "नियति का हार", book_zaiire_desc: "कांगो साम्राज्य के दिल में बनाया गया।", book_discover_zaiire: "जायरे की खोज करें",
    book_kufu_tag: "कुफु: ताज का खेल", book_kufu_title: "कुफु", book_kufu_subtitle: "आइसलेल ब्रह्मांड का आधिकारिक खेल",
    book_kufu_desc: "यह केवल एक कार्ड गेम नहीं है।", book_explore_game: "खेल की खोज करें",
    book_amara_tag: "अमारा: समुद्र की रानी", book_amara_title: "अमारा", book_amara_subtitle: "अध्याय I · अमेज़न के समुद्री डाकुओं की रानी",
    book_amara_desc: "हर समुद्री डाकू समुद्र से डरता है।", book_discover_amara: "अमारा की खोज करें",
    book_zattar_tag: "ज़त्तर: ब्रह्मांड का राजकुमार", book_zattar_title: "ज़त्तर", book_zattar_subtitle: "सिंहासन के विजेता",
    book_zattar_desc: "जब भाग्य ने उसे एक राज्य से इनकार कर दिया।", book_discover_zattar: "ज़त्तर की खोज करें",
    book_zaiko_tag: "ज़ायको: किवु की सड़कों के अंतिम राजा", book_zaiko_title: "ज़ायको की किंवदंती",
    book_zaiko_subtitle: "वह सड़कों से नहीं उठा। उन्होंने उन पर विजय प्राप्त की।", book_zaiko_desc: "उत्तर किवु में जन्मा।",
    book_discover_zaiko: "ज़ायको की खोज करें",
    universe_title: "आइसलेल ब्रह्मांड", universe_subtitle: "चुने हुए", universe_description: "आइसलेल एक दूरदर्शी ब्रह्मांड है जो अफ्रीकी कथा की आत्मा को बहाल करने के लिए बनाया गया।",
    universe_destiny_title: "नियति एक विकल्प नहीं है", universe_destiny_desc: "यह एक आह्��ान है।",
    universe_heritage_title: "राजकीय वंशज प्राचीन शक्ति लेते हैं", universe_heritage_desc: "राजकीय रक्त भूले हुए साम्राज्यों की स्मृति और शक्ति लेता है।",
    universe_resurrection_title: "पूर्वज की आत्माएं कभी नहीं मरती", universe_resurrection_desc: "अफ्रीका कभी असहाय नहीं था।",
    characters_title: "चुने हुए", characters_subtitle: "आइसलेल ब्रह्मांड के नायकों, किंवदंतियों और अभिभावकों से मिलें",
    characters_discover: "खोज करें", characters_zaire_title: "कांगो का राजकुमार", characters_zaire_desc: "बिजली और राजकीयता का पुत्र।",
    characters_kimoya_title: "किमोया", characters_kimoya_desc: "आग की महिला द्वारा सशक्त योद्धा।", characters_zattar_title: "ज़त्तर",
    characters_zattar_desc: "ब्रह्मांड का विजेता।", characters_twins_title: "जुड़वाँ", characters_twins_desc: "नियति के रक्षक।",
    characters_imvula_title: "इमवुला", characters_imvula_desc: "वर्षा की महिला।",
    news_title: "समाचार", news_read_more: "और पढ़ें", news_minutes_read: "मिनट पढ़ना", news_published: "पर प्रकाशित",
    cta_title: "किंवदंती में शामिल हों", cta_join_legend: "किंवदंती का हिस्सा बनें", cta_description: "आइसलेल ब्रह्मांड में कहानियों की खोज करें",
    cta_explore: "अन्वेषण करें", cta_newsletter: "समाचार पत्र",
    footer_description: "आइसलेल: अफ्रीकी कथा की आत्मा को बहाल करना", footer_explore: "अन्वेषण करें", footer_resources: "संसाधन",
    footer_newsletter_title: "हमारे न्यूजलेटर की सदस्यता लें", footer_newsletter_desc: "नवीनतम कहानियां और अपडेट जानें",
    footer_email_placeholder: "अपना ईमेल दर्ज करें", footer_subscribe: "सदस्यता लें", footer_copyright: "कॉपीराइट",
    footer_press: "प्रेस", footer_careers: "करियर", footer_contact: "संपर्क", footer_faq: "अक्सर पूछे जाने वाले प्रश्न",
    footer_terms: "शर्तें", footer_privacy: "गोपनीयता", shop_title: "दुकान", shop_subtitle: "एक्सक्लूसिव सामान खरीदें",
    shop_add_to_cart: "कार्ट में जोड़ें", shop_buy_now: "अभी खरीदें", shop_price: "मूल्य", shop_sale: "बिक्री",
    shop_new: "नया", shop_bestseller: "सर्वाधिक विक्रय", cart_title: "कार्ट", cart_empty: "आपकी कार्ट खाली है",
    cart_subtotal: "उप-कुल", cart_shipping: "शिपिंग", cart_total: "कुल", cart_checkout: "चेकआउट",
    cart_continue_shopping: "खरीदारी जारी रखें", cart_remove: "हटाएं", cart_quantity: "मात्रा",
    payment_title: "भुगतान", payment_card: "क्रेडिट कार्ड", payment_google_pay: "गूगल पे",
    payment_card_number: "कार्ड नंबर", payment_expiry: "समाप्ति तिथि", payment_cvv: "CVV",
    payment_name: "कार्डधारक का नाम", payment_email: "ईमेल", payment_confirm: "भुगतान की पुष्टि करें",
    payment_success: "भुगतान सफल!", payment_receipt_sent: "रसीद आपके ईमेल पर भेजी गई",
    about_title: "आइसलेल के बारे में", about_what_is: "आइसलेल क्या है?",
    about_vision_title: "द���ष्टि", about_vision_desc: "अफ्रीका को कहानी, कल्पना और शक्ति के स्रोत के रूप में बहाल करना।",
    about_pillars_title: "आइसलेल के चार स्तंभ", about_pillar1_title: "आध्यात्मिक दुनिया",
    about_pillar1_desc: "पूरे अफ्रीका पर शासन करने के लिए पर्याप्त राजाओं और रानियों से भरा हुआ��",
    about_pillar2_title: "रचनात्मक प्रकाशन और स्थानीयकरण", about_pillar2_desc: "कहानी से सोच तक, खेल से सिनेमा तक, आइसलेल अफ्रीकी रचनात्मक कार्यकर्ताओं के लिए एक मंच बनाता है।",
    about_pillar3_title: "मानव जागृति", about_pillar3_desc: "आइसलेल एक महान उद्देश���य का पहला हिस्सा है जिसका लक्ष्य अफ्रीका की रॉयल��टी, आत्मा और परे को खोजना, खोज करना और बहाल करना है।",
    about_pillar4_title: "बाल पदचिन्ह", about_pillar4_desc: "आइसलेल पढ़ने वाला बच्चा ऐसे संरक्षकों की खोज करेगा जो उसकी तरह दिखते हैं।",
    founder_title: "संस्थापक", founder_name: "राजा कुफुलुला महामहिम", founder_role: "आइसलेल ब्रह्मांड के निर्माता और आर्किटेक्ट",
    founder_bio: "आइसलेल के पीछे दूरदर��शी, अफ्रीकी कथा की आत्मा को बहाल ��रने और अफ्रीकी राजकीय पहचान का जश्न मनाने के लिए प्रतिबद्ध।",
    language: "भाषा", theme: "विषय", discover: "खोज करें", latestNews: "नवीनतम समाचार", loading: "लोड हो रहा है...",
    error: "त्रुटि", success: "सफलता", cancel: "रद्द करें", save: "सहेजें", edit: "संपादित करें", delete: "हटाएं",
    search: "खोज", search_placeholder: "खोज...", view_all: "सभी देखें", learn_more: "और जानें",
    back: "वापस", next: "अगला", previous: "पिछला", site_map: "साइट मैप", accessibility: "पहुंच",
    cookie_settings: "कुकी सेटिंग्स", footer_thank_you: "धन्यवाद!",
  },
  
  // Russian
  ru: {
    nav_home: "Главная", nav_about: "О нас", nav_founder: "Основатель", nav_news: "Новости", nav_characters: "Персонажи",
    nav_shop: "Магазин", nav_supporters: "Сторонники", nav_contact: "Контакт", nav_games: "Игры", nav_all_characters: "Все персонажи",
    nav_become_supporter: "Стать сторонником", nav_partners: "Партнеры", nav_restaurant: "Партнерский ресторан", nav_fashion: "Мода", nav_settings: "Параметры",
    hero_title: "ЗАИР - ПРИНЦ КОНГО", hero_subtitle: "��жерелье Судьбы", hero_description: "Вдохновляющая полная экшена приключенческая история, которая резонирует с духом «Короля льва» и «Черной пантеры».",
    hero_buy_now: "КУПИТЬ СЕЙЧАС", hero_discover: "ОТКРОЙТЕ ИСТОРИЮ", hero_preorder: "Предзаказ", hero_launch_price: "Цена запуска",
    book_welcome_tag: "ДОБРО ПОЖАЛОВАТЬ В ISOLELE", book_chosen_ones_title: "ИЗБРАННЫЕ", book_chosen_ones_subtitle: "Целая вселенная, рожденная из корней Конго...",
    book_chosen_ones_desc: "Isolele - это дальновидная всел��нная, созданная для восстановления души африканского повествования.",
    book_explore_universe: "ИССЛЕДУЙТЕ ВСЕЛЕННУЮ", book_makanda_tag: "ДИНАСТИЯ МАКАНА - КНИГА I", book_makanda_title: "МАКАНА",
    book_makanda_subtitle: "Самая мощная империя в истории была не потеряна. Она была намеренно спрятана.", book_makanda_desc: "Глубоко в Центральной Африке существовала цивилизация, о которой миру никогда не следовало узнавать.",
    book_discover_makanda: "ОТКРОЙТЕ МАКАНА", book_bambula_tag: "БАМБУЛА: ДИТЯ РИТМА", book_bambula_title: "БАМБУЛА",
    book_bambula_subtitle: "ГЛАВА I · СВЯЩЕННЫЙ БАРАБАН", book_bambula_desc: "До слов был ритм.",
    book_discover_bambula: "ОТКРОЙТЕ БАМБУЛА", book_mokele_tag: "МОКЕЛЕ: РОЖДЕН В БОРЬБЕ",
    book_mokele_title: "МОКЕЛЕ", book_mokele_subtitle: "От ребенка к хозяину Киншасы", book_mokele_desc: "Мокеле рожден не королём.",
    book_discover_mokele: "ОТКРОЙТЕ МОКЕЛЕ", book_zaiire_tag: "ЗАИР: ПРИНЦ КОНГО", book_zaiire_title: "ПРИНЦ КОНГО",
    book_zaiire_subtitle: "Ожерелье Судьбы", book_zaiire_desc: "Выкованное в сердце Королевства Конго, Ожерелье Судьбы никогда не предназначалось для ношения.", book_discover_zaiire: "ОТКРОЙТЕ ЗАИРА",
    book_kufu_tag: "КУФУ: ИГРА КОРОН", book_kufu_title: "КУФУ", book_kufu_subtitle: "ОФИЦИАЛЬНАЯ ИГРА ВСЕЛЕННОЙ ISOLELE",
    book_kufu_desc: "Это не просто карточная игра. Это церемония.", book_explore_game: "ИССЛЕДУЙТЕ ИГ��У",
    book_amara_tag: "АМАРА: КОРОЛЕВА МОРЕЙ", book_amara_title: "АМАРА", book_amara_subtitle: "ГЛАВА I · КОРОЛЕВА ПИРАТОВ АМАЗОНКИ",
    book_amara_desc: "Каждый пират боится океана. Амара владеет им.", book_discover_amara: "ОТКРОЙТЕ АМАРА",
    book_zattar_tag: "ЗАТТАР: ПРИНЦ ВСЕЛЕННОЙ", book_zattar_title: "ЗАТТАР", book_zattar_subtitle: "Завоеватель тронов",
    book_zattar_desc: "Когда Судьба отказала ему одного королевства, он решил завоевать их все.", book_discover_zattar: "ОТКРОЙТЕ ЗАТТАРА",
    book_zaiko_tag: "ЗАИКО: ПОСЛЕДНИЙ КОРОЛЬ УЛИЦ КИВУ", book_zaiko_title: "ЛЕГЕНДА О ЗАИКО",
    book_zaiko_subtitle: "Он не поднялся с улиц. Он их завоевал.", book_zaiko_desc: "Рожден в Северном Киву. Закован в Киншасе.",
    book_discover_zaiko: "ОТКРОЙТЕ ЗАИКО",
    universe_title: "ВСЕЛЕННАЯ ISOLELE", universe_subtitle: "Избранные", universe_description: "Isolele - это дальновидная вселенная, созданная для восстановления души африканского повествования.",
    universe_destiny_title: "Судьба - это не выбор", universe_destiny_desc: "Это зов.",
    universe_heritage_title: "Королевская кровь несет дре��нюю силу", universe_heritage_desc: "Королевская кровь хранит память и мощь забытых королевств.",
    universe_resurrection_title: "Духи предков никогда не умирают", universe_resurrection_desc: "Африка никогда не была беспомощной.",
    characters_title: "ИЗБРАННЫЕ", characters_subtitle: "Встретьте героев, легенды и хранителей вс��ленной Isolele",
    characters_discover: "ОТКРОЙТЕ", characters_zaire_title: "Принц Конго", characters_zaire_desc: "Сын грома и королевского рода.",
    characters_kimoya_title: "Кимоя", characters_kimoya_desc: "Воин, наделенный силой Женщины Огня.", characters_zattar_title: "Заттар",
    characters_zattar_desc: "Завоеватель вселенной.", characters_twins_title: "Близнецы", characters_twins_desc: "Хранители судьбы.",
    characters_imvula_title: "Имвула", characters_imvula_desc: "Женщина дождя.",
    news_title: "Новости", news_read_more: "Узнать больше", news_minutes_read: "минут чтения", news_published: "Опубликовано",
    cta_title: "Присоединяйтесь к легенде", cta_join_legend: "Станьте частью легенды", cta_description: "Откройте истории вселенной Isolele",
    cta_explore: "Исследуйте", cta_newsletter: "Информационный бюллетень",
    footer_description: "Isolele: Восстановление души африканского повествования", footer_explore: "Исследуйте", footer_resources: "Ресурсы",
    footer_newsletter_title: "Подпишитесь на наш информационный бюллетень", footer_newsletter_desc: "Узнайте о последних историях и обновлениях",
    footer_email_placeholder: "Введите ваш адрес электронной почты", footer_subscribe: "Подписаться", footer_copyright: "Авторское право",
    footer_press: "Пресс", footer_careers: "Карьера", footer_contact: "Контакт", footer_faq: "Часто задаваемые вопросы",
    footer_terms: "Условия", footer_privacy: "Конфиденциальность", shop_title: "Магазин", shop_subtitle: "Купите эксклюзивные товары",
    shop_add_to_cart: "Добавить в корзину", shop_buy_now: "Купить сейчас", shop_price: "Цена", shop_sale: "Распродажа",
    shop_new: "Новое", shop_bestseller: "Бестселлер", cart_title: "Корзина", cart_empty: "Ваша корзина пуста",
    cart_subtotal: "Итого", cart_shipping: "Доставка", cart_total: "Всего", cart_checkout: "Оформить заказ",
    cart_continue_shopping: "Продолжить покупки", cart_remove: "Удалить", cart_quantity: "Количество",
    payment_title: "Платеж", payment_card: "Кредитная карта", payment_google_pay: "Google Pay",
    payment_card_number: "Номер карты", payment_expiry: "Срок действия", payment_cvv: "CVV",
    payment_name: "Имя держателя карты", payment_email: "Электронная почта", payment_confirm: "Подтвердить платеж",
    payment_success: "Платеж успешен!", payment_receipt_sent: "Квитанция отправлена на вашу электронную почту",
    about_title: "ОБ ISOLELE", about_what_is: "Что такое ISOLELE?",
    about_vision_title: "ВИДЕНИЕ", about_vision_desc: "Восстановить Африку как источник историй, воображения и силы.",
    about_pillars_title: "Четыре столпа Isolele", about_pillar1_title: "Духовный мир",
    about_pillar1_desc: "Населен достаточным количеством королей и королев, чтобы управлять всей Африкой.",
    about_pillar2_title: "Творческое издательство и локализация", about_pillar2_desc: "От историй до идей, от игр до кинематографа, Isolele создает платформу для африканских творческих работников.",
    about_pillar3_title: "Пробуждение человечества", about_pillar3_desc: "Isolele - это первая часть великой цели, направленной на открытие, изучение и восстановление африканского королевства.",
    about_pillar4_title: "Следы детей", about_pillar4_desc: "Ребенок, читающий Isolele, откроет для себя защитников, которые выглядят как он.",
    founder_title: "Основатель", founder_name: "Его королевское величество король Куфулула", founder_role: "Создатель и архитектор вселенной Isolele",
    founder_bio: "Прови��ец, стоящий за Isolele, посвященный восстановлению души африканского повествования и празднованию африканской королевской идентичности.",
    language: "Язык", theme: "Тема", discover: "Откройте", latestNews: "Последние новости", loading: "Загрузка...",
    error: "Ошибка", success: "Успех", cancel: "Отмена", save: "Сохранить", edit: "Редактировать", delete: "Удалить",
    search: "Поиск", search_placeholder: "Поиск...", view_all: "Просмотреть все", learn_more: "Узнать больше",
    back: "Назад", next: "Далее", previous: "Предыдущий", site_map: "Карта сайта", accessibility: "Доступность",
    cookie_settings: "Параметры файлов cookie", footer_thank_you: "Спасибо!",
  },

  // Japanese (ja)
  ja: {
    nav_home: "ホーム", nav_about: "について", nav_founder: "創設者", nav_news: "ニュース", nav_characters: "キャラクター",
    nav_shop: "ショップ", nav_supporters: "サポーター", nav_contact: "お問い合わせ", nav_games: "ゲーム", nav_all_characters: "すべてのキャラクター",
    nav_become_supporter: "サポーターになる", nav_partners: "パートナー", nav_restaurant: "パートナーレストラン", nav_fashion: "ファッション", nav_settings: "設定",
    hero_title: "ザイーレ - コンゴの王子", hero_subtitle: "運命のネックレス", hero_description: "ライオンキングとブラックパンサーの精神を反映した、元気づけられるアクション満載の冒険。",
    hero_buy_now: "今すぐ購入", hero_discover: "ストーリーを発見", hero_preorder: "予約注文", hero_launch_price: "発売価格",
    book_welcome_tag: "ISOLELEへようこそ", book_chosen_ones_title: "選ばれし者たち", book_chosen_ones_subtitle: "コンゴの根から生まれた完全な宇宙...",
    book_chosen_ones_desc: "ISOLELEはアフリカのストーリーテリングの魂を取り戻すために生まれた先見的な宇宙です。",
    book_explore_universe: "宇宙を探索", book_makanda_tag: "マカンダ王朝 - 第I巻", book_makanda_title: "マカンダ",
    book_makanda_subtitle: "歴史上最も強大な帝国は失われていません。意図的に隠されていたのです。", book_makanda_desc: "中央アフリカの奥深くに、世界が知ることのない文明が存在していました。",
    book_discover_makanda: "マカンダを発見", book_bambula_tag: "バンブラ：リズムの子", book_bambula_title: "バンブラ",
    book_bambula_subtitle: "第I章・聖なる太鼓", book_bambula_desc: "言葉の前にはリズムがありました。",
    book_discover_bambula: "バンブラを発見", book_mokele_tag: "モケレ：苦難の中に生まれて",
    book_mokele_title: "モケレ", book_mokele_subtitle: "少年からキンシャサの主へ", book_mokele_desc: "モケレは王として生まれたのではありません。",
    book_discover_mokele: "モケレを発見", book_zaiire_tag: "ザイーレ：コンゴの王子", book_zaiire_title: "コンゴの王子",
    book_zaiire_subtitle: "運命のネックレス", book_zaiire_desc: "コンゴ王国の��で鍛造された、運命のネックレスは身に着けるためのものではありませんで��た。", book_discover_zaiire: "ザイーレを発見",
    book_kufu_tag: "クフ：王冠の게임", book_kufu_title: "クフ", book_kufu_subtitle: "ISOLELE宇宙の公式ゲーム",
    book_kufu_desc: "これは単なるカードゲームではありません。", book_explore_game: "ゲームを探索",
    book_amara_tag: "アマラ：海の女王", book_amara_title: "アマラ", book_amara_subtitle: "第I章・アマゾン海賊の女王",
    book_amara_desc: "すべての海賊は海を恐れます。", book_discover_amara: "アマラを発見",
    book_zattar_tag: "ザッター：宇宙の王子", book_zattar_title: "ザッター", book_zattar_subtitle: "玉座の征服者",
    book_zattar_desc: "運命が���に一つの王国を拒んだとき、彼はすべてを征服することを決めまし���。", book_discover_zattar: "ザッターを発見",
    book_zaiko_tag: "ザイコ：キヴ地域の最後の王", book_zaiko_title: "ザイコの伝説",
    book_zaiko_subtitle: "彼は通りから上がりませんでした。彼らを征服しました。", book_zaiko_desc: "北キヴで生まれました��",
    book_discover_zaiko: "ザイコを発見",
    universe_title: "ISOLELE宇宙", universe_subtitle: "選ばれし者たち", universe_description: "ISOLELEはアフリカのストーリーテリングの魂を取り戻すために生まれた先見的な宇宙です。",
    universe_destiny_title: "運命は選択ではありません", universe_destiny_desc: "それは呼びかけです。",
    universe_heritage_title: "王族の血は古代の力を持ちます", universe_heritage_desc: "王族の血は忘れられた王国の記憶と力を担っています。",
    universe_resurrection_title: "祖先の霊は決して死になません", universe_resurrection_desc: "アフリカは決して無力ではありませんでした。",
    characters_title: "選ば���し者たち", characters_subtitle: "ISOLELE宇宙の英雄、伝説、守護者に出会う",
    characters_discover: "発見", characters_zaire_title: "コンゴの王子", characters_zaire_desc: "雷と王族の子。",
    characters_kimoya_title: "キモヤ", characters_kimoya_desc: "火の女によって力を与えられた戦士。", characters_zattar_title: "ザッター",
    characters_zattar_desc: "宇宙の征服者。", characters_twins_title: "双子", characters_twins_desc: "運命の守護者。",
    characters_imvula_title: "インブラ", characters_imvula_desc: "雨の女。",
    news_title: "ニュース", news_read_more: "もっと読む", news_minutes_read: "分読む", news_published: "公開日",
    cta_title: "伝説に参加", cta_join_legend: "伝説の一部になる", cta_description: "ISOLELE宇宙のストーリーを発見",
    cta_explore: "探索", cta_newsletter: "ニュースレター",
    footer_description: "ISOLELE：アフリカのストーリーテリングの魂を取り戻す", footer_explore: "探索", footer_resources: "リソース",
    footer_newsletter_title: "ニュースレター��購読", footer_newsletter_desc: "最新のストーリーとアップデートを入���",
    footer_email_placeholder: "メールアドレスを入力", footer_subscribe: "購読", footer_copyright: "著作権",
    footer_press: "プレス", footer_careers: "キャリア", footer_contact: "お問い合わせ", footer_faq: "よくある質問",
    footer_terms: "利用規約", footer_privacy: "プライバシー", shop_title: "ショップ", shop_subtitle: "限定商品を購入",
    shop_add_to_cart: "カートに追加", shop_buy_now: "今すぐ購入", shop_price: "価格", shop_sale: "セール",
    shop_new: "新", shop_bestseller: "ベストセラー", cart_title: "カート", cart_empty: "カートが空です",
    cart_subtotal: "小計", cart_shipping: "配送", cart_total: "合計", cart_checkout: "チェックアウト",
    cart_continue_shopping: "買い物を続ける", cart_remove: "削除", cart_quantity: "数量",
    payment_title: "お支払い", payment_card: "クレジットカード", payment_google_pay: "Google Pay",
    payment_card_number: "カード番号", payment_expiry: "有効期限", payment_cvv: "CVV",
    payment_name: "カード名義人", payment_email: "メール", payment_confirm: "支払いを確認",
    payment_success: "支払い成功!", payment_receipt_sent: "領収書がメールで送信されました",
    about_title: "ISOLELEについて", about_what_is: "ISOLELEとは？",
    about_vision_title: "ビジョン", about_vision_desc: "アフリカをストーリー、想像力、力の源として復活させる。",
    about_pillars_title: "ISOLELEの四本の柱", about_pillar1_title: "精神的な世界",
    about_pillar1_desc: "アフリカ全体��支配するのに十分な数の王と女王で満たされています。",
    about_pillar2_title: "クリエイティブパブリッシングとローカライゼーション", about_pillar2_desc: "ストーリーから思想へ、ゲームから映画へ、ISOLELEはアフリカのクリエイティブワーカーのためのプラットフォームを作成します。",
    about_pillar3_title: "人間の覚醒", about_pillar3_desc: "ISOLELEは素晴らしい目的の最初の部分であり、アフリカの王族性、精神性を発見し、探索し、復活させることを目指しています。",
    about_pillar4_title: "子どもの足跡", about_pillar4_desc: "ISOLELEを読む子どもは、自分のように見える保護者を発見します。",
    founder_title: "創設者", founder_name: "クフルル国王陛下", founder_role: "ISOLELE宇宙の創造者および建築家",
    founder_bio: "ISOLELE の背後にある先見者、アフリカのストーリーテリングの魂を復活させ、アフリカの王族の身分を祝うことに専念しています。",
    language: "言語", theme: "テーマ", discover: "発見", latestNews: "最新ニュース", loading: "読み込み中...",
    error: "エラー", success: "成功", cancel: "キャンセル", save: "保存", edit: "編集", delete: "削除",
    search: "検索", search_placeholder: "検索...", view_all: "すべて表示", learn_more: "もっと詳しく知る",
    back: "戻る", next: "次へ", previous: "前へ", site_map: "サイトマップ", accessibility: "アクセシビリティ",
    cookie_settings: "Cookie設定", footer_thank_you: "ありがとう!",
  },

  // Arabic (ar)
  ar: {
    nav_home: "الصفحة الرئيسية", nav_about: "حول", nav_founder: "المؤسس", nav_news: "الأخبار", nav_characters: "الشخصيات",
    nav_shop: "متجر", nav_supporters: "المؤيدون", nav_contact: "اتصل", nav_games: "ألعاب", nav_all_characters: "جميع الشخصيات",
    nav_become_supporter: "كن مؤيدًا", nav_partners: "الشركاء", nav_restaurant: "مطعم الشريك", nav_fashion: "الموضة", nav_settings: "الإعدادات",
    hero_title: "زاير - أمير الكونغو", hero_subtitle: "قلادة المصير", hero_description: "قصة مغامرة ملحمية مليئة بالأكشن ترجع صدى روح الملك الأسد والفهد الأسود.",
    hero_buy_now: "اشتر الآن", hero_discover: "اكتشف القصة", hero_preorder: "طلب مسبق", hero_launch_price: "سعر الإطلاق",
    book_welcome_tag: "أهلا وسهلا في إيسولايل", book_chosen_ones_title: "المختارون", book_chosen_ones_subtitle: "كون بأكمله وُلد من جذور الكونغو...",
    book_chosen_ones_desc: "إيسولايل هو ��ون بعيد النظر وُلد لاستعادة روح السرد الأفريقي.",
    book_explore_universe: "استكشف الكون", book_makanda_tag: "سلالة ماكاندا - الكتاب الأول", book_makanda_title: "ماكاندا",
    book_makanda_subtitle: "أقوى إمبراطورية في التاريخ لم تُفقد. تم إخفاؤها عن قصد.", book_makanda_desc: "في أعماق أفريقيا الوسطى، كانت هناك حضارة لم يكن للعالم أن يعرفها.",
    book_discover_makanda: "اكتشف ماكاندا", book_bambula_tag: "بامبولا: طفل الإيقاع", book_bambula_title: "بامبولا",
    book_bambula_subtitle: "الفصل الأول · الطبل المقدس", book_bambula_desc: "قبل الكلمات، كان هناك إيقاع.",
    book_discover_bambula: "اكتشف بامبولا", book_mokele_tag: "موكيل: ولد في الصراع",
    book_mokele_title: "موكيل", book_mokele_subtitle: "من طفل إلى رب كينشاسا", book_mokele_desc: "موكيل لم يولد ملكًا.",
    book_discover_mokele: "اكتشف موكيل", book_zaiire_tag: "زاير: أمير الكونغو", book_zaiire_title: "أمير الكونغو",
    book_zaiire_subtitle: "قلادة المصير", book_zaiire_desc: "المصاغة في قلب مملكة الكونغو، لم تُصنع قلادة المصير لترتديها.", book_discover_zaiire: "اكتشف زاير",
    book_kufu_tag: "كوفو: لعبة التاج", book_kufu_title: "كوفو", book_kufu_subtitle: "اللعبة الرسمية لكون إيسولايل",
    book_kufu_desc: "هذه ليست مجرد لعبة بطاقات.", book_explore_game: "استكشف اللعبة",
    book_amara_tag: "أمارا: ملكة البحار", book_amara_title: "أمارا", book_amara_subtitle: "الفصل الأول · ملكة قراصنة الأمازون",
    book_amara_desc: "كل قرصان يخاف من المحيط.", book_discover_amara: "اكتشف أمارا",
    book_zattar_tag: "زاتار: أمير الكون", book_zattar_title: "زاتار", book_zattar_subtitle: "فاتح العروش",
    book_zattar_desc: "عندما رفضت المصير إعطاءه مملكة واحدة، قرر أن يأخذها جميعًا.", book_discover_zattar: "اكتشف زاتار",
    book_zaiko_tag: "زايكو: آخر ملك في شوارع كيفو", book_zaiko_title: "أسطورة زايكو",
    book_zaiko_subtitle: "لم يرتق من الشوارع. فتحها بالقوة.", book_zaiko_desc: "وُلد في كيفو الشمالية.",
    book_discover_zaiko: "اكتشف زايكو",
    universe_title: "كون إيسولايل", universe_subtitle: "المختارون", universe_description: "إيسولايل هو كون بعيد النظر وُلد لاستعادة روح السرد الأفريقي.",
    universe_destiny_title: "المصير ليس اختيارًا", universe_destiny_desc: "إنها دعوة.",
    universe_heritage_title: "الدماء الملكية تحمل القوة القديمة", universe_heritage_desc: "تحتفظ الدماء الملكية ��ذاكرة وقوة الممالك المنسية.",
    universe_resurrection_title: "أرواح الأجداد لا تموت أبدًا", universe_resurrection_desc: "أفريقيا لم تكن أبدًا بلا حول.",
    characters_title: "المختارون", characters_subtitle: "التقيا بالأبطال والأساطير وحراس كون إيسولايل",
    characters_discover: "اكتشف", characters_zaire_title: "أمير الكونغو", characters_zaire_desc: "ابن الرعد والملكية.",
    characters_kimoya_title: "كيموya", characters_kimoya_desc: "محارب منحته قوة امرأة النار.", characters_zattar_title: "زاتار",
    characters_zattar_desc: "فاتح الكون.", characters_twins_title: "التوأم", characters_twins_desc: "حراس المصير.",
    characters_imvula_title: "إيمفولا", characters_imvula_desc: "امرأة المطر.",
    news_title: "الأخبار", news_read_more: "اقرأ أكثر", news_minutes_read: "دقيقة قراءة", news_published: "نُشر في",
    cta_title: "انضم إلى الأسطورة", cta_join_legend: "كن جزءًا من الأسطورة", cta_description: "اكتشف القصص في كون إيسولايل",
    cta_explore: "استكشف", cta_newsletter: "النشرة الإخبارية",
    footer_description: "إيسولايل: استعادة روح السرد الأفريقي", footer_explore: "استكشف", footer_resources: "الموارد",
    footer_newsletter_title: "اشترك في النشرة الإخبارية الخاصة بنا", footer_newsletter_desc: "احصل على أحدث القصص والتحديثات",
    footer_email_placeholder: "أدخل بريدك الإلكتروني", footer_subscribe: "اشترك", footer_copyright: "حقوق الطبع والنشر",
    footer_press: "الصحافة", footer_careers: "الوظائف", footer_contact: "اتصل", footer_faq: "الأسئلة الشائعة",
    footer_terms: "الشروط", footer_privacy: "الخصوصية", shop_title: "متجر", shop_subtitle: "اشتر منتجات حصرية",
    shop_add_to_cart: "أضف إلى السلة", shop_buy_now: "اشتر الآن", shop_price: "السعر", shop_sale: "بيع",
    shop_new: "جديد", shop_bestseller: "الأكثر مبيعًا", cart_title: "السلة", cart_empty: "سلتك فارغة",
    cart_subtotal: "المجموع الجزئي", cart_shipping: "الشحن", cart_total: "الإجمالي", cart_checkout: "الدفع",
    cart_continue_shopping: "متابعة التسوق", cart_remove: "إزالة", cart_quantity: "الكمية",
    payment_title: "الدفع", payment_card: "بطاقة ائتمان", payment_google_pay: "Google Pay",
    payment_card_number: "رقم البطاقة", payment_expiry: "تاريخ انتهاء الصلاحية", payment_cvv: "CVV",
    payment_name: "اسم صاحب البطاقة", payment_email: "البريد الإلكتروني", payment_confirm: "تأكيد الدفع",
    payment_success: "تم الدفع بنجاح!", payment_receipt_sent: "تم إرسال الإيصال إلى بريدك الإلكتروني",
    about_title: "حول إيسولايل", about_what_is: "ما هو إيسولايل؟",
    about_vision_title: "الرؤية", about_vision_desc: "استعادة أفريقيا كمصدر للقصص والخيال والقوة.",
    about_pillars_title: "الأركان الأربعة لإيسولايل", about_pillar1_title: "العالم الروحي",
    about_pillar1_desc: "مكتظ ب��دد كافٍ من الملوك والملكات لحكم أفريقيا بأكملها.",
    about_pillar2_title: "النشر الإبداعي والتوطين", about_pillar2_desc: "من ا��قصص إلى الأفكار، من الألعاب إلى السينما، ينشئ إيسولايل منصة لعمال أفريقيين مبدعين.",
    about_pillar3_title: "يقظة الإنسانية", about_pillar3_desc: "إيسولايل هو الجزء الأول من هدف عظيم يهدف إلى اكتشاف واستكشاف واستعادة الملكية الأفريقية والروحانية.",
    about_pillar4_title: "آثار الأطفال", about_pillar4_desc: "الطفل الذي يقرأ إيسولايل سيكتشف حاميين يبدون مثله.",
    founder_title: "المؤسس", founder_name: "الملك كوفولولا", founder_role: "منشئ ومهندس كون إيسولايل",
    founder_bio: "الرائد وراء إيسولايل، ملتزم باستعادة روح السرد الأفريقي والاحتفال بهوية الملكية الأفريقية.",
    language: "الل��ة", theme: "المظهر", discover: "اكتشف", latestNews: "أحدث الأخبار", loading: "جار التحميل...",
    error: "خطأ", success: "نجاح", cancel: "إلغاء", save: "حفظ", edit: "تحرير", delete: "حذف",
    search: "بحث", search_placeholder: "بحث...", view_all: "عرض الكل", learn_more: "تعرف على المزيد",
    back: "رجوع", next: "التالي", previous: "السابق", site_map: "خريطة الموقع", accessibility: "إمكانية الوصول",
    cookie_settings: "إعدادات ملفات تعريف الارتباط", footer_thank_you: "شكرا!",
  },

  // Bengali (bn) - Abbreviated for brevity
  bn: {
    nav_home: "হোম", nav_about: "সম্পর্কে", nav_founder: "প্রতিষ্ঠাতা", nav_news: "সংবাদ", nav_characters: "চ��িত্র",
    nav_shop: "দোকান", nav_supporters: "সমর্থক", nav_contact: "যোগাযোগ", nav_games: "গেম", nav_all_characters: "সমস্ত অক্ষর",
    nav_become_supporter: "সমর্থক হন", nav_partners: "অংশীদার", nav_restaurant: "অং��ীদার রেস্তোরাঁ", nav_fashion: "ফ্যাশন", nav_settings: "সেটিংস",
    hero_title: "জায়ের - কঙ্গোর রাজকুমার", hero_subtitle: "ভাগ্যের হার", hero_description: "একটি অনুপ্রেরণামূলক অ্যাকশন-প্যাকড অ্যাডভেঞ্চার যা লায়ন কিং এবং ব্ল্যাক প্যান্থারের আত্মার সাথে অনুরণিত হয়।",
    hero_buy_now: "এখনই ক���নুন", hero_discover: "গল্প আবিষ্কার করুন", hero_preorder: "প্রাক-অর্ডার", hero_launch_price: "লঞ্চ মূল্য",
    book_welcome_tag: "ইসোলেলে স্বাগতম", book_chosen_ones_title: "নির্বাচিত", book_chosen_ones_subtitle: "কঙ্গোর শিকড় থেকে জন্ম নেওয়া একটি সম্পূর্ণ মহাবিশ্ব...",
    book_chosen_ones_desc: "ইসোলেল একটি দূরদর্শী মহাবিশ্ব যা আফ্রিকান বর্ণনার আত্মা পুনরুদ্ধার করতে জন্ম নিয়েছিল।",
    book_explore_universe: "মহাবিশ্ব অন্বেষণ করুন", book_makanda_tag: "মাকান্ডা সাম্রাজ্য - বই I", book_makanda_title: "মাকান্ডা",
    book_makanda_subtitle: "ইতিহাসের সবচেয়ে শক্তিশালী সাম্রাজ্য হারিয়ে যায় নি। এটি ইচ্ছাকৃতভাবে লুকানো ছিল।", book_makanda_desc: "মধ্য আফ্রিকার গভীরে একটি সভ্যতা ছিল যা বিশ্ব জানত না।",
    book_discover_makanda: "মাকান্ডা আবিষ্কার করুন", book_bambula_tag: "বাম্বুলা: ছন্দের সন্তান", book_bambula_title: "বাম্বুলা",
    book_bambula_subtitle: "অধ্যায় I · পবিত্র ড্রাম", book_bambula_desc: "শব্দের আগে ছিল ছন্দ।",
    book_discover_bambula: "বাম্বুলা আবিষ্কার করুন", book_mokele_tag: "মোকেল: সংগ্রামে জন্মেছে",
    book_mokele_title: "মোকেল", book_mokele_subtitle: "ছেলে থেকে কিনশাসার প্রভুতে", book_mokele_desc: "মোকেল রাজা হিসাবে জন্ম নিয়েছে না।",
    book_discover_mokele: "মোকেল আবিষ্কার করুন", book_zaiire_tag: "জায়ের: কঙ্গোর রাজকুমার", book_zaiire_title: "কঙ্গোর রাজকুমার",
    book_zaiire_subtitle: "ভাগ্যের হার", book_zaiire_desc: "কঙ্গো সাম্রাজ্যের হৃদয়ে তৈরি, ভাগ্যের হার পরিধান করার জন্য তৈরি নয়েছিল।", book_discover_zaiire: "জায়ের আবিষ্কার করুন",
    book_kufu_tag: "কুফু: মুকুটের খেলা", book_kufu_title: "কুফু", book_kufu_subtitle: "ইসোলেল মহাবিশ্বের অফিসিয়াল গেম",
    book_kufu_desc: "এটি শুধু একটি কার্ড গেম নয়।", book_explore_game: "খেলা অন্বেষণ করুন",
    book_amara_tag: "অমা���া: সমুদ্রের রানী", book_amara_title: "অমারা", book_amara_subtitle: "অধ্যায় I · আমাজন জলদস্যুদের রানী",
    book_amara_desc: "প্রতিটি জলদস্যু সমুদ্রকে ভয় করে।", book_discover_amara: "অমারা আবিষ্কার করুন",
    book_zattar_tag: "জাত্তার: মহাবিশ্বের রাজকুমার", book_zattar_title: "জাত্তার", book_zattar_subtitle: "সিংহাসনের জয়ী",
    book_zattar_desc: "যখন ভাগ্য তাকে একটি রাজ্য অস্বীকার করেছিল, তিনি সেগুলি সব নিতে সিদ্ধান্ত ন���য়েছিলেন।", book_discover_zattar: "জাত্তার আবিষ্কার করুন",
    book_zaiko_tag: "জায়কো: কিভু রাস্তার শেষ রাজা", book_zaiko_title: "জায়কোর কিংবদন্তি",
    book_zaiko_subtitle: "তিনি রাস্তা থেকে উঠেন নি। তিনি তাদের জয় করেছেন।", book_zaiko_desc: "উত্তর কিভুতে জন্মেছেন।",
    book_discover_zaiko: "জায়কো আবিষ্কার করুন",
    universe_title: "ইসোলেল মহাবিশ্ব", universe_subtitle: "নির্বাচিত", universe_description: "ইসোলে��� একটি দূরদর্শী মহাবিশ্ব যা আফ্রিকান বর্ণনার আত্মা পুনরুদ্ধার করতে জন্ম নিয়েছিল।",
    universe_destiny_title: "ভাগ্য একটি পছন্দ নয়", universe_destiny_desc: "এটি একটি আহ্ব���ন।",
    universe_heritage_title: "রাজকীয় রক্ত প্রাচীন শক্তি বহন করে", universe_heritage_desc: "রাজকীয় রক্ত ভুলে যাওয়া সাম্রাজ���যের স্মৃতি এবং শক্তি বহন করে।",
    universe_resurrection_title: "পূর্বপুরুষের আ��্মা কখ��ও মৃত্যু পায় না", universe_resurrection_desc: "আফ্রিকা কখনই সহায়কহীন ছিল না।",
    characters_title: "নির্বাচিত", characters_subtitle: "ইসোলেল মহাবিশ্বের বীর, কিংবদন্তি এবং অভিভাবকদের দেখা করুন",
    characters_discover: "আবিষ্কার করুন", characters_zaire_title: "কঙ্গোর ��াজকুমার", characters_zaire_desc: "বিদ্যুত এবং রাজকীয়তার পুত্র।",
    characters_kimoya_title: "কিমোয়া", characters_kimoya_desc: "আগুনের মহিলা দ্বারা ক্ষমতাপ্রাপ্ত যোদ্ধা।", characters_zattar_title: "জাত্তার",
    characters_zattar_desc: "মহাবিশ্বের জয়ী।", characters_twins_title: "যুবক", characters_twins_desc: "ভাগ্যের অভিভাবক।",
    characters_imvula_title: "ইমভুলা", characters_imvula_desc: "বৃষ্টির নারী।",
    news_title: "সংবাদ", news_read_more: "আরও পড়ুন", news_minutes_read: "মিনিট পড়ুন", news_published: "প্রকাশিত",
    cta_title: "কিংবদন্তিতে যোগ দিন", cta_join_legend: "কিংবদন্তির অংশ হন", cta_description: "ইসোলেল মহাবিশ্বে গল্প আবিষ্কার করুন",
    cta_explore: "অন্বেষণ করুন", cta_newsletter: "নিউজলেটার",
    footer_description: "ইসোলেল: আফ্রিকান বর্ণনার আত্মা পুনরুদ্ধার করা", footer_explore: "অন্বেষণ করুন", footer_resources: "সম্পদ",
    footer_newsletter_title: "আমাদের নিউজলেটার সাবস্ক্রাইব করুন", footer_newsletter_desc: "সর্বশেষ গল্প এবং আপডেট পান",
    footer_email_placeholder: "আপনার ইমেইল প্রবেশ করুন", footer_subscribe: "সাবস্ক্রাইব করুন", footer_copyright: "কপিরাইট",
    footer_press: "প্রেস", footer_careers: "ক্যারিয়ার", footer_contact: "যোগাযোগ", footer_faq: "প্রায়শই জিজ্ঞাসিত প্রশ্ন",
    footer_terms: "শর্তাবলী", footer_privacy: "গোপনীয়তা", shop_title: "দোকান", shop_subtitle: "একচেটিয়া পণ্য কিনুন",
    shop_add_to_cart: "কার্টে যোগ করুন", shop_buy_now: "এখনই কিনুন", shop_price: "দাম", shop_sale: "বিক্রয়",
    shop_new: "নতুন", shop_bestseller: "বেস্টসেলার", cart_title: "কার্ট", cart_empty: "আপনার কার্ট খালি",
    cart_subtotal: "সাবটোটাল", cart_shipping: "শিপিং", cart_total: "মোট", cart_checkout: "চেকআউট",
    cart_continue_shopping: "কেনাকাটা অব্যাহত রাখুন", cart_remove: "সরান", cart_quantity: "পরিমাণ",
    payment_title: "পেমেন্ট", payment_card: "ক্রেডিট কার্ড", payment_google_pay: "গুগল পে",
    payment_card_number: "কার্ড নম্বর", payment_expiry: "মেয়াদ শেষ", payment_cvv: "সিভিভি",
    payment_name: "কার্ডধারকের নাম", payment_email: "ইমেল", payment_confirm: "পেমেন্ট নিশ্চিত করুন",
    payment_success: "পেমেন্ট সফল!", payment_receipt_sent: "রসিদ আপনার ইমেলে পাঠানো হয়েছে",
    about_title: "ইসোলেল সম্পর্কে", about_what_is: "ইসোলেল কী?",
    about_vision_title: "দৃষ্টি", about_vision_desc: "আফ্রিকাকে গল্প, কল্পনা এবং শক্তির উত্স হিসাবে পুনরুদ্ধার করা।",
    about_pillars_title: "ইসোলেলের চারটি স্তম্ভ", about_pillar1_title: "আধ্যাত্মিক বিশ্ব",
    about_pillar1_desc: "পুরো আফ্রিকা শাসন করার জন্য পর্যাপ্ত রাজা এবং রানী দিয়ে পূর্ণ।",
    about_pillar2_title: "সৃজনশীল প্রকাশনা এবং স্থানীয়করণ", about_pillar2_desc: "গল্প থেকে ধারণা পর্যন্ত, গেম থেকে সিনেমা পর্যন্ত, ইসোলেল আফ্রিকান সৃজনশীল কর্মীদের জন্য একটি প্ল্যাটফর্ম তৈরি করে।",
    about_pillar3_title: "মানবতার জাগরণ", about_pillar3_desc: "ইসোলেল একটি মহৎ উদ্দেশ্যের প্রথম অংশ যা আফ্রিকীয় রাজকীয়, আধ��যাত্মিকতা আবিষ্���ার, অন্বেষণ এবং পুনরুদ্ধার করতে লক্ষ্য করে।",
    about_pillar4_title: "শিশুর পদচিহ্ন", about_pillar4_desc: "ইসোলেল পড়ার একটি শিশু এমন অভিভাবক আবিষ্কার করবে যারা তার মতো দেখায়।",
    founder_title: "প্রতিষ��ঠাতা", founder_name: "রাজা কুফুলুলার মহারাজ", founder_role: "ইসোলেল মহাবিশ্বের নির্মাতা এবং স্থপতি",
    founder_bio: "ইসোলেলের পিছনে দ��রদর্শী, আফ্রিকান বর্ণনার আত্মা পুনরুদ���ধার এবং আফ্রিকান রাজকীয় পরিচয় উদযাপন করতে প্রতিশ্রুতিবদ্ধ।",
    language: "ভাষা", theme: "থিম", discover: "আবিষ্কার করুন", latestNews: "সর্বশেষ সংবাদ", loading: "লোড হচ্ছে...",
    error: "ত্রুটি", success: "সাফল্য", cancel: "বাতিল করুন", save: "সংরক্ষণ করুন", edit: "সম্পাদনা করুন", delete: "মুছুন",
    search: "অনুসন্ধান", search_placeholder: "অনুসন্ধান...", view_all: "সব দেখুন", learn_more: "আরও জানুন",
    back: "ফিরে যান", next: "পরবর্তী", previous: "পূর্ববর্তী", site_map: "সাইট ম্যাপ", accessibility: "অ্যাক্সেসযোগ্যতা",
    cookie_settings: "কুকি সেটিংস", footer_thank_you: "ধন্যবাদ!",
  },

  // Urdu (ur), Oromo (om), Hausa (ha), Yoruba (yo), Shona (sn), Igbo (ig), Amharic (am) - Abbreviated
  ur: {
    nav_home: "ہوم", nav_about: "بارے میں", nav_founder: "بانی", nav_news: "خبریں", nav_characters: "کردار",
    nav_shop: "دکان", nav_supporters: "سپورٹرز", nav_contact: "رابطہ", nav_games: "کھیل", nav_all_characters: "تمام کردار",
    nav_become_supporter: "سپورٹر بنیں", nav_partners: "شراکت دار", nav_restaurant: "پارٹنر ریستوران", nav_fashion: "فیشن", nav_settings: "سیٹنگز",
    hero_title: "زیر - کانگو کا شہزادہ", hero_subtitle: "تقدیر کا ہار", hero_description: "ایک متاثر کن ایکشن سے بھرا مہم جو لائن کنگ اور بلیک پینتھر کی روح کے ساتھ گونجتا ہے۔",
    hero_buy_now: "ابھی خریدیں", hero_discover: "کہانی دریافت کریں", hero_preorder: "پہلے ��ے آرڈر کریں", hero_launch_price: "لانچ کی قیمت",
    book_welcome_tag: "ISOLELE میں خوش آمدید", book_chosen_ones_title: "منتخب", book_chosen_ones_subtitle: "کانگو کی جڑوں سے پیدا ہونے والا ایک مکمل کائنات...",
    book_chosen_ones_desc: "ISOLELE ایک دور اندیش کائنات ہے جو افریقی داستان کی روح کو بحال کرنے کے لیے پیدا ہوا۔",
    book_explore_universe: "کائنات دریافت کریں", book_makanda_tag: "ماکنڈا خاندان - کتاب I", book_makanda_title: "ماکنڈا",
    book_makanda_subtitle: "تاریخ کا سب سے طاقتور سلطنت کھو نہیں گیا۔ یہ جان بوجھ کر پوشیدہ تھا۔", book_makanda_desc: "وسطی افریقہ کی گہرائیوں میں ایک تہذیب موجود تھی جو دنیا کو معلوم نہیں ہونی چاہیے تھی۔",
    book_discover_makanda: "ماکنڈا دریافت کریں", book_bambula_tag: "بامبولا: تال کا بچہ", book_bambula_title: "بامبولا",
    book_bambula_subtitle: "باب اول · مقدس ڈھول", book_bambula_desc: "الفاظ سے پہلے تال تھی۔",
    book_discover_bambula: "بامبولا دریافت کریں", book_mokele_tag: "موکیل: جدوجہد میں پیدا ہوا",
    book_mokele_title: "موکیل", book_mokele_subtitle: "بچے سے کنشاسا کے مالک تک", book_mokele_desc: "موکیل بادشاہ کے طور پر پیدا نہیں ہوا۔",
    book_discover_mokele: "موکیل دریافت کریں", book_zaiire_tag: "زیر: کانگو کا شہزادہ", book_zaiire_title: "کانگو کا شہزادہ",
    book_zaiire_subtitle: "تقدیر کا ہار", book_zaiire_desc: "کانگو سلطنت کے دل میں تیار کیا گیا، تقدیر کا ہار پہننے کے لیے نہیں بنایا گیا۔", book_discover_zaiire: "زیر دریافت کریں",
    book_kufu_tag: "کوفو: تاج کا کھیل", book_kufu_title: "کوفو", book_kufu_subtitle: "ISOLELE کائنات کا سرکاری کھیل",
    book_kufu_desc: "یہ صرف ایک تاش کا کھیل نہیں ہے۔", book_explore_game: "کھیل دریافت کریں",
    book_amara_tag: "امارہ: سمندر کی ملکہ", book_amara_title: "امارہ", book_amara_subtitle: "باب اول · ایمازون شرقاء کی ملکہ",
    book_amara_desc: "ہر سمندری ڈاکو سمندر سے ڈرتا ہے۔", book_discover_amara: "امارہ دریافت کریں",
    book_zattar_tag: "زتار: کائنات کا شہزادہ", book_zattar_title: "زتار", book_zattar_subtitle: "تخت کا فاتح",
    book_zattar_desc: "جب تقدیر نے اسے ایک سلطنت کو مسترد کر دیا، اس نے انہیں سب حاصل کرنے کا فیصلہ کیا۔", book_discover_zattar: "زتار دریافت کریں",
    book_zaiko_tag: "زائیکو: کیو کی سڑکوں کا آخری بادشاہ", book_zaiko_title: "زائیکو کی افسانہ",
    book_zaiko_subtitle: "وہ سڑکوں سے نہیں اٹھا۔ اس نے انہیں فتح کیا۔", book_zaiko_desc: "شمالی کیو میں پیدا ہوا۔",
    book_discover_zaiko: "زائیکو دریافت کریں",
    universe_title: "ISOLELE کائنات", universe_subtitle: "منتخب", universe_description: "ISOLELE ایک دور اندیش کائنات ہے جو افریقی داستان کی روح کو بحال کرنے کے لیے پیدا ہوا۔",
    universe_destiny_title: "تقدیر ایک انتخاب نہیں ہے", universe_destiny_desc: "یہ ایک کال ہے۔",
    universe_heritage_title: "شاہی خون قدیم طاقت رکھتا ہے", universe_heritage_desc: "شاہی خون بھولی ہوئی سلطنتوں کی یادوں اور طاقت کو لے کر جاتا ہے۔",
    universe_resurrection_title: "اجدادی روحیں کبھی نہیں مرتی", universe_resurrection_desc: "افریقہ کبھی بے طاقت نہیں تھا۔",
    characters_title: "منتخب", characters_subtitle: "ISOLELE کائنات کے ہیروز، افساں اور نگرانوں سے ملیں",
    characters_discover: "دریافت کریں", characters_zaire_title: "کانگو کا شہزادہ", characters_zaire_desc: "بجلی اور شاہی حکمرانی کا بیٹا۔",
    characters_kimoya_title: "کیموآ", characters_kimoya_desc: "آگ کی خاتون نے طاقت دی۔", characters_zattar_title: "زتار",
    characters_zattar_desc: "کائنات کا فاتح۔", characters_twins_title: "جڑواں", characters_twins_desc: "تقدیر کے نگران۔",
    characters_imvula_title: "امویولا", characters_imvula_desc: "بارش کی خاتون۔",
    news_title: "خبریں", news_read_more: "مزید پڑھیں", news_minutes_read: "منٹ پڑھیں", news_published: "شائع کیا گیا",
    cta_title: "افسانے میں شامل ہوں", cta_join_legend: "افسانے کا حصہ بنیں", cta_description: "ISOLELE کائنات میں کہانیوں کو دریافت کریں",
    cta_explore: "دریافت کریں", cta_newsletter: "نیوز لیٹر",
    footer_description: "ISOLELE: افریقی داستان کی روح کو بحال کرنا", footer_explore: "دریافت کریں", footer_resources: "وسائل",
    footer_newsletter_title: "ہمارے نیوز لیٹر کو سبسکرائب کریں", footer_newsletter_desc: "تازہ ترین کہانیں اور اپ ڈیٹس حاصل کریں",
    footer_email_placeholder: "اپنا ای میل درج کریں", footer_subscribe: "سبسکرائب کریں", footer_copyright: "کاپی رائٹ",
    footer_press: "پ��یس", footer_careers: "کیریئر", footer_contact: "رابطہ", footer_faq: "عام سوالات",
    footer_terms: "شرائط", footer_privacy: "رازداری", shop_title: "دکان", shop_subtitle: "خصوصی مصنوعات خریدیں",
    shop_add_to_cart: "ڈبے میں شامل کریں", shop_buy_now: "ابھی خریدیں", shop_price: "قیمت", shop_sale: "فروخت",
    shop_new: "نیا", shop_bestseller: "سب سے زیادہ فروخت", cart_title: "ڈبہ", cart_empty: "آپ کا ڈبہ خالی ہے",
    cart_subtotal: "ذیلی کل", cart_shipping: "شپنگ", cart_total: "کل", cart_checkout: "چیک آؤٹ",
    cart_continue_shopping: "خریداری جاری رکھیں", cart_remove: "ہٹائیں", cart_quantity: "مقدار",
    payment_title: "ادائیگی", payment_card: "کریڈٹ کارڈ", payment_google_pay: "Google Pay",
    payment_card_number: "کارڈ نمبر", payment_expiry: "میعاد ختم ہو جانا", payment_cvv: "CVV",
    payment_name: "کارڈ ہولڈر کا نام", payment_email: "ای میل", payment_confirm: "ادائیگی کی تصدیق کریں",
    payment_success: "ادائیگی کامیاب!", payment_receipt_sent: "رسید آپ کی ای میل پر بھیجی گئی",
    about_title: "ISOLELE کے بارے میں", about_what_is: "ISOLELE کیا ہے؟",
    about_vision_title: "نقطہ نظر", about_vision_desc: "افریقہ کو کہانی، تخیل اور طاقت کے منبع کے طور پر بحا�� کریں۔",
    about_pillars_title: "ISOLELE کے چار ستون", about_pillar1_title: "روحانی دنیا",
    about_pillar1_desc: "پورے افریقہ پر حکمرانی کرنے کے لیے کافی بادشاہوں اور ملکہ سے بھرا ہوا۔",
    about_pillar2_title: "تخلیقی اشاعت اور مقامی کاری", about_pillar2_desc: "کہانیوں سے خیالات تک، کھیلوں سے سنیما تک، ISOLELE افریقی تخلیقی کارکنوں کے لیے ایک منصہ بناتا ہے۔",
    about_pillar3_title: "انسانیت کی بیداری", about_pillar3_desc: "ISOLELE ایک عظیم مقصد کا پہلا حصہ ہے جو افریقی شاہی حکمرانی، روحانیت کو دریافت، دریافت اور بحال کرنے کا مقصد رکھتا ہے۔",
    about_pillar4_title: "بچے کے قدم", about_pillar4_desc: "ISOLELE پڑھنے والا بچہ ایسے نگران دریافت کرے گا جو اس جیسے نظر آتے ہوں۔",
    founder_title: "بانی", founder_name: "بادشاہ کوفولولو کے حضرت", founder_role: "ISOLELE کائنات کا تخلیق کار اور معمار",
    founder_bio: "ISOLELE کے پیچھے دور اندیش، افریقی داستان کی روح کو بحال کرنے اور افریقی شاہی شناخت کو منانے کے لیے پرعزم۔",
    language: "زبان", theme: "تھیمز", discover: "دریافت کریں", latestNews: "تازہ ترین خبریں", loading: "لوڈ ہو رہا ہے...",
    error: "غلطی", success: "کامیابی", cancel: "منسوخ کریں", save: "محفوظ کریں", edit: "ترمیم کریں", delete: "حذف کریں",
    search: "تلاش", search_placeholder: "تلاش...", view_all: "سب دیکھیں", learn_more: "مزید معلومات حاصل کریں",
    back: "واپس", next: "اگلا", previous: "پچھلا", site_map: "سائٹ کا نقشہ", accessibility: "رسائی",
    cookie_settings: "کوکی سیٹنگز", footer_thank_you: "شکریہ!",
  },

  om: {
    nav_home: "Muka", nav_about: "Waa mah", nav_founder: "Qophesaa", nav_news: "Oduu", nav_characters: "Hayyoota",
    nav_shop: "Manneen gurguraa", nav_supporters: "Dhaabbattoota", nav_contact: "Walitti qabaa", nav_games: "Baranaa", nav_all_characters: "Hayyoota hunda",
    nav_become_supporter: "Dhaabbattaa ta'aa", nav_partners: "Socii", nav_restaurant: "Manneen nyaataa socii", nav_fashion: "Mataara", nav_settings: "Qindoominsa",
    hero_title: "ZAAIRE - MOTI QONGA", hero_subtitle: "Gama Baala", hero_description: "Seenaa falmii kan hogganuun dhalgellee fi midhaan waliit walaagaa.",
    hero_buy_now: "ISSA BITAA", hero_discover: "SEENAA ARGAA", hero_preorder: "Duraan ajaja", hero_launch_price: "Gatii jalqabaa",
    book_welcome_tag: "ISOLELE GARA DHUFTE", book_chosen_ones_title: "FILATAMTOTA", book_chosen_ones_subtitle: "Uumama guutuu jidha gidduu Qonga...",
    book_chosen_ones_desc: "ISOLELE uumama hubannaan galubaa ta'ee duubee baasuu seena Afrikaa gasuugessee.",
    book_explore_universe: "UUMAMAA SAKALA", book_makanda_tag: "MOTI MAKANDA - KITAAB I", book_makanda_title: "MAKANDA",
    book_makanda_subtitle: "Moti cimaa tarichaa irraa hin nyaatnee. Itti jide ammaa ture.", book_makanda_desc: "Gidduu Afrikaa yommusaa moti tokko kan addunyaan hin beeknee jiru turte.",
    book_discover_makanda: "MAKANDA ARGAA", book_bambula_tag: "BAMBULA: IJAARAA CAASAA", book_bambula_title: "BAMBULA",
    book_bambula_subtitle: "KUTAA I · CAASA GODAANAA", book_bambula_desc: "Duraa jecha, caasaa ture.",
    book_discover_bambula: "BAMBULA ARGAA", book_mokele_tag: "MOKELE: LOOLLISA KEESSA DHALATEE",
    book_mokele_title: "MOKELE", book_mokele_subtitle: "Ilma keessaa gara Moti Kinshasa", book_mokele_desc: "MOKELE moti ta'ee hin dhalatnee.",
    book_discover_mokele: "MOKELE ARGAA", book_zaiire_tag: "ZAAIRE: MOTI QONGA", book_zaiire_title: "MOTI QONGA",
    book_zaiire_subtitle: "Gama Baala", book_zaiire_desc: "Gariddaa Moti Qonga keessa lolli dubbisan, Gama Baala akka af'uu ta'ee hin uumamnee.", book_discover_zaiire: "ZAAIRE ARGAA",
    book_kufu_tag: "KUFU: BARANAA TAAGA", book_kufu_title: "KUFU", book_kufu_subtitle: "BARANAA GODHAANAA UUMAMA ISOLELE",
    book_kufu_desc: "Baranaa ibsa qofa miti.", book_explore_game: "BARANAA SAKALA",
    book_amara_tag: "AMARA: MOOTI GALAANA", book_amara_title: "AMARA", book_amara_subtitle: "KUTAA I · MOOTI ABBAA KALAANYA",
    book_amara_desc: "Abbaa kalaanya hundi galaana ni sodaata.", book_discover_amara: "AMARA ARGAA",
    book_zattar_tag: "ZATTAR: MOTI UUMAMA", book_zattar_title: "ZATTAR", book_zattar_subtitle: "Walii gida jala gala",
    book_zattar_desc: "Yeroo Baala moti tokkoo jala jalqabdee, inni mota hundaa fudhachuuf murteessaa.", book_discover_zattar: "ZATTAR ARGAA",
    book_zaiko_tag: "ZAIKO: MOTI DHUMAA KARAA KIVU", book_zaiko_title: "SEENAA ZAIKO",
    book_zaiko_subtitle: "Karraa keessa hin ol-faasee. Akkuma karree itti galfate.", book_zaiko_desc: "Kivu kaaba keessa dhalatee.",
    book_discover_zaiko: "ZAIKO ARGAA",
    universe_title: "UUMAMA ISOLELE", universe_subtitle: "FILATAMTOTA", universe_description: "ISOLELE uumama hubannaan galubaa ta'ee duubee baasuu seena Afrikaa gasuugessee.",
    universe_destiny_title: "Baala filannoo miti", universe_destiny_desc: "Waamicha.",
    universe_heritage_title: "Jiida moti humina durii qaba", universe_heritage_desc: "Jiida moti yaadni fi humina moti tilmaamaa qaba.",
    universe_resurrection_title: "Hafuura abbaa keessaa hamma tokkuu hin duutu", universe_resurrection_desc: "Afrikaa har'a hin goga.",
    characters_title: "FILATAMTOTA", characters_subtitle: "Qomaan heros, seenaa, fi eegaa uumama ISOLELE",
    characters_discover: "ARGAA", characters_zaire_title: "MOTI QONGA", characters_zaire_desc: "Ilma biilaa fi moti.",
    characters_kimoya_title: "KIMOYA", characters_kimoya_desc: "Sarbamtuu humina dubartiin ibidda.", characters_zattar_title: "ZATTAR",
    characters_zattar_desc: "Gala jala gala uumama.", characters_twins_title: "LABDA", characters_twins_desc: "Eegaa baala.",
    characters_imvula_title: "IMVULA", characters_imvula_desc: "Dubartii roobii.",
    news_title: "Oduu", news_read_more: "Itti duuba akka dubbisu", news_minutes_read: "Minti dubbisu", news_published: "Yeroo publishe",
    cta_title: "Seenaa seenama kan", cta_join_legend: "Kutaa seenaa ta'aa", cta_description: "Seenota uumama ISOLELE argaa",
    cta_explore: "Sakala", cta_newsletter: "Warqee oduu",
    footer_description: "ISOLELE: Duubee baasuu seena Afrikaa", footer_explore: "Sakala", footer_resources: "Qabeenya",
    footer_newsletter_title: "Warqee oduu keenya isamuura", footer_newsletter_desc: "Seenaa fi haaromsa hareedu argaa",
    footer_email_placeholder: "Imeelkee keessa seeni", footer_subscribe: "Isamuura", footer_copyright: "Midhaan",
    footer_press: "Warquu", footer_careers: "Hojii", footer_contact: "Walitti qabaa", footer_faq: "Gaaffii baay'ee",
    footer_terms: "Haala", footer_privacy: "Susa", shop_title: "Manneen gurguraa", shop_subtitle: "Midhaa addatti",
    shop_add_to_cart: "Boxii keessa sani", shop_buy_now: "Issa bitaa", shop_price: "Gatii", shop_sale: "Gurgura",
    shop_new: "Haaraa", shop_bestseller: "Guddisuu", cart_title: "Boxii", cart_empty: "Boxii keessan duwwaa",
    cart_subtotal: "Waliigalcha", cart_shipping: "Ergugilaa", cart_total: "Waliigalcha guutuu", cart_checkout: "Bita",
    cart_continue_shopping: "Gurgura itti fufaa", cart_remove: "Haqi", cart_quantity: "Hamma",
    payment_title: "Bitaa", payment_card: "Kaadii baankii", payment_google_pay: "Google Pay",
    payment_card_number: "Lakkoofa kaadii", payment_expiry: "Yeroon kufuu", payment_cvv: "CVV",
    payment_name: "Maqaa qabaachuu", payment_email: "Imeelaa", payment_confirm: "Bitaa waliigali",
    payment_success: "Bitaan milkaa'ee!", payment_receipt_sent: "Risiidii imeelkee keessan irraa ergamaa",
    about_title: "ISOLELE WAAYU", about_what_is: "ISOLELE MAALI?",
    about_vision_title: "ILLAALCHA", about_vision_desc: "Afrikaa akka madda seenaa, yaalicha fi humina duubee baasuu.",
    about_pillars_title: "IJAARAA AFAR ISOLELE", about_pillar1_title: "Uumama hawwii",
    about_pillar1_desc: "Motii fi dubartii Afrikaa hundaa bulchuu danda'u hedduu keessa jiran.",
    about_pillar2_title: "Uffata creatibii fi dirqalaa", about_pillar2_desc: "Seenaa keessaa yaalicha, baranaa keessaa sinamatikaa, ISOLELE xiyyeeffanna hojii ummanni Afrikaa ta'e.",
    about_pillar3_title: "Karaa namootaa", about_pillar3_desc: "ISOLELE kutaa jalqabaatu sayaansa guddaa ta'ee moti, hawwii Afrikaa baasuu, qoratuu fi duubee baasuu ta'uu miidha.",
    about_pillar4_title: "Miilla ijaaraa", about_pillar4_desc: "Ijaarni ISOLELE dubbisu dhaloota akka isaa dubbisan eegaa fudhataa.",
    founder_title: "Qophesaa", founder_name: "Moti Kufululu", founder_role: "Qophesaa fi ijaaraa uumama ISOLELE",
    founder_bio: "Hubannaan duubee ISOLELE, duubee baasuu seena Afrikaa fi maqaa moti Afrikaa tilaansaa.",
    language: "Afaan", theme: "Kaabaa", discover: "Argaa", latestNews: "Oduu Haaraa", loading: "Kar-faasaa...",
    error: "Dogoggoraa", success: "Milkaa'insa", cancel: "Jijjii", save: "Kuusa", edit: "Gulaali", delete: "Haqi",
    search: "Barbaadi", search_placeholder: "Barbaadi...", view_all: "Hundaa lakkaa", learn_more: "Caasaa itti duuba",
    back: "Duuba", next: "Itti aanee", previous: "Duraa", site_map: "Kaabaa sajjii", accessibility: "Geejjimaa",
    cookie_settings: "Qindoominsa cookie", footer_thank_you: "Galoodhuuma!",
  },

  ha: {
    nav_home: "Gida", nav_about: "Game da", nav_founder: "Masu bugi", nav_news: "Labura", nav_characters: "Jama'a",
    nav_shop: "Kasuwa", nav_supporters: "Masu aminci", nav_contact: "Sadarwa", nav_games: "Wasanni", nav_all_characters: "Duk jama'a",
    nav_become_supporter: "Zama mai aminci", nav_partners: "Abokan tarayya", nav_restaurant: "Gida aboki", nav_fashion: "Zane", nav_settings: "Saitunan",
    hero_title: "ZAIRE - ZARCIN KONGO", hero_subtitle: "Beadi na Kaddara", hero_description: "Jagorin aikin da yaka haɓaka rokon kuma ya dumru rokon Sarkakiya da Baƙar Pantar.",
    hero_buy_now: "SAYI NAN", hero_discover: "SAWON LABARI", hero_preorder: "Nemi gida", hero_launch_price: "Farashin asali",
    book_welcome_tag: "YADE JIYA A ISOLELE", book_chosen_ones_title: "AN ZAƁE SU", book_chosen_ones_subtitle: "Jahan gaba gida daga tushen Kongo...",
    book_chosen_ones_desc: "ISOLELE jahan niye da hawa don sabawa ruhu na asalin asalin kasar Afrka.",
    book_explore_universe: "BUDE JAHAN", book_makanda_tag: "GIDA MAKANDA - LITTAFI I", book_makanda_title: "MAKANDA",
    book_makanda_subtitle: "Mafi iko mulki na tarihi ba a rasa. An ɓoye shi da gida.", book_makanda_desc: "A zurfin Afirka ta gida, akwai jama'a da duniya ba ta san su.",
    book_discover_makanda: "SAWON MAKANDA", book_bambula_tag: "BAMBULA: YARON WAƘA", book_bambula_title: "BAMBULA",
    book_bambula_subtitle: "BABULEN FARKO · GONGING TSARKI", book_bambula_desc: "Kafin kalmomi, akwai waƙa.",
    book_discover_bambula: "SAWON BAMBULA", book_mokele_tag: "MOKELE: AN HAIFI A JADDADI",
    book_mokele_title: "MOKELE", book_mokele_subtitle: "Daga yaro har ga Sarki na Kinshasa", book_mokele_desc: "MOKELE ba yaro ne an haifi shi a matsayin Sarki.",
    book_discover_mokele: "SAWON MOKELE", book_zaiire_tag: "ZAIRE: ZARCIN KONGO", book_zaiire_title: "ZARCIN KONGO",
    book_zaiire_subtitle: "Beadi na Kaddara", book_zaiire_desc: "Da aka yi a ciki na gida na Kongo, Beadi na Kaddara ba na cire ba.", book_discover_zaiire: "SAWON ZAIRE",
    book_kufu_tag: "KUFU: WASANNIN KAMBI", book_kufu_title: "KUFU", book_kufu_subtitle: "WASANNIN OFISYAL NA JAHAN ISOLELE",
    book_kufu_desc: "Ba jiya ka wasanni ba.", book_explore_game: "BUDE WASANNI",
    book_amara_tag: "AMARA: SARAUNIYAR UMARNI", book_amara_title: "AMARA", book_amara_subtitle: "BABULEN FARKO · SARAUNIYA NA SOJAN BAKIN AMAZON",
    book_amara_desc: "Kowane sojan bakin umarni yana jin tsoro da umarni.", book_discover_amara: "SAWON AMARA",
    book_zattar_tag: "ZATTAR: ZARCIN JAHAN", book_zattar_title: "ZATTAR", book_zattar_subtitle: "Mai cin karfi na kujera",
    book_zattar_desc: "Lokacin da Kaddara ya kada masa mulki daya, ya yanke shawarar cin karfi su duka.", book_discover_zattar: "SAWON ZATTAR",
    book_zaiko_tag: "ZAIKO: SARKI NA KARSHEN KARAYE NA KIVU", book_zaiko_title: "LABARIN ZAIKO",
    book_zaiko_subtitle: "Bai tashi daga kasuwa ba. Ya cin karfi akan gida.", book_zaiko_desc: "An haifi shi a Kivu ta Arewa.",
    book_discover_zaiko: "SAWON ZAIKO",
    universe_title: "JAHAN ISOLELE", universe_subtitle: "AN ZAƁE SU", universe_description: "ISOLELE jahan niye da hawa don sabawa ruhu na asalin asalin kasar Afrka.",
    universe_destiny_title: "Kaddara ba waje ba ne", universe_destiny_desc: "Gaida ne.",
    universe_heritage_title: "Jini na mulki yana kawo da kofi da daidai", universe_heritage_desc: "Jini na mulki yana dauke da alaƙa da iko na mulki da aka manta.",
    universe_resurrection_title: "Rohohin makodimbiya ba su mutu ba", universe_resurrection_desc: "Afrka ba taban da iko ba.",
    characters_title: "AN ZAƁE SU", characters_subtitle: "Haɗu da jarumawa, labaru, da mai gaɗi na jahan ISOLELE",
    characters_discover: "SAWON", characters_zaire_title: "ZARCIN KONGO", characters_zaire_desc: "Iyali na thunder da mulki.",
    characters_kimoya_title: "KIMOYA", characters_kimoya_desc: "Sojan da ya bada iko. sanin mace na wuta.", characters_zattar_title: "ZATTAR",
    characters_zattar_desc: "Mai cin karfi na jahan.", characters_twins_title: "TAGWAYE", characters_twins_desc: "Mai gaɗi na Kaddara.",
    characters_imvula_title: "IMVULA", characters_imvula_desc: "Mace na rua.",
    news_title: "Labura", news_read_more: "Karanta ƙari", news_minutes_read: "Mintoci karantawa", news_published: "An buga",
    cta_title: "Haɗu da labari", cta_join_legend: "Zama bangare na labari", cta_description: "Sawon labura a jahan ISOLELE",
    cta_explore: "Bude", cta_newsletter: "Jarida",
    footer_description: "ISOLELE: Sabawa ruhu na asalin asalin Afrka", footer_explore: "Bude", footer_resources: "Allabar",
    footer_newsletter_title: "Tunkarang jarida ta mu", footer_newsletter_desc: "Samu labura da sabon sabuwar",
    footer_email_placeholder: "Shigar da imeelka", footer_subscribe: "Tunkarance", footer_copyright: "Hakkin mallaka",
    footer_press: "Jarida", footer_careers: "Aiki", footer_contact: "Sadarwa", footer_faq: "Sumaye da yawa",
    footer_terms: "Sharuɗɗuka", footer_privacy: "Sirri", shop_title: "Kasuwa", shop_subtitle: "Sayi abubuwa na musamman",
    shop_add_to_cart: "Ƙara zuwa katuwa", shop_buy_now: "Sayi nan", shop_price: "Farashin", shop_sale: "Sayawa",
    shop_new: "Sabuwa", shop_bestseller: "Mafi sayawa", cart_title: "Katuwa", cart_empty: "Katuwar ku ba ta da alaƙa",
    cart_subtotal: "Kari", cart_shipping: "Miyar", cart_total: "Jumla", cart_checkout: "Bugi",
    cart_continue_shopping: "Ci gaba da sayan", cart_remove: "Tsoske", cart_quantity: "Lamba",
    payment_title: "Bugawa", payment_card: "Kadi na banka", payment_google_pay: "Google Pay",
    payment_card_number: "Lamban kadi", payment_expiry: "Lokacin ƙarewa", payment_cvv: "CVV",
    payment_name: "Suna na mai kaɗin", payment_email: "Imel", payment_confirm: "Tabbatawa bugawa",
    payment_success: "Bugawa warware!", payment_receipt_sent: "Shaida ta aika zuwa imeelka",
    about_title: "GAME DA ISOLELE", about_what_is: "ISOLELE MENENE?",
    about_vision_title: "GANI", about_vision_desc: "Sabawa Afrka a matsayin tushen labaru, hasumtu da iko.",
    about_pillars_title: "SANDA HUDU NA ISOLELE", about_pillar1_title: "Jahan ta ruhani",
    about_pillar1_desc: "Cike da sarki da sarakuniya da ishe ga mulki duka Afrka.",
    about_pillar2_title: "Uffar fikiri da gida-gida", about_pillar2_desc: "Daga labaru zuwa tunanin, wasanni zuwa fina-finai, ISOLELE ta kera waje don masu fikiri na Afrka.",
    about_pillar3_title: "Tashen mutane", about_pillar3_desc: "ISOLELE waje na farko ne na gari da niyar neman, bude, da sabawa sariki, ruhani na Afrka.",
    about_pillar4_title: "Faɗin yara", about_pillar4_desc: "Yaro da ke karantawa ISOLELE zai gano mai gaɗi da suke kamannina.",
    founder_title: "Masu bugi", founder_name: "Sarki Kufululu Amir", founder_role: "Mai bugi da gida na jahan ISOLELE",
    founder_bio: "Mai ganowa gaɓa ISOLELE, maida hankali ga sabawa ruhu na asalin Afrka da girmama sariki na Afrka.",
    language: "Harshe", theme: "Salo", discover: "Sawon", latestNews: "Sabuwar labura", loading: "Karawa...",
    error: "Kuskure", success: "Nasara", cancel: "Soke", save: "Ajiye", edit: "Shirya", delete: "Tsoske",
    search: "Nema", search_placeholder: "Nema...", view_all: "Lura su duka", learn_more: "Komai ƙari",
    back: "Koma", next: "Gida", previous: "Gida da jiya", site_map: "Taswira na gida", accessibility: "Aiki",
    cookie_settings: "Saitunan kuɗi", footer_thank_you: "Na gode!",
  },

  yo: {
    nav_home: "Ile inu", nav_about: "Nipa", nav_founder: "Alagba", nav_news: "Iwe", nav_characters: "Awon enia",
    nav_shop: "Ile itaja", nav_supporters: "Olumulo", nav_contact: "Olubasọrọ", nav_games: "Ere", nav_all_characters: "Gbogbo awon enia",
    nav_become_supporter: "Jẹ olumulo", nav_partners: "Awon ẹ̀rọ̀ ní ìdọ̀tun", nav_restaurant: "Ile itaja alajọ", nav_fashion: "Aṣọ", nav_settings: "Awọn eto",
    hero_title: "ZAIIRE - ỌMỌ ỌLỌRUN KONGO", hero_subtitle: "Ó kán ayaba", hero_description: "Itan elo nire ati elo ijamba ti o duro pelu ẹmi ti Lion King ati Black Panther.",
    hero_buy_now: "RA NI BAYI", hero_discover: "RIYAN ITAN", hero_preorder: "Beere ẹkọ", hero_launch_price: "Idiyele isalayo",
    book_welcome_tag: "KAABO SI ISOLELE", book_chosen_ones_title: "AWON OLOMINIRA", book_chosen_ones_subtitle: "Aye ṣokoto ti a bi lati awon ori ti Kongo...",
    book_chosen_ones_desc: "ISOLELE jẹ aye ọgbọn ti a bi lati tunmọ ẹmi ti alaye Afirika.",
    book_explore_universe: "WI AIYE", book_makanda_tag: "IDILE MAKANDA - ILORIN I", book_makanda_title: "MAKANDA",
    book_makanda_subtitle: "Awo-oniseye nla julọ ti itan ko si ti sonu. A pamo temi ni pe.", book_makanda_desc: "Ni inu Afirika, aye kan wa ti awọ aiye ko mo.",
    book_discover_makanda: "RIYAN MAKANDA", book_bambula_tag: "BAMBULA: OMO TI ORIN", book_bambula_title: "BAMBULA",
    book_bambula_subtitle: "ÌPÌLẸ̀ KÌNNÍ · ADANDUN MIMALẸ", book_bambula_desc: "Ṣaaju ọrọ, orin wa ni.",
    book_discover_bambula: "RIYAN BAMBULA", book_mokele_tag: "MOKELE: ABI NI LOOLDUN",
    book_mokele_title: "MOKELE", book_mokele_subtitle: "Lati omokubere si Baba ti Kinshasa", book_mokele_desc: "MOKELE ko bi oba.",
    book_discover_mokele: "RIYAN MOKELE", book_zaiire_tag: "ZAIIRE: ỌMỌ ỌLỌRUN KONGO", book_zaiire_title: "OMO ỌLỌRUN KONGO",
    book_zaiire_subtitle: "Ó kán ayaba", book_zaiire_desc: "Ẹ yoo wa ni ẹjẹ ti obinrin ti o wa tii ọkan ti awo agbekeji.", book_discover_zaiire: "RIYAN ZAIIRE",
    book_kufu_tag: "KUFU: ERE ÁDÌÁ", book_kufu_title: "KUFU", book_kufu_subtitle: "ERE OFISIAL TI AIYE ISOLELE",
    book_kufu_desc: "Eyi ki iye ere kaadi nikan.", book_explore_game: "WI ERE",
    book_amara_tag: "AMARA: AYABA TI AWO", book_amara_title: "AMARA", book_amara_subtitle: "ÌPÌLẸ̀ KÌNNÍ · AYABA TI AWON OLOPON AMONGE",
    book_amara_desc: "Olopon kọọkan n ibe odo.", book_discover_amara: "RIYAN AMARA",
    book_zattar_tag: "ZATTAR: OMO ỌLỌRUN AIYE", book_zattar_title: "ZATTAR", book_zattar_subtitle: "Olupilẹṣẹ ti awon isokan",
    book_zattar_desc: "Nígbà tí báa gba ọkan oba fun u, o pinnu lati gba gbogbo.", book_discover_zattar: "RIYAN ZATTAR",
    book_zaiko_tag: "ZAIKO: OBA IKẸHIN TI AWON ONIKO KIVU", book_zaiko_title: "IWE TI ZAIKO",
    book_zaiko_subtitle: "O ko goke lati oniko. O ní ijoye awon ilu. ", book_zaiko_desc: "A bi ni Kivu Ariwa.",
    book_discover_zaiko: "RIYAN ZAIKO",
    universe_title: "AIYE ISOLELE", universe_subtitle: "AWON OLOMINIRA", universe_description: "ISOLELE jẹ aye ọgbọn ti a bi lati tunmọ ẹmi ti alaye Afirika.",
    universe_destiny_title: "Iniyan ko le jẹ yiyan", universe_destiny_desc: "Itan.",
    universe_heritage_title: "Ẹjẹ ọba ń jade eto-ona", universe_heritage_desc: "Ẹjẹ ọba ń dele iranti ati ẹka ti awon awo ti o wa fun.",
    universe_resurrection_title: "Ẹ̀kú àgbà kò fi pẹ", universe_resurrection_desc: "Afirika ko tun ju lolorigo.",
    characters_title: "AWON OLOMINIRA", characters_subtitle: "Pade awon ologun, awon itan, ati awon ọbakọ ti aiye ISOLELE",
    characters_discover: "RIYAN", characters_zaire_title: "OMO ỌLỌRUN KONGO", characters_zaire_desc: "Ọmọ ti ina ati obinyinbi.",
    characters_kimoya_title: "KIMOYA", characters_kimoya_desc: "Ọmọ-ogun ti awon ẹ̀kú ina fun.", characters_zattar_title: "ZATTAR",
    characters_zattar_desc: "Olupilẹṣẹ ti aiye.", characters_twins_title: "IBEJI", characters_twins_desc: "Ọbakọ ti iniyan.",
    characters_imvula_title: "IMVULA", characters_imvula_desc: "Obinrin ti ojo.",
    news_title: "Iwe", news_read_more: "Ka ibe", news_minutes_read: "Akunrin kawe", news_published: "Ti a tẹ si",
    cta_title: "Darapo si itan", cta_join_legend: "Jẹ apakan ti itan", cta_description: "Rii awon itan ni aiye ISOLELE",
    cta_explore: "WI", cta_newsletter: "Iwe iroyin",
    footer_description: "ISOLELE: Tunmọ ẹmi ti alaye Afirika", footer_explore: "WI", footer_resources: "Ọrẹ",
    footer_newsletter_title: "Darapo si iwe iroyin wa", footer_newsletter_desc: "Ri awon itan ti o tun o ati awon isẹ tun",
    footer_email_placeholder: "Tẹ imel rẹ", footer_subscribe: "Darapo", footer_copyright: "Idiyele amotekun",
    footer_press: "Iwe", footer_careers: "Iṣẹ", footer_contact: "Olubasọrọ", footer_faq: "Awon ibeere ti a nbeere",
    footer_terms: "Awon ofin", footer_privacy: "Orirede", shop_title: "Ile itaja", shop_subtitle: "Ra awon ohun ṣiṣe alailẹgbẹ",
    shop_add_to_cart: "Fi ṣẹ́jú", shop_buy_now: "Ra ni bayi", shop_price: "Idiyele", shop_sale: "Ra",
    shop_new: "Tun", shop_bestseller: "Olokikore", cart_title: "Ṣẹ́jú", cart_empty: "Ṣẹ́jú rẹ tutu",
    cart_subtotal: "Iyipada", cart_shipping: "Igbe", cart_total: "Lapapọ", cart_checkout: "Fifun",
    cart_continue_shopping: "Tẹsiwaju pelu rira", cart_remove: "Yọ", cart_quantity: "Iye",
    payment_title: "Fifun", payment_card: "Kaadi ikowe", payment_google_pay: "Google Pay",
    payment_card_number: "Nọmba kaadi", payment_expiry: "Ojo isalaye", payment_cvv: "CVV",
    payment_name: "Orukọ olumulo", payment_email: "Imel", payment_confirm: "Ni isalaye fifun",
    payment_success: "Fifun lokan!", payment_receipt_sent: "Iyè lokan ti fi si imel rẹ",
    about_title: "NIPA ISOLELE", about_what_is: "ISOLELE KÍ NI?",
    about_vision_title: "ÓJÚ ÌMOLẸ̀", about_vision_desc: "Tunmọ Afirika bi orisun ti itan, irosun, ati ẹka.",
    about_pillars_title: "AWO MERINLA ISOLELE", about_pillar1_title: "Aiye ara",
    about_pillar1_desc: "Pele fun obanrinwa ati iyalode ti a ba le ja Afirika ni patapata.",
    about_pillar2_title: "Iwe Ijade ati ibadandun", about_pillar2_desc: "Lati itan ki ile, lati ere ki sinema, ISOLELE da ile fun awon akawe Afirika.",
    about_pillar3_title: "Gbogbo ara eniyan", about_pillar3_desc: "ISOLELE jẹ abẹ kini ti ṣiṣe nla lati rii, tuwẹ, ati tunmọ obinyinbi Afirika, ara ati ijamba.",
    about_pillar4_title: "Ese omokobere", about_pillar4_desc: "Ọmọ ti o ka ISOLELE a rii awon ọbakọ ti o jẹ bi rẹ.",
    founder_title: "Alagba", founder_name: "Oba Kufululu", founder_role: "Onijade ati alagbara ti aiye ISOLELE",
    founder_bio: "Onimọ̀ràn ti o tẹ̀ lẹ̀ ISOLELE, o ni ifẹ́ lati tunmọ ẹmi ti alaye Afirika ati iyin aiye ọba Afirika.",
    language: "Ede", theme: "Ẹwò", discover: "Riyan", latestNews: "Iwe tun tun", loading: "Kirila...",
    error: "Aṣiṣe", success: "Ajogun", cancel: "Gbẹ", save: "Pamo", edit: "Atunṣe", delete: "Yọ",
    search: "Waa", search_placeholder: "Waa...", view_all: "Ri gbogbo", learn_more: "Kika ibe",
    back: "Pada", next: "Ẹ̀kọ́ kejì", previous: "Ẹ̀kọ́ tiji", site_map: "Maapu ile", accessibility: "Riroyin",
    cookie_settings: "Awon eto cookie", footer_thank_you: "E ṣeun!",
  },

  sn: {
    nav_home: "Mukumbitso", nav_about: "Pamusoro", nav_founder: "Musiki", nav_news: "Nhau", nav_characters: "Vanhu",
    nav_shop: "Mhazi", nav_supporters: "Vanhu Vanoshinikwa", nav_contact: "Umanikidzanai", nav_games: "Mutambi", nav_all_characters: "Vanhu vose",
    nav_become_supporter: "Iva Mutsigiri", nav_partners: "Shamwari", nav_restaurant: "Inini Yeshopani", nav_fashion: "Nhosha", nav_settings: "Zvirevo",
    hero_title: "ZAIRE - MWANAKOMANA WEKONGO", hero_subtitle: "Ruwani rweSinyo", hero_description: "Nyaya inoyemedza umoyo ine mhina uye hunhu, inoseta nenguva yeLion King uye Black Panther.",
    hero_buy_now: "TENGERAI IKOZVINO", hero_discover: "WANA NYAYA", hero_preorder: "Yamba kare mberi", hero_launch_price: "Mutengo wekutanga",
    book_welcome_tag: "WANIKWA KU ISOLELE", book_chosen_ones_title: "VAGARA VAKASANANGURWA", book_chosen_ones_subtitle: "Nyika yose yakagadzirwa mhando yekongo...",
    book_chosen_ones_desc: "ISOLELE inye nyika ine pfungamadzee yakaenzana kudzosa mweya wenhau dzeshona dzeAfrica.",
    book_explore_universe: "WONANA NYIKA", book_makanda_tag: "MADZIKOMO EMAKANDA - BHUKU I", book_makanda_title: "MAKANDA",
    book_makanda_subtitle: "Ushe hukuru hwenzira dzenyaya hazvina nangwali. Hwakavangidzwa nechisikidzo.", book_makanda_desc: "Ndani dzeshona dzeAfrica kwaive nemutauro usingaizvi mudunhu.",
    book_discover_makanda: "WANA MAKANDA", book_bambula_tag: "BAMBULA: MWANA WENGANO", book_bambula_title: "BAMBULA",
    book_bambula_subtitle: "SEHEMU I · NGANO INOBVISA", book_bambula_desc: "Pamberi pemiromo, kwaive nengano.",
    book_discover_bambula: "WANA BAMBULA", book_mokele_tag: "MOKELE: WAKABVA MUCHISIMUKO",
    book_mokele_title: "MOKELE", book_mokele_subtitle: "Pamwana kuenda kuzviritwa kweKinshasa", book_mokele_desc: "MOKELE haasazvarwa somumambo.",
    book_discover_mokele: "WANA MOKELE", book_zaiire_tag: "ZAIRE: MWANAKOMANA WEKONGO", book_zaiire_title: "MWANAKOMANA WEKONGO",
    book_zaiire_subtitle: "Ruwani rweSinyo", book_zaiire_desc: "Yakagadzirwa mumoyo wemadzikomo eKongo, Ruwani rweSinyo harina icho.", book_discover_zaiire: "WANA ZAIRE",
    book_kufu_tag: "KUFU: MUTAMBI WERUZHA", book_kufu_title: "KUFU", book_kufu_subtitle: "MUTAMBI WECHOKWADI WENYIKA YESOLELE",
    book_kufu_desc: "Izvi hazvisi mutambi wekadi chete.", book_explore_game: "WONANA MUTAMBI",
    book_amara_tag: "AMARA: MUKADZI WEMVURA", book_amara_title: "AMARA", book_amara_subtitle: "SEHEMU I · MUKADZI WAMATOMBO EAMAZONE",
    book_amara_desc: "Tombo rimwe nerimwe rinokutya mvura.", book_discover_amara: "WANA AMARA",
    book_zattar_tag: "ZATTAR: MWANAKOMANA WENYIKA", book_zattar_title: "ZATTAR", book_zattar_subtitle: "Unokunda Madzikomo",
    book_zattar_desc: "Pakuzopedzisirwa nechisikidzo kuzviritwa kwake, akazvisunungura kusunungura vose.", book_discover_zattar: "WANA ZATTAR",
    book_zaiko_tag: "ZAIKO: MAMBO WOKUGUMIRA WEIMBA ZEZIVU", book_zaiko_title: "NYAYA YEZIVU",
    book_zaiko_subtitle: "Haazvisununguri munzira. Azvisununguri.", book_zaiko_desc: "Wakaberekwa muKivu KwaKurudziro.",
    book_discover_zaiko: "WANA ZAIKO",
    universe_title: "NYIKA YESOLELE", universe_subtitle: "VAGARA VAKASANANGURWA", universe_description: "ISOLELE inye nyika ine pfungamadzee yakaenzana kudzosa mweya wenhau dzeshona dzeAfrica.",
    universe_destiny_title: "Sinyo hazvisi kusarudza", universe_destiny_desc: "Iri kupiwa.",
    universe_heritage_title: "Ropa remumambo rinorunzvi simba rinozhaniwa", universe_heritage_desc: "Ropa remumambo rinorunzvi kurangarira nesimba remadzikomo akanga akamanya.",
    universe_resurrection_title: "Mweya yavazukulu hazvina kufa", universe_resurrection_desc: "Africa haina kuzvisunungura.",
    characters_title: "VAGARA VAKASANANGURWA", characters_subtitle: "Sanangana neshero, nyaya, nevanobvigiri venyika yeSOLELE",
    characters_discover: "WONANA", characters_zaire_title: "MWANAKOMANA WEKONGO", characters_zaire_desc: "Mwana wemhengu neshona.",
    characters_kimoya_title: "KIMOYA", characters_kimoya_desc: "Murwi wakavigwa nesimba wemukadzi wemoto.", characters_zattar_title: "ZATTAR",
    characters_zattar_desc: "Unokunda nyika.", characters_twins_title: "VANOVANA", characters_twins_desc: "Vanobvigiri vesinyo.",
    characters_imvula_title: "IMVULA", characters_imvula_desc: "Mukadzi wemvura.",
    news_title: "Nhau", news_read_more: "Verenga zvimwe", news_minutes_read: "Miniti dzokuverenga", news_published: "Yakuburitswa",
    cta_title: "Pinda munyaya", cta_join_legend: "Iva chikamu chenyaya", cta_description: "Wana nyaya munyika yeSOLELE",
    cta_explore: "Wonana", cta_newsletter: "Nyaya dzeMihi",
    footer_description: "ISOLELE: Kudzosa mweya wenhau dzeshona dzeAfrica", footer_explore: "Wonana", footer_resources: "Zvinhu",
    footer_newsletter_title: "Takura nyaya dzeMihi dzacho", footer_newsletter_desc: "Wana nyaya dzachango nenhau dzachango",
    footer_email_placeholder: "Tora email yako", footer_subscribe: "Takura", footer_copyright: "Kodzero dzeMuzanywo",
    footer_press: "Nyaya", footer_careers: "Mabasa", footer_contact: "Umanikidzanai", footer_faq: "Mibvunzo Inowedzerwa",
    footer_terms: "Mitemo", footer_privacy: "Isingazivikanwe", shop_title: "Mhazi", shop_subtitle: "Tengerai zvinhu zvakanyanya",
    shop_add_to_cart: "Wedzera murapa", shop_buy_now: "Tengerai ikozvino", shop_price: "Mutengo", shop_sale: "Kutengeserana",
    shop_new: "Kuti", shop_bestseller: "Inowanzo kutengeseka", cart_title: "Rapa", cart_empty: "Rapa rako riri shure",
    cart_subtotal: "Zvishoma", cart_shipping: "Kurunzira", cart_total: "Zvose", cart_checkout: "Budirira",
    cart_continue_shopping: "Butsirira kutengeserana", cart_remove: "Bvisa", cart_quantity: "Nhamba",
    payment_title: "Kufarira", payment_card: "Kadhini yeBhangi", payment_google_pay: "Google Pay",
    payment_card_number: "Nhamba yekadhini", payment_expiry: "Zuva rokusvika", payment_cvv: "CVV",
    payment_name: "Zita remunhu winekadhini", payment_email: "Email", payment_confirm: "Zibvumira kufarira",
    payment_success: "Kufarira kwaita!", payment_receipt_sent: "Risipi rakatumirwa kuemail yako",
    about_title: "PAMUSORO PESOLELE", about_what_is: "ISOLELE CHII?",
    about_vision_title: "PFUNGAMADZEE", about_vision_desc: "Dzosa Africa sezero yenyaya, pfungamadzee, nesimba.",
    about_pillars_title: "SHINA MINA YESOLELE", about_pillar1_title: "Nyika yeshona",
    about_pillar1_desc: "Yazara nemambo nemusikana ine simba rezviriko zvose zveAfrica.",
    about_pillar2_title: "Kuburitsa Nhosha nokuIyisa Munzvimbo", about_pillar2_desc: "Kubva kunyaya kuenda kumaanzaniso, kutomutambi kuenda kusaini, ISOLELE inoburitsa saini revanhu veAfrica.",
    about_pillar3_title: "Kunovuka kwevanhu", about_pillar3_desc: "ISOLELE ndiyo chikamu chekutanga cheguto guru rinongoridzira, kuzvionera, kudzidzisa, nekunobora mambo, mweya nezvimwe zveAfrica.",
    about_pillar4_title: "Tsoka dzavana", about_pillar4_desc: "Mwana unoverenga ISOLELE achawana vanobvigiri vanofanana naye.",
    founder_title: "Musiki", founder_name: "Mambo Kufululu", founder_role: "Musiki nemutengi wenyika yeSOLELE",
    founder_bio: "Munhu ane pfungamadzee pechiteshi cheSOLELE, achidemba kudzosa mweya wenhau dzeshona dzeAfrica uye kunakidza shona remadzikomo eAfrica.",
    language: "Chirungu", theme: "Pfungamadzee", discover: "Wonana", latestNews: "Nhau Dzachango", loading: "Mukati...",
    error: "Kuregeredza", success: "Kwaita", cancel: "Bvisa", save: "Kuza", edit: "Shandura", delete: "Bvisa",
    search: "Tsvaga", search_placeholder: "Tsvaga...", view_all: "Ona vose", learn_more: "Dzidza zvimwe",
    back: "Dzokera", next: "Kutevera", previous: "Zekare", site_map: "Mapi yeshoko", accessibility: "Kubatanidzwa",
    cookie_settings: "Zvirevo zveCookie", footer_thank_you: "Ndatenda!",
  },

  ig: {
    nav_home: "Ụlọ", nav_about: "Gbasara", nav_founder: "Onye omeere", nav_news: "Akụkọ", nav_characters: "Ndị karakịa",
    nav_shop: "Ụlọ Azụ", nav_supporters: "Ndị nkwado", nav_contact: "Ibe ụzọ", nav_games: "Egwuregwu", nav_all_characters: "Ndị karakịa niile",
    nav_become_supporter: "Bụrụ onye nkwado", nav_partners: "Ndị ọrụ", nav_restaurant: "Ụlọ nri ọrụ", nav_fashion: "Uwe", nav_settings: "Ihe ido",
    hero_title: "ZAIRE - ỌKPARA KONGO", hero_subtitle: "Ịchọ Agụụ", hero_description: "Akụkọ omume yụ na ike na-eme ka mma nke Lion King na Black Panther.",
    hero_buy_now: "ZU ÔTÜ", hero_discover: "CHỌTA AKỤ KỌ", hero_preorder: "Ririkọ ọzọ", hero_launch_price: "Ọnụ ọchịchị mmalite",
    book_welcome_tag: "NNỌỌ NA ISOLELE", book_chosen_ones_title: "NDỊAHỌPỤTARA", book_chosen_ones_subtitle: "Ụwa mezigharị a mụrụ site na mgbidi Kongo...",
    book_chosen_ones_desc: "ISOLELE bụ ụwa nke nwere anya sị na ọ lọ ịbugharị ụmụ obi nke akụkọ Afrịka.",
    book_explore_universe: "NYOCHAA ỤWAN", book_makanda_tag: "EZINỤ MAKANDA - AKWỤKWỌ I", book_makanda_title: "MAKANDA",
    book_makanda_subtitle: "Mpaghara kachasị ike n'akụkọ agaghị esiri. E zopụtara ya ngosi.", book_makanda_desc: "N'oliligali nke Afrịka Etiti, enyere ụwa ịma n'ebe mbu.",
    book_discover_makanda: "CHỌTA MAKANDA", book_bambula_tag: "BAMBULA: OKWU NKE ABỤ", book_bambula_title: "BAMBULA",
    book_bambula_subtitle: "AKUKU NKARA · OKITI OTO", book_bambula_desc: "Ka ole nkwa, enwere abụ.",
    book_discover_bambula: "CHỌTA BAMBULA", book_mokele_tag: "MOKELE: A MỤRỤ NA MGBA",
    book_mokele_title: "MOKELE", book_mokele_subtitle: "site n'ụmụ ụta n'eze Kinshasa", book_mokele_desc: "MOKELE ejọ mụrụ n'ọnụ.",
    book_discover_mokele: "CHỌTA MOKELE", book_zaiire_tag: "ZAIRE: ỌKPARA KONGO", book_zaiire_title: "ỌKPARA KONGO",
    book_zaiire_subtitle: "Ịchọ Agụụ", book_zaiire_desc: "E chịkọ na obi nke mpaghara Kongo, Ịchọ Agụụ adịghị ehichapụ.", book_discover_zaiire: "CHỌTA ZAIRE",
    book_kufu_tag: "KUFU: EGWUREGWU OKPU", book_kufu_title: "KUFU", book_kufu_subtitle: "EGWUREGWU OKPU NKWA ISOLELE",
    book_kufu_desc: "Ọ bụghị naanị egwuregwu kaadị.", book_explore_game: "NYOCHAA EGWUREGWU",
    book_amara_tag: "AMARA: EZIOKWU NKE AZỤ", book_amara_title: "AMARA", book_amara_subtitle: "AKUKU NKARA · EZIOKWU NKE NDỊ OROMA AZỤ",
    book_amara_desc: "Oroma ọbụla na-atụ azụ egwu.", book_discover_amara: "CHỌTA AMARA",
    book_zattar_tag: "ZATTAR: ỌKPARA UWA", book_zattar_title: "ZATTAR", book_zattar_subtitle: "Onye mmụta nke oche",
    book_zattar_desc: "Mgbe Agụụ jụrụ ya otu mpaghara, o kpebiri ike inyakọta ya niile.", book_discover_zattar: "CHỌTA ZATTAR",
    book_zaiko_tag: "ZAIKO: OKWU NJEDEBE NKE MGBEDE KIVU", book_zaiko_title: "AKỤKỌ ZAIKO",
    book_zaiko_subtitle: "Ọ pụghị eribuo n'okwu. O mejupụtara ha.", book_zaiko_desc: "A mụrụ ya na Kivu Ugwu.",
    book_discover_zaiko: "CHỌTA ZAIKO",
    universe_title: "UWA ISOLELE", universe_subtitle: "NDỊAHỌPỤTARA", universe_description: "ISOLELE bụ ụwa nke nwere anya sị na ọ lọ ịbugharị ụmụ obi nke akụkọ Afrịka.",
    universe_destiny_title: "Agụụ abụghị nhọn", universe_destiny_desc: "Ọ bụ akpọ.",
    universe_heritage_title: "Ndi okwu eze na-ebute ike ochie", universe_heritage_desc: "Ndi okwu eze na-ebute ncheta na ike nke mpaghara a chefachara.",
    universe_resurrection_title: "Mụọ nna mụnne agaghị anwụ", universe_resurrection_desc: "Afrịka adịghị enwe ike enweghị.",
    characters_title: "NDỊAHỌPỤTARA", characters_subtitle: "Zutere ndị dike, ndị akụkọ, na ndị nchebe nke ụwa ISOLELE",
    characters_discover: "CHỌTA", characters_zaire_title: "ỌKPARA KONGO", characters_zaire_desc: "Ọkpara mmụ na eze.",
    characters_kimoya_title: "KIMOYA", characters_kimoya_desc: "Onye ọsọ nyere ike site n'otú nwaanyị.", characters_zattar_title: "ZATTAR",
    characters_zattar_desc: "Onye mmụta nke ụwa.", characters_twins_title: "EJIMA", characters_twins_desc: "Ndị nchebe nke agụụ.",
    characters_imvula_title: "IMVULA", characters_imvula_desc: "Nwaanyị nke mmiri.",
    news_title: "Akụkọ", news_read_more: "Gụọ ọzọ", news_minutes_read: "Mineti ịgụ", news_published: "E bipụtara",
    cta_title: "Sonye na akụkọ", cta_join_legend: "Bụrụ akụkọ", cta_description: "Chọta akụkọ na ụwa ISOLELE",
    cta_explore: "Nyochaa", cta_newsletter: "Odeideere",
    footer_description: "ISOLELE: Ịbugharị ụmụ obi nke akụkọ Afrịka", footer_explore: "Nyochaa", footer_resources: "Ihe ekwesiri inwe",
    footer_newsletter_title: "Tinye aha gị na odeideere nke anyị", footer_newsletter_desc: "Pụta akụkọ na mgbanwe ọhụr���",
    footer_email_placeholder: "Tinyenụ imeelụ gị", footer_subscribe: "Tinye aha", footer_copyright: "Ikike onyewu",
    footer_press: "Owerụ akụkọ", footer_careers: "Ọrụ", footer_contact: "Ibe ụzọ", footer_faq: "Ajụjụ na-adịghị ka njedebe",
    footer_terms: "Nke okwu", footer_privacy: "Nzuzo", shop_title: "Ụlọ Azụ", shop_subtitle: "Zụta ihe pụrụ iche",
    shop_add_to_cart: "Tinye na kaata", shop_buy_now: "Zụ ôtü", shop_price: "Ọnụ", shop_sale: "Ire",
    shop_new: "Ọhụrụ", shop_bestseller: "Ihe kachasị ire", cart_title: "Kaata", cart_empty: "Kaata gị na-agba ọsọ",
    cart_subtotal: "Obere azụ", cart_shipping: "Izipu", cart_total: "Niile", cart_checkout: "Ịbụ ka mma",
    cart_continue_shopping: "Gụọ irie iwe", cart_remove: "Yikwa", cart_quantity: "Ọtụtụ",
    payment_title: "Ịkwụ ego", payment_card: "Kaadị dị na ụlọ", payment_google_pay: "Google Pay",
    payment_card_number: "Nọmba kaadị", payment_expiry: "Ụbọchị mwụpụ", payment_cvv: "CVV",
    payment_name: "Aha onye nwere kaadị", payment_email: "Imeelụ", payment_confirm: "Nweta ịkwụ ego",
    payment_success: "Ịkwụ ego!", payment_receipt_sent: "Akwụkwọ eji ịhụ na imeelụ gị",
    about_title: "Gbasara ISOLELE", about_what_is: "ISOLELE BỤ GỊN?",
    about_vision_title: "ECHICHE", about_vision_desc: "Ịbugharị Afrịka dị ka ebe akụkọ, echiche, na ike.",
    about_pillars_title: "OKPU ANỌ ISOLELE", about_pillar1_title: "Ụwa ike chi",
    about_pillar1_desc: "Jupụtara na eze na ụmụ eze nwere ike họụ Afrịka niile.",
    about_pillar2_title: "Ire akwụkwọ na itinye n'ebe", about_pillar2_desc: "Sitere na akụkọ ruo na echiche, egwuregwu ruo na ihe nkiri, ISOLELE na-emepụta ebe ndị na-arụ ọrụ Afrịka.",
    about_pillar3_title: "Ịdị mma nke mmadụ", about_pillar3_desc: "ISOLELE bụ nke mbụ nke nnukwu ihe kwesiri inwe iji chọta, mepe, na ịgbugharị eze Afrịka, ike chi, na ihe ọzọ.",
    about_pillar4_title: "Ụkwụ nwa", about_pillar4_desc: "Nwa na-agụ ISOLELE a ga-achọpụta ndị nchebe na-adị ka ya.",
    founder_title: "Onye omeere", founder_name: "Eze Kufululu", founder_role: "Onye omeere na mmachi nke ụwa ISOLELE",
    founder_bio: "Onye nwere echiche n'azụ ISOLELE, na-enye onwe ya maka ịbugharị ụmụ obi nke akụkọ Afrịka na inye eze Afrịka ama.",
    language: "Asụsụ", theme: "Maka ihe pụtara", discover: "Chọta", latestNews: "Akụkọ Ọhụrụ", loading: "Na-abịa...",
    error: "Nsogbu", success: "Ihe nma", cancel: "Kagbuo", save: "Zọọ", edit: "Mezie", delete: "Yikwa",
    search: "Chọọ", search_placeholder: "Chọọ...", view_all: "Lee niile", learn_more: "Mụta ọzọ",
    back: "Azụ", next: "Ọzọ", previous: "Nke mbụ", site_map: "Mapi saịt", accessibility: "Ịnwe ike izu",
    cookie_settings: "Ihe ido Kuki", footer_thank_you: "Daalụ!",
  },

  am: {
    nav_home: "ቤት", nav_about: "ስለ", nav_founder: "ተመስርቶ", nav_news: "ዜና", nav_characters: "ገፀ ታሪክ",
    nav_shop: "ሙከራ", nav_supporters: "ደጋፊዎች", nav_contact: "ተወከለ", nav_games: "ጎን ጎን", nav_all_characters: "ሁሉም ገፀ ታሪክ",
    nav_become_supporter: "ደጋፊ ሆን", nav_partners: "ተባበሪ", nav_restaurant: "ተባበሪ ምግብ ቤት", nav_fashion: "ፋሽን", nav_settings: "ቅንጅቶች",
    hero_title: "ዛኢሬ - ኮንጎ ወንድ ልጅ", hero_subtitle: "የአዋጅ string", hero_description: "ተነሳሽ ድርጊት ጥሩ ታሪክ ከ Lion King እና Black Panther መንፈስ ጋር ይስማማል።",
    hero_buy_now: "አሁን ግዙ", hero_discover: "ታሪክ ያግኙ", hero_preorder: "ቅድ���ያ ማዘዝ", hero_launch_price: "ጅምር ሙጫ",
    book_welcome_tag: "ወደ ISOLELE እንኳን በደህ�� መጡ", book_chosen_ones_title: "የተመረጡ", book_chosen_ones_subtitle: "ኮንጎ ሥሮች ከተወለዱ የሙሉ አለም...",
    book_chosen_ones_desc: "ISOLELE ፈላሚ የአለም ስር አፍሪካ ታሪክ ተረት ለማገድ የተወለደ ነው።",
    book_explore_universe: "አለምን ይቃኙ", book_makanda_tag: "MAKANDA መንግሥት - ታሪክ I", book_makanda_title: "MAKANDA",
    book_makanda_subtitle: "ታሪክ ውስጥ ከሚጠናከር ግዛት ጋር አልተጠፋም። ሰዎ ሳቅ አደረገቅ.", book_makanda_desc: "በመካከለኛ አፍሪካ ውስጥ, ሥልጣን አልታወቅም ቂሎ ነበር.",
    book_discover_makanda: "MAKANDA ይግኙ", book_bambula_tag: "BAMBULA: ሪ듬ወዛ", book_bambula_title: "BAMBULA",
    book_bambula_subtitle: "ምዕራፍ I · ሃጥያት ብርበዋ", book_bambula_desc: "ቃላት ሁሉ በታ ፣ መሰከበት ነበር።",
    book_discover_bambula: "BAMBULA ይግኙ", book_mokele_tag: "MOKELE: በግጥም ውስጥ ተወለደ",
    book_mokele_title: "MOKELE", book_mokele_subtitle: "ጋር ኪንሻሳ ጌታ", book_mokele_desc: "MOKELE ንጉሠ ነገሥት ተወለደ።",
    book_discover_mokele: "MOKELE ይግኙ", book_zaiire_tag: "ዛኢሬ: ኮንጎ ወንድ ልጅ", book_zaiire_title: "ኮንጎ ወንድ ልጅ",
    book_zaiire_subtitle: "የአዋጅ string", book_zaiire_desc: "ኮንጎ ግዛት ልብ ውስጥ ተመስሮ ፣ አዋጅ ሕብረቁምፍር ውስጥ አላገደም።", book_discover_zaiire: "ዛኢሬ ይግኙ",
    book_kufu_tag: "KUFU: ዜማ ጀበዋ", book_kufu_title: "KUFU", book_kufu_subtitle: "ISOLELE አለም ኢንባ ጀበዋ",
    book_kufu_desc: "ይህ ሌላ ክርት ጋዜ ብቻ ነው።", book_explore_game: "ጀበዋ ይቃኙ",
    book_amara_tag: "AMARA: የወሰን ሚስት", book_amara_title: "AMARA", book_amara_subtitle: "ምዕራፍ I · ዐማዞን ግዢ ንግሥት",
    book_amara_desc: "ሕጻናት ሞต ያስፈራል።", book_discover_amara: "AMARA ይግኙ",
    book_zattar_tag: "ZATTAR: ዓለምን ወንድ ልጅ", book_zattar_title: "ZATTAR", book_zattar_subtitle: "የር ሪገታ",
    book_zattar_desc: "የአዋጅ አንድ ግዛት ከለየ, ሁሉ ምንግበት ግዛት መውሰድ ወሰነ.", book_discover_zattar: "ZATTAR ይግኙ",
    book_zaiko_tag: "ዛያኮ: የኪቭ መሪዎች የመጨረሻ ንጉሠ", book_zaiko_title: "የዛያኮ ታሪክ",
    book_zaiko_subtitle: "ሕብረቁምፍር ውስጥ ሳይወሰድ. ጓዞ ላይ ሐ�ቁ.", book_zaiko_desc: "ሰሜን ኪቭ ውስጥ የተወለደ.",
    book_discover_zaiko: "ዛያኮ ይግኙ",
    universe_title: "ISOLELE አለም", universe_subtitle: "የተመረጡ", universe_description: "ISOLELE ፈላሚ የአለም ስር አፍሪካ ታሪክ ተረት ለማገድ የተወለደ ነው።",
    universe_destiny_title: "የአዋጅ ምርጫ አይደለም", universe_destiny_desc: "ይህ ጥሪ ነው.",
    universe_heritage_title: "ሥልጣኔ 피ደ ጥንታዊ ኃይል ይሸከም", universe_heritage_desc: "ሥልጣኔ ልቦሌ የወደ ሱሪዩ ስታይ ይሸከም.",
    universe_resurrection_title: "ወሪት ስሩታት ሞታ አይደለም", universe_resurrection_desc: "አፍሪካ ሩግ አልነበረም።",
    characters_title: "የተመረጡ", characters_subtitle: "ተጋ ወገኖች ፣ ወገኖች ፣ እና ታሪክ ISOLELE ከሪ",
    characters_discover: "ይግኙ", characters_zaire_title: "ኮንጎ ወንድ ልጅ", characters_zaire_desc: "መብረቅ እና ንብረት ልጅ።",
    characters_kimoya_title: "KIMOYA", characters_kimoya_desc: "የእሳተ ሴት ስልጣኔ ጦር ወይ.", characters_zattar_title: "ZATTAR",
    characters_zattar_desc: "ዓለምን ሪገታ.", characters_twins_title: "ሁለት", characters_twins_desc: "ከርሰ ብገሪ.",
    characters_imvula_title: "ኢምቫላ", characters_imvula_desc: "ሪ ሴት.",
    news_title: "ዜና", news_read_more: "ተጨማሪ ያንብቡ", news_minutes_read: "ደቂቃዎች ያንብቡ", news_published: "ታተመ",
    cta_title: "ታሪክ ገብ", cta_join_legend: "ታሪክ ክፍል ሆን", cta_description: "ISOLELE አለም ታሪክ ይግኙ",
    cta_explore: "ይቃኙ", cta_newsletter: "ታሪክ",
    footer_description: "ISOLELE: አፍሪካ ታሪክ ተረት ወደ ተመለሱ", footer_explore: "ይቃኙ", footer_resources: "ሃብት",
    footer_newsletter_title: "ታሪክ ምዝገባ", footer_newsletter_desc: "የተወሰነ ታሪክ ደረጃ ይግኙ",
    footer_email_placeholder: "ኢሜል ገብ", footer_subscribe: "ምዝገባ", footer_copyright: "ኮፒ ሙሉ",
    footer_press: "ሲዋ", footer_careers: "ሥራ", footer_contact: "ተወከለ", footer_faq: "በጣም ጥያቄ",
    footer_terms: "ሁኔታዎች", footer_privacy: "ሚስጢር", shop_title: "ሙከራ", shop_subtitle: "ብሎ ክምችቶች ግዙ",
    shop_add_to_cart: "ውስጥ ደብ", shop_buy_now: "አሁን ግዙ", shop_price: "ሙጫ", shop_sale: "ሙጫ",
    shop_new: "ቅድስ", shop_bestseller: "ደግ ሙጫ", cart_title: "ውስጥ ደብ", cart_empty: "ውስጥ ደብ ምንም",
    cart_subtotal: "ንዑስ ��ምር", cart_shipping: "አድሏ", cart_total: "ድምር", cart_checkout: "ሚዞ ለይ",
    cart_continue_shopping: "ግዙ ቀጥል", cart_remove: "ያስወግዱ", cart_quantity: "ብዛት",
    payment_title: "ሙጫ", payment_card: "ክሬዲት ዋንቶች", payment_google_pay: "Google Pay",
    payment_card_number: "ዋንቶች ቁጥር", payment_expiry: "ማለፊያ ቀን", payment_cvv: "CVV",
    payment_name: "ዋንቶች ያዣ ስም", payment_email: "ኢሜል", payment_confirm: "ሙጫ ታይዞ",
    payment_success: "ሙጫ ተሳክሏል!", payment_receipt_sent: "ሪስቲ ኢሜል ላክ",
    about_title: "ISOLELE ስለ", about_what_is: "ISOLELE ምን ነው?",
    about_vision_title: "ሞታለም", about_vision_desc: "ታሪክ, ታሪክ ዳህ, ኃይል ክበት አፍሪካ ወደ ታገሰ.",
    about_pillars_title: "ISOLELE አራት ኪወ", about_pillar1_title: "መንፈስ ዓለም",
    about_pillar1_desc: "አፍሪካ ሙሉ አስተዳደር ሥልጣኔ እና ንግዝት ሙሉ.",
    about_pillar2_title: "ፈጠራ ወታጁ ስራ ለማን", about_pillar2_desc: "ታሪክ ሳይንስ, ጀበዋ ወደ ሆሊዉድ, ISOLELE ሥራ ዩ ሴት አፍሪካ",
    about_pillar3_title: "ሥወር ብስ", about_pillar3_desc: "ISOLELE ታሪክ ገጽታ ፣ ታሪክ ፍለጋ ፣ ሥሪታ አሜሪካ ታሪክ ፣ መንፈስ ወደ ተመለሱ.",
    about_pillar4_title: "ደጀ እግር", about_pillar4_desc: "ISOLELE ልጅ ��ሮ ወገኖች ተገኝ ይሆናል.",
    founder_title: "ተመስርቶ", founder_name: "ንጉሠ ፊዙ", founder_role: "ISOLELE አለም ተመስርቶ ሕንጻ",
    founder_bio: "ISOLELE ርቀ, ውሻ ተረት አፍሪካ ወደ ተመለሰ ለመስጠት የታሪክ ራኔ ታሪክ ተነሣሪ.",
    language: "ቋንቋ", theme: "ሙያ", discover: "ይግኙ", latestNews: "የቅርብ ዜና", loading: "ጫና...",
    error: "ስህተት", success: "ስኬት", cancel: "ለቅ", save: "ያስቀምጡ", edit: "አርትዖት", delete: "ያስወግዱ",
    search: "ፈልግ", search_placeholder: "ፈልግ...", view_all: "ሁሉ ይዩ", learn_more: "ተጨማሪ ይወቁ",
    back: "ተመለስ", next: "ቀጣይ", previous: "ቀድሞ", site_map: "ድህረ ገጽ ካርታ", accessibility: "መዳረስ",
    cookie_settings: "ኩኪ ቅንጅቶች", footer_thank_you: "ምስጋና!",
  },
}

export function getTranslation(lang: Language, key: keyof TranslationKeys): string {
  return translations[lang]?.[key] || translations.en[key] || key
}
