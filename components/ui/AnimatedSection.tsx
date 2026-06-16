"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ElementType, ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

interface AnimatedSectionProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  children: ReactNode;
  /** delay before this element animates in */
  delay?: number;
  /** vertical travel distance */
  y?: number;
  as?: ElementType;
  className?: string;
}

/**
 * Scroll-triggered fade-up wrapper. Animates once when ~15% into view.
 */
export function AnimatedSection({
  children,
  delay = 0,
  y = 24,
  as = "div",
  className,
  ...rest
}: AnimatedSectionProps) {
  const Comp = motion(as as ElementType);
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

/**
 * Stagger container — children using <AnimatedItem> animate in sequence.
 */
export function AnimatedGroup({
  children,
  className,
  stagger = 0.08,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
} & Omit<HTMLMotionProps<"div">, "ref">) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedItem({
  children,
  className,
  y = 24,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  y?: number;
} & Omit<HTMLMotionProps<"div">, "ref">) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: EASE },
        },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
