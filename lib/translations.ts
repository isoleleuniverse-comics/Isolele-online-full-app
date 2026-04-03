"use client"

export type Language = "en" | "fr" | "pt" | "es" | "zu" | "xh" | "sw" | "ln"

export const languageNames: Record<Language, string> = {
  en: "English",
  fr: "Français",
  pt: "Português",
  es: "Español",
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
  
  universe_title: string
  universe_subtitle: string
  universe_description: string
  universe_destiny_title: string
  universe_destiny_desc: string
  universe_heritage_title: string
  universe_heritage_desc: string
  universe_resurrection_title: string
  universe_resurrection_desc: string
  universe_founder_title: string
  universe_founder_desc: string
  
  characters_title: string
  characters_subtitle: string
  characters_discover: string
  
  cta_title: string
  cta_description: string
  cta_explore: string
  cta_newsletter: string
  
  footer_description: string
  footer_explore: string
  footer_resources: string
  footer_newsletter_title: string
  footer_newsletter_desc: string
  footer_email_placeholder: string
  footer_subscribe: string
  footer_thank_you: string
  footer_copyright: string
  footer_press: string
  footer_careers: string
  footer_contact: string
  footer_faq: string
  footer_terms: string
  footer_privacy: string
  
  shop_title: string
  shop_subtitle: string
  shop_add_to_cart: string
  shop_buy_now: string
  shop_price: string
  shop_sale: string
  shop_new: string
  shop_bestseller: string
  
  latestNews: string
  loading: string
  error: string
  success: string
  cancel: string
  save: string
  
  // Welcome slide
  book_welcome_tag: string
  book_welcome_title: string
  book_welcome_subtitle: string
  book_welcome_desc: string
  book_welcome_button: string
  
  // Makanda slide
  book_makanda_tag: string
  book_makanda_title: string
  book_makanda_subtitle: string
  book_makanda_desc: string
  book_makanda_button: string
  
  // Bambula slide
  book_bambula_tag: string
  book_bambula_title: string
  book_bambula_subtitle: string
  book_bambula_desc: string
  book_bambula_button: string
  
  // Mokele slide
  book_mokele_tag: string
  book_mokele_title: string
  book_mokele_subtitle: string
  book_mokele_desc: string
  book_mokele_button: string
  
  // Zaiire slide
  book_zaiire_tag: string
  book_zaiire_title: string
  book_zaiire_subtitle: string
  book_zaiire_desc: string
  book_zaiire_button: string
  
  // Kufu slide
  book_kufu_tag: string
  book_kufu_title: string
  book_kufu_subtitle: string
  book_kufu_desc: string
  book_kufu_button: string
  
  // Amara slide
  book_amara_tag: string
  book_amara_title: string
  book_amara_subtitle: string
  book_amara_desc: string
  book_amara_button: string
  
  // Zattar slide
  book_zattar_tag: string
  book_zattar_title: string
  book_zattar_subtitle: string
  book_zattar_desc: string
  book_zattar_button: string
  
  // Zaiko slide
  book_zaiko_tag: string
  book_zaiko_title: string
  book_zaiko_subtitle: string
  book_zaiko_desc: string
  book_zaiko_button: string
  
  character_zaiire_name: string
  character_zaiire_title: string
  character_zaiire_desc: string
  character_bambula_name: string
  character_bambula_title: string
  character_bambula_desc: string
  character_kimoya_name: string
  character_kimoya_title: string
  character_kimoya_desc: string
  character_mokele_name: string
  character_mokele_title: string
  character_mokele_desc: string
  character_kufulula_name: string
  character_kufulula_title: string
  character_kufulula_desc: string
  character_ensemble_name: string
  character_ensemble_title: string
  character_ensemble_desc: string
  
  back_to_home: string
}

