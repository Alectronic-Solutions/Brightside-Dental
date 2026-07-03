import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { PRACTICE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

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
        <p className="mb-4 text-warmgray">
          The content published on this website, including descriptions of
          dental services, educational articles, team biographies, and patient
          resources, is provided for general informational purposes only. It
          does not constitute professional dental or medical advice, diagnosis,
          or treatment.
        </p>
        <div className="rounded-lg border border-teal/20 bg-teal-light px-5 py-4 text-sm text-teal-dark">
          <strong>Important:</strong> Never disregard professional dental advice
          or delay seeking care because of something you read on this website.
          If you are experiencing a dental emergency, call our office at{" "}
          <a href={PRACTICE.phoneHref} className="font-semibold underline underline-offset-2">
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
      <p className="text-warmgray">
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
        <p className="mb-4 text-warmgray">
          All content on this website, including text, photographs, graphics,
          logos, and the overall design, is the property of {PRACTICE.name} or
          its licensors and is protected by United States copyright, trademark,
          and other intellectual property laws.
        </p>
        <p className="text-warmgray">
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
        <p className="mb-4 text-warmgray">
          When using our website, you agree not to:
        </p>
        <ul className="space-y-2 text-warmgray">
          {[
            "Use the site in any way that violates applicable local, state, national, or international laws or regulations.",
            "Transmit any unsolicited or unauthorized advertising or promotional material.",
            "Attempt to gain unauthorized access to any portion of the website, our servers, or any connected systems.",
            "Submit false, misleading, or fraudulent information through any form on this site.",
            "Use automated tools such as bots, scrapers, or crawlers to harvest content or data without our express written permission.",
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
    number: "05",
    title: "Appointment Requests and Forms",
    content: (
      <>
        <p className="mb-4 text-warmgray">
          Submitting an appointment request or contact form on this website
          does not guarantee an appointment. All appointments are subject to
          availability and confirmation by our office. We will contact you
          using the information you provide to confirm or discuss scheduling.
        </p>
        <p className="text-warmgray">
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
      <p className="text-warmgray">
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
        <p className="mb-4 text-warmgray">
          This website and its content are provided on an &ldquo;as is&rdquo;
          and &ldquo;as available&rdquo; basis without warranties of any kind,
          either express or implied. To the fullest extent permitted by law,{" "}
          {PRACTICE.name} disclaims all warranties, including but not limited
          to implied warranties of merchantability, fitness for a particular
          purpose, and non-infringement.
        </p>
        <p className="text-warmgray">
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
      <p className="text-warmgray">
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
      <p className="text-warmgray">
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
      <p className="text-warmgray">
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
    <main>
      <PageHero
        label="Legal"
        title="Terms of Use"
        subtitle={`Effective ${LAST_UPDATED}. By using our website you agree to these Terms. Please read them carefully before proceeding.`}
        bgImage={{ src: IMAGES.office.reception.src, alt: IMAGES.office.reception.alt }}
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
                <FileText className="h-5 w-5 text-teal" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="mb-1 text-lg font-semibold text-navy">
                  Questions About These Terms?
                </h2>
                <p className="mb-6 text-sm text-warmgray">
                  We are happy to clarify anything. Reach out to us directly.
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
