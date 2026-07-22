import Image from "next/image";
import { motion } from "framer-motion";
import type { HomeFashionImageContent } from "@/features/home/content/types";
import { FASHION_IMAGE_BLUR_DATA_URL } from "./types";

interface FashionPreviewGridProps {
  images: HomeFashionImageContent[];
  isInView: boolean;
}

export function FashionPreviewGrid({ images, isInView }: FashionPreviewGridProps) {
  const featureImage = images[0];

  if (!featureImage) {
    return null;
  }

  return (
    <div className="mb-8">
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.96 }}
        transition={{ duration: 0.58, delay: 0.12 }}
        className="relative aspect-[4/5] sm:aspect-[16/12] lg:aspect-[16/9] w-full overflow-hidden rounded-2xl"
      >
        <Image
          src={featureImage.src}
          alt={featureImage.alt}
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover transition-transform duration-500 hover:scale-105"
          placeholder="blur"
          blurDataURL={FASHION_IMAGE_BLUR_DATA_URL}
          priority={false}
          loading="lazy"
        />
      </motion.div>
    </div>
  );
}
