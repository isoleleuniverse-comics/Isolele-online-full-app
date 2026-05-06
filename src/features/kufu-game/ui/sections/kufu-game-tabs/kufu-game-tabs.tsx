"use client";

import type { KufuGamePageContent, KufuTab } from "@/features/kufu-game/model/kufu-game.types";

interface KufuGameTabsProps {
  tab: KufuTab;
  onChangeTab: (tab: KufuTab) => void;
  tabs: KufuGamePageContent["tabs"];
}

export function KufuGameTabs({ tab, onChangeTab, tabs }: KufuGameTabsProps) {
  return (
    <section className="mx-auto mb-6 max-w-6xl px-4 md:px-8">
      <div className="flex w-fit gap-1 rounded-xl p-1" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(246,184,0,0.1)" }}>
        {tabs.map((tabItem) => (
          <button
            key={tabItem.id}
            onClick={() => onChangeTab(tabItem.id)}
            className="rounded-lg px-5 py-2 text-sm font-semibold transition-all"
            style={{
              backgroundColor: tab === tabItem.id ? "#F6B800" : "transparent",
              color: tab === tabItem.id ? "#000000" : "#777777",
            }}
          >
            {tabItem.label}
          </button>
        ))}
      </div>
    </section>
  );
}
