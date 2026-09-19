import type { ShopProduct, ShopPageContent } from "./shop.types";
import type { SupportedLocale } from "@/shared/i18n/locales";

const CHECKOUT_LINKS: Record<string, string> = {
  black_pantera_hat: "https://buy.stripe.com/14A5kDcBvf5i2zR6qh6Zy0a",
  prince_zaiire_crown_hat: "https://buy.stripe.com/6oU9AT9pj2iw1vNeWN6Zy07",
  white_queen_hat: "https://buy.stripe.com/9B614n5936yMa2j8yp6Zy08",
  white_isolele_hat: "https://buy.stripe.com/eVq4gzatng9m3DVdSJ6Zy09",
  zaiire_the_prince_of_kongo: "https://buy.stripe.com/6oU6oH8lfaP2fmD4i96Zy0e",
};

const enProducts: ShopProduct[] = [
  {
    id: "black-pantera-hat",
    category: "hats",
    brand: "RoiRoyal",
    name: `Black Pantera Animal King Hat`,
    subtitle: `By RoiRoyal | Worn by Legends. Crowned by Legacy.`,
    description: `Step into the roar of royalty.

The Black Pantera King Hat is not just a hat — it’s a statement. Designed for warriors, visionaries, and kings in the making, this premium black crown fuses street power with ancestral pride. Featuring the majestic RoiRoyal logo in radiant gold and a bold panther emblem, it embodies strength, elegance, and rebellion.`,
    price: 253.0,
    priceLabel: `Buy - $253`,
    rating: { value: 4.8, count: 124 },
    image: "/shop/black-pantera-hat.webp",
    checkoutLink: CHECKOUT_LINKS.black_pantera_hat,
    checkoutLabel: `Secure checkout`,
    specifications: [`Color: Deep royal black`, `Logo: Gold-stitched RoiRoyal shield`, `Emblem: Fierce Black Panther symbol of power, stealth, and protection`, `Fit: Adjustable snapback`, `Material: High-grade fabric for all-day comfort and durability`],
  },
  {
    id: "prince-zaiire-crown-hat",
    category: "hats",
    brand: "RoiRoyal",
    name: `Prince Zaiire Crown Hat`,
    subtitle: `By RoiRoyal | Crown the Heir | The Prince of Kongo.`,
    description: `Before the world knew his name, the prophecy already knew his purpose.

The Prince Zaiire Crown Hat is a bold and regal tribute to the hidden heir of Kongo Zaiire, the young prince destined to awaken the Sacred Flame and restore the legacy of African excellence.
This multi-tone crown features warm earth tones woven into a dynamic patchwork design, crowned with a powerful embroidered portrait of Prince Zaiire in his golden warrior robe,
locked in deep thought, ready to rise.

This is more than a hat — it’s the first crown of a chosen one.

“They saw a servant. The ancestors saw a king. I do not chase crowns — I rise until they fit.
The world forgot me, but the flame inside never did. Every scar on my journey is a map back to the throne.”

👑 “I was not supposed to be here. Destiny chose me.”`,
    price: 289.0,
    priceLabel: `Buy - $289`,
    rating: { value: 5.0, count: 89 },
    image: "/shop/prince-zaiire-crown-hat.webp",
    checkoutLink: CHECKOUT_LINKS.prince_zaiire_crown_hat,
    checkoutLabel: `Secure checkout`,
    specifications: [`Color Palette: Royal maroon, sunset gold, ivory white, earth brown, and obsidian black`, `Front Emblem: Embroidered portrait of Prince Zaiire the silent heir, the thinker, the future king`, `Design: Patchwork of legacy inspired by the fabrics of Kongo, Nubia, and Makanda`, `Fit: Structured, adjustable, and crafted for leaders in the making`, `Material: Premium woven fabric for long-lasting shape and story`],
    soldOut: true,
  },
  {
    id: "white-queen-hat",
    category: "hats",
    brand: "RoiRoyal",
    name: `White Queen Kimoya Kandake Amanirenas Hat`,
    subtitle: `By RoiRoyal | Crown of the Matriarch. Light of the Exiled Flame.`,
    description: `She was exiled but never erased. Her crown is memory. Her name is fire.

The White Queen Kimoya Kandake Amanirenas Hat is a royal tribute to the sacred mother of Zaiire and the warrior bloodline of Kush, Kongo, and Nubia.
Inspired by Queen Kimoya Kandake, daughter of Queen Nzinga and rightful heir to the legacy of Amanirenas — the one-eyed empress who defied Rome —
this white crown embodies ancestral strength, royal defiance, and divine inheritance.

Crafted in pure white and adorned with the golden RoiRoyal insignia, it is made for the queens who walk with memory in their bones and kingdoms in their footsteps.

“They feared her silence more than her sword. For her silence carried the roar of queens.”`,
    price: 323.0,
    priceLabel: `Buy - $323`,
    rating: { value: 5.0, count: 67 },
    image: "/shop/white-queen-hat.webp",
    checkoutLink: CHECKOUT_LINKS.white_queen_hat,
    checkoutLabel: `Secure checkout`,
    specifications: [`Color: Royal Ancestral White`, `Emblem: Gold RoiRoyal crown-shield on the right — symbol of divine lineage`, `Marking: KANDAKE — the title of ancient Nubian queens and the spirit of sovereign power`, `Fit: Regal structure with adjustable closure, tailored for strength and poise`, `Material: Premium luxury fabric, soft yet resilient — made to last generations`],
  },
  {
    id: "white-isolele-hat",
    category: "hats",
    brand: "RoiRoyal",
    name: `White Isolele Hat Crown`,
    subtitle: `By RoiRoyal | The Light of Legacy. The Flame of the Chosen.`,
    description: `Crowned by prophecy. Worn by the destined.

The White Isolele Hat Crown is a radiant symbol of divine purpose. Crafted in pure white and accented with gold, it honors the sacred path of the Isolele the Chosen One.
This is more than a crown. It’s a call to greatness, stitched with the fire of ancient kingdoms and the elegance of royal memory.

Adorned with the signature RoiRoyal golden crest and the bold Isolele name, this piece is for those who walk with legacy in their veins.

“Isolele means chosen. And the chosen do not follow — they lead.”

For those chosen by destiny, remembered by history.`,
    price: 453.0,
    priceLabel: `Buy - $453`,
    rating: { value: 5.0, count: 51 },
    image: "/shop/white-isolele-hat.webp",
    checkoutLink: CHECKOUT_LINKS.white_isolele_hat,
    checkoutLabel: `Secure checkout`,
    specifications: [`Color: Sacred white`, `Logo: Royal gold RoiRoyal emblem on the right side`, `Marking: ISOLELE — the name of the flame that cannot be extinguished`, `Fit: Precision-crafted, adjustable for all crown-bearers`, `Material: Luxury-grade fabric for comfort, endurance, and elegance`],
  },
  {
    id: "zaiire-book",
    category: "books",
    brand: "RoiRoyal",
    name: `Zaiire the Prince of Kongo`,
    subtitle: `Chapter #1 - The Necklace of Destiny`,
    description: `A fictional story about an African superhero. He's a young man from Kinshasa who discovers he's destined to be a warrior-king, protecting his land and people.
The story blends African history, mythology, and modern elements to create a universe of African superheroes.`,
    price: 60.97,
    priceLabel: `$60.97`,
    rating: { value: 4.8, count: 892 },
    image: "/shop/zaiire-book-cover.webp",
    checkoutLink: CHECKOUT_LINKS.zaiire_the_prince_of_kongo,
    checkoutLabel: `Secure checkout`,
    specifications: [`Pages: 91`, `Writer: HRM King Kafulula`, `Marking: ISOLELE — the name of the flame that cannot be extinguished`, `Format: PaperBack`],
  },
];

