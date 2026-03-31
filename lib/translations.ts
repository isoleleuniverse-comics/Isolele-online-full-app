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
  
  book_zaiire_title: string
  book_zaiire_desc: string
  book_makanda_title: string
  book_makanda_desc: string
  book_bambula_title: string
  book_bambula_desc: string
  book_mokele_title: string
  book_mokele_desc: string
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
    universe_subtitle: "The Chosen Ones",
    universe_description: "Isolele is a visionary universe born to restore the soul of African storytelling - a mythological empire where Superheroes are chosen by destiny, kingdoms never forgotten, and ancestral power lives in every page, every prophecy, every battle.",
    universe_destiny_title: "Destiny is Not a Choice",
    universe_destiny_desc: "It is a Call. Every character is summoned by bloodlines, ancient spirits, and the unfinished stories of their ancestors.",
    universe_heritage_title: "Royal Bloodlines Carry Ancient Power",
    universe_heritage_desc: "Royal blood carries the memory and might of forgotten kingdoms, waiting to be awakened by the chosen ones.",
    universe_resurrection_title: "Ancestral Spirits Never Die",
    universe_resurrection_desc: "Africa was never powerless. The prophecy has returned, and with it, the resurrection of buried myths.",
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
    
    book_zaiire_title: "Zaiire: The Prince of Kongo",
    book_zaiire_desc: "An epic adventure grounded in Congolese heritage and mythology",
    book_makanda_title: "From Myth to Manuscript: Mapping the Makanda Empire",
    book_makanda_desc: "A cartographic journey through a forgotten African civilization",
    book_bambula_title: "Bambula: The Guardian",
    book_bambula_desc: "A tale of courage, power, and self-discovery",
    book_mokele_title: "Mokele: Prince of the Waters",
    book_mokele_desc: "A legendary quest through the kingdoms of Congo",
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
    
    book_zaiire_title: "Zaiire: Le Prince du Kongo",
    book_zaiire_desc: "Une aventure épique ancrée dans l'héritage et la mythologie congolaise",
    book_makanda_title: "Du Mythe au Manuscrit: Cartographier l'Empire Makanda",
    book_makanda_desc: "Un voyage cartographique à travers une civilisation africaine oubliée",
    book_bambula_title: "Bambula: La Gardienne",
    book_bambula_desc: "Un conte de courage, de pouvoir et de découverte de soi",
    book_mokele_title: "Mokele: Prince des Eaux",
    book_mokele_desc: "Une quête légendaire à travers les royaumes du Congo",
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
    
    book_zaiire_title: "Zaiire: O Príncipe do Congo",
    book_zaiire_desc: "Uma aventura épica enraizada na herança e mitologia congolesa",
    book_makanda_title: "De Mito a Manuscrito: Mapeando o Império Makanda",
    book_makanda_desc: "Uma jornada cartográfica através de uma civilização africana esquecida",
    book_bambula_title: "Bambula: A Guardiã",
    book_bambula_desc: "Uma história de coragem, poder e autodescoberta",
    book_mokele_title: "Mokele: Príncipe das Águas",
    book_mokele_desc: "Uma busca lendária através dos reinos do Congo",
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
} as const

export type Translations = typeof translations
