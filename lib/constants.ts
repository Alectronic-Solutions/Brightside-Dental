export const PRACTICE = {
  name: "Brightside Dental",
  phone: "(209) 366-4287",
  phoneHref: "tel:+12093664287",
  address: "1420 S Lower Sacramento Rd, Lodi, CA 95242",
  addressLine1: "1420 S Lower Sacramento Rd",
  addressLine2: "Lodi, CA 95242",
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=1420+S+Lower+Sacramento+Rd+Lodi+CA+95242",
  hours: {
    "Mon–Thu": "8:00 AM – 5:00 PM",
    Friday: "8:00 AM – 2:00 PM",
    "Sat–Sun": "Closed",
  },
  email: "hello@brightsidedental.com",
  googleRating: 4.9,
  reviewCount: 312,
  yearsInPractice: 20,
  patientsServed: "8,400+",
  founded: 2006,
} as const;

export type ServiceIcon =
  | "tooth"
  | "sparkles"
  | "anchor"
  | "smile"
  | "zap";

export interface Service {
  slug: string;
  name: string;
  icon: ServiceIcon;
  tagline: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    slug: "general-dentistry",
    name: "General Dentistry",
    icon: "tooth",
    tagline: "Comprehensive care for the whole family",
    description:
      "From routine cleanings to fillings and crowns, we keep your smile healthy year-round.",
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    icon: "sparkles",
    tagline: "Smile transformations that feel natural",
    description:
      "Veneers, whitening, bonding, and smile makeovers designed to look like you. Only better.",
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    icon: "anchor",
    tagline: "A permanent fix that feels like your own tooth",
    description:
      "Replace missing teeth with implants that look, feel, and function like natural teeth.",
  },
  {
    slug: "invisalign",
    name: "Invisalign",
    icon: "smile",
    tagline: "Straighten your teeth without anyone noticing you're doing it",
    description:
      "Clear aligner therapy for teens and adults. Virtually invisible, fully removable.",
  },
  {
    slug: "emergency-dentistry",
    name: "Emergency Dentistry",
    icon: "zap",
    tagline: "Same-day appointments available",
    description:
      "Toothache, broken tooth, lost crown? We keep time open every day for dental emergencies.",
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://alectronic-solutions.github.io/Brightside-Dental";
