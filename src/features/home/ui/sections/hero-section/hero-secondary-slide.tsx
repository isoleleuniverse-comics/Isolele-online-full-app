import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSecondarySlide() {
  return (
    <motion.div
      key="slide-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="flex items-center justify-center w-full min-h-screen px-4"
    >
      <div className="relative w-full max-w-2xl mx-auto aspect-[2/3] sm:aspect-[3/4] lg:max-w-3xl">
        <Image
          src="/universe/full-cast.jpg"
          alt="What is Isolele? A visionary African universe born to reclaim memory, mythology, and power."
          fill
          className="object-contain drop-shadow-[0_0_40px_rgba(212,175,55,0.2)]"
          sizes="(max-width: 640px) 95vw, (max-width: 1024px) 70vw, 50vw"
          priority
        />
      </div>
    </motion.div>
  );
}