const frProducts: ShopProduct[] = [
  {
    id: "black-pantera-hat",
    category: "hats",
    brand: "RoiRoyal",
    name: `Chapeau Roi Black Pantera`,
    subtitle: `Par RoiRoyal | Porté par des Légendes. Couronné par l’Héritage.`,
    description: `Entrez dans le rugissement de la royauté.

Le Chapeau Roi Black Pantera n’est pas qu’un simple chapeau — c’est une déclaration.
Conçu pour les guerriers, les visionnaires et les rois en devenir,
cette couronne noire premium fusionne puissance urbaine et fierté ancestrale.
Arborant le majestueux logo RoiRoyal en or éclatant et un emblème audacieux de panthère,
il incarne force, élégance et rébellion.`,
    price: 253.0,
    priceLabel: `Acheter - 253 $`,
    rating: { value: 4.8, count: 124 },
    image: "/shop/black-pantera-hat.webp",
    checkoutLink: CHECKOUT_LINKS.black_pantera_hat,
    checkoutLabel: `Paiement sécurisé`,
    specifications: [`Couleur : Noir royal profond`, `Logo : Écusson RoiRoyal brodé en or`, `Emblème : Symbole féroce de la Panthère Noire — puissance, discrétion et protection`, `Ajustement : Snapback réglable`, `Matière : Tissu haut de gamme pour un confort et une durabilité toute la journée`],
  },
  {
    id: "prince-zaiire-crown-hat",
    category: "hats",
    brand: "RoiRoyal",
    name: `Couronne du Prince Zaiire`,
    subtitle: `Par RoiRoyal | Couronne de l’Héritier | Le Prince du Kongo.`,
    description: `Avant que le monde ne connaisse son nom, la prophétie connaissait déjà son destin.

La Couronne du Prince Zaiire est un hommage audacieux et royal à l’héritier caché du Kongo,
le jeune prince destiné à éveiller la Flamme Sacrée et à restaurer l’héritage de l’excellence africaine.
Cette couronne multicolore présente des tons chauds de terre tissés en un patchwork dynamique,
couronné par un portrait brodé puissant du Prince Zaiire dans sa robe de guerrier dorée,
plongé dans ses pensées, prêt à se lever.

Ce n’est pas juste un chapeau — c’est la première couronne d’un élu.

“Ils ont vu un serviteur. Les ancêtres ont vu un roi.
Je ne poursuis pas les couronnes — je m’élève jusqu’à ce qu’elles m’aillent.
Le monde m’a oublié, mais la flamme en moi ne s’est jamais éteinte.
Chaque cicatrice sur mon chemin est une carte vers le trône.”

🔖 “Je n’étais pas censé être ici. Le destin m’a choisi.”`,
    price: 289.0,
    priceLabel: `Acheter - 289 $`,
    rating: { value: 5.0, count: 89 },
    image: "/shop/prince-zaiire-crown-hat.webp",
    checkoutLink: CHECKOUT_LINKS.prince_zaiire_crown_hat,
    checkoutLabel: `Paiement sécurisé`,
    specifications: [`Palette de couleurs : Bordeaux royal, or couchant, blanc ivoire, brun terre, et noir obsidienne`, `Emblème avant : Portrait brodé du Prince Zaiire — l’héritier silencieux, le penseur, le futur roi`, `Design : Patchwork d’héritage inspiré des tissus du Kongo, de Nubie et de Makanda`, `Ajustement : Structuré, ajustable, conçu pour les leaders en devenir`, `Matière : Tissu tissé premium pour une forme durable et porteuse d’histoire`],
  },
  {
    id: "white-queen-hat",
    category: "hats",
    brand: "RoiRoyal",
    name: `Couronne Reine Blanche Kimoya Kandake Amanirenas`,
    subtitle: `Par RoiRoyal | Couronne de la Matriarche. Lumière de la Flamme Exilée.`,
    description: `Elle fut exilée mais jamais effacée. Sa couronne est mémoire. Son nom est feu.

La Couronne Reine Blanche Kimoya Kandake Amanirenas est un hommage royal à la mère sacrée de Zaiire
et à la lignée guerrière du Kush, du Kongo et de la Nubie.
Inspirée de la Reine Kimoya Kandake, fille de la Reine Nzinga et héritière légitime de l’héritage d’Amanirenas
— l’impératrice borgne qui défia Rome — cette couronne blanche incarne la force ancestrale,
la défiance royale et l’héritage divin.

Confectionnée en blanc pur et ornée de l’insigne doré RoiRoyal,
elle est destinée aux reines qui marchent avec la mémoire dans les os et des royaumes sous les pas.

“Ils redoutaient son silence plus que son épée.
Car son silence portait le rugissement des reines.”`,
    price: 323.0,
    priceLabel: `Acheter - 323 $`,
    rating: { value: 5.0, count: 67 },
    image: "/shop/white-queen-hat.webp",
    checkoutLink: CHECKOUT_LINKS.white_queen_hat,
    checkoutLabel: `Paiement sécurisé`,
    specifications: [`Couleur : Blanc ancestral royal`, `Emblème : Écusson-couronne RoiRoyal doré sur le côté droit — symbole de lignée divine`, `Inscription : KANDAKE — titre des anciennes reines nubiennes et esprit de pouvoir souverain`, `Ajustement : Structure royale avec fermeture ajustable, pensée pour la force et la prestance`, `Matière : Tissu de luxe premium, doux mais résistant — conçu pour traverser les générations`],
  },
  {
    id: "white-isolele-hat",
    category: "hats",
    brand: "RoiRoyal",
    name: `Couronne Blanche Isolele`,
    subtitle: `Par RoiRoyal | Lumière de l’Héritage. Flamme des Élus.`,
    description: `Couronné par la prophétie. Porté par les élus.

La Couronne Blanche Isolele est un symbole éclatant de destinée divine.
Confectionnée en blanc pur avec des accents dorés, elle honore le chemin sacré d’Isolele l’Élu.
Plus qu’une couronne. Un appel à la grandeur, brodé du feu des anciens royaumes
et de l’élégance de la mémoire royale.

Ornée de l’emblème doré RoiRoyal et du nom audacieux Isolele,
cette pièce est destinée à ceux qui portent l’héritage dans leurs veines.

“Isolele signifie élu. Et les élus ne suivent pas — ils mènent.”

Pour ceux choisis par le destin, gravés dans l’histoire.`,
    price: 453.0,
    priceLabel: `Acheter - 453 $`,
    rating: { value: 5.0, count: 51 },
    image: "/shop/white-isolele-hat.webp",
    checkoutLink: CHECKOUT_LINKS.white_isolele_hat,
    checkoutLabel: `Paiement sécurisé`,
    specifications: [`Couleur : Blanc sacré`, `Logo : Emblème doré RoiRoyal sur le côté droit`, `Inscription : ISOLELE — le nom de la flamme inextinguible`, `Ajustement : Conception de précision, ajustable pour tous les porteurs de couronnes`, `Matière : Tissu de luxe pour le confort, la résistance et l’élégance`],
  },
  {
    id: "zaiire-book",
    category: "books",
    brand: "RoiRoyal",
    name: `Zaiire the Prince of Kongo`,
    subtitle: `Chapter #1 - The Necklace of Destiny`,
    description: `A fictional story about an African superhero. He's a young man from Kinshasa who discovers he's destined to be a warrior-king, protecting his land and people.
The story blends African history, mythology, and modern elements to create a universe of African superheroes.`,
    price: 60.97,
    priceLabel: `$60.97`,
    rating: { value: 4.8, count: 892 },
    image: "/shop/zaiire-book-cover.webp",
    checkoutLink: CHECKOUT_LINKS.zaiire_the_prince_of_kongo,
    checkoutLabel: `Secure checkout`,
    specifications: [`Pages: 91`, `Writer: HRM King Kafulula`, `Marking: ISOLELE — the name of the flame that cannot be extinguished`, `Format: PaperBack`],
  },
];

