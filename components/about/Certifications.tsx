"use client";

import { certIcons } from "@/components/icons";
import { LICENSE_ITEMS } from "@/lib/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export function Certifications() {
  return (
    <Section className="bg-offwhite">
      <Reveal>
        <SectionHeading eyebrow="Credentials" heading="Licenses & registration">
          <p className="mt-6 max-w-2xl text-base font-normal leading-relaxed text-gray">
            Azran Technical Services LLC is licensed by the Dubai Department of
            Economic Development and registered with the Dubai Chamber of
            Commerce.
          </p>
        </SectionHeading>
      </Reveal>

      <Stagger className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {LICENSE_ITEMS.map((item) => (
          <StaggerItem key={item.id}>
            <article className="flex h-full flex-col items-center border border-navy/10 bg-offwhite px-6 py-8 text-center shadow-subtle">
              <span className="text-gold-400">{certIcons[item.id]}</span>
              <h3 className="mt-4 font-heading text-base font-bold text-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray">
                {item.detail}
              </p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
