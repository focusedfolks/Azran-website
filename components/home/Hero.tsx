"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { WhatsAppGlyph } from "@/components/icons";
import { cn } from "@/lib/cn";

type CollageImage = {
  src: string;
  alt: string;
};

type HeroCta = {
  href: string;
  label: string;
  variant: "primary" | "inverse";
  external?: boolean;
  icon?: boolean;
};

type HeroSlide = {
  id: string;
  eyebrow: string;
  heading: string;
  headingAccent: string;
  body: string;
  images: CollageImage[];
  primary: HeroCta;
  secondary: HeroCta;
};

function whatsappHref(message: string) {
  return `${SITE.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

const SLIDES: HeroSlide[] = [
  {
    id: "floor",
    eyebrow: "Floor tiling",
    heading: "Precision floors.",
    headingAccent: "Built to last.",
    body: "Large-format porcelain and stone-look floors for villas, lobbies, and circulation areas — set out, bedded, and grouted to a clean line.",
    images: [
      {
        src: "/images/hero-slide-floor-1.png",
        alt: "Technician checking a newly laid villa floor with a spirit level",
      },
      {
        src: "/images/hero-slide-floor-2.png",
        alt: "Notched trowel spreading tile adhesive on a subfloor",
      },
      {
        src: "/images/hero-slide-floor-3.png",
        alt: "Finished stone-look porcelain floor in an open-plan living room",
      },
    ],
    primary: {
      href: whatsappHref("Hello Azran — I would like a quote for floor tiling."),
      label: "WhatsApp Floor Tiling",
      variant: "primary",
      external: true,
      icon: true,
    },
    secondary: {
      href: "/services#tiling",
      label: "View Floor Tiling",
      variant: "inverse",
    },
  },
  {
    id: "wall",
    eyebrow: "Wall tiling",
    heading: "Walls, aligned.",
    headingAccent: "Joint by joint.",
    body: "Feature walls, splashbacks, and wet-area tiling with consistent joints and a tidy finish — from setting-out to grouting.",
    images: [
      {
        src: "/images/hero-slide-wall-1.png",
        alt: "Technician setting large-format tiles on a villa feature wall",
      },
      {
        src: "/images/hero-slide-wall-2.png",
        alt: "Kitchen splashback tiles being grouted",
      },
      {
        src: "/images/hero-slide-wall-3.png",
        alt: "Completed herringbone wall tile detail in a bathroom",
      },
    ],
    primary: {
      href: whatsappHref("Hello Azran — I would like a quote for wall tiling."),
      label: "WhatsApp Wall Tiling",
      variant: "primary",
      external: true,
      icon: true,
    },
    secondary: {
      href: "/contact",
      label: "Quote Wall Tiling",
      variant: "inverse",
    },
  },
  {
    id: "building",
    eyebrow: "Building services",
    heading: "Buildings, looked after.",
    headingAccent: "End to end.",
    body: "Technical maintenance for occupied commercial and residential buildings — from lobbies and plant to the trades behind the finish.",
    images: [
      {
        src: "/images/hero-slide-building-1.png",
        alt: "Technician walking a commercial lobby during a building fit-out",
      },
      {
        src: "/images/hero-slide-building-2.png",
        alt: "Modern UAE apartment building seen from the courtyard",
      },
      {
        src: "/images/hero-slide-building-3.png",
        alt: "Daylit office lobby with stone floors and glass walls",
      },
    ],
    primary: {
      href: "/services",
      label: "View All Services",
      variant: "primary",
    },
    secondary: {
      href: "/contact",
      label: "Talk to Facilities",
      variant: "inverse",
    },
  },
  {
    id: "cleaning",
    eyebrow: "Building cleaning",
    heading: "Clean handover.",
    headingAccent: "Every time.",
    body: "Scheduled, deep, and post-fit-out cleaning for villas, common areas, and commercial interiors across the UAE.",
    images: [
      {
        src: "/images/hero-slide-cleaning-1.png",
        alt: "Technician buffing a villa hallway floor",
      },
      {
        src: "/images/hero-slide-cleaning-2.png",
        alt: "Technician wiping interior glazing in an apartment",
      },
      {
        src: "/images/hero-slide-cleaning-3.png",
        alt: "Steam-cleaning upholstery in a villa living room",
      },
    ],
    primary: {
      href: whatsappHref(
        "Hello Azran — I would like a quote for building cleaning.",
      ),
      label: "WhatsApp Cleaning",
      variant: "primary",
      external: true,
      icon: true,
    },
    secondary: {
      href: "/services#cleaning",
      label: "View Cleaning Services",
      variant: "inverse",
    },
  },
];

const INTERVAL_MS = 3000;
const SLIDE_EASE: [number, number, number, number] = [0, 0, 0.2, 1];
const LINE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const LINE_DURATION = 0.5;
const LINE_STAGGER = 0.08;
const BODY_DELAY = LINE_STAGGER * 4;
const CTA_DELAY = BODY_DELAY + 0.2;

export function Hero() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = SLIDES.length;
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const yMain = useTransform(scrollYProgress, [0, 1], [0, 24]);
  const ySide = useTransform(scrollYProgress, [0, 1], [0, 30]);

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % total) + total) % total);
    },
    [total],
  );

  useEffect(() => {
    if (reduce || paused) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [paused, reduce, total]);

  const slide = SLIDES[index];

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-navy text-offwhite"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto grid min-h-[34rem] w-full max-w-content lg:min-h-[40rem] lg:grid-cols-2">
        <div className="relative z-10 flex flex-col justify-center px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={false}
              animate={{ opacity: 1 }}
              exit={reduce ? undefined : { opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.32, ease: SLIDE_EASE }}
            >
              <HeroLine
                as="p"
                delay={0}
                reduce={reduce}
                className="font-body text-xs font-medium uppercase tracking-[0.22em] text-gold-400"
              >
                {slide.eyebrow}
              </HeroLine>
              <h1 className="mt-3 max-w-xl font-heading text-hero-mobile font-extrabold text-offwhite lg:text-hero">
                <HeroLine as="span" delay={LINE_STAGGER} reduce={reduce}>
                  {slide.heading}
                </HeroLine>
                <HeroLine
                  as="span"
                  delay={LINE_STAGGER * 2}
                  reduce={reduce}
                  className="text-gold-400"
                >
                  {slide.headingAccent}
                </HeroLine>
              </h1>
              <HeroLine
                as="p"
                delay={BODY_DELAY}
                reduce={reduce}
                className="mt-6 max-w-lg text-base font-normal leading-relaxed text-offwhite sm:text-lg"
              >
                {slide.body}
              </HeroLine>
              <motion.div
                className="mt-8 flex flex-wrap gap-3"
                initial={reduce ? false : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: reduce ? 0 : 0.4,
                  delay: reduce ? 0 : CTA_DELAY,
                  ease: LINE_EASE,
                }}
              >
                <HeroButton cta={slide.primary} />
                <HeroButton cta={slide.secondary} />
              </motion.div>
            </motion.div>
          </AnimatePresence>
          <p className="mt-8 text-sm tracking-wide text-offwhite/65">
            DED licensed · 10+ years of experience · Serving the UAE
          </p>
        </div>

        <div className="relative h-[20rem] sm:h-[26rem] lg:h-auto">
          <div className="absolute inset-0 lg:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                className="grid h-full grid-cols-2 grid-rows-2 gap-1.5 bg-navy"
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduce ? undefined : { opacity: 0 }}
                transition={{ duration: 0.32, ease: SLIDE_EASE }}
              >
                <HeroCollageCell
                  image={slide.images[0]}
                  y={yMain}
                  reduce={Boolean(reduce)}
                  priority={index === 0}
                  sizes="(max-width: 1024px) 50vw, 28vw"
                  className="relative row-span-2 overflow-hidden"
                />
                <HeroCollageCell
                  image={slide.images[1]}
                  y={ySide}
                  reduce={Boolean(reduce)}
                  sizes="(max-width: 1024px) 50vw, 22vw"
                  className="relative overflow-hidden"
                />
                <HeroCollageCell
                  image={slide.images[2]}
                  y={ySide}
                  reduce={Boolean(reduce)}
                  sizes="(max-width: 1024px) 50vw, 22vw"
                  className="relative overflow-hidden"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div
            className="absolute bottom-4 right-4 z-10 flex gap-2 lg:bottom-6 lg:right-8"
            role="tablist"
            aria-label="Hero service slides"
          >
            {SLIDES.map((item, slideIndex) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={slideIndex === index}
                aria-label={`Show ${item.eyebrow} slide`}
                className={cn(
                  "h-2 cursor-pointer rounded-sm transition-colors duration-300 ease-out",
                  slideIndex === index
                    ? "w-8 bg-gold-400"
                    : "w-2 bg-offwhite/35 hover:bg-offwhite/60",
                )}
                onClick={() => goTo(slideIndex)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroLine({
  as: Tag,
  children,
  delay,
  reduce,
  className,
}: {
  as: "p" | "span";
  children: string;
  delay: number;
  reduce: boolean | null;
  className?: string;
}) {
  const MotionTag = Tag === "p" ? motion.p : motion.span;

  if (reduce) {
    return (
      <Tag className={cn(Tag === "span" && "block", className)}>{children}</Tag>
    );
  }

  return (
    <MotionTag
      className={cn(Tag === "span" && "block", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: LINE_DURATION, delay, ease: LINE_EASE }}
    >
      {children}
    </MotionTag>
  );
}

function HeroCollageCell({
  image,
  y,
  reduce,
  priority,
  sizes,
  className,
}: {
  image: CollageImage;
  y: MotionValue<number>;
  reduce: boolean;
  priority?: boolean;
  sizes: string;
  className: string;
}) {
  return (
    <div className={className}>
      <motion.div
        className="absolute -inset-y-8 inset-x-0"
        style={reduce ? undefined : { y }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}

function HeroButton({ cta }: { cta: HeroCta }) {
  return (
    <Button
      href={cta.href}
      variant={cta.variant}
      className={
        cta.icon ? "gap-2.5 duration-300 ease-out" : "duration-300 ease-out"
      }
      {...(cta.external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {cta.icon ? <WhatsAppGlyph /> : null}
      {cta.label}
    </Button>
  );
}
