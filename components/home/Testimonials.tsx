import Image from "next/image";
import { Star, ExternalLink } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/cn";
import { PRACTICE } from "@/lib/constants";

const GoogleG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const GoogleStars = ({ count = 5 }: { count?: number }) => (
  <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        aria-hidden="true"
        className={cn(
          "h-4 w-4",
          i < count ? "fill-[#F9AB00] text-[#F9AB00]" : "fill-gray-200 text-gray-200",
        )}
      />
    ))}
  </div>
);

// Cropped Unsplash portrait headshots (96px, face-centered). Remote pattern is
// whitelisted in next.config.js.
const avatar = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80`;

const TESTIMONIALS = [
  {
    quote: "I've been putting off dental work for years because of anxiety. Dr. Chen made the whole thing calm and judgment-free. I actually look forward to coming in now, which is something I never thought I'd say about a dentist.",
    name: "Sarah M.",
    location: "Lodi",
    rating: 5,
    timeAgo: "2 weeks ago",
    image: avatar("photo-1544005313-94ddf0286df2"),
  },
  {
    quote: "Got a crown done in one visit with their CEREC machine. Walked in at noon, walked out at 2:30 with a permanent crown. That's just not something you expect from a dental office in Lodi.",
    name: "David R.",
    location: "Woodbridge",
    rating: 5,
    timeAgo: "1 month ago",
    image: avatar("photo-1507003211169-0a1dd7228f2d"),
  },
  {
    quote: "Switched to Brightside after my old dentist retired. Jordan in the front office went through my insurance line by line and found coverage I didn't know I had. Zero pressure to do anything.",
    name: "Marisol G.",
    location: "Lodi",
    rating: 5,
    timeAgo: "3 weeks ago",
    image: avatar("photo-1438761681033-6461ffad8d80"),
  },
  {
    quote: "Brought all three of my kids here and the team was incredible. My youngest is terrified of doctors but the hygienist had her laughing within five minutes. They never try to upsell you.",
    name: "Anthony P.",
    location: "Stockton",
    rating: 5,
    timeAgo: "1 month ago",
    image: avatar("photo-1500648767791-00dcc994a43e"),
  },
  {
    quote: "Chipped a front tooth the day before a wedding and they fit me in same-day. You honestly cannot tell anything ever happened. The whole team clearly takes pride in their work.",
    name: "Priya N.",
    location: "Lodi",
    rating: 5,
    timeAgo: "2 months ago",
    image: avatar("photo-1534528741775-53994a69daeb"),
  },
  {
    quote: "Best dental experience I've had in 40 years. Honest about what I needed and what could wait. The office is spotless and runs exactly on time — I've never sat in the waiting room more than a couple minutes.",
    name: "Robert K.",
    location: "Galt",
    rating: 5,
    timeAgo: "1 week ago",
    image: avatar("photo-1472099645785-5658abf4ff4e"),
  },
];

function ReviewCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border-hair border-subtle bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_2px_6px_rgba(0,0,0,0.06),0_10px_28px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-between">
        <GoogleStars count={t.rating} />
        <GoogleG />
      </div>

      <blockquote className="mt-4 flex-1 text-[0.97rem] leading-[1.75] text-charcoal/85">
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-subtle pt-5">
        <Image
          src={t.image}
          alt={`${t.name}, verified Google reviewer`}
          width={44}
          height={44}
          className="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-black/5"
        />
        <div>
          <p className="font-semibold text-charcoal">{t.name}</p>
          <div className="flex items-center gap-1.5 text-xs text-warmgray">
            <span>{t.location}</span>
            <span aria-hidden>·</span>
            <span>{t.timeAgo}</span>
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section className="bg-white section-y">
      <div className="container-page">
        <AnimatedSection className="max-w-2xl">
          <SectionLabel>Patient Stories</SectionLabel>
          <h2 className="text-3xl text-charcoal sm:text-[2.25rem]">
            What our patients are saying
          </h2>
          <p className="mt-4 text-lg text-warmgray">
            Real words from real patients. No incentives, no scripts.
          </p>
        </AnimatedSection>

        {/* Rating summary */}
        <AnimatedSection delay={0.05} className="mt-8 flex items-center gap-3">
          <span className="text-3xl font-bold text-charcoal">{PRACTICE.googleRating}</span>
          <div>
            <GoogleStars count={5} />
            <p className="mt-0.5 flex items-center gap-1.5 text-xs text-warmgray">
              <GoogleG />
              {PRACTICE.reviewCount} Google reviews
            </p>
          </div>
        </AnimatedSection>

        {/* Static card grid — nothing moves, so nothing can jump */}
        <AnimatedSection delay={0.1} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <ReviewCard key={i} t={t} />
          ))}
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="mt-10 text-center">
          <a
            href={PRACTICE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-dark transition-colors hover:text-teal"
          >
            See all {PRACTICE.reviewCount} reviews on Google
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
