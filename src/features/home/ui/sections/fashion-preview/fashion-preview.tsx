"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@/shared/contexts/theme-context";
import { useHomePageContent } from "@/features/home/model";
import { FashionPreviewHeader } from "./fashion-preview-header";
import { FashionPreviewGrid } from "./fashion-preview-grid";
import { FashionPreviewCta } from "./fashion-preview-cta";

export function FashionPreview() {
  const { currentTheme } = useTheme();
  const { fashion } = useHomePageContent();
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: currentTheme.colors.background }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <FashionPreviewHeader
            title={fashion.title}
            subtitle={fashion.subtitle}
            textPrimary={currentTheme.colors.textPrimary}
            textSecondary={currentTheme.colors.textSecondary}
            isInView={isInView}
          />

          <FashionPreviewGrid images={fashion.images} isInView={isInView} />

          <FashionPreviewCta label={fashion.viewFullLabel} accentPrimary={currentTheme.colors.accentPrimary} />
        </motion.div>
      </div>
    </section>
  );
}
