import Image from "next/image";
import { motion } from "framer-motion";
import type { Theme } from "@/lib/theme-context";
import { STORY_IMAGE, STORY_IMAGE_BLUR_DATA_URL } from "./data";

interface StoryImagePanelProps {
  theme: Theme;
  founderLabel: string;
}

export function StoryImagePanel({ theme, founderLabel }: StoryImagePanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
        <Image
          src={STORY_IMAGE.src}
          alt={STORY_IMAGE.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL={STORY_IMAGE_BLUR_DATA_URL}
          priority={false}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, transparent 60%, ${theme.colors.backgroundSecondary} 100%)`,
          }}
        />
      </div>

      {/* <motion.div
        className="absolute -bottom-6 -right-6 px-6 py-3 rounded-xl"
        style={{
          backgroundColor: theme.colors.accentPrimary,
          color: theme.colors.background,
        }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      >
        {/* <p className="text-sm font-bold">H.R.M KING KUFULUA</p> */}
        {/* <p className="text-xs opacity-80">{founderLabel}</p> */}
      {/* </motion.div> */}
    </motion.div>
  );
}
