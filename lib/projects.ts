export type ProjectCategory = "tiling" | "cleaning" | "other";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  images: string[];
  location: string;
  scope: string;
  challenge: string;
  result: string;
  beforeSrc?: string;
  afterSrc?: string;
};

export const PROJECT_FILTERS: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "tiling", label: "Tiling" },
  { id: "cleaning", label: "Cleaning" },
  { id: "other", label: "Other Services" },
];

// Replace with real completed project data and photos before launch — this is placeholder content for layout purposes only.
export const PROJECTS: Project[] = [
  {
    id: "placeholder-tiling-villa",
    title: "PLACEHOLDER — Villa floor tiling",
    category: "tiling",
    categoryLabel: "Tiling",
    images: ["/images/project-villa-floor.png"],
    location: "[Location — Emirate]",
    scope: "[PLACEHOLDER] Floor area, tile type, and rooms included.",
    challenge: "[PLACEHOLDER] Substrate, levels, or occupied-site constraint.",
    result: "[PLACEHOLDER] Finish quality and handover note.",
  },
  {
    id: "placeholder-tiling-bathroom",
    title: "PLACEHOLDER — Bathroom tiling",
    category: "tiling",
    categoryLabel: "Tiling",
    images: ["/images/project-bathroom-tile.png"],
    location: "[Location — Emirate]",
    scope: "[PLACEHOLDER] Wet-area walls, floor, and detailing.",
    challenge: "[PLACEHOLDER] Waterproofing junctions and falls to drain.",
    result: "[PLACEHOLDER] Aligned joints and dry, clean handover.",
    beforeSrc: "/ba-kitchen-luxury-before.jpg",
    afterSrc: "/ba-kitchen-luxury-after.jpg",
  },
  {
    id: "placeholder-tiling-lobby",
    title: "PLACEHOLDER — Lobby tiling",
    category: "tiling",
    categoryLabel: "Tiling",
    images: ["/images/project-lobby-tile.png"],
    location: "[Location — Emirate]",
    scope: "[PLACEHOLDER] Commercial lobby floor finish.",
    challenge: "[PLACEHOLDER] Traffic management during install.",
    result: "[PLACEHOLDER] Durable floor ready for occupation.",
  },
  {
    id: "placeholder-cleaning-handover",
    title: "PLACEHOLDER — Post-construction clean",
    category: "cleaning",
    categoryLabel: "Cleaning",
    images: ["/images/project-postcon-clean.png"],
    location: "[Location — Emirate]",
    scope: "[PLACEHOLDER] Lobby, glass, and common-area clean.",
    challenge: "[PLACEHOLDER] Construction dust and restricted access.",
    result: "[PLACEHOLDER] Handover-ready common areas.",
  },
  {
    id: "placeholder-cleaning-commercial",
    title: "PLACEHOLDER — Commercial building clean",
    category: "cleaning",
    categoryLabel: "Cleaning",
    images: ["/images/project-office-clean.png"],
    location: "[Location — Emirate]",
    scope: "[PLACEHOLDER] Scheduled clean of occupied floors.",
    challenge: "[PLACEHOLDER] Working around tenant hours.",
    result: "[PLACEHOLDER] Consistent finish across common areas.",
  },
  {
    id: "placeholder-cleaning-residential",
    title: "PLACEHOLDER — Residential handover clean",
    category: "cleaning",
    categoryLabel: "Cleaning",
    images: ["/images/project-villa-clean.png"],
    location: "[Location — Emirate]",
    scope: "[PLACEHOLDER] Villa interiors after fit-out.",
    challenge: "[PLACEHOLDER] Fine dust on new finishes.",
    result: "[PLACEHOLDER] Ready for client inspection.",
  },
  {
    id: "placeholder-hvac",
    title: "PLACEHOLDER — HVAC works",
    category: "other",
    categoryLabel: "Other Services",
    images: ["/images/project-hvac-plant.png"],
    location: "[Location — Emirate]",
    scope: "[PLACEHOLDER] Condenser install and commissioning.",
    challenge: "[PLACEHOLDER] Roof access and existing services.",
    result: "[PLACEHOLDER] Units running to the agreed brief.",
  },
  {
    id: "placeholder-electrical",
    title: "PLACEHOLDER — Electrical works",
    category: "other",
    categoryLabel: "Other Services",
    images: ["/images/project-electrical-lighting.png"],
    location: "[Location — Emirate]",
    scope: "[PLACEHOLDER] Distribution and lighting maintenance.",
    challenge: "[PLACEHOLDER] Live building, limited shutdown window.",
    result: "[PLACEHOLDER] Safe, labelled, and tested circuits.",
  },
  {
    id: "placeholder-civil",
    title: "PLACEHOLDER — Civil maintenance",
    category: "other",
    categoryLabel: "Other Services",
    images: ["/images/project-civil-parapet.png"],
    location: "[Location — Emirate]",
    scope: "[PLACEHOLDER] Masonry and general civil repairs.",
    challenge: "[PLACEHOLDER] Occupied site and matching existing finishes.",
    result: "[PLACEHOLDER] Repairs blended and signed off.",
    beforeSrc: "/ba-living-fitout-before.jpg",
    afterSrc: "/ba-living-fitout-after.jpg",
  },
];