const ptProducts: ShopProduct[] = [
  {
    id: "black-pantera-hat",
    category: "hats",
    brand: "RoiRoyal",
    name: `Chapéu Rei Animal Pantera Negra`,
    subtitle: `Por RoiRoyal | Usado por Lendas. Coroado por Legado.`,
    description: `Entre no rugido da realeza.

O Chapéu Rei Pantera Negra não é apenas um chapéu — é uma declaração. Concebido para guerreiros, visionários e reis em formação.`,
    price: 253.0,
    priceLabel: `Comprar - $253`,
    rating: { value: 4.8, count: 124 },
    image: "/shop/black-pantera-hat.webp",
    checkoutLink: CHECKOUT_LINKS.black_pantera_hat,
    checkoutLabel: `Checkout seguro`,
  },
  {
    id: "prince-zaiire-crown-hat",
    category: "hats",
    brand: "RoiRoyal",
    name: `Chapéu Coroa do Príncipe Zaiire`,
    subtitle: `Por RoiRoyal | Coroar o Herdeiro | O Príncipe do Congo.`,
    description: `O Chapéu Coroa do Príncipe Zaiire é uma homenagem ousada e real ao herdeiro escondido do Congo Zaiire, o jovem príncipe destinado a despertar a Chama Sagrada e restaurar o legado da excelência africana.`,
    price: 289.0,
    priceLabel: `Comprar - $289`,
    rating: { value: 5.0, count: 89 },
    image: "/shop/prince-zaiire-crown-hat.webp",
    checkoutLink: CHECKOUT_LINKS.prince_zaiire_crown_hat,
    checkoutLabel: `Checkout seguro`,
    soldOut: true,
  },
  {
    id: "white-queen-hat",
    category: "hats",
    brand: "RoiRoyal",
    name: `Chapéu Rainha Branca Kimoya Kandake Amanirenas`,
    subtitle: `Por RoiRoyal | Coroa da Matriarca. Luz da Chama Exilada.`,
    description: `Ela foi exilada mas nunca apagada. A sua coroa é memória. O seu nome é fogo.

O Chapéu Rainha Branca Kimoya Kandake Amanirenas é uma homenagem real à mãe sagrada de Zaiire e à linhagem guerreira de Kush, Congo e Núbia.`,
    price: 323.0,
    priceLabel: `Comprar - $323`,
    rating: { value: 5.0, count: 67 },
    image: "/shop/white-queen-hat.webp",
    checkoutLink: CHECKOUT_LINKS.white_queen_hat,
    checkoutLabel: `Checkout seguro`,
  },
  {
    id: "white-isolele-hat",
    category: "hats",
    brand: "RoiRoyal",
    name: `Coroa Chapéu Isolele Branco`,
    subtitle: `Por RoiRoyal | A Luz do Legado. A Chama dos Escolhidos.`,
    description: `Coroado pela profecia. Usado pelos destinados.

A Coroa Chapéu Isolele Branco é um símbolo radiante de propósito divino. Concebida em branco puro e realçada com ouro, honra o caminho sagrado dos Isolele - os Escolhidos.`,
    price: 453.0,
    priceLabel: `Comprar - $453`,
    rating: { value: 5.0, count: 51 },
    image: "/shop/white-isolele-hat.webp",
    checkoutLink: CHECKOUT_LINKS.white_isolele_hat,
    checkoutLabel: `Checkout seguro`,
  },
  {
    id: "zaiire-book",
    category: "books",
    brand: "RoiRoyal",
    name: `Zaiire o Príncipe do Congo`,
    subtitle: `Capítulo #1 - O Colar do Destino`,
    description: `Uma história fictícia sobre um super-herói africano. Ele é um jovem de Kinshasa que descobre que está destinado a ser um rei-guerreiro, protegendo a sua terra e povo.
A história mistura história africana, mitologia e elementos modernos para criar um universo de super-heróis africanos.`,
    price: 60.97,
    priceLabel: `Comprar - $60.97`,
    rating: { value: 4.8, count: 892 },
    image: "/shop/zaiire-book-cover.webp",
    checkoutLink: CHECKOUT_LINKS.zaiire_the_prince_of_kongo,
    checkoutLabel: `Disponível em brochura.`,
  },
];

const esProducts: ShopProduct[] = [
  {
    id: "black-pantera-hat",
    category: "hats",
    brand: "RoiRoyal",
    name: `Sombrero Black Pantera Animal King`,
    subtitle: `Por RoiRoyal | Usado por Leyendas. Coronado por el Legado.`,
    description: `Entra en el rugido de la realeza.

El Sombrero Rey Black Pantera no es solo un sombrero — es una declaración. Diseñado para guerreros, visionarios y reyes en formación, esta corona negra premium fusiona el poder urbano con el orgullo ancestral. Con el majestuoso logo de RoiRoyal en oro radiante y un audaz emblema de pantera, encarna fuerza, elegancia y rebelión.`,
    price: 253.0,
    priceLabel: `Comprar - $253`,
    rating: { value: 4.8, count: 124 },
    image: "/shop/black-pantera-hat.webp",
    checkoutLink: CHECKOUT_LINKS.black_pantera_hat,
    checkoutLabel: `Pago seguro`,
    specifications: [`Color: Negro real profundo`, `Logo: Escudo RoiRoyal bordado en dorado`, `Emblema: Feroz Pantera Negra — símbolo de poder, sigilo y protección`, `Ajuste: Snapback ajustable`, `Material: Tela de alta calidad para comodidad y durabilidad todo el día`],
  },
  {
    id: "prince-zaiire-crown-hat",
    category: "hats",
    brand: "RoiRoyal",
    name: `Sombrero Corona del Príncipe Zaiire`,
    subtitle: `Por RoiRoyal | Corona del Heredero | El Príncipe del Kongo.`,
    description: `Antes de que el mundo conociera su nombre, la profecía ya conocía su propósito.

El Sombrero Corona del Príncipe Zaiire es un homenaje audaz y regio al heredero oculto de Kongo Zaiire, el joven príncipe destinado a despertar la Llama Sagrada y restaurar el legado de la excelencia africana.
Esta corona multicolor presenta tonos cálidos de tierra tejidos en un dinámico diseño de patchwork, coronado con un poderoso retrato bordado del Príncipe Zaiire en su túnica dorada de guerrero,
sumido en pensamientos profundos, listo para alzarse.

Esto es más que un sombrero — es la primera corona del elegido.

“Vieron a un sirviente. Los ancestros vieron a un rey. No persigo coronas — me elevo hasta que me quedan.
El mundo me olvidó, pero la llama interior nunca lo hizo. Cada cicatriz en mi camino es un mapa de regreso al trono.”

👑 “No se suponía que estuviera aquí. El destino me eligió.”`,
    price: 289.0,
    priceLabel: `Comprar - $289`,
    rating: { value: 5.0, count: 89 },
    image: "/shop/prince-zaiire-crown-hat.webp",
    checkoutLink: CHECKOUT_LINKS.prince_zaiire_crown_hat,
    checkoutLabel: `Pago seguro`,
    specifications: [`Paleta de Colores: Granate real, dorado atardecer, blanco marfil, marrón tierra y negro obsidiana`, `Emblema Frontal: Retrato bordado del Príncipe Zaiire — el heredero silencioso, el pensador, el futuro rey`, `Diseño: Patchwork de legado inspirado en los tejidos de Kongo, Nubia y Makanda`, `Ajuste: Estructurado, ajustable y diseñado para futuros líderes`, `Material: Tela tejida premium para forma duradera y narrativa eterna`],
  },
  {
    id: "white-queen-hat",
    category: "hats",
    brand: "RoiRoyal",
    name: `Sombrero Reina Blanca Kimoya Kandake Amanirenas`,
    subtitle: `Por RoiRoyal | Corona de la Matriarca. Luz de la Llama Exiliada.`,
    description: `Fue exiliada, pero nunca borrada. Su corona es memoria. Su nombre es fuego.

El Sombrero Reina Blanca Kimoya Kandake Amanirenas es un homenaje real a la madre sagrada de Zaiire y al linaje guerrero de Kush, Kongo y Nubia.
Inspirado en la Reina Kimoya Kandake, hija de la Reina Nzinga y heredera legítima del legado de Amanirenas — la emperatriz tuerta que desafió a Roma —
esta corona blanca encarna fuerza ancestral, desafío real y herencia divina.

Confeccionado en blanco puro y adornado con el emblema dorado de RoiRoyal, está hecho para las reinas que caminan con memoria en los huesos y reinos en sus pasos.

“Temían más su silencio que su espada. Porque su silencio llevaba el rugido de las reinas.”`,
    price: 323.0,
    priceLabel: `Comprar - $323`,
    rating: { value: 5.0, count: 67 },
    image: "/shop/white-queen-hat.webp",
    checkoutLink: CHECKOUT_LINKS.white_queen_hat,
    checkoutLabel: `Pago seguro`,
    specifications: [`Color: Blanco Ancestral Real`, `Emblema: Escudo-corona dorado RoiRoyal en el lado derecho — símbolo de linaje divino`, `Inscripción: KANDAKE — el título de las antiguas reinas nubias y el espíritu del poder soberano`, `Ajuste: Estructura regia con cierre ajustable, diseñada para fuerza y elegancia`, `Material: Tela de lujo premium, suave pero resistente — hecha para durar generaciones`],
  },
  {
    id: "white-isolele-hat",
    category: "hats",
    brand: "RoiRoyal",
    name: `Sombrero Corona Blanca Isolele`,
    subtitle: `Por RoiRoyal | La Luz del Legado. La Llama del Elegido.`,
    description: `Coronado por la profecía. Usado por los destinados.

El Sombrero Corona Blanca Isolele es un símbolo radiante de propósito divino. Confeccionado en blanco puro y acentuado con dorado, honra el camino sagrado de Isolele, el Elegido.
Esto es más que una corona. Es un llamado a la grandeza, bordado con el fuego de antiguos reinos y la elegancia de la memoria real.

Adornado con el escudo dorado característico de RoiRoyal y el nombre audaz de Isolele, esta pieza es para quienes caminan con el legado en sus venas.

“Isolele significa elegido. Y los elegidos no siguen — lideran.”

Para aquellos elegidos por el destino, recordados por la historia.`,
    price: 453.0,
    priceLabel: `Comprar - $453`,
    rating: { value: 5.0, count: 51 },
    image: "/shop/white-isolele-hat.webp",
    checkoutLink: CHECKOUT_LINKS.white_isolele_hat,
    checkoutLabel: `Pago seguro`,
    specifications: [`Color: Blanco sagrado`, `Logo: Emblema dorado real de RoiRoyal en el lado derecho`, `Inscripción: ISOLELE — el nombre de la llama que no puede extinguirse`, `Ajuste: Confección precisa, ajustable para todos los portadores de coronas`, `Material: Tela de lujo para comodidad, resistencia y elegancia`],
  },
  {
    id: "zaiire-book",
    category: "books",
    brand: "RoiRoyal",
    name: `Zaiire the Prince of Kongo`,
    subtitle: `Chapter #1 - The Necklace of Destiny`,
    description: `A fictional story about an African superhero. He's a young man from Kinshasa who discovers he's destined to be a warrior-king, protecting his land and people.
The story blends African history, mythology, and modern elements to create a universe of African superheroes.`,
    price: 60.97,
    priceLabel: `$60.97`,
    rating: { value: 4.8, count: 892 },
    image: "/shop/zaiire-book-cover.webp",
    checkoutLink: CHECKOUT_LINKS.zaiire_the_prince_of_kongo,
    checkoutLabel: `Secure checkout`,
    specifications: [`Pages: 91`, `Writer: HRM King Kafulula`, `Marking: ISOLELE — the name of the flame that cannot be extinguished`, `Format: PaperBack`],
  },
];

