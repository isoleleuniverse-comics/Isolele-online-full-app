"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme-context";
import { useLanguage } from "@/lib/language-context";
import { useCart } from "@/lib/cart-context";
import { PRODUCTS } from "./data";
import { ProductCard } from "./product-card";

export function ProductsSection() {
  const { currentTheme } = useTheme();
  const { t } = useLanguage();
  const { addItem } = useCart();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: currentTheme.colors.background }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-4" style={{ color: currentTheme.colors.textPrimary }}>
            {t("products_already_available")}
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: currentTheme.colors.textSecondary }}>
            {t("products_subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRODUCTS.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              t={t}
              addItem={addItem}
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

