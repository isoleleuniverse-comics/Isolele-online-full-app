"use client";

import { useLanguage } from "@/shared/i18n/language-context";
import { bookstoreDisplayData } from "./data";
import { BOOKSTORE_DISPLAY_IMAGE_BLUR_DATA_URL } from "./data";
import { BookstoreDisplayHeader } from "./bookstore-display-header";
import { BookstoreDisplayImage } from "./bookstore-display-image";
import { BookstoreDisplayCaption } from "./bookstore-display-caption";
import { motion } from "framer-motion";
import { ShoppingCart, QrCode } from "lucide-react";

export function BookstoreDisplaySection() {
  const { currentLanguage } = useLanguage();
  const bookstoreDisplay = bookstoreDisplayData[currentLanguage.code] || bookstoreDisplayData.en;
  const buyLabel = currentLanguage.code === "fr" ? "ACHETER LE LIVRE" : "BUY THE BOOK";
  const subLabel = currentLanguage.code === "fr" ? "POSSEDEZ L'HÉRITAGE" : "OWN THE LEGACY";
  const stripeHref = "https://buy.stripe.com/14A5kD44Z6yM2zR6qh6Zy0c";

  return (
    <section className="w-full bg-background py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <BookstoreDisplayHeader content={bookstoreDisplay} />
        <BookstoreDisplayImage content={bookstoreDisplay} blurDataURL={BOOKSTORE_DISPLAY_IMAGE_BLUR_DATA_URL} />

        {/* Button container: relative so floating circle can overlap on the right */}
        <div className="mt-6 flex justify-center px-4">
          <motion.a
            href={stripeHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${buyLabel} — ${subLabel}`}
            className="relative w-full sm:w-auto max-w-[560px] inline-flex items-center justify-between overflow-visible rounded-lg shadow-lg"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.995 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
            style={{ textDecoration: "none" }}
          >
            {/* Main rectangular golden-ochre panel */}
            <div
              className="w-full flex items-center justify-between rounded-lg px-5 py-3 sm:px-8 sm:py-4"
              style={{ backgroundColor: "#F6B800" /* golden-ochre */ }}
            >
              {/* Left: white line-art shopping cart */}
              <div className="flex-shrink-0 mr-4 sm:mr-6">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>

              {/* Center: two-line text block */}
              <div className="flex-1 text-center text-white">
                <div className="font-serif font-extrabold uppercase text-sm sm:text-base md:text-lg tracking-wider inline-block">
                  {/* strong underline for the first line */}
                  <span className="inline-block pb-1 border-b-4 border-white leading-none">{buyLabel}</span>
                </div>
                <div className="mt-1 text-xs sm:text-sm tracking-wider uppercase">
                  {/* second line with LEGACY underlined */}
                  <span className="opacity-95">
                    {subLabel.split(" ").map((word, idx, arr) => {
                      // underline the last word (LEGACY) — works for both EN and FR phrasing
                      const isLast = idx === arr.length - 1;
                      return (
                        <span key={idx} className={isLast ? "underline decoration-white decoration-2 mx-0" : ""}>
                          {word}
                          {idx < arr.length - 1 ? " " : ""}
                        </span>
                      );
                    })}
                  </span>
                </div>
              </div>

              {/* Right: spacer so floating circle can visually overlap */}
              <div className="w-8 sm:w-10 flex-shrink-0" />
            </div>

            {/* Floating circular element (paler yellow) with QR icon */}
            <motion.div
              className="pointer-events-none absolute right-[-18px] top-1/2 -translate-y-1/2 rounded-full flex items-center justify-center"
              initial={{ y: 0 }}
              whileHover={{ y: -6, scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.12)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                width: 48,
                height: 48,
                backgroundColor: "#FFE9A8", // paler yellow
                boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
              }}
            >
              <QrCode className="w-5 h-5 text-white" />
            </motion.div>
          </motion.a>
        </div>

        <BookstoreDisplayCaption caption={bookstoreDisplay.caption} />
      </div>
    </section>
  );
}
