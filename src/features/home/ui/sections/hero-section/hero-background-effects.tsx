import { motion } from "framer-motion";
import type { Theme } from "@/lib/theme-context";

interface HeroBackgroundEffectsProps {
  theme: Theme;
}

export function HeroBackgroundEffects({ theme }: HeroBackgroundEffectsProps) {
  return (
    <>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Isolele%20ZAIIRE-dZ9qgcCZdyxMpgkCfSlSGCAMD2rMVC.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, ${theme.colors.background}01 0%, ${theme.colors.background}03 50%, ${theme.colors.background}08 100%)`,
        }}
      />

      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-64 w-64 border rotate-45"
            style={{
              borderColor: theme.colors.accentPrimary,
              left: `${i * 20 - 10}%`,
              top: `${(i % 3) * 30}%`,
            }}
            animate={{
              rotate: [45, 90, 45],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              delay: i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        className="absolute top-0 left-1/4 w-px h-96"
        style={{ backgroundColor: theme.colors.accentPrimary }}
        animate={{ opacity: [0, 1, 0], scaleY: [0, 1, 0] }}
        transition={{ duration: 0.3, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
      />
      <motion.div
        className="absolute top-20 right-1/3 w-px h-64"
        style={{ backgroundColor: theme.colors.accentSecondary }}
        animate={{ opacity: [0, 1, 0], scaleY: [0, 1, 0] }}
        transition={{ duration: 0.2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 7, delay: 2 }}
      />
    </>
  );
}
