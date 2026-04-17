-- ISOLELE Seed Data
-- Populates all tables with real content from the ISOLELE universe

-- ============================================================
-- BOOKS
-- ============================================================
INSERT INTO public.books (slug, title, subtitle, tag, description, cover_image, background_image, series, volume, sort_order, available, buy_url)
VALUES
  (
    'zaiire',
    'THE GOLDEN AGE OF BLACK AFRICAN COMICS',
    'Zaiire: The Prince of Kongo',
    'ZAIIRE: THE PRINCE OF KONGO',
    'Plongez dans l''univers épique de Zaiire, prince du Kongo, dont le destin est lié à une ancienne prophétie. Entre pouvoirs mystiques, trahisons royales et conquêtes légendaires, découvrez la saga africaine la plus ambitieuse de notre époque.',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0045-2K7U0yRJN26nTH5BRGiR6lTJAMNfqK.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0045-2K7U0yRJN26nTH5BRGiR6lTJAMNfqK.jpg',
    'ZAIIRE', 1, 1, true, '/books/zaiire'
  ),
  (
    'kimoya',
    'LA REINE DES REINES',
    'Kimoya Kandake: La Souveraine',
    'KIMOYA KANDAKE',
    'Kimoya Kandake, la puissante reine guerrière, héritière d''une lignée de souveraines légendaires. Son règne transcende le temps et les frontières, unissant l''Afrique dans une épopée sans précédent.',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0046-lZMOgoh1a5DhlEtWih4TxM2AVDVl3u.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0046-lZMOgoh1a5DhlEtWih4TxM2AVDVl3u.jpg',
    'KIMOYA', 1, 2, true, '/books/kimoya'
  ),
  (
    'njoko',
    'THE SPIRIT OF THE GREAT WARRIOR',
    'Njoko: Le Guerrier des Ancêtres',
    'NJOKO: LE GUERRIER',
    'Njoko, guerrier légendaire dont l''esprit anime les champs de bataille depuis des siècles. Sa force ancestrale protège les peuples d''Afrique contre les forces obscures qui menacent l''équilibre du monde.',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0060-VaXYrgONw6g7KvMuclx1P9nFhjT68R.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0060-VaXYrgONw6g7KvMuclx1P9nFhjT68R.jpg',
    'NJOKO', 1, 3, true, '/books/njoko'
  ),
  (
    'zattar',
    'LA PROPHÉTIE DES ÉLUS',
    'Zattar: Le Dernier Gardien',
    'ZATTAR: LE GARDIEN',
    'Zattar, gardien ultime des secrets millénaires de l''Afrique. Sa mission : protéger les anciennes connaissances des forces qui cherchent à effacer l''histoire du continent noir.',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0059-7jQOcRicDvdQkPYsWwzJ5OvOU3FXX4.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0059-7jQOcRicDvdQkPYsWwzJ5OvOU3FXX4.jpg',
    'ZATTAR', 1, 4, true, '/books/zattar'
  ),
  (
    'imvula',
    'THE RAIN QUEEN',
    'Imvula: La Reine de la Pluie',
    'IMVULA: RAIN QUEEN',
    'Imvula, la mystérieuse Reine de la Pluie, détient le pouvoir sur les éléments naturels d''Afrique du Sud. Sa connexion avec les ancêtres et la terre sacrée en fait l''une des figures les plus puissantes de l''univers ISOLELE.',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0044-rm6HLzPaenXZgdpaDPyfmN97Aabcgu.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0044-rm6HLzPaenXZgdpaDPyfmN97Aabcgu.jpg',
    'IMVULA', 1, 5, true, '/books/imvula'
  ),
  (
    'kufu-game',
    'KUFU - THE CROWN GAME',
    'Zaiire Book III: Le Jeu de la Couronne',
    'KUFU: THE CROWN GAME',
    'KUFU est un jeu de cartes stratégique profondément ancré dans la culture africaine. Affrontez vos adversaires avec des cartes représentant des masques africains sacrés, des instruments ancestraux et des personnages royaux du Kongo.',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jeux%20-des-cartes-ISOLELE%202026%20copie-1.png-ifvBiGyVajqX0jXvhJQOH1k83wp5KC.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jeux%20-des-cartes-ISOLELE%202026%20copie-1.png-ifvBiGyVajqX0jXvhJQOH1k83wp5KC.jpeg',
    'ZAIIRE', 3, 6, true, '/kufu-game'
  )
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  cover_image = EXCLUDED.cover_image;