const swProducts: ShopProduct[] = [
  {
    id: "black-pantera-hat",
    category: "hats",
    brand: "RoiRoyal",
    name: `Kofia ya Mfalme Black Pantera`,
    subtitle: `Na RoiRoyal | Imevaliwa na Hadithi za Mashujaa. Imetawazwa na Urithi.`,
    description: `Ingia katika mngurumo wa kifalme.

Kofia ya Mfalme Black Pantera siyo tu kofia rahisi — ni tamko. Imetengenezwa kwa mashujaa, waonoji na wafalme watarajiwa, taji hii nyeusi ya hali ya juu inaunganisha nguvu za mijini na fahari ya mababu.

Ikiwa na nembo ya kifalme ya RoiRoyal ya dhahabu na ishara jasiri ya pantera, inaashiria nguvu, uzuri na mapambano.`,
    price: 253.0,
    priceLabel: `Nunua - $253`,
    rating: { value: 4.8, count: 124 },
    image: "/shop/black-pantera-hat.webp",
    checkoutLink: CHECKOUT_LINKS.black_pantera_hat,
    checkoutLabel: `Malipo Salama`,
    specifications: [`Rangi : Nyeusi ya kifalme yenye nguvu`, `Nembo : Nembo ya RoiRoyal iliyoshonwa kwa dhahabu`, `Ishara : Alama ya pantera mweusi — nguvu, uvumilivu na ulinzi`, `Mrekebisho : Snapback inayoweza kubadilishwa`, `Nyenzo : Kitambaa cha hali ya juu kwa starehe na uimara wa siku nzima`],
  },
  {
    id: "prince-zaiire-crown-hat",
    category: "hats",
    brand: "RoiRoyal",
    name: `Taji ya Mwana wa Kifalme Zaiire`,
    subtitle: `Na RoiRoyal | Taji la Mrithi | Mwana wa Kifalme wa Kongo.`,
    description: `Kabla dunia hajajua jina lake, unabii ulikuwa umeshajua hatima yake.

Taji ya Mwana wa Kifalme Zaiire ni heshima ya kifalme na jasiri kwa mrithi aliyefichwa wa Kongo, kijana mfalme aliyepewa jukumu la kuamsha Moto Mtakatifu na kurejesha urithi wa ubora wa Afrika.

Taji hii yenye rangi nyingi ina mchanganyiko wa rangi za ardhi zilizoshonwa kwa ustadi, juu yake kuna picha iliyoshonwa ya Mwana wa Kifalme Zaiire akiwa amevaa gauni la kivita la dhahabu, akitafakari, tayari kusimama.

Hii siyo tu kofia — ni taji la kwanza la mteule.

"Waliiona kama mtumishi. Mababu waliiona kama mfalme. Sifuatilii mataji — ninainuka hadi yatanipendele."
Dunia ilinisahau, lakini moto ndani yangu haukujizima kamwe. Kila alama njiani ni ramani ya kuelekea kiti cha enzi."

👑 "Sikutakiwa kuwa hapa. Hatima ilinichagua."`,
    price: 289.0,
    priceLabel: `Nunua - $289`,
    rating: { value: 5.0, count: 89 },
    image: "/shop/prince-zaiire-crown-hat.webp",
    checkoutLink: CHECKOUT_LINKS.prince_zaiire_crown_hat,
    checkoutLabel: `Malipo Salama`,
    specifications: [`Rangi : Zambarau za kifalme, dhahabu ya machweo, nyeupe ya kifahari, kahawia ya ardhi, na nyeusi ya obsidian`, `Ishara Mbele : Picha iliyoshonwa ya Mwana wa Kifalme Zaiire — mrithi kimya, mtafakari, mfalme wa baadaye`, `Muundo : Mchanganyiko wa urithi wa vitambaa vya Kongo, Nubia na Makanda`, `Mrekebisho : Iliyopangwa, inayoweza kubadilishwa, iliyoundwa kwa viongozi wa baadaye`, `Nyenzo : Kitambaa cha hali ya juu chenye uimara na hadithi`],
  },
  {
    id: "white-queen-hat",
    category: "hats",
    brand: "RoiRoyal",
    name: `Taji la Malkia Mweupe Kimoya Kandake Amanirenas`,
    subtitle: `Na RoiRoyal | Taji la Mama Mkuu. Mwanga wa Moto wa Uhamisho.`,
    description: `Alifukuzwa lakini hakuwahi kufutwa. Taji lake ni kumbukumbu. Jina lake ni moto.

Taji la Malkia Mweupe Kimoya Kandake Amanirenas ni heshima ya kifalme kwa mama mtakatifu wa Zaiire na ukoo wa kivita wa Kush, Kongo na Nubia.

Imetokana na Malkia Kimoya Kandake, binti wa Malkia Nzinga na mrithi halali wa urithi wa Amanirenas — malkia wa macho moja aliyekabiliana na Roma —

taji hii nyeupe inaashiria nguvu za mababu, upinzani wa kifalme na urithi wa kiungu.

Imetengenezwa kwa nyeupe safi na nembo ya dhahabu ya RoiRoyal, inatolewa kwa malkia wanaotembea wakiwa na kumbukumbu mioyoni na falme chini ya miguu yao.

"Walihofu ukimya wake zaidi kuliko upanga wake. Kwa maana ukimya wake ulikuwa mngurumo wa malkia."`,
    price: 323.0,
    priceLabel: `Nunua - $323`,
    rating: { value: 5.0, count: 67 },
    image: "/shop/white-queen-hat.webp",
    checkoutLink: CHECKOUT_LINKS.white_queen_hat,
    checkoutLabel: `Malipo Salama`,
    specifications: [`Rangi : Nyeupe ya kifalme ya mababu`, `Ishara : Nembo-taji ya RoiRoyal ya dhahabu upande wa kulia — ishara ya ukoo wa kiungu`, `Mwandishi : KANDAKE — cheo cha malkia wa zamani wa Nubia na roho ya mamlaka`, `Mrekebisho : Muundo wa kifalme wenye kufungwa inayoweza kubadilishwa, kwa ajili ya nguvu na heshima`, `Nyenzo : Kitambaa cha kifahari, laini lakini imara — kwa ajili ya vizazi vingi`],
  },
  {
    id: "white-isolele-hat",
    category: "hats",
    brand: "RoiRoyal",
    name: `Taji Nyeupe la Isolele`,
    subtitle: `Na RoiRoyal | Mwanga wa Urithi. Moto wa Wateule.`,
    description: `Imetawazwa kwa unabii. Imevaliwa na wateule.

Taji Nyeupe la Isolele ni ishara angavu ya hatima ya kiungu. Imetengenezwa kwa nyeupe safi na mapambo ya dhahabu, inaheshimu njia takatifu ya Isolele Mteule.

Zaidi ya taji. Mwito wa ukuu, ukiwa umetungwa na moto wa falme za zamani na uzuri wa kumbukumbu ya kifalme.

Ikiwa na nembo ya dhahabu ya RoiRoyal na jina jasiri la Isolele, kipande hiki kimeundwa kwa wale wanaobeba urithi ndani ya mishipa yao.

"Isolele maana yake ni mteule. Na wateule hawaifuati — wao hufuata."

Kwa wale walioteuliwa na hatima, waliyoandikwa katika historia.`,
    price: 453.0,
    priceLabel: `Nunua - $453`,
    rating: { value: 5.0, count: 51 },
    image: "/shop/white-isolele-hat.webp",
    checkoutLink: CHECKOUT_LINKS.white_isolele_hat,
    checkoutLabel: `Malipo Salama`,
    specifications: [`Rangi : Nyeupe mtakatifu`, `Nembo : Ishara ya dhahabu ya RoiRoyal upande wa kulia`, `Maandishi : ISOLELE — jina la moto usiozimika`, `Mrekebisho : Muundo wa usahihi, unaoweza kubadilishwa kwa wavaa mataji wote`, `Nyenzo : Kitambaa cha kifahari kwa starehe, uimara na uzuri`],
  },
  {
    id: "zaiire-book",
    category: "books",
    brand: "RoiRoyal",
    name: `Zaiire the Prince of Kongo`,
    subtitle: `Chapter #1 - The Necklace of Destiny`,
    description: `A fictional story about an African superhero. He's a young man from Kinshasa who discovers he's destined to be a warrior-king, protecting his land and people.
The story blends African history, mythology, and modern elements to create a universe of African superheroes.`,
    price: 60.97,
    priceLabel: `$60.97`,
    rating: { value: 4.8, count: 892 },
    image: "/shop/zaiire-book-cover.webp",
    checkoutLink: CHECKOUT_LINKS.zaiire_the_prince_of_kongo,
    checkoutLabel: `Secure checkout`,
    specifications: [`Pages: 91`, `Writer: HRM King Kafulula`, `Marking: ISOLELE — the name of the flame that cannot be extinguished`, `Format: PaperBack`],
  },
];

