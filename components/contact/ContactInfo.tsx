import { SITE } from "@/lib/site";
import { contactIcons, WhatsAppGlyph } from "@/components/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactInfo() {
  return (
    <div className="flex h-full flex-col border border-navy/10 bg-offwhite p-6 sm:p-8">
      <SectionHeading eyebrow="Reach us" heading="Contact Info" />

      <ul className="mt-8 space-y-6">
        <li>
          <a
            href={SITE.contact.phoneHref}
            className="flex items-start gap-4 text-navy transition-colors duration-200 hover:text-gold"
          >
            <span className="text-gold">{contactIcons.phone}</span>
            <span>
              <span className="block font-heading text-xs font-bold uppercase tracking-[0.16em] text-gray">
                Phone
              </span>
              <span className="mt-1 block text-sm sm:text-base">
                {SITE.contact.phone}
              </span>
            </span>
          </a>
        </li>
        <li>
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 text-navy transition-colors duration-200 hover:text-gold"
          >
            <span className="flex h-6 w-6 items-center justify-center text-gold">
              <WhatsAppGlyph />
            </span>
            <span>
              <span className="block font-heading text-xs font-bold uppercase tracking-[0.16em] text-gray">
                WhatsApp
              </span>
              <span className="mt-1 block text-sm sm:text-base">
                {SITE.contact.phone}
              </span>
            </span>
          </a>
        </li>
        <li>
          <a
            href={`mailto:${SITE.contact.email}`}
            className="flex items-start gap-4 text-navy transition-colors duration-200 hover:text-gold"
          >
            <span className="text-gold">{contactIcons.email}</span>
            <span>
              <span className="block font-heading text-xs font-bold uppercase tracking-[0.16em] text-gray">
                Email
              </span>
              <span className="mt-1 block text-sm sm:text-base">
                {SITE.contact.email}
              </span>
            </span>
          </a>
        </li>
        <li className="flex items-start gap-4">
          <span className="text-gold">{contactIcons.pin}</span>
          <span>
            <span className="block font-heading text-xs font-bold uppercase tracking-[0.16em] text-gray">
              Address
            </span>
            <span className="mt-1 block text-sm leading-relaxed sm:text-base">
              {SITE.contact.address}
            </span>
          </span>
        </li>
      </ul>

      <div className="mt-auto border-t border-navy/10 pt-8">
        {/* TODO — confirm real business hours with the client before launch. */}
        <div className="flex items-start gap-4">
          <span className="text-gold">{contactIcons.clock}</span>
          <div>
            <h3 className="font-heading text-xs font-bold uppercase tracking-[0.16em] text-gray">
              Business Hours
            </h3>
            <p className="mt-2 text-sm text-navy">{SITE.hours.weekdays}</p>
            <p className="mt-1 text-sm text-navy">{SITE.hours.sunday}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
