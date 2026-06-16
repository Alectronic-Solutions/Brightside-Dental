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

  // service detail, about, new-patients, and contact pages also have dark heroes
  const hasDarkHero =
    DARK_HERO_ROUTES.includes(pathname) ||
    pathname.startsWith("/services/") ||
    pathname === "/about" ||
    pathname === "/new-patients" ||
    pathname === "/contact";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Solid white when scrolled OR when over a light-hero page.
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
      <nav className="container-page flex h-[72px] items-center justify-between">
        <Logo variant={solid ? "dark" : "light"} />

        {/* Center links — desktop */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-[0.95rem] font-medium transition-colors hover:opacity-100",
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
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={PRACTICE.phoneHref}
            className={cn(
              "inline-flex items-center gap-2 text-[0.95rem] font-medium transition-colors",
              solid ? "text-teal-dark hover:text-teal" : "text-teal-light hover:text-white",
            )}
          >
            <Phone className="h-4 w-4" />
            {PRACTICE.phone}
          </a>
          <Button href="/contact" size="sm">
            Book Appointment
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className={cn(
            "grid h-10 w-10 place-items-center rounded-md transition-colors lg:hidden",
            solid ? "text-charcoal hover:bg-black/5" : "text-white hover:bg-white/10",
          )}
        >
          <Menu className="h-6 w-6" />
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
            <div className="container-page flex h-[72px] items-center justify-between">
              <Logo variant="light" />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-md text-white hover:bg-white/10"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <motion.div
              className="container-page flex flex-1 flex-col gap-1 pt-6"
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
                className="mt-8 flex flex-col gap-4"
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
                  <Phone className="h-5 w-5" />
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
