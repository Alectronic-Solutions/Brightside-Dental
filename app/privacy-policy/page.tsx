import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { PRACTICE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Demo privacy and HIPAA-readiness information for Brightside Dental.",
  alternates: { canonical: "/privacy-policy" },
};

const LAST_UPDATED = "June 1, 2025";

const SECTIONS = [
  {
    number: "00",
    title: "Demo Site & HIPAA Readiness",
    content: (
      <div className="rounded-lg border border-teal/20 bg-teal/5 px-5 py-4 text-warmgray">
        <p>
          This is a demonstration website. Its appointment form does not transmit,
          store, or create patient records, and visitors should not enter protected
          health information (PHI), insurance details, or other sensitive data.
        </p>
        <p className="mt-3">
          Before a live launch, Brightside Dental would need a HIPAA-compliant intake
          and patient-portal vendor, a signed Business Associate Agreement where
          required, access controls, an incident-response process, and a finalized
          Notice of Privacy Practices reviewed by qualified counsel.
        </p>
      </div>
    ),
  },
  {
    number: "01",
    title: "Information We Collect",
    content: (
      <>
        <p className="mb-4 text-warmgray">
          We collect information you provide directly and certain data gathered
          automatically when you use our website.
        </p>
        <h4 className="mb-2 font-semibold text-navy">
          Information You Provide Directly
        </h4>
        <ul className="mb-5 space-y-2 text-warmgray">
          {[
            { label: "Contact information", desc: "name, email address, phone number, and mailing address." },
            { label: "Appointment requests", desc: "preferred date and time, service requested, and insurance carrier." },
            { label: "Patient forms", desc: "health history, dental history, and insurance information submitted through our new-patient intake process." },
            { label: "Communications", desc: "messages sent to us via our contact form, email, or phone." },
          ].map(({ label, desc }) => (
            <li key={label} className="flex gap-2">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
              <span>
                <strong className="text-charcoal">{label}:</strong>{" "}
                {desc}
              </span>
            </li>
          ))}
        </ul>
        <h4 className="mb-2 font-semibold text-navy">
          Information Collected Automatically
        </h4>
        <p className="text-warmgray">
          When you visit our website, our hosting provider may automatically
          collect certain technical data including your IP address, browser
          type, referring URL, pages visited, and the date and time of your
          visit. This data is used in aggregate to understand how visitors use
          our site and to improve performance.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "How We Use Your Information",
    content: (
      <>
        <p className="mb-4 text-warmgray">
          We use the information we collect to provide and improve our services.
          Specifically, we use it to:
        </p>
        <ul className="mb-5 space-y-2 text-warmgray">
          {[
            "Schedule and confirm appointments.",
            "Communicate treatment plans, reminders, and follow-up care.",
            "Process and verify dental insurance benefits.",
            "Send appointment reminders and recall notices.",
            "Respond to questions and requests submitted through our website.",
            "Comply with applicable laws, including HIPAA and California dental board regulations.",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="rounded-lg border border-teal/20 bg-teal/5 px-5 py-4 text-sm text-charcoal">
          We do <strong>not</strong> sell, rent, or trade your personal
          information to third parties for marketing purposes.
        </div>
      </>
    ),
  },
  {
    number: "03",
    title: "HIPAA Notice of Privacy Practices",
    content: (
      <>
        <p className="mb-4 text-warmgray">
          As a dental practice, we are a covered entity under the Health
          Insurance Portability and Accountability Act (HIPAA). Your protected
          health information (PHI) is governed by our{" "}
          <strong className="text-charcoal">Notice of Privacy Practices</strong>
          , provided to all patients at their first visit and available at our
          front desk on request.
        </p>
        <ul className="space-y-2 text-warmgray">
          {[
            "We use and disclose PHI for treatment, payment, and health care operations without your authorization.",
            "We will obtain your written authorization before using PHI for marketing or research.",
            "You have the right to access, amend, and receive an accounting of disclosures of your PHI.",
            "You may file a complaint with us or with the U.S. Department of Health and Human Services if you believe your rights have been violated.",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    number: "04",
    title: "Cookies and Tracking",
    content: (
      <>
        <p className="mb-4 text-warmgray">
          Our website may use cookies, which are small text files stored on
          your device, to remember your preferences and analyze site traffic.
          You can disable cookies through your browser settings; however, some
          features of our site may not function as intended if you do.
        </p>
        <p className="text-warmgray">
          We do not use third-party advertising cookies or cross-site tracking
          technologies.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "Third-Party Service Providers",
    content: (
      <>
        <p className="mb-4 text-warmgray">
          We work with trusted vendors who help us operate our website and
          practice, including:
        </p>
        <ul className="mb-5 space-y-2 text-warmgray">
          {[
            { label: "Practice management software", desc: "for scheduling, charting, and billing." },
            { label: "Web hosting", desc: "for serving this website." },
            { label: "Payment processors", desc: "for collecting co-pays and balances." },
          ].map(({ label, desc }) => (
            <li key={label} className="flex gap-2">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
              <span>
                <strong className="text-charcoal">{label}:</strong>{" "}{desc}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-warmgray">
          These providers are contractually bound to use your information only
          as necessary to provide services to us and are prohibited from using
          it for their own purposes.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Data Security",
    content: (
      <p className="text-warmgray">
        We implement administrative, technical, and physical safeguards to
        protect your information from unauthorized access, use, or disclosure.
        Our office systems are encrypted, password-protected, and accessible
        only to authorized team members. Despite these measures, no
        transmission over the internet is 100% secure and we cannot guarantee
        absolute security.
      </p>
    ),
  },
  {
    number: "07",
    title: "California Privacy Rights (CCPA / CPRA)",
    content: (
      <>
        <p className="mb-4 text-warmgray">
          If you are a California resident, you have the right to:
        </p>
        <ul className="mb-5 space-y-2 text-warmgray">
          {[
            "Know what personal information we collect, use, disclose, or sell.",
            "Request deletion of your personal information.",
            "Opt out of the sale of personal information. We do not sell personal information.",
            "Non-discrimination for exercising your CCPA rights.",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-warmgray">
          To submit a request, contact us at{" "}
          <a href={`mailto:${PRACTICE.email}`} className="font-medium text-teal hover:underline">
            {PRACTICE.email}
          </a>{" "}
          or call{" "}
          <a href={PRACTICE.phoneHref} className="font-medium text-teal hover:underline">
            {PRACTICE.phone}
          </a>
          . We will respond within 45 days.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "Children's Privacy",
    content: (
      <p className="text-warmgray">
        Our website is not directed to children under 13, and we do not
        knowingly collect personal information from children through our
        website. Patient health information for minors is handled through our
        standard HIPAA-compliant processes with parental or guardian consent.
      </p>
    ),
  },
  {
    number: "09",
    title: "Links to Third-Party Websites",
    content: (
      <p className="text-warmgray">
        Our website may contain links to third-party websites such as Google
        Maps, insurance carrier portals, or dental association resources. We
        are not responsible for the privacy practices of those sites and
        encourage you to review their policies before submitting any
        information.
      </p>
    ),
  },
  {
    number: "10",
    title: "Changes to This Policy",
    content: (
      <p className="text-warmgray">
        We may update this Privacy Policy periodically. When we do, we will
        revise the effective date shown at the top of this page. We encourage
        you to review this page whenever you visit our site.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        subtitle={`Effective ${LAST_UPDATED}. We are committed to protecting your privacy and handling your information with care.`}
        bgImage={{ src: IMAGES.office.consultation.src, alt: IMAGES.office.consultation.alt }}
      />

      <div className="bg-white">
        <div className="container-page max-w-4xl py-14 md:py-20">
          <div className="space-y-0">
            {SECTIONS.map(({ number, title, content }) => (
              <div
                key={number}
                className="grid gap-4 border-b border-subtle py-10 sm:gap-6 md:grid-cols-[4rem_1fr]"
              >
                <div>
                  <span className="font-mono text-xl font-bold text-teal/30 sm:text-2xl">
                    {number}
                  </span>
                </div>
                <div>
                  <h2 className="mb-4 text-lg font-semibold text-navy sm:text-xl">
                    {title}
                  </h2>
                  {content}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-subtle bg-offwhite p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-teal/10">
                <ShieldCheck className="h-5 w-5 text-teal" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="mb-1 text-lg font-semibold text-navy">
                  Questions or Concerns?
                </h2>
                <p className="mb-6 text-sm text-warmgray">
                  If you have any questions about this Privacy Policy or how we
                  handle your information, please reach out directly.
                </p>
                <div className="grid gap-4 text-sm text-charcoal sm:grid-cols-2">
                  <div>
                    <p className="font-semibold text-navy">{PRACTICE.name}</p>
                    <p>{PRACTICE.addressLine1}</p>
                    <p>{PRACTICE.addressLine2}</p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      Phone:{" "}
                      <a href={PRACTICE.phoneHref} className="font-medium text-teal hover:underline">
                        {PRACTICE.phone}
                      </a>
                    </p>
                    <p>
                      Email:{" "}
                      <a href={`mailto:${PRACTICE.email}`} className="font-medium text-teal hover:underline">
                        {PRACTICE.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