const xhProducts: ShopProduct[] = [
  {
    id: "black-pantera-hat",
    category: "hats",
    brand: "RoiRoyal",
    name: `Isonka leNkosi uBlack Pantera`,
    subtitle: `NguRoiRoyal | Linxitywa ziLegend. Ligqunywe liLifa.`,
    description: `Ngena kwengxolo yobukhosi.

Isonka leNkosi uBlack Pantera asililo nje isonka — sisimemezelo. Yenzelwe amaqhawe, ababonayo ikamva, kunye neenkosi ezizayo, le ngqayi emnyama yeprimiyamu idibanisa amandla esixeko kunye nentlonipho yemveli. Iphethe i-logo yeRoiRoyal yegolide eqaqambileyo kunye nemfuziselo enamandla yePanther, emela amandla, ubuhle, kunye nokumelana.`,
    price: 253.0,
    priceLabel: `Thenga - $253`,
    rating: { value: 4.8, count: 124 },
    image: "/shop/black-pantera-hat.webp",
    checkoutLink: CHECKOUT_LINKS.black_pantera_hat,
    checkoutLabel: `Intlawulo ekhuselekileyo`,
    specifications: [`Umbala: Mnyama wobukhosi obunzulu`, `iLogo: Ipatch yeRoiRoyal elukiweyo ngegolide`, `Iphawu: Uphawu oluqatha lwePanther Emnyama — amandla, ubuqili, nokhuselo`, `Ulinganiso: Snapback elungelelaniswayo`, `Izinto: Ilaphu leprimiyamu ukuze kube nentuthuzelo kunye nokuqina usuku lonke`],
  },
  {
    id: "prince-zaiire-crown-hat",
    category: "hats",
    brand: "RoiRoyal",
    name: `Isithsaba soMntwana uZaiire`,
    subtitle: `NguRoiRoyal | Isithsaba Selifa | UMntwana weKongo.`,
    description: `Ngaphambi kokuba ihlabathi limazi, isiprofetho sasesesazi igama lakhe.

Isithsaba soMntwana uZaiire sisihlonipho esikhulu nesibukhali kwilifa eliyimfihlo leKongo — umntwana oza kuvusa iFlame Engcwele kwaye abuyisele ilifa lobukhosi baseAfrika.
Le ngqayi enemibala idibanisa imithunzi eshushu yomhlaba kwipatshiwakhi ephilayo, igqunywe ngumfanekiso olukiweyo kaZaiire enxibe isinxibo sobuqhawe segolide,
ezolile, elungiselela ukunyuka.

Asiyosonka nje — sisithsaba sokuqala solukhethiweyo.

“Babone isicaka. OoKhokho babone inkosi. Andiphisani nezithsaba — ndiyenyuka zize zifanele mna.
Ihlabathi lindilibele, kodwa ilangatye ngaphakathi kum alikaze liphele. Unoboya endaweni yokwaphuka, ndithe nca kwitrone.”

👑 “Andizange ndicingelwe ukuba ndibe lapha. Isiphelo sandikhethe.”`,
    price: 289.0,
    priceLabel: `Thenga - $289`,
    rating: { value: 5.0, count: 89 },
    image: "/shop/prince-zaiire-crown-hat.webp",
    checkoutLink: CHECKOUT_LINKS.prince_zaiire_crown_hat,
    checkoutLabel: `Intlawulo ekhuselekileyo`,
    specifications: [`Ipalette yoMbala: I-Burgundy yobukhosi, igolide eliphuma ilanga, mhlophe yebhastile, mdaka womhlaba, nomnyama we-obsidian`, `Iphawu langaphambili: Umfanekiso olukiweyo woMntwana uZaiire — ilifa elithe cwaka, umcinga, inkosi ezayo`, `Uyilo: Ipatchwork yelifa enomoya weengubo zaseKongo, Nubia neMakanda`, `Ulinganiso: Isakhiwo, silungiseka, siyilwe ngenkokeli ezayo`, `Izinto: Ilaphu elitshisayo eliphambili — ukuze libe nembonakalo ehlala ixesha elide nelinembali`],
  },
  {
    id: "white-queen-hat",
    category: "hats",
    brand: "RoiRoyal",
    name: `Isithsaba SikaKumkanikazi uKimoya Kandake Amanirenas`,
    subtitle: `NguRoiRoyal | Isithsaba soMama. Ukukhanya kweFlame eExile.`,
    description: `Wagxothwa, kodwa akazange alityalwe. Isithsaba sakhe yinkumbulo. Igama lakhe lityuwa.

Isithsaba sikaKumkanikazi uKimoya Kandake Amanirenas sisihlonipho esikhulu kumama kaZaiire kunye noluhlu lobukhosi baseKush, Kongo neNubia.
Siphefumlelwe nguKimoya Kandake — intombi kaKumkanikazi Nzinga kunye nelifa le-Amanirenas — iKumkanikazi eyayinamandla amakhulu eyayijamelene neRoma.
Eli sithsaba simhlophe simele amandla ooKhokho, ukungathobeki kobukhosi, kunye nelifa elingcwele.

Silukwe ngemhlophe emsulwa kwaye sihlotshiswe nophawu lweRoiRoyal legolide — siyilwe kwiinkosikazi ezithwala iinkumbulo emathanjeni kunye nobukhosi ezinyaweni.

“Bayesaba ukuthula kwakhe ngaphezu kwekrele lakhe. Kuba ukuthula kwakhe kwakuphethe ukugquma kweenkosikazi.”`,
    price: 323.0,
    priceLabel: `Thenga - $323`,
    rating: { value: 5.0, count: 67 },
    image: "/shop/white-queen-hat.webp",
    checkoutLink: CHECKOUT_LINKS.white_queen_hat,
    checkoutLabel: `Intlawulo ekhuselekileyo`,
    specifications: [`Umbala: Mhlophe wobukhosi bamaXesha`, `Iphawu: Uphawu lweRoiRoyal legolide elicaleni — luphawu loluhlu olungcwele`, `Isiqu: KANDAKE — isihloko seenkosikazi zakudala zaseNubia kunye nomoya wamandla obukhosi`, `Ulinganiso: Isakhiwo sobukhosi kunye nokuvala okuhlengahlengiswayo — siyilwe ngamandla nokubukhali`, `Izinto: Ilaphu lobunewunewu — lithambile kodwa liyomelela — liyilwe ukuze lidlule kwizizukulwana`],
  },
  {
    id: "white-isolele-hat",
    category: "hats",
    brand: "RoiRoyal",
    name: `Isithsaba esimhlophe sikaIsolele`,
    subtitle: `NguRoiRoyal | Ukukhanya kweLifa. IFlame yabaKhethiweyo.`,
    description: `Ugqunywe sisiprofetho. Linxitywe ngabaKhethiweyo.

Isithsaba esimhlophe sikaIsolele luphawu olukhazimlayo lwesiphelo esingcwele. Yilukwe ngemhlophe ecocekileyo eneempawu zegolide, ihlonipha indlela engcwele kaIsolele oKhethiweyo.
Ngaphezu kwesithsaba. Yimbeko enkulu, elukiweyo ngomlilo woobukhosi bamandulo kunye nobuhle bembeko yobukhosi.

Inophawu lweRoiRoyal legolide kunye negama elibhalwe ngokucacileyo elithi Isolele — yenzelwe abo bathwala ilifa egazini labo.

“Isolele lithetha okhethiweyo. Kwaye okhethiweyo abalandeli — baphambili.”

Kwabo bakhethwe sisiphelo, babhalwe kwimbali.`,
    price: 453.0,
    priceLabel: `Thenga - $453`,
    rating: { value: 5.0, count: 51 },
    image: "/shop/white-isolele-hat.webp",
    checkoutLink: CHECKOUT_LINKS.white_isolele_hat,
    checkoutLabel: `Intlawulo ekhuselekileyo`,
    specifications: [`Umbala: Mhlophe ongcwele`, `iLogo: Uphawu lweRoiRoyal legolide kwicala lasekunene`, `Isiqu: ISOLELE — igama lomlilo ongacimiyo`, `Ulinganiso: Uyilo olunembayo, olulungelelaniswayo kuwo wonke umntu ofaka isithsaba`, `Izinto: Ilaphu lobunewunewu — intuthuzelo, ukuqina, nobuhle`],
  },
  {
    id: "zaiire-book",
    category: "books",
    brand: "RoiRoyal",
    name: `Zaiire the Prince of Kongo`,
    subtitle: `Chapter #1 - The Necklace of Destiny`,
    description: `A fictional story about an African superhero. He's a young man from Kinshasa who discovers he's destined to be a warrior-king, protecting his land and people.
The story blends African history, mythology, and modern elements to create a universe of African superheroes.`,
    price: 60.97,
    priceLabel: `$60.97`,
    rating: { value: 4.8, count: 892 },
    image: "/shop/zaiire-book-cover.webp",
    checkoutLink: CHECKOUT_LINKS.zaiire_the_prince_of_kongo,
    checkoutLabel: `Secure checkout`,
    specifications: [`Pages: 91`, `Writer: HRM King Kafulula`, `Marking: ISOLELE — the name of the flame that cannot be extinguished`, `Format: PaperBack`],
  },
];

