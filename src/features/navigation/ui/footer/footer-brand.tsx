"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { socialLinks } from "./footer.data";
import type { FooterSectionContext } from "./footer.types";

export function FooterBrand({ currentTheme, content }: FooterSectionContext) {
  return (
    <div className="space-y-6">
      <Link href="/" className="flex items-center">
        <Image
          src="/isolele-logo-official.png"
          alt={content.brandAlt}
          width={160}
          height={80}
          className="h-auto object-contain"
        />
      </Link>
      <p className="text-sm leading-relaxed" style={{ color: currentTheme.colors.textSecondary }}>
        {content.description}
      </p>
      <div className="flex gap-4">
        {socialLinks.map((social) => {
          const isEmail = social.href.startsWith("mailto:");

          return (
            <motion.a
              key={social.label}
              href={social.href}
              target={isEmail ? undefined : "_blank"}
              rel={isEmail ? undefined : "noopener noreferrer"}
              className="rounded-full p-2.5 transition-colors"
              style={{
                backgroundColor: `${currentTheme.colors.accentPrimary}20`,
                color: currentTheme.colors.textSecondary,
                boxShadow: `0 0 0 1px ${currentTheme.colors.accentPrimary}25`,
              }}
              whileHover={{
                scale: 1.1,
                y: -2,
                backgroundColor: currentTheme.colors.accentPrimary,
                color: currentTheme.colors.background,
              }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
