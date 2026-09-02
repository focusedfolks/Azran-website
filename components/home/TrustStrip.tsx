"use client";

import { TRUST_ITEMS } from "@/lib/site";
import { trustIcons } from "@/components/icons";
import InfiniteSlider from "@/components/smoothui/infinite-slider";

export function TrustStrip() {
  return (
    <section className="bg-navy text-offwhite" aria-label="Why clients trust us">
      <div className="py-12 md:py-14">
        <InfiniteSlider
          gap={48}
          speed={40}
          speedOnHover={12}
          className="w-full"
        >
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.id}
              className="flex w-44 shrink-0 flex-col items-center text-center"
            >
              <span className="text-gold-400">{trustIcons[item.id]}</span>
              <p className="mt-3 text-sm font-medium leading-snug text-offwhite">
                {item.label}
              </p>
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}
