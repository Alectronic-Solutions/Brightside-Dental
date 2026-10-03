// Kept to city level on purpose: the site shows the general area, not a
// street address.
const ADDRESS = {
  city: "Sacramento",
  region: "CA",
} as const;

export const PRACTICE = {
  name: "Brightside Dental",
  phone: "(209) 366-4287",
  phoneHref: "tel:+12093664287",
  postalAddress: ADDRESS,
  address: `${ADDRESS.city}, ${ADDRESS.region}`,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sacramento+CA",
  /** City-wide OpenStreetMap view with no pin, to match the general address. */
  mapEmbedUrl:
    "https://www.openstreetmap.org/export/embed.html?bbox=-121.5600%2C38.4900%2C-121.3600%2C38.6700&layer=mapnik",
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
  /** Patient portal login URL. While blank, the portal button links to the
   *  contact page instead. */
  patientPortalUrl: "",
  /** Social profiles. Point at the platform home pages until the practice has
   *  real accounts; the footer only renders icons for entries that have a URL. */
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
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
    tagline: "Checkups, cleanings, and fillings for every age",
    description:
      "Routine cleanings and exams, plus fillings and crowns when you need them.",
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    icon: "sparkles",
    tagline: "Whitening, veneers, and bonding that look natural",
    description:
      "Veneers, whitening, bonding, and smile makeovers planned around your face, so the result still looks like you.",
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    icon: "anchor",
    tagline: "A permanent fix that feels like your own tooth",
    description:
      "Replace a missing tooth with an implant and crown that you brush and floss like the rest of your teeth.",
  },
  {
    slug: "invisalign",
    name: "Invisalign",
    icon: "smile",
    tagline: "Straighten your teeth without anyone noticing you're doing it",
    description:
      "Clear aligners for teens and adults. They are hard to spot, and you take them out to eat.",
  },
  {
    slug: "emergency-dentistry",
    name: "Emergency Dentistry",
    icon: "zap",
    tagline: "Same-day appointments available",
    description:
      "Toothache, broken tooth, lost crown? We hold emergency slots open every day we are open.",
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://alectronic-solutions.github.io/Brightside-Dental";
