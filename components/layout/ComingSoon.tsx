import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

type ComingSoonProps = {
  kicker: string;
};

export function ComingSoon({ kicker }: ComingSoonProps) {
  return (
    <Section className="flex min-h-[50vh] items-center">
      <Reveal>
        <SectionHeading as="h1" eyebrow={kicker} heading="Coming soon" />
        <p className="mt-6 max-w-xl text-base font-normal leading-relaxed text-gray sm:text-lg">
          This page is under construction. In the meantime, request a quote or
          reach us by phone or WhatsApp.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact">Get a Quote</Button>
          <Button href="/contact" variant="secondary">
            Contact Us
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
