import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { PRACTICE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Brightside Dental collects, uses, and protects information you share through our website, including appointment requests.",
  alternates: { canonical: "/privacy-policy" },
};

const LAST_UPDATED = "October 2, 2026";

const SECTIONS = [
  {
    number: "01",
    title: "What This Policy Covers",
    content: (
      <p className="text-warmgray">
        This policy explains how {PRACTICE.name} handles information collected
        through this website. Protected health information you share as a
        patient, in the office or through our clinical systems, is covered by
        our separate Notice of Privacy Practices under HIPAA. You can ask for a
        copy at the front desk or by calling {PRACTICE.phone}.
      </p>
    ),
  },
  {
    number: "02",
    title: "Information We Collect",
    content: (
      <>
        <p className="mb-4 text-warmgray">
          We only collect what you choose to send us. When you request an
          appointment or contact us, that can include your name, phone number,
          email address, preferred appointment times, the service you are
          interested in, your insurance provider, and any message you write.
        </p>
        <div className="rounded-lg border border-teal/20 bg-teal-light px-5 py-4 text-sm text-teal-dark">
          <strong>Please keep it brief.</strong> Do not send insurance ID
          numbers, detailed medical history, or other sensitive health details
          through the website form or by email. We will collect what we need
          securely once you are scheduled.
        </div>
      </>
    ),
  },
  {
    number: "03",
    title: "How We Use It",
    content: (
      <p className="text-warmgray">
        We use your information to respond to your request, schedule and
        confirm appointments, check insurance benefits you ask us to verify, and
        send appointment reminders. We do not sell or rent your information,
        and we do not use it for advertising.
      </p>
    ),
  },
  {
    number: "04",
    title: "Who Else Handles It",
    content: (
      <>
        <p className="mb-4 text-warmgray">
          A small number of service providers help us run this website. They
          may only use your information to provide their service to us.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-warmgray">
          <li>
            <strong className="text-charcoal">Form delivery.</strong>{" "}
            Appointment requests are delivered to our office by a form
            processing service, or by your own email provider if the form
            opens your email app.
          </li>
          <li>
            <strong className="text-charcoal">Website hosting.</strong> Our
            host receives standard technical information, such as your IP
            address and browser type, when you load a page.
          </li>
          <li>
            <strong className="text-charcoal">Maps.</strong> The map on our
            contact page is provided by OpenStreetMap, and the directions link
            opens Google Maps. Those services have their own privacy policies.
          </li>
        </ul>
      </>
    ),
  },
  {
    number: "05",
    title: "Cookies and Tracking",
    content: (
      <p className="text-warmgray">
        This website does not use advertising cookies, analytics trackers, or
        tracking pixels. Your browser may store small technical files needed
        for pages to load and work correctly.
      </p>
    ),
  },
  {
    number: "06",
    title: "Your California Privacy Rights",
    content: (
      <p className="text-warmgray">
        California residents may ask what personal information we have
        collected about them through this website, ask us to correct it, or ask
        us to delete it. To make a request, call or email us using the details
        below. We will not treat you differently for making a request.
      </p>
    ),
  },
  {
    number: "07",
    title: "How Long We Keep It",
    content: (
      <p className="text-warmgray">
        Website requests are kept only as long as we need them to respond and
        schedule your care. If you become a patient, your records are kept as
        required by California law.
      </p>
    ),
  },
  {
    number: "08",
    title: "Children",
    content: (
      <p className="text-warmgray">
        This website is meant for adults. Parents or guardians should request
        appointments for children under 18.
      </p>
    ),
  },
  {
    number: "09",
    title: "Changes to This Policy",
    content: (
      <p className="text-warmgray">
        If we change this policy, we will post the new version on this page and
        update the effective date above.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        subtitle={`Effective ${LAST_UPDATED}. How we handle the information you share with us through this website.`}
        bgImage={IMAGES.office.reception.src}
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
                  Privacy Questions or Requests
                </h2>
                <p className="mb-6 text-sm text-warmgray">
                  Contact our office and ask for the privacy contact.
                </p>
                <div className="grid gap-4 text-sm text-charcoal sm:grid-cols-2">
                  <div>
                    <p className="font-semibold text-navy">{PRACTICE.name}</p>
                    <p>{PRACTICE.address}</p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      Phone:{" "}
                      <a href={PRACTICE.phoneHref} className="font-medium text-teal hover:underline">
                        {PRACTICE.phone}
                      </a>
                    </p>
                    <p className="break-all">
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
    </>
  );
}
