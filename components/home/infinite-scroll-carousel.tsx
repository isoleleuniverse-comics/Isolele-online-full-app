"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

const scrollImages = [
  { src: "/images/zaiire-book-hand.jpg", alt: "ZAIIRE Book in Hand" },
  { src: "/images/isolele-city-illustration.jpg", alt: "ISOLELE City Illustration" },
  { src: "/images/cosmic-whirlwind-scene.jpg", alt: "Cosmic Whirlwind Scene" },
  { src: "/images/luxury-setting-scene.jpg", alt: "Luxury Setting Scene" },
  { src: "/images/necklace-transformation.jpg", alt: "Necklace Transformation" },
  { src: "/images/zaiire-prince-cover.jpg", alt: "ZAIIRE: The Prince of Kongo" },
  { src: "/images/body-transformation.jpg", alt: "Body Transformation" },
  { src: "/images/zaiire-cast-ensemble.jpg", alt: "ZAIIRE Cast Ensemble" },
]

export function InfiniteScrollCarousel() {
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = innerRef.current
    if (!container) return

    let position = 0
    const speed = 1

    const loop = () => {
      position += speed
      
      // Get the width of one set of images (half the total)
      const halfWidth = container.scrollWidth / 2
      
      if (position >= halfWidth) {
        position = 0
      }

      container.style.transform = `translateX(-${position}px)`
      requestAnimationFrame(loop)
    }

    requestAnimationFrame(loop)
  }, [])

  return (
    <section className="w-full py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            Immersive Story
          </h2>
          <p className="text-lg text-foreground/70">
            Experience the worlds of ISOLELE
          </p>
        </div>

        <div className="w-full overflow-hidden rounded-2xl bg-gradient-to-r from-background via-background to-background">
          <div
            ref={innerRef}
            className="flex gap-4"
            style={{
              width: "fit-content",
              willChange: "transform",
            }}
          >
            {/* First loop */}
            {scrollImages.map((img, i) => (
              <div
                key={`set1-${i}`}
                className="flex-shrink-0"
                style={{ width: "280px", height: "400px" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={280}
                  height={400}
                  className="w-full h-full object-cover rounded-lg"
                  priority={i < 2}
                  quality={90}
                />
              </div>
            ))}

            {/* Second loop (duplicate for seamless) */}
            {scrollImages.map((img, i) => (
              <div
                key={`set2-${i}`}
                className="flex-shrink-0"
                style={{ width: "280px", height: "400px" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={280}
                  height={400}
                  className="w-full h-full object-cover rounded-lg"
                  quality={90}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
