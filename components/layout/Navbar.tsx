"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { PRACTICE, SERVICES } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { cn } from "@/lib/cn";

const EASE = [0.22, 1, 0.36, 1] as const;

interface MenuLink {
  href: string;
  label: string;
  desc: string;
}

interface NavItem {
  label: string;
  href: string;
  /** "services" renders the photo mega menu; an array renders a link list. */
  menu?: "services" | MenuLink[];
}

const SERVICE_THUMBS: Record<string, { card: string; alt: string }> = {
  "general-dentistry": IMAGES.services.general,
  "cosmetic-dentistry": IMAGES.services.cosmetic,
  "dental-implants": IMAGES.services.implants,
  invisalign: IMAGES.services.invisalign,
  "emergency-dentistry": IMAGES.services.emergency,
};

const NAV: NavItem[] = [
  { label: "Services", href: "/services", menu: "services" },
  {
    label: "About",
    href: "/about",
    menu: [
      { href: "/about", label: "Our Story", desc: "How the practice started and what we care about" },
      { href: "/about#team", label: "Meet the Team", desc: "Dr. Chen, Maria, and Jordan" },
      { href: "/gallery", label: "Office Gallery", desc: "Photos of the office and before-and-afters" },
      { href: "/reviews", label: "Patient Reviews", desc: "What patients say about their visits" },
    ],
  },
  {
    label: "Patients",
    href: "/new-patients",
    menu: [
      { href: "/new-patients", label: "New Patients", desc: "What to expect at your first visit" },
      { href: "/new-patients#insurance", label: "Insurance", desc: "PPO plans we accept and benefit checks" },
      { href: "/new-patients#financing", label: "Payment Options", desc: "CareCredit and in-house payment plans" },
      { href: "/faq", label: "FAQ", desc: "Answers to the questions we hear most" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

/** Routes that render a dark navy hero behind a transparent navbar. */
const DARK_HERO_ROUTES = [
  "/",
  "/services",
  "/about",
  "/new-patients",
  "/contact",
  "/gallery",
  "/faq",
  "/reviews",
  "/privacy-policy",
  "/terms-of-use",
  "/accessibility",
  "/sitemap-page",
];

function itemPaths(item: NavItem) {
  if (item.menu === "services") return ["/services"];
  if (Array.isArray(item.menu)) return item.menu.map((l) => l.href.split("#")[0]);
  return [item.href];
}

function isActive(item: NavItem, pathname: string) {
  return itemPaths(item).some((p) => pathname === p || pathname.startsWith(p + "/"));
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  const hasDarkHero =
    DARK_HERO_ROUTES.includes(pathname) || pathname.startsWith("/services/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    const { body } = document;
    const background = Array.from(document.querySelectorAll<HTMLElement>("main, footer"));
    const previousInert = background.map(element => element.inert);
    background.forEach(element => { element.inert = true; });
    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    };

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";
    document.documentElement.style.overscrollBehavior = "contain";

    return () => {
      background.forEach((element, index) => { element.inert = previousInert[index]; });
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.left = prev.left;
      body.style.right = prev.right;
      body.style.width = prev.width;
      body.style.overflow = prev.overflow;
      document.documentElement.style.overscrollBehavior = "";
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
    setMobileSection(null);
  }, [pathname]);

  // Escape-to-close + focus trap while the mobile panel is open. Focusables are
  // looked up on each Tab because expanding a section adds new links.
  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const trigger = triggerRef.current;
    panel?.querySelector<HTMLElement>("a[href], button:not([disabled])")?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      const focusables = panel?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
      if (e.key !== "Tab" || !focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      trigger?.focus({ preventScroll: true });
    };
  }, [open]);

  const showMenu = useCallback((label: string) => {
    clearTimeout(closeTimer.current);
    setOpenMenu(label);
  }, []);

  const hideMenuSoon = useCallback(() => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  }, []);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const solid = scrolled || !hasDarkHero || openMenu !== null;
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

      <nav inert={open} aria-label="Main navigation" className="container-page flex h-[68px] items-center justify-between">
        <Logo variant={solid ? "dark" : "light"} />

        {/* Center links: desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <DesktopItem
              key={item.label}
              item={item}
              active={isActive(item, pathname)}
              expanded={openMenu === item.label}
              solid={solid}
              linkColor={linkColor}
              onShow={() => showMenu(item.label)}
              onHideSoon={hideMenuSoon}
              onClose={() => setOpenMenu(null)}
              onToggle={() => setOpenMenu((cur) => (cur === item.label ? null : item.label))}
            />
          ))}
        </ul>

        {/* Right: phone + CTA (desktop) */}
        <div className="hidden items-center gap-3.5 lg:flex">
          <a
            href={PRACTICE.phoneHref}
            aria-label={`Call Brightside Dental at ${PRACTICE.phone}`}
            className={cn(
              "hidden items-center gap-1.5 text-[0.82rem] font-medium tracking-wide transition-colors xl:inline-flex",
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
          ref={triggerRef}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "relative grid h-11 w-11 place-items-center rounded-md transition-colors lg:hidden",
            open
              ? "text-white hover:bg-white/10"
              : solid
                ? "text-charcoal hover:bg-black/5"
                : "text-white hover:bg-white/10",
          )}
        >
          <AnimatePresence initial={false} mode="wait">
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="grid place-items-center"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="grid place-items-center"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            ref={panelRef}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.24, ease: EASE }}
            className="fixed inset-0 z-50 flex h-dvh flex-col overscroll-contain bg-navy pb-[env(safe-area-inset-bottom)] lg:hidden"
          >
            <div className="container-page flex h-[68px] shrink-0 items-center justify-between">
              <Logo variant="light" />
              <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-11 w-11 place-items-center rounded-md text-white hover:bg-white/10">
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="container-page flex min-h-0 flex-1 flex-col overflow-y-auto pt-2">
              <div className="flex items-center justify-center gap-2 rounded-lg bg-teal/15 px-4 py-2.5">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
                </span>
                <span className="text-sm font-medium text-teal-light">
                  Accepting new patients
                </span>
              </div>

              <ul className="mt-4">
                {NAV.map((item) => (
                  <MobileItem
                    key={item.label}
                    item={item}
                    pathname={pathname}
                    expanded={mobileSection === item.label}
                    onToggle={() =>
                      setMobileSection((cur) => (cur === item.label ? null : item.label))
                    }
                    onNavigate={() => setOpen(false)}
                  />
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-4 pb-8">
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
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Desktop                                                             */
/* ------------------------------------------------------------------ */

function DesktopItem({
  item,
  active,
  expanded,
  solid,
  linkColor,
  onShow,
  onHideSoon,
  onClose,
  onToggle,
}: {
  item: NavItem;
  active: boolean;
  expanded: boolean;
  solid: boolean;
  linkColor: string;
  onShow: () => void;
  onHideSoon: () => void;
  onClose: () => void;
  onToggle: () => void;
}) {
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const itemClass = cn(
    "relative inline-flex items-center gap-1 rounded-md px-3 py-2 text-[0.92rem] font-medium transition-colors",
    linkColor,
    solid ? "hover:text-teal-dark" : "hover:text-white",
    (active || expanded) && (solid ? "text-teal-dark" : "text-white"),
  );
  const underline = active && (
    <motion.span layoutId="nav-underline" className="absolute inset-x-3 -bottom-0.5 h-px bg-teal" />
  );

  if (!item.menu) {
    return (
      <li>
        <Link href={item.href} aria-current={active ? "page" : undefined} className={itemClass}>
          {item.label}
          {underline}
        </Link>
      </li>
    );
  }

  return (
    <li
      className="relative"
      onMouseEnter={onShow}
      onMouseLeave={onHideSoon}
      onKeyDown={(e) => {
        if (e.key === "Escape" && expanded) {
          onClose();
          buttonRef.current?.focus();
        }
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) onClose();
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={expanded}
        aria-controls={menuId}
        // Mouse and touch clicks keep the menu open (hover already opened it);
        // keyboard activation (detail === 0) toggles it.
        onClick={(e) => (e.detail === 0 ? onToggle() : onShow())}
        className={itemClass}
      >
        {item.label}
        <ChevronDown
          className={cn("h-3.5 w-3.5 transition-transform duration-200", expanded && "rotate-180")}
          aria-hidden="true"
        />
        {underline}
      </button>

      <AnimatePresence>
        {expanded && (
          <div
            id={menuId}
            className={cn(
              "absolute left-1/2 top-full pt-3",
              item.menu === "services" ? "-translate-x-[30%]" : "-translate-x-1/2",
            )}
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.18, ease: EASE }}
              className="overflow-hidden rounded-2xl border-hair border-subtle bg-white shadow-[0_2px_4px_rgba(14,31,61,0.04),0_24px_56px_-12px_rgba(14,31,61,0.25)]"
            >
              {item.menu === "services" ? (
                <ServicesMenu onNavigate={onClose} />
              ) : (
                <LinkMenu links={item.menu} onNavigate={onClose} />
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </li>
  );
}

function ServicesMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid w-[min(760px,calc(100vw-48px))] grid-cols-[1fr_230px]">
      <div className="p-3">
        <ul className="grid grid-cols-2 gap-1">
          {SERVICES.map((service) => {
            const thumb = SERVICE_THUMBS[service.slug];
            return (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  onClick={onNavigate}
                  className="group flex items-center gap-3 rounded-xl p-2.5 transition-colors hover:bg-offwhite"
                >
                  <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-teal-light">
                    <Image
                      src={thumb.card}
                      alt=""
                      fill
                      sizes="56px"
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-charcoal group-hover:text-teal-dark">
                      {service.name}
                    </span>
                    <span className="mt-0.5 line-clamp-2 block text-xs leading-snug text-warmgray">
                      {service.tagline}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="/services"
              onClick={onNavigate}
              className="flex h-full items-center justify-center gap-1.5 rounded-xl border-hair border-dashed border-teal/40 p-2.5 text-sm font-medium text-teal-dark transition-colors hover:bg-teal-light"
            >
              Compare all services
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-col justify-between bg-navy p-5 text-center">
        <div>
          <p className="caption text-teal">Dental emergency?</p>
          <p className="mt-2 text-sm leading-relaxed text-white/75">
            We keep time open every weekday for toothaches, broken teeth, and
            lost crowns.
          </p>
        </div>
        <div className="mt-5 space-y-2">
          <a
            href={PRACTICE.phoneHref}
            className="flex items-center justify-center gap-2 rounded-md bg-teal px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {PRACTICE.phone}
          </a>
          <Link
            href="/services/emergency-dentistry"
            onClick={onNavigate}
            className="block text-xs font-medium text-white/60 transition-colors hover:text-white"
          >
            What counts as an emergency
          </Link>
        </div>
      </div>
    </div>
  );
}

function LinkMenu({ links, onNavigate }: { links: MenuLink[]; onNavigate: () => void }) {
  return (
    <ul className="w-[300px] p-2">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            onClick={onNavigate}
            className="group block rounded-xl px-3.5 py-3 transition-colors hover:bg-offwhite"
          >
            <span className="flex items-center justify-between text-sm font-semibold text-charcoal group-hover:text-teal-dark">
              {link.label}
              <ArrowRight
                className="h-3.5 w-3.5 -translate-x-1 text-teal opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                aria-hidden="true"
              />
            </span>
            <span className="mt-0.5 block text-xs leading-snug text-warmgray">{link.desc}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/* Mobile                                                              */
/* ------------------------------------------------------------------ */

function MobileItem({
  item,
  pathname,
  expanded,
  onToggle,
  onNavigate,
}: {
  item: NavItem;
  pathname: string;
  expanded: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  const sectionId = useId();

  if (!item.menu) {
    return (
      <li className="border-b-hair border-subtle-dark">
        <Link
          href={item.href}
          onClick={onNavigate}
          aria-current={pathname === item.href ? "page" : undefined}
          className="block py-4 text-xl font-medium text-white"
        >
          {item.label}
        </Link>
      </li>
    );
  }

  const links: { href: string; label: string; desc?: string; thumb?: string }[] =
    item.menu === "services"
      ? [
          ...SERVICES.map((s) => ({
            href: `/services/${s.slug}`,
            label: s.name,
            thumb: SERVICE_THUMBS[s.slug].card,
          })),
          { href: "/services", label: "Compare all services" },
        ]
      : item.menu;

  return (
    <li className="border-b-hair border-subtle-dark">
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={sectionId}
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-left text-xl font-medium text-white"
      >
        {item.label}
        <ChevronDown
          className={cn("h-5 w-5 text-teal transition-transform duration-200", expanded && "rotate-180")}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.ul
            id={sectionId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: EASE }}
            className="overflow-hidden"
          >
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onNavigate}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.thumb && (
                    <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-md">
                      <Image src={link.thumb} alt="" fill sizes="36px" className="object-cover" />
                    </span>
                  )}
                  <span className="min-w-0">
                    <span className="block text-base font-medium">{link.label}</span>
                    {link.desc && (
                      <span className="block text-xs text-white/50">{link.desc}</span>
                    )}
                  </span>
                </Link>
              </li>
            ))}
            <li aria-hidden className="h-3" />
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}
