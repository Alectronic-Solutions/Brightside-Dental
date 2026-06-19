import type { Metadata } from "next";
import { Accessibility, Mail, Phone } from "lucide-react";
import { PRACTICE } from "@/lib/constants";

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
    body: "Every interactive element — navigation menus, buttons, forms, and links — is fully reachable and operable using a keyboard alone. A visible skip-to-main-content link appears at the top of every page for keyboard users.",
  },
  {
    heading: "Screen Reader Support",
    body: "We use semantic HTML landmarks, descriptive ARIA labels, and meaningful alt text on all images so screen readers can accurately convey content and context to users who rely on them.",
  },
  {
    heading: "Color Contrast",
    body: "Text and interactive elements meet or exceed WCAG 2.1 AA contrast ratio requirements. Our core palette was tested against all standard foreground/background combinations.",
  },
  {
    heading: "Scalable Text",
    body: "All text is sized using relative units and can be increased up to 200% using your browser's zoom controls without loss of content or functionality.",
  },
  {
    heading: "Descriptive Links",
    body: 'Link text is written to be meaningful out of context — no “click here” or “read more” without surrounding context — so users navigating by links alone understand their destination.',
  },
  {
    heading: "Form Labels and Error Messages",
    body: "Every form input has a programmatically associated label. Validation errors are described in plain language and linked to the specific field that needs attention.",
  },
];

export default function AccessibilityPage() {
  return (
    <main className="bg-white">
      <div className="container-page max-w-3xl py-20 md:py-28">
        {/* Header */}
        <div className="mb-12 border-b border-gray-200 pb-10">
          <p className="caption mb-3 text-teal">Commitment</p>
          <h1 className="text-4xl font-bold tracking-tight text-navy md:text-5xl">
            Accessibility Statement
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        {/* Intro */}
        <div className="prose prose-gray max-w-none prose-headings:font-semibold prose-headings:text-navy prose-a:text-teal prose-a:no-underline hover:prose-a:underline">
          <p>
            {PRACTICE.name} is committed to ensuring that our website and our
            physical office are accessible and welcoming to everyone — including
            people with disabilities. We believe that access to dental care and
            the information needed to make care decisions is a right, not a
            privilege.
          </p>

          <h2>Our Standard</h2>
          <p>
            We aim to conform to the{" "}
            <strong>
              Web Content Accessibility Guidelines (WCAG) 2.1, Level AA
            </strong>{" "}
            published by the World Wide Web Consortium (W3C). These guidelines
            explain how to make web content more accessible to people with a
            wide range of disabilities, including visual, auditory, motor, and
            cognitive impairments.
          </p>

          <h2>What We Have Done</h2>
        </div>

        {/* Feature grid */}
        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {FEATURES.map(({ heading, body }) => (
            <li
              key={heading}
              className="rounded-lg border border-gray-100 bg-gray-50 p-5"
            >
              <div className="mb-2 flex items-center gap-2">
                <Accessibility
                  className="h-4 w-4 shrink-0 text-teal"
                  aria-hidden="true"
                />
                <h3 className="font-semibold text-navy">{heading}</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">{body}</p>
            </li>
          ))}
        </ul>

        {/* Rest of prose */}
        <div className="prose prose-gray mt-10 max-w-none prose-headings:font-semibold prose-headings:text-navy prose-a:text-teal prose-a:no-underline hover:prose-a:underline">
          <h2>Known Limitations</h2>
          <p>
            While we work hard to keep our website accessible, some third-party
            content or embeds (such as maps or scheduling tools provided by
            external vendors) may not fully meet WCAG 2.1 AA standards. We are
            actively working with those vendors to improve compliance.
          </p>
          <p>
            If you encounter an accessibility barrier anywhere on our site, we
            want to know about it so we can fix it as quickly as possible.
          </p>

          <h2>Physical Office Accessibility</h2>
          <p>Our Lodi office is designed to be physically accessible:</p>
          <ul>
            <li>Wheelchair-accessible entrance, restrooms, and treatment rooms.</li>
            <li>Dedicated accessible parking spaces directly adjacent to the entrance.</li>
            <li>Low reception counters and alternative check-in options for patients who prefer to remain seated.</li>
            <li>Written materials available in large print upon request.</li>
            <li>Interpreter services available — please give us at least 24 hours notice.</li>
          </ul>

          <h2>Feedback and Contact</h2>
          <p>
            We welcome your feedback on the accessibility of this website or our
            office. If you experience any difficulty accessing content, encounter
            a barrier, or need an accommodation not listed here, please reach out
            — we will respond within two business days.
          </p>
        </div>

        {/* Contact cards */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href={PRACTICE.phoneHref}
            className="flex items-center gap-3 rounded-lg border border-teal/30 bg-teal/5 px-5 py-4 text-sm font-medium text-navy transition-colors hover:bg-teal/10"
          >
            <Phone className="h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
            <div>
              <p className="text-xs text-gray-500">Call us</p>
              <p>{PRACTICE.phone}</p>
            </div>
          </a>
          <a
            href={`mailto:${PRACTICE.email}`}
            className="flex items-center gap-3 rounded-lg border border-teal/30 bg-teal/5 px-5 py-4 text-sm font-medium text-navy transition-colors hover:bg-teal/10"
          >
            <Mail className="h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
            <div>
              <p className="text-xs text-gray-500">Email us</p>
              <p>{PRACTICE.email}</p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
