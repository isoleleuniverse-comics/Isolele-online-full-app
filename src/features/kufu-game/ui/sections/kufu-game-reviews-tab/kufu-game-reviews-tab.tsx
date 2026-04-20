"use client";

import { motion } from "framer-motion";
import { GAME, REVIEWS } from "@/features/kufu-game/model/kufu-game.data";
import { StarRating } from "@/features/kufu-game/ui/sections/star-rating/star-rating";

export function KufuGameReviewsTab() {
  return (
    <motion.div key="reviews" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
      <div className="flex flex-col gap-8 lg:flex-row">
        <div
          className="flex shrink-0 flex-col items-center justify-center rounded-xl p-6 text-center lg:w-56"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(246,184,0,0.1)" }}
        >
          <span className="text-6xl font-black" style={{ color: "#F6B800" }}>
            {GAME.rating}
          </span>
          <div className="mb-1 mt-2">
            <StarRating rating={GAME.rating} size={18} />
          </div>
          <p className="text-xs" style={{ color: "#555555" }}>
            {GAME.reviewCount.toLocaleString()} ratings
          </p>
        </div>

        <div className="flex flex-1 flex-col gap-4">
          {REVIEWS.map((review) => (
            <article
              key={review.name}
              className="rounded-xl p-5"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(246,184,0,0.08)" }}
            >
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-white">{review.name}</span>
                  <span className="ml-2 text-xs" style={{ color: "#555555" }}>
                    - {review.country}
                  </span>
                </div>
                <StarRating rating={review.rating} size={14} />
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#A0A0A0" }}>
                {review.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

