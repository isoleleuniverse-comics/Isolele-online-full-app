"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ShowcaseCharacter } from "./types";

interface ShowcaseCharacterCardProps {
  character: ShowcaseCharacter;
  index: number;
  isInView: boolean;
}

export function ShowcaseCharacterCard({ character, index, isInView }: ShowcaseCharacterCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 28 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 28 }}
      transition={{ duration: 0.58, delay: 0.16 + index * 0.12 }}
      whileHover={{ scale: 1.04, zIndex: 10 }}
      className="relative group rounded-2xl overflow-hidden cursor-pointer"
      style={{
        aspectRatio: index < 4 ? "3/4" : "1/1",
        border: `1px solid ${character.color}20`,
      }}
    >
      <Image
        src={character.image}
        alt={character.name}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAICAgIChsICQkJChAODwoQFwwTGB8WFBcUFRYaFxwpHhcYGRgaGBgSHBwcHhcYGhj/2wBDAQcHBwoIChMICQsMCggKGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBj/wAARCABkAGQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWm5ybnJ2eoqOkpaanqKmqsrO0tba2uLm6wsPExcbHyMnK0tPU1dbW2Nna4uPk5ebn6Onq8vP09fb2+Pn6/8QAHwEAAwEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlbaWmJmaoqOkpaanqKmqsrO0tba2uLm6wsPExcbHyMnK0tPU1dbW2Nna4uPk5ebn6Onq8vP09fb2+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//Z"
        loading="lazy"
      />

      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, transparent 50%, ${character.color}80 85%, rgba(0,0,0,0.9) 100%)`,
        }}
      />

      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{ boxShadow: `inset 0 0 40px ${character.color}40, 0 0 30px ${character.color}20` }}
      />

      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ border: `2px solid ${character.color}60` }}
      />

      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p
          className="text-xs font-black tracking-widest leading-tight text-balance"
          style={{ color: "#fff", textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}
        >
          {character.name}
        </p>
      </div>
    </motion.div>
  );
}