-- ============================================================
-- CHARACTERS
-- ============================================================
INSERT INTO public.characters (slug, name, title, universe, origin, power, description, image, card_image, book_slug, sort_order, featured)
VALUES
  (
    'zaiire-kongo', 'ZAIIRE KONGO', 'Prince du Kongo', 'ZAIIRE',
    'Royaume du Kongo', 'Lumière ancestrale et contrôle cosmique',
    'Zaiire Kongo est le prince héritier du Kongo, porteur d''une lumière ancestrale qui lui confère un pouvoir cosmique. Sa mission est de restaurer la gloire du royaume africain face aux forces obscures.',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0045-2K7U0yRJN26nTH5BRGiR6lTJAMNfqK.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0045-2K7U0yRJN26nTH5BRGiR6lTJAMNfqK.jpg',
    'zaiire', 1, true
  ),
  (
    'kimoya-kandake', 'KIMOYA KANDAKE', 'Reine Guerrière', 'KIMOYA',
    'Méroé, Nubie', 'Majesté royale et force divine',
    'Kimoya Kandake est l''héritière des grandes reines guerrières de Nubie. Sur son trône d''or, elle gouverne avec sagesse et puissance, symbole de la royauté africaine éternelle.',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0046-lZMOgoh1a5DhlEtWih4TxM2AVDVl3u.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0046-lZMOgoh1a5DhlEtWih4TxM2AVDVl3u.jpg',
    'kimoya', 2, true
  ),
  (
    'zaira-mbube', 'ZAIRA MBUBE', 'La Panthère Royale', 'ZAIIRE',
    'Savane sacrée d''Afrique', 'Métamorphose féline et agilité suprême',
    'Zaira Mbube est la gardienne mystique de la savane, mi-humaine mi-panthère. Son lien avec les esprits de la nature africaine en fait une protectrice redoutable des territoires sacrés.',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0044-rm6HLzPaenXZgdpaDPyfmN97Aabcgu.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0044-rm6HLzPaenXZgdpaDPyfmN97Aabcgu.jpg',
    'zaiire', 3, true
  ),
  (
    'queen-jameela', 'QUEEN JAMEELA CALIFIA', 'Reine de Californie', 'KIMOYA',
    'Royaume légendaire de Califia', 'Commandement guerrier et leadership royal',
    'Queen Jameela Califia est l''incarnation moderne de la légendaire reine africaine qui donna son nom à la Californie. Guerrière impitoyable, elle incarne la résistance et la fierté africaine.',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0056-aVhyk1EGYDNRcA7K8hCRo1ZJulcHP9.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0056-aVhyk1EGYDNRcA7K8hCRo1ZJulcHP9.jpg',
    'kimoya', 4, true
  ),
  (
    'simbira-tigressa', 'SIMBIRA LA TIGRESSA', 'La Tigresse de l''Afrique', 'NJOKO',
    'Afrique subsaharienne', 'Force du tigre et feu ancestral',
    'Simbira La Tigressa est la combattante la plus redoutée de l''univers ISOLELE. Ses rayures sont les cicatrices de l''Afrique, le feu de ses ancêtres transformé en force.',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0055-7oKwB0RaBefWj90AIaARep0VGAQxg6.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0055-7oKwB0RaBefWj90AIaARep0VGAQxg6.jpg',
    'njoko', 5, true
  ),
  (
    'madiba-mandela', 'MADIBA MANDELA', 'Le Gardien de la Lumière', 'ZATTAR',
    'Afrique du Sud', 'Résistance indestructible et vérité éternelle',
    'Madiba Mandela, inspiré du plus grand héros africain, incarne la résistance et la vérité dans l''univers ISOLELE. Ils ont voulu enfermer le soleil, mais le soleil a appris à briller à travers les barreaux.',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0060-VaXYrgONw6g7KvMuclx1P9nFhjT68R.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0060-VaXYrgONw6g7KvMuclx1P9nFhjT68R.jpg',
    'zattar', 6, true
  ),
  (
    'kimpa-vita', 'KIMPA VITA', 'La Prophétesse du Kongo', 'ZATTAR',
    'Royaume du Kongo, 17ème siècle', 'Feu spirituel et résurrection',
    'Kimpa Vita est la prophétesse mystique du Kongo. Vous pouvez brûler mon corps, mais pas le feu qui m''a envoyé. Son lanterne guide les âmes perdues vers la liberté.',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0059-7jQOcRicDvdQkPYsWwzJ5OvOU3FXX4.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0059-7jQOcRicDvdQkPYsWwzJ5OvOU3FXX4.jpg',
    'zattar', 7, true
  ),
  (
    'sankuru', 'SANKURU', 'Le Danseur du Vent', 'ZAIIRE',
    'Rivière Sankuru, République Démocratique du Congo', 'Vitesse du vent et maîtrise des arts martiaux',
    'Sankuru est le plus rapide des guerriers de l''univers ISOLELE. Ses mouvements inspirés de la danse africaine lui permettent de combattre avec une grâce et une puissance inégalées.',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0057-Ag7qpdNL9kdFUyL5SKSNvGFGUtEwLS.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0057-Ag7qpdNL9kdFUyL5SKSNvGFGUtEwLS.jpg',
    'zaiire', 8, false
  ),
  (
    'ganga-zumba', 'GANGA ZUMBA', 'Le Premier Roi du Quilombo', 'NJOKO',
    'Quilombo dos Palmares, Brésil', 'Liberté absolue et charisme royal',
    'Ganga Zumba, premier roi de Quilombo dos Palmares, symbolise la résistance africaine dans les Amériques. Sa couronne est faite de la sueur et du sang de ses ancêtres libres.',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0042-lwuIWgCIPdK7GOmWkORkPPXJpFQKfm.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0042-lwuIWgCIPdK7GOmWkORkPPXJpFQKfm.jpg',
    'njoko', 9, false
  ),
  (
    'likaku', 'LIKAKU', 'Le Singe Sacré', 'ZAIIRE',
    'Forêt équatoriale du Kongo', 'Intelligence ancestrale et connexion avec la nature',
    'Likaku est le gardien des secrets de la forêt. Les arbres lui ont enseigné ce que les hommes ont oublié. Sa sagesse millénaire et sa connexion avec les esprits de la nature en font un allié précieux.',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0058-gD7wFf8li9ITXSvC57xza5JO8jIl7z.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0058-gD7wFf8li9ITXSvC57xza5JO8jIl7z.jpg',
    'zaiire', 10, false
  )
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  image = EXCLUDED.image;

