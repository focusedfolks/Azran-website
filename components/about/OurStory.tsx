"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function OurStory() {
  return (
    <Section className="bg-offwhite">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionHeading eyebrow="Who we are" heading="Our Story" />
          {/*
            PLACEHOLDER COPY — do not publish as-is.
            [COMPANY_STORY — replace with real company background, founding year, growth]
          */}
          <div className="mt-6 space-y-4 text-base font-normal leading-relaxed text-gray">
            <p>
              [COMPANY_STORY — replace with real company background, founding
              year, growth]
            </p>
            <p>
              [PLACEHOLDER — additional paragraph on markets served and core
              specialisms. Do not publish until replaced with client-approved
              copy.]
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="relative aspect-[4/3] bg-navy">
          <Image
            src="/images/about-story.jpg"
            alt="Technicians reviewing a floor plan on site in a partially finished commercial space"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </Reveal>
      </div>
    </Section>
  );
}
