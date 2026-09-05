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
          <div className="mt-6 space-y-4 text-base font-normal leading-relaxed text-ink">
            <p>
              Azran was founded to bring a higher standard of precision to floor
              tiling and finishing work in the UAE. Over 10+ years, the team has
              grown from small residential jobs to full-scale villa and
              commercial fit-outs, building a reputation for clean lines,
              reliable scheduling, and DED-licensed, fully compliant site work.
            </p>
            <p>
              Today Azran serves villa owners, contractors, and commercial
              developers across the UAE, specialising in large-format porcelain
              and stone-look flooring for homes, lobbies, and high-traffic
              circulation areas — from initial site survey through to final
              grouting and handover.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="relative aspect-[4/3] bg-navy">
          <Image
            src="/images/stock-villa-floor.jpg"
            alt="Modern villa living space with finished flooring and indoor-outdoor circulation"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </Reveal>
      </div>
    </Section>
  );
}
