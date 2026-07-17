"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/cn";
import { IMAGES } from "@/lib/images";

const OFFICE_PHOTOS = [
  { label: "Reception", image: IMAGES.office.reception, h: "h-52" },
  { label: "Treatment Room", image: IMAGES.office.treatmentRoom, h: "h-68" },
  { label: "Consultation Suite", image: IMAGES.office.consultation, h: "h-60" },
  { label: "Modern Equipment", image: IMAGES.office.equipment, h: "h-48" },
  { label: "Patient Lounge", image: IMAGES.office.waiting, h: "h-64" },
  { label: "Front Entrance", image: IMAGES.office.exterior, h: "h-52" },
  { label: "Smile Results", image: IMAGES.office.smile1, h: "h-56" },
  { label: "Happy Patients", image: IMAGES.office.smile2, h: "h-60" },
] as const;

const TEAM_PHOTOS = [
  { label: "Dr. Angela Chen, Lead Dentist and Founder", image: IMAGES.team.drChen },
  { label: "Maria Reyes, Lead Dental Hygienist", image: IMAGES.team.mariaReyes },
  { label: "Jordan Tran, Patient Care Coordinator", image: IMAGES.team.jordanTran },
] as const;

type Category = "office" | "team";

const TABS: { id: Category; label: string }[] = [
  { id: "office", label: "Office" },
  { id: "team", label: "Team" },
];

export function GalleryGrid() {
  const [active, setActive] = useState<Category>("office");

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter gallery by category">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            aria-pressed={active === tab.id}
            onClick={() => setActive(tab.id)}
            className={cn(
              "rounded-md border-hair px-4 py-2 text-sm font-medium transition-colors",
              active === tab.id
                ? "border-teal bg-teal text-white"
                : "border-subtle bg-white text-warmgray hover:border-teal/40 hover:text-teal-dark",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {active === "office" ? (
        <AnimatedSection
          key="office"
          className="mt-8 columns-2 gap-4 md:columns-4 [&>*]:mb-4"
        >
          {OFFICE_PHOTOS.map((item) => (
            <div
              key={item.label}
              className={`relative ${item.h} break-inside-avoid overflow-hidden rounded-xl border-hair border-subtle`}
            >
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/75 to-transparent p-3 pt-8">
                <span className="block text-xs font-medium text-white/90">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </AnimatedSection>
      ) : (
        <AnimatedSection key="team" className="mt-8 grid gap-6 sm:grid-cols-3">
          {TEAM_PHOTOS.map((member) => (
            <div
              key={member.label}
              className="relative h-72 overflow-hidden rounded-2xl border-hair border-subtle"
            >
              <Image
                src={member.image.src}
                alt={member.image.alt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent p-4 pt-10">
                <span className="block text-sm font-medium text-white/95">
                  {member.label}
                </span>
              </div>
            </div>
          ))}
        </AnimatedSection>
      )}
    </div>
  );
}
