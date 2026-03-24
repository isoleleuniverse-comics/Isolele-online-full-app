import { redirect } from 'next/navigation'
import { GameDetailContent } from '@/components/game-detail-content'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return {
    title: `ISOLELE - ${slug}`,
    description: `Discover the ${slug} game from ISOLELE universe`,
  }
}

const GAMES_DATA: Record<string, any> = {
  'kufu-the-crown-game': {
    id: 'kufu-crown',
    title: 'KUFU',
    slug: 'kufu-the-crown-game',
    subtitle: { en: 'The Crown Game', fr: 'Le Jeu de la Couronne' },
    image_url: '/games/kufu-card.jpg',
    rating: 4.8,
    players: '2-6',
    category: { en: 'Card Game', fr: 'Jeu de Cartes' },
    description: {
      en: 'KUFU Ludo - An immersive strategy game rooted in African royal traditions, featuring the legendary King Kufulula and the mysteries of the Kongo crown.',
      fr: 'KUFU Ludo - Un jeu de stratégie immersif enraciné dans les traditions royales africaines, mettant en vedette le légendaire Roi Kufulula et les mystères de la couronne Kongo.'
    },
    features: [
      {
        title: { en: 'Strategic Gameplay', fr: 'Jeu Stratégique' },
        description: { en: 'Master the art of royal diplomacy', fr: 'Maîtrisez l\'art de la diplomatie royale' }
      },
      {
        title: { en: 'African Heritage', fr: 'Héritage Africain' },
        description: { en: 'Immerse yourself in Kongo traditions', fr: 'Immergez-vous dans les traditions Kongo' }
      }
    ],
    images: [
      { image_url: '/games/kufu-card.jpg', title: { en: 'Card Design', fr: 'Design de Carte' } }
    ]
  },
  'zaiire-conquest': {
    id: 'zaiire-conquest',
    title: 'ZAIIRE CONQUEST',
    slug: 'zaiire-conquest',
    subtitle: { en: 'Empire Building', fr: 'Construction d\'Empire' },
    image_url: '/games/zaiire-conquest.jpg',
    rating: 4.6,
    players: '1-4',
    category: { en: 'Strategy', fr: 'Stratégie' },
    description: {
      en: 'Build your African empire through strategy and diplomacy. Lead your nation to glory.',
      fr: 'Construisez votre empire africain par la stratégie et la diplomatie. Menez votre nation à la gloire.'
    },
    features: [
      {
        title: { en: 'Empire Building', fr: 'Construction d\'Empire' },
        description: { en: 'Expand your territory', fr: 'Étendez votre territoire' }
      },
      {
        title: { en: 'Diplomacy', fr: 'Diplomatie' },
        description: { en: 'Form alliances and treaties', fr: 'Formez des alliances et des traités' }
      }
    ],
    images: [
      { image_url: '/games/zaiire-conquest.jpg', title: { en: 'Game Preview', fr: 'Aperçu du Jeu' } }
    ]
  },
  'makanda-mysteries': {
    id: 'makanda-mysteries',
    title: 'MAKANDA MYSTERIES',
    slug: 'makanda-mysteries',
    subtitle: { en: 'Cooperative Adventure', fr: 'Aventure Coopérative' },
    image_url: '/games/makanda-mysteries.jpg',
    rating: 4.7,
    players: '2-5',
    category: { en: 'Puzzle', fr: 'Puzzle' },
    description: {
      en: 'Uncover the secrets of the lost Makanda empire in this thrilling cooperative puzzle adventure.',
      fr: 'Découvrez les secrets de l\'empire perdu de Makanda dans cette passionnante aventure de puzzle coopérative.'
    },
    features: [
      {
        title: { en: 'Cooperative Puzzles', fr: 'Énigmes Coopératives' },
        description: { en: 'Work together to solve mysteries', fr: 'Travaillez ensemble pour résoudre des mystères' }
      },
      {
        title: { en: 'Ancient Secrets', fr: 'Secrets Anciens' },
        description: { en: 'Unlock hidden history', fr: 'Déverrouiller l\'histoire cachée' }
      }
    ],
    images: [
      { image_url: '/games/makanda-mysteries.jpg', title: { en: 'Adventure Awaits', fr: 'L\'Aventure Vous Attend' } }
    ]
  }
}

export default async function GameDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const game = GAMES_DATA[slug]
  
  if (!game) {
    redirect('/games')
  }

  return <GameDetailContent game={game} />
}
