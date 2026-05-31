"use client";

import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  size?: number;
}

export function StarRating({ rating, size = 16 }: StarRatingProps) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((index) => (
        <Star
          key={index}
          size={size}
          fill={index <= Math.round(rating) ? "#F6B800" : "none"}  
          stroke={index <= Math.round(rating) ? "#F6B800" : "#555555"}
        />
      ))}
    </div>
  );
}

