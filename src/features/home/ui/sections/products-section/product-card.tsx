"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { PRODUCT_BLUR_DATA_URL, PRODUCT_FALLBACK_IMAGE } from "./data";
import type { ProductItem } from "./types";

interface ProductCardProps {
  product: ProductItem;
  index: number;
  t: (key: string) => string;
  addItem: (item: {
    id: string;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    image: string;
    type: ProductItem["type"];
  }) => void;
  colors: {
    background: string;
    backgroundSecondary: string;
    accentPrimary: string;
    textPrimary: string;
    textSecondary: string;
  };
}

export function ProductCard({ product, index, t, addItem, colors }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative rounded-2xl overflow-hidden"
      style={{
        backgroundColor: colors.backgroundSecondary,
        border: `1px solid ${colors.accentPrimary}20`,
      }}
    >
      {product.badge_key && (
        <div
          className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold"
          style={{
            backgroundColor: colors.accentPrimary,
            color: colors.background,
          }}
        >
          {t(product.badge_key)}
        </div>
      )}

      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={product.image || PRODUCT_FALLBACK_IMAGE}
          alt={t(product.name_key)}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          placeholder="blur"
          blurDataURL={PRODUCT_BLUR_DATA_URL}
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, ${colors.background}60 60%, ${colors.background}cc 100%)`,
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
                name: t(product.name_key),
                description: t(product.desc_key),
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
            {t("shop_add_to_cart")}
          </motion.button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2" style={{ color: colors.textPrimary }}>
          {t(product.name_key)}
        </h3>
        <p className="text-sm mb-4" style={{ color: colors.textSecondary }}>
          {t(product.desc_key)}
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
  );
}

