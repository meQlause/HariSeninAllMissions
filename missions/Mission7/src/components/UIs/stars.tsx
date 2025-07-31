import type { StarRatingProps } from "../../utils/types";
import React from "react";

export const StarRatingUi: React.FC<StarRatingProps> = ({ rating, size = 24, className = "" }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    objectFit: "contain" as const,
  };

  return (
    <div className={`${className} flex items-center gap-0`}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <img key={`full-${i}`} src="/assets/star.svg" alt="Full star" style={starStyle} />
      ))}
      {hasHalfStar && (
        <span
          style={{ position: "relative", display: "inline-block", ...starStyle }}
          key="half-container"
        >
          <img
            src="/assets/star-off.svg"
            alt="Empty star background"
            style={{ ...starStyle, position: "absolute", top: 0, left: 0, zIndex: 1 }}
          />
          <img
            src="/assets/star-h.svg"
            alt="Half star"
            style={{ ...starStyle, position: "absolute", top: 0, left: 0, zIndex: 2 }}
          />
        </span>
      )}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <img key={`empty-${i}`} src="/assets/star-off.svg" alt="Empty star" style={starStyle} />
      ))}
    </div>
  );
};
