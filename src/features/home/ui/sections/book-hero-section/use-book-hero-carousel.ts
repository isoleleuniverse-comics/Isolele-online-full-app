"use client";

import { useCallback, useEffect, useState } from "react";

export function useBookHeroCarousel(totalSlides: number) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrent((prev) => {
        const next = prev + newDirection;
        if (next < 0) return totalSlides - 1;
        if (next >= totalSlides) return 0;
        return next;
      });
    },
    [totalSlides]
  );

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 7000);
    return () => clearInterval(timer);
  }, [paginate]);

  const selectSlide = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  return { current, direction, paginate, selectSlide };
}

