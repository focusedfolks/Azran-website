"use client";

import { valueIcons } from "@/components/icons";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const CARDS = [
  {
    id: "mission",
    title: "Mission",
    body: "[PLACEHOLDER_MISSION — replace with the client's mission statement.]",
  },
  {
    id: "vision",
    title: "Vision",
    body: "[PLACEHOLDER_VISION — replace with the client's vision statement.]",
  },
  {
    id: "values",
    title: "Values",
    body: "[PLACEHOLDER_VALUES — replace with the client's stated values.]",
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
              <span className="text-gold">{valueIcons[card.id]}</span>
              <h3 className="mt-5 font-heading text-xl font-bold text-navy">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray">{card.body}</p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
