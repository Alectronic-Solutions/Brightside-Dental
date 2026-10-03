import Image from "next/image";
import { cn } from "@/lib/cn";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const INSURERS = [
  { name: "Delta Dental", logo: `${BASE_PATH}/logos/delta-dental.svg` },
  { name: "Cigna", logo: `${BASE_PATH}/logos/cigna.svg` },
  { name: "Aetna", logo: `${BASE_PATH}/logos/aetna.svg` },
  { name: "MetLife", logo: `${BASE_PATH}/logos/metlife.svg` },
  { name: "BlueCross BlueShield", logo: `${BASE_PATH}/logos/bluecross.svg` },
  { name: "United Concordia", logo: `${BASE_PATH}/logos/united-concordia.png` },
];

/** Insurer logo badges shared by the home page and the contact page. */
export function InsuranceBadges({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-2", className)}>
      {INSURERS.map(({ name, logo }) => (
        <span
          key={name}
          className="flex h-11 items-center rounded-md border-hair border-subtle bg-offwhite px-3.5 py-2 transition-colors hover:border-teal/40"
        >
          <Image
            src={logo}
            alt={name}
            width={120}
            height={28}
            className="h-6 w-auto object-contain sm:h-7"
          />
        </span>
      ))}
      <span className="rounded-md bg-teal-light px-3.5 py-2 text-sm font-medium text-teal-dark">
        + more
      </span>
    </div>
  );
}
