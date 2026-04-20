"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { FooterContext } from "./footer.types";

export function FooterNewsletter({ currentTheme, t }: FooterContext) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <div>
      <h3 className="text-lg font-bold tracking-wider mb-6" style={{ color: currentTheme.colors.accentPrimary }}>
        {t("footer_newsletter_title")}
      </h3>
      <p className="text-sm mb-4" style={{ color: currentTheme.colors.textSecondary }}>
        {t("footer_newsletter_desc")}
      </p>
      <form onSubmit={handleSubscribe} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("footer_email_placeholder")}
          className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
          style={{
            backgroundColor: currentTheme.colors.background,
            color: currentTheme.colors.textPrimary,
            border: `1px solid ${currentTheme.colors.accentPrimary}30`,
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = currentTheme.colors.accentPrimary;
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = `${currentTheme.colors.accentPrimary}30`;
          }}
        />
        <motion.button
          type="submit"
          className="w-full px-4 py-3 rounded-lg text-sm font-bold tracking-wider transition-all"
          style={{
            backgroundColor: currentTheme.colors.accentPrimary,
            color: currentTheme.colors.background,
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {subscribed ? t("footer_thank_you") : t("footer_subscribe")}
        </motion.button>
      </form>
    </div>
  );
}

