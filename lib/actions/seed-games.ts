'use server'

import { createClient } from '@/lib/supabase/server'

export async function seedGamesData() {
  const supabase = await createClient()

  const games = [
    {
      title: 'KUFU',
      slug: 'kufu-the-crown-game',
      subtitle: 'The Crown Game',
      description: 'KUFU is a strategic card game rendered in bold, gold 3D lettering with a textured, stone-carved quality. A collector\'s crossover piece within the ISOLELE comic universe (ZAIIRE BOOK III). Master the power of heritage, royalty, and ancestral wisdom.',
      category: 'Card Game',
      rating: 4.8,
      review_count: 156,
      price: 24.99,
      players: '2-6',
      age_rating: '12+',
      duration: '30-60 minutes',
      developer: 'ISOLELE Studios',
      platform: ['Physical', 'Digital Coming Soon'],
      image_url: '/games/kufu-card.jpg'
    },
    {
      title: 'ZAIIRE CONQUEST',
      slug: 'zaiire-conquest',
      subtitle: 'Empire Building Strategy',
      description: 'Build your African empire in this turn-based strategy game inspired by Kongo history. Lead your kingdom through political intrigue, trade, and conquest. Every decision shapes the destiny of your realm.',
      category: 'Strategy',
      rating: 4.6,
      review_count: 89,
      price: 29.99,
      players: '1-4',
      age_rating: '14+',
      duration: '60-120 minutes',
      developer: 'ISOLELE Studios',
      platform: ['Physical', 'Digital'],
      image_url: '/games/zaiire-conquest.jpg'
    },
    {
      title: 'MAKANDA MYSTERIES',
      slug: 'makanda-mysteries',
      subtitle: 'Cooperative Adventure',
      description: 'Uncover the hidden secrets of Makanda, the lost Congolese empire. Work together with other players to solve puzzles, decode ancient symbols, and restore the memory of a forgotten civilization.',
      category: 'Cooperative',
      rating: 4.7,
      review_count: 123,
      price: 34.99,
      players: '2-5',
      age_rating: '13+',
      duration: '45-90 minutes',
      developer: 'ISOLELE Studios',
      platform: ['Physical', 'Digital Coming Soon'],
      image_url: '/games/makanda-mysteries.jpg'
    }
  ]

  for (const game of games) {
    const { data: existingGame, error: checkError } = await supabase
      .from('games')
      .select('id')
      .eq('slug', game.slug)
      .single()

    if (existingGame) {
      console.log(`Game ${game.slug} already exists, skipping...`)
      continue
    }

    const { data: newGame, error } = await supabase
      .from('games')
      .insert([game])
      .select()
      .single()

    if (error) {
      console.error(`Error creating game ${game.slug}:`, error)
      continue
    }

    // Add game features based on game type
    const features = getGameFeatures(game.slug)
    
    const { error: featureError } = await supabase
      .from('game_features')
      .insert(
        features.map((f, idx) => ({
          ...f,
          game_id: newGame.id,
          display_order: idx
        }))
      )

    if (featureError) {
      console.error(`Error adding features for ${game.slug}:`, featureError)
    }

    console.log(`Game ${game.title} created successfully`)
  }

  return { success: true }
}

function getGameFeatures(slug: string) {
  const featureMap: Record<string, Array<{ title_en: string; title_fr: string; description_en: string; description_fr: string }>> = {
    'kufu-the-crown-game': [
      {
        title_en: 'Heritage',
        title_fr: 'Héritage',
        description_en: 'Honor the Pan-African and Kongo roots with every move',
        description_fr: 'Honorer les racines pan-africaines et congolaises à chaque coup'
      },
      {
        title_en: 'Royalty',
        title_fr: 'Royauté',
        description_en: 'Command power, lineage, and the crown itself',
        description_fr: 'Commandez le pouvoir, la lignée et la couronne elle-même'
      },
      {
        title_en: 'Strategic Depth',
        title_fr: 'Profondeur Stratégique',
        description_en: 'Master 8 ancestral guardian masks with unique abilities',
        description_fr: 'Maîtrisez 8 masques de gardiens ancestraux avec des capacités uniques'
      },
      {
        title_en: 'Cultural Immersion',
        title_fr: 'Immersion Culturelle',
        description_en: 'Discover ancient African musical instruments and symbols',
        description_fr: 'Découvrez les anciens instruments musicaux africains et symboles'
      }
    ],
    'zaiire-conquest': [
      {
        title_en: 'Empire Building',
        title_fr: 'Construction d\'Empire',
        description_en: 'Expand your territory through strategy and diplomacy',
        description_fr: 'Expandez votre territoire par la stratégie et la diplomatie'
      },
      {
        title_en: 'Dynamic Events',
        title_fr: 'Événements Dynamiques',
        description_en: 'React to historical events that shape your destiny',
        description_fr: 'Réagissez aux événements historiques qui façonnent votre destin'
      },
      {
        title_en: 'Resource Management',
        title_fr: 'Gestion des Ressources',
        description_en: 'Balance trade, culture, and military might',
        description_fr: 'Équilibrez le commerce, la culture et la puissance militaire'
      }
    ],
    'makanda-mysteries': [
      {
        title_en: 'Cooperative Play',
        title_fr: 'Jeu Coopératif',
        description_en: 'Work together to uncover ancient secrets',
        description_fr: 'Travaillez ensemble pour découvrir les anciens secrets'
      },
      {
        title_en: 'Puzzle Solving',
        title_fr: 'Résolution d\'Énigmes',
        description_en: 'Decode symbols and solve intricate mysteries',
        description_fr: 'Décodez les symboles et résolvez les mystères complexes'
      },
      {
        title_en: 'Educational',
        title_fr: 'Éducatif',
        description_en: 'Learn about Congolese history and culture',
        description_fr: 'Apprenez l\'histoire et la culture congolaise'
      }
    ]
  }

  return featureMap[slug] || []
}
