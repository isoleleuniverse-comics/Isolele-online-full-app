"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { socialLinks } from "./footer.data";
import type { FooterContext } from "./footer.types";

export function FooterBrand({ currentTheme, t }: FooterContext) {
  return (
    <div className="space-y-6">
      <Link href="/" className="flex items-center">
        <Image src="/isolele-logo-official.png" alt="ISOLELE â€” The Chosen Ones" width={160} height={80} className="object-contain" />
      </Link>
      <p className="text-sm leading-relaxed" style={{ color: currentTheme.colors.textSecondary }}>
        {t("footer_description")}
      </p>
      <div className="flex gap-4">
        {socialLinks.map((social) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full transition-colors"
            style={{
              backgroundColor: `${currentTheme.colors.accentPrimary}20`,
              color: currentTheme.colors.textSecondary,
            }}
            whileHover={{
              scale: 1.1,
              backgroundColor: currentTheme.colors.accentPrimary,
            }}
            whileTap={{ scale: 0.95 }}
            aria-label={social.label}
          >
            <social.icon className="h-5 w-5" />
          </motion.a>
        ))}
      </div>
    </div>
  );
}

