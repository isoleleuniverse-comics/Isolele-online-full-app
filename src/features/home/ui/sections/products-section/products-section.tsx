"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme-context";
import { useHomePageContent } from "@/features/home/model";
import { useCart } from "@/lib/cart-context";
import { ProductCard } from "./product-card";

export function ProductsSection() {
  const { currentTheme } = useTheme();
  const { products } = useHomePageContent();
  const { addItem } = useCart();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: currentTheme.colors.background }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-4" style={{ color: currentTheme.colors.textPrimary }}>
            {products.title}
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: currentTheme.colors.textSecondary }}>
            {products.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.items.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              addItem={addItem}
              addToCartLabel={products.addToCartLabel}
              colors={{
                background: currentTheme.colors.background,
                backgroundSecondary: currentTheme.colors.backgroundSecondary,
                accentPrimary: currentTheme.colors.accentPrimary,
                textPrimary: currentTheme.colors.textPrimary,
                textSecondary: currentTheme.colors.textSecondary,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

