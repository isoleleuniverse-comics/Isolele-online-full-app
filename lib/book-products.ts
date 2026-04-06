export interface BookProduct {
  id: string
  name: string
  subtitle: string
  description: string
  fullDescription: string
  priceInCents: number
  accentColor: string
  coverImage: string
  format: string
  pages: number
  tags: string[]
}

export const BOOK_PRODUCTS: BookProduct[] = [
  {
    id: "zaiire",
    name: "Zaiire: The Prince of Kongo",
    subtitle: "Necklace of Destiny",
    description:
      "An action-packed and uplifting adventure that echoes the spirit of The Lion King and Black Panther, while offering young readers a celebration of heritage, courage, and self-discovery.",
    fullDescription:
      "Journey into the mystical realm of Kongo where Zaiire discovers his destiny as the Prince foretold by ancient prophecies. Bound to the legendary Necklace of Destiny, young Zaiire must overcome powerful adversaries, unlocking mystical powers passed down through generations. With breathtaking artwork and compelling storytelling, this epic adventure explores themes of identity, courage, and the strength found in cultural heritage.",
    priceInCents: 3699,
    accentColor: "#F6B800",
    coverImage: "/images/book2.webp",
    format: "Paperback",
    pages: 156,
    tags: ["African Mythology", "Coming of Age", "Fantasy", "Superhero", "Young Adult"],
  },
  {
    id: "makanda",
    name: "Makanda: The Rising Kandake",
    subtitle: "Empire of the Ancient Queens",
    description:
      "A breathtaking saga of power, legacy, and sovereignty. Makanda rises from chosen warrior to unstoppable queen, reclaiming the throne stolen from her bloodline across three kingdoms.",
    fullDescription:
      "Born into royalty but raised in exile, Makanda has always known her purpose. When the ancient matrilineal empire is threatened by an outside force seeking to erase its memory, she must master the forgotten arts of her ancestors and unite the divided queendoms of the South. A story of fierce femininity, ancestral strength, and the unbreakable will to reclaim what is yours.",
    priceInCents: 3699,
    accentColor: "#C0392B",
    coverImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg",
    format: "Paperback",
    pages: 172,
    tags: ["African Queens", "Empire", "History", "Girl Power", "Fantasy"],
  },
  {
    id: "bambula",
    name: "Bambula: Spirit of the Ancestors",
    subtitle: "The Drum That Speaks to Heaven",
    description:
      "A deeply spiritual journey through sound, memory, and ancestral communication. Bambula carries the ancient drumbeat that bridges the living and the dead — and he alone can prevent the silence that would end both worlds.",
    fullDescription:
      "In a world where rhythm is sacred and silence is death, Bambula inherits the most dangerous gift his bloodline has ever carried — the ability to speak directly to the ancestors through the beat of the sacred drum. When a dark force threatens to sever the connection between the living and the spiritual realm, Bambula must master his gift before the last heartbeat fades. Raw emotion, ancestral wisdom, and explosive action converge in this unforgettable story.",
    priceInCents: 3699,
    accentColor: "#B3541E",
    coverImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bambula%201-UAlmQoZVy1GslUfmVvqc5bdDDdEQdX.jpg",
    format: "Paperback",
    pages: 148,
    tags: ["Ancestral Spirits", "Music & Culture", "Spiritual Journey", "African Tradition"],
  },
  {
    id: "mokele",
    name: "Mokele: Prince of the Waters",
    subtitle: "Guardian of the Sacred River",
    description:
      "A mythic underwater odyssey rooted in the legends of Central Africa. Mokele is the last guardian of the sacred river, and his battle to protect the ancient waters from greed and corruption will determine the fate of an entire civilization.",
    fullDescription:
      "From the depths of the Congo River emerges a legend older than memory. Mokele, heir to the ancient water spirits, must navigate a world that has forgotten its covenant with nature. When industrialists seek to drain the sacred waters and destroy the last portal between worlds, Mokele awakens powers so immense they shake the earth itself. A powerful story of ecology, tradition, and the untameable force of nature's fury.",
    priceInCents: 3699,
    accentColor: "#4169E1",
    coverImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mokele.png-7sTyiUJYN8wJbiGll8YdVThtR4F8FT.jpeg",
    format: "Paperback",
    pages: 164,
    tags: ["Nature & Water", "Congo Legend", "Guardian", "Ecology", "Adventure"],
  },
  {
    id: "amara",
    name: "Amara: Queen of the Seas",
    subtitle: "No Tide Has Ever Stopped Her",
    description:
      "A fearless pirate queen who commands every ocean. Amara was not given power — she seized it, wave by wave, ship by ship, kingdom by kingdom. The seas answer only to her now.",
    fullDescription:
      "No king ever ruled the waters the way Amara does. Born the daughter of a coastal fisherman and a displaced warrior queen, Amara built her empire from nothing but rage, intelligence, and an unshakeable belief that the ocean is the last free place in the world. When an alliance of empires conspires to take the seas for themselves, Amara must forge the most unlikely alliance in history and face the greatest naval battle ever fought. Daring, bold, and impossible to ignore.",
    priceInCents: 3699,
    accentColor: "#1E90B3",
    coverImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1173-wrVJYiZhuW6ZvCM0Xronsu544ccrqV.jpeg",
    format: "Paperback",
    pages: 180,
    tags: ["Pirates", "Ocean", "Female Warrior", "Empire", "Adventure"],
  },
  {
    id: "zattar",
    name: "Zattar: The Prince of the Universe",
    subtitle: "When One Kingdom Was Not Enough",
    description:
      "When Destiny refused him one kingdom, he decided to take them all. Zattar was born to inherit a throne — but when the Ancestors chose another, something inside him did not break. It ignited.",
    fullDescription:
      "Prince Zattar was the firstborn, the trained heir, the chosen son in every way except the one that mattered. When the sacred stones passed him over, the humiliation became fuel. Rejecting the limits of his world, Zattar set out to carve his own empire across realms no map had ever charted. But ambition without wisdom is a double-edged blade, and Zattar will be forced to choose between the king he wants to be and the man he was raised to become.",
    priceInCents: 3699,
    accentColor: "#2E8B57",
    coverImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e9c64c65-3717-4fe3-a391-885767df3303-LbjnMwCViF43pwErKmoFv7iGxQdCeQ.jpeg",
    format: "Paperback",
    pages: 192,
    tags: ["Cosmic Adventure", "Ambition", "Redemption", "Multiple Realms", "Epic Fantasy"],
  },
  {
    id: "zaiko",
    name: "Zaiko: Last King of the Streets",
    subtitle: "Born in North Kivu. Forged in Kinshasa.",
    description:
      "Zaiko was never meant to survive. But survival was never enough. In a world ruled by power, money, and fear, he rises from nothing — and crowns himself with what the streets tried to take from him.",
    fullDescription:
      "The streets of Kinshasa are a kingdom with no mercy. Zaiko grew up with nothing — no title, no bloodline, no safety net. But what the streets could not take from him was his mind, his fire, and the ancestral mark hidden beneath his skin. When a shadow organization threatens to erase his entire community, Zaiko must embrace who he truly is: the last heir of a forgotten royal lineage, hidden in plain sight among the people the world ignores. Gritty, powerful, and deeply human.",
    priceInCents: 3699,
    accentColor: "#8B7355",
    coverImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1175-njlosetUOsqZszKylrOXsIRLw0l3s7.jpeg",
    format: "Paperback",
    pages: 176,
    tags: ["Urban", "Street Life", "Hidden Royalty", "Kinshasa", "Action"],
  },
  {
    id: "imvula",
    name: "Queen Imvula: The Storm Maiden",
    subtitle: "She Who Commands Heaven and Rain",
    description:
      "Command the heavens and the rain. Queen Imvula's reign brings hope and transformation as she harnesses the elements to protect her people from ancient evils threatening to consume the land.",
    fullDescription:
      "Imvula is more than a queen — she is nature's fury and hope incarnate. With the power to command storms and bring rain to parched lands, she stands as a beacon of light for her people. This epic tells of her rise to power, her deepening connection to ancestral spirits, and her battle against forces that would enslave her world. Stunning watercolor-inspired artwork brings the storms and sacred magic to life on every page.",
    priceInCents: 3699,
    accentColor: "#4682B4",
    coverImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260308-WA0059-75yxyGjuDt9hhqXF6obymfG8BpNLz4.jpg",
    format: "Paperback",
    pages: 184,
    tags: ["Elemental Magic", "Nature", "African Queen", "Hope", "Ancestral Power"],
  },
  {
    id: "kimoya",
    name: "Kimoya: The Rising Kandake",
    subtitle: "Empire of the Ancient Queens",
    description:
      "A breathtaking saga of sovereignty and rebirth. Kimoya rises from the ashes of a broken empire, reclaiming the ancient queendoms that time tried to erase — one battle at a time.",
    fullDescription:
      "The throne was never meant for her, yet the ancestors chose her. Kimoya was raised as a warrior, trained as a scholar, and hardened by exile. When the ancient queendoms fall into the hands of those who would destroy them, she answers the call — not with an army, but with the power of remembered truth. A story about the weight of legacy, the courage to rebuild, and why some thrones exist to be reclaimed.",
    priceInCents: 3699,
    accentColor: "#8B008B",
    coverImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg",
    format: "Paperback",
    pages: 176,
    tags: ["African Queens", "Empire", "Legacy", "Warrior Woman", "Fantasy"],
  },
  {
    id: "njoko",
    name: "The Njoko Twins: Bound by Destiny",
    subtitle: "Two Souls, One Unbreakable Spirit",
    description:
      "Twin souls separated by fate yet forever connected. Their intertwined story reveals the eternal balance between light and shadow — and what happens when that balance breaks.",
    fullDescription:
      "Two souls, one spirit. The Njoko twins were born under a blood moon, destined to be forever connected yet forced apart by circumstance. One walks the path of light, the other embraces shadow. Their reunion promises to reshape the cosmic balance. This dual-narrative comic explores themes of unity, identity, and the eternal dance between opposing forces in African cosmology — told through breathtaking sequential art.",
    priceInCents: 3699,
    accentColor: "#696969",
    coverImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1175-njlosetUOsqZszKylrOXsIRLw0l3s7.jpeg",
    format: "Paperback",
    pages: 168,
    tags: ["Cosmic Balance", "Twins", "Duality", "African Spirituality", "Epic"],
  },
]
