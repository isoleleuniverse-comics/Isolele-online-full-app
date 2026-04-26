import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Theme } from "@/shared/contexts/theme-context";
import type { UniversePillar } from "./types";

interface UniversePillarCardProps {
  pillar: UniversePillar;
  index: number;
  isInView: boolean;
  backgroundImage?: string;
  theme: Theme;
  discoverMoreLabel: string;
}

export function UniversePillarCard({
  pillar,
  index,
  isInView,
  backgroundImage,
  theme,
  discoverMoreLabel,
}: UniversePillarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 90 }}
      animate={isInView ? { opacity: 1, rotateY: 0 } : { opacity: 0, rotateY: 90 }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
      className="group relative h-full flex flex-col"
    >
      <div
        className="relative p-8 rounded-2xl transition-all duration-500 h-full flex flex-col"
        style={{
          backgroundColor: `${theme.colors.background}80`,
          border: `1px solid ${theme.colors.accentPrimary}30`,
          boxShadow: "0 0 0 rgba(0,0,0,0)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 20px 40px ${theme.colors.accentPrimary}30, inset 0 0 30px ${theme.colors.accentPrimary}15`;
          e.currentTarget.style.borderColor = theme.colors.accentPrimary;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
          e.currentTarget.style.borderColor = `${theme.colors.accentPrimary}30`;
        }}
      >
        {backgroundImage ? (
          <div
            className="absolute inset-0 rounded-2xl transition-opacity duration-500 opacity-100"
            style={{
              backgroundImage: `url('${backgroundImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ) : null}

        <div className="relative mb-6 z-10">
          <motion.div
            className="w-16 h-16 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${theme.colors.accentPrimary}20` }}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8 }}
          >
            <pillar.icon className="w-8 h-8" style={{ color: theme.colors.accentPrimary }} />
          </motion.div>
        </div>

        <div className="relative z-10 flex-1 flex flex-col">
          <div className="bg-[#F5F0E8]/90 rounded-lg p-4 flex-1">
            <h3 className="text-xl font-bold tracking-wide mb-4" style={{ color: "#000000" }}>
              {pillar.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#000000" }}>
              {pillar.description}
            </p>
          </div>
        </div>

        <Link href={pillar.href} className="relative z-10 mt-6 w-full">
          <motion.button
            className="w-full px-4 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all"
            style={{
              backgroundColor: theme.colors.accentPrimary,
              color: theme.colors.background,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {discoverMoreLabel}
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </Link>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ backgroundColor: theme.colors.accentPrimary }}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}
