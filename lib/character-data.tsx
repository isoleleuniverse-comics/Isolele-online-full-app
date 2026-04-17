export type CharacterKey = 'zaiire' | 'bambula' | 'kimoya' | 'mokele' | 'kufulula' | 'ensemble'

export interface Character {
  nameKey: string
  titleKey: string
  shortDescKey: string
  status: string
  color: string
  image: string
}

export const characterData: Record<CharacterKey, Character> = {
  zaiire: {
    nameKey: 'character_zaiire_name',
    titleKey: 'character_zaiire_title',
    shortDescKey: 'character_zaiire_desc',
    status: 'PRINCE OF KONGO',
    color: '#F6B800',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZAIIRE%20-%20PRINCE%20OF%20KONGO-hmOq1ET63L87xXbWVilEom8IqvT0jo.jpg',
  },
  bambula: {
    nameKey: 'character_bambula_name',
    titleKey: 'character_bambula_title',
    shortDescKey: 'character_bambula_desc',
    status: 'CHILD OF RHYTHM',
    color: '#B3541E',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bambula%201-UAlmQoZVy1GslUfmVvqc5bdDDdEQdX.jpg',
  },
  kimoya: {
    nameKey: 'character_kimoya_name',
    titleKey: 'character_kimoya_title',
    shortDescKey: 'character_kimoya_desc',
    status: 'EMPRESS',
    color: '#C0392B',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260323-WA0012-2zfYaTNiUmh8XgNPMwbkLcKExGX65Q.jpg',
  },
  mokele: {
    nameKey: 'character_mokele_name',
    titleKey: 'character_mokele_title',
    shortDescKey: 'character_mokele_desc',
    status: 'HEIR OF STREETS',
    color: '#4169E1',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5bdc2ecc-913b-412b-a840-2a5197cd801a.jpeg',
  },
  kufulula: {
    nameKey: 'character_kufulula_name',
    titleKey: 'character_kufulula_title',
    shortDescKey: 'character_kufulula_desc',
    status: 'KING & VISIONARY',
    color: '#8B6914',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/King%20kufulula-1pEeYE9t1QYruZhNooZuPw7Nkd1A8l.jpg',
  },
  ensemble: {
    nameKey: 'character_ensemble_name',
    titleKey: 'character_ensemble_title',
    shortDescKey: 'character_ensemble_desc',
    status: 'THE CHOSEN ONES',
    color: '#9932CC',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c389067b-e5b3-4664-8c15-26b59810c68b.jpeg',
  },
}
