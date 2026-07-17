"use client";

import { useCallback, useRef, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";

interface BeforeAfterProps {
  beforeLabel: string;
  afterLabel: string;
}

/**
 * Before/after reveal slider. The "after" panel is clipped by a draggable
 * handle using clip-path. Placeholder visuals (styled boxes) stand in for
 * real clinical photos in this demo.
 */
export function BeforeAfter({ beforeLabel, afterLabel }: BeforeAfterProps) {
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
    (e.target as Element).setPointerCapture?.(e.pointerId);
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
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-2xl border-hair border-subtle"
    >
      {/* BEFORE — neutral gray base. Content pinned to the left third so it
          never collides with the AFTER label near the seam. */}
      <div className="absolute inset-0 flex items-center justify-start bg-gradient-to-br from-[#e9ecef] to-[#d6dbe0] pl-8 sm:pl-12">
        <Placeholder label={beforeLabel} tone="gray" />
      </div>

      {/* AFTER — teal-tinted, clipped from the right. Content pinned to the
          right third for the same reason. */}
      <div
        className="absolute inset-0 flex items-center justify-end bg-gradient-to-br from-teal-light to-[#cdeee9] pr-8 sm:pr-12"
        style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
      >
        <Placeholder label={afterLabel} tone="teal" />
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
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onKeyDown={onKeyDown}
          className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full border-hair border-subtle bg-white text-teal shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
        >
          <ChevronsLeftRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

function Placeholder({
  label,
  tone,
}: {
  label: string;
  tone: "gray" | "teal";
}) {
  return (
    <div className="flex w-24 flex-col items-center gap-3 text-center sm:w-28">
      {/* simple geometric smile glyph */}
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden>
        <rect
          x="10"
          y="22"
          width="44"
          height="20"
          rx="6"
          stroke={tone === "teal" ? "#1E7268" : "#9aa3ad"}
          strokeWidth="1"
        />
        {[18, 26, 34, 42].map((x) => (
          <line
            key={x}
            x1={x}
            y1="22"
            x2={x}
            y2="42"
            stroke={tone === "teal" ? "#1E7268" : "#9aa3ad"}
            strokeWidth="0.5"
          />
        ))}
      </svg>
      <span
        className={
          tone === "teal"
            ? "text-sm font-medium text-teal-dark"
            : "text-sm font-medium text-warmgray"
        }
      >
        {label}
      </span>
    </div>
  );
}
