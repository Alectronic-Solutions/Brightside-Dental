import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { PRACTICE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Brightside Dental collects, uses, and protects your personal and health information in accordance with HIPAA and California law.",
  alternates: { canonical: "/privacy-policy" },
};

const LAST_UPDATED = "June 1, 2025";

const SECTIONS = [
  {
    number: "01",
    title: "Information We Collect",
    content: (
      <>
        <p className="mb-4 text-gray-600">
          We collect information you provide directly and certain data gathered
          automatically when you use our website.
        </p>
        <h4 className="mb-2 font-semibold text-navy">
          Information You Provide Directly
        </h4>
        <ul className="mb-5 space-y-2 text-gray-600">
          <li className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
            <span>
              <strong className="text-gray-800">Contact information:</strong>{" "}
              name, email address, phone number, and mailing address.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
            <span>
              <strong className="text-gray-800">Appointment requests:</strong>{" "}
              preferred date and time, service requested, and insurance carrier.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
            <span>
              <strong className="text-gray-800">Patient forms:</strong> health
              history, dental history, and insurance information submitted
              through our new-patient intake process.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
            <span>
              <strong className="text-gray-800">Communications:</strong>{" "}
              messages sent to us via our contact form, email, or phone.
            </span>
          </li>
        </ul>
        <h4 className="mb-2 font-semibold text-navy">
          Information Collected Automatically
        </h4>
        <p className="text-gray-600">
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
        <p className="mb-4 text-gray-600">
          We use the information we collect to provide and improve our services.
          Specifically, we use it to:
        </p>
        <ul className="mb-5 space-y-2 text-gray-600">
          {[
            "Schedule and confirm appointments.",
            "Communicate treatment plans, reminders, and follow-up care.",
            "Process and verify dental insurance benefits.",
            "Send appointment reminders and recall notices.",
            "Respond to questions and requests submitted through our website.",
            "Comply with applicable laws, including HIPAA and California dental board regulations.",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="rounded-lg border border-teal/20 bg-teal/5 px-5 py-4 text-sm text-gray-700">
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
        <p className="mb-4 text-gray-600">
          As a dental practice, we are a covered entity under the Health
          Insurance Portability and Accountability Act (HIPAA). Your protected
          health information (PHI) is governed by our{" "}
          <strong className="text-gray-800">Notice of Privacy Practices</strong>
          , which is provided to all patients at their first visit and available
          at our front desk on request.
        </p>
        <ul className="space-y-2 text-gray-600">
          {[
            "We use and disclose PHI for treatment, payment, and health care operations without your authorization.",
            "We will obtain your written authorization before using PHI for marketing or research.",
            "You have the right to access, amend, and receive an accounting of disclosures of your PHI.",
            "You may file a complaint with us or with the U.S. Department of Health and Human Services if you believe your rights have been violated.",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
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
        <p className="mb-4 text-gray-600">
          Our website may use cookies, which are small text files stored on
          your device, to remember your preferences and analyze site traffic.
          You can disable cookies through your browser settings; however, some
          features of our site may not function as intended if you do.
        </p>
        <p className="text-gray-600">
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
        <p className="mb-4 text-gray-600">
          We work with trusted vendors who help us operate our website and
          practice, including:
        </p>
        <ul className="mb-5 space-y-2 text-gray-600">
          {[
            { label: "Practice management software", desc: "for scheduling, charting, and billing." },
            { label: "Web hosting", desc: "for serving this website." },
            { label: "Payment processors", desc: "for collecting co-pays and balances." },
          ].map(({ label, desc }) => (
            <li key={label} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
              <span>
                <strong className="text-gray-800">{label}</strong> {desc}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-gray-600">
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
      <p className="text-gray-600">
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
        <p className="mb-4 text-gray-600">
          If you are a California resident, you have the right to:
        </p>
        <ul className="mb-5 space-y-2 text-gray-600">
          {[
            "Know what personal information we collect, use, disclose, or sell.",
            "Request deletion of your personal information.",
            "Opt out of the sale of personal information (we do not sell personal information).",
            "Non-discrimination for exercising your CCPA rights.",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-600">
          To submit a request, contact us at{" "}
          <a
            href={`mailto:${PRACTICE.email}`}
            className="font-medium text-teal hover:underline"
          >
            {PRACTICE.email}
          </a>{" "}
          or call{" "}
          <a
            href={PRACTICE.phoneHref}
            className="font-medium text-teal hover:underline"
          >
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
      <p className="text-gray-600">
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
      <p className="text-gray-600">
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
      <p className="text-gray-600">
        We may update this Privacy Policy periodically. When we do, we will
        revise the effective date shown at the top of this page. We encourage
        you to review this page whenever you visit our site to stay informed
        about how we protect your information.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      {/* Page hero */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="container-page max-w-4xl py-16 md:py-20">
          <div className="flex items-start gap-5">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-teal/10">
              <ShieldCheck className="h-6 w-6 text-teal" aria-hidden="true" />
            </div>
            <div>
              <p className="caption mb-2 text-teal">Legal</p>
              <h1 className="text-4xl font-bold tracking-tight text-navy md:text-5xl">
                Privacy Policy
              </h1>
              <p className="mt-3 text-gray-500">
                Effective date: {LAST_UPDATED}
              </p>
            </div>
          </div>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-600">
            {PRACTICE.name} is committed to protecting your privacy. This
            policy explains how we collect, use, and safeguard your information
            when you visit our website or receive care at our practice.
          </p>
        </div>
      </div>

      {/* Sections */}
      <div className="container-page max-w-4xl py-16 md:py-20">
        <div className="space-y-10">
          {SECTIONS.map(({ number, title, content }) => (
            <div
              key={number}
              className="grid gap-6 border-b border-gray-100 pb-10 md:grid-cols-[5rem_1fr]"
            >
              <div className="pt-0.5">
                <span className="font-mono text-2xl font-bold text-teal/30">
                  {number}
                </span>
              </div>
              <div>
                <h2 className="mb-4 text-xl font-semibold text-navy">
                  {title}
                </h2>
                {content}
              </div>
            </div>
          ))}
        </div>

        {/* Contact block */}
        <div className="mt-14 rounded-xl border border-gray-200 bg-gray-50 p-8">
          <h2 className="mb-2 text-xl font-semibold text-navy">
            Questions or Concerns?
          </h2>
          <p className="mb-6 text-gray-600">
            If you have any questions about this Privacy Policy or how we
            handle your information, please reach out to us directly.
          </p>
          <div className="grid gap-2 text-sm text-gray-700 sm:grid-cols-2">
            <div>
              <p className="font-semibold text-navy">{PRACTICE.name}</p>
              <p>{PRACTICE.addressLine1}</p>
              <p>{PRACTICE.addressLine2}</p>
            </div>
            <div className="space-y-1">
              <p>
                Phone:{" "}
                <a
                  href={PRACTICE.phoneHref}
                  className="font-medium text-teal hover:underline"
                >
                  {PRACTICE.phone}
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${PRACTICE.email}`}
                  className="font-medium text-teal hover:underline"
                >
                  {PRACTICE.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
