"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@/lib/theme-context";
import { useLanguage } from "@/lib/language-context";
import { FASHION_IMAGES } from "./data";
import { FashionPreviewHeader } from "./fashion-preview-header";
import { FashionPreviewGrid } from "./fashion-preview-grid";
import { FashionPreviewCta } from "./fashion-preview-cta";

export function FashionPreview() {
  const { currentTheme } = useTheme();
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: currentTheme.colors.background }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <FashionPreviewHeader
            title={t("fashion_collection_title")}
            subtitle={t("fashion_collection_subtitle")}
            textPrimary={currentTheme.colors.textPrimary}
            textSecondary={currentTheme.colors.textSecondary}
            isInView={isInView}
          />

          <FashionPreviewGrid images={FASHION_IMAGES} isInView={isInView} t={t} />

          <FashionPreviewCta label={t("fashion_view_full")} accentPrimary={currentTheme.colors.accentPrimary} />
        </motion.div>
      </div>
    </section>
  );
}
