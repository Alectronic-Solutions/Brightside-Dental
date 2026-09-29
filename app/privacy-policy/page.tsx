import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Demo Privacy Information",
  description: "How this demonstration website handles form entries and external resources.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero label="Privacy" title="Demo privacy information" subtitle="A sample dental website, with a simulated appointment flow." />
      <section className="container-page max-w-3xl space-y-10 py-16">
        <div>
          <h2 className="text-2xl">Your demo form entries</h2>
          <p className="mt-4">The appointment form runs in your browser. Submitting it does not send an appointment request, deliver an email, or save a patient record. Entries are held temporarily in page memory; the site does not intentionally store them in cookies or browser storage. Use fictional information when trying the form.</p>
        </div>
        <div>
          <h2 className="text-2xl">Hosting and external resources</h2>
          <p className="mt-4">GitHub Pages hosts this demo. Photos, avatars, and the embedded map may load from Unsplash, DiceBear, and OpenStreetMap. Requests to those services can expose technical information such as your IP address and browser details, subject to their own policies. External links, email links, and phone links leave the demo or open another application.</p>
        </div>
        <div>
          <h2 className="text-2xl">Patient privacy in a live practice</h2>
          <p className="mt-4">This demo has no patient portal, medical records, or HIPAA compliance certification. A live practice would need a separately configured secure intake system, appropriate vendor agreements, access controls, and reviewed privacy notices before accepting real patient information.</p>
        </div>
        <div>
          <h2 className="text-2xl">Sample content</h2>
          <p className="mt-4">Practice details, reviews, photographs, and service descriptions illustrate the design. This page describes the demo only and is not a live practice’s Notice of Privacy Practices.</p>
        </div>
      </section>
    </>
  );
}
