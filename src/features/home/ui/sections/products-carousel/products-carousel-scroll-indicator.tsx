import { motion } from "framer-motion";

interface ProductsCarouselScrollIndicatorProps {
  borderColor: string;
  dotColor: string;
}

export function ProductsCarouselScrollIndicator({
  borderColor,
  dotColor,
}: ProductsCarouselScrollIndicatorProps) {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
    >
      <div className="w-6 h-10 rounded-full border-2 flex justify-center pt-2" style={{ borderColor }}>
        <motion.div
          className="w-1.5 h-3 rounded-full"
          style={{ backgroundColor: dotColor }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>
    </motion.div>
  );
}
