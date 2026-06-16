import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PRACTICE } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80vh] place-items-center overflow-hidden bg-navy px-6 py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 35%, rgba(45,158,143,0.18), rgba(14,31,61,0) 70%)",
        }}
      />
      <div className="relative max-w-md text-center">
        {/* teal tooth logo mark */}
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-teal/10">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M12 5c-1.6-1.6-3.6-2.3-5.2-1.6C5 4.1 4 6 4 8.5c0 2.3.5 3.6 1.1 5.6.4 1.4.7 3 .9 4.5.2 1.4.9 2.2 1.7 2.2.9 0 1.3-.9 1.6-2.4.3-1.6.6-3.1 1.7-3.1s1.4 1.5 1.7 3.1c.3 1.5.7 2.4 1.6 2.4.8 0 1.5-.8 1.7-2.2.2-1.5.5-3.1.9-4.5C19.5 12.1 20 10.8 20 8.5c0-2.5-1-4.4-2.8-5.1C15.6 2.7 13.6 3.4 12 5Z"
              stroke="#2D9E8F"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <circle cx="16.2" cy="7.6" r="1.4" fill="#2D9E8F" />
          </svg>
        </span>

        <p className="caption mt-8 text-teal-light">Error 404</p>
        <h1 className="display mt-2 text-4xl text-white sm:text-5xl">
          This page took a sick day
        </h1>
        <p className="mt-4 text-lg text-white/70">
          We could not find the page you were looking for, but your smile is
          still our top priority. Let&apos;s get you back on track.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" size="lg">
            Back to Home
          </Button>
          <Button href="/contact" size="lg" variant="outline-white">
            Contact the Office
          </Button>
        </div>

        <p className="mt-8 text-sm text-white/50">
          Need us now? Call{" "}
          <Link
            href={PRACTICE.phoneHref}
            className="font-medium text-teal-light hover:text-white"
          >
            {PRACTICE.phone}
          </Link>
        </p>
      </div>
    </section>
  );
}
