"use client";

import type { KufuTab } from "@/features/kufu-game/model/kufu-game.types";

interface KufuGameTabsProps {
  tab: KufuTab;
  onChangeTab: (tab: KufuTab) => void;
}

export function KufuGameTabs({ tab, onChangeTab }: KufuGameTabsProps) {
  return (
    <section className="mx-auto mb-6 max-w-6xl px-4 md:px-8">
      <div
        className="flex w-fit gap-1 rounded-xl p-1"
        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(246,184,0,0.1)" }}
      >
        {(["overview", "characters", "reviews"] as const).map((tabName) => (
          <button
            key={tabName}
            onClick={() => onChangeTab(tabName)}
            className="rounded-lg px-5 py-2 text-sm font-semibold capitalize transition-all"
            style={{
              backgroundColor: tab === tabName ? "#F6B800" : "transparent",
              color: tab === tabName ? "#000000" : "#777777",
            }}
          >
            {tabName}
          </button>
        ))}
      </div>
    </section>
  );
}