const zuProducts: ShopProduct[] = [
  {
    id: "black-pantera-hat",
    category: "hats",
    brand: "RoiRoyal",
    name: `Isigqoko seNkosi Black Pantera`,
    subtitle: `Ngu-RoiRoyal | Sigqokwa izinganekwane. Kugcotshwe ilifa.`,
    description: `Ngena ekubhobosheni kobukhosi.

Isigqoko seNkosi Black Pantera asiyona into nje — siyisitatimende. Sakhelwe amaqhawe, ababonayo ikusasa, nezinkosi ezizayo, lesi sigqoko esimnyama esisezingeni eliphezulu sihlanganisa amandla edolobha nobuqotho bobudabu. Sifakwe uphawu lweRoiRoyal wegolide nomfanekiso onamandla we-panther, simela amandla, ubuhle, nokuphikisa.`,
    price: 253.0,
    priceLabel: `Thenga - 253 $`,
    rating: { value: 4.8, count: 124 },
    image: "/shop/black-pantera-hat.webp",
    checkoutLink: CHECKOUT_LINKS.black_pantera_hat,
    checkoutLabel: `Inkokhelo evikelekile`,
    specifications: [`Umbala: Omnyama wobukhosi`, `Uphawu: Ipatchi leRoiRoyal eligolide`, `Isifanekiso: Uhlanga lwePanther — amandla, ukuthula nokuvikela`, `Ukuhlelwa: I-snapback eguqukayo`, `Indwangu: Intambo esezingeni eliphezulu yokunethezeka nobude besikhathi`],
  },
  {
    id: "prince-zaiire-crown-hat",
    category: "hats",
    brand: "RoiRoyal",
    name: `Umqhele weNkosana uZaiire`,
    subtitle: `Ngu-RoiRoyal | Umqhele weNdlalifa | Inkosana yaseKongo.`,
    description: `Ngaphambi kokuba umhlaba umazi, isiprofetho sase simqambile.

Umqhele weNkosana uZaiire ungenye indlela yokuhlonipha inkosana efihliwe yaseKongo, ohloselwe ukuvusa uMlilo oNgcwele abuyisele udumo lobuhle base-Afrika.
Lo mqhele onemibala ehlukahlukene unezithunzi ezifudumele zomhlaba, ohlanganiswe ngendlela eyingqayizivele, uhlanganisa nomfanekiso oboshwe weNkosana uZaiire ogqoke ijezi legolide,
ecabangisisa, ezilungiselela ukuphakama.

Akusiso nje isigqoko — ngumqhele wokuqala womKhethiwe.

“Babona inceku. Izihlobo zabona inkosi. Angilandeli imiqhele — ngiphakama kuze kufike kimi.
Umhlaba ungakhohlwa, kodwa umlilo kimi awukaze ucime. Zonke izibazi zindlela ziya esihlalweni sobukhosi.”

👑 “Angizange ngihlelwe ukuba ngibe lapha. Kwakuyisiphetho.”`,
    price: 289.0,
    priceLabel: `Thenga - 289 $`,
    rating: { value: 5.0, count: 89 },
    image: "/shop/prince-zaiire-crown-hat.webp",
    checkoutLink: CHECKOUT_LINKS.prince_zaiire_crown_hat,
    checkoutLabel: `Inkokhelo evikelekile`,
    specifications: [`Imibala: Ibomvu yobukhosi, igolide elishonayo, mhlophe njengendlovu, ensundu yomhlabathi, nomnyama we-obsidian`, `Uphawu oluphambili: Umdwebo weNkosana uZaiire — othule, ocabangayo, inkosi yesikhathi esizayo`, `Ukwakhiwa: Indwangu ye-heritage evela kwaKongo, eNubia naseMakanda`, `Ukuhlelwa: Kuqondiswe kahle, kuhlelwe eziholayo`, `Indwangu: Intambo ehlanganiswe kahle, egcina umlando`],
  },
  {
    id: "white-queen-hat",
    category: "hats",
    brand: "RoiRoyal",
    name: `Umqhele weNdlovukazi uKimoya Kandake Amanirenas`,
    subtitle: `Ngu-RoiRoyal | Umqhele weMatriarch. Ukukhanya koMlilo Wasekudingisweni.`,
    description: `Waxoshwa kodwa akazange acinywe. Umqhele wakhe uyinkumbulo. Igama lakhe lingumlilo.

Lo mqhele uhlonipha uKimoya Kandake, indodakazi yeNdlovukazi uNzinga, nomlandeli ka-Amanirenas — iNdlovukazi eyodwa eyamelana neRoma —
futhi ufanekisela amandla asendulo, isibindi sobukhosi, nelifa elingcwele.

Ukwakhiwe ngomhlophe ohlanzekile, kufakwe uphawu lweRoiRoyal wegolide — unikezelwe kuzo zonke izindlovukazi ezigqoke izinkumbulo ezinzima nezigqoka ubukhosi ngezinyawo.

“Besaba ukuthula kwakhe kunezinkemba zakhe. Ngoba ukuthula kwakhe kwakuthwala izinkalane zezindlovukazi.”`,
    price: 323.0,
    priceLabel: `Thenga - 323 $`,
    rating: { value: 5.0, count: 67 },
    image: "/shop/white-queen-hat.webp",
    checkoutLink: CHECKOUT_LINKS.white_queen_hat,
    checkoutLabel: `Inkokhelo evikelekile`,
    specifications: [`Umbala: Mhlophe wobukhosi`, `Uphawu: Ipatchi yeRoiRoyal egolide — uphawu lobukhosi`, `Umbhalo: KANDAKE — isihloko sezindlovukazi zaseNubia`, `Ukuhlelwa: Uhlelo olubushelelezi noluguqukayo`, `Indwangu: Intambo ye-premium, ethambile futhi eqinile`],
  },
  {
    id: "white-isolele-hat",
    category: "hats",
    brand: "RoiRoyal",
    name: `Umqhele Omhlophe Isolele`,
    subtitle: `Ngu-RoiRoyal | Ukukhanya Kwendlalifa. Umlilo Wabakhethiweyo.`,
    description: `Uqokwe yisiprofetho. Ugqokwa abakhethiweyo.

Lo mqhele Omhlophe Isolele uyisibonakaliso esikhulu sesiphetho esingcwele. Ukwakhiwe ngomhlophe ohlanzekile onezigcawu zegolide,
uhlonipha indlela engcwele ka-Isolele. Akusiyo nje ingubo — ngumemezelo lobukhulu obungcwele.

Ufakwe uphawu lweRoiRoyal nomhlobiso wegama elithi Isolele — onikezelwe kulabo abagqoke ilifa egazini labo.

“Isolele kusho okhethiwe. Abakhethiweyo abalandeli — bahola.”

Kulabo abakhethwe umlando. Ababhalwe etsheni.`,
    price: 453.0,
    priceLabel: `Thenga - 453 $`,
    rating: { value: 5.0, count: 51 },
    image: "/shop/white-isolele-hat.webp",
    checkoutLink: CHECKOUT_LINKS.white_isolele_hat,
    checkoutLabel: `Inkokhelo evikelekile`,
    specifications: [`Umbala: Mhlophe ongcwele`, `Uphawu: Ipatchi yeRoiRoyal egolide`, `Umbhalo: ISOLELE — igama lomlilo ongacimiyo`, `Ukuhlelwa: Iqondiswe kahle, ifanele bonke abathwele imiqhele`, `Indwangu: Intambo esezingeni eliphezulu yokunethezeka nobuhle`],
  },
  {
    id: "zaiire-book",
    category: "books",
    brand: "RoiRoyal",
    name: `Zaiire the Prince of Kongo`,
    subtitle: `Chapter #1 - The Necklace of Destiny`,
    description: `A fictional story about an African superhero. He's a young man from Kinshasa who discovers he's destined to be a warrior-king, protecting his land and people.
The story blends African history, mythology, and modern elements to create a universe of African superheroes.`,
    price: 60.97,
    priceLabel: `$60.97`,
    rating: { value: 4.8, count: 892 },
    image: "/shop/zaiire-book-cover.webp",
    checkoutLink: CHECKOUT_LINKS.zaiire_the_prince_of_kongo,
    checkoutLabel: `Secure checkout`,
    specifications: [`Pages: 91`, `Writer: HRM King Kafulula`, `Marking: ISOLELE — the name of the flame that cannot be extinguished`, `Format: PaperBack`],
  },
];

