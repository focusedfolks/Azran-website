"use client";

import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function FinalCta() {
  return (
    <section className="bg-navy text-offwhite">
      <Reveal className="mx-auto max-w-content px-4 py-16 text-center sm:px-6 md:py-20 lg:px-8">
        <SectionHeading
          align="center"
          tone="onDark"
          eyebrow="Get in touch"
          heading="Have a Project in Mind?"
        />
        <p className="mt-6 text-lg font-normal text-offwhite/80">
          Let&apos;s talk about how we can help.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/contact" className="duration-300 ease-out">
            Get a Quote
          </Button>
          <Button href="/contact" variant="inverse" className="duration-300 ease-out">
            Contact Us
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
