import { motion } from "framer-motion";
import type { Theme } from "@/lib/theme-context";

interface ProductsCarouselBackgroundProps {
  image: string;
  theme: Theme;
}

export function ProductsCarouselBackground({ image, theme }: ProductsCarouselBackgroundProps) {
  return (
    <>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('${image}')`,
        }}
      />
      <div
        className="absolute inset-0 z-1"
        style={{
          background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, ${theme.colors.background}80 60%, ${theme.colors.background}e6 100%)`,
        }}
      />

      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none z-2">
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
    </>
  );
}
