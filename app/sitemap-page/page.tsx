import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, MapIcon } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SERVICES } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Site Map",
  description:
    "A complete map of every page on the Brightside Dental website. Find what you are looking for quickly.",
  alternates: { canonical: "/sitemap-page" },
};

const SECTIONS = [
  {
    heading: "Main Pages",
    description: "The primary pages of our website.",
    links: [
      { href: "/", label: "Home", desc: "Brightside Dental overview and quick links." },
      { href: "/about", label: "About Us", desc: "Meet Dr. Chen and our team." },
      { href: "/services", label: "Services", desc: "All dental services we offer." },
      { href: "/gallery", label: "Gallery", desc: "Photos of our office, our team, and smile transformations." },
      { href: "/reviews", label: "Reviews", desc: "Real patient reviews, filterable by service." },
      { href: "/faq", label: "FAQ", desc: "Answers to common questions about insurance, cost, and care." },
      { href: "/new-patients", label: "New Patients", desc: "Forms, insurance, and what to expect." },
      { href: "/contact", label: "Contact and Directions", desc: "Hours, location, and how to reach us." },
    ],
  },
  {
    heading: "Dental Services",
    description: "Detailed pages for each service we provide.",
    links: SERVICES.map((s) => ({
      href: `/services/${s.slug}`,
      label: s.name,
      desc: s.tagline,
    })),
  },
  {
    heading: "Legal and Information",
    description: "Policies and legal disclosures.",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy", desc: "How we collect, use, and protect your data." },
      { href: "/terms-of-use", label: "Terms of Use", desc: "Terms governing use of this website." },
      { href: "/accessibility", label: "Accessibility Statement", desc: "Our commitment to an accessible experience." },
      { href: "/sitemap-page", label: "Site Map", desc: "This page." },
    ],
  },
];

export default function SitemapPage() {
  return (
    <main>
      <PageHero
        label="Navigation"
        title="Site Map"
        subtitle="A complete list of every page on the Brightside Dental website so you can find exactly what you need."
        bgImage={{ src: IMAGES.office.exterior.src, alt: IMAGES.office.exterior.alt }}
      />

      <div className="bg-white">
        <div className="container-page max-w-4xl py-14 md:py-20">
          <div className="space-y-12 md:space-y-16">
            {SECTIONS.map(({ heading, description, links }) => (
              <section key={heading}>
                <div className="mb-5 flex items-baseline gap-3 border-b border-subtle pb-4">
                  <MapIcon className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                  <div>
                    <h2 className="text-base font-semibold text-navy sm:text-lg">
                      {heading}
                    </h2>
                    <p className="mt-0.5 text-xs text-warmgray sm:text-sm">
                      {description}
                    </p>
                  </div>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {links.map(({ href, label, desc }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        prefetch={href === "/" ? false : undefined}
                        className="group flex items-start gap-3 rounded-lg border border-subtle bg-offwhite px-4 py-3.5 transition-colors hover:border-teal/30 hover:bg-teal/5"
                      >
                        <ChevronRight
                          className="mt-0.5 h-4 w-4 shrink-0 text-teal/40 transition-colors group-hover:text-teal"
                          aria-hidden="true"
                        />
                        <span>
                          <span className="block text-sm font-medium text-navy transition-colors group-hover:text-teal sm:text-base">
                            {label}
                          </span>
                          {desc && (
                            <span className="mt-0.5 block text-xs text-warmgray">
                              {desc}
                            </span>
                          )}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
