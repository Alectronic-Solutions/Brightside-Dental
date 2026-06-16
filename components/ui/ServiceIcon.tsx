import { Anchor, Smile, Sparkles, Zap, type LucideProps } from "lucide-react";
import type { ServiceIcon as ServiceIconName } from "@/lib/constants";

/**
 * Lucide doesn't ship a literal "tooth" glyph, so we provide a clean custom
 * tooth SVG and map the rest of the service icons to Lucide components.
 */
function ToothIcon(props: LucideProps) {
  const { size = 24, color = "currentColor", strokeWidth = 1.75, ...rest } =
    props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M12 5.5c-1.6-1.6-3.6-2.3-5.2-1.6C5 4.6 4 6.5 4 9c0 2.3.5 3.6 1.1 5.6.4 1.4.7 3 .9 4.5.2 1.4.9 2.2 1.7 2.2.9 0 1.3-.9 1.6-2.4.3-1.6.6-3.1 1.7-3.1s1.4 1.5 1.7 3.1c.3 1.5.7 2.4 1.6 2.4.8 0 1.5-.8 1.7-2.2.2-1.5.5-3.1.9-4.5.6-2 1.1-3.3 1.1-5.6 0-2.5-1-4.4-2.8-5.1-1.6-.7-3.6 0-5.2 1.6Z" />
    </svg>
  );
}

const MAP = {
  tooth: ToothIcon,
  sparkles: Sparkles,
  anchor: Anchor,
  smile: Smile,
  zap: Zap,
} as const;

export function ServiceIcon({
  name,
  ...props
}: { name: ServiceIconName } & LucideProps) {
  const Icon = MAP[name];
  return <Icon {...props} />;
}