export const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_comics: "Comics",
    nav_founder: "Founder",
    nav_news: "News",
    nav_characters: "Characters",
    nav_shop: "Shop",
    nav_supporters: "Supporters",
    nav_contact: "Contact",
    nav_games: "Games",
    nav_all_characters: "All Characters",
    nav_become_supporter: "Become a Supporter",
    nav_partners: "Partners",
    nav_restaurant: "Restaurant",
    nav_fashion: "Fashion",
    nav_settings: "Settings",
    
    universe_title: "THE ISOLELE UNIVERSE",
    universe_subtitle: "Africa has always had heroes. ISOLELE gives them a universe.",
    universe_description: "Born from the roots of Kongo. Built for every African child who never saw themselves as a hero. ISOLELE is the universe that was always meant to exist. The kingdom was never lost. It was waiting for its storytellers. ISOLELE FOREVER.",
    universe_destiny_title: "The Lion Has Learned to Write",
    universe_destiny_desc: "An African proverb says: 'Until the lion learns to write, every story will glorify the hunter.' ISOLELE is the lion's pen. Africa is writing its own story.",
    universe_heritage_title: "Everything Begins in Kongo",
    universe_heritage_desc: "Music. Dance. Royalty. Fashion. Culture. History. Before the world had names for these things, the Kongo had mastered them all. Africa is not a continent. It is a source. And the Congo is not just part of that source. The Congo IS the source. The trigger of all human culture. The heartbeat that started everything. ISOLELE was born there. Not by accident. By destiny.",
    universe_resurrection_title: "You Have Always Been Royal",
    universe_resurrection_desc: "Before anyone told you who you were, the ancestors already knew. Every child born on African soil, every member of the diaspora who crossed oceans and survived, every person who carries African blood in their veins has always carried a crown they were never told about. ISOLELE exists to give it back. Not as a gift. As a reminder. You were never lost. You were never less. You were never without power. You were just waiting for someone to tell you the truth. Welcome home.",
    universe_founder_title: "The Visionary Founder",
    universe_founder_desc: "King Kufulula founded ISOLELE to restore the soul of African storytelling and create a mythological empire where African superheroes rise from authentic history.",
    
    characters_title: "THE CHOSEN ONES",
    characters_subtitle: "Meet the heroes, legends, and guardians of the Isolele Universe",
    characters_discover: "DISCOVER",
    
    cta_title: "JOIN THE LEGEND",
    cta_description: "Be part of a groundbreaking comic book universe that celebrates Black African heritage while inspiring the next generation of superheroes.",
    cta_explore: "EXPLORE THE UNIVERSE",
    cta_newsletter: "SUBSCRIBE TO NEWSLETTER",
    
    footer_description: "Isolele is a visionary universe born to restore the soul of African storytelling - a mythological empire where Superheroes are chosen by destiny.",
    footer_explore: "EXPLORE",
    footer_resources: "RESOURCES",
    footer_newsletter_title: "STAY INFORMED",
    footer_newsletter_desc: "Subscribe to our newsletter to receive exclusive updates on new releases, events and special offers.",
    footer_email_placeholder: "Your email address",
    footer_subscribe: "SUBSCRIBE",
    footer_thank_you: "THANK YOU!",
    footer_copyright: "© 2026 ISOLELE. All rights reserved.",
    footer_press: "Press",
    footer_careers: "Careers",
    footer_contact: "Contact Us",
    footer_faq: "FAQ",
    footer_terms: "Terms of Use",
    footer_privacy: "Privacy Policy",
    
    shop_title: "SHOP",
    shop_subtitle: "Discover our collection of comics and merchandise",
    shop_add_to_cart: "Add to Cart",
    shop_buy_now: "Buy Now",
    shop_price: "Price",
    shop_sale: "Sale",
    shop_new: "New",
    shop_bestseller: "Bestseller",
    
    latestNews: "Latest News",
    loading: "Loading...",
    error: "Error",
    success: "Success",
    cancel: "Cancel",
    save: "Save",
    
    // Books translations
    book_welcome_tag: "WELCOME TO ISOLELE",
    book_welcome_title: "THE CHOSEN ONES",
    book_welcome_subtitle: "AN ENTIRE UNIVERSE BORN FROM THE ROOTS OF KONGO...",
    book_welcome_desc: "Isolele is a visionary universe born to restore the soul of African storytelling, a mythological empire where superheroes are chosen by destiny, kingdoms never forgotten, and ancestral power is alive in every page, every prophecy, every battle. Every child who reads Isolele will discover superheroes who look like them, speak their language, protect their land, and honor their ancestors. This is for the next generation of kings, queens, warriors, inventors, and storytellers.",
    book_welcome_button: "EXPLORE THE UNIVERSE",
    
    book_makanda_tag: "THE MAKANDA DYNASTY - BOOK I",
    book_makanda_title: "MAKANDA",
    book_makanda_subtitle: "THE MOST POWERFUL EMPIRE IN HIS... WAS NOT LOST, IT WAS HIDDEN ON PURPOSE",
    book_makanda_desc: "Deep within Central Africa existed a civilization the world was never meant to know about. Spiritually awakened. Technologically advanced. Protected by the Sacred Flame. When outside forces came for what was theirs, the Makanda did not fall. They disappeared. Their city was never lost. It was waiting for the one born to carry the flame again.",
    book_makanda_button: "DISCOVER MAKANDA",
    
    book_bambula_tag: "BAMBULA: CHILD OF RHYTHM",
    book_bambula_title: "BAMBULA",
    book_bambula_subtitle: "CHAPTER I · THE SACRED DRUM",
    book_bambula_desc: "Before words, there was rhythm. Bambula was the child who heard everything. When the drums were taken and the land went silent, he kept the rhythm alive inside him. Armed with the sacred drum, he walks between the spirit world and the living. He does not fight to destroy. He protects to remember.",
    book_bambula_button: "DISCOVER BAMBULA",
    
    book_mokele_tag: "MOKELE: BORN INTO STRUGGLE",
    book_mokele_title: "MOKELE",
    book_mokele_subtitle: "FROM CHILD TO LORD OF KINSHASA",
    book_mokele_desc: "Mokele is not born a king. He is born into struggle. The streets of Kinshasa teach him before school ever could, where loyalty is fragile, violence is normal, and survival is everything. From child to hustler to lord. He builds power, money, and respect. In Kinshasa, you either get eaten... Or you become the predator.",
    book_mokele_button: "DISCOVER MOKELE",
    
    book_zaiire_tag: "ZAIIRE: THE PRINCE OF KONGO",
    book_zaiire_title: "ZAIIRE",
    book_zaiire_subtitle: "THE NECKLACE OF DESTINY",
    book_zaiire_desc: "Forged in the heart of the Kongo Kingdom, the Necklace of Destiny was never made to be worn. It was made to choose. Passed through centuries of fire, war, and silence, it carries the soul of every king who bled for their people and every queen who held the world together with bare hands. When it finds Zaiire, it does not shine. It awakens.",
    book_zaiire_button: "DISCOVER ZAIIRE",
    
    book_kufu_tag: "KUFU: THE CROWN GAME",
    book_kufu_title: "KUFU",
    book_kufu_subtitle: "THE OFFICIAL GAME OF THE ISOLELE UNIVERSE",
    book_kufu_desc: "This is not just a card game. It is a ceremony. Gather your warriors. Build your kingdom. Outplay every opponent at the table. But to claim the crown there is only one way to win. You must raise your voice and speak the name of the king out loud. Then someone places the necklace over your head. Not by your own hand. By another. Because a true king is not crowned alone. KUFU is where African royalty becomes something you feel in your hands, hear in your voice, and carry around your neck. Every game is a coronation. Every winner is a king.",
    book_kufu_button: "EXPLORE THE GAME",
    
    book_amara_tag: "AMARA: QUEEN OF THE SEAS",
    book_amara_title: "AMARA",
    book_amara_subtitle: "CHAPTER I · QUEEN OF THE PIRATES OF AMAZON",
    book_amara_desc: "Every pirate fears the ocean. Amara owns it. She is the Queen of the Seas. The most feared captain on every water in the world. No ship has outrun her. No king has outsmarted her. No army has stopped her fleet. But Amara does not sail alone. Beside her stand four women bound by blood, loyalty and destiny. Five queens of the sea who together carry a power that will shake every throne on the continent. From their union the Agojie dynasty is born. And from that dynasty rise the five women kings who will change the course of African history forever. This is not just a pirate story. This is where the greatest female dynasty in the ISOLELE universe begins.",
    book_amara_button: "DISCOVER AMARA",
    
    book_zattar_tag: "ZATTAR: THE PRINCE OF THE UNIVERSE",
    book_zattar_title: "ZATTAR",
    book_zattar_subtitle: "THE CONQUEROR OF THRONES",
    book_zattar_desc: "When Destiny Refused Him One Kingdom, He Decided to Take Them All. Prince Zattar was born to inherit the throne of Bapindi. But when the Ancestors chose another, something inside him did not break. It ignited. He studied the First and Second Wars of Vegas, legends of devastation that shook the world before he was even born. Where others saw warning, Zattar saw a map. He started the Third War of Vegas. Not out of madness. Not out of pain. But because he looked at the entire universe and reached one conclusion: It belongs to someone. And that someone is Zattar. He was not chosen. So he chose the universe instead.",
    book_zattar_button: "DISCOVER ZATTAR",
    
    book_zaiko_tag: "ZAIKO: LAST KING OF THE STREETS OF KIVUS",
    book_zaiko_title: "ZAIKO",
    book_zaiko_subtitle: "THE LEGEND OF ZAIKO",
    book_zaiko_desc: "Born in North Kivu. Forged in Kinshasa. Zaiko was never meant to survive. But survival was never enough. In a world ruled by power, money, and fear, he rises from nothing. Not as a hero. But as a force. With his brother, he builds the most feared empire the Kivus have ever known. No crown was given. No destiny was written. Everything was taken. Every empire built from the ashes of those who came before. This is the legend of how one man defied fate itself and carved his name into African history with iron and will.",
    book_zaiko_button: "DISCOVER ZAIKO",
    
    character_zaiire_name: "ZAIIRE",
    character_zaiire_title: "The Prince of Kongo and the Necklace of Destiny",
    character_zaiire_desc: "Son of thunder and royalty, chosen by the Necklace of Destiny to restore the glory of Kongo.",
    character_bambula_name: "BAMBULA",
    character_bambula_title: "Child of Rhythm",
    character_bambula_desc: "Warrior of the savannas, master of sacred fire and wild nature.",
    character_kimoya_name: "MAKANDA",
    character_kimoya_title: "The Most Powerful Empire in History",
    character_kimoya_desc: "Warrior empress whose royal court holds the destiny of the continent in her hands.",
    character_mokele_name: "MOKELE",
    character_mokele_title: "Crowned by the Streets",
    character_mokele_desc: "Heir of urban chaos and ancestral power — Crowned by the Streets.",
    character_kufulula_name: "HRM KING KUFULULA",
    character_kufulula_title: "Visionary • Cultural Architect • African Royalty",
    character_kufulula_desc: "Legendary monarch, protector of the ISOLELE royal lineage and visionary founder.",
    character_ensemble_name: "THE ISOLELE ASSEMBLY",
    character_ensemble_title: "The Chosen Ones United",
    character_ensemble_desc: "All warriors and queens of the ZAIIRE kingdom united in their splendor and power.",
    
    back_to_home: "Back to Home",
    cta_title: "THE CHOSEN ONES",
    cta_description: "Isolele is a visionary universe born to restore the soul of African storytelling, a mythological empire where superheroes are chosen by destiny, kingdoms never forgotten, and ancestral power is alive in every page, every prophecy, every battle.",
  } as const,
  fr: {
    nav_home: "Accueil",
    nav_about: "À Propos",
    nav_comics: "Comics",
    nav_founder: "Fondateur",
    nav_news: "Actualités",
    nav_characters: "Personnages",
    nav_shop: "Boutique",
    nav_supporters: "Supporteurs",
    nav_contact: "Contact",
    nav_games: "Jeux",
    nav_all_characters: "Tous les Personnages",
    nav_become_supporter: "Devenir Supporteur",
    nav_partners: "Partenaires",
    nav_restaurant: "Restaurant",
    nav_fashion: "Mode",
    nav_settings: "Paramètres",
    
    universe_title: "L'UNIVERS ISOLELE",
    universe_subtitle: "Les Élus",
    universe_description: "Isolele est un univers visionnaire né pour restaurer l'âme de la narration africaine - un empire mythologique où les super-héros sont choisis par le destin.",
    universe_destiny_title: "La Destinée n'est Pas un Choix",
    universe_destiny_desc: "C'est un Appel. Chaque personnage est convoqué par les lignées du sang, les esprits anciens et les histoires inachevées de leurs ancêtres.",
    universe_heritage_title: "Les Lignées Royales Portent le Pouvoir Ancien",
    universe_heritage_desc: "Le sang royal porte la mémoire et la puissance des royaumes oubliés, attendant d'être réveillés par les élus.",
    universe_resurrection_title: "Les Esprits Ancestraux Ne Meurent Jamais",
    universe_resurrection_desc: "L'Afrique n'a jamais été impuissante. La prophétie est revenue, et avec elle, la résurrection des mythes enfouis.",
    universe_founder_title: "Le Fondateur Visionnaire",
    universe_founder_desc: "King Kufulula a fondé ISOLELE pour restaurer l'âme de la narration africaine et créer un empire mythologique.",
    
    characters_title: "LES ÉLUS",
    characters_subtitle: "Rencontrez les héros, légendes et gardiens de l'Univers Isolele",
    characters_discover: "DÉCOUVRIR",
    
    cta_title: "REJOIGNEZ LA LÉGENDE",
    cta_description: "Faites partie d'un univers de bande dessinée révolutionnaire qui célèbre l'héritage africain noir.",
    cta_explore: "EXPLORER L'UNIVERS",
    cta_newsletter: "S'ABONNER À LA NEWSLETTER",
    
    footer_description: "Isolele est un univers visionnaire né pour restaurer l'âme de la narration africaine.",
    footer_explore: "EXPLORER",
    footer_resources: "RESSOURCES",
    footer_newsletter_title: "RESTEZ INFORMÉ",
    footer_newsletter_desc: "Abonnez-vous à notre newsletter pour recevoir les mises à jour exclusives.",
    footer_email_placeholder: "Votre adresse email",
    footer_subscribe: "S'ABONNER",
    footer_thank_you: "MERCI!",
    footer_copyright: "© 2026 ISOLELE. Tous droits réservés.",
    footer_press: "Presse",
    footer_careers: "Carrières",
    footer_contact: "Nous Contacter",
    footer_faq: "FAQ",
    footer_terms: "Conditions d'Utilisation",
    footer_privacy: "Politique de Confidentialité",
    
    shop_title: "BOUTIQUE",
    shop_subtitle: "Découvrez notre collection de bandes dessinées et de produits dérivés",
    shop_add_to_cart: "Ajouter au Panier",
    shop_buy_now: "Acheter Maintenant",
    shop_price: "Prix",
    shop_sale: "Solde",
    shop_new: "Nouveau",
    shop_bestseller: "Meilleure Vente",
    
    latestNews: "Dernières Nouvelles",
    loading: "Chargement...",
    error: "Erreur",
    success: "Succès",
    cancel: "Annuler",
    save: "Enregistrer",
    
    // Books translations
    book_welcome_tag: "BIENVENUE À ISOLELE",
    book_welcome_title: "LES ÉLUS",
    book_welcome_subtitle: "UN UNIVERS ENTIER NÉ DES RACINES DU KONGO...",
    book_welcome_desc: "Isolele est un univers visionnaire né pour restaurer l'âme de la narration africaine, un empire mythologique où les super-héros sont choisis par le destin, où les royaumes ne sont jamais oubliés, et où la puissance ancestrale est vivante à chaque page, chaque prophétie, chaque bataille. Chaque enfant qui lira Isolele découvrira des super-héros qui lui ressemblent, parlent sa langue, protègent sa terre et honorent ses ancêtres. Ceci est pour la prochaine génération de rois, reines, guerriers, inventeurs et conteurs.",
    book_welcome_button: "EXPLORER L'UNIVERS",
    
    book_makanda_tag: "LA DYNASTIE MAKANDA - LIVRE I",
    book_makanda_title: "MAKANDA",
    book_makanda_subtitle: "LA KANDAKE ASCENDANTE",
    book_makanda_desc: "Au cœur de l'Afrique centrale existait une civilisation que le monde n'était jamais censé connaître. Éveillée spirituellement. Technologiquement avancée. Protégée par la Flamme Sacrée. Quand des forces extérieures sont venues prendre ce qui leur appartenait, les Makanda ne sont pas tombés. Ils ont disparu. Leur ville n'a jamais été perdue. Elle attendait celui qui était né pour porter à nouveau la flamme.",
    book_makanda_button: "DÉCOUVRIR MAKANDA",
    
    book_bambula_tag: "BAMBULA : ENFANT DU RYTHME",
    book_bambula_title: "BAMBULA",
    book_bambula_subtitle: "CHAPITRE I · LE TAMBOUR SACRÉ",
    book_bambula_desc: "Avant les mots, il y avait le rythme. Bambula était l'enfant qui entendait tout. Quand les tambours furent emportés et que la terre devint silencieuse, il garda le rythme vivant à l'intérieur de lui. Armé du tambour sacré, il marche entre le monde des esprits et celui des vivants. Il ne combat pas pour détruire. Il protège pour se souvenir.",
    book_bambula_button: "DÉCOUVRIR BAMBULA",
    
    book_mokele_tag: "MOKELE : NÉ DANS LA LUTTE",
    book_mokele_title: "MOKELE",
    book_mokele_subtitle: "DE L'ENFANT AU SEIGNEUR DE KINSHASA",
    book_mokele_desc: "Mokele n'est pas né roi. Il est né dans la lutte. Les rues de Kinshasa lui apprennent ce que l'école n'aurait jamais pu lui apprendre, là où la loyauté est fragile, la violence normale et la survie primordiale. De l'enfant au débrouillard puis au seigneur. Il construit le pouvoir, l'argent et le respect. À Kinshasa, soit on se fait dévorer… Soit on devient le prédateur.",
    book_mokele_button: "DÉCOUVRIR MOKELE",
    
    book_zaiire_tag: "ZAIIRE : LE PRINCE DU KONGO",
    book_zaiire_title: "ZAIIRE",
    book_zaiire_subtitle: "LE COLLIER DU DESTIN",
    book_zaiire_desc: "Forgé au cœur du Royaume du Kongo, le Collier du Destin n'a jamais été fait pour être porté. Il a été fait pour choisir. Transmis à travers des siècles de feu, de guerre et de silence, il porte l'âme de chaque roi qui a saigné pour son peuple et de chaque reine qui a tenu le monde ensemble à mains nues. Quand il trouve Zaiire, il ne brille pas. Il s'éveille.",
    book_zaiire_button: "DÉCOUVRIR ZAIIRE",
    
    book_kufu_tag: "KUFU : LE JEU DE LA COURONNE",
    book_kufu_title: "KUFU",
    book_kufu_subtitle: "LE JEU OFFICIEL DE L'UNIVERS ISOLELE",
    book_kufu_desc: "Ce n'est pas qu'un simple jeu de cartes. C'est une cérémonie. Rassemblez vos guerriers. Bâtissez votre royaume. Surpassez tous vos adversaires à la table. Mais pour revendiquer la couronne, il n'y a qu'une seule façon de gagner. Vous devez élever la voix et prononcer le nom du roi à haute voix. Ensuite, quelqu'un vous passe le collier autour du cou. Pas de votre propre main. Par une autre. Parce qu'un vrai roi n'est pas couronné seul. KUFU est l'endroit où la royauté africaine devient quelque chose que l'on sent dans ses mains, que l'on entend dans sa voix et que l'on porte autour de son cou. Chaque partie est un couronnement. Chaque gagnant est un roi.",
    book_kufu_button: "EXPLORER LE JEU",
    
    book_amara_tag: "AMARA : REINE DES MERS",
    book_amara_title: "AMARA",
    book_amara_subtitle: "CHAPITRE I · REINE DES PIRATES D'AMAZONIE",
    book_amara_desc: "Tout pirate craint l'océan. Amara le possède. Elle est la Reine des Mers. Le capitaine le plus craint sur toutes les eaux du monde. Aucun navire ne lui a échappé. Aucun roi ne l'a surpassée en ruse. Aucune armée n'a arrêté sa flotte. Mais Amara ne navigue pas seule. À ses côtés se tiennent quatre femmes liées par le sang, la loyauté et le destin. Cinq reines des mers qui portent ensemble un pouvoir qui ébranlera tous les trônes du continent. De leur union naît la dynastie Agojie. Et de cette dynastie s'élèvent les cinq femmes rois qui changeront à jamais le cours de l'histoire africaine. Ce n'est pas qu'une simple histoire de pirates. C'est là que commence la plus grande dynastie féminine de l'univers ISOLELE.",
    book_amara_button: "DÉCOUVRIR AMARA",
    
    book_zattar_tag: "ZATTAR : LE PRINCE DE L'UNIVERS",
    book_zattar_title: "ZATTAR",
    book_zattar_subtitle: "LE CONQUÉRANT DES TRÔNES",
    book_zattar_desc: "Quand le Destin lui a refusé un royaume, il a décidé de les prendre tous. Le prince Zattar est né pour hériter du trône de Bapindi. Mais quand les Ancêtres en ont choisi un autre, quelque chose en lui ne s'est pas brisé. Cela s'est enflammé. Il a étudié la Première et la Deuxième Guerre de Vegas, des légendes de dévastation qui ont secoué le monde avant même sa naissance. Là où d'autres voyaient un avertissement, Zattar a vu une carte. Il a déclenché la Troisième Guerre de Vegas. Non par folie. Non par douleur. Mais parce qu'il a regardé l'univers entier et a tiré une conclusion : il appartient à quelqu'un. Et ce quelqu'un, c'est Zattar. Il n'a pas été choisi. Alors il a choisi l'univers à la place.",
    book_zattar_button: "DÉCOUVRIR ZATTAR",
    
    book_zaiko_tag: "ZAIKO : DERNIER ROI DES RUES DES KIVUS",
    book_zaiko_title: "ZAIKO",
    book_zaiko_subtitle: "LA LÉGENDE DE ZAIKO",
    book_zaiko_desc: "Né au Nord-Kivu. Forgé à Kinshasa. Zaiko n'était jamais censé survivre. Mais survivre n'a jamais suffi. Dans un monde régi par le pouvoir, l'argent et la peur, il s'élève à partir de rien. Non pas en tant que héros. Mais en tant que force. Avec son frère, il bâtit l'empire le plus redouté que les Kivus aient jamais connu. Aucune couronne n'a été donnée. Aucun destin n'a été écrit. Tout a été pris. Chaque empire construit sur les cendres de ceux qui l'ont précédé. Voici la légende de comment un homme a défié le destin lui-même et gravé son nom dans l'histoire africaine avec du fer et de la volonté.",
    book_zaiko_button: "DÉCOUVRIR ZAIKO",
    
    character_zaiire_name: "ZAIIRE",
    character_zaiire_title: "Le Prince du Kongo et le Collier de la Destinée",
    character_zaiire_desc: "Fils du tonnerre et de la royauté, choisi par le Collier de la Destinée pour restaurer la gloire du Kongo.",
    character_bambula_name: "BAMBULA",
    character_bambula_title: "Enfant du Rythme",
    character_bambula_desc: "Guerrière des savanes, maîtresse du feu sacré et de la nature sauvage.",
    character_kimoya_name: "MAKANDA",
    character_kimoya_title: "L'EMPIRE LE PLUS PUISSANT de l'Histoire",
    character_kimoya_desc: "Impératrice guerrière dont la cour royale tient le destin du continent entre ses mains.",
    character_mokele_name: "MOKELE",
    character_mokele_title: "Couronné par les Rues",
    character_mokele_desc: "Héritier du chaos urbain et du pouvoir ancestral — Couronné par les Rues.",
    character_kufulula_name: "SON ALTESSE ROYALE ROI KUFULULA",
    character_kufulula_title: "Visionnaire • Architecte Culturel • Royauté Africaine",
    character_kufulula_desc: "Monarque légendaire, protecteur de la lignée royale ISOLELE et fondateur visionnaire.",
    character_ensemble_name: "L'ASSEMBLÉE ISOLELE",
    character_ensemble_title: "Les Élus Unis",
    character_ensemble_desc: "Tous les guerriers et reines du royaume ZAIIRE unis dans leur splendeur et leur pouvoir.",
    
    back_to_home: "Retour à l'Accueil",
    cta_title: "LES ÉLUS",
    cta_description: "Isolele est un univers visionnaire né pour restaurer l'âme de la narration africaine, un empire mythologique où les superhéros sont choisis par le destin, les royaumes jamais oubliés, et le pouvoir ancestral vivant dans chaque page, chaque prophétie, chaque bataille.",
  } as const,
  pt: {
    nav_home: "Início",
    nav_about: "Sobre",
    nav_comics: "Quadrinhos",
    nav_founder: "Fundador",
    nav_news: "Notícias",
    nav_characters: "Personagens",
    nav_shop: "Loja",
    nav_supporters: "Apoiadores",
    nav_contact: "Contato",
    nav_games: "Jogos",
    nav_all_characters: "Todos os Personagens",
    nav_become_supporter: "Tornar-se um Apoiador",
    nav_partners: "Parceiros",
    nav_restaurant: "Restaurante",
    nav_fashion: "Moda",
    nav_settings: "Configurações",
    
    universe_title: "O UNIVERSO ISOLELE",
    universe_subtitle: "Os Escolhidos",
    universe_description: "Isolele é um universo visionário nascido para restaurar a alma da narrativa africana.",
    universe_destiny_title: "O Destino Não é uma Escolha",
    universe_destiny_desc: "É um Chamado. Cada personagem é convocado por linhagens de sangue e espíritos antigos.",
    universe_heritage_title: "As Linhagens Reais Carregam Poder Antigo",
    universe_heritage_desc: "O sangue real carrega a memória e o poder dos reinos esquecidos.",
    universe_resurrection_title: "Os Espíritos Ancestrais Nunca Morrem",
    universe_resurrection_desc: "A África nunca foi impotente. A profecia retornou.",
    universe_founder_title: "O Fundador Visionário",
    universe_founder_desc: "King Kufulula fundou ISOLELE para restaurar a alma da narrativa africana.",
    
    characters_title: "OS ESCOLHIDOS",
    characters_subtitle: "Conheça os heróis, lendas e guardiões do Universo Isolele",
    characters_discover: "DESCOBRIR",
    
    cta_title: "JUNTE-SE À LENDA",
    cta_description: "Faça parte de um universo revolucionário de histórias em quadrinhos.",
    cta_explore: "EXPLORAR O UNIVERSO",
    cta_newsletter: "INSCREVER-SE NA NEWSLETTER",
    
    footer_description: "Isolele é um universo visionário nascido para restaurar a alma da narrativa africana.",
    footer_explore: "EXPLORAR",
    footer_resources: "RECURSOS",
    footer_newsletter_title: "MANTENHA-SE INFORMADO",
    footer_newsletter_desc: "Inscreva-se em nosso boletim para receber atualizações exclusivas.",
    footer_email_placeholder: "Seu endereço de email",
    footer_subscribe: "INSCREVER",
    footer_thank_you: "OBRIGADO!",
    footer_copyright: "© 2026 ISOLELE. Todos os direitos reservados.",
    footer_press: "Imprensa",
    footer_careers: "Carreiras",
    footer_contact: "Entre em Contato",
    footer_faq: "Perguntas Frequentes",
    footer_terms: "Termos de Uso",
    footer_privacy: "Política de Privacidade",
    
    shop_title: "LOJA",
    shop_subtitle: "Descubra nossa coleção de quadrinhos e mercadorias",
    shop_add_to_cart: "Adicionar ao Carrinho",
    shop_buy_now: "Comprar Agora",
    shop_price: "Preço",
    shop_sale: "Venda",
    shop_new: "Novo",
    shop_bestseller: "Mais Vendido",
    
    latestNews: "Últimas Notícias",
    loading: "Carregando...",
    error: "Erro",
    success: "Sucesso",
    cancel: "Cancelar",
    save: "Salvar",
    
    book_welcome_tag: "BEM-VINDO AO ISOLELE",
    book_welcome_title: "OS ESCOLHIDOS",
    book_welcome_subtitle: "UM UNIVERSO INTEIRO NASCIDO DAS RAÍZES DO KONGO...",
    book_welcome_desc: "Isolele é um universo visionário nascido para restaurar a alma da narrativa africana, um império mitológico onde super-heróis são escolhidos pelo destino, reinos nunca esquecidos, e o poder ancestral está vivo em cada página, cada profecia, cada batalha. Cada criança que ler Isolele descobrirá super-heróis que se parecem com elas, falam sua língua, protegem sua terra e honram seus antepassados. Isto é para a próxima geração de reis, rainhas, guerreiros, inventores e contadores de histórias.",
    book_welcome_button: "EXPLORAR O UNIVERSO",
    
    book_makanda_tag: "A DINASTIA MAKANDA - LIVRO I",
    book_makanda_title: "MAKANDA",
    book_makanda_subtitle: "A KANDAKE ASCENDENTE",
    book_makanda_desc: "No coração da África Central existia uma civilização que o mundo nunca deveria conhecer. Espiritualmente desperta. Tecnologicamente avançada. Protegida pela Chama Sagrada. Quando forças externas vieram tomar o que era deles, os Makanda não caíram. Eles desapareceram. Sua cidade nunca foi perdida. Estava esperando por aquele que nasceu para carregar a chama novamente.",
    book_makanda_button: "DESCOBRIR MAKANDA",
    
    book_bambula_tag: "BAMBULA: CRIANÇA DO RITMO",
    book_bambula_title: "BAMBULA",
    book_bambula_subtitle: "CAPÍTULO I - O TAMBOR SAGRADO",
    book_bambula_desc: "Antes das palavras, existia o ritmo. Bambula era a criança que ouvia tudo. Quando os tambores foram levados e a terra ficou em silêncio, ele manteve o ritmo vivo dentro de si. Armado com o tambor sagrado, ele caminha entre o mundo espiritual e o dos vivos. Ele não luta para destruir. Ele protege para lembrar.",
    book_bambula_button: "DESCOBRIR BAMBULA",
    
    book_mokele_tag: "MOKELE: NASCIDO NA LUTA",
    book_mokele_title: "MOKELE",
    book_mokele_subtitle: "DE CRIANÇA A SENHOR DE KINSHASA",
    book_mokele_desc: "Mokele não nasce rei. Ele nasce na luta. As ruas de Kinshasa o ensinam antes que a escola jamais pudesse, onde a lealdade é frágil, a violência é normal, e a sobrevivência é tudo. De criança a sobrevivente a senhor. Ele constrói poder, dinheiro e respeito. Em Kinshasa, ou você é devorado... Ou você se torna o predador.",
    book_mokele_button: "DESCOBRIR MOKELE",
    
    book_zaiire_tag: "ZAIIRE: O PRÍNCIPE DO KONGO",
    book_zaiire_title: "ZAIIRE",
    book_zaiire_subtitle: "O COLAR DO DESTINO",
    book_zaiire_desc: "Forjado no coração do Reino do Kongo, o Colar do Destino nunca foi feito para ser usado. Foi feito para escolher. Transmitido através de séculos de fogo, guerra e silêncio, ele carrega a alma de cada rei que sangrou por seu povo e de cada rainha que manteve o mundo unido com as próprias mãos. Quando encontra Zaiire, ele não brilha. Ele desperta.",
    book_zaiire_button: "DESCOBRIR ZAIIRE",
    
    book_kufu_tag: "KUFU: O JOGO DA COROA",
    book_kufu_title: "KUFU",
    book_kufu_subtitle: "O JOGO OFICIAL DO UNIVERSO ISOLELE",
    book_kufu_desc: "Isto não é apenas um jogo de cartas. É uma cerimônia. Reúna seus guerreiros. Construa seu reino. Supere todos os oponentes na mesa. Mas para reivindicar a coroa há apenas uma maneira de vencer. Você deve levantar a voz e dizer o nome do rei em voz alta. Então alguém coloca o colar sobre sua cabeça. Não por sua própria mão. Por outra. Porque um verdadeiro rei não é coroado sozinho. KUFU é onde a realeza africana se torna algo que você sente em suas mãos, ouve em sua voz e carrega ao redor do pescoço. Cada jogo é uma coroação. Cada vencedor é um rei.",
    book_kufu_button: "EXPLORAR O JOGO",
    
    book_amara_tag: "AMARA: RAINHA DOS MARES",
    book_amara_title: "AMARA",
    book_amara_subtitle: "CAPÍTULO I - RAINHA DOS PIRATAS DA AMAZÔNIA",
    book_amara_desc: "Todo pirata teme o oceano. Amara o possui. Ela é a Rainha dos Mares. A capitã mais temida em todas as águas do mundo. Nenhum navio escapou dela. Nenhum rei a enganou. Nenhum exército parou sua frota. Mas Amara não navega sozinha. Ao seu lado estão quatro mulheres unidas por sangue, lealdade e destino. Cinco rainhas dos mares que juntas carregam um poder que abalará todos os tronos do continente. Da união delas nasce a dinastia Agojie. E dessa dinastia surgem as cinco mulheres reis que mudarão para sempre o curso da história africana. Isto não é apenas uma história de piratas. É aqui que começa a maior dinastia feminina do universo ISOLELE.",
    book_amara_button: "DESCOBRIR AMARA",
    
    book_zattar_tag: "ZATTAR: O PRÍNCIPE DO UNIVERSO",
    book_zattar_title: "ZATTAR",
    book_zattar_subtitle: "O CONQUISTADOR DE TRONOS",
    book_zattar_desc: "Quando o Destino lhe negou um Reino, Ele Decidiu Tomar Todos. Príncipe Zattar nasceu para herdar o trono de Bapindi. Mas quando os Ancestrais escolheram outro, algo dentro dele não se quebrou. Incendiou-se. Ele estudou a Primeira e a Segunda Guerra de Vegas, lendas de devastação que abalaram o mundo antes mesmo de ele nascer. Onde outros viram aviso, Zattar viu um mapa. Ele iniciou a Terceira Guerra de Vegas. Não por loucura. Não por dor. Mas porque ele olhou para o universo inteiro e chegou a uma conclusão: Ele pertence a alguém. E esse alguém é Zattar. Ele não foi escolhido. Então ele escolheu o universo.",
    book_zattar_button: "DESCOBRIR ZATTAR",
    
    book_zaiko_tag: "ZAIKO: ÚLTIMO REI DAS RUAS DOS KIVUS",
    book_zaiko_title: "ZAIKO",
    book_zaiko_subtitle: "A LENDA DE ZAIKO",
    book_zaiko_desc: "Nascido em Kivu do Norte. Forjado em Kinshasa. Zaiko nunca deveria sobreviver. Mas sobreviver nunca foi o suficiente. Num mundo governado por poder, dinheiro e medo, ele surge do nada. Não como um herói. Mas como uma força. Com seu irmão, ele constrói o império mais temido que os Kivus já conheceram. Nenhuma coroa foi dada. Nenhum destino foi escrito. Tudo foi tomado. Cada império construído sobre as cinzas daqueles que vieram antes. Esta é a lenda de como um homem desafiou o próprio destino e gravou seu nome na história africana com ferro e vontade.",
    book_zaiko_button: "DESCOBRIR ZAIKO",
    
    character_zaiire_name: "ZAIIRE",
    character_zaiire_title: "O Príncipe do Kongo e o Colar do Destino",
    character_zaiire_desc: "Filho do trovão e da realeza, escolhido pelo Colar do Destino para restaurar a glória do Kongo.",
    character_bambula_name: "BAMBULA",
    character_bambula_title: "Filha do Ritmo",
    character_bambula_desc: "Guerreira das savanas, mestra do fogo sagrado e da natureza selvagem.",
    character_kimoya_name: "MAKANDA",
    character_kimoya_title: "O IMPÉRIO MAIS PODEROSO da História",
    character_kimoya_desc: "Imperatriz guerreira cuja corte real detém o destino do continente em suas mãos.",
    character_mokele_name: "MOKELE",
    character_mokele_title: "Coroado pelas Ruas",
    character_mokele_desc: "Herdeiro do caos urbano e do poder ancestral — Coroado pelas Ruas.",
    character_kufulula_name: "SUA ALTEZA REAL REI KUFULULA",
    character_kufulula_title: "Visionário • Arquiteto Cultural • Realeza Africana",
    character_kufulula_desc: "Monarca legendário, protetor da linhagem real ISOLELE e fundador visionário.",
    character_ensemble_name: "A ASSEMBLEIA ISOLELE",
    character_ensemble_title: "Os Escolhidos Unidos",
    character_ensemble_desc: "Todos os guerreiros e rainhas do reino ZAIIRE unidas em seu esplendor e poder.",
    
    back_to_home: "Voltar para Casa",
  } as const,
  es: {
    nav_home: "Inicio",
    nav_about: "Acerca",
    nav_comics: "Cómics",
    nav_founder: "Fundador",
    nav_news: "Noticias",
    nav_characters: "Personajes",
    nav_shop: "Tienda",
    nav_supporters: "Apoyadores",
    nav_contact: "Contacto",
    nav_games: "Juegos",
    nav_all_characters: "Todos los Personajes",
    nav_become_supporter: "Conviértete en Apoyo",
    nav_partners: "Socios",
    nav_restaurant: "Restaurante",
    nav_fashion: "Moda",
    nav_settings: "Configuración",
    
    universe_title: "EL UNIVERSO ISOLELE",
    universe_subtitle: "Los Elegidos",
    universe_description: "Isolele es un universo visionario nacido para restaurar el alma de la narrativa africana.",
    universe_destiny_title: "El Destino No es una Opción",
    universe_destiny_desc: "Es un Llamado. Cada personaje es convocado por línajes de sangre y espíritus antiguos.",
    universe_heritage_title: "Los Linajes Reales Llevan Poder Antiguo",
    universe_heritage_desc: "La sangre real lleva la memoria y el poder de los reinos olvidados.",
    universe_resurrection_title: "Los Espíritus Ancestrales Nunca Mueren",
    universe_resurrection_desc: "África nunca fue impotente. La profecía ha regresado.",
    universe_founder_title: "El Fundador Visionario",
    universe_founder_desc: "King Kufulula fundó ISOLELE para restaurar el alma de la narrativa africana.",
    
    characters_title: "LOS ELEGIDOS",
    characters_subtitle: "Conoce los héroes, leyendas y guardianes del Universo Isolele",
    characters_discover: "DESCUBRIR",
    
    cta_title: "ÚNETE A LA LEYENDA",
    cta_description: "Sé parte de un universo revolucionario de historias en cómics.",
    cta_explore: "EXPLORAR EL UNIVERSO",
    cta_newsletter: "SUSCRIBIRSE AL BOLETÍN",
    
    footer_description: "Isolele es un universo visionario nacido para restaurar el alma de la narrativa africana.",
    footer_explore: "EXPLORAR",
    footer_resources: "RECURSOS",
    footer_newsletter_title: "MANTENTE INFORMADO",
    footer_newsletter_desc: "Suscríbete a nuestro boletín para recibir actualizaciones exclusivas.",
    footer_email_placeholder: "Tu dirección de correo electrónico",
    footer_subscribe: "SUSCRIBIRSE",
    footer_thank_you: "¡GRACIAS!",
    footer_copyright: "© 2026 ISOLELE. Todos los derechos reservados.",
    footer_press: "Prensa",
    footer_careers: "Carreras",
    footer_contact: "Contáctanos",
    footer_faq: "Preguntas Frecuentes",
    footer_terms: "Términos de Uso",
    footer_privacy: "Política de Privacidad",
    
    shop_title: "TIENDA",
    shop_subtitle: "Descubre nuestra colección de cómics y mercancías",
    shop_add_to_cart: "Añadir al Carrito",
    shop_buy_now: "Comprar Ahora",
    shop_price: "Precio",
    shop_sale: "Venta",
    shop_new: "Nuevo",
    shop_bestseller: "Más Vendido",
    
    latestNews: "Últimas Noticias",
    loading: "Cargando...",
    error: "Error",
    success: "Éxito",
    cancel: "Cancelar",
    save: "Guardar",
    
    book_zaiire_title: "Zaiire: El Príncipe del Congo",
    book_zaiire_desc: "Una aventura épica arraigada en la herencia y mitología congoleña",
    book_makanda_title: "De Mito a Manuscrito: Mapeando el Imperio Makanda",
    book_makanda_desc: "Un viaje cartográfico a través de una civilización africana olvidada",
    book_bambula_title: "Bambula: La Guardiana",
    book_bambula_desc: "Una historia de coraje, poder y autodescubrimiento",
    book_mokele_title: "Mokele: Príncipe de las Aguas",
    book_mokele_desc: "Una búsqueda legendaria a través de los reinos del Congo",
    
    character_zaiire_name: "ZAIIRE",
    character_zaiire_title: "El Príncipe del Kongo y el Collar del Destino",
    character_zaiire_desc: "Hijo del trueno y la realeza, elegido por el Collar del Destino para restaurar la gloria del Kongo.",
    character_bambula_name: "BAMBULA",
    character_bambula_title: "Hija del Ritmo",
    character_bambula_desc: "Guerrera de las sabanas, maestra del fuego sagrado y la naturaleza salvaje.",
    character_kimoya_name: "MAKANDA",
    character_kimoya_title: "EL IMPERIO MÁS PODEROSO de la Historia",
    character_kimoya_desc: "Emperatriz guerrera cuya corte real tiene el destino del continente en sus manos.",
    character_mokele_name: "MOKELE",
    character_mokele_title: "Coronado por las Calles",
    character_mokele_desc: "Heredero del caos urbano y el poder ancestral — Coronado por las Calles.",
    character_kufulula_name: "SU MAJESTAD REAL REY KUFULULA",
    character_kufulula_title: "Visionario • Arquitecto Cultural • Realeza Africana",
    character_kufulula_desc: "Monarca legendario, protector del linaje real ISOLELE y fundador visionario.",
    character_ensemble_name: "LA ASAMBLEA ISOLELE",
    character_ensemble_title: "Los Elegidos Unidos",
    character_ensemble_desc: "Todos los guerreros y reinas del reino ZAIIRE unidos en su esplendor y poder.",
    
    back_to_home: "Volver a Casa",
  } as const,
  zu: {
    nav_home: "Home",
    nav_about: "About",
    nav_comics: "Comics",
    nav_founder: "Founder",
    nav_news: "News",
    nav_characters: "Characters",
    nav_shop: "Shop",
    nav_supporters: "Supporters",
    nav_contact: "Contact",
    nav_games: "Games",
    nav_all_characters: "All Characters",
    nav_become_supporter: "Become a Supporter",
    nav_partners: "Partners",
    nav_restaurant: "Restaurant",
    nav_fashion: "Fashion",
    nav_settings: "Settings",
    
    universe_title: "THE ISOLELE UNIVERSE",
    universe_subtitle: "The Chosen Ones",
    universe_description: "Isolele is a visionary universe born to restore the soul of African storytelling.",
    universe_destiny_title: "Destiny is Not a Choice",
    universe_destiny_desc: "It is a Call. Every character is summoned by bloodlines.",
    universe_heritage_title: "Royal Bloodlines Carry Ancient Power",
    universe_heritage_desc: "Royal blood carries the memory and might of forgotten kingdoms.",
    universe_resurrection_title: "Ancestral Spirits Never Die",
    universe_resurrection_desc: "Africa was never powerless.",
    universe_founder_title: "The Visionary Founder",
    universe_founder_desc: "King Kufulula founded ISOLELE to restore African storytelling.",
    
    characters_title: "THE CHOSEN ONES",
    characters_subtitle: "Meet the heroes, legends and guardians",
    characters_discover: "DISCOVER",
    
    cta_title: "JOIN THE LEGEND",
    cta_description: "Be part of a groundbreaking comic book universe.",
    cta_explore: "EXPLORE THE UNIVERSE",
    cta_newsletter: "SUBSCRIBE TO NEWSLETTER",
    
    footer_description: "Isolele is a visionary universe born to restore African storytelling.",
    footer_explore: "EXPLORE",
    footer_resources: "RESOURCES",
    footer_newsletter_title: "STAY INFORMED",
    footer_newsletter_desc: "Subscribe to our newsletter for exclusive updates.",
    footer_email_placeholder: "Your email address",
    footer_subscribe: "SUBSCRIBE",
    footer_thank_you: "THANK YOU!",
    footer_copyright: "© 2026 ISOLELE. All rights reserved.",
    footer_press: "Press",
    footer_careers: "Careers",
    footer_contact: "Contact Us",
    footer_faq: "FAQ",
    footer_terms: "Terms of Use",
    footer_privacy: "Privacy Policy",
    
    shop_title: "SHOP",
    shop_subtitle: "Discover our collection of comics and merchandise",
    shop_add_to_cart: "Add to Cart",
    shop_buy_now: "Buy Now",
    shop_price: "Price",
    shop_sale: "Sale",
    shop_new: "New",
    shop_bestseller: "Bestseller",
    
    latestNews: "Latest News",
    loading: "Loading...",
    error: "Error",
    success: "Success",
    cancel: "Cancel",
    save: "Save",
    
    book_zaiire_title: "Zaiire: The Prince of Kongo",
    book_zaiire_desc: "An epic adventure grounded in Congolese heritage",
    book_makanda_title: "From Myth to Manuscript: Mapping the Makanda Empire",
    book_makanda_desc: "A cartographic journey through a forgotten African civilization",
    book_bambula_title: "Bambula: The Guardian",
    book_bambula_desc: "A tale of courage, power, and self-discovery",
    book_mokele_title: "Mokele: Prince of the Waters",
    book_mokele_desc: "A legendary quest through the kingdoms of Congo",
    
    character_zaiire_name: "ZAIIRE",
    character_zaiire_title: "INkosana weKongo neneKhanga leNkomo",
    character_zaiire_desc: "Indodana yomaledle nobukhosi, ekhethiwe yiKhanga leNkomo.",
    character_bambula_name: "BAMBULA",
    character_bambula_title: "Umntwana weRhythm",
    character_bambula_desc: "Isumalemane sezavelo, unongameli womuntu kaSwele.",
    character_kimoya_name: "MAKANDA",
    character_kimoya_title: "UMBUSO ONAMANDLA KAKHULU Emlandweni",
    character_kimoya_desc: "Inkosikazi yomsulwa eyalwa ngabantu.",
    character_mokele_name: "MOKELE",
    character_mokele_title: "Ukhethiwe NgeSitolo",
    character_mokele_desc: "Indlalifa yomsindo wesigodi neamandla amazulu.",
    character_kufulula_name: "INKOSI KUFULULA",
    character_kufulula_title: "Umbone • Umakhi weNtu • Isikhulu seAfrika",
    character_kufulula_desc: "Inkosi ende, umlindi womlandwankosi weISOLELE.",
    character_ensemble_name: "IBHUNGA LEISO LELE",
    character_ensemble_title: "Abasakhethiwe Ahlangene",
    character_ensemble_desc: "Bonke abasumalemane neenkosikazi zeZAIIRE bahlangene ebukhosini.",
    
    back_to_home: "Buyela KuMuzi",
  } as const,
  xh: {
    nav_home: "Home",
    nav_about: "About",
    nav_comics: "Comics",
    nav_founder: "Founder",
    nav_news: "News",
    nav_characters: "Characters",
    nav_shop: "Shop",
    nav_supporters: "Supporters",
    nav_contact: "Contact",
    nav_games: "Games",
    nav_all_characters: "All Characters",
    nav_become_supporter: "Become a Supporter",
    nav_partners: "Partners",
    nav_restaurant: "Restaurant",
    nav_fashion: "Fashion",
    nav_settings: "Settings",
    
    universe_title: "THE ISOLELE UNIVERSE",
    universe_subtitle: "The Chosen Ones",
    universe_description: "Isolele is a visionary universe born to restore the soul of African storytelling.",
    universe_destiny_title: "Destiny is Not a Choice",
    universe_destiny_desc: "It is a Call. Every character is summoned by bloodlines.",
    universe_heritage_title: "Royal Bloodlines Carry Ancient Power",
    universe_heritage_desc: "Royal blood carries the memory and might of forgotten kingdoms.",
    universe_resurrection_title: "Ancestral Spirits Never Die",
    universe_resurrection_desc: "Africa was never powerless.",
    universe_founder_title: "The Visionary Founder",
    universe_founder_desc: "King Kufulula founded ISOLELE to restore African storytelling.",
    
    characters_title: "THE CHOSEN ONES",
    characters_subtitle: "Meet the heroes, legends and guardians",
    characters_discover: "DISCOVER",
    
    cta_title: "JOIN THE LEGEND",
    cta_description: "Be part of a groundbreaking comic book universe.",
    cta_explore: "EXPLORE THE UNIVERSE",
    cta_newsletter: "SUBSCRIBE TO NEWSLETTER",
    
    footer_description: "Isolele is a visionary universe born to restore African storytelling.",
    footer_explore: "EXPLORE",
    footer_resources: "RESOURCES",
    footer_newsletter_title: "STAY INFORMED",
    footer_newsletter_desc: "Subscribe to our newsletter for exclusive updates.",
    footer_email_placeholder: "Your email address",
    footer_subscribe: "SUBSCRIBE",
    footer_thank_you: "THANK YOU!",
    footer_copyright: "© 2026 ISOLELE. All rights reserved.",
    footer_press: "Press",
    footer_careers: "Careers",
    footer_contact: "Contact Us",
    footer_faq: "FAQ",
    footer_terms: "Terms of Use",
    footer_privacy: "Privacy Policy",
    
    shop_title: "SHOP",
    shop_subtitle: "Discover our collection of comics and merchandise",
    shop_add_to_cart: "Add to Cart",
    shop_buy_now: "Buy Now",
    shop_price: "Price",
    shop_sale: "Sale",
    shop_new: "New",
    shop_bestseller: "Bestseller",
    
    latestNews: "Latest News",
    loading: "Loading...",
    error: "Error",
    success: "Success",
    cancel: "Cancel",
    save: "Save",
    
    book_zaiire_title: "Zaiire: The Prince of Kongo",
    book_zaiire_desc: "An epic adventure grounded in Congolese heritage",
    book_makanda_title: "From Myth to Manuscript: Mapping the Makanda Empire",
    book_makanda_desc: "A cartographic journey through a forgotten African civilization",
    book_bambula_title: "Bambula: The Guardian",
    book_bambula_desc: "A tale of courage, power, and self-discovery",
    book_mokele_title: "Mokele: Prince of the Waters",
    book_mokele_desc: "A legendary quest through the kingdoms of Congo",
  } as const,
  sw: {
    nav_home: "Home",
    nav_about: "About",
    nav_comics: "Comics",
    nav_founder: "Founder",
    nav_news: "News",
    nav_characters: "Characters",
    nav_shop: "Shop",
    nav_supporters: "Supporters",
    nav_contact: "Contact",
    nav_games: "Games",
    nav_all_characters: "All Characters",
    nav_become_supporter: "Become a Supporter",
    nav_partners: "Partners",
    nav_restaurant: "Restaurant",
    nav_fashion: "Fashion",
    nav_settings: "Settings",
    
    universe_title: "THE ISOLELE UNIVERSE",
    universe_subtitle: "The Chosen Ones",
    universe_description: "Isolele is a visionary universe born to restore the soul of African storytelling.",
    universe_destiny_title: "Destiny is Not a Choice",
    universe_destiny_desc: "It is a Call. Every character is summoned by bloodlines.",
    universe_heritage_title: "Royal Bloodlines Carry Ancient Power",
    universe_heritage_desc: "Royal blood carries the memory and might of forgotten kingdoms.",
    universe_resurrection_title: "Ancestral Spirits Never Die",
    universe_resurrection_desc: "Africa was never powerless.",
    universe_founder_title: "The Visionary Founder",
    universe_founder_desc: "King Kufulula founded ISOLELE to restore African storytelling.",
    
    characters_title: "THE CHOSEN ONES",
    characters_subtitle: "Meet the heroes, legends and guardians",
    characters_discover: "DISCOVER",
    
    cta_title: "JOIN THE LEGEND",
    cta_description: "Be part of a groundbreaking comic book universe.",
    cta_explore: "EXPLORE THE UNIVERSE",
    cta_newsletter: "SUBSCRIBE TO NEWSLETTER",
    
    footer_description: "Isolele is a visionary universe born to restore African storytelling.",
    footer_explore: "EXPLORE",
    footer_resources: "RESOURCES",
    footer_newsletter_title: "STAY INFORMED",
    footer_newsletter_desc: "Subscribe to our newsletter for exclusive updates.",
    footer_email_placeholder: "Your email address",
    footer_subscribe: "SUBSCRIBE",
    footer_thank_you: "THANK YOU!",
    footer_copyright: "© 2026 ISOLELE. All rights reserved.",
    footer_press: "Press",
    footer_careers: "Careers",
    footer_contact: "Contact Us",
    footer_faq: "FAQ",
    footer_terms: "Terms of Use",
    footer_privacy: "Privacy Policy",
    
    shop_title: "SHOP",
    shop_subtitle: "Discover our collection of comics and merchandise",
    shop_add_to_cart: "Add to Cart",
    shop_buy_now: "Buy Now",
    shop_price: "Price",
    shop_sale: "Sale",
    shop_new: "New",
    shop_bestseller: "Bestseller",
    
    latestNews: "Latest News",
    loading: "Loading...",
    error: "Error",
    success: "Success",
    cancel: "Cancel",
    save: "Save",
    
    book_zaiire_title: "Zaiire: The Prince of Kongo",
    book_zaiire_desc: "An epic adventure grounded in Congolese heritage",
    book_makanda_title: "From Myth to Manuscript: Mapping the Makanda Empire",
    book_makanda_desc: "A cartographic journey through a forgotten African civilization",
    book_bambula_title: "Bambula: The Guardian",
    book_bambula_desc: "A tale of courage, power, and self-discovery",
    book_mokele_title: "Mokele: Prince of the Waters",
    book_mokele_desc: "A legendary quest through the kingdoms of Congo",
  } as const,
  ln: {
    nav_home: "Home",
    nav_about: "About",
    nav_comics: "Comics",
    nav_founder: "Founder",
    nav_news: "News",
    nav_characters: "Characters",
    nav_shop: "Shop",
    nav_supporters: "Supporters",
    nav_contact: "Contact",
    nav_games: "Games",
    nav_all_characters: "All Characters",
    nav_become_supporter: "Become a Supporter",
    nav_partners: "Partners",
    nav_restaurant: "Restaurant",
    nav_fashion: "Fashion",
    nav_settings: "Settings",
    
    universe_title: "THE ISOLELE UNIVERSE",
    universe_subtitle: "The Chosen Ones",
    universe_description: "Isolele is a visionary universe born to restore the soul of African storytelling.",
    universe_destiny_title: "Destiny is Not a Choice",
    universe_destiny_desc: "It is a Call. Every character is summoned by bloodlines.",
    universe_heritage_title: "Royal Bloodlines Carry Ancient Power",
    universe_heritage_desc: "Royal blood carries the memory and might of forgotten kingdoms.",
    universe_resurrection_title: "Ancestral Spirits Never Die",
    universe_resurrection_desc: "Africa was never powerless.",
    universe_founder_title: "The Visionary Founder",
    universe_founder_desc: "King Kufulula founded ISOLELE to restore African storytelling.",
    
    characters_title: "THE CHOSEN ONES",
    characters_subtitle: "Meet the heroes, legends and guardians",
    characters_discover: "DISCOVER",
    
    cta_title: "JOIN THE LEGEND",
    cta_description: "Be part of a groundbreaking comic book universe.",
    cta_explore: "EXPLORE THE UNIVERSE",
    cta_newsletter: "SUBSCRIBE TO NEWSLETTER",
    
    footer_description: "Isolele is a visionary universe born to restore African storytelling.",
    footer_explore: "EXPLORE",
    footer_resources: "RESOURCES",
    footer_newsletter_title: "STAY INFORMED",
    footer_newsletter_desc: "Subscribe to our newsletter for exclusive updates.",
    footer_email_placeholder: "Your email address",
    footer_subscribe: "SUBSCRIBE",
    footer_thank_you: "THANK YOU!",
    footer_copyright: "© 2026 ISOLELE. All rights reserved.",
    footer_press: "Press",
    footer_careers: "Careers",
    footer_contact: "Contact Us",
    footer_faq: "FAQ",
    footer_terms: "Terms of Use",
    footer_privacy: "Privacy Policy",
    
    shop_title: "SHOP",
    shop_subtitle: "Discover our collection of comics and merchandise",
    shop_add_to_cart: "Add to Cart",
    shop_buy_now: "Buy Now",
    shop_price: "Price",
    shop_sale: "Sale",
    shop_new: "New",
    shop_bestseller: "Bestseller",
    
    latestNews: "Latest News",
    loading: "Loading...",
    error: "Error",
    success: "Success",
    cancel: "Cancel",
    save: "Save",
    
    book_zaiire_title: "Zaiire: The Prince of Kongo",
    book_zaiire_desc: "An epic adventure grounded in Congolese heritage",
    book_makanda_title: "From Myth to Manuscript: Mapping the Makanda Empire",
    book_makanda_desc: "A cartographic journey through a forgotten African civilization",
    book_bambula_title: "Bambula: The Guardian",
    book_bambula_desc: "A tale of courage, power, and self-discovery",
    book_mokele_title: "Mokele: Prince of the Waters",
    book_mokele_desc: "A legendary quest through the kingdoms of Congo",
  } as const,
  xh: {
    nav_home: "Ekhaya",
    nav_about: "Malunga",
    nav_comics: "Imifanekiso",
    nav_founder: "Umthembi",
    nav_news: "Iindaba",
    nav_characters: "Abantu",
    nav_shop: "IsiXhopiwo",
    nav_supporters: "Abaxhasi",
    nav_contact: "Xhoma",
    nav_games: "Imidlalo",
    nav_all_characters: "Bonke Abantu",
    nav_become_supporter: "Yiba Uxhasi",
    nav_partners: "Abahlanganisayo",
    nav_restaurant: "Indawo Yokutya",
    nav_fashion: "Inxwantsho",
    nav_settings: "Iisettingi",
    
    universe_title: "I-ISOLELE YENDAWO",
    universe_subtitle: "Abakhethe",
    universe_description: "I-Isolele yindawo enomdla eyenziwe ukuqonda indlela yeAfrika yokubhala izindlela zenkosi.",
    universe_destiny_title: "Ingqondo Ayiyonto Yokukhetha",
    universe_destiny_desc: "Isisimbizo. Umuntu enye ichazwa ngutsolo lwegazi nezimu zomhla mdala.",
    universe_heritage_title: "Intsika Yeenkosi Zinolwadulele Lwesile",
    universe_heritage_desc: "Igazi lenkosi libhala isikhungukhungu neamandla ebukhosini obubonakalayo.",
    universe_resurrection_title: "Izimoyalelo Zomdali Azifeli Nhlobo",
    universe_resurrection_desc: "I-Afrika ayinakho ukuba ngamanzi. Isiprophethi sebuyile.",
    universe_founder_title: "Umthembi Onesibindi",
    universe_founder_desc: "King Kufulula wasimisa i-ISOLELE ukuze aqulunqe isikali sokubhala seAfrika.",
    
    characters_title: "ABAKHETHE",
    characters_subtitle: "Qaphela iingcali, izindlela nezikhethelo zeAfrika",
    characters_discover: "KHANGELA",
    
    cta_title: "NGENELA ESISUSELO",
    cta_description: "Yiba yinxalenye yendawo yokubhala imithi enomklomelo olukhulu.",
    cta_explore: "KHANGELA INDAWO",
    cta_newsletter: "LANDELA IINDABA",
    
    footer_description: "I-Isolele yindawo enomdla eyenziwe ukuqonda indlela yeAfrika yokubhala.",
    footer_explore: "KHANGELA",
    footer_resources: "AMANDLA",
    footer_newsletter_title: "HLALA UYAZI",
    footer_newsletter_desc: "Landela iindaba zethu nokufumana ulwazi olukhethekileyo.",
    footer_email_placeholder: "Icandelo lolu lokuthakatha",
    footer_subscribe: "LANDELA",
    footer_thank_you: "ENKOSI!",
    footer_copyright: "© 2026 ISOLELE. Onke amalungelo aliswa.",
    footer_press: "Amaphephandaba",
    footer_careers: "Umsebenzi",
    footer_contact: "Xhoma Apha",
    footer_faq: "Imibuzo",
    footer_terms: "Imigaqo",
    footer_privacy: "Imfihlo",
    
    shop_title: "ISIKHOPHO",
    shop_subtitle: "Khangela imibengo yethu",
    shop_add_to_cart: "Yongeza Umlongiso",
    shop_buy_now: "Thenga Ngoku",
    shop_price: "Intengo",
    shop_sale: "Uthengiso",
    shop_new: "Okusemva",
    shop_bestseller: "Eyona Inotheswa Kakhulu",
    
    latestNews: "Iindaba Zakaolufuthi",
    loading: "Ilukelekela...",
    error: "Isiphulu",
    success: "Impumelelo",
    cancel: "Rhoxisa",
    save: "Gcina",
    
    book_zaiire_title: "Zaiire: Inkosana Ye-Kongo",
    book_zaiire_desc: "Inqalelo elimangalisayo esemthethweni weNkosi",
    book_makanda_title: "Kwisiphumo Kwisikwere: Imephu yeUmpilo Wekhonkco",
    book_makanda_desc: "Isihambela sokukhangela emva kokulibala okukhulukaklule",
    book_bambula_title: "Bambula: Umlindeli",
    book_bambula_desc: "Ibali lesibindi, amandla nokufumanisa nokwazi",
    book_mokele_title: "Mokele: Inkosana Yamanzi",
    book_mokele_desc: "Inqalelo elintatandweni kwibukhosini beName",
  } as const,
  sw: {
    nav_home: "Nyumbani",
    nav_about: "Kuhusu",
    nav_comics: "Vitabu vya Picha",
    nav_founder: "Kuanzisha",
    nav_news: "Habari",
    nav_characters: "Wahusika",
    nav_shop: "Duka",
    nav_supporters: "Wenye Msaada",
    nav_contact: "Wasiliana",
    nav_games: "Michezo",
    nav_all_characters: "Wahusika Wote",
    nav_become_supporter: "Kuwa Msaada",
    nav_partners: "Washirikiano",
    nav_restaurant: "Mgahawa",
    nav_fashion: "Mavazi",
    nav_settings: "Mipangilio",
    
    universe_title: "ULIMWENGU WA ISOLELE",
    universe_subtitle: "Wanaochaguliwa",
    universe_description: "Isolele ni ulimwengu unaoangaza ulioanzishwa kurudisha ujinga wa hadithi za Afrika.",
    universe_destiny_title: "Bhati si Chaguo",
    universe_destiny_desc: "Ni Kito. Kila wahusika wanakamatia nguzo za damu na roho za wazimu wenye umri.",
    universe_heritage_title: "Njia za Wafalme Zinachukua Nguvu ya Kale",
    universe_heritage_desc: "Damu ya kifalme inabeba kumbukumbu na ujinga wa falme zilizosahauliwa.",
    universe_resurrection_title: "Roho za Wazimu Hazikufa",
    universe_resurrection_desc: "Afrika haikuwahi kuwa dhaifu. Nabii imerudiwaje.",
    universe_founder_title: "Kuanzisha Kunaoangaza",
    universe_founder_desc: "King Kufulula alianzisha ISOLELE kurudisha ujinga wa hadithi za Afrika.",
    
    characters_title: "WANAOCHAGULIWA",
    characters_subtitle: "Hakiki wageni, mitendi na walinzi wa Ulimwengu wa ISOLELE",
    characters_discover: "GUNDUA",
    
    cta_title: "JIUNGE NA HADITHI",
    cta_description: "Kuwa sehemu ya ulimwengu wa vitabu vya picha unavyosisitiza urithi wa Afrika.",
    cta_explore: "CHUNGUZA ULIMWENGU",
    cta_newsletter: "JIANDIKISHE KWA UJUMBE",
    
    footer_description: "Isolele ni ulimwengu unaoangaza ulioanzishwa kurudisha ujinga wa hadithi za Afrika.",
    footer_explore: "CHUNGUZA",
    footer_resources: "RASILIMALI",
    footer_newsletter_title: "BAKI KUJUA",
    footer_newsletter_desc: "Jiandikishe kwa ujumbe wetu kupokea taarifa nyingine.",
    footer_email_placeholder: "Anuani ya barua pepe",
    footer_subscribe: "JIANDIKISHE",
    footer_thank_you: "ASANTE!",
    footer_copyright: "© 2026 ISOLELE. Haki zote zimebakiwa.",
    footer_press: "Matangazo",
    footer_careers: "Kazi",
    footer_contact: "Wasiliana Nasi",
    footer_faq: "Maswali Yanayoulizwa Mara Kwa Mara",
    footer_terms: "Masharti ya Matumizi",
    footer_privacy: "Sera ya Faragha",
    
    shop_title: "DUKA",
    shop_subtitle: "Gundua mkusanyiko wetu wa vitabu vya picha",
    shop_add_to_cart: "Ongeza Kwenye Kikapu",
    shop_buy_now: "Nunua Sasa",
    shop_price: "Gharama",
    shop_sale: "Mauzo",
    shop_new: "Mpya",
    shop_bestseller: "Kinachouzwa Zaidi",
    
    latestNews: "Habari za Karibuni",
    loading: "Inapakia...",
    error: "Hitilafu",
    success: "Mafanikio",
    cancel: "Ghairi",
    save: "Hifadhi",
    
    book_zaiire_title: "Zaiire: Mkuu wa Kongo",
    book_zaiire_desc: "Hadithi ya kusisimua iliyojengwa katika urithi wa Kikongo",
    book_makanda_title: "Kutoka Hadithi Hadi Manuskrti: Ramani ya Ufalme wa Makanda",
    book_makanda_desc: "Safari ya ramani kupitia umarekani ulilosahauliwa wa Afrika",
    book_bambula_title: "Bambula: Mlindesi",
    book_bambula_desc: "Hadithi ya ushindi, nguvu na kujigundua",
    book_mokele_title: "Mokele: Mkuu wa Maji",
    book_mokele_desc: "Kuchimba legendari kupitia falme za Kongo",
  } as const,
  ln: {
    nav_home: "Ndako",
    nav_about: "O Nini",
    nav_comics: "Buku ya Mifano",
    nav_founder: "Mobateli",
    nav_news: "Salangi",
    nav_characters: "Bato",
    nav_shop: "Mwa libala",
    nav_supporters: "Bato ba Msai",
    nav_contact: "Zona amine",
    nav_games: "Lipái",
    nav_all_characters: "Bato Banso",
    nav_become_supporter: "Biba Musteyi",
    nav_partners: "Bampusani",
    nav_restaurant: "Mwa Kolia",
    nav_fashion: "Bilamba",
    nav_settings: "Minzoto",
    
    universe_title: "MOKILI WA ISOLELE",
    universe_subtitle: "Bato ba Monani",
    universe_description: "Isolele ezali mokili oyo ezalaki mobateli mpo na kulanda liyaka ya masolo ya Afrika.",
    universe_destiny_title: "Mosolo Ezali Te Pili",
    universe_destiny_desc: "Ezali Mongambo. Moto yembe efungwamaka na mizalwi ya makolo mpe mizimu ya bakokolo.",
    universe_heritage_title: "Misolo ya Bakongeisha Ebakaka Nguya ya Kale",
    universe_heritage_desc: "Makolo ma bokongeisha abakaka mongambo mpe nguya ya mibange oyo elingaki kolatika.",
    universe_resurrection_title: "Mizimu ya Bakokolo Ezalaka Kamata Kotikala",
    universe_resurrection_desc: "Afrika eyamaki kamata kotikala kolema. Liloba lya Nzambe lilongaki.",
    universe_founder_title: "Mobateli wa Mayele",
    universe_founder_desc: "King Kufulula alibateli ISOLELE mpo kulanda liyaka ya masolo ya Afrika.",
    
    characters_title: "BATO BA MONANI",
    characters_subtitle: "Talana ba Libongisani, ba Makambo mpe ba Bosikali ya Mokili wa ISOLELE",
    characters_discover: "TALANA",
    
    cta_title: "KOTA NA MONANI",
    cta_description: "Koba mutu wa mokili wa buku ya mifano oyo ebatakaka ubwangu wa Afrika.",
    cta_explore: "TALANA MOKILI",
    cta_newsletter: "BONABONA NA LITRE",
    
    footer_description: "Isolele ezali mokili oyo ezalaki mobateli mpo kulanda liyaka ya masolo ya Afrika.",
    footer_explore: "TALANA",
    footer_resources: "BILOKO",
    footer_newsletter_title: "MELA KOYEBA",
    footer_newsletter_desc: "Bonabona na litre na yango mpo na koyamba salangi ya kaka.",
    footer_email_placeholder: "Adrese ya yo ya maili",
    footer_subscribe: "BONABONA",
    footer_thank_you: "MERCI!",
    footer_copyright: "© 2026 ISOLELE. Dibungi nyonso ekawela.",
    footer_press: "Filimu",
    footer_careers: "Misebengi",
    footer_contact: "Zona Amine Ici",
    footer_faq: "Mayina Oyo Esengelami Kobimisama",
    footer_terms: "Milao ya Kosebelaka",
    footer_privacy: "Politiki ya Bosekelo",
    
    shop_title: "LIBALA",
    shop_subtitle: "Talana koleksio ya buku ya mifano mpe biloko",
    shop_add_to_cart: "Weza na Basike",
    shop_buy_now: "Zeta Sik'oyo",
    shop_price: "Presio",
    shop_sale: "Feni",
    shop_new: "Somi",
    shop_bestseller: "Likolo Mingi Oyo Ezeti",
    
    latestNews: "Salangi ya Sik'oyo",
    loading: "Ekingelaka...",
    error: "Kotisa",
    success: "Libula",
    cancel: "Bwaka",
    save: "Mela",
    
    book_zaiire_title: "Zaiire: Mwana Mokili wa Kongo",
    book_zaiire_desc: "Makambo ya kuika oyo eyamaki na mayele ya Bakongo",
    book_makanda_title: "Kutoka Liloba Kuna Papela: Karti ya Bokongeisha ba Makanda",
    book_makanda_desc: "Oyo na oyo makambo teo ya molaeka likambo la Afrika",
    book_bambula_title: "Bambula: Mulindeli",
    book_bambula_desc: "Liloba la nguya, makambo mpe koyamba moto",
    book_mokele_title: "Mokele: Nkonzi wa Mayi",
    book_mokele_desc: "Oyo na oyo liloba ya kino ya bokongeisha na Kongo",
  } as const,
} as const

export type Translations = typeof translations
