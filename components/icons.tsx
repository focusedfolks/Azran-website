import type { ReactNode } from "react";

const iconClass = "h-6 w-6 shrink-0";

function LineIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={iconClass}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const serviceIcons: Record<string, ReactNode> = {
  "floor-wall-tiling": (
    <LineIcon>
      <path d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z" />
    </LineIcon>
  ),
  "building-cleaning": (
    <LineIcon>
      <path d="M4 20V8l8-5 8 5v12" />
      <path d="M9 20v-6h6v6" />
    </LineIcon>
  ),
  "hvac-mechanical": (
    <LineIcon>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
    </LineIcon>
  ),
  "electrical-works": (
    <LineIcon>
      <path d="M13 2 4 14h7l-1 8 10-14h-7l0-6z" />
    </LineIcon>
  ),
  "plumbing-drainage": (
    <LineIcon>
      <path d="M8 4v6H4v4h4v6" />
      <path d="M16 4v4h4v8h-4v4" />
      <path d="M8 10h8" />
    </LineIcon>
  ),
  "painting-finishing": (
    <LineIcon>
      <path d="M14 4h6v6L10 20l-6-6 10-10z" />
      <path d="M4 20h4" />
    </LineIcon>
  ),
  "civil-maintenance": (
    <LineIcon>
      <path d="M4 20h16" />
      <path d="M6 20V10l6-5 6 5v10" />
      <path d="M10 20v-5h4v5" />
    </LineIcon>
  ),
  "carpentry-joinery": (
    <LineIcon>
      <path d="M3 18 14 4l4 3L8 20H3v-2z" />
      <path d="M12 7l4 4" />
    </LineIcon>
  ),
  "false-ceiling": (
    <LineIcon>
      <path d="M4 8h16M4 12h16M8 8v8M16 8v8M4 20h16" />
    </LineIcon>
  ),
  waterproofing: (
    <LineIcon>
      <path d="M12 3c4 5 7 8.2 7 11.5A7 7 0 1 1 5 14.5C5 11.2 8 8 12 3z" />
    </LineIcon>
  ),
  "facility-management": (
    <LineIcon>
      <path d="M4 10h16v10H4z" />
      <path d="M9 20v-5h6v5" />
      <path d="M4 10 12 4l8 6" />
    </LineIcon>
  ),
  "emergency-support": (
    <LineIcon>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6" />
      <path d="M12 16h.01" />
    </LineIcon>
  ),
};

export const trustIcons: Record<string, ReactNode> = {
  professionals: (
    <LineIcon>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-5 6-5s6 1.7 6 5" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M16.5 20c1.2-2.2 2.8-3.2 5-3.2" />
    </LineIcon>
  ),
  workmanship: (
    <LineIcon>
      <path d="M4 20 14 6l4 3L9 21H4v-1z" />
      <path d="M12 8l4 4" />
    </LineIcon>
  ),
  delivery: (
    <LineIcon>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </LineIcon>
  ),
  pricing: (
    <LineIcon>
      <path d="M12 3v18" />
      <path d="M16 8c0-2-1.8-3.5-4-3.5S8 6 8 8s1.5 3 4 3.5 4 1.8 4 3.5-1.8 3.5-4 3.5S8 16.5 8 15" />
    </LineIcon>
  ),
  safety: (
    <LineIcon>
      <path d="M12 3 5 6v6c0 5 3.2 8.4 7 9.5 3.8-1.1 7-4.5 7-9.5V6l-7-3z" />
    </LineIcon>
  ),
  satisfaction: (
    <LineIcon>
      <path d="M12 3 14.5 8l5.5.8-4 3.9.9 5.5L12 16.4 7.1 18.2l.9-5.5-4-3.9L9.5 8z" />
    </LineIcon>
  ),
};

export const valueIcons: Record<string, ReactNode> = {
  mission: (
    <LineIcon>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2" />
    </LineIcon>
  ),
  vision: (
    <LineIcon>
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </LineIcon>
  ),
  values: (
    <LineIcon>
      <path d="M12 3 5 6v6c0 5 3.2 8.4 7 9.5 3.8-1.1 7-4.5 7-9.5V6l-7-3z" />
      <path d="M9 12l2 2 4-4" />
    </LineIcon>
  ),
};

