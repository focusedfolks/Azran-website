"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

const FRAME_OFFSET = -30;
const FRAMES_VISIBLE_LENGTH = 3;

function clamp(val: number, [min, max]: [number, number]): number {
  return Math.min(Math.max(val, min), max);
}

export interface Review {
  author: string;
  body: string;
  id: string | number;
  title: string;
}

interface ReviewCardProps {
  activeIndex: number;
  index: number;
  review: Review;
  totalCards: number;
}

function ReviewCard({
  review,
  index,
  activeIndex,
  totalCards,
}: ReviewCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const offsetIndex = index - activeIndex;

  // Same logic as time-machine
  const blur = activeIndex > index ? 2 : 0;
  const opacity = activeIndex > index ? 0 : 1;
  const scale = shouldReduceMotion
    ? 1
    : clamp(1 - offsetIndex * 0.08, [0.08, 2]);
  const y = shouldReduceMotion
    ? 0
    : clamp(offsetIndex * FRAME_OFFSET, [
        FRAME_OFFSET * FRAMES_VISIBLE_LENGTH,
        Number.POSITIVE_INFINITY,
      ]);

  const isActive = index === activeIndex;

  return (
    <motion.figure
      animate={{
        scale,
        x: "-50%",
        y: `calc(-50% + ${y}px)`,
        transition: {
          duration: 0.25,
          ease: [0, 0, 0.2, 1],
        },
      }}
      className="absolute left-1/2 top-1/2 w-[min(100%,36rem)] border-2 border-navy bg-offwhite p-6 shadow-subtle sm:p-8"
      initial={false}
      style={{
        filter: `blur(${blur}px)`,
        opacity,
        pointerEvents: isActive ? "auto" : "none",
        transitionDuration: shouldReduceMotion ? "0ms" : "250ms",
        transitionProperty: "opacity, filter",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        zIndex: totalCards - index,
      }}
    >
      <blockquote className="relative">
        <div className="absolute -top-1 -left-2 font-heading text-4xl leading-none text-gold-400">
          “
        </div>
        <p className="relative font-body text-sm leading-relaxed text-ink sm:text-base">
          {review.body}
        </p>
      </blockquote>
      <figcaption className="mt-4 flex items-center gap-2 border-t border-navy/10 pt-4">
        <div className="flex flex-col">
          <span className="font-heading text-xs font-bold text-ink">
            {review.author}
          </span>
          <span className="text-xs text-gray">{review.title}</span>
        </div>
      </figcaption>
    </motion.figure>
  );
}

interface NavigationButtonProps {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}

function NavigationButton({
  direction,
  onClick,
  disabled,
}: NavigationButtonProps) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;

  return (
    <button
      aria-label={direction === "prev" ? "Previous review" : "Next review"}
      className={cn(
        "group relative z-0 flex h-11 w-11 items-center justify-center border border-navy/15 bg-white text-ink transition-colors duration-300 ease-out",
        disabled
          ? "cursor-not-allowed opacity-30"
          : "cursor-pointer hover:border-navy hover:bg-navy hover:text-offwhite",
      )}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}

export interface ReviewsCarouselProps {
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
  excludeIds?: (string | number)[];
  reviews: Review[];
  showIndicators?: boolean;
  showNavigation?: boolean;
}

export default function ReviewsCarousel({
  reviews,
  className = "",
  excludeIds = [],
  showIndicators = true,
  showNavigation = true,
  autoPlay = false,
  autoPlayInterval = 5000,
}: ReviewsCarouselProps) {
  // Filter out excluded reviews - use Set for O(1) lookups
  const filteredReviews = useMemo(() => {
    if (excludeIds.length === 0) {
      return reviews;
    }

    const excludeSet = new Set(excludeIds);
    const reviewsLength = reviews.length;
    const results: typeof reviews = [];

    // Use for loop for better performance
    for (let i = 0; i < reviewsLength; i++) {
      const review = reviews[i];
      if (!excludeSet.has(review.id)) {
        results.push(review);
      }
    }

    return results;
  }, [reviews, excludeIds]);

  const maxIndex = filteredReviews.length - 1;
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || maxIndex < 0) {
      return;
    }

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        if (prevIndex >= maxIndex) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, autoPlayInterval);

    return () => {
      clearInterval(interval);
    };
  }, [autoPlay, autoPlayInterval, maxIndex]);

  // Keyboard navigation
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") {
        setActiveIndex((i) => clamp(i - 1, [0, maxIndex]));
      } else if (event.key === "ArrowRight") {
        setActiveIndex((i) => clamp(i + 1, [0, maxIndex]));
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [maxIndex]);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      }
      return prevIndex;
    });
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex <= maxIndex ? newIndex : prevIndex;
    });
  };

  if (filteredReviews.length === 0) {
    return null;
  }

  return (
    <div className={cn("mx-auto w-full max-w-3xl", className)}>
      <div className="relative h-64 w-full sm:h-72">
        {filteredReviews.map((review: Review, index: number) => (
          <ReviewCard
            activeIndex={activeIndex}
            index={index}
            key={review.id}
            review={review}
            totalCards={filteredReviews.length}
          />
        ))}
      </div>

      {showNavigation || showIndicators ? (
        <div className="mt-8 flex items-center justify-center gap-3">
          {showNavigation ? (
            <NavigationButton
              direction="prev"
              disabled={activeIndex <= 0}
              onClick={goToPrevious}
            />
          ) : null}
          {showIndicators ? (
            <div className="flex items-center gap-2">
              {filteredReviews.map((review: Review, index: number) => (
                <button
                  aria-label={`Show testimonial ${index + 1}`}
                  className={cn(
                    "h-2 rounded-sm transition-all duration-300 ease-out",
                    index === activeIndex
                      ? "w-8 bg-gold-400"
                      : "w-2 bg-navy/20 hover:bg-navy/40",
                  )}
                  key={review.id}
                  onClick={() => {
                    setActiveIndex(index);
                  }}
                  type="button"
                />
              ))}
            </div>
          ) : null}
          {showNavigation ? (
            <NavigationButton
              direction="next"
              disabled={activeIndex === maxIndex}
              onClick={goToNext}
            />
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
