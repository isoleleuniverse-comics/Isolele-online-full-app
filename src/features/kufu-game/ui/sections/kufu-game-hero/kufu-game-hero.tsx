"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Clock, Dice5, ShoppingCart, Users } from "lucide-react";
import type { KufuGameConfig, KufuGamePageContent } from "@/features/kufu-game/model/kufu-game.types";
import { KUFU_ASSETS } from "@/features/kufu-game/model/kufu-game.data";
import { StarRating } from "@/features/kufu-game/ui/sections/star-rating/star-rating";

interface KufuGameHeroProps {
  game: KufuGameConfig;
  content: KufuGamePageContent["hero"];
}

export function KufuGameHero({ game, content }: KufuGameHeroProps) {
  return (
    <>
      <section className="relative w-full" style={{ minHeight: 420 }}>
        <Image src={KUFU_ASSETS.board} alt={content.boardAlt} fill className="object-cover object-center" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(10,10,10,1))" }} />

        <div className="absolute left-6 top-6 z-10 flex items-center gap-3">
          <Image src={KUFU_ASSETS.logo} alt={content.logoAlt} width={32} height={32} className="object-contain" />
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-semibold tracking-wide transition-opacity hover:opacity-80" style={{ color: "#F6B800" }}>
            <ChevronLeft size={17} />
            {content.backLabel}
          </Link>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-20 max-w-6xl px-4 pb-8 md:px-8">
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{
            background: "linear-gradient(135deg, #161616 0%, #1c180a 100%)",
            border: "1px solid rgba(246,184,0,0.2)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.7)",
          }}
        >
          <div className="flex flex-col items-start gap-6 md:flex-row">
            <div className="relative h-[140px] w-[140px] shrink-0 overflow-hidden rounded-xl border-[3px] border-[rgba(246,184,0,0.4)]">
              <Image src={KUFU_ASSETS.board} alt={content.coverAlt} fill className="object-cover" />
              <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-br from-transparent via-transparent to-black/30 p-2">
                <Image src={KUFU_ASSETS.logo} alt={content.logoAlt} width={24} height={24} className="object-contain opacity-80" />
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <div className="mb-3 inline-block rounded px-3 py-1 text-[10px] font-bold uppercase tracking-widest" style={{ backgroundColor: "rgba(246,184,0,0.12)", color: "#F6B800", border: "1px solid rgba(246,184,0,0.3)" }}>
                {game.category}
              </div>

              <h1 className="text-3xl font-black leading-tight tracking-tight text-white md:text-4xl">{game.title}</h1>
              <p className="mb-1 mt-1 text-base font-semibold" style={{ color: "#F6B800" }}>{game.subtitle}</p>
              <p className="mb-2 text-sm" style={{ color: "#B0B0B0" }}>{content.shortDescription}</p>
              <p className="mb-4 text-[11px] uppercase tracking-widest" style={{ color: "#666666" }}>{game.tagline}</p>

              <div className="mb-4 flex flex-wrap items-center gap-3">
                <StarRating rating={game.rating} />
                <span className="text-sm font-bold" style={{ color: "#F6B800" }}>{game.rating}</span>
                <span className="text-xs" style={{ color: "#666666" }}>
                  ({game.reviewCount.toLocaleString()} {content.ratingLabel})
                </span>
              </div>

              <div className="mb-5 flex flex-wrap gap-2">
                {[Users, Clock, Dice5].map((Icon, index) => (
                  <div
                    key={content.infoChips[index]?.id}
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold"
                    style={{ background: "rgba(246,184,0,0.1)", color: "#F6B800", border: "1px solid rgba(246,184,0,0.2)" }}
                  >
                    <Icon size={12} />
                    {content.infoChips[index]?.label}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div>
                  <span className="text-3xl font-black" style={{ color: "#F6B800" }}>${game.price}</span>
                  <span className="ml-1 text-xs" style={{ color: "#555555" }}>{content.currencyLabel}</span>
                </div>
                <Link href="/#hero">
                  <button className="inline-flex items-center gap-2 rounded-lg px-7 py-3 text-sm font-bold tracking-wide transition-all hover:scale-[1.02] hover:brightness-110 active:scale-[0.97]" style={{ backgroundColor: "#F6B800", color: "#000000" }}>
                    <ShoppingCart size={16} />
                    {content.orderLabel}
                  </button>
                </Link>
                <Link href="/comics" className="inline-flex items-center rounded-lg border px-6 py-3 text-sm font-bold tracking-wide transition-all hover:bg-white/5" style={{ borderColor: "rgba(246,184,0,0.35)", color: "#F6B800" }}>
                  {content.comicsLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
