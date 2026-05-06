"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { FooterSectionContext } from "./footer.types";

export function FooterNewsletter({ currentTheme, content }: FooterSectionContext) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!email) return;

    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <div>
      <h3 className="mb-6 text-lg font-bold tracking-wider" style={{ color: currentTheme.colors.accentPrimary }}>
        {content.newsletterTitle}
      </h3>
      <p className="mb-4 text-sm" style={{ color: currentTheme.colors.textSecondary }}>
        {content.newsletterDescription}
      </p>
      <form onSubmit={handleSubscribe} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={content.emailPlaceholder}
          className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-all"
          style={{
            backgroundColor: currentTheme.colors.background,
            color: currentTheme.colors.textPrimary,
            border: `1px solid ${currentTheme.colors.accentPrimary}30`,
          }}
          onFocus={(event) => {
            event.currentTarget.style.borderColor = currentTheme.colors.accentPrimary;
          }}
          onBlur={(event) => {
            event.currentTarget.style.borderColor = `${currentTheme.colors.accentPrimary}30`;
          }}
        />
        <motion.button
          type="submit"
          className="w-full rounded-lg px-4 py-3 text-sm font-bold tracking-wider transition-all"
          style={{
            backgroundColor: currentTheme.colors.accentPrimary,
            color: currentTheme.colors.background,
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {subscribed ? content.thankYouLabel : content.subscribeLabel}
        </motion.button>
      </form>
    </div>
  );
}
