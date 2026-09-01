import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { OurStory } from "@/components/about/OurStory";
import { MissionValues } from "@/components/about/MissionValues";
import { WhyChooseUs } from "@/components/about/WhyChooseUs";
import { OurTeam } from "@/components/about/OurTeam";
import { Certifications } from "@/components/about/Certifications";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Azran Technical Services"
        image="/images/header-about.png"
        imageAlt="Technicians walking a commercial fit-out floor"
        crumbs={[
          { href: "/", label: "Home" },
          { label: "About Us" },
        ]}
      />
      <OurStory />
      <MissionValues />
      <WhyChooseUs />
      <OurTeam />
      <Certifications />
    </>
  );
}
