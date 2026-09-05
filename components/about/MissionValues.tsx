"use client";

import { valueIcons } from "@/components/icons";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const CARDS = [
  {
    id: "mission",
    title: "Mission",
    body: "To deliver precision flooring and finishing work that meets the highest standards of craftsmanship, on schedule and within budget, for every villa, lobby, and commercial project we take on across the UAE.",
  },
  {
    id: "vision",
    title: "Vision",
    body: "To be the UAE's most trusted name in floor tiling and finishing — known as much for reliability and clean execution as for the quality of the floors we lay.",
  },
  {
    id: "values",
    title: "Values",
    body: "Precision, transparency, and accountability on every site — we do the job right the first time, communicate clearly with clients throughout, and stand behind our work after handover.",
  },
] as const;

export function MissionValues() {
  return (
    <Section className="bg-navy">
      <Reveal>
        <SectionHeading
          tone="onDark"
          eyebrow="How we work"
          heading="Mission & Values"
        />
      </Reveal>

      <Stagger className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {CARDS.map((card) => (
          <StaggerItem key={card.id}>
            <article className="h-full bg-offwhite p-7 shadow-subtle">
              <span className="text-gold-400">{valueIcons[card.id]}</span>
              <h3 className="mt-5 font-heading text-xl font-bold text-ink">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink">{card.body}</p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
