import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { PRACTICE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms governing your use of the Brightside Dental website. Please read before using our site.",
  alternates: { canonical: "/terms-of-use" },
};

const LAST_UPDATED = "June 1, 2025";

const SECTIONS = [
  {
    number: "01",
    title: "Informational Purpose Only",
    content: (
      <>
        <p className="mb-4 text-gray-600">
          The content published on this website, including descriptions of
          dental services, educational articles, team biographies, and patient
          resources, is provided for general informational purposes only. It
          does not constitute professional dental or medical advice, diagnosis,
          or treatment.
        </p>
        <div className="rounded-lg border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-900">
          <strong>Important:</strong> Never disregard professional dental advice
          or delay seeking care because of something you read on this website.
          If you are experiencing a dental emergency, call our office at{" "}
          <a
            href={PRACTICE.phoneHref}
            className="font-semibold underline underline-offset-2"
          >
            {PRACTICE.phone}
          </a>{" "}
          or go to your nearest emergency room.
        </div>
      </>
    ),
  },
  {
    number: "02",
    title: "No Doctor-Patient Relationship",
    content: (
      <p className="text-gray-600">
        Use of this website, submission of a contact form, or exchange of
        information via email does not create a doctor-patient relationship
        between you and {PRACTICE.name} or any of our staff. A doctor-patient
        relationship is established only after an in-person examination and our
        explicit agreement to provide care.
      </p>
    ),
  },
  {
    number: "03",
    title: "Intellectual Property",
    content: (
      <>
        <p className="mb-4 text-gray-600">
          All content on this website, including text, photographs, graphics,
          logos, and the overall design, is the property of {PRACTICE.name} or
          its licensors and is protected by United States copyright, trademark,
          and other intellectual property laws.
        </p>
        <p className="text-gray-600">
          You may view, download, and print pages from this website for your
          own personal, non-commercial use, provided you do not modify the
          content and you retain all copyright and proprietary notices. Any
          other use, including reproduction, distribution, modification, or
          commercial exploitation, requires our prior written consent.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "Acceptable Use",
    content: (
      <>
        <p className="mb-4 text-gray-600">
          When using our website, you agree not to:
        </p>
        <ul className="space-y-2 text-gray-600">
          {[
            "Use the site in any way that violates applicable local, state, national, or international laws or regulations.",
            "Transmit any unsolicited or unauthorized advertising or promotional material.",
            "Attempt to gain unauthorized access to any portion of the website, our servers, or any connected systems.",
            "Submit false, misleading, or fraudulent information through any form on this site.",
            "Use automated tools such as bots, scrapers, or crawlers to harvest content or data without our express written permission.",
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
    number: "05",
    title: "Appointment Requests and Forms",
    content: (
      <>
        <p className="mb-4 text-gray-600">
          Submitting an appointment request or contact form on this website
          does not guarantee an appointment. All appointments are subject to
          availability and confirmation by our office. We will contact you
          using the information you provide to confirm or discuss scheduling.
        </p>
        <p className="text-gray-600">
          Please do not submit confidential health information through the
          general contact form. For sensitive health-related communications,
          contact us directly by phone.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Third-Party Links",
    content: (
      <p className="text-gray-600">
        Our website may contain links to third-party websites for your
        convenience. We do not endorse, control, or assume responsibility for
        the content, privacy practices, or accuracy of any linked site. Your
        use of third-party websites is at your own risk and subject to their
        own terms and policies.
      </p>
    ),
  },
  {
    number: "07",
    title: "Disclaimer of Warranties",
    content: (
      <>
        <p className="mb-4 text-gray-600">
          This website and its content are provided on an &ldquo;as is&rdquo;
          and &ldquo;as available&rdquo; basis without warranties of any kind,
          either express or implied. To the fullest extent permitted by law,{" "}
          {PRACTICE.name} disclaims all warranties, including but not limited to
          implied warranties of merchantability, fitness for a particular
          purpose, and non-infringement.
        </p>
        <p className="text-gray-600">
          We do not warrant that the website will be uninterrupted, error-free,
          or free of viruses or other harmful components.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "Limitation of Liability",
    content: (
      <p className="text-gray-600">
        To the maximum extent permitted by applicable law, {PRACTICE.name} and
        its staff, agents, and affiliates will not be liable for any indirect,
        incidental, special, consequential, or punitive damages arising out of
        or related to your use of this website or its content, even if we have
        been advised of the possibility of such damages.
      </p>
    ),
  },
  {
    number: "09",
    title: "Governing Law",
    content: (
      <p className="text-gray-600">
        These Terms are governed by and construed in accordance with the laws
        of the State of California, without regard to its conflict-of-law
        provisions. Any dispute arising under these Terms will be resolved
        exclusively in the state or federal courts located in San Joaquin
        County, California.
      </p>
    ),
  },
  {
    number: "10",
    title: "Changes to These Terms",
    content: (
      <p className="text-gray-600">
        We reserve the right to update these Terms at any time. When we do, we
        will update the effective date shown at the top of this page. Continued
        use of the website after any changes constitutes your acceptance of the
        revised Terms.
      </p>
    ),
  },
];

export default function TermsOfUsePage() {
  return (
    <main className="bg-white">
      {/* Page hero */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="container-page max-w-4xl py-16 md:py-20">
          <div className="flex items-start gap-5">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-teal/10">
              <FileText className="h-6 w-6 text-teal" aria-hidden="true" />
            </div>
            <div>
              <p className="caption mb-2 text-teal">Legal</p>
              <h1 className="text-4xl font-bold tracking-tight text-navy md:text-5xl">
                Terms of Use
              </h1>
              <p className="mt-3 text-gray-500">
                Effective date: {LAST_UPDATED}
              </p>
            </div>
          </div>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-600">
            Please read these Terms of Use carefully before using our website.
            By accessing or using this site you agree to be bound by these
            Terms. If you do not agree, please do not use our site.
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
          <h2 className="mb-2 text-xl font-semibold text-navy">Contact Us</h2>
          <p className="mb-6 text-gray-600">
            Questions about these Terms? We are happy to help.
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
