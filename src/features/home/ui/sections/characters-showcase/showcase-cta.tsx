"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ShowcaseCtaProps {
  label: string;
  isInView: boolean;
  accentColor: string;
}

export function ShowcaseCta({ label, isInView, accentColor }: ShowcaseCtaProps) {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <Link href="/characters">
          <motion.button
            className="relative inline-flex items-center gap-3 px-12 py-5 rounded-2xl text-sm font-black tracking-[0.2em] overflow-hidden"
            style={{
              backgroundColor: accentColor,
              color: "#000",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                width: "50%",
              }}
            />
            <span>{label}</span>
            <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
              -&gt;
            </motion.span>
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
