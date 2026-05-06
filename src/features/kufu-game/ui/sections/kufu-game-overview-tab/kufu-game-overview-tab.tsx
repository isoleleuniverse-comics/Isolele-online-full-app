"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { KufuFeature, KufuGameConfig, KufuGamePageContent, KufuScreenshot } from "@/features/kufu-game/model/kufu-game.types";
import { KUFU_ASSETS } from "@/features/kufu-game/model/kufu-game.data";
import { ScreenshotCarousel } from "@/features/kufu-game/ui/sections/screenshot-carousel/screenshot-carousel";

interface KufuGameOverviewTabProps {
  game: KufuGameConfig;
  features: KufuFeature[];
  screenshots: KufuScreenshot[];
  content: KufuGamePageContent["overview"];
}

export function KufuGameOverviewTab({ game, features, screenshots, content }: KufuGameOverviewTabProps) {
  return (
    <motion.div key="overview" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="flex flex-col gap-8 lg:col-span-2">
        <ScreenshotCarousel screenshots={screenshots} />

        <div className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(246,184,0,0.1)" }}>
          <h2 className="mb-4 text-xl font-bold" style={{ color: "#F6B800" }}>{content.aboutTitle}</h2>
          <p className="mb-3 text-sm leading-relaxed" style={{ color: "#C8C8C8" }}>{game.description}</p>
          {game.longDescription.map((paragraph) => (
            <p key={paragraph} className="mb-2 text-sm leading-relaxed" style={{ color: "#A0A0A0" }}>
              {paragraph}
            </p>
          ))}
        </div>

        <div>
          <h2 className="mb-4 text-xl font-bold" style={{ color: "#F6B800" }}>{content.featuresTitle}</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="flex gap-4 rounded-xl p-4" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(246,184,0,0.08)" }}>
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style={{ background: "rgba(246,184,0,0.12)" }}>
                  <Icon size={20} color="#F6B800" />
                </div>
                <div>
                  <p className="mb-1 text-sm font-bold text-white">{title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#777777" }}>{desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <aside className="flex flex-col gap-5">
        <div className="flex flex-col items-center justify-center rounded-xl p-4 text-center" style={{ background: "linear-gradient(135deg, rgba(246,184,0,0.15), rgba(246,184,0,0.05))", border: "2px solid rgba(246,184,0,0.3)" }}>
          <Image src={KUFU_ASSETS.logo} alt="ISOLELE logo" width={60} height={60} className="mb-2 object-contain" />
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#F6B800" }}>{content.universeBadge}</p>
        </div>

        <div className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(246,184,0,0.1)" }}>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "#F6B800" }}>{content.infoTitle}</h3>
          {content.infoRows.map(({ label, value }) => (
            <div key={label} className="flex justify-between py-2 text-sm" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <span style={{ color: "#555555" }}>{label}</span>
              <span className="ml-4 text-right font-medium" style={{ color: "#DDDDDD" }}>{value}</span>
            </div>
          ))}
        </div>

        <div className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(246,184,0,0.1)" }}>
          <h3 className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#F6B800" }}>{content.languagesTitle}</h3>
          <div className="flex flex-wrap gap-2">
            {game.languages.map((language) => (
              <span key={language} className="rounded px-2.5 py-1 text-xs" style={{ background: "rgba(246,184,0,0.1)", color: "#F6B800" }}>
                {language}
              </span>
            ))}
          </div>
        </div>
      </aside>
    </motion.div>
  );
}
