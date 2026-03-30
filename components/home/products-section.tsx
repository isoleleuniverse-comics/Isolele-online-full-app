"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/lib/theme-context"
import { useLanguage } from "@/lib/language-context"
import { useCart } from "@/lib/cart-context"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"

const products = [
  {
    id: "zaiire-comic-1",
    name_key: "product_zaiire_name",
    desc_key: "product_zaiire_desc",
    price: 26.99,
    originalPrice: 99.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZAIIRE%20-%20PRINCE%20OF%20KONGO-hmOq1ET63L87xXbWVilEom8IqvT0jo.jpg",
    badge_key: "product_badge_preorder",
    type: "comic" as const,
  },
  {
    id: "kimoya-deluxe",
    name_key: "product_kimoya_name",
    desc_key: "product_kimoya_desc",
    price: 49.99,
    originalPrice: 149.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg",
    badge_key: "product_badge_limited",
    type: "book" as const,
  },
  {
    id: "isolele-artbook",
    name_key: "product_art_name",
    desc_key: "product_art_desc",
    price: 34.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Isolele%20ZAIIRE-EKnQs6Sp5EFeF3bYx9m4utnSu3LdM5.jpg",
    badge_key: "product_badge_new",
    type: "book" as const,
  },
]

export function ProductsSection() {
  const { currentTheme } = useTheme()
  const { currentLanguage, t } = useLanguage()
  const { addItem } = useCart()

  return (
    <section 
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: currentTheme.colors.background }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl sm:text-5xl font-black mb-4"
            style={{ color: currentTheme.colors.textPrimary }}
          >
            {t("products_already_available")}
          </h2>
          <p 
            className="text-xl max-w-2xl mx-auto"
            style={{ color: currentTheme.colors.textSecondary }}
          >
            {t("products_subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative rounded-2xl overflow-hidden"
              style={{ 
                backgroundColor: currentTheme.colors.backgroundSecondary,
                border: `1px solid ${currentTheme.colors.accentPrimary}20`
              }}
            >
              {/* Badge */}
              {product.badge_key && (
                <div 
                  className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold"
                  style={{ 
                    backgroundColor: currentTheme.colors.accentPrimary,
                    color: currentTheme.colors.background
                  }}
                >
                  {t(product.badge_key as any)}
                </div>
              )}

              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={product.image || "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plug%20hover%20load%20image%20isolele-JAz4XM8dgs50DBWVhN4NtyfcYj9rsF.jpg"}
                  alt={t(product.name_key as any)}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, ${currentTheme.colors.background}60 60%, ${currentTheme.colors.background}cc 100%)`
                  }}
                />
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ backgroundColor: `${currentTheme.colors.background}80` }}
                >
                  <motion.button
                    onClick={() => addItem({
                      id: product.id,
                      name: t(product.name_key as any),
                      description: t(product.desc_key as any),
                      price: product.price,
                      originalPrice: product.originalPrice,
                      image: product.image,
                      type: product.type,
                    })}
                    className="flex items-center gap-2 px-6 py-3 rounded-full font-bold"
                    style={{ 
                      backgroundColor: currentTheme.colors.accentPrimary,
                      color: currentTheme.colors.background
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ShoppingCart className="h-5 w-5" />
                    {t("shop_add_to_cart")}
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 
                  className="text-xl font-bold mb-2"
                  style={{ color: currentTheme.colors.textPrimary }}
                >
                  {t(product.name_key as any)}
                </h3>
                <p 
                  className="text-sm mb-4"
                  style={{ color: currentTheme.colors.textSecondary }}
                >
                  {t(product.desc_key as any)}
                </p>
                <div className="flex items-center gap-3">
                  <span 
                    className="text-2xl font-black"
                    style={{ color: currentTheme.colors.accentPrimary }}
                  >
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span 
                      className="text-sm line-through"
                      style={{ color: currentTheme.colors.textSecondary }}
                    >
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
