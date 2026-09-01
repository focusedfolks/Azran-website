import { Hero } from "@/components/home/Hero";
import { ServiceOverview } from "@/components/home/ServiceOverview";
import { TrustStrip } from "@/components/home/TrustStrip";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCta } from "@/components/home/FinalCta";
import { HomeRevealScope } from "@/components/motion/Reveal";

export default function HomePage() {
  return (
    <HomeRevealScope>
      <Hero />
      <ServiceOverview />
      <TrustStrip />
      <FeaturedProjects />
      <Testimonials />
      <FinalCta />
    </HomeRevealScope>
  );
}
