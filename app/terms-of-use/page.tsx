import type { Metadata } from "next";
import { PRACTICE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms governing your use of the Brightside Dental website. Please read before using our site.",
  alternates: { canonical: "/terms-of-use" },
};

const LAST_UPDATED = "June 1, 2025";

export default function TermsOfUsePage() {
  return (
    <main className="bg-white">
      <div className="container-page max-w-3xl py-20 md:py-28">
        {/* Header */}
        <div className="mb-12 border-b border-gray-200 pb-10">
          <p className="caption mb-3 text-teal">Legal</p>
          <h1 className="text-4xl font-bold tracking-tight text-navy md:text-5xl">
            Terms of Use
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        {/* Body */}
        <div className="prose prose-gray max-w-none prose-headings:font-semibold prose-headings:text-navy prose-a:text-teal prose-a:no-underline hover:prose-a:underline">
          <p>
            Please read these Terms of Use (&ldquo;Terms&rdquo;) carefully
            before using the website at{" "}
            <a href="https://brightsidedental.com">brightsidedental.com</a>{" "}
            operated by {PRACTICE.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;). By accessing or using this website you agree to
            be bound by these Terms. If you do not agree, please do not use our
            site.
          </p>

          <h2>1. Informational Purpose Only</h2>
          <p>
            The content published on this website — including descriptions of
            dental services, educational articles, team biographies, and patient
            resources — is provided for general informational purposes only. It
            does not constitute professional dental or medical advice, diagnosis,
            or treatment.
          </p>
          <p>
            <strong>
              Never disregard professional dental advice or delay seeking care
              because of something you read on this website.
            </strong>{" "}
            If you are experiencing a dental emergency, call our office at{" "}
            <a href={PRACTICE.phoneHref}>{PRACTICE.phone}</a> or go to your
            nearest emergency room.
          </p>

          <h2>2. No Doctor–Patient Relationship</h2>
          <p>
            Use of this website, submission of a contact form, or exchange of
            information via email does not create a doctor–patient relationship
            between you and {PRACTICE.name} or any of our staff. A
            doctor–patient relationship is established only after an in-person
            examination and our explicit agreement to provide care.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            All content on this website — including text, photographs, graphics,
            logos, and the overall &ldquo;look and feel&rdquo; — is the property of{" "}
            {PRACTICE.name} or its licensors and is protected by United States
            copyright, trademark, and other intellectual property laws.
          </p>
          <p>
            You may view, download, and print pages from this website for your
            own personal, non-commercial use, provided you do not modify the
            content and retain all copyright and proprietary notices. Any other
            use — including reproduction, distribution, modification, or
            commercial exploitation — requires our prior written consent.
          </p>

          <h2>4. Acceptable Use</h2>
          <p>When using our website, you agree not to:</p>
          <ul>
            <li>
              Use the site in any way that violates applicable local, state,
              national, or international laws or regulations.
            </li>
            <li>
              Transmit any unsolicited or unauthorized advertising or promotional
              material.
            </li>
            <li>
              Attempt to gain unauthorized access to any portion of the website,
              our servers, or any connected systems.
            </li>
            <li>
              Submit false, misleading, or fraudulent information through any
              form on this site.
            </li>
            <li>
              Use automated tools (bots, scrapers, crawlers) to harvest content
              or data without our express written permission.
            </li>
          </ul>

          <h2>5. Appointment Requests and Forms</h2>
          <p>
            Submitting an appointment request or contact form on this website
            does not guarantee an appointment. All appointments are subject to
            availability and confirmation by our office. We will contact you
            using the information you provide to confirm or discuss scheduling.
          </p>
          <p>
            Please do not submit confidential health information through the
            general contact form. For sensitive health-related communications,
            contact us directly by phone.
          </p>

          <h2>6. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites for your
            convenience. We do not endorse, control, or assume responsibility for
            the content, privacy practices, or accuracy of any linked site. Your
            use of third-party websites is at your own risk and subject to their
            own terms and policies.
          </p>

          <h2>7. Disclaimer of Warranties</h2>
          <p>
            This website and its content are provided on an &ldquo;as is&rdquo;
            and &ldquo;as available&rdquo; basis without warranties of any kind,
            either express or implied. To the fullest extent permitted by law, {PRACTICE.name}{" "}
            disclaims all warranties, including but not limited to implied
            warranties of merchantability, fitness for a particular purpose, and
            non-infringement.
          </p>
          <p>
            We do not warrant that the website will be uninterrupted, error-free,
            or free of viruses or other harmful components.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law,{" "}
            {PRACTICE.name} and its staff, agents, and affiliates will not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages arising out of or related to your use of (or
            inability to use) this website or its content, even if we have been
            advised of the possibility of such damages.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws
            of the State of California, without regard to its conflict-of-law
            provisions. Any dispute arising under these Terms will be resolved
            exclusively in the state or federal courts located in San Joaquin
            County, California.
          </p>

          <h2>10. Changes to These Terms</h2>
          <p>
            We reserve the right to update these Terms at any time. When we do,
            we will update the &ldquo;Last updated&rdquo; date above. Continued use of the
            website after any changes constitutes your acceptance of the revised
            Terms.
          </p>

          <h2>11. Contact</h2>
          <p>
            Questions about these Terms? Contact us:
          </p>
          <address className="not-italic">
            <strong>{PRACTICE.name}</strong>
            <br />
            {PRACTICE.addressLine1}
            <br />
            {PRACTICE.addressLine2}
            <br />
            Phone: <a href={PRACTICE.phoneHref}>{PRACTICE.phone}</a>
            <br />
            Email:{" "}
            <a href={`mailto:${PRACTICE.email}`}>{PRACTICE.email}</a>
          </address>
        </div>
      </div>
    </main>
  );
}
