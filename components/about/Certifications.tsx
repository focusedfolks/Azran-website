"use client";

import { certIcons } from "@/components/icons";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

// TODO — client must provide actual license number and certification documents. Do not display badges for certifications not confirmed.
const CERT_PLACEHOLDERS = [
  {
    id: "license",
    title: "Trade License",
    detail: "[License No. — pending]",
  },
  {
    id: "insurance",
    title: "Insurance",
    detail: "[Policy details — pending]",
  },
  {
    id: "iso",
    title: "ISO Certification",
    detail: "[Not confirmed — do not display as awarded]",
  },
] as const;

export function Certifications() {
  return (
    <Section className="bg-offwhite">
      <Reveal>
        <SectionHeading eyebrow="Credentials" heading="Certifications & Licenses">
          <p className="mt-6 max-w-2xl text-base font-normal leading-relaxed text-gray">
            Slots only — do not treat these as confirmed credentials until the
            client supplies documents.
          </p>
        </SectionHeading>
      </Reveal>

      <Stagger className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {CERT_PLACEHOLDERS.map((cert) => (
          <StaggerItem key={cert.id}>
            <article className="flex h-full flex-col items-center border border-dashed border-navy/20 bg-white px-6 py-8 text-center">
              <span className="text-gold">{certIcons[cert.id]}</span>
              <h3 className="mt-4 font-heading text-base font-bold text-navy">
                {cert.title}
              </h3>
              <p className="mt-2 text-sm text-gray">{cert.detail}</p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
