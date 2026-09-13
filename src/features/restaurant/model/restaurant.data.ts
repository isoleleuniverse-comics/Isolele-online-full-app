import type { RestaurantContent } from "./restaurant.types";
import type { SupportedLocale } from "@/shared/i18n/locales";

export const RESTAURANT_GALLERY_IMAGES = [
  "/restaurant/kitsune-house-1.webp",
  "/restaurant/kitsune-house-2.webp",
  "/restaurant/kitsune-house-3.webp",
  "/restaurant/kitsune-house-4.webp",
];

const contentByLocale: Partial<Record<SupportedLocale, RestaurantContent>> & { en: RestaurantContent } = {
  en: {
    hero: {
      title: `Partner Restaurant Kitsune House, Miami`,
      subtitle: `Where African heroes meet anime energy.`,
      description: `Our First Official Partner. Kitsune House is an anime-inspired eatery in downtown Miami serving Asian-fusion comfort food and sake. Expect Thai noodles, Kung Pao chicken, flavorful fried rice, street-snack sides, and desserts. During ISOLELE nights, the space features curated wall art, neon, and limited-edition collab dishes inspired by our universe. By dining here, you support a local business that shares our vision.`,
      cta: `Book a Table`,
      marketingText: `Location: The restaurant is located at 19 SE 2nd Ave STE 4, Miami, FL 33131`,
    },
    features: {
      title: `Experience Cards`,
      items: [
        { title: `🍱 Asian-Fusion Comfort Food`, description: `Enjoy crowd favorites like Thai noodles, Kung Pao chicken, and house fried rice, plus rotating desserts. On collab nights, look for ISOLELE-inspired specials.` },
        { title: `🎨 Immersive ISOLELE Decor`, description: `Anime meets Africa. Giant illustrations, neon, and curated murals bring Zaiire, Kimoya, jameela, Queen Nzinga, and more to life around you.` },
        { title: `🌟 Warm, Family-Friendly Atmosphere`, description: `A welcoming space for friends, families, and fans. Easygoing service, good music, and plenty of photo moments.` },
        { title: `🎭 Themed Events`, description: `Join ISOLELE nights with episode screenings, meet-and-greets, and special tastings.` },
        { title: `📚 Shop Corner`, description: `Pick up the latest ISOLELE comics and limited merchandise available only at partner events.` },
        { title: `💛 Community Impact`, description: `Choosing Kitsune House helps spread the ISOLELE universe and supports a local entrepreneur who believes in our mission.` },
      ],
    },
    gallery: {
      title: `Discover Kitsune House`,
      subtitle: `Our First Official Partner`,
    },
    location: {
      title: `Find Us`,
      description: `Located in downtown Miami, Kitsune House is easily accessible and offers a unique dining experience.`,
      address: `19 SE 2nd Ave STE 4, Miami, FL 33131`,
      hours: `Opening Hours`,
      hoursText: `Monday - Sunday: 11:00 AM - 11:00 PM`,
    },
    ctaFinal: {
      title: `Ready to Experience Kitsune House?`,
      description: `Book your table now and discover where African heroes meet anime energy!`,
      button: `Book Now`,
    },
  },
  fr: {
    hero: {
      title: `Restaurant Partenaire Kitsune House, Miami`,
      subtitle: `Où les héros africains rencontrent l'énergie anime.`,
      description: `Notre Premier Partenaire Officiel. Kitsune House est un restaurant inspiré de l'anime situé dans le centre-ville de Miami, servant une cuisine de confort fusion asiatique et du saké. Attendez-vous à des nouilles thaïlandaises, du poulet Kung Pao, du riz frit savoureux, des collations de rue et des desserts. Lors des soirées ISOLELE, l'espace présente des œuvres murales sélectionnées, du néon et des plats de collaboration en édition limitée inspirés de notre univers. En dînant ici, vous soutenez une entreprise locale qui partage notre vision.`,
      cta: `Réserver une Table`,
      marketingText: `Localisation : Le restaurant est situé au 19 SE 2nd Ave STE 4, Miami, FL 33131`,
    },
    features: {
      title: `Cartes d'Expérience`,
      items: [
        { title: `🍱 Cuisine de Confort Fusion Asiatique`, description: `Savourez les favoris du public comme les nouilles thaïlandaises, le poulet Kung Pao et le riz frit maison, plus des desserts en rotation. Lors des soirées de collaboration, recherchez les spécialités inspirées d\\'ISOLELE.` },
        { title: `🎨 Décor Immersif ISOLELE`, description: `L\\'anime rencontre l\\'Afrique. Des illustrations géantes, du néon et des fresques sélectionnées donnent vie à Zaiire, Kimoya, jameela, la Reine Nzinga et bien d\\'autres autour de vous.` },
        { title: `🌟 Ambiance Chaleureuse et Familiale`, description: `Un espace accueillant pour les amis, les familles et les fans. Service décontracté, bonne musique et plein de moments photo.` },
        { title: `🎭 Événements Thématiques`, description: `Rejoignez les soirées ISOLELE avec projections d\\'épisodes, rencontres et dégustations spéciales.` },
        { title: `📚 Coin Boutique`, description: `Récupérez les dernières bandes dessinées ISOLELE et des produits dérivés limités disponibles uniquement lors des événements partenaires.` },
        { title: `💛 Impact Communautaire`, description: `Choisir Kitsune House aide à diffuser l\\'univers ISOLELE et soutient un entrepreneur local qui croit en notre mission.` },
      ],
    },
    gallery: {
      title: `Découvrez Kitsune House`,
      subtitle: `Notre Premier Partenaire Officiel`,
    },
    location: {
      title: `Nous Trouver`,
      description: `Situé dans le centre-ville de Miami, Kitsune House est facilement accessible et offre une expérience culinaire unique.`,
      address: `19 SE 2nd Ave STE 4, Miami, FL 33131`,
      hours: `Horaires d'ouverture`,
      hoursText: `Lundi - Dimanche : 11h00 - 23h00`,
    },
    ctaFinal: {
      title: `Prêt à Découvrir Kitsune House ?`,
      description: `Réservez dès maintenant votre table et découvrez où les héros africains rencontrent l'énergie anime !`,
      button: `Réserver Maintenant`,
    },
  },
  pt: {
    hero: {
      title: `Restaurante Parceiro Kitsune House, Miami`,
      subtitle: `Onde os heróis africanos se encontram com a energia anime.`,
      description: `O Nosso Primeiro Parceiro Oficial. Kitsune House é um restaurante inspirado em anime localizado no centro de Miami que serve comida de conforto fusão asiática e sake. Espere macarrão tailandês, frango Kung Pao, arroz frito saboroso, petiscos de rua e sobremesas. Durante as noites ISOLELE, o espaço apresenta arte mural curada, néon e pratos de colaboração de edição limitada inspirados no nosso universo. Ao jantar aqui, apoia um negócio local que partilha a nossa visão.`,
      cta: `Reservar uma Mesa`,
      marketingText: `Localização: O restaurante está localizado em 19 SE 2nd Ave STE 4, Miami, FL 33131`,
    },
    features: {
      title: `Cartões de Experiência`,
      items: [
        { title: `🍱 Comida de Conforto Fusão Asiática`, description: `Desfrute dos favoritos do público como macarrão tailandês, frango Kung Pao e arroz frito caseiro, além de sobremesas rotativas. Nas noites de colaboração, procure especialidades inspiradas em ISOLELE.` },
        { title: `🎨 Decoração Imersiva ISOLELE`, description: `O anime encontra África. Ilustrações gigantes, néon e murais curados dão vida a Zaiire, Kimoya, jameela, Rainha Nzinga e mais ao seu redor.` },
        { title: `🌟 Ambiente Acolhedor e Familiar`, description: `Um espaço acolhedor para amigos, famílias e fãs. Serviço descontraído, boa música e muitos momentos para fotos.` },
        { title: `🎭 Eventos Temáticos`, description: `Junte-se às noites ISOLELE com projeções de episódios, encontros e degustações especiais.` },
        { title: `📚 Canto da Loja`, description: `Recolha as últimas bandas desenhadas ISOLELE e mercadoria limitada disponível apenas em eventos de parceiros.` },
        { title: `💛 Impacto Comunitário`, description: `Escolher Kitsune House ajuda a espalhar o universo ISOLELE e apoia um empreendedor local que acredita na nossa missão.` },
      ],
    },
    gallery: {
      title: `Descubra Kitsune House`,
      subtitle: `O Nosso Primeiro Parceiro Oficial`,
    },
    location: {
      title: `Encontre-nos`,
      description: `Localizado no centro de Miami, Kitsune House é de fácil acesso e oferece uma experiência culinária única.`,
      address: `19 SE 2nd Ave STE 4, Miami, FL 33131`,
      hours: `Horário de Abertura`,
      hoursText: `Segunda - Domingo: 11:00 - 23:00`,
    },
    ctaFinal: {
      title: `Pronto para Experimentar Kitsune House?`,
      description: `Reserve já a sua mesa e descubra onde os heróis africanos se encontram com a energia anime!`,
      button: `Reservar Agora`,
    },
  },
  es: {
    hero: {
      title: `Restaurante Socio Kitsune House, Miami`,
      subtitle: `Donde los héroes africanos se encuentran con la energía anime.`,
      description: `Nuestro Primer Socio Oficial. Kitsune House es un restaurante inspirado en anime ubicado en el centro de Miami que sirve comida de confort fusión asiática y sake. Espere fideos tailandeses, pollo Kung Pao, arroz frito sabroso, bocadillos callejeros y postres. Durante las noches ISOLELE, el espacio presenta arte mural curado, neón y platos de colaboración de edición limitada inspirados en nuestro universo. Al cenar aquí, apoya un negocio local que comparte nuestra visión.`,
      cta: `Reservar una Mesa`,
      marketingText: `Ubicación: El restaurante está ubicado en 19 SE 2nd Ave STE 4, Miami, FL 33131`,
    },
    features: {
      title: `Tarjetas de Experiencia`,
      items: [
        { title: `🍱 Comida de Confort Fusión Asiática`, description: `Disfrute de los favoritos del público como fideos tailandeses, pollo Kung Pao y arroz frito casero, además de postres rotativos. En las noches de colaboración, busque especialidades inspiradas en ISOLELE.` },
        { title: `🎨 Decoración Inmersiva ISOLELE`, description: `El anime se encuentra con África. Ilustraciones gigantes, neón y murales curados dan vida a Zaiire, Kimoya, jameela, la Reina Nzinga y más a su alrededor.` },
        { title: `🌟 Ambiente Cálido y Familiar`, description: `Un espacio acogedor para amigos, familias y fanáticos. Servicio relajado, buena música y muchos momentos para fotos.` },
        { title: `🎭 Eventos Temáticos`, description: `Únase a las noches ISOLELE con proyecciones de episodios, encuentros y degustaciones especiales.` },
        { title: `📚 Rincón de Tienda`, description: `Recoja los últimos cómics ISOLELE y mercancía limitada disponible solo en eventos de socios.` },
        { title: `💛 Impacto Comunitario`, description: `Elegir Kitsune House ayuda a difundir el universo ISOLELE y apoya a un emprendedor local que cree en nuestra misión.` },
      ],
    },
    gallery: {
      title: `Descubra Kitsune House`,
      subtitle: `Nuestro Primer Socio Oficial`,
    },
    location: {
      title: `Encuéntranos`,
      description: `Ubicado en el centro de Miami, Kitsune House es de fácil acceso y ofrece una experiencia culinaria única.`,
      address: `19 SE 2nd Ave STE 4, Miami, FL 33131`,
      hours: `Horario de Apertura`,
      hoursText: `Lunes - Domingo: 11:00 - 23:00`,
    },
    ctaFinal: {
      title: `¿Listo para Experimentar Kitsune House?`,
      description: `¡Reserve su mesa ahora y descubra donde los héroes africanos se encuentran con la energía anime!`,
      button: `Reservar Ahora`,
    },
  },
  sw: {
    hero: {
      title: `Mkahawa wa Mshirika Kitsune House, Miami`,
      subtitle: `Mahali mashujaa wa Kiafrika wanakutana na nishati ya anime.`,
      description: `Mshirika Wetu wa Kwanza Rasmi. Kitsune House ni mkahawa ulioongozwa na anime uliopo katikati ya Miami unaohudumia chakula cha faraja cha mchanganyiko wa Asia na sake. Subiri pasta za Thailand, kuku Kung Pao, mchele wa kukaanga wenye ladha, vitafunio vya mtaani na deseti. Wakati wa usiku wa ISOLELE, nafasi hiyo inaonyesha sanaa ya ukuta iliyochaguliwa, neon na sahani za ushirikiano za toleo la kikomo zilizoongozwa na ulimwengu wetu. Kwa kula hapa, unasaidia biashara ya ndani inayoshiriki maono yetu.`,
      cta: `Weka Meza`,
      marketingText: `Mahali: Mkahawa uko katika 19 SE 2nd Ave STE 4, Miami, FL 33131`,
    },
    features: {
      title: `Kadi za Uzoefu`,
      items: [
        { title: `🍱 Chakula cha Faraja cha Mchanganyiko wa Asia`, description: `Furahia vipendwa vya umma kama pasta za Thailand, kuku Kung Pao na mchele wa kukaanga wa nyumbani, pamoja na deseti zinazobadilika. Wakati wa usiku wa ushirikiano, tafuta maalum yaliyoongozwa na ISOLELE.` },
        { title: `🎨 Mapambo ya Kuzamisha ya ISOLELE`, description: `Anime inakutana na Afrika. Michoro mikubwa, neon na michoro ya ukuta iliyochaguliwa inaipa uhai Zaiire, Kimoya, jameela, Malkia Nzinga na zaidi karibu na wewe.` },
        { title: `🌟 Mazingira ya Kirafiki na ya Kifamilia`, description: `Nafasi ya kukaribisha kwa marafiki, familia na mashabiki. Huduma ya kupumzika, muziki mzuri na wakati mwingi wa kupiga picha.` },
        { title: `🎭 Matukio ya Mada`, description: `Jiunge na usiku wa ISOLELE na maonyesho ya vipindi, mikutano na ladha maalum.` },
        { title: `📚 Kona ya Duka`, description: `Chukua vitabu vipya vya katuni vya ISOLELE na bidhaa za kikomo zinazopatikana tu katika matukio ya washirika.` },
        { title: `💛 Athari ya Jamii`, description: `Kuchagua Kitsune House kunasaidia kueneza ulimwengu wa ISOLELE na kunasaidia mjasiriamali wa ndani anayeamini katika dhamira yetu.` },
      ],
    },
    gallery: {
      title: `Gundua Kitsune House`,
      subtitle: `Mshirika Wetu wa Kwanza Rasmi`,
    },
    location: {
      title: `Tupate`,
      description: `Iko katikati ya Miami, Kitsune House inapatikana kwa urahisi na inatoa uzoefu wa kipekee wa upishi.`,
      address: `19 SE 2nd Ave STE 4, Miami, FL 33131`,
      hours: `Saa za Kufungua`,
      hoursText: `Jumatatu - Jumapili: 11:00 - 23:00`,
    },
    ctaFinal: {
      title: `Uko Tayari Kujaribu Kitsune House?`,
      description: `Weka meza yako sasa na gundua mahali mashujaa wa Kiafrika wanavyokutana na nishati ya anime!`,
      button: `Weka Sasa`,
    },
  },
  xh: {
    hero: {
      title: `Indawo Yokutya yeMpartena Kitsune House, Miami`,
      subtitle: `Apho amaqhawe ase-Afrika adibana namandla e-anime.`,
      description: `UMpartena Wethu Wokuqala Osemthethweni. Kitsune House yindawo yokutya ephefumlwa yi-anime esemgangathweni waseMiami enika ukutya kwesihlobo se-Asia kunye nesake. Lindela iipasta zaseThailand, inkuku Kung Pao, irice ebhakiweyo enencasa, izinto zokutya zendlela kunye neziyithi. Ngexesha lobusuku be-ISOLELE, indawo ibonisa ubugcisa baseludongeni obukhethiweyo, i-neon kunye nezitya zokudibanisa ze-edition ezilinganiselweyo ezithunyelwe yi-universe yethu. Ngokutya apha, uxhasa ibhizinisi yasekhaya ehlanganyela umbono wethu.`,
      cta: `Bhukisha iTafile`,
      marketingText: `Indawo: Indawo yokutya ise-19 SE 2nd Ave STE 4, Miami, FL 33131`,
    },
    features: {
      title: `Iikhadi Zamava`,
      items: [
        { title: `🍱 Ukutya Kwesihlobo se-Asia`, description: `Nandipha izinto ezithandwayo zomphakathi njengeepasta zaseThailand, inkuku Kung Pao kunye nerice ebhakiweyo yasekhaya, kunye neziyithi ezijikelezayo. Ngexesha lobusuku bokudibanisa, funa izinto ezikhethekileyo ezithunyelwe yi-ISOLELE.` },
        { title: `🎨 Uhombiso Olungena e-ISOLELE`, description: `I-anime idibana ne-Afrika. Imifanekiso emikhulu, i-neon kunye nemifanekiso eseludongeni ekhethiweyo ibonisa ubomi kuZaiire, Kimoya, jameela, iNdlovukazi Nzinga kunye nezinye ecaleni kwakho.` },
        { title: `🌟 Imeko Efudumeleyo neYesapho`, description: `Indawo yamkelekileyo yabahlobo, iisapho kunye nabalandeli. Inkonzo epholileyo, umculo omhle kunye nexesha elininzi lokuthatha izithombe.` },
        { title: `🎭 Imisitho Yomxholo`, description: `Yiba nenxaxheba kubusuku be-ISOLELE kunye nokuboniswa kweziqendu, ukuhlangana kunye nokunandiphwa okukhethekileyo.` },
        { title: `📚 Ikhona Levenkile`, description: `Thatha iikhomikhi zakamuva ze-ISOLELE kunye neemveliso ezilinganiselweyo ezifumaneka kuphela kwimisitho yabapartena.` },
        { title: `💛 Imfuno Yomphakathi`, description: `Ukukhetha Kitsune House kunceda ukusasaza i-universe ye-ISOLELE kwaye uxhasa umqeshi wasekhaya okholwa kwimisebenzi yethu.` },
      ],
    },
    gallery: {
      title: `Fumana Kitsune House`,
      subtitle: `UMpartena Wethu Wokuqala Osemthethweni`,
    },
    location: {
      title: `Sifumanele`,
      description: `Esemgangathweni waseMiami, Kitsune House ifikeleleka lula kwaye inika amava okutya ahlukileyo.`,
      address: `19 SE 2nd Ave STE 4, Miami, FL 33131`,
      hours: `Iiyure Zokuvula`,
      hoursText: `UMvulo - ICawe: 11:00 - 23:00`,
    },
    ctaFinal: {
      title: `Ulungele Ukujariba Kitsune House?`,
      description: `Bhukisha itafile yakho ngoku kwaye ufumane apho amaqhawe ase-Afrika adibana khona namandla e-anime!`,
      button: `Bhukisha Ngoku`,
    },
  },
  zu: {
    hero: {
      title: `Irestauranti Yomlingani Kitsune House, Miami`,
      subtitle: `Lapho amaqhawe ase-Afrika ehlangana namandla e-anime.`,
      description: `Umlingani Wethu Wokuqala Osemthethweni. Kitsune House iyirestauranti ekhuthazwa yi-anime esemgangathweni waseMiami enikeza ukudla kwesihlobo se-Asia kanye nesake. Lindela ama-pasta aseThailand, inkukhu Kung Pao, irayisi ebhakiwe enencasa, ukudla kwendlela kanye nezithi. Ngesikhathi sobusuku be-ISOLELE, indawo ibonisa ubuciko basoludongeni obukhethiwe, i-neon kanye nezitsha zokubambisana ze-edition ezilinganiselwe ezikhuthazwe yi-universe yethu. Ngokudla lapha, uxhasa ibhizinisi yasekhaya ehlanganyela umbono wethu.`,
      cta: `Bhukha Ithafula`,
      marketingText: `Indawo: Irestauranti itholakala ku-19 SE 2nd Ave STE 4, Miami, FL 33131`,
    },
    features: {
      title: `Amakhadi Olwazi`,
      items: [
        { title: `🍱 Ukudla Kwesihlobo Se-Asia`, description: `Jabulela izinto ezithandwayo zomphakathi njengama-pasta aseThailand, inkukhu Kung Pao kanye nerayisi ebhakiwe yasekhaya, kanye nezithi ezijikelezayo. Ngesikhathi sobusuku bokubambisana, funa izinto ezikhethekile ezikhuthazwe yi-ISOLELE.` },
        { title: `🎨 Ukuhlobisa Okuzizwisa kwe-ISOLELE`, description: `I-anime ihlangana ne-Afrika. Imidwebo emikhulu, i-neon kanye nemidwebo esoludongeni ekhethiwe ibonisa ukuphila kuZaiire, Kimoya, jameela, iNdlovukazi Nzinga kanye nezinye eceleni kwakho.` },
        { title: `🌟 Indawo Efudumele NeYomndeni`, description: `Indawo yokwamukela abangane, imindeni kanye nabalandeli. Inkonzo epholile, umculo omuhle kanye nesikhathi esiningi sokuthatha izithombe.` },
        { title: `🎭 Imicimbi Yesihloko`, description: `Hlanganyela sobusuku be-ISOLELE nokuboniswa kweziqephu, ukuhlangana kanye nokunambitheka okukhethekile.` },
        { title: `📚 Ikhona Lesitolo`, description: `Thatha amacomics akamuva e-ISOLELE kanye nemikhiqizo elinganiselwe etholakala kuphela emicimbini yabalingani.` },
        { title: `💛 Umthelela Womphakathi`, description: `Ukukhetha Kitsune House kusiza ukusabalalisa i-universe ye-ISOLELE futhi uxhasa umqeshi wasekhaya okholwa emisebenzini yethu.` },
      ],
    },
    gallery: {
      title: `Thola Kitsune House`,
      subtitle: `Umlingani Wethu Wokuqala Osemthethweni`,
    },
    location: {
      title: `Sithole`,
      description: `Itholakala esemgangathweni waseMiami, Kitsune House ingafinyeleleka kalula futhi inikeza ulwazi lokudla oluyingqayizivele.`,
      address: `19 SE 2nd Ave STE 4, Miami, FL 33131`,
      hours: `Isikhathi Sokuvula`,
      hoursText: `UMsombuluko - ISonto: 11:00 - 23:00`,
    },
    ctaFinal: {
      title: `Usukulungele Ukujariba Kitsune House?`,
      description: `Bhukha ithafula lakho manje futhi uthole lapho amaqhawe ase-Afrika ehlangana khona namandla e-anime!`,
      button: `Bhukha Manje`,
    },
  },
  ln: {
    hero: {
      title: `Lestolá ya Mpartena Kitsune House, Miami`,
      subtitle: `Esika ba héros ya Afrika bakutani na énergie ya anime.`,
      description: `Mpartena na Biso ya Kala ya Officiel. Kitsune House ezali lestolá ya anime oyo ezali na centre ya Miami oyo ezali kopesa bilei ya confort ya fusion ya Asia mpe sake. Linga pasta ya Thailand, kuku Kung Pao, loso ya kobaka ya saveur, ba snacks ya nzela mpe ba desserts. Na ba butu ya ISOLELE, esika ezali kopesa art ya mur ya curated, neon mpe ba plats ya collaboration ya édition limitée oyo etindi na univers na biso. Na kolya awa, ozali kosalisa business ya ndani oyo ezali kosalisa vision na biso.`,
      cta: `Kozwa Mesa`,
      marketingText: `Esika: Lestolá ezali na 19 SE 2nd Ave STE 4, Miami, FL 33131`,
    },
    features: {
      title: `Ba Cartes ya Expérience`,
      items: [
        { title: `🍱 Bilei ya Confort ya Fusion ya Asia`, description: `Sepela ba favoris ya umma lokola pasta ya Thailand, kuku Kung Pao mpe loso ya kobaka ya ndako, lisusu na ba desserts ya rotation. Na ba butu ya collaboration, tafuna ba spécialités oyo etindi na ISOLELE.` },
        { title: `🎨 Mapambo ya Kozinda ya ISOLELE`, description: `Anime ekutani na Afrika. Ba illustrations ya minene, neon mpe ba murals ya curated ezali kopesa bomoi na Zaiire, Kimoya, jameela, Reine Nzinga mpe mosusu na liboso na yo.` },
        { title: `🌟 Ambiance ya Boboto mpe ya Libota`, description: `Esika ya koyamba mpo na baninga, ba familles mpe ba fans. Service ya kosepela, miziki ya malamu mpe ntango mingi ya kosala ba photos.` },
        { title: `🎭 Ba Événements Thématiques`, description: `Kokutana na ba butu ya ISOLELE na ba projections ya ba épisodes, bokutani mpe ba dégustations spéciales.` },
        { title: `📚 Kɔnɛ ya Butike`, description: `Kokata ba BD ya sika ya ISOLELE mpe ba marchandises ya limitée oyo ezali kozala na événements ya ba partenaires kaka.` },
        { title: `💛 Impact ya Communauté`, description: `Kopona Kitsune House ezali kosalisa kosakola univers ya ISOLELE mpe kosalisa entrepreneur ya ndani oyo azali kondima na mission na biso.` },
      ],
    },
    gallery: {
      title: `Mona Kitsune House`,
      subtitle: `Mpartena na Biso ya Kala ya Officiel`,
    },
    location: {
      title: `Kokuta Biso`,
      description: `Ezali na centre ya Miami, Kitsune House ekoki kozwa polele mpe ezali kopesa expérience ya kipekee ya bilei.`,
      address: `19 SE 2nd Ave STE 4, Miami, FL 33131`,
      hours: `Ba Heures ya Kofungola`,
      hoursText: `Lundi - Dimanche: 11:00 - 23:00`,
    },
    ctaFinal: {
      title: `Ozali Prêt mpo na Kojariba Kitsune House?`,
      description: `Bongisa mesa na yo sikoyo mpe mona esika ba héros ya Afrika bakutani na énergie ya anime!`,
      button: `Bongisa Sikoyo`,
    },
  },
};

export function getRestaurantContent(locale: SupportedLocale): RestaurantContent {
  return contentByLocale[locale] ?? contentByLocale.en;
}