const lnProducts: ShopProduct[] = [
  {
    id: "black-pantera-hat",
    category: "hats",
    brand: "RoiRoyal",
    name: `Chapeau Roi Animal Black Pantera`,
    subtitle: `Par RoiRoyal | Porté par des Légendes. Couronné par l’Héritage.`,
    description: `Entrez dans le rugissement de la royauté.

Le chapeau Roi Black Pantera n’est pas qu’un simple chapeau — c’est une déclaration. Conçu pour les guerriers, les visionnaires et les rois en devenir, cette couronne noire premium fusionne la puissance urbaine avec la fierté ancestrale. Arborant le majestueux logo RoiRoyal en or éclatant et un emblème de panthère audacieux, il incarne force, élégance et rébellion.`,
    price: 253.0,
    priceLabel: `Acheter - 253 $`,
    rating: { value: 4.8, count: 124 },
    image: "/shop/black-pantera-hat.webp",
    checkoutLink: CHECKOUT_LINKS.black_pantera_hat,
    checkoutLabel: `Paiement sécurisé`,
    specifications: [`Couleur : Noir royal profond`, `Logo : Bouclier RoiRoyal brodé en or`, `Emblème : Panthère noire féroce, symbole de puissance, discrétion et protection`, `Coupe : Snapback ajustable`, `Matériau : Tissu de haute qualité pour un confort et une durabilité toute la journée`],
  },
  {
    id: "prince-zaiire-crown-hat",
    category: "hats",
    brand: "RoiRoyal",
    name: `Chapeau Couronne du Prince Zaiire`,
    subtitle: `Par RoiRoyal | Couronne l’Héritier | Le Prince du Kongo.`,
    description: `Avant que le monde ne connaisse son nom, la prophétie connaissait déjà sa destinée.

Le chapeau couronne du Prince Zaiire est un hommage audacieux et royal à l’héritier caché du Kongo Zaiire, le jeune prince destiné à éveiller la Flamme Sacrée et restaurer l’héritage de l’excellence africaine.
Cette couronne multicolore présente des tons chauds de la terre tissés dans un patchwork dynamique, couronnée par un portrait brodé puissant du Prince Zaiire dans sa robe guerrière dorée,
plongé dans une profonde réflexion, prêt à s’élever.

Ce n’est pas qu’un chapeau — c’est la première couronne d’un élu.

“Ils ont vu un serviteur. Les ancêtres ont vu un roi. Je ne poursuis pas les couronnes — je m’élève jusqu’à ce qu’elles me conviennent.
Le monde m’a oublié, mais la flamme en moi ne l’a jamais fait. Chaque cicatrice sur mon chemin est une carte vers le trône.”

👑 “Je n’étais pas censé être ici. Le destin m’a choisi.”`,
    price: 289.0,
    priceLabel: `Acheter - 289 $`,
    rating: { value: 5.0, count: 89 },
    image: "/shop/prince-zaiire-crown-hat.webp",
    checkoutLink: CHECKOUT_LINKS.prince_zaiire_crown_hat,
    checkoutLabel: `Paiement sécurisé`,
    specifications: [`Palette de couleurs : Bordeaux royal, or coucher de soleil, blanc ivoire, brun terre, et noir obsidienne`, `Emblème avant : Portrait brodé du Prince Zaiire, l’héritier silencieux, le penseur, le futur roi`, `Design : Patchwork d’héritage inspiré des tissus du Kongo, Nubie, et Makanda`, `Coupe : Structurée, ajustable, conçue pour les leaders en devenir`, `Matériau : Tissu tissé premium pour une forme et une histoire durables`],
  },
  {
    id: "white-queen-hat",
    category: "hats",
    brand: "RoiRoyal",
    name: `Chapeau Reine Blanche Kimoya Kandake Amanirenas`,
    subtitle: `Par RoiRoyal | Couronne de la Matriarche. Lumière de la Flamme Exilée.`,
    description: `Elle fut exilée mais jamais effacée. Sa couronne est mémoire. Son nom est feu.

Le chapeau de la Reine Blanche Kimoya Kandake Amanirenas est un hommage royal à la mère sacrée de Zaiire et à la lignée guerrière de Kush, Kongo, et Nubie.
Inspiré par la reine Kimoya Kandake, fille de la reine Nzinga et héritière légitime de l’héritage d’Amanirenas — l’impératrice borgne qui défia Rome —
cette couronne blanche incarne la force ancestrale, la défiance royale et l’héritage divin.

Façonné en blanc pur et orné de l’insigne dorée RoiRoyal, il est fait pour les reines qui marchent avec la mémoire dans leurs os et des royaumes à leurs pieds.

“Ils craignaient son silence plus que son épée. Car son silence portait le rugissement des reines.”`,
    price: 323.0,
    priceLabel: `Acheter - 323 $`,
    rating: { value: 5.0, count: 67 },
    image: "/shop/white-queen-hat.webp",
    checkoutLink: CHECKOUT_LINKS.white_queen_hat,
    checkoutLabel: `Paiement sécurisé`,
    specifications: [`Couleur : Blanc ancestral royal`, `Emblème : Couronne-bouclier RoiRoyal dorée à droite — symbole de la lignée divine`, `Marquage : KANDAKE — titre des anciennes reines nubiennes et esprit du pouvoir souverain`, `Coupe : Structure royale avec fermeture ajustable, taillée pour la force et l’élégance`, `Matériau : Tissu de luxe premium, doux mais résistant — fait pour durer des générations`],
  },
  {
    id: "white-isolele-hat",
    category: "hats",
    brand: "RoiRoyal",
    name: `Chapeau Couronne Blanc Isolele`,
    subtitle: `Par RoiRoyal | La Lumière de l’Héritage. La Flamme de l’Élu.`,
    description: `Couronné par la prophétie. Porté par les élus.

Le chapeau couronne Blanc Isolele est un symbole radieux de la destinée divine. Façonné en blanc pur et accentué d’or, il honore le chemin sacré de l’Isolele l’Élu.
Ce n’est pas qu’une couronne. C’est un appel à la grandeur, cousu avec le feu des anciens royaumes et l’élégance de la mémoire royale.

Orné du blason doré signature RoiRoyal et du nom audacieux Isolele, ce modèle est destiné à ceux qui marchent avec l’héritage dans les veines.

“Isolele signifie élu. Et les élus ne suivent pas — ils mènent.”

Pour ceux choisis par le destin, rappelés par l’histoire.`,
    price: 453.0,
    priceLabel: `Acheter - 453 $`,
    rating: { value: 5.0, count: 51 },
    image: "/shop/white-isolele-hat.webp",
    checkoutLink: CHECKOUT_LINKS.white_isolele_hat,
    checkoutLabel: `Paiement sécurisé`,
    specifications: [`Couleur : Blanc sacré`, `Logo : Emblème RoiRoyal en or royal sur le côté droit`, `Marquage : ISOLELE — le nom de la flamme qui ne peut être éteinte`, `Coupe : Précision conçue, ajustable pour tous les porteurs de couronne`, `Matériau : Tissu de luxe pour confort, endurance et élégance`],
  },
  {
    id: "zaiire-book",
    category: "books",
    brand: "RoiRoyal",
    name: `Zaiire the Prince of Kongo`,
    subtitle: `Chapter #1 - The Necklace of Destiny`,
    description: `A fictional story about an African superhero. He's a young man from Kinshasa who discovers he's destined to be a warrior-king, protecting his land and people.
The story blends African history, mythology, and modern elements to create a universe of African superheroes.`,
    price: 60.97,
    priceLabel: `$60.97`,
    rating: { value: 4.8, count: 892 },
    image: "/shop/zaiire-book-cover.webp",
    checkoutLink: CHECKOUT_LINKS.zaiire_the_prince_of_kongo,
    checkoutLabel: `Secure checkout`,
    specifications: [`Pages: 91`, `Writer: HRM King Kafulula`, `Marking: ISOLELE — the name of the flame that cannot be extinguished`, `Format: PaperBack`],
  },
];

