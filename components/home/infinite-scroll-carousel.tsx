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
  const innerContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    const inner = innerContainerRef.current
    if (!inner || !scrollContainer) return

    let scrollPosition = 0
    const scrollSpeed = 1 // pixels per frame
    let animationId: number
    
    const animate = () => {
      // Calculate half width (since we duplicate images)
      const totalScrollWidth = inner.scrollWidth / 2
      
      scrollPosition += scrollSpeed
      
      // Reset to beginning when reaching halfway
      if (scrollPosition >= totalScrollWidth) {
        scrollPosition = 0
      }
      
      inner.style.transform = `translateX(-${scrollPosition}px)`
      animationId = requestAnimationFrame(animate)
    }
    
    // Start animation immediately
    animationId = requestAnimationFrame(animate)
    
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="w-full py-16 bg-background">
      <div className="mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-3">Immersive Story</h2>
          <p className="text-lg text-foreground/70">Experience the worlds of ISOLELE</p>
        </div>

        <div 
          ref={scrollContainerRef}
          className="w-full overflow-hidden -mx-4 md:-mx-6"
        >
          <div
            ref={innerContainerRef}
            className="flex gap-4 pl-4 md:pl-6"
            style={{
              willChange: "transform",
            }}
          >
            {/* First set of images */}
            {scrollImages.map((image, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-56 h-80 md:w-64 md:h-96 relative rounded-xl overflow-hidden shadow-xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  quality={85}
                  sizes="(max-width: 768px) 224px, 256px"
                  priority={index < 2}
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {scrollImages.map((image, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-56 h-80 md:w-64 md:h-96 relative rounded-xl overflow-hidden shadow-xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  quality={85}
                  sizes="(max-width: 768px) 224px, 256px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
