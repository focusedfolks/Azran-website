"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

export function Testimonials() {
  return (
    <Section className="border-t border-navy/10 bg-offwhite">
      <Reveal className="w-full text-center">
        <p className="text-sm tracking-wide text-navy">
          DED licensed · 10+ years of experience · Serving the UAE
        </p>
      </Reveal>
    </Section>
  );
}
