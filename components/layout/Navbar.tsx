"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SERVICES } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { serviceIcons } from "@/components/icons";
import {
  MotionNavigationMenu,
  MotionNavigationMenuContent,
  MotionNavigationMenuItem,
  MotionNavigationMenuLink,
  MotionNavigationMenuList,
  MotionNavigationMenuTrigger,
} from "@/components/unlumen-ui/motion-navigation-menu";

const FEATURED_SERVICES = SERVICES.filter((service) => service.featured);
const OTHER_SERVICES = SERVICES.filter((service) => !service.featured);

const TOP_LINKS = NAV_LINKS.filter((link) => link.href !== "/services");

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const drawerId = useId();
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuBtnRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 overflow-visible border-b border-navy/10 bg-white">
      <div className="mx-auto flex h-[72px] w-full max-w-content items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo priority />

        <MotionNavigationMenu
          key={pathname}
          aria-label="Primary"
          className="hidden lg:flex"
          viewportClassName="bg-white border-navy/10 shadow-subtle rounded-sm"
        >
          <MotionNavigationMenuList className="gap-1">
            {TOP_LINKS.slice(0, 2).map((link) => (
              <NavItemLink
                key={link.href}
                href={link.href}
                label={link.label}
                active={isActivePath(pathname, link.href)}
              />
            ))}

            <MotionNavigationMenuItem value="services">
              <MotionNavigationMenuTrigger
                className={cn(
                  isActivePath(pathname, "/services") && "text-ink",
                )}
              >
                Services
              </MotionNavigationMenuTrigger>
              <MotionNavigationMenuContent highlightClassName="bg-gold-400/15 rounded-sm">
                <ServicesMegaMenu />
              </MotionNavigationMenuContent>
            </MotionNavigationMenuItem>

            {TOP_LINKS.slice(2).map((link) => (
              <NavItemLink
                key={link.href}
                href={link.href}
                label={link.label}
                active={isActivePath(pathname, link.href)}
              />
            ))}
          </MotionNavigationMenuList>
        </MotionNavigationMenu>

        <div className="flex items-center gap-3">
          <Button href="/contact" className="hidden sm:inline-flex">
            Get a Quote
          </Button>

          <button
            ref={menuBtnRef}
            type="button"
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center text-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls={drawerId}
            onClick={() => setOpen((value) => !value)}
          >
            <HamburgerIcon open={open} />
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-50 bg-navy/50 transition-opacity duration-200 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />

      <aside
        id={drawerId}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        {...(!open ? { inert: true } : {})}
        className={cn(
          "fixed inset-y-0 right-0 z-[60] flex w-[min(100%,20rem)] flex-col bg-white shadow-subtle transition-transform duration-200 ease-out lg:hidden",
          open ? "translate-x-0" : "pointer-events-none translate-x-full",
        )}
      >
        <div className="flex h-[72px] items-center justify-between border-b border-navy/10 px-4">
          <span className="font-heading text-sm font-bold tracking-wide text-ink">
            Menu
          </span>
          <button
            ref={closeBtnRef}
            type="button"
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center text-ink"
            aria-label="Close menu"
            onClick={() => {
              setOpen(false);
              menuBtnRef.current?.focus();
            }}
          >
            <CloseIcon />
          </button>
        </div>

        <ul
          data-lenis-prevent
          className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6"
        >
          {NAV_LINKS.map((link) => {
            const active = isActivePath(pathname, link.href);
            const isServices = link.href === "/services";

            return (
              <li key={link.href}>
                {isServices ? (
                  <div>
                    <div className="flex items-center">
                      <Link
                        href={link.href}
                        className={cn(
                          "flex min-h-11 flex-1 items-center border-l-2 px-4 py-3 text-base font-body font-medium transition-colors duration-300 ease-in-out",
                          active
                            ? "border-gold-500 bg-white text-ink"
                            : "border-transparent text-gray hover:border-navy/20 hover:text-ink",
                        )}
                        aria-current={active ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                      <button
                        type="button"
                        className="inline-flex h-11 w-11 shrink-0 items-center justify-center text-ink"
                        aria-expanded={servicesOpen}
                        aria-label={
                          servicesOpen
                            ? "Hide service list"
                            : "Show service list"
                        }
                        onClick={() => setServicesOpen((value) => !value)}
                      >
                        <ChevronIcon open={servicesOpen} />
                      </button>
                    </div>
                    {servicesOpen ? (
                      <ul className="mb-2 ml-4 border-l border-navy/10">
                        {SERVICES.map((service) => (
                          <li key={service.slug}>
                            <Link
                              href={`/services#${service.anchor}`}
                              className="flex min-h-11 items-center px-4 py-2 text-sm font-body text-gray transition-colors duration-300 ease-in-out hover:text-ink"
                            >
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "flex min-h-11 items-center border-l-2 px-4 py-3 text-base font-body font-medium transition-colors duration-300 ease-in-out",
                      active
                        ? "border-gold-500 bg-white text-ink"
                        : "border-transparent text-gray hover:border-navy/20 hover:text-ink",
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        <div className="border-t border-navy/10 p-4">
          <Button href="/contact" className="w-full">
            Get a Quote
          </Button>
        </div>
      </aside>
    </header>
  );
}

function NavItemLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <MotionNavigationMenuItem>
      <MotionNavigationMenuLink
        href={href}
        data-active={active ? "true" : undefined}
        aria-current={active ? "page" : undefined}
        className={cn(
          "h-11 items-center justify-center px-3 py-2 font-body font-medium tracking-wide text-gray",
          active && "text-ink",
        )}
      >
        {label}
      </MotionNavigationMenuLink>
    </MotionNavigationMenuItem>
  );
}

function ServicesMegaMenu() {
  return (
    <div className="grid w-[min(calc(100vw-2rem),42rem)] grid-cols-1 gap-2 lg:w-[46rem] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.35fr)]">
      <div className="flex flex-col gap-1">
        {FEATURED_SERVICES.map((service) => (
          <MotionNavigationMenuLink
            key={service.slug}
            href={`/services#${service.anchor}`}
            className="min-h-[7.5rem] justify-between bg-offwhite p-4"
          >
            <span className="flex size-9 items-center justify-center border border-navy/10 bg-white text-ink">
              {serviceIcons[service.slug]}
            </span>
            <span className="space-y-1">
              <span className="block font-heading text-sm font-bold text-ink">
                {service.title}
              </span>
              <span className="block text-xs font-normal leading-relaxed text-ink">
                {service.description}
              </span>
            </span>
          </MotionNavigationMenuLink>
        ))}
        <MotionNavigationMenuLink
          href="/services"
          className="items-center px-4 py-3 font-heading text-sm font-bold text-ink"
        >
          View All Services
        </MotionNavigationMenuLink>
      </div>

      <div className="grid grid-cols-1 gap-0.5 sm:grid-cols-2">
        {OTHER_SERVICES.map((service) => (
          <MotionNavigationMenuLink
            key={service.slug}
            href={`/services#${service.anchor}`}
            className="p-3"
          >
            <span className="flex items-start gap-2">
              <span className="mt-0.5 text-ink [&_svg]:h-4 [&_svg]:w-4">
                {serviceIcons[service.slug]}
              </span>
              <span className="space-y-0.5">
                <span className="block font-medium text-ink">
                  {service.title}
                </span>
                <span className="block text-xs font-normal leading-snug text-ink">
                  {service.description}
                </span>
              </span>
            </span>
          </MotionNavigationMenuLink>
        ))}
      </div>
    </div>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  if (open) {
    return <CloseIcon />;
  }

  return (
    <svg
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      aria-hidden="true"
    >
      <path d="M1 1.5h20" stroke="currentColor" strokeWidth="1.5" />
      <path d="M1 8h20" stroke="currentColor" strokeWidth="1.5" />
      <path d="M1 14.5h20" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 4l12 12M16 4L4 16"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={cn(
        "transition-transform duration-200",
        open && "rotate-180",
      )}
    >
      <path
        d="M3 6l5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
