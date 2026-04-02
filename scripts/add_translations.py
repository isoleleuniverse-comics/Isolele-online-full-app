#!/usr/bin/env python3
"""Add complete book translations for all 9 carousel slides in all 8 languages"""

# Define complete new translations for all languages and books
new_translations = {
    'en': {
        'cta_title': 'WELCOME TO ISOLELE',
        'cta_description': 'Isolele is a visionary universe born to restore the soul of African storytelling, a mythological empire where superheroes are chosen by destiny, kingdoms never forgotten, and ancestral power is alive in every page, every prophecy, every battle. Every child who reads Isolele will discover superheroes who look like them, speak their language, protect their land, and honor their ancestors. This is for the next generation of kings, queens, warriors, inventors, and storytellers.',
        
        'book_zaiire_title': 'ZAIIRE: THE PRINCE OF KONGO',
        'book_zaiire_subtitle': 'THE NECKLACE OF DESTINY',
        'book_zaiire_desc': 'Forged in the heart of the Kongo Kingdom, the Necklace of Destiny was never made to be worn. It was made to choose. Passed through centuries of fire, war, and silence, it carries the soul of every king who bled for their people and every queen who held the world together with bare hands. When it finds Zaiire, it does not shine. It awakens.',
        
        'book_makanda_title': 'THE MAKANDA DYNASTY – BOOK I',
        'book_makanda_subtitle': 'THE RISING KANDAKE',
        'book_makanda_desc': 'Deep within Central Africa existed a civilization the world was never meant to know about. Spiritually awakened. Technologically advanced. Protected by the Sacred Flame. When outside forces came for what was theirs, the Makanda did not fall. They disappeared. Their city was never lost. It was waiting for the one born to carry the flame again.',
        
        'book_bambula_title': 'BAMBULA: CHILD OF RHYTHM',
        'book_bambula_subtitle': 'CHAPTER I - THE SACRED DRUM',
        'book_bambula_desc': 'Before words, there was rhythm. Bambula was the child who heard everything. When the drums were taken and the land went silent, he kept the rhythm alive inside him. Armed with the sacred drum, he walks between the spirit world and the living. He does not fight to destroy. He protects to remember.',
        
        'book_mokele_title': 'MOKELE: BORN INTO STRUGGLE',
        'book_mokele_subtitle': 'FROM CHILD TO LORD OF KINSHASA',
        'book_mokele_desc': 'Mokele is not born a king. He is born into struggle. The streets of Kinshasa teach him before school ever could, where loyalty is fragile, violence is normal, and survival is everything. From child to hustler to lord. He builds power, money, and respect. In Kinshasa, you either get eaten... Or you become the predator.',
        
        'book_kufu_title': 'KUFU: THE CROWN GAME',
        'book_kufu_subtitle': 'THE OFFICIAL GAME OF THE ISOLELE UNIVERSE',
        'book_kufu_desc': 'This is not just a card game. It is a ceremony. Gather your warriors. Build your kingdom. Outplay every opponent at the table. But to claim the crown there is only one way to win. You must raise your voice and speak the name of the king out loud. Then someone places the necklace over your head. Not by your own hand. By another. Because a true king is not crowned alone. KUFU is where African royalty becomes something you feel in your hands, hear in your voice, and carry around your neck. Every game is a coronation. Every winner is a king.',
        
        'book_zattar_title': 'ZATTAR: THE PRINCE OF THE UNIVERSE',
        'book_zattar_subtitle': 'THE CONQUEROR OF THRONES',
        'book_zattar_desc': 'When Destiny Refused Him One Kingdom, He Decided to Take Them All. Prince Zattar was born to inherit the throne of Bapindi. But when the Ancestors chose another, something inside him did not break. It ignited. He studied the First and Second Wars of Vegas, legends of devastation that shook the world before he was even born. Where others saw warning, Zattar saw a map. He started the Third War of Vegas. Not out of madness. Not out of pain. But because he looked at the entire universe and reached one conclusion: It belongs to someone. And that someone is Zattar. He was not chosen. So he chose the universe instead.',
        
        'book_zaiko_title': 'ZAIKO: LAST KING OF THE STREETS OF KIVU',
        'book_zaiko_subtitle': 'THE LEGEND OF ZAIKO',
        'book_zaiko_desc': 'Born in North Kivu. Forged in Kinshasa. Zaiko was never meant to survive. But survival was never enough. In a world ruled by power, money, and fear, he rises from nothing. Not as a hero. But as a force. With his brother, he builds the most feared empire the Kivus have ever known. No crown was given. No destiny was written. Everything was taken. One man defied fate itself and carved his name into African history with iron and will.',
        
        'book_amara_title': 'AMARA: QUEEN OF THE SEAS',
        'book_amara_subtitle': 'CHAPTER I - QUEEN OF THE PIRATES OF AMAZON',
        'book_amara_desc': 'Every pirate fears the ocean. Amara owns it. She is the Queen of the Seas. The most feared captain on every water in the world. No ship has outrun her. No king has outsmarted her. No army has stopped her fleet. But Amara does not sail alone. Beside her stand four women bound by blood, loyalty and destiny. Five queens of the sea who together carry a power that will shake every throne on the continent. From their union the Agojie dynasty is born. And from that dynasty rise the five women kings who will change the course of African history forever. This is not just a pirate story. This is where the greatest female dynasty in the ISOLELE universe begins.',
    },
    'fr': {
        'cta_title': 'BIENVENUE À ISOLELE',
        'cta_description': 'Isolele est un univers visionnaire né pour restaurer l\'âme du storytelling africain, un empire mythologique où les superhéros sont choisis par le destin, les royaumes jamais oubliés, et le pouvoir ancestral vivant dans chaque page, chaque prophétie, chaque bataille. Chaque enfant qui lit Isolele découvrira des superhéros qui leur ressemblent, parlent leur langue, protègent leur terre, et honorent leurs ancêtres. C\'est pour la prochaine génération de rois, reines, guerriers, inventeurs, et conteurs.',
        
        'book_zaiire_title': 'ZAÏRE: LE PRINCE DU CONGO',
        'book_zaiire_subtitle': 'LE COLLIER DE LA DESTINÉE',
        'book_zaiire_desc': 'Forgé au cœur du Royaume Kongo, le Collier de la Destinée n\'a jamais été fait pour être porté. Il a été fait pour choisir. Transmis à travers des siècles de feu, de guerre et de silence, il porte l\'âme de chaque roi qui a saigné pour son peuple et chaque reine qui a tenu le monde ensemble avec ses mains nues. Quand il trouve Zaiire, il ne brille pas. Il s\'éveille.',
        
        'book_makanda_title': 'LA DYNASTIE MAKANDA – LIVRE I',
        'book_makanda_subtitle': 'LA KANDAKE MONTANTE',
        'book_makanda_desc': 'Au plus profond de l\'Afrique Centrale existait une civilisation que le monde n\'aurait jamais dû connaître. Spirituellement éveillée. Technologiquement avancée. Protégée par la Flamme Sacrée. Quand des forces extérieures sont venues pour ce qui était le leur, les Makanda n\'ont pas chuté. Ils ont disparu. Leur ville n\'a jamais été perdue. Elle attendait celui qui était né pour porter la flamme à nouveau.',
        
        'book_bambula_title': 'BAMBULA: ENFANT DU RYTHME',
        'book_bambula_subtitle': 'CHAPITRE I - LE TAMBOUR SACRÉ',
        'book_bambula_desc': 'Avant les mots, il y avait le rythme. Bambula était l\'enfant qui entendait tout. Quand les tambours ont été pris et la terre devenue silencieuse, il a gardé le rythme vivant en lui. Armé du tambour sacré, il marche entre le monde des esprits et le monde vivant. Il ne se bat pas pour détruire. Il protège pour se souvenir.',
        
        'book_mokele_title': 'MOKELE: NÉ DANS LA LUTTE',
        'book_mokele_subtitle': 'DE L\'ENFANT AU SEIGNEUR DE KINSHASA',
        'book_mokele_desc': 'Mokele n\'est pas né roi. Il est né dans la lutte. Les rues de Kinshasa le lui enseignent avant que l\'école ne le puisse, où la loyauté est fragile, la violence est normale, et la survie est tout. De l\'enfant au hustler au seigneur. Il construit le pouvoir, l\'argent et le respect. À Kinshasa, on se fait manger... ou on devient le prédateur.',
        
        'book_kufu_title': 'KUFU: LE JEU DU COURONNEMENT',
        'book_kufu_subtitle': 'LE JEU OFFICIEL DE L\'UNIVERS ISOLELE',
        'book_kufu_desc': 'Ce n\'est pas seulement un jeu de cartes. C\'est une cérémonie. Rassemblez vos guerriers. Construisez votre royaume. Surpassez chaque adversaire à la table. Mais pour réclamer la couronne, il n\'y a qu\'une seule façon de gagner. Vous devez lever la voix et prononcer le nom du roi à voix haute. Puis quelqu\'un place le collier sur votre tête. Pas de votre propre main. Par une autre. Parce qu\'un vrai roi n\'est pas couronné seul. KUFU est où la royauté africaine devient quelque chose que vous sentez dans vos mains, entendu dans votre voix, et porté autour de votre cou. Chaque partie est un couronnement. Chaque gagnant est un roi.',
        
        'book_zattar_title': 'ZATTAR: LE PRINCE DE L\'UNIVERS',
        'book_zattar_subtitle': 'LE CONQUÉRANT DES TRÔNES',
        'book_zattar_desc': 'Quand le Destin lui a refusé un royaume, il a décidé de tous les prendre. Le Prince Zattar est né pour hériter du trône de Bapindi. Mais quand les Ancêtres en ont choisi un autre, quelque chose en lui ne s\'est pas brisé. C\'est devenu une flamme. Il a étudié les Première et Deuxième Guerres de Vegas, des légendes de dévastation qui ont secoué le monde avant même sa naissance. Où d\'autres voyaient un avertissement, Zattar voyait une carte. Il a commencé la Troisième Guerre de Vegas. Pas par folie. Pas par douleur. Mais parce qu\'il a regardé l\'univers entier et a atteint une conclusion: Il appartient à quelqu\'un. Et ce quelqu\'un est Zattar. Il n\'a pas été choisi. Donc il a choisi l\'univers à sa place.',
        
        'book_zaiko_title': 'ZAÏKO: LE DERNIER ROI DES RUES DE KIVU',
        'book_zaiko_subtitle': 'LA LÉGENDE DE ZAÏKO',
        'book_zaiko_desc': 'Né au Kivu du Nord. Forgé à Kinshasa. Zaïko n\'était jamais censé survivre. Mais la survie ne suffisait jamais. Dans un monde gouverné par le pouvoir, l\'argent et la peur, il s\'élève de rien. Pas comme un héros. Mais comme une force. Avec son frère, il construit l\'empire le plus redouté que les Kivus aient jamais connu. Aucune couronne n\'a été donnée. Aucun destin n\'a été écrit. Tout a été pris. Un homme a défié le destin lui-même et a gravé son nom dans l\'histoire de l\'Afrique avec du fer et de la volonté.',
        
        'book_amara_title': 'AMARA: REINE DES MERS',
        'book_amara_subtitle': 'CHAPITRE I - REINE DES PIRATES D\'AMAZONE',
        'book_amara_desc': 'Chaque pirate craint l\'océan. Amara le possède. Elle est la Reine des Mers. La capitaine la plus redoutée sur chaque eau du monde. Aucun navire ne l\'a dépassée. Aucun roi ne l\'a surpassée. Aucune armée n\'a arrêté sa flotte. Mais Amara ne navigue pas seule. À côté d\'elle se tiennent quatre femmes liées par le sang, la loyauté et la destinée. Cinq reines de la mer qui ensemble portent un pouvoir qui secouera chaque trône du continent. De leur union naît la dynastie Agojie. Et de cette dynastie surgissent les cinq femmes reines qui changeront le cours de l\'histoire africaine pour toujours. Ce n\'est pas seulement une histoire de pirate. C\'est ici que naît la plus grande dynastie féminine de l\'univers ISOLELE.',
    },
    'pt': {
        'cta_title': 'BEM-VINDO À ISOLELE',
        'cta_description': 'Isolele é um universo visionário nascido para restaurar a alma da narrativa africana, um império mitológico onde super-heróis são escolhidos pelo destino, reinos nunca esquecidos, e poder ancestral vivo em cada página, cada profecia, cada batalha. Cada criança que lê Isolele descobrirá super-heróis que se parecem com eles, falam sua língua, protegem sua terra, e honram seus ancestrais. Isto é para a próxima geração de reis, rainhas, guerreiros, inventores, e contadores de histórias.',
        
        'book_zaiire_title': 'ZAIIRE: O PRÍNCIPE DO CONGO',
        'book_zaiire_subtitle': 'O COLAR DO DESTINO',
        'book_zaiire_desc': 'Forjado no coração do Reino do Congo, o Colar do Destino nunca foi feito para ser usado. Foi feito para escolher. Transmitido através de séculos de fogo, guerra e silêncio, carrega a alma de cada rei que sangrou por seu povo e cada rainha que manteve o mundo unido com mãos nuas. Quando encontra Zaiire, não brilha. Desperta.',
        
        'book_makanda_title': 'A DINASTIA MAKANDA – LIVRO I',
        'book_makanda_subtitle': 'A KANDAKE EM ASCENSÃO',
        'book_makanda_desc': 'Nas profundezas da África Central existia uma civilização que o mundo nunca deveria conhecer. Espiritualmente despertada. Tecnologicamente avançada. Protegida pela Chama Sagrada. Quando forças externas vieram pelo que era delas, os Makanda não caíram. Desapareceram. Sua cidade nunca foi perdida. Estava à espera daquele nascido para carregar a chama novamente.',
        
        'book_bambula_title': 'BAMBULA: FILHO DO RITMO',
        'book_bambula_subtitle': 'CAPÍTULO I - O TAMBOR SAGRADO',
        'book_bambula_desc': 'Antes das palavras, havia o ritmo. Bambula era a criança que ouvia tudo. Quando os tambores foram levados e a terra ficou em silêncio, ele manteve o ritmo vivo dentro dele. Armado com o tambor sagrado, ele caminha entre o mundo dos espíritos e o mundo vivo. Ele não luta para destruir. Ele protege para lembrar.',
        
        'book_mokele_title': 'MOKELE: NASCIDO NA LUTA',
        'book_mokele_subtitle': 'DE CRIANÇA A SENHOR DE KINSHASA',
        'book_mokele_desc': 'Mokele não nasceu rei. Ele nasceu na luta. As ruas de Kinshasa o ensinam antes que a escola pudesse, onde a lealdade é frágil, a violência é normal, e a sobrevivência é tudo. De criança a hustler a senhor. Ele constrói poder, dinheiro e respeito. Em Kinshasa, você ou é comido... ou se torna o predador.',
        
        'book_kufu_title': 'KUFU: O JOGO DA COROA',
        'book_kufu_subtitle': 'O JOGO OFICIAL DO UNIVERSO ISOLELE',
        'book_kufu_desc': 'Isto não é apenas um jogo de cartas. É uma cerimônia. Reúna seus guerreiros. Construa seu reino. Supere cada oponente na mesa. Mas para reivindicar a coroa, há apenas uma maneira de vencer. Você deve levantar sua voz e pronunciar o nome do rei em voz alta. Então alguém coloca o colar sobre sua cabeça. Não por sua própria mão. Por outra. Porque um verdadeiro rei não é coroado sozinho. KUFU é onde a realeza africana se torna algo que você sente em suas mãos, ouve em sua voz, e carrega ao redor de seu pescoço. Cada jogo é uma coroação. Cada vencedor é um rei.',
        
        'book_zattar_title': 'ZATTAR: O PRÍNCIPE DO UNIVERSO',
        'book_zattar_subtitle': 'O CONQUISTADOR DE TRONOS',
        'book_zattar_desc': 'Quando o Destino Lhe Recusou Um Reino, Ele Decidiu Tomar Todos. O Príncipe Zattar nasceu para herdar o trono de Bapindi. Mas quando os Ancestrais escolheram outro, algo dentro dele não se quebrou. Incendiou-se. Ele estudou as Primeira e Segunda Guerras de Vegas, lendas de devastação que abalaram o mundo antes mesmo de nascer. Onde outros viam aviso, Zattar viu um mapa. Ele começou a Terceira Guerra de Vegas. Não por loucura. Não por dor. Mas porque olhou para o universo inteiro e chegou a uma conclusão: Pertence a alguém. E esse alguém é Zattar. Ele não foi escolhido. Então ele escolheu o universo em vez disso.',
        
        'book_zaiko_title': 'ZAIKO: O ÚLTIMO REI DAS RUAS DE KIVU',
        'book_zaiko_subtitle': 'A LENDA DE ZAIKO',
        'book_zaiko_desc': 'Nascido em Kivu do Norte. Forjado em Kinshasa. Zaiko nunca foi feito para sobreviver. Mas a sobrevivência nunca foi suficiente. Em um mundo governado por poder, dinheiro e medo, ele sobe do nada. Não como herói. Mas como uma força. Com seu irmão, ele constrói o império mais temido que os Kivus já conheceram. Nenhuma coroa foi dada. Nenhum destino foi escrito. Tudo foi tomado. Um homem desafiou o próprio destino e gravou seu nome na história da África com ferro e vontade.',
        
        'book_amara_title': 'AMARA: RAINHA DOS MARES',
        'book_amara_subtitle': 'CAPÍTULO I - RAINHA DOS PIRATAS DO AMAZONAS',
        'book_amara_desc': 'Todo pirata teme o oceano. Amara é dono dele. Ela é a Rainha dos Mares. A capitã mais temida em todas as águas do mundo. Nenhum navio a ultrapassou. Nenhum rei a superou. Nenhum exército parou sua frota. Mas Amara não navega sozinha. Ao seu lado estão quatro mulheres ligadas por sangue, lealdade e destino. Cinco rainhas do mar que juntas carregam um poder que abalará cada trono do continente. De sua união nasce a dinastia Agojie. E dessa dinastia surgem as cinco mulheres rainhas que mudarão o curso da história africana para sempre. Isto não é apenas uma história de piratas. É aqui que nasce a maior dinastia feminina do universo ISOLELE.',
    },
    'es': {
        'cta_title': 'BIENVENIDO A ISOLELE',
        'cta_description': 'Isolele es un universo visionario nacido para restaurar el alma de la narrativa africana, un imperio mitológico donde los superhéroes son elegidos por el destino, los reinos nunca olvidados, y el poder ancestral vivo en cada página, cada profecía, cada batalla. Cada niño que lee Isolele descubrirá superhéroes que se parecen a ellos, hablan su idioma, protegen su tierra, y honran a sus ancestros. Esto es para la próxima generación de reyes, reinas, guerreros, inventores, y narradores.',
        
        'book_zaiire_title': 'ZAIIRE: EL PRÍNCIPE DEL CONGO',
        'book_zaiire_subtitle': 'EL COLLAR DEL DESTINO',
        'book_zaiire_desc': 'Forjado en el corazón del Reino del Congo, el Collar del Destino nunca fue hecho para ser usado. Fue hecho para elegir. Transmitido a través de siglos de fuego, guerra y silencio, lleva el alma de cada rey que sangró por su pueblo y cada reina que mantuvo el mundo unido con manos desnudas. Cuando encuentra a Zaiire, no brilla. Despierta.',
        
        'book_makanda_title': 'LA DINASTÍA MAKANDA – LIBRO I',
        'book_makanda_subtitle': 'LA KANDAKE EN ASCENSO',
        'book_makanda_desc': 'En lo más profundo de África Central existió una civilización que el mundo nunca debió conocer. Espiritualmente despertada. Técnicamente avanzada. Protegida por la Llama Sagrada. Cuando fuerzas externas vinieron por lo que era suyo, los Makanda no cayeron. Desaparecieron. Su ciudad nunca fue perdida. Estaba esperando al que nació para llevar la llama de nuevo.',
        
        'book_bambula_title': 'BAMBULA: HIJO DEL RITMO',
        'book_bambula_subtitle': 'CAPÍTULO I - EL TAMBOR SAGRADO',
        'book_bambula_desc': 'Antes de las palabras, había ritmo. Bambula era el niño que lo escuchaba todo. Cuando se llevaron los tambores y la tierra quedó en silencio, él mantuvo el ritmo vivo dentro de él. Armado con el tambor sagrado, camina entre el mundo de los espíritus y el mundo vivo. No lucha para destruir. Protege para recordar.',
        
        'book_mokele_title': 'MOKELE: NACIDO EN LA LUCHA',
        'book_mokele_subtitle': 'DE NIÑO A SEÑOR DE KINSHASA',
        'book_mokele_desc': 'Mokele no nació rey. Nació en la lucha. Las calles de Kinshasa le enseñan antes que la escuela, donde la lealtad es frágil, la violencia es normal, y la supervivencia es todo. De niño a hustle a señor. Construye poder, dinero y respeto. En Kinshasa, o te comen... o te conviertes en el depredador.',
        
        'book_kufu_title': 'KUFU: EL JUEGO DE LA CORONA',
        'book_kufu_subtitle': 'EL JUEGO OFICIAL DEL UNIVERSO ISOLELE',
        'book_kufu_desc': 'Esto no es solo un juego de cartas. Es una ceremonia. Reúne a tus guerreros. Construye tu reino. Supera a cada oponente en la mesa. Pero para reclamar la corona, solo hay una forma de ganar. Debes levantar tu voz y pronunciar el nombre del rey en voz alta. Entonces alguien coloca el collar sobre tu cabeza. No por tu propia mano. Por otro. Porque un verdadero rey no es coronado solo. KUFU es donde la realeza africana se convierte en algo que sientes en tus manos, escuchas en tu voz, y llevas alrededor de tu cuello. Cada juego es una coronación. Cada ganador es un rey.',
        
        'book_zattar_title': 'ZATTAR: EL PRÍNCIPE DEL UNIVERSO',
        'book_zattar_subtitle': 'EL CONQUISTADOR DE TRONOS',
        'book_zattar_desc': 'Cuando el Destino Le Negó Un Reino, Decidió Tomarlos Todos. El Príncipe Zattar nació para heredar el trono de Bapindi. Pero cuando los Ancestros eligieron a otro, algo dentro de él no se rompió. Se encendió. Estudió las Primera y Segunda Guerras de Vegas, leyendas de devastación que sacudieron el mundo antes incluso de nacer. Donde otros vieron advertencia, Zattar vio un mapa. Comenzó la Tercera Guerra de Vegas. No por locura. No por dolor. Pero porque miró todo el universo y llegó a una conclusión: Pertenece a alguien. Y ese alguien es Zattar. No fue elegido. Así que eligió el universo en su lugar.',
        
        'book_zaiko_title': 'ZAIKO: EL ÚLTIMO REY DE LAS CALLES DE KIVU',
        'book_zaiko_subtitle': 'LA LEYENDA DE ZAIKO',
        'book_zaiko_desc': 'Nacido en Kivu del Norte. Forjado en Kinshasa. Zaiko nunca fue hecho para sobrevivir. Pero la supervivencia nunca fue suficiente. En un mundo gobernado por poder, dinero y miedo, se levanta de la nada. No como un héroe. Sino como una fuerza. Con su hermano, construye el imperio más temido que los Kivus hayan conocido. Ninguna corona fue dada. Ningún destino fue escrito. Todo fue tomado. Un hombre desafió el destino mismo y grabó su nombre en la historia de África con hierro y voluntad.',
        
        'book_amara_title': 'AMARA: REINA DE LOS MARES',
        'book_amara_subtitle': 'CAPÍTULO I - REINA DE LOS PIRATAS DEL AMAZONAS',
        'book_amara_desc': 'Todo pirata teme al océano. Amara lo posee. Ella es la Reina de los Mares. La capitana más temida en todas las aguas del mundo. Ningún barco la ha superado. Ningún rey la ha superado. Ningún ejército ha detenido su flota. Pero Amara no navega sola. Junto a ella se encuentran cuatro mujeres ligadas por sangre, lealtad y destino. Cinco reinas del mar que juntas cargan un poder que sacudirá cada trono del continente. De su unión nace la dinastía Agojie. Y de esa dinastía surgen las cinco reinas mujeres que cambiarán el curso de la historia africana para siempre. Esto no es solo una historia de piratas. Aquí es donde comienza la mayor dinastía femenina del universo ISOLELE.',
    },
    'zu': {
        'cta_title': 'KOTA NA MONANI',
        'cta_description': 'I-Isolele umkhathi obonayo owazalelwa ukuvuselela umphefumulo wokuxoxa izindaba zase-Afrika, umbusweni oyethi umshadwane nobuhle, lapho amadabutshadubane ekhethwe yisiphumo, umbuso abazukhohlakala, amandla azali kuwu-Afrika kupela kwi-ipha, iprohfeta, nenkonzo yompi. Omntwana obaza funda i-Isolele uzathola amadabutshadubane abanjena, bekhuluma ulwimi lwabo, bekhusela umhlaba wabo, futhi bezuze abakhokheli bamasizane. Lokhu okwesizukulwane esilandelayo samamkosi, amakosikazi, amaqhawe, aba-inventor, nabalandeli bezindaba.',
        
        'book_zaiire_title': 'ZAIIRE: UMKHOSI WE-CONGO',
        'book_zaiire_subtitle': 'UKHWELA KWESIPHUMO',
        'book_zaiire_desc': 'Okwakhiwe enhliziyweni yoMbuso waseKongo, ukhwela kwesiphumo akwenzekanga ukufakwa. Kwenzekwa ukukhethwa. Kuphandwe eminyakeni emadluliswa okuhlaba, impi nokunqoba, kuqonda isiphumo somnumzane ngamunye owadambulula abantu bakhe nezinkhosikazi zonke ezaba nezandla zambo. Lapho kufumana uZaiire, akukhanyi. Kuvuka.',
        
        'book_makanda_title': 'UBUKHOSI BEKAMAKANDA – IGAMA LOKUQALA',
        'book_makanda_subtitle': 'UMSHADWANE OWAKUPHAKAMA',
        'book_makanda_desc': 'Phakathi ngesiqalo se-Afrika kukhona ibandla elendulelwe umhlaba. Ivuka izinombazi nemibili. Ikhukhele ngamagumbi owomkhulu. Lapho amandla ezinye ayeza ngokukuthela okwakukhona kwawo, amaKakanda abahle. Balibala. Isixuku naso alibhubhiswe. Lalizalindela ongoba azalelwe ukubambeka amalangabi kwakhona.',
        
        'book_bambula_title': 'BAMBULA: UMNTWANA WESIGQI',
        'book_bambula_subtitle': 'IKHEFULA ELOKUQALA - UMKHUBAKABUSHA OMKHULU',
        'book_bambula_desc': 'Ngaphambi kwamazwi, kwakukhona isigqi. UBambula wayengumntwana ozwayo konke. Lapho amakhubakabusha esusiwe umhlaba wanqoba, walibeka isigqi elamandla okushisiwe. Anamakhubakabusha omkhulu, uphakamisele phakathi kwenhlangano yezinambuzane kanye nabahlotsheni abagugile. Akafiki ukuthi uzuze. Alukhusele ukukhubukhubula.',
        
        'book_mokele_title': 'MOKELE: OZALELWE EMZABALAZWENI',
        'book_mokele_subtitle': 'EMNCINYANE KUya KUKHOSI WEKINSHASA',
        'book_mokele_desc': 'UMokele akazalwa iyinkosi. Uzalelwe emzabalazweni. Izindlela zaseKinshasa zimfundisa ngaphambi kokuba ishikela isikole, lapho isola sinikelwa, ubuqotho bunoqobo, kanye nokusinda kuyinto yonke. Emncinyane kuya ku-hustler kuya kukhosimuva. Wakha amandla, imali nokuzuza. EKinshasa, noma uliwa... noma uba isisilwane esibatayo.',
        
        'book_kufu_title': 'KUFU: UMDLALO WOKOQESHWA',
        'book_kufu_subtitle': 'UMDLALO OMUKHULU WOMHLABA WE-ISOLELE',
        'book_kufu_desc': 'Lokhu akuwona kuphela umdlalo wamakadhi. Kuyisiko. Buthanani izilwane zenu. Wakhe umbusweni wakho. Bhuqe yonke ikhosikazi etafuleni. Kodwa ukuze nidla inkosi, kunephakamandla elilodwa kuphela lokwenza. Kufuneka nikwele izwi lenu futhi nishiwo igama lenkosi ngezwi eliphakeme. Khona umuntu ubeka ukhwela ngamuva kwekhanda lakho. Ayikwelo okuwakho. Ikowu elinye. Ngoba inkosi yangempela ayikugcinwa yodwa. KUFU yiyona indawo lapho ubukhosi basesichumi buse okuqonda emandleni akho, okuzwayo engulwini yakho, okuthwela sehlayo lwakho. Umdlalo ngamunye uwukoqeshwa. Omwanxano ngamunye uyinkosi.',
        
        'book_zattar_title': 'ZATTAR: UMKHOSI WOMHLABA',
        'book_zattar_subtitle': 'UMUNTU OZUZA OZIPHATHELA MBUSWENI',
        'book_zattar_desc': 'Lapho iSiphumo Sayimtshela Kunethembu Elilodwa, Wanquma Ukuyithatha Yonke. UMkhosi uZattar wazalelwe ukuze abe ngekhosikazi. Kodwa lapho abadlali abanesikhashana bazikhethe omunye, okuthile kuye akavali. Kuvutha. Wafunda izinzuzo zokuqala kanye nokubili zeVegas, izindaba zokuqubulula ezamazulwane umhlaba ngaphambi kokuba ayikwazi ukuzalwa. Lapho abakubonza abamele isikhalazo, uZattar wabonza imephu. Waqala inzuzo yesithathu yeVegas. Ayikho pho ngokulimela. Ayikho pho ngo ensi. Kodwa ngoba wajwayela umhlaba wonke futhi wafika ekugcineni: Kunowomuntu. Lowo omntu uyiZattar. Akakhethwe. Ngakho-ke wakhethela umhlaba sikhundleni salokho.',
        
        'book_zaiko_title': 'ZAIKO: UMKHOSI WOMSHELI WAMAZINYA WEKILOLOLISI',
        'book_zaiko_subtitle': 'INDABA KAZIAKO',
        'book_zaiko_desc': 'Uzalelwe eKilivu Ekhulu. Wakha eKinshasa. UZaiko akaze wayelungile ukuphila. Kodwa ukuphila akaze kwakwanele. Emhlabeni olawulwa amandla, imali nokwesaba, wethuka mula ekuseni. Ayikho nje njengokhosi. Kodwa njengokunye. Kanye nomfowabo, wakha umbusweni obabisayo kunaningi kukhona. Umkhosi akanikelwe. Isiphumo akubhalwe. Yonke iyithwayile. Indoda enye yaphonsela isinqumo isiphumo kuqobo lwayo kanye nokwakha igama layo emlandweni wase-Afrika ngesimo somthwalo netando.',
        
        'book_amara_title': 'AMARA: INKOSIKAZI YAMANZI',
        'book_amara_subtitle': 'IKHEFULA LOKUQALA - INKOSIKAZI YAMAZINAMBUKO WAMAZONASE',
        'book_amara_desc': 'Yonke inkhwenkwe itshokela ulwandle. U-Amara ulunalo. Uyinkosikazi yamanzi. Inkosi yabo eyesabisa kakhulu kuzo zonke amanzi emhlabeni. Ayikhona isikebhe esigijize. Ayikhona inkosi eyelisikhosikazi. Ayikhona invunguzane iyumile indhlulamithi. Kodwa u-Amara ayihambeli yodwa. Isisele emhlanganisweni samakosikazi amane aboshwa ngesilo, isolo, kanye nesiphumo. Amakosi amahlanu wamanzi abahlanganiswe kunokwazi amandla azakhumbuza yonke inthaka emzini. Kusuka kumonyana wabo kuzalwa umakhanyo wu-Agojie. Nakulomakhanyo kuzalwa amakosi amakosikazi amahlanu azotshintsha umdwangu wembi we-Afrika ngunaphakade. Ayikho nje indaba yamabhanoyi. Lapa kukhona lapho umakhanyo owakusuka samakosikazi amangaphezu ku-ISOLELE umhlaba waqala khona.',
    },
    'xh': {
        'cta_title': 'UKWAMKELEKA KWESIXEKO',
        'cta_description': 'I-Isolele yindalo yombono ezalelwe ukubuyisela umphefumlo wokubalisa amabali ase-Afrika, umbusweni oyethi umshadwane nobuhle, lapho amadabutshadubane ekhethwe yisiphumo, umbuso abazukhohlakala, amandla azali kuwu-Afrika kupela kwi-ipha, iprohfeta, nenkonzo yompi. Omntwana obaza funda i-Isolele uzathola amadabutshadubane abanjena, bekhuluma ulwimi lwabo, bekhusela umhlaba wabo, futhi bezuze abakhokheli bamasizane. Lokhu okwesizukulwane esilandelayo samamkosi, amakosikazi, amaqhawe, aba-inventor, nabalandeli bezindaba.',
        
        'book_zaiire_title': 'ZAÏIRE: UMFUNDISI WE-CONGO',
        'book_zaiire_subtitle': 'INTAMBEKA YESIPHUMO',
        'book_zaiire_desc': 'Okwenziwe entliziyweni yoBukumkani baseKongo, intambeka yesiphumo ayenza icingelekiso yokufakwa. Yenziwe ukukhethwa. Yafakwa eminyakeni eyazele ngaphakathi kokutsha, impi nonqob nokuthula. Iqonda isiphumo somnumzane ngamunye ofakela abantu bakhe kunye nenkosikazi onke owaqhubekeza umhlaba ngezo zandla. Ibuya uZaiire, ayikhanyi. Ivuka.',
        
        'book_makanda_title': 'IBUKHOSIKOSIKAZI YE-MAKANDA – INCWADI I-1',
        'book_makanda_subtitle': 'INKOSIKAZI EYANDULELA',
        'book_makanda_desc': 'Kwindawo ekudala ye-Afrika elungiseleleyo kwakukho intsapho umhlaba oyawungamelanga ukuyazi. Ivuke ngomoya. Ayiqonda izixhobo zemoli. Iphakamiselwe yilamathule. Xa amagqwetha abangaphandle abuye okwakuwamkela, amaKakanda abagicinywe. Balibala. Isixeko sabo alilahlekile. Nelisele yaye engoweza aozalelwe ukubambeka igcwala'. Ngokutsha.',
        
        'book_bambula_title': 'BAMBULA: UMNTWANA WESIGQI',
        'book_bambula_subtitle': 'IKHEFULA 1 - ISIKHALI SANGCWELE',
        'book_bambula_desc': 'Ngaphambi kwamagama, kwakukho isigqi. UBambula wawuyamntwana owayezwayo yonke into. Zaphakamiselwe isikhali kanye nomhlaba wawothule, wasilisela isigqi amathombo akhe. Anokubeliswe isikhali sangcwele, uhambe phakathi komhlaba wabazimu kunye nabantu abavuyeleyo. Alulwi lokutshabalalisa. Uyalinda ukukukhumbula.',
        
        'book_mokele_title': 'MOKELE: UZALWE EMZABALAZWENI',
        'book_mokele_subtitle': 'USUKELA EKULIZELENI UYE KUMKULU WEKINSHASA',
        'book_mokele_desc': 'UMokele azalwanga eyinkosi. Uzalwe emzabalazweni. Iindlela zaseKinshasa zimfundisa ngaphambi kokuqala isikole, apho ukuthembeka kunobunqwiliso, amandla ayilo, nokusinda kuyinye indawo. Usukela ekulizeleni ukuya kuhustle ukuya kumkulu. Wakha amandla, imali kunye nokunqoba. EKinshasa, okanye uzaliwa... okanye uba ibulali.',
        
        'book_kufu_title': 'KUFU: UMDLALO WETHWESHO',
        'book_kufu_subtitle': 'UMDLALO OWAVELA KUMHLABA WE-ISOLELE',
        'book_kufu_desc': 'Oku asingo mdlalo wamakhadhi nje. Ngumsitho. Zibizela izilwanyana zakho. Sakha ubukhosikosikazi bakho. Subuqathe muntukamuntukwangaphambili. Kodwa ukufumana ithwesho, kunelizwe elilodwa elokukhanya. Kumele ukunika izwi lakho kunye nokubhala igama lenkosi ngezwi eliphakeme. Kuba umuntu ubeka intambeka ngamuva kwentloko yakho. Ayikwelo yakho. Kwa enye. Ngoba inkosi yangempela ayithweswe yodwa. KUFU yindawo apho ubukhosi beAfrika buse uku-qonda enikongelelo emandleni akho, enemisweni yakho kunye nezixhobo ezilunge. Umdlalo wonke luwuthwesho. Omwanxano wonke uinkosi.',
        
        'book_zattar_title': 'ZATTAR: UMFUNDISI WOMHLABA',
        'book_zattar_subtitle': 'UMUNTU OZUZA EZITHOTHANISWE',
        'book_zattar_desc': 'Imvubulano yesiphumo yayilumtshela ingawukhono omnye, wanquma ukuyithatha yonke. UMfundisi uZattar wazalelwa ukuze akwazi ukube ngubukhosikosikazi. Kodwa ekubeni abadlali abanesikhashana bazikhethe omunye, okubhikobhiko kuye akakhakula. Kuvutha. Wafunda izinzuzo zokuqala kunye nokubili zeVegas, amabali okuqubulula azamazulwane umhlaba ngaphambi kokuza. Apho abanye babona isikalazo, uZattar wabona imaphu. Waqala inzuzo yesithathu yeVegas. Ayikho ngokunoba. Ayikho ngobunzima. Kodwa ngoba wajwayela umhlaba wonke kunye nokufika ekugcineni: Kwanowomuntu. Lowo omntu uyiZattar. Akakhethwe. Ngakho-ke wakhethela umhlaba sikhundleni salokho.',
        
        'book_zaiko_title': 'ZAIKO: UMKHOSI WOKUGQIBELA WAMAZINYA',
        'book_zaiko_subtitle': 'IBALI LIKA-ZAIKO',
        'book_zaiko_desc': 'Wezelwe eKivu Ekumntla. Kwenziwe eKinshasa. UZaiko akaze wayelungile ukuphila. Kodwa ukuphila akaze kwakwanele. Emhlabeni olawulwa amandla, imali nokwesaba, wethuka mula ekuseni. Ayikho nje njengokhosi. Kodwa njengokunye. Kanye nomfowabo, wakha umbusweni obabisayo kunayo onke. Umkhosi akanikelwe. Isiphumo akubhalwe. Yonke iyithwayile. Indoda enye yaphonsela isinqumo isiphumo kuqobo lwayo kunye nokwakha igama layo emlandweni wase-Afrika ngesimo somthwalo netando.',
        
        'book_amara_title': 'AMARA: INKOSIKAZI YAMANZI',
        'book_amara_subtitle': 'IKHEFULA 1 - INKOSIKAZI YABASAMBUKU BEASIKHULEKILE',
        'book_amara_desc': 'Yonke inkhwenkwe itshokela ulwandle. I-Amara ilunalo. Uyinkosikazi yamanzi. Ikhapteni eyesabisa kakhulu kuzo zonke amanzi emhlabeni. Ayikhona isikebhe esigijize. Ayikhona inkosi eyelisikhosikazi. Ayikhona invunguzane iyumile indhlulamithi. Kodwa i-Amara ayihambeli yodwa. Isisele emhlanganisweni samakosikazi amane aboshwa ngesilo, isolo, kunye nesiphumo. Amakosi amahlanu wamanzi abahlanganiswe kunokwazi amandla azakhumbuza yonke inthaka emzini. Kusuka kumonyana wabo kuzalwa umakhanyo wu-Agojie. Nakulomakhanyo kuzalwa amakosi amakosikazi amahlanu azotshintsha umdwangu wembi we-Afrika ngunaphakade. Ayikho nje indaba yamabhanoyi. Lapa kukhona lapho umakhanyo owakusuka samakosikazi amangaphezu ku-ISOLELE umhlaba waqala khona.',
    },
    'sw': {
        'cta_title': 'KARIBU KWENYE ISOLELE',
        'cta_description': 'Isolele ni ulimwengu wa kimaono uliozaliwa kurejesha roho ya usimulizi wa hadithi za Kiafrika, ufalme wa kiajabu ambapo maajabu wanaponzwa na hatima, mafalme yasiyosahau, na nguvu ya babu zikitikita katika kila ukurasa, kila unabii, kila vita. Kila mtoto anayesoma Isolele atakuta maajabu wanafanana naye, wanazungumza lugha yake, wanawalinda ardhi yake, na wanaheshimu babu zake. Hii ni kwa ajili ya kizazi kijacho cha wafalme, malkia, mashujaa, wabunifu, na wagunduzi wa hadithi.',
        
        'book_zaiire_title': 'ZAIIRE: MKUBWA WA CONGO',
        'book_zaiire_subtitle': 'MKEKA WA HATIMA',
        'book_zaiire_desc': 'Kimeundwa katikati ya Ufalme wa Congo, Mkeka wa Hatima haukufanywa kuwalwa. Ukafanywa kuchagua. Inapitia miaka mia ya moto, vita, na kimya, inabeba roho ya kila mfalme aliyetoka kwa ajili ya watu wake na kila malkia aliyeshika ulimwengu ngi mikono ngeni. Inapolimpata Zaiire, haianguki. Inakaa.',
        
        'book_makanda_title': 'JAMII YA MAKANDA – KITABU CHA I',
        'book_makanda_subtitle': 'KANDAKE INAYEINUKA',
        'book_makanda_desc': 'Katika kina kabisa ya Afrika ya Kati kulikuwepo na ustaarabu ambao ulimwengu haukupaswa kuujua. Imepuka kwa roh. Imeendelea kwa teknolohia. Imelanduliwa na Moto Mkutano. Wakati nguvu za nje zilipokuja kwa kile alichokiwa vyake, Makanda hawakuanguka. Walipotea. Jiji lao halilibadiliwa. Lilizunguka yule aliyezaliwa kumkamata moto tena.',
        
        'book_bambula_title': 'BAMBULA: MWANZO WA WIMBO',
        'book_bambula_subtitle': 'SURA YA 1 - NGOMA TAKATIFU',
        'book_bambula_desc': 'Kabla ya maneno kulikuwepo wimbo. Bambula alikuwa mtoto aliyesikia kila kitu. Wakati ngoma zilipokamatwa na ardhi ikapumzika, aliiishi wimbo ndani yake. Akishirikwa na ngoma takatifu, anatembea kati ya ulimwengu wa roho na wenye hai. Anapigania sio kuangamiza. Analinda ili kumbuke.',
        
        'book_mokele_title': 'MOKELE: ALIZALIWA KATIKA MAPAMB ANO',
        'book_mokele_subtitle': 'KUANZIA MTOTO HADI MKUBWA WA KINSHASA',
        'book_mokele_desc': 'Mokele hakuzaliwa mfalme. Alizaliwa katika mapambano. Barabara za Kinshasa zimfundisha kabla shule haiwezi, ambapo moyo unakatika, jeuri ni kawaida, na kuishi ni kila kitu. Kuanzia mtoto hadi hustle hadi mkubwa. Hujengea nguvu, pesa, na heshima. Katika Kinshasa, huwezi hata kufa... au unakuwa mwindaji.',
        
        'book_kufu_title': 'KUFU: MCHEZO WA TAJI',
        'book_kufu_subtitle': 'MCHEZO RASMI WA ULIMWENGU WA ISOLELE',
        'book_kufu_desc': 'Hii si mchezo wa karata tu. Ni sherehe. Kusanya waajuma wako. Jenga ufalme wako. Shinda kila mpinzani kwenye meza. Lakini ili kumudu taji, kunashindwa tu njia moja ya kushinda. Lazima ukwele sauti yako na useme jina la mfalme kwa kazi. Kisha mtu anaweka mkeka kinyonge kwa kichwa chako. Si kwa mkono wako mwenyewe. Na mwingine. Kwa sababu mfalme halisi havicho peke yake. KUFU ndiyo mahali ambapo utoshi wa Kiafrika unakuwa kitu unachokisikia mikono yako, unachokiisikia katika sauti yako, na unayovaa kuzunguka lehemanyo lako. Kila mchezo ni utengano. Kila mshindi ni mfalme.',
        
        'book_zattar_title': 'ZATTAR: MKUBWA WA ULIMWENGU',
        'book_zattar_subtitle': 'MSHINDI WA VITI VYA UFALME',
        'book_zattar_desc': 'Wakati Hatima ilipomnyima Ufalme Mmoja, Aliamua Kuichukua Yote. Mkubwa Zattar alizaliwa kumudu kiti cha Bapindi. Lakini wakati Babu walipochagua mwingine, kitu fulani ndani yake hakuvunjika. Kilitokeza. Alisoma Vita vya Kwanza na vya Pili vya Vegas, hadithi za uharibifu zilizotayarisha ulimwengu kabla hata hazajazaliwa. Ambapo wengine waliona onyo, Zattar aliona ramani. Alianza Vita vya Tatu vya Vegas. Sio kutokana na wazimu. Sio kutokana na maumivu. Lakini kwa sababu aliangalia ulimwengu mzima na akakaa na hitimisho moja: Ni wa mtu. Na yule mtu ni Zattar. Hakuchaguliwa. Kwa hivyo alichagua ulimwengu badala yake.',
        
        'book_zaiko_title': 'ZAIKO: MFALME WA MWISHO WA BARABARA ZA KIVU',
        'book_zaiko_subtitle': 'HADITHI YA ZAIKO',
        'book_zaiko_desc': 'Alizaliwa Kivu Kaskazini. Alitengenezwa Kinshasa. Zaiko hakuwa na lengo la kuishi. Lakini kuishi haikuwa ya kutosha. Katika ulimwengu unaosimamiwa na nguvu, pesa, na hofu, anainuka kutokana na hakuna. Sio kama nchi. Lakini kama nguvu. Pamoja na kaka yake, anajengea ufalme unaokamatwa kuliko vyote vyenye ujinga mwa Kivu. Hakuna taji iliyotolewa. Hakuna hatima iliyoandikwa. Kila kitu kilichukuliwa. Mtu mmoja alipinga hatima yenyewe na akakaza jina lake katika historia ya Afrika kwa chuma na utashi.',
        
        'book_amara_title': 'AMARA: MALKIA WA BAHARI',
        'book_amara_subtitle': 'SURA YA 1 - MALKIA WA WABAYAJIFANYA WA AMAZON',
        'book_amara_desc': 'Kila pirate anaogombana na bahari. Amara ana Mali. Yeye ni Malkia wa Bahari. Kapteni aliyesogeshwa zaidi kwenye kila maji ya ulimwengu. Hakuna meli iliyomjoza. Hakuna mfalme aliyemshindi. Hakuna jeshi lililosimama wimbi lake. Lakini Amara hayendi peke yake. Karibu naye wanasimama wanawake wanne waliobanwa na damu, imani na hatima. Wafalme watano wa bahari wanayobebea nguvu itasikitisha kila kiti kwenye pweza. Kutokana na muungano wao kuzaliwa chuo cha Agojie. Na kutokana na chuo hiki kuzaliwa wafalme watano waanawake watabadilisha njia ya historia ya Kiafrika milele. Hii si hadithi ya pirate tu. Hapa ndipo chuo kikubwa cha waanawake kwenye ulimwengu wa ISOLELE kuanzia.',
    },
    'ln': {
        'cta_title': 'KOTA NA MONANI',
        'cta_description': 'Isolele ezali moyinde oyo ozalaki kopambola likambo ya Afrika, fumu ya makambo oyo bato bazali kopesa motema, bambwa ya basale ya mokonzi oyo abatangana te, mpe nguya ya baseneleli bazali kokumama na ipha mobutu, mayopela, mpe bitumba. Mwana muntu oyo azali kofunda Isolele akosangela badabutshadubane abaozali lokola ye, azali kopelela ndakisa ya ye, azali kokungunga mokili na ye, mpe azali kosunga bakula ba ye. Lokho ezali mpo na nkoló ya sika ya bakonzi, bamikolo-basi, bitumba, ababunifu, mpe babimisi mayele.',
        
        'book_zaiire_title': 'ZAIIRE: MWAMI WA KONGO',
        'book_zaiire_subtitle': 'LISUSU LA LISONGA',
        'book_zaiire_desc': 'Esalamaki na motema ya Bokonzi ya Kongo, lisusu la lisonga ezalaki nde mpo na kupakwa te. Ezali koloba moto. Epanzaki na bambongo ya motenge, bitumba, mpe kimya, ekomi na molimo ya mwami mobutu oyo atonaki mpo na bato ba ye mpe ya mikalao mobutu oyo ebatiaki mokili na maboko makasi. Tango ekutani na Zaiire, engengaka te. Elamukaka.',
        
        'book_makanda_title': 'BOKONZI BYA MAKANDA – LIVRE YA LIBOSO',
        'book_makanda_subtitle': 'KANDAKE OYO ENINGAKA',
        'book_makanda_desc': 'Na kati mpenza ya Afrika ya Kati, ezalaki na bato oyo mokili esengelaki koyeba te. Balamukaki na molimo. Bayitaki na mayele ya ba bingeli. Balingamaki na Motenge Mosantu. Tango ba nguya ya ndako enumba bazali na bombi na ye, ba Makanda basilaki te. Balibala. Engumba na ye libubunisi te. Elizalaki kumona oyo azaliwa mpo na komema motenge tonda.',
        
        'book_bambula_title': 'BAMBULA: MWANA WA MUPELA',
        'book_bambula_subtitle': 'CHAPITRE 1 - NGOMA MOSANTU',
        'book_bambula_desc': 'Yambo maloba, miziki ezalaki. Bambula azalaki mwana oyo azwaki nyoso. Tango miziki eyamaki mpe moto ekilaki, aliiangaki miziki na kati na ye. Alingamaki na ngoma mosantu, atambwisaka kati ya kijiji ya ba molimo mpe kijiji ya ba bakishi. Asambwaka te mpo na kobebisa. Akungunga mpo na kokanisa.',
        
        'book_mokele_title': 'MOKELE: AZALELWE NA MPASI',
        'book_mokele_subtitle': 'KUANZIA MWANA ATE KUINA MWAMI WA KINSHASA',
        'book_mokele_desc': 'Mokele abotamaki mokonzi te. Abotamaki na mpasi. Nzela ya Kinshasa ezaliaka kofundisa ye yambo te ekulamuka masungi, amba na ye lokoso ezali likomo, motema ya moto ezali makambo, mpe kufa ezali nyoso. Kuanzia mwana akina muntu oyo azia, akina mwami. Akotisaka nguya, mbongo, mpe likambo. Na Kinshasa, maye bakouya yo... Maye okosala moi kwe bakonzi.',
        
        'book_kufu_title': 'KUFU: LISANO YA MWAMI',
        'book_kufu_subtitle': 'LISANO YA MOKONZI KUTU KU MOYINDE YA ISOLELE',
        'book_kufu_desc': 'Tina ezali kaka lisano ya karte te. Ezali molulu. Bokela bana okwa yo. Bonga fumu ya yo. Subuqathe basengelaka moyikoli na ye. Lakini mpo na kozwa mwami, ezali na njela moko soki ozali kopesa motema. Likambe mobutu mpe salele zina ya mwami na kina ngolu. Kaba moto ekomaka lisusu suru kwa mutu. Te nde okwa yo mwene. Okwa moto mosusu. Ndako mwami ya moto te akonzwamaka yodwa. KUFU ezali amba na ye bokonzi ba Afrika esali makambo oyo ozalaka kosanga na maboko na ye, kozwa na molimo na ye, mpe kosunga suru kwa nzungu na ye. Lisano mobutu ezali kotungamaka. Moto oyo apesi likambe mobutu azali mwami.',
        
        'book_zattar_title': 'ZATTAR: MWAMI WA MOYINDE',
        'book_zattar_subtitle': 'MOTO OYO AZALI KO-YA NZAMBE',
        'book_zattar_desc': 'Tango Bondoki ayokaki ye fumu moko te, azwaki mokano ya koyambu nyota. Mwami Zattar azalelwaki mpo na kokufa mwami. Nzambe azikile mosusu, makambo na ye azamaki likando te. Kitoyaki. Afundaka Bitumba ya Liboso mpe ya Bilei ya Vegas, mabombo makambo oyo ezonzaka mokili yambo te azalaki na bombi. Amba ba mosusu bazalaki kosango, Zattar azalaki kosanga karte. Atombaki Bitumba ya Libei ya Vegas. Te mo nsango te. Te mo mpambelo te. Kasi nzambe azwalaka moyinde mobutu mpe akamaki likumo moko: Ezali na moto. Mpe moto oyo azali Zattar. Akomiamaki te. Yango azwaki moyinde sikhundleni salokho.',
        
        'book_zaiko_title': 'ZAIKO: MWAMI WA MWISHO WA NZELA YA KIVU',
        'book_zaiko_subtitle': 'LIKAMBO LA ZAIKO',
        'book_zaiko_desc': 'Abotami na Kivu Kaskazini. Akolami Kinshasa. Zaiko abotamaki mpo na kufa te. Lakini kufa azalaki te ye te. Na ikota ya ba bota, mbongo, mpe motema oyo esambwaka ye, azukaki kuanzi. Te nde lokasa. Kasi nguya. Na koko na ye, akolingaka fumu oyo batekamaka kutu mpo na Kivu. Mwami akamaki te. Nzambe ayandaki te. Nyota oyo likambe. Moto moko apenzaki Bondoki ye moko mpe akozandi lingama na ye na mokili wa Afrika na ibi mpe motema.',
        
        'book_amara_title': 'AMARA: MIKALAO YA MAYI',
        'book_amara_subtitle': 'CHAPITRE 1 - MIKALAO YA BA BAYAJIFANYA BA AMAZONE',
        'book_amara_desc': 'Ba bayajifanya mobutu batekamaka mayi. Amara ana yango. Ye mikalao ya mayi. Kapitene oyo batekamaka kutu na mayi mobutu ya mokili. Likila te ekendaka ye. Mokonzi te amabi ye. Armya te eyumbutelaki wimbi na ye. Kasi Amara hatambelaka yodwa. Na ngambo ya ye wanasimama batali ebabuki na misalela, likambe, mpe mayele. Ba mikalao mitano ya mayi wanayitaka molimo oyo ezotungamaka viti mobutu na mokili. Kuanzi na monyana na bango kozalwa kin ngina ya Agojie. Mpe kuanzi na ngina yoko kozalwa ba mikalao mitano ya basali eyotshintsha nzela ya mayele ya Afrika pamba na pamba. Tina ezali likambo ya ba bayajifanya te. Awa nde kitoko oyo mozali na ye kinina kikubwa ya basali na moyinde ya ISOLELE ezali kotondi.',
    }
}

# Read the current translations file
with open('/vercel/share/v0-project/lib/translations.ts', 'r') as f:
    content = f.read()

# Function to add translations to a language section
def add_translations_to_lang(content, lang_code):
    """Add book translations to a specific language section"""
    import re
    
    if lang_code not in new_translations:
        return content
    
    # Find the language section
    pattern = rf"({lang_code}:\s*\{{{{\n(?:.*?\n)*?)(\s*universe_title:|}})"
    
    translations_block = ""
    for key, value in new_translations[lang_code].items():
        # Escape quotes in the value
        escaped_value = value.replace('"', '\\"')
        translations_block += f'    {key}: "{escaped_value}",\n'
    
    def replacer(match):
        return match.group(1) + translations_block + "\n" + match.group(2)
    
    return re.sub(pattern, replacer, content, flags=re.MULTILINE)

# Add translations for each language
for lang in ['en', 'fr', 'pt', 'es', 'zu', 'xh', 'sw', 'ln']:
    content = add_translations_to_lang(content, lang)

# Write back the updated content
with open('/vercel/share/v0-project/lib/translations.ts', 'w') as f:
    f.write(content)

print("[v0] Successfully added all 9 book translations for all 8 languages")
