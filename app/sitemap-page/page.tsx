import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Site Map",
  description:
    "A complete map of every page on the Brightside Dental website. Find what you're looking for quickly.",
  alternates: { canonical: "/sitemap-page" },
};

const SECTIONS = [
  {
    heading: "Main Pages",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact & Directions" },
      { href: "/new-patients", label: "New Patients" },
    ],
  },
  {
    heading: "Dental Services",
    links: [
      { href: "/services", label: "All Services" },
      ...SERVICES.map((s) => ({
        href: `/services/${s.slug}`,
        label: s.name,
        sub: s.tagline,
      })),
    ],
  },
  {
    heading: "Legal & Info",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms-of-use", label: "Terms of Use" },
      { href: "/accessibility", label: "Accessibility Statement" },
      { href: "/sitemap-page", label: "Site Map (this page)" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <main className="bg-white">
      <div className="container-page max-w-3xl py-20 md:py-28">
        {/* Header */}
        <div className="mb-12 border-b border-gray-200 pb-10">
          <p className="caption mb-3 text-teal">Navigation</p>
          <h1 className="text-4xl font-bold tracking-tight text-navy md:text-5xl">
            Site Map
          </h1>
          <p className="mt-4 text-gray-500">
            A full list of every page on the Brightside Dental website so you
            can find exactly what you need.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {SECTIONS.map(({ heading, links }) => (
            <section key={heading}>
              <h2 className="caption mb-5 border-b border-gray-100 pb-3 text-teal">
                {heading}
              </h2>
              <ul className="space-y-3">
                {links.map(({ href, label, sub }: { href: string; label: string; sub?: string }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="group flex items-start gap-3"
                    >
                      <span className="mt-1 text-teal/40 transition-colors group-hover:text-teal">
                        →
                      </span>
                      <span>
                        <span className="font-medium text-navy transition-colors group-hover:text-teal">
                          {label}
                        </span>
                        {sub && (
                          <span className="ml-2 text-sm text-gray-400">
                            — {sub}
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
