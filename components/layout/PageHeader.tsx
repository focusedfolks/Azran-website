import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

type Crumb = {
  label: string;
  href?: string;
};

type PageHeaderProps = {
  title: string;
  crumbs: Crumb[];
  image?: string;
  imageAlt?: string;
};

export function PageHeader({
  title,
  crumbs,
  image,
  imageAlt = "",
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-navy text-offwhite">
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/70" aria-hidden="true" />
        </>
      ) : null}

      <Reveal
        className={cn(
          "relative mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8",
          image ? "py-16 lg:py-20" : "py-10 lg:py-12",
        )}
      >
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-offwhite/70">
            {crumbs.map((crumb, index) => {
              const last = index === crumbs.length - 1;

              return (
                <li key={crumb.label} className="flex items-center gap-2">
                  {index > 0 ? (
                    <span aria-hidden="true" className="text-gold-400">
                      /
                    </span>
                  ) : null}
                  {last || !crumb.href ? (
                    <span className="text-offwhite" aria-current="page">
                      {crumb.label}
                    </span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="transition-colors duration-300 ease-in-out hover:text-gold-300"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
        <h1 className="mt-4 font-heading text-3xl font-extrabold text-offwhite sm:text-4xl">
          {title}
        </h1>
      </Reveal>
    </section>
  );
}
