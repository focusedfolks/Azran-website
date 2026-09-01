import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ServicesSubNav } from "@/components/services/ServicesSubNav";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { OtherServices } from "@/components/services/OtherServices";
import { CLEANING_CONTENT, TILING_CONTENT } from "@/lib/services-content";

export const metadata: Metadata = {
  title: "Our Services",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        image="/images/header-services.png"
        imageAlt="Tiling and cleaning tools laid out on a drop cloth"
        crumbs={[
          { href: "/", label: "Home" },
          { label: "Services" },
        ]}
      />
      <ServicesSubNav />
      <ServiceDetail
        content={TILING_CONTENT}
        aliasId="floor-wall-tiling"
        className="bg-offwhite"
      />
      <ServiceDetail
        content={CLEANING_CONTENT}
        aliasId="building-cleaning"
        className="border-t border-navy/10 bg-offwhite"
      />
      <OtherServices />
    </>
  );
}
