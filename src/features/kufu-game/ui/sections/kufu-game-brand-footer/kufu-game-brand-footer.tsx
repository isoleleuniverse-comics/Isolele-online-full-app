"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { KufuGamePageContent } from "@/features/kufu-game/model/kufu-game.types";
import { KUFU_ASSETS } from "@/features/kufu-game/model/kufu-game.data";

interface KufuGameBrandFooterProps {
  content: KufuGamePageContent["footer"];
}

export function KufuGameBrandFooter({ content }: KufuGameBrandFooterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="mt-12 flex items-center justify-center gap-3 border-t pt-8"
      style={{ borderColor: "rgba(246,184,0,0.1)" }}
    >
      <Image src={KUFU_ASSETS.logo} alt="ISOLELE logo" width={40} height={40} className="object-contain" />
      <div>
        <p className="text-sm font-bold" style={{ color: "#F6B800" }}>{content.studioLabel}</p>
        <p className="text-xs" style={{ color: "#666666" }}>{content.studioSubtitle}</p>
      </div>
    </motion.div>
  );
}