-- ============================================================
-- GAMES
-- ============================================================
INSERT INTO public.games (slug, title, subtitle, tagline, description, long_description, cover_image, board_image, category, players, age, duration, rating, review_count, price, available, features, screenshots)
VALUES
  (
    'kufu-crown-game',
    'KUFU – The Crown Game',
    'Zaiire Book III',
    'HÉRITAGE • ROYALTY • NKUFU YA BAKULU',
    'KUFU est un jeu de cartes stratégique ancré dans la culture panafricaine. Affrontez vos adversaires avec des cartes représentant 8 masques africains sacrés gardiens de la couronne du Kongo.',
    'KUFU – The Crown Game est le jeu de cartes officiel de l''univers ISOLELE, issu du livre ZAIIRE BOOK III. Chaque carte représente un masque africain sacré, un instrument ancestral ou un symbole royal du Kongo. Le léopard-print shield avec le logo doré ISOLELE est le coeur visuel du jeu — le léopard a une signification profonde dans la culture royale d''Afrique Centrale, représentant le pouvoir, le courage et la royauté. Dans la tradition Kongo, seule la royauté portait la peau de léopard. Les huit masques africains qui entourent le blason central représentent différentes traditions ethniques et archétypes spirituels. Ce jeu n''est pas seulement un jeu — c''est un portail vers l''univers ISOLELE et l''héritage africain.',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jeux%20-des-cartes-ISOLELE%202026%20copie-1.png-ifvBiGyVajqX0jXvhJQOH1k83wp5KC.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260304-WA0012-XSCUSyYtBnqRoFkU9Ubd5qRihh3IXm.jpg',
    'Jeu de cartes',
    '2-6 joueurs',
    '10+',
    '30-60 min',
    4.8, 2543,
    39.99, true,
    '[
      {"icon": "crown", "title": "8 Masques Sacrés", "description": "Chaque masque représente une tradition ethnique africaine et un archétype spirituel unique"},
      {"icon": "music", "title": "Instruments Ancestraux", "description": "Kora, Balafon, Ngoma — les instruments sacrés de l''Afrique en arrière-plan mystique"},
      {"icon": "shield", "title": "Blason Léopard Royal", "description": "Le blason léopard avec le logo ISOLELE, symbole du pouvoir royal dans la tradition Kongo"},
      {"icon": "globe", "title": "Bordure Panafricaine", "description": "Motifs triangulaires en rouge, noir, or et vert — les couleurs panafricaines sacrées"}
    ]',
    '[
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0058-gD7wFf8li9ITXSvC57xza5JO8jIl7z.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0056-aVhyk1EGYDNRcA7K8hCRo1ZJulcHP9.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0044-rm6HLzPaenXZgdpaDPyfmN97Aabcgu.jpg"
    ]'
  ),
  (
    'kufu-ludo',
    'KUFU LUDO',
    'Le Parcours Royal',
    'Le jeu de plateau africain le plus immersif',
    'KUFU LUDO est le jeu de plateau africain qui réinvente le ludo classique dans un univers royal du Kongo. 4 clans s''affrontent pour conquérir la couronne dans un parcours épique.',
    'KUFU LUDO transforme le jeu de société classique en une expérience culturelle immersive. Le plateau représente une cour royale du Kongo divisée en 4 territoires aux couleurs des clans. Chaque case est ornée de motifs kente et de symboles adinkra. Les pions représentent des guerriers des différents clans. La plume blanche au centre du plateau symbolise la paix ancestrale — celui qui atteint le centre conquiert la couronne.',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260304-WA0012-XSCUSyYtBnqRoFkU9Ubd5qRihh3IXm.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260304-WA0012-XSCUSyYtBnqRoFkU9Ubd5qRihh3IXm.jpg',
    'Jeu de plateau',
    '2-4 joueurs',
    '6+',
    '45-90 min',
    4.7, 1287,
    49.99, true,
    '[
      {"icon": "map", "title": "4 Clans du Kongo", "description": "Rouge, Vert, Bleu et Or — chaque clan représente un territoire et une tradition ancestrale"},
      {"icon": "feather", "title": "Plume Sacrée", "description": "La plume blanche au centre symbolise la paix et la conquête spirituelle du royaume"},
      {"icon": "dice", "title": "Règles KUFU", "description": "Règles enrichies avec des cartes de pouvoir africain pour des parties encore plus stratégiques"},
      {"icon": "palette", "title": "Art Africain Authentique", "description": "Chaque élément du plateau est illustré par des artistes africains de l''équipe ISOLELE"}
    ]',
    '[
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260304-WA0012-XSCUSyYtBnqRoFkU9Ubd5qRihh3IXm.jpg"
    ]'
  )
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description;

