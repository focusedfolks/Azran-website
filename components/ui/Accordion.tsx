"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDownIcon } from "@/components/icons";
import type { FaqItem } from "@/lib/services-content";

type AccordionProps = {
  items: FaqItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const baseId = useId();

  return (
    <div className="border-y border-navy/10">
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.question} className="border-b border-navy/10 last:border-b-0">
            <button
              id={buttonId}
              type="button"
              className="flex min-h-11 w-full cursor-pointer items-center justify-between gap-4 py-4 text-left"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="font-heading text-sm font-bold text-navy sm:text-base">
                {item.question}
              </span>
              <motion.span
                className="shrink-0 text-navy"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: reduce ? 0 : 0.25, ease: [0, 0, 0.2, 1] }}
              >
                <ChevronDownIcon />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: reduce ? 0 : 0.3, ease: [0, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-sm leading-relaxed text-navy">
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
