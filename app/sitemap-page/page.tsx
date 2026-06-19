import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, MapIcon } from "lucide-react";
import { SERVICES } from "@/lib/constants";

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
      { href: "/new-patients", label: "New Patients", desc: "Forms, insurance, and what to expect." },
      { href: "/contact", label: "Contact and Directions", desc: "Hours, location, and how to reach us." },
    ],
  },
  {
    heading: "Dental Services",
    description: "Detailed pages for each service we provide.",
    links: [
      ...SERVICES.map((s) => ({
        href: `/services/${s.slug}`,
        label: s.name,
        desc: s.tagline,
      })),
    ],
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
    <main className="bg-white">
      {/* Page hero */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="container-page max-w-4xl py-16 md:py-20">
          <div className="flex items-start gap-5">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-teal/10">
              <MapIcon className="h-6 w-6 text-teal" aria-hidden="true" />
            </div>
            <div>
              <p className="caption mb-2 text-teal">Navigation</p>
              <h1 className="text-4xl font-bold tracking-tight text-navy md:text-5xl">
                Site Map
              </h1>
            </div>
          </div>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-600">
            A complete list of every page on the Brightside Dental website so
            you can find exactly what you need.
          </p>
        </div>
      </div>

      {/* Sections */}
      <div className="container-page max-w-4xl py-16 md:py-20">
        <div className="space-y-14">
          {SECTIONS.map(({ heading, description, links }) => (
            <section key={heading}>
              <div className="mb-6 border-b border-gray-100 pb-4">
                <h2 className="text-lg font-semibold text-navy">{heading}</h2>
                <p className="mt-0.5 text-sm text-gray-500">{description}</p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {links.map(({ href, label, desc }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="group flex items-start gap-3 rounded-lg border border-gray-100 bg-gray-50 px-4 py-3.5 transition-colors hover:border-teal/30 hover:bg-teal/5"
                    >
                      <ChevronRight
                        className="mt-0.5 h-4 w-4 shrink-0 text-teal/40 transition-colors group-hover:text-teal"
                        aria-hidden="true"
                      />
                      <span>
                        <span className="block font-medium text-navy transition-colors group-hover:text-teal">
                          {label}
                        </span>
                        {desc && (
                          <span className="mt-0.5 block text-xs text-gray-500">
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
    </main>
  );
}
