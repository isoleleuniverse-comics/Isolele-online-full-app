import { useEffect, useRef, useState } from 'react'

/**
 * Hook pour charger les images de manière optimisée
 * Les images se chargent quand elles deviennent visibles
 */
export function useLazyImage() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { margin: '50px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return { ref, isVisible }
}

/**
 * Hook pour précharger les images critiques
 */
export function usePreloadImage(src: string) {
  useEffect(() => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = src
  }, [src])
}

/**
 * Hook pour gérer le chargement optimisé des polices
 */
export function useOptimizedFonts() {
  useEffect(() => {
    if ('fonts' in document) {
      const fonts = [
        new FontFace(
          'Geist',
          "url(/fonts/geist-sans.woff2) format('woff2')",
          { weight: '400' }
        ),
      ]

      fonts.forEach((font) => {
        document.fonts.add(font)
      })
    }
  }, [])
}
