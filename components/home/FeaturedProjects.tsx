"use client";

import Image from "next/image";
import { FEATURED_PROJECTS } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export function FeaturedProjects() {
  return (
    <Section className="bg-offwhite">
      <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading eyebrow="Selected work" heading="Recent Projects" />
        <Button href="/projects" variant="secondary" className="hidden sm:inline-flex">
          View All Projects
        </Button>
      </Reveal>

      <Stagger className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURED_PROJECTS.map((project) => (
          <StaggerItem key={project.src}>
            <article className="group relative aspect-[4/3] overflow-hidden bg-navy">
              <Image
                src={project.src}
                alt={project.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy/0 transition-colors duration-300 ease-out group-hover:bg-navy/40 max-lg:bg-navy/40" />
              <p className="absolute inset-x-0 bottom-0 translate-y-3 px-4 py-3 font-heading text-sm font-bold text-offwhite opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 max-lg:translate-y-0 max-lg:opacity-100">
                {project.name}
              </p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-8 sm:hidden">
        <Button href="/projects" variant="secondary" className="w-full">
          View All Projects
        </Button>
      </div>
    </Section>
  );
}
