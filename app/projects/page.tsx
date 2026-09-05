import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectsGallery } from "@/components/projects/ProjectsGallery";

export const metadata: Metadata = {
  title: "Our Projects",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Our Projects"
        image="/images/header-projects.png"
        imageAlt="Completed lobby with mixed floor and wall tiles"
        crumbs={[
          { href: "/", label: "Home" },
          { label: "Projects" },
        ]}
      />
      <ProjectsGallery />
    </>
  );
}
