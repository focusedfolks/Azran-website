"use client";

import { useEffect, useId, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import { ComparisonSlider } from "@/components/ui/ComparisonSlider";
import type { Project } from "@/lib/projects";

type ProjectModalProps = {
  project: Project | null;
  imageIndex: number;
  onImageIndexChange: (index: number) => void;
  onClose: () => void;
};

export function ProjectModal({
  project,
  imageIndex,
  onImageIndexChange,
  onClose,
}: ProjectModalProps) {
  const reduce = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [project]);

  useEffect(() => {
    if (!project) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") {
        onImageIndexChange(
          (imageIndex - 1 + project.images.length) % project.images.length,
        );
      }
      if (event.key === "ArrowRight") {
        onImageIndexChange((imageIndex + 1) % project.images.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [project, imageIndex, onClose, onImageIndexChange]);

  const image = project?.images[imageIndex] ?? project?.images[0];

  return (
    <AnimatePresence>
      {project && image ? (
        <motion.div
          data-lenis-prevent
          className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-navy/60 p-4 sm:p-6"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative my-6 w-full max-w-3xl bg-offwhite shadow-subtle"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: 12 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              className="absolute right-3 top-3 z-10 flex h-11 w-11 cursor-pointer items-center justify-center bg-navy text-offwhite"
              aria-label="Close project details"
              onClick={onClose}
            >
              <CloseIcon />
            </button>

            <div className="relative aspect-[16/9] bg-navy">
              <AnimatePresence mode="wait">
                <motion.div
                  key={image}
                  className="absolute inset-0"
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduce ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.28 }}
                >
                  <Image
                    src={image}
                    alt={`${project.title} — gallery image ${imageIndex + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {project.images.length > 1 ? (
                <>
                  <button
                    type="button"
                    className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center border border-offwhite/40 bg-navy/80 text-offwhite"
                    aria-label="Previous image"
                    onClick={() =>
                      onImageIndexChange(
                        (imageIndex - 1 + project.images.length) %
                          project.images.length,
                      )
                    }
                  >
                    <ChevronLeftIcon />
                  </button>
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center border border-offwhite/40 bg-navy/80 text-offwhite"
                    aria-label="Next image"
                    onClick={() =>
                      onImageIndexChange(
                        (imageIndex + 1) % project.images.length,
                      )
                    }
                  >
                    <ChevronRightIcon />
                  </button>
                </>
              ) : null}
            </div>

            {project.images.length > 1 ? (
              <div className="flex justify-center gap-2 bg-navy px-4 py-3">
                {project.images.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    aria-label={`Show image ${index + 1}`}
                    aria-current={index === imageIndex}
                    className={`h-2.5 w-2.5 cursor-pointer ${
                      index === imageIndex ? "bg-gold-400" : "bg-offwhite/40"
                    }`}
                    onClick={() => onImageIndexChange(index)}
                  />
                ))}
              </div>
            ) : null}

            <div className="px-6 py-8 sm:px-8">
              <p className="font-heading text-[0.65rem] font-bold uppercase tracking-[0.16em] text-gold-400">
                {project.categoryLabel}
              </p>
              <h2 id={titleId} className="mt-2 font-heading text-2xl font-extrabold text-navy">
                {project.title}
              </h2>

              <dl className="mt-6 divide-y divide-navy/10 border-y border-navy/10">
                <Field label="Location" value={project.location} />
                <Field label="Scope" value={project.scope} />
                <Field label="Challenge" value={project.challenge} />
                <Field label="Result" value={project.result} />
              </dl>

              {project.beforeSrc && project.afterSrc ? (
                <div className="mt-8">
                  <h3 className="font-heading text-lg font-bold text-navy">
                    Before & after
                  </h3>
                  <div className="mt-4">
                    <ComparisonSlider
                      beforeSrc={project.beforeSrc}
                      afterSrc={project.afterSrc}
                      beforeAlt={`${project.title} — before`}
                      afterAlt={`${project.title} — after`}
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:gap-6">
      <dt className="font-heading text-xs font-bold uppercase tracking-[0.16em] text-gold-400">
        {label}
      </dt>
      <dd className="text-sm leading-relaxed text-navy">{value}</dd>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M4 4l10 10M14 4 4 14" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
