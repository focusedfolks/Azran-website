"use client";

import Image from "next/image";
import { markIcons, serviceIcons } from "@/components/icons";
import { Accordion } from "@/components/ui/Accordion";
import { ComparisonSlider } from "@/components/ui/ComparisonSlider";
import { QuoteCallout } from "@/components/services/QuoteCallout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";
import type { ServiceDetailContent } from "@/lib/services-content";

type ServiceDetailProps = {
  content: ServiceDetailContent;
  aliasId?: string;
  className?: string;
};

export function ServiceDetail({ content, aliasId, className }: ServiceDetailProps) {
  return (
    <section
      id={content.id}
      className={cn("scroll-mt-36 py-16 md:py-28", className)}
    >
      {aliasId ? <span id={aliasId} className="sr-only" /> : null}
      <div className="mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={content.kicker}
            heading={content.title}
            icon={serviceIcons[content.iconKey]}
          />
          <div className="mt-6 max-w-3xl space-y-3 text-base font-normal leading-relaxed text-gray sm:text-lg">
            {content.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-14 md:mt-16">
          <div className="border border-navy/10 bg-offwhite px-5 py-8 shadow-subtle sm:px-8 sm:py-10">
            <h3 className="font-heading text-xl font-bold text-navy sm:text-2xl">
              Our Process
            </h3>
            <ol className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {content.process.map((step, index) => (
                <li key={step.title}>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold font-heading text-sm font-extrabold text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-4 block text-navy">{markIcons[step.icon]}</span>
                  <h4 className="mt-3 font-heading text-base font-bold text-navy">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal className="mt-14 md:mt-16">
          <h3 className="font-heading text-xl font-bold sm:text-2xl">
            {content.materialsTitle}
          </h3>
          <Stagger className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {content.materials.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex items-start gap-3 border border-navy/10 bg-offwhite p-4">
                  <span className="text-gold">{markIcons[item.icon]}</span>
                  <p className="text-sm font-medium text-navy">{item.title}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>

        <Reveal className="mt-14 md:mt-16">
          <h3 className="font-heading text-xl font-bold sm:text-2xl">
            {content.typesTitle}
          </h3>
          <Stagger className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.types.map((type) => (
              <StaggerItem key={type.title}>
                <article className="h-full overflow-hidden border border-navy/10 bg-offwhite shadow-subtle">
                  {type.image ? (
                    <div className="relative aspect-[4/3] bg-navy">
                      <Image
                        src={type.image}
                        alt={type.imageAlt ?? type.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  ) : null}
                  <div className="p-6">
                    <h4 className="font-heading text-lg font-bold text-navy">
                      {type.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-gray">{type.body}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>

        <Reveal className="mt-14 md:mt-16">
          <h3 className="font-heading text-xl font-bold sm:text-2xl">
            Before & After
          </h3>
          <div className="mt-6">
            <ComparisonSlider
              beforeSrc={content.beforeSrc}
              afterSrc={content.afterSrc}
              beforeAlt={content.beforeAlt}
              afterAlt={content.afterAlt}
            />
          </div>
        </Reveal>

        <Reveal className="mt-14 md:mt-16">
          <QuoteCallout />
        </Reveal>

        <Reveal className="mt-14 md:mt-16">
          <h3 className="font-heading text-xl font-bold sm:text-2xl">FAQ</h3>
          <div className="mt-6">
            <Accordion items={content.faqs} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
