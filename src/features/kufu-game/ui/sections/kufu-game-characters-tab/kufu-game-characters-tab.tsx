"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CHARACTERS, KUFU_ASSETS } from "@/features/kufu-game/model/kufu-game.data";

export function KufuGameCharactersTab() {
  return (
    <motion.div key="characters" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
      <div className="mb-6 flex items-center gap-3">
        <Image src={KUFU_ASSETS.logo} alt="ISOLELE" width={32} height={32} className="object-contain" />
        <p className="text-sm" style={{ color: "#777777" }}>
          Meet the guardians featured on KUFU cards, each pulled directly from the ISOLELE comic universe.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {CHARACTERS.map((character) => (
          <div key={character.name} className="flex flex-col items-center gap-3">
            <div
              className="relative w-full overflow-hidden rounded-xl border-2 border-[rgba(246,184,0,0.2)]"
              style={{ aspectRatio: "3/4" }}
            >
              <Image src={character.image} alt={character.name} fill className="object-cover" />
            </div>
            <div className="text-center">
              <p className="text-xs font-bold leading-tight text-white">{character.name}</p>
              <p className="mt-0.5 text-[10px]" style={{ color: "#F6B800" }}>
                {character.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

