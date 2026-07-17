import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Testimonial } from "@/lib/testimonials";

export const GoogleG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

export const GoogleStars = ({ count = 5 }: { count?: number }) => (
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

export function ReviewCard({ t }: { t: Testimonial }) {
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
