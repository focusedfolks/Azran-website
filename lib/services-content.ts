export type DetailBlock = {
  title: string;
  body: string;
  icon: string;
};

export type MaterialItem = {
  title: string;
  icon: string;
};

export type TypeCard = {
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ServiceDetailContent = {
  id: string;
  kicker: string;
  title: string;
  iconKey: string;
  overview: string[];
  process: DetailBlock[];
  materialsTitle: string;
  materials: MaterialItem[];
  typesTitle: string;
  types: TypeCard[];
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  faqs: FaqItem[];
};

export const TILING_CONTENT: ServiceDetailContent = {
  id: "tiling",
  kicker: "Specialty",
  title: "Floor & Wall Tiling",
  iconKey: "floor-wall-tiling",
  overview: [
    "[PLACEHOLDER] Intro paragraph on Azran’s floor and wall tiling work — substrates, setting-out, and finish quality. Replace with client-approved copy.",
    "[PLACEHOLDER] Second sentence on typical sites (villas, lobbies, wet areas) and the standard of workmanship expected. Do not publish as-is.",
  ],
  process: [
    {
      title: "Site Assessment",
      body: "[PLACEHOLDER] Survey levels, substrate condition, and access before work starts.",
      icon: "assess",
    },
    {
      title: "Material Selection",
      body: "[PLACEHOLDER] Agree tile type, format, and layout with the client.",
      icon: "select",
    },
    {
      title: "Preparation",
      body: "[PLACEHOLDER] Protect adjacent finishes and prepare the substrate.",
      icon: "prepare",
    },
    {
      title: "Installation",
      body: "[PLACEHOLDER] Set out, bed, and grout to the agreed pattern.",
      icon: "install",
    },
    {
      title: "Quality Check",
      body: "[PLACEHOLDER] Inspect alignment, grout, and cleanliness before handover.",
      icon: "check",
    },
  ],
  materialsTitle: "Materials & Tools We Use",
  materials: [
    { title: "[PLACEHOLDER] Porcelain & ceramic tiles", icon: "tile" },
    { title: "[PLACEHOLDER] Adhesives & primers", icon: "adhesive" },
    { title: "[PLACEHOLDER] Grout & sealants", icon: "grout" },
    { title: "[PLACEHOLDER] Cutters & wet saws", icon: "cutter" },
    { title: "[PLACEHOLDER] Levels & setting-out tools", icon: "level" },
    { title: "[PLACEHOLDER] Protection & finishing kit", icon: "check" },
  ],
  typesTitle: "Types of Tiling We Offer",
  types: [
    {
      title: "Floor Tiling",
      body: "[PLACEHOLDER] Internal floors in living, lobby, and circulation areas.",
      image: "/images/services-tiling-floor.jpg",
      imageAlt: "Large-format grey porcelain floor tiles in an open-plan living area",
    },
    {
      title: "Wall Tiling",
      body: "[PLACEHOLDER] Feature and wet-area walls with aligned joints.",
      image: "/images/services-tiling-wall.jpg",
      imageAlt: "Technician setting wall tiles on a kitchen backsplash",
    },
    {
      title: "Bathroom Tiling",
      body: "[PLACEHOLDER] Floors, walls, and wet-room detailing.",
      image: "/images/services-tiling-bathroom.jpg",
      imageAlt: "Partially completed bathroom mosaic floor with a grout float",
    },
    {
      title: "Kitchen Tiling",
      body: "[PLACEHOLDER] Splashbacks and kitchen floor finishes.",
      image: "/images/services-tiling-kitchen.png",
      imageAlt: "Technician setting porcelain tiles on a villa kitchen splashback",
    },
    {
      title: "Outdoor Tiling",
      body: "[PLACEHOLDER] Terraces and external areas using suitable materials.",
      image: "/images/services-tiling-outdoor.jpg",
      imageAlt: "Natural stone-look tiles being laid on a UAE villa patio",
    },
    {
      title: "Commercial Interiors",
      body: "[PLACEHOLDER] High-traffic lobby and workplace tiling.",
      image: "/images/services-tiling-commercial.png",
      imageAlt: "Technician checking tile alignment on a commercial lobby floor",
    },
  ],
  beforeSrc: "/ba-kitchen-build-before.jpg",
  afterSrc: "/ba-kitchen-build-after.jpg",
  beforeAlt: "Kitchen during renovation, before tiling and finishing",
  afterAlt: "Kitchen after tiling, cabinetry, and finishing",
  faqs: [
    {
      question: "[PLACEHOLDER] How long does a typical tiling job take?",
      answer:
        "[PLACEHOLDER] Replace with the client’s typical programme guidance. Duration depends on area, substrate, and material.",
    },
    {
      question: "[PLACEHOLDER] Do you supply tiles or install client-supplied material?",
      answer:
        "[PLACEHOLDER] Replace with the client’s supply-and-install policy.",
    },
    {
      question: "[PLACEHOLDER] Can you work in occupied villas or buildings?",
      answer:
        "[PLACEHOLDER] Replace with the client’s occupied-site working method.",
    },
    {
      question: "[PLACEHOLDER] How is grout colour and layout agreed?",
      answer:
        "[PLACEHOLDER] Replace with the client’s approval process for samples and setting-out.",
    },
    {
      question: "[PLACEHOLDER] What happens if a tile is damaged during install?",
      answer:
        "[PLACEHOLDER] Replace with the client’s replacement and snagging process.",
    },
  ],
};

export const CLEANING_CONTENT: ServiceDetailContent = {
  id: "cleaning",
  kicker: "Specialty",
  title: "Building Cleaning Services",
  iconKey: "building-cleaning",
  overview: [
    "[PLACEHOLDER] Intro paragraph on Azran’s building cleaning — scheduled, handover, and post-fit-out work. Replace with client-approved copy.",
    "[PLACEHOLDER] Second sentence on occupied vs vacant sites and the standard of finish expected. Do not publish as-is.",
  ],
  process: [
    {
      title: "Assessment",
      body: "[PLACEHOLDER] Walk the site, note finishes, and agree the scope of clean.",
      icon: "assess",
    },
    {
      title: "Equipment Setup",
      body: "[PLACEHOLDER] Bring in the right machines, chemicals, and protection.",
      icon: "equipment",
    },
    {
      title: "Cleaning",
      body: "[PLACEHOLDER] Work through the agreed areas in a controlled sequence.",
      icon: "clean",
    },
    {
      title: "Quality Inspection",
      body: "[PLACEHOLDER] Check against the scope before the client walk-round.",
      icon: "inspect",
    },
    {
      title: "Handover",
      body: "[PLACEHOLDER] Sign-off and leave the site tidy and accessible.",
      icon: "handover",
    },
  ],
  materialsTitle: "Equipment & Products We Use",
  materials: [
    { title: "[PLACEHOLDER] Scrubber-dryers", icon: "machine" },
    { title: "[PLACEHOLDER] Industrial vacuums", icon: "vacuum" },
    { title: "[PLACEHOLDER] Mops & floor pads", icon: "mop" },
    { title: "[PLACEHOLDER] Surface chemicals", icon: "chemical" },
    { title: "[PLACEHOLDER] Glass & cloth kits", icon: "cloth" },
    { title: "[PLACEHOLDER] Inspection checklist", icon: "check" },
  ],
  typesTitle: "Types of Cleaning We Offer",
  types: [
    {
      title: "Residential",
      body: "[PLACEHOLDER] Villas and apartments, including handover cleans.",
      image: "/images/services-cleaning-residential.jpg",
      imageAlt: "Technician wiping a kitchen countertop in a villa kitchen",
    },
    {
      title: "Commercial",
      body: "[PLACEHOLDER] Offices, lobbies, and common areas.",
      image: "/images/services-cleaning-commercial.jpg",
      imageAlt: "Technician using a floor scrubber in a commercial office lobby",
    },
    {
      title: "Post-Construction",
      body: "[PLACEHOLDER] Dust, debris, and fit-out residue after works.",
      image: "/images/services-cleaning-postconstruction.jpg",
      imageAlt: "Gloved hands wiping construction dust from a window pane",
    },
    {
      title: "Deep Cleaning",
      body: "[PLACEHOLDER] Periodic deep clean of high-use spaces.",
      image: "/images/services-cleaning-deep.jpg",
      imageAlt: "Technician steam-cleaning upholstery with a handheld extractor",
    },
    {
      title: "Facade & Glass",
      body: "[PLACEHOLDER] External and internal glazing where in scope.",
      image: "/images/services-cleaning-facade.png",
      imageAlt: "Technician cleaning a tall glass facade panel in a lobby",
    },
    {
      title: "Common Areas",
      body: "[PLACEHOLDER] Corridors, stairs, and shared facilities.",
      image: "/images/services-cleaning-common.png",
      imageAlt: "Technician mopping a tiled apartment corridor and stair landing",
    },
  ],
  beforeSrc: "/ba-living-clean-before.jpg",
  afterSrc: "/ba-living-clean-after.jpg",
  beforeAlt: "Living room before deep cleaning and finishing",
  afterAlt: "Living room after cleaning, tiling, and finishing",
  faqs: [
    {
      question: "[PLACEHOLDER] Do you clean occupied buildings?",
      answer:
        "[PLACEHOLDER] Replace with the client’s occupied-site cleaning method.",
    },
    {
      question: "[PLACEHOLDER] What is included in a post-construction clean?",
      answer:
        "[PLACEHOLDER] Replace with the client’s typical post-construction scope.",
    },
    {
      question: "[PLACEHOLDER] Can you work to a night or weekend programme?",
      answer:
        "[PLACEHOLDER] Replace with the client’s working-hours policy.",
    },
    {
      question: "[PLACEHOLDER] Which products do you use on stone and glass?",
      answer:
        "[PLACEHOLDER] Replace with the client’s approved product list.",
    },
    {
      question: "[PLACEHOLDER] How is quality signed off?",
      answer:
        "[PLACEHOLDER] Replace with the client’s inspection and snag process.",
    },
  ],
};
