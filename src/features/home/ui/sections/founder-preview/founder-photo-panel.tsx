import Image from "next/image";
import { motion } from "framer-motion";
import type { Theme } from "@/shared/contexts/theme-context";
import { FOUNDER_IMAGE } from "./data";
import { FOUNDER_IMAGE_BLUR_DATA_URL } from "./types";

interface FounderPhotoPanelProps {
  theme: Theme;
  locationLabel: string;
  roleLabel: string;
}

export function FounderPhotoPanel({ theme, locationLabel, roleLabel }: FounderPhotoPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative flex justify-center"
    >
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          width: 380,
          maxWidth: "100%",
          aspectRatio: "4/5",
          border: `2px solid ${theme.colors.accentPrimary}40`,
          boxShadow: `0 32px 80px rgba(0,0,0,0.5), 0 0 40px ${theme.colors.accentPrimary}20`,
        }}
      >
        <Image
          src={FOUNDER_IMAGE.src}
          alt={FOUNDER_IMAGE.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top"
          placeholder="blur"
          blurDataURL={FOUNDER_IMAGE_BLUR_DATA_URL}
          priority={false}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, transparent 55%, ${theme.colors.background}cc 100%)`,
          }}
        />
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-xl text-center whitespace-nowrap"
        style={{
          backgroundColor: theme.colors.accentPrimary,
          color: "#000",
        }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <p className="text-xs font-black tracking-widest uppercase">{locationLabel}</p>
        <p className="text-[10px] opacity-75 tracking-wider">{roleLabel}</p>
      </motion.div>
    </motion.div>
  );
}
