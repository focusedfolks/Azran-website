import Link from "next/link";
import { NAV_LINKS, SERVICE_LINKS, SITE } from "@/lib/site";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/50 bg-navy text-offwhite">
      <div className="mx-auto grid w-full max-w-content gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8 lg:py-20">
        <div className="max-w-sm">
          <Logo tone="onDark" imageClassName="h-14 w-auto sm:h-16" />
          <p className="mt-5 text-sm leading-relaxed text-offwhite/75">
            {SITE.tagline}
          </p>
        </div>

        <div>
          <h2 className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-gold">
            Quick Links
          </h2>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-offwhite/80 transition-colors duration-200 hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-gold">
            Services
          </h2>
          <ul className="mt-5 space-y-3">
            {SERVICE_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-offwhite/80 transition-colors duration-200 hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-gold">
            Contact Info
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-offwhite/80">
            <li>
              <a
                href={SITE.contact.phoneHref}
                className="transition-colors duration-200 hover:text-gold"
              >
                {SITE.contact.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.contact.email}`}
                className="transition-colors duration-200 hover:text-gold"
              >
                {SITE.contact.email}
              </a>
            </li>
            <li className="max-w-[16rem] leading-relaxed">
              {SITE.contact.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/50">
        <div className="mx-auto flex w-full max-w-content flex-col items-start justify-between gap-2 px-4 py-5 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p className="text-xs text-offwhite/60">
            © {year} {SITE.name}. DED License No. {SITE.license.number}. All
            rights reserved.
          </p>
          <p className="text-xs text-offwhite/60">
            Designed by Focused Folks
          </p>
        </div>
      </div>
    </footer>
  );
}
