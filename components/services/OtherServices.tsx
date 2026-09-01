"use client";

import Image from "next/image";
import { SERVICES } from "@/lib/site";
import { PAGE_SERVICE_IMAGES } from "@/lib/service-images";
import { serviceIcons } from "@/components/icons";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const OTHER_SERVICES = SERVICES.filter((service) => !service.featured);

export function OtherServices() {
  return (
    <section
      id="other-services"
      className="scroll-mt-36 border-t border-navy/10 bg-offwhite py-16 md:py-20"
    >
      <div className="mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Also available"
            heading="Additional Technical Services"
          >
            <p className="mt-6 max-w-2xl text-base font-normal text-gray">
              Ask us about these services when you contact us.
            </p>
          </SectionHeading>
        </Reveal>

        <Stagger className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {OTHER_SERVICES.map((service) => {
            const photo = PAGE_SERVICE_IMAGES[service.slug];

            return (
              <StaggerItem key={service.slug}>
                <article
                  id={service.anchor}
                  className="group scroll-mt-36 h-full overflow-hidden border border-navy/10 bg-offwhite transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-lg"
                >
                  {photo ? (
                    <div className="relative aspect-[4/3] bg-navy">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                        className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                      />
                    </div>
                  ) : null}
                  <div className="p-4">
                    <span className="text-navy transition-colors duration-[250ms] ease-out group-hover:text-gold">
                      {serviceIcons[service.slug]}
                    </span>
                    <h3 className="mt-3 font-heading text-sm font-bold text-navy">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-gray">
                      {service.description}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
