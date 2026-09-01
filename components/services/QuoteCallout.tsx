import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { WhatsAppGlyph } from "@/components/icons";

export function QuoteCallout() {
  // Pricing not published — service scope varies too much for fixed rates, and publishing invites competitor undercutting. Confirm with client if they want a starting-from range instead.
  return (
    <div className="border-2 border-gold bg-white px-6 py-8 sm:px-10 sm:py-10">
      <h3 className="font-heading text-2xl font-extrabold text-navy">
        Request a Custom Quote
      </h3>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray sm:text-base">
        Scope varies by site, material, and programme. Tell us the area and
        timing and we will price the work — no published rate card.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href="/contact">Get a Quote</Button>
        <Button
          href={SITE.whatsappUrl}
          variant="secondary"
          target="_blank"
          rel="noopener noreferrer"
          className="gap-2.5"
        >
          <WhatsAppGlyph />
          WhatsApp Us
        </Button>
      </div>
    </div>
  );
}
