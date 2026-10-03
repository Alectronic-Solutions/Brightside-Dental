"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";
import type { BeforeAfterPhotos } from "@/lib/images";

interface BeforeAfterProps {
  beforeLabel: string;
  afterLabel: string;
  photos: BeforeAfterPhotos;
  sizes?: string;
}

/**
 * Before/after reveal slider. The "after" photo is clipped by a draggable
 * handle using clip-path. Both photos are pre-cropped to the same 16:10
 * framing so the teeth line up across the seam.
 */
export function BeforeAfter({
  beforeLabel,
  afterLabel,
  photos,
  sizes = "(min-width: 1024px) 720px, 100vw",
}: BeforeAfterProps) {
  const [pos, setPos] = useState(50); // percent revealed
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.currentTarget as Element).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) e.preventDefault();
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
    if (e.key === "ArrowDown") setPos((p) => Math.max(0, p - 4));
    if (e.key === "ArrowUp") setPos((p) => Math.min(100, p + 4));
    if (e.key === "Home") setPos(0);
    if (e.key === "End") setPos(100);
  };

  const { credit } = photos;

  return (
    <figure>
      <div
        ref={containerRef}
        className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-2xl border-hair border-subtle bg-charcoal"
      >
        <Image
          src={photos.before}
          alt={beforeLabel}
          fill
          sizes={sizes}
          draggable={false}
          className="pointer-events-none object-cover"
        />

        {/* AFTER: same framing, clipped from the left by the handle. */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
        >
          <Image
            src={photos.after}
            alt={afterLabel}
            fill
            sizes={sizes}
            draggable={false}
            className="pointer-events-none object-cover"
          />
        </div>

        {/* corner tags */}
        <span className="absolute left-3 top-3 rounded-md bg-white/85 px-2.5 py-1 text-xs font-medium text-charcoal backdrop-blur">
          Before
        </span>
        <span className="absolute right-3 top-3 rounded-md bg-teal px-2.5 py-1 text-xs font-medium text-white">
          After
        </span>

        {/* handle */}
        <div
          className="absolute inset-y-0 z-10 w-px bg-white shadow-[0_0_0_0.5px_rgba(0,0,0,0.1)]"
          style={{ left: `${pos}%` }}
        >
          <button
            type="button"
            role="slider"
            aria-label="Drag to compare before and after"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pos)}
            aria-valuetext={`${Math.round(pos)}% before, ${100 - Math.round(pos)}% after`}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            style={{ touchAction: "none" }}
            onKeyDown={onKeyDown}
            className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full border-hair border-subtle bg-white text-teal shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
          >
            <ChevronsLeftRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      {/* Kept below the photo so they never cover the area being compared. */}
      <div className="mt-3 flex justify-center gap-2">
        <button type="button" onClick={() => setPos(100)} className="min-h-11 rounded-md border-hair border-subtle bg-white px-3 text-sm text-charcoal transition-colors hover:border-teal hover:text-teal-dark">Show before</button>
        <button type="button" onClick={() => setPos(0)} className="min-h-11 rounded-md border-hair border-subtle bg-white px-3 text-sm text-charcoal transition-colors hover:border-teal hover:text-teal-dark">Show after</button>
      </div>
      <figcaption className="mt-2 text-center text-xs text-warmgray">
        Representative case photo
        {credit.author ? ` by ${credit.author}` : ""} via{" "}
        <a
          href={credit.href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-teal-dark"
        >
          Wikimedia Commons
        </a>
        , {credit.license}
      </figcaption>
    </figure>
  );
}
