"use client"

import { useRef, useEffect, useState } from "react"

interface Character {
  id: string
  name: string
  title: string
  description: string
  image: string
  color: string
}

const CARD_WIDTH = 256
const CARD_HEIGHT = 340
const CARD_GAP = 20
const NORMAL_SPEED = 1.2
const SLOW_SPEED = 0.3
const SLOWDOWN_FRAMES = 60
const HEADER_HEIGHT = 64

export function InfiniteCarousel({ characters, currentTheme }: { characters: Character[]; currentTheme: any }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const positionRef = useRef(0)
  const speedRef = useRef(NORMAL_SPEED)
  const frameCountRef = useRef(0)
  const isSlowingRef = useRef(false)
  const isSpeedingUpRef = useRef(false)
  const animationIdRef = useRef<number | null>(null)
  const isPausedRef = useRef(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const cardWidth = CARD_WIDTH + CARD_GAP
  const tripleLength = characters.length * 3
  const totalWidth = tripleLength * cardWidth
  const firstSetEnd = characters.length * cardWidth
  const secondSetEnd = firstSetEnd * 2

  // Tripple the cards array for seamless looping
  const tripleCharacters = [...characters, ...characters, ...characters]

  useEffect(() => {
    const animate = () => {
      if (isPausedRef.current) {
        animationIdRef.current = requestAnimationFrame(animate)
        return
      }

      // Speed up logic
      if (isSpeedingUpRef.current) {
        frameCountRef.current++
        if (frameCountRef.current >= SLOWDOWN_FRAMES) {
          speedRef.current = NORMAL_SPEED
          isSpeedingUpRef.current = false
          frameCountRef.current = 0
        } else {
          const progress = frameCountRef.current / SLOWDOWN_FRAMES
          speedRef.current = SLOW_SPEED + (NORMAL_SPEED - SLOW_SPEED) * progress
        }
      }
      // Slow down logic
      else if (isSlowingRef.current) {
        frameCountRef.current++
        if (frameCountRef.current >= SLOWDOWN_FRAMES) {
          isSlowingRef.current = false
          isSpeedingUpRef.current = true
          frameCountRef.current = 0
        } else {
          const progress = frameCountRef.current / SLOWDOWN_FRAMES
          speedRef.current = NORMAL_SPEED - (NORMAL_SPEED - SLOW_SPEED) * progress
        }
      }

      // Move the track
      positionRef.current += speedRef.current

      // Check if we're approaching the loop point (near end of second set)
      if (positionRef.current > secondSetEnd - cardWidth * 2 && !isSlowingRef.current && !isSpeedingUpRef.current) {
        isSlowingRef.current = true
        frameCountRef.current = 0
      }

      // Reset to middle clone seamlessly
      if (positionRef.current >= secondSetEnd) {
        positionRef.current = firstSetEnd
      }

      // Update track position
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${positionRef.current}px)`
      }

      // Update current index for display
      const index = Math.floor((positionRef.current % firstSetEnd) / cardWidth)
      setCurrentIndex(index)

      animationIdRef.current = requestAnimationFrame(animate)
    }

    animationIdRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
    }
  }, [firstSetEnd, secondSetEnd, cardWidth])

  const handlePause = () => {
    isPausedRef.current = true
  }

  const handleResume = () => {
    isPausedRef.current = false
  }

  const handleLeftClick = () => {
    const targetIndex = (currentIndex - 1 + characters.length) % characters.length
    positionRef.current = firstSetEnd + targetIndex * cardWidth
  }

  const handleRightClick = () => {
    const targetIndex = (currentIndex + 1) % characters.length
    positionRef.current = firstSetEnd + targetIndex * cardWidth
  }

  return (
    <div style={{ backgroundColor: currentTheme.colors.background }}>
      {/* Header */}
      <div
        style={{
          backgroundColor: "#2A2A2A",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          height: HEADER_HEIGHT,
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "#C8972A",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            fontWeight: "bold",
            color: "#2A2A2A",
          }}
        >
          ⚜
        </div>
        <div>
          <div style={{ fontSize: "20px", fontWeight: "bold", color: "#C8972A", letterSpacing: "2px" }}>
            ISOLELE
          </div>
          <div style={{ fontSize: "11px", color: "#999", letterSpacing: "1px", marginTop: "2px" }}>
            THE CHOSEN ONES
          </div>
        </div>
      </div>

      {/* Navigation Arrows & Carousel Container */}
      <div
        style={{
          padding: "24px",
          paddingBottom: "32px",
          position: "relative",
        }}
      >
        {/* Arrow Buttons */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "24px",
            alignItems: "center",
          }}
        >
          <button
            onClick={handleLeftClick}
            onMouseDown={handlePause}
            onMouseUp={handleResume}
            onMouseLeave={handleResume}
            onTouchStart={handlePause}
            onTouchEnd={handleResume}
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              backgroundColor: "#E8DCC8",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              color: "#8B6914",
              fontWeight: "bold",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => {
              ;(e.target as HTMLButtonElement).style.transform = "scale(1.05)"
            }}
            onMouseLeave={(e) => {
              ;(e.target as HTMLButtonElement).style.transform = "scale(1)"
            }}
          >
            ‹
          </button>

          <button
            onClick={handleRightClick}
            onMouseDown={handlePause}
            onMouseUp={handleResume}
            onMouseLeave={handleResume}
            onTouchStart={handlePause}
            onTouchEnd={handleResume}
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              backgroundColor: "#E8DCC8",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              color: "#8B6914",
              fontWeight: "bold",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => {
              ;(e.target as HTMLButtonElement).style.transform = "scale(1.05)"
            }}
            onMouseLeave={(e) => {
              ;(e.target as HTMLButtonElement).style.transform = "scale(1)"
            }}
          >
            ›
          </button>
        </div>

        {/* Carousel Track */}
        <div
          style={{
            overflow: "hidden",
            position: "relative",
            borderRadius: "20px",
          }}
        >
          <div
            ref={trackRef}
            onMouseDown={handlePause}
            onMouseUp={handleResume}
            onMouseLeave={handleResume}
            onTouchStart={handlePause}
            onTouchEnd={handleResume}
            style={{
              display: "flex",
              gap: `${CARD_GAP}px`,
              width: `${totalWidth}px`,
              transition: "none",
              willChange: "transform",
            }}
          >
            {tripleCharacters.map((card, index) => (
              <div
                key={index}
                style={{
                  flexShrink: 0,
                  width: `${CARD_WIDTH}px`,
                  height: `${CARD_HEIGHT}px`,
                  borderRadius: "20px",
                  overflow: "hidden",
                  backgroundColor: "#FAFAF5",
                  cursor: "grab",
                  userSelect: "none",
                }}
              >
                {/* Card Image */}
                <div
                  style={{
                    width: "100%",
                    height: "200px",
                    backgroundImage: `url('${card.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  {/* Fade Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "60px",
                      background: "linear-gradient(to bottom, transparent, #FAFAF5)",
                      pointerEvents: "none",
                    }}
                  />
                </div>

                {/* Card Content */}
                <div style={{ padding: "16px", height: "140px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: "900",
                        color: "#1A1A1A",
                        margin: "0 0 8px 0",
                        lineHeight: "1.2",
                      }}
                    >
                      {card.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "12px",
                        fontStyle: "italic",
                        color: card.color,
                        margin: "0",
                        lineHeight: "1.2",
                      }}
                    >
                      {card.title}
                    </p>
                  </div>

                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "#C8972A",
                      textDecoration: "none",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                    onMouseEnter={(e) => {
                      ;(e.target as HTMLAnchorElement).style.opacity = "0.7"
                    }}
                    onMouseLeave={(e) => {
                      ;(e.target as HTMLAnchorElement).style.opacity = "1"
                    }}
                  >
                    discover →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation Bar */}
        <div
          style={{
            marginTop: "24px",
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            padding: "12px 16px",
            backgroundColor: "#F5F1E8",
            borderRadius: "44px",
            width: "fit-content",
            margin: "24px auto 0",
          }}
        >
          {[
            { icon: "🏠", label: "home" },
            { icon: "👥", label: "people" },
            { icon: "📦", label: "collection" },
            { icon: "🎮", label: "game" },
            { icon: "⚙️", label: "settings" },
          ].map((btn, i) => (
            <button
              key={i}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
                fontSize: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => {
                ;(e.target as HTMLButtonElement).style.backgroundColor = "#E8DCC8"
              }}
              onMouseLeave={(e) => {
                ;(e.target as HTMLButtonElement).style.backgroundColor = "transparent"
              }}
              title={btn.label}
            >
              {btn.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
