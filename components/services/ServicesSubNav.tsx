"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

const LINKS = [
  { id: "tiling", href: "#tiling", label: "Tiling" },
  { id: "cleaning", href: "#cleaning", label: "Cleaning" },
  { id: "other-services", href: "#other-services", label: "Other Services" },
] as const;

export function ServicesSubNav() {
  const [active, setActive] = useState<string>("tiling");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (LINKS.some((link) => link.id === hash)) {
      setActive(hash);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.15, 0.35] },
    );

    LINKS.forEach((link) => {
      const node = document.getElementById(link.id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-[72px] z-30 border-b border-navy/10 bg-offwhite">
      <nav
        aria-label="Service sections"
        className="mx-auto flex w-full max-w-content gap-1 overflow-x-auto px-4 sm:px-6 lg:px-8"
      >
        {LINKS.map((link) => {
          const isActive = active === link.id;

          return (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setActive(link.id)}
              className={cn(
                "relative shrink-0 px-4 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 ease-in-out",
                isActive ? "text-ink" : "text-gray hover:text-ink",
              )}
              aria-current={isActive ? "location" : undefined}
            >
              {link.label}
              {isActive ? (
                <span className="absolute inset-x-4 bottom-0 h-px bg-gold-500" />
              ) : null}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
