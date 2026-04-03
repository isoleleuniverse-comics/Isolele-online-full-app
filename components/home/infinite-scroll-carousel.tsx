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
    const inner = innerContainerRef.current
    if (!inner) return

    let scrollPosition = 0
    const scrollSpeed = 0.5 // pixels per frame
    
    // Wait for images to load
    setTimeout(() => {
      const animate = () => {
        const totalWidth = inner.scrollWidth / 2
        scrollPosition += scrollSpeed
        
        if (scrollPosition >= totalWidth) {
          scrollPosition = 0
        }
        
        if (inner) {
          inner.style.transform = `translateX(-${scrollPosition}px)`
        }
        
        requestAnimationFrame(animate)
      }
      
      animate()
    }, 500)
  }, [])

  return (
    <section className="w-full py-16 bg-background">
      <div className="max-w-full">
        <div className="text-center mb-12 px-4">
          <h2 className="text-4xl font-bold text-foreground mb-3">Immersive Story</h2>
          <p className="text-lg text-foreground/70">Experience the worlds of ISOLELE</p>
        </div>

        <div 
          ref={scrollContainerRef}
          className="w-full overflow-hidden"
        >
          <div
            ref={innerContainerRef}
            className="flex gap-4 md:gap-6"
            style={{
              width: "fit-content",
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
