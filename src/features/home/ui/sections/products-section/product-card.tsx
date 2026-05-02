"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { PRODUCTS_BLUR_DATA_URL, PRODUCTS_FALLBACK_IMAGE } from "./data";
import type { HomeProductContent } from "@/features/home/content/types";

interface ProductCardProps {
  product: HomeProductContent;
  index: number;
  addItem: (item: {
    id: string;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    image: string;
    type: HomeProductContent["type"];
  }) => void;
  addToCartLabel: string;
  colors: {
    background: string;
    backgroundSecondary: string;
    accentPrimary: string;
    textPrimary: string;
    textSecondary: string;
  };
}

export function ProductCard({ product, index, addItem, addToCartLabel, colors }: ProductCardProps) {
  return (
    <a href="https://buy.stripe.com/14A5kD44Z6yM2zR6qh6Zy0c" target="_blanck" rel="nnoopener noreferrer">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.58, delay: 0.12 + index * 0.14 }}
        className="group relative rounded-2xl overflow-hidden"
        style={{
          backgroundColor: colors.backgroundSecondary,
          border: `1px solid ${colors.accentPrimary}20`,
        }}
      >
        {product.badge && (
          <div
            className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold"
            style={{
              backgroundColor: colors.accentPrimary,
              color: colors.background,
            }}
          >
            {product.badge}
          </div>
        )}

        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={product.image || PRODUCTS_FALLBACK_IMAGE}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            placeholder="blur"
            blurDataURL={PRODUCTS_BLUR_DATA_URL}
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, ${colors.background}60 100%, ${colors.background}cc 100%)`,
            }}
          />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            style={{ backgroundColor: `${colors.background}80` }}
          >
            <motion.button
              onClick={() =>
                addItem({
                  id: product.id,
                  name: product.name,
                  description: product.description,
                  price: product.price,
                  originalPrice: product.originalPrice,
                  image: product.image,
                  type: product.type,
                })
              }
              className="flex items-center gap-2 px-6 py-3 rounded-full font-bold"
              style={{
                backgroundColor: colors.accentPrimary,
                color: colors.background,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart className="h-5 w-5" />
              {addToCartLabel}
            </motion.button>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-2" style={{ color: colors.textPrimary }}>
            {product.name}
          </h3>
          <p className="text-sm mb-4" style={{ color: colors.textSecondary }}>
            {product.description}
          </p>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black" style={{ color: colors.accentPrimary }}>
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm line-through" style={{ color: colors.textSecondary }}>
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </a>
     
  );
}

