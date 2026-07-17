"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Accessibility,
  Star,
  ArrowUp,
} from "lucide-react";
import { Logo } from "./Logo";
import { PRACTICE } from "@/lib/constants";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/new-patients", label: "New Patients" },
  { href: "/contact", label: "Contact" },
];

const SOCIALS = [
  { href: "https://facebook.com", label: "Follow us on Facebook", Icon: Facebook },
  { href: "https://instagram.com", label: "Follow us on Instagram", Icon: Instagram },
  { href: PRACTICE.mapsUrl, label: "View our Google Business Profile", Icon: Star },
];

function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="inline-flex items-center gap-1.5 text-xs text-white/45 transition-colors hover:text-teal"
      aria-label="Back to top"
    >
      <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
      Back to top
    </button>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      {/* Top teal accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-teal/50 to-transparent" />

      <div className="container-page py-14 md:py-18">
        {/* 1 col mobile → 2 col tablet → 4 col desktop */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 — brand */}
          <div className="sm:col-span-2 lg:col-span-1 lg:pr-6">
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Modern, calm, judgment-free dental care for Lodi and San Joaquin
              County. Accepting new patients.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-md border-hair border-subtle-dark text-white/70 transition-colors hover:border-teal hover:text-teal"
                >
                  <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — quick links */}
          <div>
            <h3 className="caption border-b border-white/[0.08] pb-2 text-teal-light/90">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    prefetch={link.href === "/" ? false : undefined}
                    className="text-white/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — hours */}
          <div>
            <h3 className="caption border-b border-white/[0.08] pb-2 text-teal-light/90">Office Hours</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {Object.entries(PRACTICE.hours).map(([days, time]) => (
                <li key={days} className="flex justify-between gap-4">
                  <span className="text-white/65">{days}</span>
                  <span className="text-right text-white/85">{time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — contact */}
          <div>
            <h3 className="caption border-b border-white/[0.08] pb-2 text-teal-light/90">Visit Us</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-[18px] w-[18px] shrink-0 text-teal" aria-hidden="true" />
                <span className="text-white/75">
                  {PRACTICE.addressLine1}
                  <br />
                  {PRACTICE.addressLine2}
                </span>
              </li>
              <li>
                <a
                  href={PRACTICE.phoneHref}
                  className="flex items-center gap-3 text-white/75 transition-colors hover:text-white"
                >
                  <Phone className="h-[18px] w-[18px] shrink-0 text-teal" aria-hidden="true" />
                  {PRACTICE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PRACTICE.email}`}
                  className="flex items-center gap-3 break-all text-white/75 transition-colors hover:text-white"
                >
                  <Mail className="h-[18px] w-[18px] shrink-0 text-teal" aria-hidden="true" />
                  {PRACTICE.email}
                </a>
              </li>
              <li>
                <a
                  href={PRACTICE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-teal transition-colors hover:text-teal-light"
                >
                  Get Directions
                  <span aria-hidden>→</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t-hair border-subtle-dark">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/50 md:flex-row">
          {/* Left: copyright + credit */}
          <div className="flex flex-col items-center gap-1.5 text-center md:items-start md:text-left">
            <p>
              © {new Date().getFullYear()} {PRACTICE.name}. All rights reserved.
            </p>
            <p>
              Site by{" "}
              <a
                href="https://alectronicsolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 underline-offset-2 transition-colors hover:text-teal hover:underline"
              >
                Alectronic Solutions
              </a>
            </p>
          </div>

          {/* Center — compliance badges */}
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-teal" aria-hidden="true" />
              HIPAA Compliant
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Accessibility className="h-4 w-4 text-teal" aria-hidden="true" />
              ADA Accessible
            </span>
          </div>

          {/* Center-right — legal links */}
          <nav aria-label="Legal links" className="flex flex-wrap justify-center gap-x-5 gap-y-1.5">
            <Link href="/privacy-policy" className="transition-colors hover:text-teal">Privacy Policy</Link>
            <Link href="/terms-of-use" className="transition-colors hover:text-teal">Terms of Use</Link>
            <Link href="/accessibility" className="transition-colors hover:text-teal">Accessibility</Link>
            <Link href="/sitemap-page" className="transition-colors hover:text-teal">Site Map</Link>
          </nav>

          {/* Right — back to top */}
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}