-- ============================================================
-- ARTICLES
-- ============================================================
INSERT INTO public.articles (slug, title, excerpt, content, image, category, published, published_at, author)
VALUES
  (
    'lancement-isolele-2026',
    'ISOLELE : La révolution de la BD africaine est en marche',
    'ISOLELE s''impose comme la première franchise de bande dessinée africaine à ambition mondiale. Découvrez l''histoire derrière la création de cet univers unique.',
    'ISOLELE est bien plus qu''une bande dessinée — c''est un mouvement culturel. Fondée sur la richesse des mythologies africaines, la franchise ISOLELE vise à redonner aux peuples africains et à la diaspora des super-héros qui leur ressemblent, parlent leurs langues et incarnent leurs valeurs ancestrales. Le projet a débuté avec ZAIIRE, le Prince du Kongo, et s''est rapidement développé pour inclure des personnages issus de toute l''Afrique — de la Nubie à l''Afrique du Sud, du Quilombo do Palmares au Royaume du Kongo.',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0045-2K7U0yRJN26nTH5BRGiR6lTJAMNfqK.jpg',
    'Actualités',
    true,
    NOW() - INTERVAL '2 days',
    'Équipe ISOLELE'
  ),
  (
    'kufu-game-sortie',
    'KUFU The Crown Game : Le jeu de cartes africain de l''année',
    'Le premier jeu de cartes ISOLELE est disponible ! KUFU plonge les joueurs au coeur de la royauté du Kongo avec des cartes illustrées par des artistes africains.',
    'KUFU – The Crown Game est enfin disponible. Ce jeu de cartes stratégique est directement inspiré de ZAIIRE BOOK III. Chaque carte représente un masque africain sacré, un symbole de la royauté du Kongo ou un instrument ancestral. Le jeu a été conçu pour être accessible à tous tout en offrant une profondeur stratégique pour les joueurs expérimentés.',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jeux%20-des-cartes-ISOLELE%202026%20copie-1.png-ifvBiGyVajqX0jXvhJQOH1k83wp5KC.jpeg',
    'Jeux',
    true,
    NOW() - INTERVAL '5 days',
    'Équipe ISOLELE'
  ),
  (
    'personnages-nouveaux-2026',
    'Nouveaux personnages : Simbira, Sankuru et Ganga Zumba rejoignent l''univers',
    'Trois nouveaux personnages font leur entrée dans l''univers ISOLELE en 2026, enrichissant encore davantage la diversité et la profondeur de la franchise.',
    'L''univers ISOLELE s''agrandit avec l''arrivée de trois nouveaux personnages emblématiques. Simbira La Tigressa, dont les rayures symbolisent les cicatrices de l''Afrique ; Sankuru, le danseur du vent issu de la République Démocratique du Congo ; et Ganga Zumba, premier roi du Quilombo dos Palmares. Ces personnages enrichissent la narrative panafricaine d''ISOLELE et renforcent le message d''unité et de fierté africaine.',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0055-7oKwB0RaBefWj90AIaARep0VGAQxg6.jpg',
    'Personnages',
    true,
    NOW() - INTERVAL '7 days',
    'Équipe ISOLELE'
  )
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  published = true;

