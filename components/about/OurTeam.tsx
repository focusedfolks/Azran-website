"use client";

import { SITE } from "@/lib/site";
import { CountUp } from "@/components/unlumen-ui/count-up";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function OurTeam() {
  return (
    <Section className="bg-navy">
      <Reveal>
        <SectionHeading tone="onDark" eyebrow="People" heading="Our Team" />
      </Reveal>

      <Reveal delay={0.08}>
        <div
          className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:gap-6"
          aria-label={`${SITE.employees}+ employees`}
        >
          <p className="flex items-baseline font-heading text-hero-mobile font-extrabold tabular-nums tracking-tight text-gold lg:text-hero">
            <CountUp
              to={SITE.employees}
              separator=","
              digitEffect="slide"
              duration={2}
              className="text-gold"
            />
            <span aria-hidden="true">+</span>
          </p>
          <p className="pb-1 font-heading text-2xl font-bold text-offwhite sm:text-3xl">
            Employees
          </p>
        </div>
        <p className="mt-6 max-w-2xl text-base font-normal leading-relaxed text-offwhite/80">
          A trained workforce delivering tiling, cleaning, and technical
          maintenance across the UAE.
        </p>
      </Reveal>
    </Section>
  );
}
