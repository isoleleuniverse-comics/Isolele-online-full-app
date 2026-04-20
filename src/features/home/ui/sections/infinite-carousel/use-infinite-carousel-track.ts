import { useEffect, useRef, type RefObject } from "react";

interface UseInfiniteCarouselTrackArgs {
  trackRef: RefObject<HTMLDivElement | null>;
  charactersLength: number;
}

export function useInfiniteCarouselTrack({ trackRef, charactersLength }: UseInfiniteCarouselTrackArgs) {
  const positionRef = useRef(0);
  const speedRef = useRef(1.2);
  const isSlowingRef = useRef(false);
  const slowFrameCountRef = useRef(0);
  const isPausedRef = useRef(false);
  const animationIdRef = useRef<number | null>(null);

  const cardWidth = 288 + 24;
  const slowZoneStart = cardWidth * charactersLength * 2 - 200;
  const resetPosition = cardWidth * charactersLength;

  useEffect(() => {
    const animate = () => {
      if (!trackRef.current || isPausedRef.current) {
        animationIdRef.current = requestAnimationFrame(animate);
        return;
      }

      if (positionRef.current >= slowZoneStart && !isSlowingRef.current) {
        isSlowingRef.current = true;
        slowFrameCountRef.current = 0;
      }

      if (isSlowingRef.current && slowFrameCountRef.current < 60) {
        speedRef.current = 1.2 - 0.9 * (slowFrameCountRef.current / 60);
        slowFrameCountRef.current++;
      } else if (positionRef.current < resetPosition * 0.5 && isSlowingRef.current) {
        if (slowFrameCountRef.current < 120) {
          speedRef.current = 0.3 + 0.9 * ((slowFrameCountRef.current - 60) / 60);
          slowFrameCountRef.current++;
        } else {
          speedRef.current = 1.2;
          isSlowingRef.current = false;
        }
      }

      positionRef.current += speedRef.current;
      trackRef.current.style.transform = `translateX(-${positionRef.current}px)`;

      if (positionRef.current >= resetPosition * 2) {
        positionRef.current = resetPosition;
        trackRef.current.style.transform = `translateX(-${positionRef.current}px)`;
        isSlowingRef.current = false;
        slowFrameCountRef.current = 0;
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [charactersLength, resetPosition, slowZoneStart, trackRef]);

  return {
    handlePauseStart: () => {
      isPausedRef.current = true;
    },
    handlePauseEnd: () => {
      isPausedRef.current = false;
    },
  };
}
