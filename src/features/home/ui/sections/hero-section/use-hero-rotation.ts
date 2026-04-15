import { useCallback, useEffect, useState } from "react";

export function useHeroRotation() {
  const [activeSlide, setActiveSlide] = useState(0);

  const toggleSlide = useCallback(() => {
    setActiveSlide((prev) => (prev === 0 ? 1 : 0));
  }, []);

  useEffect(() => {
    const interval = setInterval(toggleSlide, 5000);
    return () => clearInterval(interval);
  }, [toggleSlide]);

  return {
    activeSlide,
    setActiveSlide,
  };
}
