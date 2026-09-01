import { SITE } from "@/lib/site";

export function ContactMap() {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(SITE.contact.address)}&z=16&output=embed`;

  return (
    <section aria-label="Office location map">
      <div className="mx-auto w-full max-w-content px-4 pb-12 sm:px-6 md:pb-20 lg:px-8">
        <div className="relative aspect-[16/9] w-full overflow-hidden border border-navy/10 bg-navy md:aspect-[21/9]">
          <iframe
            title="Map showing Azran Technical Services office at Shindagha City Center, Bur Dubai"
            src={src}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="mt-3 text-xs text-gray">{SITE.contact.address}</p>
      </div>
    </section>
  );
}
