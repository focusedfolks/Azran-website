import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactMap } from "@/components/contact/ContactMap";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        image="/images/header-contact.png"
        imageAlt="Daylit office corridor in Bur Dubai"
        crumbs={[
          { href: "/", label: "Home" },
          { label: "Contact" },
        ]}
      />
      <Section className="bg-offwhite pb-8 md:pb-10">
        <Stagger className="grid items-stretch gap-6 lg:grid-cols-2">
          <StaggerItem className="h-full">
            <ContactInfo />
          </StaggerItem>
          <StaggerItem className="h-full">
            <ContactForm />
          </StaggerItem>
        </Stagger>
      </Section>
      <Reveal>
        <ContactMap />
      </Reveal>
    </>
  );
}