export const certIcons: Record<string, ReactNode> = {
  license: (
    <LineIcon>
      <path d="M6 3h12v18H6z" />
      <path d="M9 8h6M9 12h6M9 16h3" />
    </LineIcon>
  ),
  legal: (
    <LineIcon>
      <path d="M8 8V6a4 4 0 0 1 8 0v2" />
      <path d="M5 8h14v12H5z" />
      <path d="M12 12v4" />
    </LineIcon>
  ),
  authority: (
    <LineIcon>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2" />
    </LineIcon>
  ),
  register: (
    <LineIcon>
      <path d="M8 4h9a2 2 0 0 1 2 2v14H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <path d="M10 9h6M10 13h6M10 17h3" />
    </LineIcon>
  ),
  chamber: (
    <LineIcon>
      <path d="M3 20h18M5 20V10l7-5 7 5v10" />
      <path d="M9 20v-6h6v6" />
    </LineIcon>
  ),
};

export function WhatsAppGlyph() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function ChevronLeftIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 5 8 12l7 7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function ChevronRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m9 5 7 7-7 7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function ChevronDownIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m5 9 7 7 7-7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export const markIcons: Record<string, ReactNode> = {
  assess: (
    <LineIcon>
      <path d="M7 3h10v18H7z" />
      <path d="M10 8h4M10 12h4M10 16h2" />
    </LineIcon>
  ),
  select: (
    <LineIcon>
      <path d="M4 7h7v7H4zM13 7h7v7h-7zM4 16h16" />
    </LineIcon>
  ),
  prepare: (
    <LineIcon>
      <path d="M4 18h16" />
      <path d="M7 18 12 6l5 12" />
    </LineIcon>
  ),
  install: (
    <LineIcon>
      <path d="M3 18 14 4l4 3L8 20H3z" />
    </LineIcon>
  ),
  check: (
    <LineIcon>
      <circle cx="12" cy="12" r="8" />
      <path d="m8.5 12 2.5 2.5 5-5" />
    </LineIcon>
  ),
  equipment: (
    <LineIcon>
      <path d="M7 8h10v12H7z" />
      <path d="M10 8V5h4v3" />
    </LineIcon>
  ),
  clean: (
    <LineIcon>
      <path d="M8 4h8l-1 10H9L8 4z" />
      <path d="M10 14v6M14 14v6M7 20h10" />
    </LineIcon>
  ),
  inspect: (
    <LineIcon>
      <circle cx="11" cy="11" r="6" />
      <path d="m15.5 15.5 4 4" />
    </LineIcon>
  ),
  handover: (
    <LineIcon>
      <path d="M4 11h10v9H4z" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3h2v9h-6" />
    </LineIcon>
  ),
  tile: (
    <LineIcon>
      <path d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z" />
    </LineIcon>
  ),
  grout: (
    <LineIcon>
      <path d="M4 4h16v16H4z" />
      <path d="M4 12h16M12 4v16" />
    </LineIcon>
  ),
  adhesive: (
    <LineIcon>
      <path d="M8 3h8v6H8z" />
      <path d="M10 9v12M14 9v12" />
    </LineIcon>
  ),
  cutter: (
    <LineIcon>
      <path d="M4 20 16 6" />
      <circle cx="18" cy="5" r="2" />
      <path d="M4 20h6" />
    </LineIcon>
  ),
  level: (
    <LineIcon>
      <path d="M3 12h18" />
      <path d="M12 8v8" />
      <path d="M7 10h10" />
    </LineIcon>
  ),
  vacuum: (
    <LineIcon>
      <path d="M6 10h10l2 10H8L6 10z" />
      <path d="M9 10V6h6" />
    </LineIcon>
  ),
  mop: (
    <LineIcon>
      <path d="M12 3v12" />
      <path d="M7 21c0-3 2.2-5 5-5s5 2 5 5H7z" />
    </LineIcon>
  ),
  chemical: (
    <LineIcon>
      <path d="M9 3h6v5l4 11H5l4-11V3z" />
    </LineIcon>
  ),
  cloth: (
    <LineIcon>
      <path d="M5 7h14v10H5z" />
      <path d="M5 11h14" />
    </LineIcon>
  ),
  machine: (
    <LineIcon>
      <circle cx="12" cy="13" r="6" />
      <path d="M12 7V4M9 4h6" />
    </LineIcon>
  ),
};

export const contactIcons = {
  phone: (
    <LineIcon>
      <path d="M6.5 3.5h3L11 7l-2 1.5a12 12 0 0 0 6.5 6.5L17 13l3.5 1.5v3A2 2 0 0 1 18.5 20 16 16 0 0 1 4 5.5 2 2 0 0 1 6.5 3.5z" />
    </LineIcon>
  ),
  email: (
    <LineIcon>
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </LineIcon>
  ),
  pin: (
    <LineIcon>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.2" />
    </LineIcon>
  ),
  clock: (
    <LineIcon>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </LineIcon>
  ),
};
