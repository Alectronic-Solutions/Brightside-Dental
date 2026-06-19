"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { PRACTICE } from "@/lib/constants";
import { cn } from "@/lib/cn";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/new-patients", label: "New Patients" },
  { href: "/contact", label: "Contact" },
];

/** Routes that render a dark navy hero behind a transparent navbar. */
const DARK_HERO_ROUTES = ["/", "/services"];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const hasDarkHero =
    DARK_HERO_ROUTES.includes(pathname) ||
    pathname.startsWith("/services/") ||
    pathname === "/about" ||
    pathname === "/new-patients" ||
    pathname === "/contact" ||
    pathname === "/privacy-policy" ||
    pathname === "/terms-of-use" ||
    pathname === "/accessibility" ||
    pathname === "/sitemap-page";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || !hasDarkHero;
  const linkColor = solid ? "text-charcoal/80" : "text-white/85";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b-hair border-subtle bg-white/95 shadow-nav backdrop-blur-sm"
          : "border-b-hair border-transparent bg-transparent",
      )}
    >
      {/* Accepting new patients banner */}
      <div
        className={cn(
          "hidden h-8 items-center justify-center gap-2 text-xs font-medium transition-all duration-300 lg:flex",
          solid
            ? "bg-teal-light text-teal-dark"
            : "bg-teal/15 text-teal-light",
        )}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
        </span>
        Accepting new patients. Same-week appointments available.
        <span aria-hidden className="mx-1 opacity-40">·</span>
        <a
          href={PRACTICE.phoneHref}
          className={cn(
            "font-semibold underline-offset-2 hover:underline",
            solid ? "text-teal-dark" : "text-teal-light",
          )}
        >
          Call {PRACTICE.phone}
        </a>
      </div>

      <nav className="container-page flex h-[68px] items-center justify-between">
        <Logo variant={solid ? "dark" : "light"} />

        {/* Center links — desktop */}
        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "nav-link-hover relative text-[0.92rem] font-medium transition-colors hover:opacity-100",
                  linkColor,
                  active && (solid ? "text-teal-dark" : "text-white"),
                )}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 h-px w-full bg-teal"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right — phone + CTA (desktop) */}
        <div className="hidden items-center gap-3.5 lg:flex">
          <a
            href={PRACTICE.phoneHref}
            aria-label={`Call Brightside Dental at ${PRACTICE.phone}`}
            className={cn(
              "inline-flex items-center gap-1.5 text-[0.82rem] font-medium tracking-wide transition-colors",
              solid ? "text-charcoal/60 hover:text-teal-dark" : "text-white/65 hover:text-white",
            )}
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {PRACTICE.phone}
          </a>
          <Button href="/contact" size="sm">
            Book Appointment
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "grid h-11 w-11 place-items-center rounded-md transition-colors lg:hidden",
            solid ? "text-charcoal hover:bg-black/5" : "text-white hover:bg-white/10",
          )}
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </nav>

      {/* Mobile slide-down menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex flex-col bg-navy lg:hidden"
          >
            <div className="container-page flex h-[68px] items-center justify-between">
              <Logo variant="light" />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-md text-white hover:bg-white/10"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Accepting new patients pill — mobile */}
            <div className="container-page pb-2 pt-0">
              <div className="flex items-center gap-2 rounded-lg bg-teal/15 px-4 py-2.5">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
                </span>
                <span className="text-sm font-medium text-teal-light">
                  Accepting new patients
                </span>
              </div>
            </div>

            <motion.div
              className="container-page flex flex-1 flex-col gap-1 pt-4 overflow-y-auto"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
              }}
            >
              {NAV_LINKS.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    href={link.href}
                    className="block border-b-hair border-subtle-dark py-4 text-2xl font-medium text-white"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                className="mt-8 flex flex-col gap-4 pb-8"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <Button href="/contact" size="lg" className="w-full">
                  Book Appointment
                </Button>
                <a
                  href={PRACTICE.phoneHref}
                  className="inline-flex items-center justify-center gap-2 text-lg font-medium text-teal-light"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  {PRACTICE.phone}
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
