"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/shared/i18n/language-context";
import { useTheme } from "@/shared/contexts/theme-context";
import { ShoppingCart } from "lucide-react";
import { BookstoreDisplayImage } from "../bookstore-display-section/bookstore-display-image";
import { bookstoreDisplayData, BOOKSTORE_DISPLAY_IMAGE_BLUR_DATA_URL } from "../bookstore-display-section/data";

export function BuyNowSection() {
  const { currentLanguage } = useLanguage();
  const { currentTheme } = useTheme();
  const [hovered, setHovered] = useState(false);

  const label = currentLanguage.code === "fr" ? "ACHETER LE LIVRE MAINTENANT" : "BUY THE BOOK NOW";
  const stripeHref = "https://buy.stripe.com/14A5kD44Z6yM2zR6qh6Zy0c";
  const bookstoreDisplay = bookstoreDisplayData[currentLanguage.code] || bookstoreDisplayData.en;

  return (
    <section className="w-full py-14 px-4" style={{ backgroundColor: currentTheme.colors.background }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.995 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="rounded-2xl p-8 shadow-2xl border"
          style={{
            borderColor: `${currentTheme.colors.accentPrimary}40`,
            background: `${currentTheme.colors.background}00`,
          }}
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-center font-extrabold tracking-wide mb-6"
            style={{
              color: currentTheme.colors.accentPrimary,
              fontSize: "clamp(1.6rem, 4vw, 3.2rem)",
              lineHeight: 1.02,
              letterSpacing: "0.02em",
            }}
          >
            {label}
          </motion.h1>

          {/* Image (book covers) */}
          <div className="mx-auto max-w-3xl mb-6">
            <BookstoreDisplayImage content={bookstoreDisplay} blurDataURL={BOOKSTORE_DISPLAY_IMAGE_BLUR_DATA_URL} />
          </div>

          {/* CTA button — transparent background, accent border and text. Cart animates on hover */}
          <div className="flex justify-center">
            <motion.a
              href={stripeHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
              whileTap={{ scale: 0.985 }}
              className="inline-flex items-center gap-4 px-6 py-3 rounded-full font-bold uppercase tracking-wider border-2"
              style={{
                borderColor: currentTheme.colors.accentPrimary,
                color: currentTheme.colors.accentPrimary,
                background: "transparent",
                textDecoration: "none",
              }}
            >
              <motion.span
                animate={{ x: hovered ? 10 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center justify-center"
                style={{ width: 28, height: 28 }}
              >
                <ShoppingCart className="w-5 h-5" />
              </motion.span>

              <span>{label}</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
