"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // 3-second immersive load
    const duration = 3000
    const interval = 20
    const increment = 100 / (duration / interval)

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return Math.min(prev + increment, 100)
      })
    }, interval)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setIsComplete(true)
        setTimeout(onComplete, 500)
      }, 400)
    }
  }, [progress, onComplete])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background animated blur effect */}
          <div className="absolute inset-0 opacity-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-full h-full"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plug%20hover%20load%20image%20isolele-9yXBgFpQgCY8EQC9Pp0QnSUkE3zNps.jpg"
                alt="Loading background"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

          {/* Content Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 flex flex-col items-center gap-12"
          >
            {/* Main Loading Image */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-64 h-64 md:w-80 md:h-80 relative"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plug%20hover%20load%20image%20isolele-9yXBgFpQgCY8EQC9Pp0QnSUkE3zNps.jpg"
                alt="ISOLELE Loading"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>

            {/* Title with Animation */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h1 
                className="text-3xl md:text-5xl font-bold tracking-widest mb-2"
                style={{ color: "#F6B800", fontFamily: "Montserrat, sans-serif" }}
              >
                ISOLELE
              </h1>
              <p 
                className="text-xs md:text-sm tracking-[0.2em] uppercase"
                style={{ color: "#d0d0d0" }}
              >
                African Mythology. Reawakened.
              </p>
            </motion.div>

            {/* Enhanced Progress Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="w-56 md:w-80"
            >
              {/* Outer glow */}
              <div 
                className="h-1.5 rounded-full overflow-hidden mb-4"
                style={{ background: "rgba(246, 184, 0, 0.1)" }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #F6B800 0%, #FFD000 50%, #F6B800 100%)",
                    boxShadow: "0 0 20px rgba(246, 184, 0, 0.8)"
                  }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear", duration: 0.05 }}
                />
              </div>

              {/* Progress percentage with styling */}
              <div className="flex justify-between items-center">
                <span style={{ color: "#F6B800" }} className="text-xs font-bold tracking-wider">
                  LOADING
                </span>
                <span style={{ color: "#F6B800" }} className="text-sm font-bold">
                  {Math.round(progress)}%
                </span>
              </div>
            </motion.div>

            {/* Animated status text */}
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-xs md:text-sm tracking-widest uppercase mt-4"
              style={{ color: "#d0d0d0" }}
            >
              Awakening the Chosen Ones...
            </motion.p>
          </motion.div>

          {/* Animated bottom accent line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1"
            style={{ background: "linear-gradient(90deg, transparent, #F6B800, transparent)" }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
