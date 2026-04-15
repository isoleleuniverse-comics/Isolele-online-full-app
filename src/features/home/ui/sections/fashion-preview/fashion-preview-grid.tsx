import Image from "next/image";
import { motion } from "framer-motion";
import type { FashionImageItem } from "./types";
import { FASHION_IMAGE_BLUR_DATA_URL } from "./types";

interface FashionPreviewGridProps {
  images: FashionImageItem[];
  isInView: boolean;
  t: (key: string) => string;
}

export function FashionPreviewGrid({ images, isInView, t }: FashionPreviewGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
        >
          <Image
            src={image.src}
            alt={t(image.key)}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            placeholder="blur"
            blurDataURL={FASHION_IMAGE_BLUR_DATA_URL}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end justify-start p-3">
            <p className="text-white text-xs sm:text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {t(image.key)}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
