"use client";

import { TESTIMONIALS } from "@/lib/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import ReviewsCarousel from "@/components/smoothui/reviews-carousel";

const REVIEWS = TESTIMONIALS.map((item, index) => ({
  id: index,
  author: item.name,
  title: item.role,
  body: item.quote,
}));

export function Testimonials() {
  return (
    <Section className="border-t border-navy/10 bg-offwhite">
      <Reveal className="w-full">
        <SectionHeading
          align="center"
          eyebrow="Feedback"
          heading="Client feedback"
        />

        <ReviewsCarousel className="mt-10" reviews={REVIEWS} />
      </Reveal>
    </Section>
  );
}
