"use client";

import { TRUST_ITEMS } from "@/lib/site";
import { trustIcons } from "@/components/icons";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export function WhyChooseUs() {
  return (
    <Section className="bg-offwhite">
      <Reveal>
        <SectionHeading eyebrow="Why Azran" heading="Why Choose Us" />
      </Reveal>

      <Stagger className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TRUST_ITEMS.map((item) => (
          <StaggerItem key={item.id}>
            <article className="h-full border border-navy/10 bg-offwhite p-6 shadow-subtle">
              <span className="text-gold">{trustIcons[item.id]}</span>
              <h3 className="mt-4 font-heading text-lg font-bold text-navy">
                {item.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray">
                {item.description}
              </p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
