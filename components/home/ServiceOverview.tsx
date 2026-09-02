"use client";

import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/lib/site";
import { HOME_SERVICE_IMAGES } from "@/lib/service-images";
import { serviceIcons } from "@/components/icons";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";
import { asServiceHeading } from "@/lib/heading";

export function ServiceOverview() {
  return (
    <Section className="bg-offwhite">
      <Reveal>
        <SectionHeading eyebrow="Our Services" heading="Our core services" />
      </Reveal>

      <Stagger className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {SERVICES.map((service) => {
          const photo = HOME_SERVICE_IMAGES[service.slug];

          return (
            <StaggerItem
              key={service.slug}
              className={cn(service.featured && "md:col-span-2")}
            >
              <Link
                href={`/services#${service.anchor}`}
                className={cn(
                  "group flex h-full cursor-pointer flex-col overflow-hidden border border-navy/10 bg-offwhite transition-[transform,box-shadow] duration-300 ease-out",
                  service.featured
                    ? "border-l-4 border-l-gold-500 shadow-md hover:-translate-y-1.5 hover:shadow-lg"
                    : "shadow-subtle hover:-translate-y-1 hover:shadow-lg",
                )}
              >
                {photo ? (
                  <div
                    className={cn(
                      "relative bg-navy",
                      service.featured ? "aspect-[16/9]" : "aspect-[4/3]",
                    )}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes={
                        service.featured
                          ? "(max-width: 768px) 100vw, 50vw"
                          : "(max-width: 768px) 100vw, 25vw"
                      }
                      className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                  </div>
                ) : null}
                <div
                  className={cn(
                    service.featured ? "p-7 sm:p-8" : "p-6",
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-navy">
                      {serviceIcons[service.slug]}
                    </span>
                    {service.featured ? (
                      <span className="bg-gold-400 px-2.5 py-1 font-heading text-[0.65rem] font-bold uppercase tracking-[0.16em] text-navy">
                        Our Specialty
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold text-navy">
                    {asServiceHeading(service.title)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy">
                    {service.description}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
