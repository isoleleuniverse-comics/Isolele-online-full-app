"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)
  const progressRef = useRef(0)
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  useEffect(() => {
    // Simple progress animation to 100% in 2 seconds
    const DURATION = 2000
    const INTERVAL = 20
    const increment = 100 / (DURATION / INTERVAL)

    const timer = setInterval(() => {
      progressRef.current = Math.min(progressRef.current + increment, 100)
      setProgress(progressRef.current)
      
      if (progressRef.current >= 100) {
        clearInterval(timer)
        // Wait for page ready, then exit
        setTimeout(() => {
          setVisible(false)
          setTimeout(() => onCompleteRef.current(), 200)
        }, 300)
      }
    }, INTERVAL)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260217-WA0019-5QkKPDwjEXwxZErsLSvxQ5HTEym3ro.jpg"
              alt="ISOLELE background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.55)" }} />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Circle image */}
            <div
              className="relative overflow-hidden"
              style={{
                width: 260,
                height: 260,
                borderRadius: "50%",
                border: "4px solid #F6B800",
                boxShadow: "0 0 40px rgba(246,184,0,0.5), 0 0 80px rgba(246,184,0,0.2)",
              }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CERCLE-ISOLELE%202026%20copie.png-46W5InEwqtpwlTrRObuQMzt4LY3TPH.jpeg"
                alt="CERCLE-ISOLELE 2026"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Logo */}
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ei_1774029892268-removebg-preview-OGLwAWrJqgxIOFX6ES21zzBCcRpiHa.png"
                  alt="ISOLELE - The Chosen Ones"
                  width={260}
                  height={70}
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-xs tracking-[0.22em] uppercase" style={{ color: "#d8d8d8" }}>
                House of African Comic Royalty...
              </p>
            </div>

            {/* Progress bar */}
            <div className="w-64 md:w-80">
              <div
                className="h-[3px] rounded-full overflow-hidden mb-3"
                style={{ background: "rgba(246, 184, 0, 0.15)" }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #F6B800 0%, #FFD000 60%, #F6B800 100%)",
                    boxShadow: "0 0 16px rgba(246, 184, 0, 0.9)",
                  }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear", duration: 0.05 }}
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: "#F6B800" }}>
                  Loading
                </span>
                <span className="text-xs font-bold" style={{ color: "#F6B800" }}>
                  {Math.round(progress)}%
                </span>
              </div>
            </div>

            <p className="text-[11px] tracking-[0.25em] uppercase" style={{ color: "#c0c0c0" }}>
              Awakening the Chosen Ones...
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
