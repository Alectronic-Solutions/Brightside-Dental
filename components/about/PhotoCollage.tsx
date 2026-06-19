"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/images";

const EASE = [0.22, 1, 0.36, 1] as const;

const PHOTOS = [
  { col: 0, img: IMAGES.office.reception, h: "h-52", delay: 0.3 },
  { col: 0, img: IMAGES.office.waiting, h: "h-36", delay: 0.45 },
  { col: 1, img: IMAGES.office.consultation, h: "h-36", delay: 0.55, cls: "" },
  { col: 1, img: IMAGES.office.smile1, h: "h-52", delay: 0.65, cls: "object-top" },
] as const;

export function PhotoCollage() {
  return (
    <div className="hidden lg:grid lg:grid-cols-2 lg:gap-3">
      <div className="space-y-3">
        {PHOTOS.filter((p) => p.col === 0).map(({ img, h, delay }) => (
          <motion.div
            key={img.src}
            className={`relative ${h} overflow-hidden rounded-2xl`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay }}
          >
            <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="240px" />
          </motion.div>
        ))}
      </div>
      <div className="space-y-3 pt-8">
        {PHOTOS.filter((p) => p.col === 1).map(({ img, h, delay, cls }) => (
          <motion.div
            key={img.src}
            className={`relative ${h} overflow-hidden rounded-2xl`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay }}
          >
            <Image src={img.src} alt={img.alt} fill className={`object-cover ${cls}`} sizes="240px" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
