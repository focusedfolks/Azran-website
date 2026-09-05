"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { PROJECT_FILTERS, PROJECTS, type Project, type ProjectCategory } from "@/lib/projects";
import { ProjectModal } from "@/components/projects/ProjectModal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

type FilterId = "all" | ProjectCategory;

export function ProjectsGallery() {
  const [filter, setFilter] = useState<FilterId>("all");
  const [active, setActive] = useState<Project | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const visible = useMemo(
    () =>
      filter === "all"
        ? PROJECTS
        : PROJECTS.filter((project) => project.category === filter),
    [filter],
  );

  const openProject = (project: Project) => {
    setActive(project);
    setImageIndex(0);
  };

  return (
    <Section className="bg-offwhite">
      <Reveal>
        <SectionHeading eyebrow="Our work" heading="Selected Projects" />

        <div
          className="mt-10 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter projects by service"
        >
          {PROJECT_FILTERS.map((item) => {
            const isActive = filter === item.id;

            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={isActive}
                className={cn(
                  "relative min-h-11 cursor-pointer px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 ease-in-out",
                  isActive
                    ? "bg-gold-400 text-navy hover:bg-gold-300 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-navy"
                    : "bg-white text-gray hover:text-ink",
                )}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </Reveal>

      <Stagger
        key={filter}
        className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {visible.length === 0 ? (
          <p className="col-span-full text-sm text-gray">
            No placeholder projects in this category.
          </p>
        ) : (
          visible.map((project) => (
            <StaggerItem key={project.id}>
              <article className="group relative bg-navy">
                <button
                  type="button"
                  className="block w-full cursor-pointer text-left"
                  onClick={() => openProject(project)}
                  aria-haspopup="dialog"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-navy/0 transition-colors duration-300 ease-out group-hover:bg-navy/40 max-lg:bg-navy/40" />
                    <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 max-lg:translate-y-0 max-lg:opacity-100">
                      <span className="mb-2 inline-block bg-gold-400 px-2 py-0.5 font-heading text-[0.65rem] font-bold uppercase tracking-[0.14em] text-navy">
                        {project.categoryLabel}
                      </span>
                      <h2 className="font-heading text-base font-bold text-offwhite">
                        {project.title}
                      </h2>
                      <span className="mt-2 block font-heading text-xs font-bold text-gold-400">
                        View Details
                      </span>
                    </div>
                  </div>
                </button>
              </article>
            </StaggerItem>
          ))
        )}
      </Stagger>

      <ProjectModal
        project={active}
        imageIndex={imageIndex}
        onImageIndexChange={setImageIndex}
        onClose={() => setActive(null)}
      />
    </Section>
  );
}
