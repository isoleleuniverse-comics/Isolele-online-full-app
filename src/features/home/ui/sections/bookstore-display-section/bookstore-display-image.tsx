"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { BookstoreDisplayContent } from "./types";

interface BookstoreDisplayImageProps {
  content: BookstoreDisplayContent;
  blurDataURL: string;
}

export function BookstoreDisplayImage({ content, blurDataURL }: BookstoreDisplayImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full rounded-lg overflow-hidden shadow-lg"
    >
      <Image
        src={content.imageSrc}
        alt={content.imageAlt}
        width={1200}
        height={800}
        sizes="100vw"
        className="w-full h-auto object-cover"
        priority
        placeholder="blur"
        blurDataURL={blurDataURL}
      />
    </motion.div>
  );
}
