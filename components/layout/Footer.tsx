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
} from "lucide-react";
import { Logo } from "./Logo";
import { PRACTICE } from "@/lib/constants";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/new-patients", label: "New Patients" },
  { href: "/contact", label: "Contact" },
];

const SOCIALS = [
  { href: "https://facebook.com", label: "Facebook", Icon: Facebook },
  { href: "https://instagram.com", label: "Instagram", Icon: Instagram },
  { href: PRACTICE.mapsUrl, label: "Google Business Profile", Icon: Star },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 — brand */}
          <div className="lg:pr-6">
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
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — quick links */}
          <div>
            <h3 className="caption text-teal-light/90">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
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
            <h3 className="caption text-teal-light/90">Office Hours</h3>
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
            <h3 className="caption text-teal-light/90">Visit Us</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-[18px] w-[18px] shrink-0 text-teal" />
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
                  <Phone className="h-[18px] w-[18px] shrink-0 text-teal" />
                  {PRACTICE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PRACTICE.email}`}
                  className="flex items-center gap-3 break-all text-white/75 transition-colors hover:text-white"
                >
                  <Mail className="h-[18px] w-[18px] shrink-0 text-teal" />
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
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {PRACTICE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-teal" />
              HIPAA Compliant
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Accessibility className="h-4 w-4 text-teal" />
              ADA Accessible
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