export const shopProductsByLocale: Partial<Record<SupportedLocale, ShopProduct[]>> & { en: ShopProduct[] } = {
  en: enProducts,
  fr: frProducts,
  pt: ptProducts,
  es: esProducts,
  sw: swProducts,
  xh: xhProducts,
  zu: zuProducts,
  ln: lnProducts,
};

export function getShopProducts(locale: SupportedLocale): ShopProduct[] {
  return shopProductsByLocale[locale] ?? shopProductsByLocale.en;
}

export function getShopProductBySlug(slug: string, locale: SupportedLocale): ShopProduct | null {
  return getShopProducts(locale).find((product) => product.id === slug) ?? null;
}

export function getShopStaticParams() {
  return shopProductsByLocale.en.map((product) => ({ product: product.id }));
}

const shopPageContentByLocale: Partial<Record<SupportedLocale, ShopPageContent>> & { en: ShopPageContent } = {
  en: {
    heroTitle: "ISOLELE Shop",
    heroDescription: "Wear the legacy. Collector hats and books from the ISOLELE universe, crafted by RoiRoyal.",
    hatsTitle: "Royal Hats",
    booksTitle: "Books",
    buyLabel: "Buy now",
    soldOutLabel: "Sold out",
    backLabel: "Back to Shop",
  },
  fr: {
    heroTitle: "Boutique ISOLELE",
    heroDescription: "Portez l'héritage. Chapeaux et livres de collection de l'univers ISOLELE, conçus par RoiRoyal.",
    hatsTitle: "Chapeaux Royaux",
    booksTitle: "Livres",
    buyLabel: "Acheter",
    soldOutLabel: "Épuisé",
    backLabel: "Retour à la boutique",
  },
  pt: {
    heroTitle: "Loja ISOLELE",
    heroDescription: "Vista o legado. Chapéus e livros de coleção do universo ISOLELE, criados pela RoiRoyal.",
    hatsTitle: "Chapéus Reais",
    booksTitle: "Livros",
    buyLabel: "Comprar",
    soldOutLabel: "Esgotado",
    backLabel: "Voltar à loja",
  },
  es: {
    heroTitle: "Tienda ISOLELE",
    heroDescription: "Viste el legado. Sombreros y libros de colección del universo ISOLELE, creados por RoiRoyal.",
    hatsTitle: "Sombreros Reales",
    booksTitle: "Libros",
    buyLabel: "Comprar",
    soldOutLabel: "Agotado",
    backLabel: "Volver a la tienda",
  },
  zu: {
    heroTitle: "Isitolo se-ISOLELE",
    heroDescription: "Gqoka ifa. Izigqoko nezincwadi zoqoqo zomhlaba we-ISOLELE, ezenziwe yi-RoiRoyal.",
    hatsTitle: "Izigqoko Zobukhosi",
    booksTitle: "Izincwadi",
    buyLabel: "Thenga manje",
    soldOutLabel: "Kudayisiwe konke",
    backLabel: "Buyela esitolo",
  },
  xh: {
    heroTitle: "Ivenkile ye-ISOLELE",
    heroDescription: "Nxiba ilifa. Izigqoko neencwadi zokuqokelela ezivela kwihlabathi le-ISOLELE, eyenziwe yi-RoiRoyal.",
    hatsTitle: "Izigqoko Zobukhosi",
    booksTitle: "Iincwadi",
    buyLabel: "Thenga ngoku",
    soldOutLabel: "Ithengiwe yonke",
    backLabel: "Buyela evenkileni",
  },
  sw: {
    heroTitle: "Duka la ISOLELE",
    heroDescription: "Vaa urithi. Kofia na vitabu vya makusanyo kutoka ulimwengu wa ISOLELE, vilivyotengenezwa na RoiRoyal.",
    hatsTitle: "Kofia za Kifalme",
    booksTitle: "Vitabu",
    buyLabel: "Nunua sasa",
    soldOutLabel: "Vimeisha",
    backLabel: "Rudi dukani",
  },
  ln: {
    heroTitle: "Butiki ya ISOLELE",
    heroDescription: "Lata ilifa. Chapeaux mpe mikanda ya bosangisi ya mokili ya ISOLELE, esalemi na RoiRoyal.",
    hatsTitle: "Chapeaux ya Bokonzi",
    booksTitle: "Mikanda",
    buyLabel: "Sombá sikoyo",
    soldOutLabel: "Esili kotekama",
    backLabel: "Zonga na butiki",
  },
};

export function getShopPageContent(locale: SupportedLocale): ShopPageContent {
  return shopPageContentByLocale[locale] ?? shopPageContentByLocale.en;
}