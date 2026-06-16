import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ServicesStrip } from "@/components/home/ServicesStrip";
import { WhyBrightside } from "@/components/home/WhyBrightside";
import { Testimonials } from "@/components/home/Testimonials";
import { InsuranceStrip } from "@/components/home/InsuranceStrip";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Dentist in Lodi, CA",
  description:
    "Brightside Dental is Lodi's highest-rated dental practice: general, cosmetic, implant, Invisalign, and emergency care. Accepting new patients with same-week appointments.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesStrip />
      <WhyBrightside />
      <Testimonials />
      <InsuranceStrip />
      <CTABanner />
    </>
  );
}
