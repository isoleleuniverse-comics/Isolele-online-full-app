"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/lib/theme-context"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function StorySection() {
  const { currentTheme } = useTheme()
  const { t, currentLanguage } = useLanguage()

  const storyContent = {
    en: {
      title: "THE PRINCE OF KONGO: NECKLACE OF DESTINY",
      subtitle: "An Epic Journey of Heritage, Power, and Destiny",
      paragraphs: [
        "In the heart of Africa, where tradition and legacy intertwine with modernity, a royal prince will soon discover his true destiny.",
        "\"The Prince of Kongo: Necklace of Destiny\" tells the epic story of Zaiire, a young boy from the bustling city of Kinshasa, raised in a life of unimaginable wealth and privilege. His family, one of the richest in Africa, has built an empire of prosperity, yet Zaiire's heart belongs to something far greater.",
        "Unbeknownst to him, an ancient legacy flows through his veins—a legacy tied to the very soul of his people, rooted deep within the rich culture and history of Kongo.",
        "On the surface, Zaiire is a boy accustomed to luxury, prestige, and respect. But when he visits his estranged mother in the poorest slums of Kinshasa, his world is turned upside down.",
        "During their reunion, his mother entrusts him with a powerful and ancient relic—the Necklace of Destiny, a mystical artifact passed down through generations of Congolese royalty. This necklace holds the power to awaken his inner strength and connects him to the primal forces of the earth, the spirits of his ancestors, and the true role he is destined to play as a protector of the Kongo."
      ],
      conclusion: "The destiny of a nation rests around his neck. Will Zaiire embrace it?",
      cta: "Discover the Full Story"
    },
    fr: {
      title: "LE PRINCE DU KONGO: LE COLLIER DE LA DESTINEE",
      subtitle: "Un Voyage Epique d'Heritage, de Pouvoir et de Destinee",
      paragraphs: [
        "Au coeur de l'Afrique, ou tradition et heritage s'entrelacent avec la modernite, un prince royal decouvrira bientot sa veritable destinee.",
        "\"Le Prince du Kongo: Le Collier de la Destinee\" raconte l'histoire epique de Zaiire, un jeune garcon de la ville animee de Kinshasa, eleve dans une vie de richesse et de privilege inimaginables. Sa famille, l'une des plus riches d'Afrique, a bati un empire de prosperite, mais le coeur de Zaiire appartient a quelque chose de bien plus grand.",
        "A son insu, un heritage ancien coule dans ses veines—un heritage lie a l'ame meme de son peuple, enracine profondement dans la riche culture et l'histoire du Kongo.",
        "En apparence, Zaiire est un garcon habitue au luxe, au prestige et au respect. Mais quand il rend visite a sa mere separee dans les bidonvilles les plus pauvres de Kinshasa, son monde est bouleverse.",
        "Lors de leurs retrouvailles, sa mere lui confie une relique puissante et ancienne—le Collier de la Destinee, un artefact mystique transmis de generation en generation a la royaute congolaise. Ce collier detient le pouvoir d'eveiller sa force interieure et le connecte aux forces primordiales de la terre, aux esprits de ses ancetres, et au veritable role qu'il est destine a jouer en tant que protecteur du Kongo."
      ],
      conclusion: "Le destin d'une nation repose autour de son cou. Zaiire l'acceptera-t-il?",
      cta: "Decouvrir l'Histoire Complete"
    },
    pt: {
      title: "O PRÍNCIPE DO KONGO: COLAR DO DESTINO",
      subtitle: "Uma Jornada Épica de Herança, Poder e Destino",
      paragraphs: [
        "No coração da África, onde tradição e legado se entrelaçam com a modernidade, um príncipe real em breve descobrirá seu verdadeiro destino.",
        "\"O Príncipe do Kongo: Colar do Destino\" conta a história épica de Zaiire, um jovem rapaz da movimentada cidade de Kinshasa, criado em uma vida de riqueza e privilégio inimagináveis. Sua família, uma das mais ricas da África, construiu um império de prosperidade, mas o coração de Zaiire pertence a algo muito maior.",
        "Sem seu conhecimento, um legado antigo flui por suas veias—um legado atado à própria alma de seu povo, enraizado profundamente na rica cultura e história do Kongo.",
        "Na superfície, Zaiire é um rapaz acostumado ao luxo, prestígio e respeito. Mas quando visita sua mãe distante nos piores bairros pobres de Kinshasa, seu mundo é virado de cabeça para baixo.",
        "Durante o reencontro, sua mãe o confia com uma relíquia poderosa e antiga—o Colar do Destino, um artefato místico passado por gerações da realeza congolesa. Este colar mantém o poder de despertar sua força interior e o conecta às forças primordiais da terra, aos espíritos de seus ancestrais, e ao verdadeiro papel que está destinado a desempenhar como protetor do Kongo."
      ],
      conclusion: "O destino de uma nação repousa em volta do seu pescoço. Zaiire o abraçará?",
      cta: "Descubra a História Completa"
    },
    es: {
      title: "EL PRÍNCIPE DE KONGO: COLLAR DEL DESTINO",
      subtitle: "Un Viaje Épico de Herencia, Poder y Destino",
      paragraphs: [
        "En el corazón de África, donde la tradición y el legado se entrelazan con la modernidad, un príncipe real pronto descubrirá su verdadero destino.",
        "\"El Príncipe de Kongo: Collar del Destino\" cuenta la historia épica de Zaiire, un joven de la bulliciosa ciudad de Kinshasa, criado en una vida de riqueza y privilegio inimaginables. Su familia, una de las más ricas de África, ha construido un imperio de prosperidad, pero el corazón de Zaiire pertenece a algo mucho mayor.",
        "Sin su conocimiento, un legado antiguo corre por sus venas—un legado ligado al alma misma de su pueblo, arraigado profundamente en la rica cultura e historia del Kongo.",
        "En la superficie, Zaiire es un joven acostumbrado al lujo, prestigio y respeto. Pero cuando visita a su madre distanciada en los peores barrios pobres de Kinshasa, su mundo se da la vuelta.",
        "Durante el reencuentro, su madre le confía una reliquia poderosa y antigua—el Collar del Destino, un artefacto místico transmitido a través de generaciones de la realeza congoleña. Este collar tiene el poder de despertar su fortaleza interior y lo conecta con las fuerzas primordiales de la tierra, los espíritus de sus ancestros, y el verdadero papel que está destinado a jugar como protector del Kongo."
      ],
      conclusion: "El destino de una nación descansa alrededor de su cuello. ¿Abrazará Zaiire su destino?",
      cta: "Descubre la Historia Completa"
    },
    zu: {
      title: "INKHOSIKAZI YE-KONGO: ISIKEKA SENHLANHLA",
      subtitle: "Uhambo Lwephenyo Lesindebele, Amandla, Nenhlanhlahlo",
      paragraphs: [
        "Enhliziyweni yeAfrika, lapho isikhali nesintu se-Afrika si-hlanganyela nomuntu wanamhla, inkhosikazi eyodwa izovela futhi ibone inhlanhla yayo engoqo.",
        "\"Inkhosikazi ye-Kongo: Isikeka Senhlanhla\" i-vumelana nomlando owomile we-Zaiire, umuntu omncane ohambela edolobeni likashiya eKinshasa, olalizwa ekusuleni okungacoweka. Umndeni wakhe, owomunye wabantu abazikuthintela akhaya, wakwakha impilo yabakwamkela, kodwa inhliziyo ye-Zaiire iyabaphakamisa ekusuleni okukulu.",
        "Ngaphandle kokwazi kwakhe, usindebele olungazinzile lwezikhali lugubane ezinyo zakhe—usindebele olwabelwa emlilweni womuntu wakhe, oluhlale empalazeni elibinzele enkuleko nenhloso ye-Kongo.",
        "Lapho ezama kukheka, Zaiire ungumuntu ozitholele ekusuleni, udumo, nokuphakamisa. Kodwa lapho avakasha unina wakhe osekula emajelo amaningi eKinshasa, emhlabeni wakhe uyathulwa.",
        "Lapho beyena, unina wakhe emnike umuntu ozinywe akubona namandla—Isikeka Senhlanhla, umuntu ozivusene ozabandulula umndeni we-Kongo. Lesi sikeka sinee namandla okuvusa amandla akhe angaphakathi futhi sinammakele emandleni aphangeziwe womhlaba, izikhali zesizali sakhe, kanye nexazululo okulokhu kubheka njengomlindi we-Kongo."
      ],
      conclusion: "Inhlanhla yenhlangano ihlala emhlotheni wakhe. Uyakugxilela Zaiire?",
      cta: "Funda Idaba Eliyonke"
    },
    xh: {
      title: "UMHLINZEKAZI WE-KONGO: ISIKEKA SENHLANHLA",
      subtitle: "Uhambo Lwephenyo Lesindebele, Amandla, Nenhlanhlahlo",
      paragraphs: [
        "Enhliziyweni yeAfrika, lapho isikhali nesintu se-Afrika si-hlanganyela nomuntu wanamhla, inkhosikazi eyodwa izovela futhi ibone inhlanhla yayo engoqo.",
        "\"Umhlinzekazi we-Kongo: Isikeka Senhlanhla\" i-vumelana nomlando owomile we-Zaiire, umuntu omncane ohambela edolobeni likashiya eKinshasa, olalizwa ekusuleni okungacoweka. Umndeni wakhe, owomunye wabantu abazikuthintela akhaya, wakwakha impilo yabakwamkeli, kodwa inhliziyo ye-Zaiire iyabaphakamisa ekusuleni okukulu.",
        "Ngaphandle kokwazi kwakhe, usindebele olungazinzile lwezikhali lugubane ezinyo zakhe—usindebele olwabelwa emlilweni womuntu wakhe, oluhlale empalazeni elibinzele enkuleko nenhloso ye-Kongo.",
        "Lapho ezama kukheka, Zaiire ungumuntu ozitholele ekusuleni, udumo, nokuphakamisa. Kodwa lapho avakasha unina wakhe osekula emajelo amaningi eKinshasa, emhlabeni wakhe uyathulwa.",
        "Lapho beyena, unina wakhe emnike umuntu ozinywe akubona namandla—Isikeka Senhlanhla, umuntu ozivusene ozabandulula umndeni we-Kongo. Lesi sikeka sinee namandla okuvusa amandla akhe angaphakathi futhi sinammakele emandleni aphangeziwe womhlaba, izikhali zesizali sakhe, kanye nexazululo okulokhu kubheka njengomlindi we-Kongo."
      ],
      conclusion: "Inhlanhla yenhlangano ihlala emhlotheni wakhe. Uyakugxilela Zaiire?",
      cta: "Funda Idaba Eliyonke"
    },
    sw: {
      title: "MKUBWA WA KONGO: KAROLARI YA TAWHIRA",
      subtitle: "Safari Yenye Hekaya ya Urithi, Nguvu, na Tawhira",
      paragraphs: [
        "Katikati ya Afrika, ambapo jadi na urithi wa kuzaliwa sana na uvumishi wa leo, mkubwa wa kifalme atakavuta ukweli wa utawhira wake.",
        "\"Mkubwa wa Kongo: Karolari ya Tawhira\" inasimu hadithi nene ya Zaiire, mvulana mdogo kutoka jiji lenye kucheza la Kinshasa, aliyekua katika maisha ya mali na heshima yasiyosumbuika. Familia yake, mojawapo ya rafiki wa Tanzania, imejenga mfalme wa uzoefu, lakini moyo wa Zaiire unakua kwa kitu kikubwa.",
        "Bila kujua yake, urithi wa zamani unaruka katika mshipa wake—urithi ambao unabwatishwa kwa nau ya watu wake, unaozingirwa kwa karibu katika tamaduni na hadithi ya Kongo.",
        "Juu ya uso, Zaiire ni mvulana anayefanya kazi kwa mali, heshima, na daraja. Lakini wakati akatembelea mama yake aliyesainiwa katika minofu michache ya Kinshasa, duni yake inagebuka.",
        "Wakati wa kumkutana, mama yake anampa kitu kile changamano na kale—Karolari ya Tawhira, kitu kile kisicheza kilichofanywa na kizazi kilizotembea katika malkia ya Kongo. Karolari hii ina nguvu ya kuweka roho yake kwa ndani na kuunganisha sifa za dunia, wazimu wa babu zake, na jukumu halisi alilolipewa kulinda Kongo."
      ],
      conclusion: "Tawhira ya taifa inapatika kuzunguka shingo yake. Je, Zaiire atakubali?",
      cta: "Jua Hadithi Nzima"
    },
    ln: {
      title: "MFUMU WA KONGO: MWILU WA MOLOBI",
      subtitle: "Kelelo Yenye Mopya ya Etsengo, Matangi, Molobi",
      paragraphs: [
        "Kati ya Afrika, wapi etsengo miango miminomu yaka lokola mosusu wa lelo, mfumu yamo akozwa solo epona molobi yaye.",
        "\"Mfumu wa Kongo: Mwilu wa Molobi\" eyumbu maloba manene ya Zaiire, mwana moke wa mboka e makita Kinshasa, walambwe kati ya nkita mpe onge motindo. Libota lyabe, yamo mosusu wa libota minene ya Afrika, batongiki mbangu yapusina, kasi motima wa Zaiire elendaka kosonge na kosonge.",
        "Soki alingaka te, modzimu ya ndeko ya masusu elambi kati ya mit yake—modzimu elekayo na miti ya bantu baye, ekufi na bosantu mpe mbu ya Kongo.",
        "Soki ezalaki boyebi, Zaiire azali mwana wa boyebi, lokita mpe lisengo. Kasi kamatoki akendake mama yake esanumaki kati ya malimaka ma Kinshasa, mobu yaye ekunikuka.",
        "Kamatoki, mama yake apesaki ye kineni kina liteyi mpe ya ndeko—Mwilu wa Molobi, kineni kina nkita yengo na bokambi ba mfumu ya Kongo. Mwilu wino ezo na motangi ya kwikisa matangi makasi mpe kolakisa na matangi ya ntaka, balambo ba bakoko baye, mpe miseche eyo molobi azali yo kolandaki lokola motsesengaki wa Kongo."
      ],
      conclusion: "Molobi ya bangambo ihlala epai ya kingo yaye. Zaiire aya kotika?",
      cta: "Inga Mokanda Motonge"
    }
  }

  const content = storyContent[currentLanguage.code as keyof typeof storyContent] || storyContent.en

  return (
    <section 
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: currentTheme.colors.backgroundSecondary }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prince-T0hUD9Jlnlyga7D9DnMaSvL510ecuE.jpg"
                alt="Zaiire Prince du Kongo — Le Collier du Destin"
                fill
                className="object-cover"
              />
              <div 
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, transparent 60%, ${currentTheme.colors.backgroundSecondary} 100%)`
                }}
              />
            </div>
            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 px-6 py-3 rounded-xl"
              style={{ 
                backgroundColor: currentTheme.colors.accentPrimary,
                color: currentTheme.colors.background
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              <p className="text-sm font-bold">H.R.M KING KUFULULA</p>
              <p className="text-xs opacity-80">{t('founder_creator_author')}</p>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="text-3xl sm:text-4xl font-black mb-4"
              style={{ color: currentTheme.colors.accentPrimary }}
            >
              {content.title}
            </h2>
            <p 
              className="text-xl mb-8"
              style={{ color: currentTheme.colors.textSecondary }}
            >
              {content.subtitle}
            </p>
            
            <div className="space-y-4 mb-8">
              {content.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="leading-relaxed"
                  style={{ color: currentTheme.colors.textSecondary }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl font-bold italic mb-8 pl-6 border-l-4"
              style={{ 
                color: currentTheme.colors.accentPrimary,
                borderColor: currentTheme.colors.accentPrimary
              }}
            >
              "{content.conclusion}"
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
