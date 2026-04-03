"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

const scrollImages = [
  {
    src: "/images/zaiire-book-hand.jpg",
    alt: "ZAIIRE Book in Hand",
  },
  {
    src: "/images/isolele-city-illustration.jpg",
    alt: "ISOLELE City Illustration",
  },
  {
    src: "/images/cosmic-whirlwind-scene.jpg",
    alt: "Cosmic Whirlwind Scene",
  },
  {
    src: "/images/luxury-setting-scene.jpg",
    alt: "Luxury Setting Scene",
  },
  {
    src: "/images/necklace-transformation.jpg",
    alt: "Necklace Transformation",
  },
  {
    src: "/images/zaiire-prince-cover.jpg",
    alt: "ZAIIRE: The Prince of Kongo",
  },
  {
    src: "/images/body-transformation.jpg",
    alt: "Body Transformation",
  },
  {
    src: "/images/zaiire-cast-ensemble.jpg",
    alt: "ZAIIRE Cast Ensemble",
  },
]

export function InfiniteScrollCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    let scrollPosition = 0
    const scrollSpeed = 1 // pixels per frame
    
    const animate = () => {
      const containerWidth = scrollContainer.scrollWidth / 2
      scrollPosition += scrollSpeed
      if (scrollPosition >= containerWidth) {
        scrollPosition = 0
      }
      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`
    }

    // Start animation after a small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      const animationInterval = setInterval(animate, 16) // ~60fps
      return () => clearInterval(animationInterval)
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <section className="w-full py-12 overflow-hidden bg-background">
      <div className="w-full overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 will-change-transform"
          style={{
            width: "fit-content",
          }}
        >
          {/* First set of images */}
          {scrollImages.map((image, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-64 h-96 relative rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {scrollImages.map((image, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-64 h-96 relative rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