-- ============================================================
-- PRODUCTS
-- ============================================================
INSERT INTO public.products (slug, name, description, price, original_price, image, category, in_stock, featured, sort_order)
VALUES
  ('zaiire-vol1', 'ZAIIRE Vol.1 - Prince du Kongo', 'La première aventure de Zaiire, prince héritier du Kongo. Format premium, 120 pages couleur.', 24.99, 29.99, 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0045-2K7U0yRJN26nTH5BRGiR6lTJAMNfqK.jpg', 'BD', true, true, 1),
  ('kimoya-vol1', 'KIMOYA KANDAKE Vol.1 - La Reine des Reines', 'L''épopée de Kimoya Kandake, reine guerrière de Nubie. 128 pages en couleurs.', 24.99, null, 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0046-lZMOgoh1a5DhlEtWih4TxM2AVDVl3u.jpg', 'BD', true, true, 2),
  ('kufu-card-game', 'KUFU - The Crown Game (Jeu de Cartes)', 'Le jeu de cartes officiel ISOLELE. 54 cartes illustrées + règles du jeu. Édition collector.', 39.99, 44.99, 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jeux%20-des-cartes-ISOLELE%202026%20copie-1.png-ifvBiGyVajqX0jXvhJQOH1k83wp5KC.jpeg', 'Jeux', true, true, 3),
  ('kufu-ludo-board', 'KUFU LUDO - Jeu de Plateau Royal', 'Le jeu de plateau ISOLELE inspiré du ludo. Plateau grand format avec pièces africaines sculptées.', 49.99, 59.99, 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260304-WA0012-XSCUSyYtBnqRoFkU9Ubd5qRihh3IXm.jpg', 'Jeux', true, true, 4),
  ('tshirt-zaiire', 'T-Shirt ZAIIRE - Édition Limitée', 'T-shirt premium avec l''illustration officielle de Zaiire. Coton bio, impression HD.', 34.99, null, 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0045-2K7U0yRJN26nTH5BRGiR6lTJAMNfqK.jpg', 'Vêtements', true, false, 5),
  ('poster-kimoya', 'Poster KIMOYA KANDAKE - Format A2', 'Poster haute qualité de Kimoya sur son trône. Impression giclée sur papier fine art.', 19.99, null, 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260319-WA0046-lZMOgoh1a5DhlEtWih4TxM2AVDVl3u.jpg', 'Affiches', true, false, 6)
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  price = EXCLUDED.price;
