"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type ComparisonSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
};

export function ComparisonSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
}: ComparisonSliderProps) {
  const [value, setValue] = useState(50);
  const reduce = useReducedMotion();
  const frameRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setValue(Math.min(100, Math.max(0, next)));
  }, []);

  if (reduce) {
    return (
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <figure className="relative aspect-[16/9] bg-navy">
          <Image src={beforeSrc} alt={beforeAlt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
          <figcaption className="absolute bottom-3 left-3 bg-navy px-2 py-1 font-heading text-[0.65rem] font-bold uppercase tracking-[0.16em] text-offwhite">
            Before
          </figcaption>
        </figure>
        <figure className="relative aspect-[16/9] bg-navy">
          <Image src={afterSrc} alt={afterAlt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
          <figcaption className="absolute bottom-3 left-3 bg-navy px-2 py-1 font-heading text-[0.65rem] font-bold uppercase tracking-[0.16em] text-offwhite">
            After
          </figcaption>
        </figure>
      </div>
    );
  }

  return (
    <div
      ref={frameRef}
      className="group relative aspect-[16/9] select-none overflow-hidden bg-navy touch-none"
      onPointerDown={(event) => {
        dragging.current = true;
        event.currentTarget.setPointerCapture(event.pointerId);
        updateFromClientX(event.clientX);
      }}
      onPointerMove={(event) => {
        if (dragging.current) updateFromClientX(event.clientX);
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
      onPointerCancel={() => {
        dragging.current = false;
      }}
    >
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        sizes="(max-width: 1280px) 100vw, 1280px"
        className="object-cover"
        draggable={false}
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover"
          draggable={false}
        />
      </div>

      <span className="pointer-events-none absolute bottom-3 left-3 bg-navy px-2 py-1 font-heading text-[0.65rem] font-bold uppercase tracking-[0.16em] text-offwhite">
        Before
      </span>
      <span className="pointer-events-none absolute bottom-3 right-3 bg-navy px-2 py-1 font-heading text-[0.65rem] font-bold uppercase tracking-[0.16em] text-offwhite">
        After
      </span>

      <motion.div
        className="absolute top-0 z-10 h-full w-0.5 bg-gold"
        style={{ left: `${value}%` }}
        aria-hidden="true"
      />

      <button
        type="button"
        className={cn(
          "absolute top-1/2 z-20 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center border-2 border-gold bg-navy text-gold transition-transform duration-200 ease-out hover:scale-110 active:scale-110 group-hover:scale-110",
        )}
        style={{ left: `${value}%` }}
        aria-label="Compare before and after"
        role="slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(value)}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            setValue((current) => Math.max(0, current - 5));
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            setValue((current) => Math.min(100, current + 5));
          }
        }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M5 2 1 7l4 5M9 2l4 5-4 5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
    </div>
  );
}
