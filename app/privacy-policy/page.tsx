import type { Metadata } from "next";
import { PRACTICE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Brightside Dental collects, uses, and protects your personal and health information in accordance with HIPAA and California law.",
  alternates: { canonical: "/privacy-policy" },
};

const LAST_UPDATED = "June 1, 2025";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      <div className="container-page max-w-3xl py-20 md:py-28">
        {/* Header */}
        <div className="mb-12 border-b border-gray-200 pb-10">
          <p className="caption mb-3 text-teal">Legal</p>
          <h1 className="text-4xl font-bold tracking-tight text-navy md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        {/* Body */}
        <div className="prose prose-gray max-w-none prose-headings:font-semibold prose-headings:text-navy prose-a:text-teal prose-a:no-underline hover:prose-a:underline">
          <p>
            Brightside Dental (&ldquo;{PRACTICE.name},&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to
            protecting your privacy. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you visit our
            website or schedule care with our practice.
          </p>

          <h2>1. Information We Collect</h2>
          <h3>Information You Provide Directly</h3>
          <ul>
            <li>
              <strong>Contact information</strong> — name, email address, phone
              number, mailing address.
            </li>
            <li>
              <strong>Appointment requests</strong> — preferred date and time,
              service requested, insurance carrier.
            </li>
            <li>
              <strong>Patient forms</strong> — health history, dental history,
              and insurance information submitted through our new-patient intake
              process.
            </li>
            <li>
              <strong>Communications</strong> — messages sent to us via our
              contact form, email, or phone.
            </li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <p>
            When you visit our website, our hosting provider may automatically
            collect certain technical data, including your IP address, browser
            type, referring URL, pages visited, and the date and time of your
            visit. This data is used in aggregate to understand how visitors use
            our site and to improve performance.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Schedule and confirm appointments.</li>
            <li>Communicate treatment plans, reminders, and follow-up care.</li>
            <li>Process and verify dental insurance benefits.</li>
            <li>Send you appointment reminders and recall notices.</li>
            <li>
              Respond to your questions and requests submitted through our
              website.
            </li>
            <li>
              Comply with applicable laws, including HIPAA and California dental
              board regulations.
            </li>
          </ul>
          <p>
            We do <strong>not</strong> sell, rent, or trade your personal
            information to third parties for marketing purposes.
          </p>

          <h2>3. HIPAA Notice of Privacy Practices</h2>
          <p>
            As a dental practice, we are a covered entity under the Health
            Insurance Portability and Accountability Act (HIPAA). Your protected
            health information (PHI) is governed by our separate{" "}
            <strong>Notice of Privacy Practices</strong>, which is provided to
            all patients at their first visit and available at our front desk on
            request. In brief:
          </p>
          <ul>
            <li>
              We use and disclose PHI for treatment, payment, and health care
              operations without your authorization.
            </li>
            <li>
              We will obtain your written authorization before using PHI for
              marketing or research.
            </li>
            <li>
              You have the right to access, amend, and receive an accounting of
              disclosures of your PHI.
            </li>
            <li>
              You may file a complaint with us or with the U.S. Department of
              Health and Human Services if you believe your rights have been
              violated.
            </li>
          </ul>

          <h2>4. Cookies and Tracking</h2>
          <p>
            Our website may use cookies — small text files stored on your
            device — to remember your preferences and analyze site traffic. You
            can disable cookies through your browser settings; however, some
            features of our site may not function as intended if you do.
          </p>
          <p>
            We do not use third-party advertising cookies or cross-site tracking
            technologies.
          </p>

          <h2>5. Third-Party Service Providers</h2>
          <p>
            We work with trusted vendors who help us operate our website and
            practice, including:
          </p>
          <ul>
            <li>
              <strong>Practice management software</strong> — for scheduling,
              charting, and billing.
            </li>
            <li>
              <strong>Web hosting</strong> — for serving this website.
            </li>
            <li>
              <strong>Payment processors</strong> — for collecting co-pays and
              balances.
            </li>
          </ul>
          <p>
            These providers are contractually bound to use your information only
            as necessary to provide services to us and are prohibited from using
            it for their own purposes.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We implement administrative, technical, and physical safeguards to
            protect your information from unauthorized access, use, or
            disclosure. Our office systems are encrypted, password-protected, and
            accessible only to authorized team members. Despite these measures,
            no transmission over the internet is 100% secure, and we cannot
            guarantee absolute security.
          </p>

          <h2>7. California Privacy Rights (CCPA / CPRA)</h2>
          <p>
            If you are a California resident, you have the right to:
          </p>
          <ul>
            <li>
              Know what personal information we collect, use, disclose, or sell.
            </li>
            <li>Request deletion of your personal information.</li>
            <li>
              Opt out of the sale of personal information (we do not sell
              personal information).
            </li>
            <li>
              Non-discrimination for exercising your CCPA rights.
            </li>
          </ul>
          <p>
            To submit a request, contact us at{" "}
            <a href={`mailto:${PRACTICE.email}`}>{PRACTICE.email}</a> or call{" "}
            <a href={PRACTICE.phoneHref}>{PRACTICE.phone}</a>. We will respond
            within 45 days.
          </p>

          <h2>8. Children&apos;s Privacy</h2>
          <p>
            Our website is not directed to children under 13, and we do not
            knowingly collect personal information from children through our
            website. Patient health information for minors is handled through our
            standard HIPAA-compliant processes with parental or guardian consent.
          </p>

          <h2>9. Links to Third-Party Websites</h2>
          <p>
            Our website may contain links to third-party websites (such as
            Google Maps, insurance carrier portals, or dental association
            resources). We are not responsible for the privacy practices of those
            sites and encourage you to review their policies before submitting
            any information.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. When we do, we will
            revise the &ldquo;Last updated&rdquo; date at the top of this page. We encourage
            you to review this page whenever you visit our site.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy, please
            reach out:
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
            Email: <a href={`mailto:${PRACTICE.email}`}>{PRACTICE.email}</a>
          </address>
        </div>
      </div>
    </main>
  );
}
