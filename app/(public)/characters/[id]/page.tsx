"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/lib/theme-context"
import { useLanguage } from "@/lib/language-context"
import { ArrowLeft, Share2, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const charactersData: Record<string, any> = {
  zaire: {
    name: "ZAIÏRE",
    fullName: "Prince Zaiire of the Kongo, The Lionpard, Heir of the Storm, Son of Shango and Princess Kimoya",
    title: { en: "The Prince of Kongo", fr: "Le Prince du Kongo", pt: "O Príncipe do Congo", es: "El Príncipe del Congo", zu: "Umkosi weKongo", xh: "Umkosi weKongo", sw: "Mkosi wa Kongo", ln: "Mokonzi wa Kongo" },
    color: "#F6B800",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZAIIRE%20-%20PRINCE%20OF%20KONGO-hmOq1ET63L87xXbWVilEom8IqvT0jo.jpg",
    kingdom: { en: "Kongo/Central Africa", fr: "Kongo/Afrique Centrale", pt: "Kongo/África Central", es: "Kongo/África Central", zu: "Kongo/Ubuhlanti bweAfrika", xh: "Kongo/Ubuhlanti bweAfrika", sw: "Kongo/Afrika Kati", ln: "Kongo/Afrike Katikati" },
    species: { en: "Demi-God (Orisha-Human Hybrid)", fr: "Demi-Dieu (Hybride Orisha-Humain)", pt: "Semideus (Híbrido Orisha-Humano)", es: "Semidiós (Híbrido Orisha-Humano)", zu: "Isigqebhezelo (Isikhombandlela Orisha-Ubuntu)", xh: "Isigqebhezelo (Isikhombandlela Orisha-Ubuntu)", sw: "Nusu-Mungu (Mchanganyiko Orisha-Binadamu)", ln: "Ilombi-Nzambe (Mbambi ya Orisha-Moto)" },
    lineage: { en: "Crown Prince of Kongo; Descendant of the Kandake Queens, Shango the Orisha, and King Zola", fr: "Prince héritier du Kongo; Descendant des Reines Kandake, Shango l'Orisha et du Roi Zola", pt: "Príncipe herdeiro do Congo; Descendente das Rainhas Kandake, Shango o Orixá e do Rei Zola", es: "Príncipe heredero del Congo; Descendiente de las Reinas Kandake, Shango el Orisha y el Rey Zola", zu: "Umkosi owalelekile weKongo; Umuntu wokuqala weKandake QueensZanga noKing Zola", xh: "Umkosi owalelekile weKongo; Umuntu wokuqala weKandake QueensZanga noKing Zola", sw: "Mkosi anayefaa wa Kongo; Mfukuzi wa Wafalme wa Kandake, Shango Orisha, na Mfalme Zola", ln: "Mokonzi owa lofulu wa Kongo; Mfuwa ya Kandake Queens, Shango Orisha, mpe Mokonzi Zola" },
    affiliation: { en: "Royal Guardians of the Anyoto, Order of the Ancestral Flame, Legacy of the Golden Mask", fr: "Gardiens royaux d'Anyoto, Ordre de la Flamme Ancestrale, Héritage du Masque d'Or", pt: "Guardiões reais de Anyoto, Ordem da Chama Ancestral, Legado da Máscara de Ouro", es: "Guardianes Reales de Anyoto, Orden de la Llama Ancestral, Legado de la Máscara Dorada", zu: "Abalindi eKhethiwe baseAnyoto, Isikhangelo seUmlilo oSezulwini, Ilifa leGolide Mask", xh: "Abalindi eKhethiwe baseAnyoto, Isikhangelo seUmlilo oSezulwini, Ilifa leGolide Mask", sw: "Walinzi wa Kiroyal wa Anyoto, Agizo la Moto wa Babu, Urithi wa Barakoa la Dhahabu", ln: "Basenga bya Mwasi ba Anyoto, Lisantu lya Moto ya Bakoko, Ibeka lya Barakoa ya Elize" },
    firstAppearance: { en: "Zaiire: The Prince of Kongo – The Necklace of Destiny", fr: "Zaiire: Le Prince du Kongo – Le Collier de la Destinée", pt: "Zaiire: O Príncipe do Congo – O Colar do Destino", es: "Zaiire: El Príncipe del Congo – El Collar del Destino", zu: "Zaiire: Umkosi weKongo – Izinwele zeDestiny", xh: "Zaiire: Umkosi weKongo – Izinwele zeDestiny", sw: "Zaiire: Mkosi wa Kongo – Mwenzi wa Muhairi", ln: "Zaiire: Mokonzi wa Kongo – Molonga wa Muhairi" },
    createdBy: "Isolele",
    
    // Character Overview
    overview: { en: "Zaiire is the last crowned heir of the ancient Kongo dynasty, born of thunder and royal blood. As the son of Shango, the Orisha of divine judgment, and Princess Kimoya, a time-walking queen, Zaiire inherits the burden of a shattered legacy. With powers tied to lightning, transformation, and time itself, he must confront betrayal, dimensional threats, and ancestral prophecy to reclaim the sacred throne of Kongo.", fr: "Zaiire est le dernier héritier couronné de la dynastie ancienne du Kongo, né du tonnerre et du sang royal. Fils de Shango, l'Orisha du jugement divin, et de la princesse Kimoya, une reine voyageuse du temps, Zaiire hérite du fardeau d'un héritage brisé. Avec des pouvoirs liés à la foudre, à la transformation et au temps lui-même, il doit affronter la trahison, les menaces dimensionnelles et la prophétie ancestrale pour reprendre le trône sacré du Kongo.", pt: "Zaiire é o último herdeiro coroado da antiga dinastia do Congo, nascido do trovão e do sangue real. Como filho de Shango, o Orixá do julgamento divino, e da Princesa Kimoya, uma rainha viajante do tempo, Zaiire herda o fardo de um legado destruído. Com poderes ligados ao relâmpago, transformação e tempo, ele deve confrontar traição, ameaças dimensionais e profecia ancestral para reclamar o trono sagrado do Congo.", es: "Zaiire es el último heredero coronado de la antigua dinastía del Kongo, nacido del trueno y la sangre real. Como hijo de Shango, el Orisha del juicio divino, y la Princesa Kimoya, una reina viajera del tiempo, Zaiire hereda la carga de un legado destruido. Con poderes vinculados al rayo, la transformación y el tiempo mismo, debe confrontar la traición, amenazas dimensionales y profecía ancestral para reclamar el trono sagrado del Kongo.", zu: "UZaiire ungumkosi owalelekile weKongo, wazalelwa esangweni nesigudlu soKing. Njengomuntu kaShango, iOrisha yesahlulelo esomiswe, nomsikazi wePrincess Kimoya, unkosikazi owakulaba ibanga, uZaiire uzuza inkinga yesigaba esisulwe. Anomaganda ahambisene namandla esisulu, ukuguqulwa nokwazi, kufanele ahlangane nokulahleka, indingalelo yendlela eyahlukile, nokucuzela kwezizali ukuze afunde uRhalamulo osomiswe weKongo.", xh: "UZaiire ungumkosi owalelekile weKongo, wazalelwa esangweni nesigudlu soKing. Njengomuntu kaShango, iOrisha yesahlulelo esomiswe, nomsikazi wePrincess Kimoya, unkosikazi owakulaba ibanga, uZaiire uzuza inkinga yesigaba esisulwe. Anomaganda ahambisene namandla esisulu, ukuguqulwa nokwazi, kufanele ahlangane nokulahleka, indingalelo yendlela eyahlukile, nokucuzela kwezizali ukuze afunde uRhalamulo osomiswe weKongo.", sw: "Zaiire ni mrithi wa mwisho aliyetajwa wa jamii ya zamani ya Kongo, alizaliwa na radi na damu ya kifalme. Kama mwana wa Shango, Orisha ya hukumu iliyotakaswa, na Wafalme Kimoya, mfalme anayesafiri katika wakati, Zaiire ana ardhi ya urithi ulioharibika. Kwa nguvu zilizofungwa na radi, mabadiliko, na wakati yenyewe, lazima akamatane na ufala, vitisho vya dimensioni, na unabii wa kuzaliwa upya kukamatikia kiti cha Kongo.", ln: "Zaiire ye mokonzi wa suka ya Kongo ya olela, wazalengiwe na elamba mpe makila ya mokonzi. Lokola mwana wa Shango, Orisha ya lilela litakusu, mpe Mokonzi Kimoya, mokonzi oyo asambaki na minyongo, Zaiire azuzi mozani ya ibeka esalaki. Na makambu makokama motombè, mozani ya ngo, mpe nyango pekee, asengeli kosolola ba nkuti, mitongelo ya ndaka, mpe lisapu ya bakoko kuponya Mwami ya Kongo." },
    
    // Powers & Abilities
    powers: [
      { 
        name: { en: "Royal Lionpard Transformation", fr: "Transformation Léopard-Lion Royal", pt: "Transformação Real do Leopardo-Leão", es: "Transformación Real del Leopardo-León", zu: "Ukuguqulwa kweKing Leopard-Lion", xh: "Ukuguqulwa kweKing Leopard-Lion", sw: "Mabadiliko ya Simba-Chui ya Kifalme", ln: "Mobadeli ya Simba-Leopadi ya Mwasi" },
        description: { en: "Divine beast form fusing lion and leopard traitsymbols of African kingship and guardianship", fr: "Forme de bête divine fusionnant les traits du lion et du léopard - symboles de la royauté africaine et de la protection", pt: "Forma de besta divina fundindo características de leão e leopardo - símbolos da realeza africana e proteção", es: "Forma de bestia divina fusionando características de león y leopardo - símbolos de la realeza africana y protección", zu: "Umumo wesilulumanzi esumankela isimba nelipadi - izimpawu zuKing African Guardianship", xh: "Umumo wesilulumanzi esumankela isimba nelipadi - izimpawu zuKing African Guardianship", sw: "Muundo wa kiumbe kisimu kinachokumanya simba na chui - alama za usani wa Kiafrika na ulinzi", ln: "Sika ya manyama ya Nzambe ikokuma simba mpe leopadi - batuesi ba Mwasi African mpe kusunga" }
      },
      { 
        name: { en: "Lightning and Thunder Control", fr: "Contrôle de la Foudre et du Tonnerre", pt: "Controle de Raio e Trovão", es: "Control del Rayo y el Trueno", zu: "Ukulawula Isandulela neNgoma", xh: "Ukulawula Isandulela neNgoma", sw: "Kudhibiti Umeme na Radi", ln: "Kosunga Elamba mpe Nkokwa" },
        description: { en: "Stormborn powers from his father Shango, used to deliver divine judgment and incinerate corruption", fr: "Pouvoirs nés de la tempête de son père Shango, utilisés pour délivrer un jugement divin et incinérer la corruption", pt: "Poderes gerados pela tempestade do seu pai Shango, usados para entregar julgamento divino e incineração de corrupção", es: "Poderes generados por tormenta de su padre Shango, usados para entregar juicio divino e incinerar la corrupción", zu: "Amandla ezazalelwa isandulela ka Shango, asetshenziswa ukuhlinzeka isigwebo sentukuthelo nokubasa isikweletu", xh: "Amandla ezazalelwa isandulela ka Shango, asetshenziswa ukuhlinzeka isigwebo sentukuthelo nokubasa isikweletu", sw: "Nguvu zilizozaliwa na dhoruba kutoka kwa baba yake Shango, zinatumika kumpe hukumu itakusu na kuoza ufala", ln: "Makambu makokama na dhoruba ya Papa Shango, esendeliwa kopesa mbama litakusu mpe kobasa moufala" }
      },
      { 
        name: { en: "Time-walking (Necklace of Destiny)", fr: "Voyage Temporel (Collier de la Destinée)", pt: "Viagem Temporal (Colar do Destino)", es: "Viaje Temporal (Collar del Destino)", zu: "Ukuhamba Kwesikhathi (Izinwele zeDestiny)", xh: "Ukuhamba Kwesikhathi (Izinwele zeDestiny)", sw: "Msafara wa Wakati (Mwenzi wa Muhairi)", ln: "Kozala Yango (Molonga wa Muhairi)" },
        description: { en: "Grants golden armor and twin ceremonial mask; allows shifts between past, present, and future to alter fate", fr: "Accorde une armure dorée et un double masque cérémoniel; permet des déplacements entre passé, présent et futur pour changer le destin", pt: "Concede armadura dourada e máscara ceremonial dupla; permite mudanças entre passado, presente e futuro para alterar o destino", es: "Otorga armadura dorada y máscara ceremonial dual; permite cambios entre pasado, presente y futuro para alterar el destino", zu: "Inika isisebenzi segolide nesibaya sesiphakamiso espesimeli; ivumela ukushintsha phakathi kwamandla, namhanje, nokulandela ukunikezela ubusulwa", xh: "Inika isisebenzi segolide nesibaya sesiphakamiso espesimeli; ivumela ukushintsha phakathi kwamandla, namhanje, nokulandela ukunikezela ubusulwa", sw: "Hutoa zarmor ya dhahabu na barakoa la majukumu mawili; inayavumia mabadiliko kati ya zamani, sasa, na siku za baadaye kubadilisha hatima", ln: "Ipayi isikali ya elize mpe barakoa mibale ya lisantu; ivumeli kosala lobala kati ya ubwa kala, yambo, mpe banso ekubadela muinu" }
      },
      { 
        name: { en: "Solar Regeneration & Cosmic Momentum", fr: "Régénération Solaire & Momentum Cosmique", pt: "Regeneração Solar & Momento Cósmico", es: "Regeneración Solar & Momento Cósmico", zu: "Ukuzisungula Ngezinto Zesun & Cosmic Momentum", xh: "Ukuzisungula Ngezinto Zesun & Cosmic Momentum", sw: "Kuzaliwa upya kwa Jua & Momentum ya Ulimwengu", ln: "Kobima Yenyama ya Lune & Cosmic Momentum" },
        description: { en: "Charges from sunlight and accelerates in bursts of speed and light through dimensions", fr: "Se charge à partir de la lumière du soleil et accélère en rafales de vitesse et lumière à travers les dimensions", pt: "Carrega-se da luz solar e acelera em rajadas de velocidade e luz através das dimensões", es: "Se carga con luz solar y acelera en ráfagas de velocidad y luz a través de las dimensiones", zu: "Igwema ngumlilo wegazi negunguquka ngokushesha nekunzwa kulandelela izidi", xh: "Igwema ngumlilo wegazi negunguquka ngokushesha nekunzwa kulandelela izidi", sw: "Inachaji kutoka kwa mwanga wa jua na kuongeza kasi katika milipuko ya kasi na nuru kupitia vipimo", ln: "Inasaka kutoka munzoto mpe ikoseka motambwisi na monzoto na banganga" }
      },
      { 
        name: { en: "Ancestral Tactical Memory", fr: "Mémoire Tactique Ancestrale", pt: "Memória Tática Ancestral", es: "Memoria Táctica Ancestral", zu: "Isikhukhwane Somhupo weZizali", xh: "Isikhukhwane Somhupo weZizali", sw: "Kumbukumbu ya Jeshi la Babu", ln: "Kukumbuka Momimoneti ya Bakoko" },
        description: { en: "Draws battle instincts from Shaka Zulu, Queen Nzinga, and the Kandake queens", fr: "Puise les instincts de combat de Shaka Zulu, de la Reine Nzinga et des reines Kandake", pt: "Extrai instintos de batalha de Shaka Zulu, Rainha Nzinga e das rainhas Kandake", es: "Extrae instintos de batalla de Shaka Zulu, la Reina Nzinga y las reinas Kandake", zu: "Ithathe imikhosi yempi kuShaka Zulu, iNkosikazi uNzinga, namakosi aseKandake", xh: "Ithathe imikhosi yempi kuShaka Zulu, iNkosikazi uNzinga, namakosi aseKandake", sw: "Huchota hadhi za vita kutoka kwa Shaka Zulu, Malkia Nzinga, na malkia wa Kandake", ln: "Ilumbi makambu ma molende wa Shaka Zulu, Mokonzi Nzinga, mpe bakosi ba Kandake" }
      },
      { 
        name: { en: "Flight & Divine Strength", fr: "Vol & Force Divine", pt: "Voo & Força Divina", es: "Vuelo & Fuerza Divina", zu: "Ukukhuluma & Amandla Engcwele", xh: "Ukukhuluma & Amandla Engcwele", sw: "Upepo & Nguvu ya Kuu", ln: "Kozala Motema & Makambu maKuu" },
        description: { en: "Channeling the power of the stars and heavens through his celestial bloodline", fr: "Canalisant le pouvoir des étoiles et des cieux à travers sa lignée céleste", pt: "Canalizando o poder das estrelas e dos céus através de sua linhagem celestial", es: "Canalizando el poder de las estrellas y los cielos a través de su linaje celestial", zu: "Isikhungo samandla esizinyini nemakhaya ngoba igazi lakhe liyesithwele", xh: "Isikhungo samandla esizinyini nemakhaya ngoba igazi lakhe liyesithwele", sw: "Kuchangia nguvu ya nyota na mbingu kupitia kuzaliwa kwake cha mbinguzi", ln: "Koyibaisa makambu ma minzita mpe likolo na mbambi ya molisanisani" }
      }
    ],

    // Weaknesses
    weaknesses: [
      { 
        name: { en: "Royal Burden", fr: "Fardeau Royal", pt: "Carga Real", es: "Carga Real", zu: "Inkinga yoMkosi", xh: "Inkinga yoMkosi", sw: "Mzigo wa Kifalme", ln: "Mozani wa Mwasi" },
        description: { en: "The pressure of reclaiming a fallen kingdom while leading a fractured people", fr: "La pression de reprendre un royaume déchu tout en dirigeant un peuple fractionnée", pt: "A pressão de reclamar um reino caído enquanto lidera um povo fraturado", es: "La presión de reclamar un reino caído mientras lidera a un pueblo fracturado", zu: "Inkinga yokubuyiza umbuso owaye owawa namuhla ukulalela abantu abavaliwe", xh: "Inkinga yokubuyiza umbuso owaye owawa namuhla ukulalela abantu abavaliwe", sw: "Shinikizo la kukamatia nchi iliyoanguka wakati akiiongoza watu walionagua", ln: "Mozani ya kuzuya zwabu lizila kitanda wakati akoyikola bato ebale" }
      },
      { 
        name: { en: "Spiritual Overload", fr: "Surcharge Spirituelle", pt: "Sobrecarga Espiritual", es: "Sobrecarga Espiritual", zu: "Amandla Asecaleni", xh: "Amandla Asecaleni", sw: "Mzigo wa Roho", ln: "Mozani ya Molimo" },
        description: { en: "Struggles to balance god-like energy within a mortal vessel", fr: "Lutte pour équilibrer l'énergie divine dans un vaisseau mortel", pt: "Luta para equilibrar energia divina em um vaso mortal", es: "Lucha por equilibrar la energía divina en un recipiente mortal", zu: "Unzima ukunikezela amandla engcwele engumuntu oyisithombo esiyindlela", xh: "Unzima ukunikezela amandla engcwele engumuntu oyisithombo esiyindlela", sw: "Kusumbuika kuizani kwa nishati ya Mungu katika chombo cha wanadamu", ln: "Mopesaki kokoka makambu ma Nzambe na moto yabonzalaka" }
      },
      { 
        name: { en: "Temporal Dangers", fr: "Dangers Temporels", pt: "Perigos Temporais", es: "Peligros Temporales", zu: "Izikhwele Zesikhathi", xh: "Izikhwele Zesikhathi", sw: "Hatari za Wakati", ln: "Izienda za Nyango" },
        description: { en: "Risk of reality distortion and multiversal threats when time-walking", fr: "Risque de distorsion de la réalité et menaces multiverselles lors des voyages temporels", pt: "Risco de distorção da realidade e ameaças multiversais ao viajar no tempo", es: "Riesgo de distorsión de la realidad y amenazas multiversales al viajar en el tiempo", zu: "Isikhwele sokuguqula isimo nokutshwaladisa ngezinhlaka eziningi nakukhubeka isikhathi", xh: "Isikhwele sokuguqula isimo nokutshwaladisa ngezinhlaka eziningi nakukhubeka isikhathi", sw: "Hatari ya kupotosha ukweli na vitisho vya multiversal wakati wa kusafiri katika wakati", ln: "Izienda ya kubadisha nzambe mpe mipepe yobele wakati kasenzela na nyango" }
      },
      { 
        name: { en: "Family Betrayal", fr: "Trahison Familiale", pt: "Traição Familiar", es: "Traición Familiar", zu: "Isikhwele Somndeni", xh: "Isikhwele Somndeni", sw: "Dhuluma ya Familia", ln: "Kupambola yoKelunga" },
        description: { en: "Haunted by his uncle Zattar's usurpation and his cousin Dawidi's ambition", fr: "Hanté par l'usurpation de son oncle Zattar et l'ambition de son cousin Dawidi", pt: "Assombrado pela usurpação de seu tio Zattar e ambição de seu primo Dawidi", es: "Perseguido por la usurpación de su tío Zattar y la ambición de su primo Dawidi", zu: "Usayile yisigaleko somalume uZattar nomkhulungwane iDawidi", xh: "Usayile yisigaleko somalume uZattar nomkhulungwane iDawidi", sw: "Anakumbukilia kukamatia kwa mjomba wake Zattar na tamaa ya binamu yake Dawidi", ln: "Asibidike na kupambola kwa mfumuki Zattar mpe desiro ya kombi Dawidi" }
      }
    ],

    // Symbolism
    symbolism: { en: "Zaiire embodies royal rebirth, ancestral justice, and Africa's sacred future reimagined.", fr: "Zaiire incarne la renaissance royale, la justice ancestrale et l'avenir sacré de l'Afrique réimaginé.", pt: "Zaiire encarna o renascimento real, a justiça ancestral e o futuro sagrado reimaginado da África.", es: "Zaiire encarna el renacimiento real, la justicia ancestral y el futuro sagrado reimaginado de África.", zu: "UZaiire ubonisa indaba yombuso, isigwebo somuntu wokuqala, nomuntu wokhunga weAfrika ekuthathwe kabusha.", xh: "UZaiire ubonisa indaba yombuso, isigwebo somuntu wokuqala, nomuntu wokhunga weAfrika ekuthathwe kabusha.", sw: "Zaiire anasimbangilia ukamatanisho wa ufuo, haki ya babu, na siku zijazo za Kiafrika iliyokamatwa upya.", ln: "Zaiire azali batuesi ya mokeka yombuso, lisigbe ya bakoko, mpe sika ya Afrike ikoma kabusha." },
    
    quote: { en: "The destiny of a nation rests around his neck. Will Zaiire embrace it?", fr: "La destinée d'une nation repose autour de son cou. Zaiire l'embrassera-t-il?", pt: "O destino de uma nação repousa ao redor de seu pescoço. Zaiire o abraçará?", es: "El destino de una nación descansa alrededor de su cuello. ¿Lo abrazará Zaiire?", zu: "Isigwebo senhlangano sibambele umphakathi wakhe. Uzabu sikulungu? ", xh: "Isigwebo senhlangano sibambele umphakathi wakhe. Uzabu sikulungu?", sw: "Muhairi wa taifa amelala karibu na shingo lake. Je, Zaiire atakubali?", ln: "Muinu wa lizila yongelamisi nzambe ya mopepe wakhe. Zaiire akoyamba yango?" },
    
    subtitle: { en: "An Epic Journey of Heritage, Power, and Destiny", fr: "Un voyage épique du patrimoine, du pouvoir et de la destinée", pt: "Uma jornada épica de herança, poder e destino", es: "Un viaje épico de herencia, poder y destino", zu: "Isikhathi esihambele sibuswa, amandla, nokweba", xh: "Isikhathi esihambele sibuswa, amandla, nokweba", sw: "Safara ya kichawi ya urithi, nguvu, na hatima", ln: "Mozangu yomabu, makambu, mpe muinu" },
    backstory:
      "The son of a forgotten kingdom, Zaiïre never knew his true birthright until the spirits of his ancestors revealed his destiny. With the Collier du Destin, he became a bridge between the mortal world and the realm of the ancestors, tasked with restoring the glory of the Kongo people.",
    relationships: ["Bambula - Warrior Ally", "Kimoya - Ancient Council", "King Kufulula - Distant Ancestor"],
    appearanceFirst: "Book 1: The Prince of Kongo",
  },
  bambula: {
    name: "BAMBULA",
    title: "Guardian of the Savanna",
    color: "#B3541E",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bambula%201-UAlmQoZVy1GslUfmVvqc5bdDDdEQdX.jpg",
    fullDescription:
      "Bambula is a fearless warrior of the savanna, mastering the sacred fire and the wild nature of Africa. She is the protector of the land and its people, wielding both ancestral magic and combat prowess.",
    powers: ["Fire Mastery", "Nature Control", "Combat Excellence", "Spirit Animal Bond"],
    backstory:
      "Born in the heart of the African savanna, Bambula was chosen by the spirits of the wild to be their champion. She can commune with lions, leopards, and all creatures of the land, and commands flames that burn with the fury of a thousand suns.",
    relationships: ["Zaiïre - Fellow Chosen", "Mokele - Urban Warrior", "The Spirit Council"],
    appearanceFirst: "Book 1: The Prince of Kongo",
  },
  kimoya: {
    name: "KIMOYA",
    title: "The Rising Kandake",
    color: "#C0392B",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260323-WA0012-2zfYaTNiUmh8XgNPMwbkLcKExGX65Q.jpg",
    fullDescription:
      "Kimoya is a Kandake (ancient Nubian queen-warrior) whose royal court holds the destiny of an entire continent. With wisdom beyond her years and power beyond measure, she rules with both justice and strength.",
    powers: ["Royal Authority", "Strategic Mastery", "Healing Magic", "Empire Control"],
    backstory:
      "From her throne in the ancient kingdom of Meroe, Kimoya emerged as the most powerful Kandake in history. She commands armies of warriors and wields the collective power of generations of queens before her.",
    relationships: ["Zaiïre - The New Prince", "The Ancient Councils", "Continental Leaders"],
    appearanceFirst: "Book 2: The Kandake's Court",
  },
  mokele: {
    name: "MOKELE",
    title: "Crowned by the Streets",
    color: "#4169E1",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mokele-lZToplq4eNUuy08B5V6faXETr5YnKg.jpg",
    fullDescription:
      "Mokele is the heir of urban chaos and ancestral power. Born in the concrete jungles where tradition meets modernity, he bridges the gap between ancient heritage and contemporary struggle.",
    powers: ["Urban Mastery", "Ancestral Heritage", "Street Wisdom", "Dimensional Sight"],
    backstory:
      "Growing up in the streets, Mokele discovered that his bloodline traced back to forgotten kings. He learned to channel the power of his ancestors through the modern world, becoming a guardian for the youth of his people.",
    relationships: ["Zaiïre - Royal Connection", "King Kufulula - Ancestor", "The Street Community"],
    appearanceFirst: "Book 3: Crowned by the Streets",
  },
  kufulula: {
    name: "KING KUFULULA",
    title: "The Ancestral King",
    color: "#8B6914",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/King%20kufulula-1pEeYE9t1QYruZhNooZuPw7Nkd1A8l.jpg",
    fullDescription:
      "King Kufulula is a legendary ancestor who rules over New York and protects the royal lineage of ISOLELE. Neither fully alive nor fully departed, he exists between worlds to guide his chosen ones.",
    powers: ["Ancestral Authority", "Spirit Travel", "Historical Knowledge", "Bloodline Protection"],
    backstory:
      "Once a great king of Africa, Kufulula refused to fade into oblivion. His spirit anchored itself in New York, where a new generation of his descendants discovered their power. Now he guides them from beyond the veil.",
    relationships: ["All the Chosen Ones", "The Ancestor Realm", "Future Generations"],
    appearanceFirst: "Book 1: The Prince of Kongo (Spirit Form)",
  },
  ensemble: {
    name: "THE ISOLELE ASSEMBLY",
    title: "The Chosen Ones United",
    color: "#9932CC",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Isolele%20ZAIIRE-EKnQs6Sp5EFeF3bYx9m4utnSu3LdM5.jpg",
    fullDescription:
      "When all the heroes stand together, their combined power becomes unstoppable. The ISOLELE Assembly represents the ultimate destiny of the chosen ones, united by blood, duty, and heritage.",
    powers: ["Combined Strength", "Perfect Harmony", "Destiny Fulfillment", "Collective Wisdom"],
    backstory:
      "Destiny has woven these heroes together. Whether by blood, choice, or fate, they form an unbreakable bond. When united, they become something greater than themselves, a force that can reshape worlds.",
    relationships: ["All Characters", "The Spirit Council", "The People of Africa"],
    appearanceFirst: "Every Book",
  },
}

export default function CharacterPage({ params }: { params: { id: string } }) {
  const character = charactersData[params.id as keyof typeof charactersData]
  const { currentTheme } = useTheme()
  const { t } = useLanguage()
  const [isLiked, setIsLiked] = useState(false)

  if (!character) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: currentTheme.colors.background }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: currentTheme.colors.textPrimary }}>
            Character Not Found
          </h1>
          <Link href="/characters">
            <button className="px-6 py-3 rounded-lg" style={{ backgroundColor: currentTheme.colors.accentPrimary, color: currentTheme.colors.background }}>
              Back to Characters
            </button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: currentTheme.colors.background, minHeight: "100vh" }}>
      {/* Header with back button */}
      <div className="sticky top-0 z-40 px-4 sm:px-6 lg:px-8 py-4" style={{ backgroundColor: `${currentTheme.colors.background}95`, backdropFilter: "blur(10px)" }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/characters">
            <motion.button
              className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all"
              style={{ backgroundColor: `${currentTheme.colors.accentPrimary}20`, color: currentTheme.colors.accentPrimary }}
              whileHover={{ backgroundColor: currentTheme.colors.accentPrimary, color: currentTheme.colors.background }}
            >
              <ArrowLeft size={20} />
              Back
            </motion.button>
          </Link>
          <div className="flex items-center gap-2">
            <motion.button
              onClick={() => setIsLiked(!isLiked)}
              className="p-3 rounded-lg transition-all"
              style={{ backgroundColor: `${character.color}20`, color: character.color }}
              whileHover={{ scale: 1.1 }}
            >
              <Heart size={20} fill={isLiked ? character.color : "none"} />
            </motion.button>
            <motion.button
              className="p-3 rounded-lg transition-all"
              style={{ backgroundColor: `${currentTheme.colors.accentPrimary}20`, color: currentTheme.colors.accentPrimary }}
              whileHover={{ scale: 1.1 }}
            >
              <Share2 size={20} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <div
              className="relative w-full max-w-md h-96 rounded-2xl overflow-hidden"
              style={{
                backgroundColor: currentTheme.colors.backgroundSecondary,
                border: `2px solid ${character.color}40`,
                boxShadow: `0 0 40px ${character.color}20`,
              }}
            >
              <Image
                src={character.image}
                alt={character.name}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Info section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <motion.span
                className="inline-block px-4 py-2 rounded-full text-sm font-bold tracking-wider mb-4"
                style={{ backgroundColor: `${character.color}20`, color: character.color }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {character.title}
              </motion.span>
              <h1 className="text-5xl font-black tracking-wider mb-4" style={{ color: currentTheme.colors.textPrimary }}>
                {character.name}
              </h1>
              {character.subtitle && (
                <p className="text-xl font-semibold mb-6" style={{ color: currentTheme.colors.textSecondary }}>
                  {character.subtitle}
                </p>
              )}
              <p className="text-lg leading-relaxed" style={{ color: currentTheme.colors.textSecondary }}>
                {character.fullDescription}
              </p>
            </div>

            {/* Quick info boxes */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className="p-4 rounded-lg"
                style={{
                  backgroundColor: `${character.color}10`,
                  border: `1px solid ${character.color}30`,
                }}
              >
                <p className="text-xs font-semibold tracking-wider mb-2" style={{ color: character.color }}>
                  FIRST APPEARANCE
                </p>
                <p className="font-bold" style={{ color: currentTheme.colors.textPrimary }}>
                  {character.appearanceFirst}
                </p>
              </div>
              <div
                className="p-4 rounded-lg"
                style={{
                  backgroundColor: `${currentTheme.colors.accentPrimary}10`,
                  border: `1px solid ${currentTheme.colors.accentPrimary}30`,
                }}
              >
                <p className="text-xs font-semibold tracking-wider mb-2" style={{ color: currentTheme.colors.accentPrimary }}>
                  STATUS
                </p>
                <p className="font-bold" style={{ color: currentTheme.colors.textPrimary }}>
                  Active
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Powers section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-black tracking-wider mb-8" style={{ color: currentTheme.colors.textPrimary }}>
            Powers & Abilities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {character.powers.map((power: string, index: number) => (
              <motion.div
                key={power}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="p-4 rounded-lg text-center"
                style={{
                  backgroundColor: `${character.color}10`,
                  border: `1px solid ${character.color}30`,
                }}
              >
                <p className="font-bold" style={{ color: currentTheme.colors.textPrimary }}>
                  {power}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Backstory section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-black tracking-wider mb-6" style={{ color: currentTheme.colors.textPrimary }}>
            Backstory
          </h2>
          <div
            className="p-8 rounded-2xl"
            style={{
              backgroundColor: currentTheme.colors.backgroundSecondary,
              border: `1px solid ${character.color}30`,
            }}
          >
            <p className="text-lg leading-relaxed" style={{ color: currentTheme.colors.textSecondary }}>
              {character.backstory}
            </p>
          </div>
        </motion.div>

        {/* Relationships section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-black tracking-wider mb-8" style={{ color: currentTheme.colors.textPrimary }}>
            Relationships
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {character.relationships.map((relationship: string, index: number) => (
              <motion.div
                key={relationship}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="p-6 rounded-lg"
                style={{
                  backgroundColor: currentTheme.colors.backgroundSecondary,
                  border: `1px solid ${currentTheme.colors.accentPrimary}30`,
                }}
              >
                <p className="text-lg font-semibold" style={{ color: currentTheme.colors.textPrimary }}>
                  {relationship}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote section */}
        {character.quote && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mb-16 p-8 rounded-lg border-l-4"
            style={{
              backgroundColor: `${character.color}10`,
              borderLeftColor: character.color,
            }}
          >
            <p className="text-2xl font-black italic" style={{ color: character.color }}>
              "{character.quote}"
            </p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Link href="/books">
            <motion.button
              className="px-8 py-4 rounded-lg font-bold tracking-wider text-lg"
              style={{ backgroundColor: character.color, color: currentTheme.colors.background }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read Their Story
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
