import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "KUFU – The Crown Game | ISOLELE",
  description:
    "Enter the realm of African royalty through KUFU – The Crown Game. An immersive ludo-style strategy board game rooted in Kongo cosmology. Part of the ISOLELE universe.",
  keywords: ["KUFU game", "board game", "African games", "ISOLELE", "Crown Game", "Kongo"],
  openGraph: {
    title: "KUFU – The Crown Game",
    description:
      "Experience African royalty through an immersive board game featuring the ISOLELE universe.",
    url: "https://isolele.com/kufu-game",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260304-WA0012-XSCUSyYtBnqRoFkU9Ubd5qRihh3IXm.jpg",
        width: 1200,
        height: 800,
        alt: "KUFU Ludo — The Crown Game",
      },
    ],
    type: "website",
  },
}

export default function KufuGameLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
