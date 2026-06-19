import type { Metadata } from "next";
import { Accessibility, CheckCircle2, Mail, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { PRACTICE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Brightside Dental is committed to making our website and office accessible to everyone. Learn about our accessibility features and how to request accommodations.",
  alternates: { canonical: "/accessibility" },
};

const LAST_UPDATED = "June 1, 2025";

const FEATURES = [
  {
    heading: "Keyboard Navigation",
    body: "Every interactive element, including navigation menus, buttons, forms, and links, is fully reachable and operable using a keyboard alone. A visible skip-to-main-content link appears at the top of every page.",
  },
  {
    heading: "Screen Reader Support",
    body: "We use semantic HTML landmarks, descriptive ARIA labels, and meaningful alt text on all images so screen readers can accurately convey content and context.",
  },
  {
    heading: "Color Contrast",
    body: "Text and interactive elements meet or exceed WCAG 2.1 AA contrast ratio requirements. Our core palette was tested against all standard foreground and background combinations.",
  },
  {
    heading: "Scalable Text",
    body: "All text is sized using relative units and can be increased up to 200% using your browser zoom controls without loss of content or functionality.",
  },
  {
    heading: "Descriptive Links",
    body: "Link text is written to be meaningful out of context so users navigating by links alone can understand their destination without needing surrounding copy.",
  },
  {
    heading: "Form Labels and Errors",
    body: "Every form input has a programmatically associated label. Validation errors are described in plain language and linked directly to the field that needs attention.",
  },
];

const OFFICE_FEATURES = [
  "Wheelchair-accessible entrance, restrooms, and treatment rooms.",
  "Dedicated accessible parking spaces directly adjacent to the front entrance.",
  "Low reception counters and alternative check-in options for patients who prefer to remain seated.",
  "Written materials available in large print upon request.",
  "Interpreter services available with at least 24 hours advance notice.",
];

export default function AccessibilityPage() {
  return (
    <main>
      <PageHero
        label="Our Commitment"
        title="Accessibility Statement"
        subtitle={`Effective ${LAST_UPDATED}. We are committed to making every part of the Brightside Dental experience accessible to all patients.`}
        bgImage={{ src: IMAGES.office.waiting.src, alt: IMAGES.office.waiting.alt }}
      />

      <div className="bg-white">
        <div className="container-page max-w-4xl py-14 md:py-20">
          {/* Our Standard */}
          <div className="grid gap-4 border-b border-gray-100 py-10 sm:gap-6 md:grid-cols-[4rem_1fr]">
            <div>
              <span className="font-mono text-xl font-bold text-teal/30 sm:text-2xl">01</span>
            </div>
            <div>
              <h2 className="mb-4 text-lg font-semibold text-navy sm:text-xl">
                Our Standard
              </h2>
              <p className="text-gray-600">
                {PRACTICE.name} aims to conform to the{" "}
                <strong className="text-gray-800">
                  Web Content Accessibility Guidelines (WCAG) 2.1, Level AA
                </strong>{" "}
                published by the World Wide Web Consortium (W3C). These
                guidelines explain how to make web content more accessible to
                people with a wide range of disabilities, including visual,
                auditory, motor, and cognitive impairments.
              </p>
            </div>
          </div>

          {/* Website features */}
          <div className="grid gap-4 border-b border-gray-100 py-10 sm:gap-6 md:grid-cols-[4rem_1fr]">
            <div>
              <span className="font-mono text-xl font-bold text-teal/30 sm:text-2xl">02</span>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-semibold text-navy sm:text-xl">
                Website Accessibility Features
              </h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                {FEATURES.map(({ heading, body }) => (
                  <li
                    key={heading}
                    className="rounded-lg border border-gray-100 bg-gray-50 p-4 sm:p-5"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <CheckCircle2
                        className="h-4 w-4 shrink-0 text-teal"
                        aria-hidden="true"
                      />
                      <h3 className="text-sm font-semibold text-navy">{heading}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-600">{body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Physical office */}
          <div className="grid gap-4 border-b border-gray-100 py-10 sm:gap-6 md:grid-cols-[4rem_1fr]">
            <div>
              <span className="font-mono text-xl font-bold text-teal/30 sm:text-2xl">03</span>
            </div>
            <div>
              <h2 className="mb-4 text-lg font-semibold text-navy sm:text-xl">
                Physical Office Accessibility
              </h2>
              <p className="mb-5 text-gray-600">
                Our Lodi office is designed to be physically accessible for all
                patients.
              </p>
              <ul className="space-y-3">
                {OFFICE_FEATURES.map((item) => (
                  <li key={item} className="flex gap-3 text-gray-600">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-teal"
                      aria-hidden="true"
                    />
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Known limitations */}
          <div className="grid gap-4 border-b border-gray-100 py-10 sm:gap-6 md:grid-cols-[4rem_1fr]">
            <div>
              <span className="font-mono text-xl font-bold text-teal/30 sm:text-2xl">04</span>
            </div>
            <div>
              <h2 className="mb-4 text-lg font-semibold text-navy sm:text-xl">
                Known Limitations
              </h2>
              <p className="text-gray-600">
                While we work hard to keep our website accessible, some
                third-party content or embedded tools, such as maps or
                scheduling widgets provided by external vendors, may not fully
                meet WCAG 2.1 AA standards. We are actively working with those
                vendors to improve compliance. If you encounter a barrier,
                please let us know.
              </p>
            </div>
          </div>

          {/* Contact block */}
          <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-teal/10">
                <Accessibility className="h-5 w-5 text-teal" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="mb-1 text-lg font-semibold text-navy">
                  Report an Issue
                </h2>
                <p className="mb-6 text-sm text-gray-600">
                  If you experience difficulty accessing content or need an
                  accommodation not listed here, please reach out. We respond
                  within two business days.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={PRACTICE.phoneHref}
                    className="flex items-center gap-3 rounded-lg border border-teal/25 bg-white px-4 py-3.5 text-sm font-medium text-navy shadow-sm transition-colors hover:border-teal/50 hover:bg-teal/5"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                    <div>
                      <p className="text-xs text-gray-500">Call us</p>
                      <p>{PRACTICE.phone}</p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${PRACTICE.email}`}
                    className="flex items-center gap-3 rounded-lg border border-teal/25 bg-white px-4 py-3.5 text-sm font-medium text-navy shadow-sm transition-colors hover:border-teal/50 hover:bg-teal/5"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                    <div>
                      <p className="text-xs text-gray-500">Email us</p>
                      <p className="break-all">{PRACTICE.email}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
