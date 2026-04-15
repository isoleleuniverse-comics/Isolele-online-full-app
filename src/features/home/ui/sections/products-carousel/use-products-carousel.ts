import { useCallback, useEffect, useState } from "react";
import { PRODUCT_SLIDES } from "./data";

export function useProductsCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % PRODUCT_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + PRODUCT_SLIDES.length) % PRODUCT_SLIDES.length);
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [autoPlay, nextSlide]);

  const stopAutoPlay = () => setAutoPlay(false);

  return {
    activeSlide,
    autoPlay,
    nextSlide,
    prevSlide,
    setActiveSlide,
    stopAutoPlay,
  };
}
