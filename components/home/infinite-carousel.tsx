'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function InfiniteCarousel({ characters, currentTheme }: any) {
  const trackRef = useRef<HTMLDivElement>(null)
  const positionRef = useRef(0)
  const speedRef = useRef(1.2)
  const isSlowingRef = useRef(false)
  const slowFrameCountRef = useRef(0)
  const isPausedRef = useRef(false)
  const animationIdRef = useRef<number>()

  const CARD_WIDTH = 288 + 24 // 288px card + 24px gap
  const SLOW_ZONE_START = CARD_WIDTH * characters.length * 2 - 200
  const RESET_POSITION = CARD_WIDTH * characters.length

  useEffect(() => {
    const animate = () => {
      if (!trackRef.current || isPausedRef.current) {
        animationIdRef.current = requestAnimationFrame(animate)
        return
      }

      // Check if we're entering the slow zone
      if (positionRef.current >= SLOW_ZONE_START && !isSlowingRef.current) {
        isSlowingRef.current = true
        slowFrameCountRef.current = 0
      }

      // Apply speed changes
      if (isSlowingRef.current && slowFrameCountRef.current < 60) {
        // Slow down
        speedRef.current = 1.2 - (0.9 * (slowFrameCountRef.current / 60))
        slowFrameCountRef.current++
      } else if (positionRef.current < RESET_POSITION * 0.5 && isSlowingRef.current) {
        // Speed up after reset
        if (slowFrameCountRef.current < 120) {
          speedRef.current = 0.3 + (0.9 * ((slowFrameCountRef.current - 60) / 60))
          slowFrameCountRef.current++
        } else {
          speedRef.current = 1.2
          isSlowingRef.current = false
        }
      }

      // Move the track
      positionRef.current += speedRef.current
      trackRef.current.style.transform = `translateX(-${positionRef.current}px)`

      // Seamless loop - reset to middle clone
      if (positionRef.current >= RESET_POSITION * 2) {
        positionRef.current = RESET_POSITION
        trackRef.current.style.transform = `translateX(-${positionRef.current}px)`
        isSlowingRef.current = false
        slowFrameCountRef.current = 0
      }

      animationIdRef.current = requestAnimationFrame(animate)
    }

    animationIdRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
    }
  }, [characters.length])

  const handlePauseStart = () => {
    isPausedRef.current = true
  }

  const handlePauseEnd = () => {
    isPausedRef.current = false
  }

  // Triplicate the cards for seamless looping
  const triplicatedCards = [...characters, ...characters, ...characters]

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={trackRef}
        className="flex gap-6"
        style={{
          willChange: 'transform',
          transition: 'none'
        }}
      >
        {triplicatedCards.map((character, index) => (
          <div
            key={`${character.id}-${index}`}
            className="flex-shrink-0 w-72 group"
            onMouseDown={handlePauseStart}
            onMouseUp={handlePauseEnd}
            onMouseLeave={handlePauseEnd}
            onTouchStart={handlePauseStart}
            onTouchEnd={handlePauseEnd}
          >
            <Link href={`/characters/${character.id}`}>
              <div 
                className="relative h-96 rounded-2xl overflow-hidden mb-4 transition-all duration-500 cursor-pointer"
                style={{
                  backgroundColor: currentTheme.colors.backgroundSecondary,
                  border: `1px solid ${currentTheme.colors.accentPrimary}30`,
                }}
              >
                {/* Character image */}
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url('${character.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center'
                  }}
                />
                
                {/* Gradient overlay */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, ${character.color}40 50%, ${currentTheme.colors.background} 100%)`
                  }}
                />
                
                {/* Hover overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    background: `linear-gradient(to top, ${currentTheme.colors.background} 0%, transparent 50%)`
                  }}
                />
              </div>
              
              {/* Character info */}
              <h3 
                className="text-2xl font-black tracking-wider mb-1"
                style={{ color: currentTheme.colors.textPrimary }}
              >
                {character.name}
              </h3>
              <p 
                className="text-xs font-medium mb-3 whitespace-nowrap overflow-hidden text-ellipsis"
                style={{ color: character.color }}
              >
                {character.title}
              </p>
              
              {/* Discover button */}
              <motion.span
                className="inline-flex items-center gap-2 text-sm font-bold tracking-wider"
                style={{ color: currentTheme.colors.accentPrimary }}
                whileHover={{ x: 5 }}
              >
                discover
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  →
                </motion.span>
              </motion.span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
