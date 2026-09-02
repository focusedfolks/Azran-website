export const SITE = {
  name: "Azran Technical Services LLC",
  tagline:
    "Reliable technical services and building maintenance for commercial and residential properties across the UAE.",
  whatsappUrl: "https://wa.me/971586125077",
  contact: {
    phone: "+971 58 612 5077",
    phoneHref: "tel:+971586125077",
    email: "azrancontractors@gmail.com",
    address:
      "Block A, Office No. 117, 1st Floor, Shindagha City Center, Near Al Ghubaiba Metro Station, Bur Dubai, UAE",
  },
  hours: {
    weekdays: "Monday – Saturday · [00:00 – 00:00]",
    sunday: "Sunday · Closed",
  },
  employees: 1000,
  license: {
    number: "1644444",
    legalType: "Limited Liability Company (LLC)",
    issuingAuthority:
      "Dubai Department of Economic Development (DED)",
    registerNo: "2908508",
    dcciNo: "697756",
  },
} as const;

export const LICENSE_ITEMS = [
  {
    id: "license",
    title: "Trade license",
    detail: SITE.license.number,
  },
  {
    id: "legal",
    title: "Legal type",
    detail: SITE.license.legalType,
  },
  {
    id: "authority",
    title: "Issuing authority",
    detail: SITE.license.issuingAuthority,
  },
  {
    id: "register",
    title: "Register No.",
    detail: SITE.license.registerNo,
  },
  {
    id: "chamber",
    title: "DCCI No.",
    detail: SITE.license.dcciNo,
  },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    slug: "floor-wall-tiling",
    anchor: "tiling",
    title: "Floor & Wall Tiling",
    description:
      "Precision floor and wall tiling for villas, lobbies, and commercial interiors — from setting-out to grout finish.",
    featured: true,
  },
  {
    slug: "building-cleaning",
    anchor: "cleaning",
    title: "Building Cleaning Services",
    description:
      "Scheduled cleaning and handover cleans for occupied buildings, common areas, and post-fit-out spaces.",
    featured: true,
  },
  {
    slug: "hvac-mechanical",
    anchor: "hvac-mechanical",
    title: "HVAC & Mechanical",
    description: "Installation, servicing, and repair of cooling and mechanical systems.",
    featured: false,
  },
  {
    slug: "electrical-works",
    anchor: "electrical-works",
    title: "Electrical Works",
    description: "Power, lighting, and electrical maintenance for buildings and facilities.",
    featured: false,
  },
  {
    slug: "plumbing-drainage",
    anchor: "plumbing-drainage",
    title: "Plumbing & Drainage",
    description: "Water supply, drainage, and leak repair with tidy, compliant workmanship.",
    featured: false,
  },
  {
    slug: "painting-finishing",
    anchor: "painting-finishing",
    title: "Painting & Finishing",
    description: "Interior and exterior painting with clean edges and durable finishes.",
    featured: false,
  },
  {
    slug: "civil-maintenance",
    anchor: "civil-maintenance",
    title: "Civil Maintenance",
    description: "Masonry, plaster, and general civil repairs for occupied properties.",
    featured: false,
  },
  {
    slug: "carpentry-joinery",
    anchor: "carpentry-joinery",
    title: "Carpentry & Joinery",
    description: "Doors, frames, fixtures, and on-site joinery repairs.",
    featured: false,
  },
  {
    slug: "false-ceiling",
    anchor: "false-ceiling",
    title: "False Ceiling & Partition",
    description: "Gypsum ceilings, partitions, and related interior works.",
    featured: false,
  },
  {
    slug: "waterproofing",
    anchor: "waterproofing",
    title: "Waterproofing",
    description: "Roof, wet-area, and façade waterproofing to keep buildings dry.",
    featured: false,
  },
  {
    slug: "facility-management",
    anchor: "facility-management",
    title: "Facility Management",
    description: "Planned maintenance programmes for commercial and residential assets.",
    featured: false,
  },
  {
    slug: "emergency-support",
    anchor: "emergency-support",
    title: "Emergency Support",
    description: "Responsive call-outs for urgent building and technical issues.",
    featured: false,
  },
] as const;

export const SERVICE_LINKS = [
  SERVICES[0],
  SERVICES[1],
  SERVICES[2],
  SERVICES[3],
  SERVICES[4],
  SERVICES[10],
].map((service) => ({
  href: `/services#${service.anchor}`,
  label: service.title,
}));

export const TRUST_ITEMS = [
  {
    id: "professionals",
    label: "Experienced professionals",
    description:
      "[PLACEHOLDER] Short statement on crew experience and supervision. Replace with client wording.",
  },
  {
    id: "workmanship",
    label: "Quality workmanship",
    description:
      "[PLACEHOLDER] Short statement on finish quality and site standards. Replace with client wording.",
  },
  {
    id: "delivery",
    label: "On-time delivery",
    description:
      "[PLACEHOLDER] Short statement on scheduling and programme reliability. Replace with client wording.",
  },
  {
    id: "pricing",
    label: "Transparent pricing",
    description: "Clear, upfront quotes with no hidden costs.",
  },
  {
    id: "safety",
    label: "Safety first",
    description:
      "[PLACEHOLDER] Short statement on site safety practice. Replace with client wording.",
  },
  {
    id: "satisfaction",
    label: "Customer satisfaction",
    description:
      "[PLACEHOLDER] Short statement on aftercare and client communication. Replace with client wording.",
  },
] as const;

export const FEATURED_PROJECTS = [
  {
    src: "/images/featured-tiling-floor.png",
    name: "Villa floor tiling",
    alt: "Finished large-format limestone-look floor in a UAE villa living room",
  },
  {
    src: "/images/featured-cleaning-lobby.png",
    name: "Commercial lobby clean",
    alt: "Just-cleaned commercial lobby with a glossy stone floor",
  },
  {
    src: "/images/featured-hvac.png",
    name: "Rooftop HVAC plant",
    alt: "Completed rooftop condensers on a UAE villa",
  },
  {
    src: "/images/featured-tiling-wall.png",
    name: "Feature wall tiling",
    alt: "Herringbone marble mosaic feature wall in a villa dining room",
  },
  {
    src: "/images/featured-electrical.png",
    name: "Electrical services room",
    alt: "Neat cable trays in a commercial electrical services room",
  },
  {
    src: "/images/featured-villa-courtyard.png",
    name: "Villa courtyard",
    alt: "Finished outdoor porcelain courtyard at a UAE villa",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "PLACEHOLDER_TESTIMONIAL — replace with a verified client review about workmanship and delivery.",
    name: "[Client Name]",
    role: "[Role / Company]",
  },
  {
    quote:
      "PLACEHOLDER_TESTIMONIAL — replace with a verified client review about tiling or cleaning quality.",
    name: "[Client Name]",
    role: "[Role / Company]",
  },
  {
    quote:
      "PLACEHOLDER_TESTIMONIAL — replace with a verified client review about response time and aftercare.",
    name: "[Client Name]",
    role: "[Role / Company]",
  },
] as const;
