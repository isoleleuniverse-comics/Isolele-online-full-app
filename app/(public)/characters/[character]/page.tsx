import { CharacterPageTemplate } from '@/components/character-page-template'
import { characterData, CharacterKey } from '@/lib/character-data'
import type { Metadata } from 'next'

interface CharacterPageProps {
  params: {
    character: string
  }
}

// Generate static params for all characters
export async function generateStaticParams() {
  return Object.keys(characterData).map((character) => ({
    character: character,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: CharacterPageProps): Promise<Metadata> {
  const character = characterData[params.character as CharacterKey]

  if (!character) {
    return {
      title: 'Character Not Found',
      description: 'The character you are looking for does not exist.',
    }
  }

  return {
    title: `ISOLELE | ${params.character}`,
    description: `Discover the story of ${params.character} in the ISOLELE universe`,
    openGraph: {
      title: `ISOLELE | ${params.character}`,
      description: `Discover the story of ${params.character} in the ISOLELE universe`,
      images: [
        {
          url: character.image,
          width: 1200,
          height: 1600,
        },
      ],
    },
  }
}

export default function CharacterPage({ params }: CharacterPageProps) {
  return <CharacterPageTemplate characterKey={params.character as CharacterKey} />
}
