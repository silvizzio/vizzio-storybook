import { cn } from "../lib/utils";

/**
 * Identifies which of the six detection layers a record belongs to.
 *
 * Layer is a category, not a state. The colours come from the categorical
 * token layer rather than the semantic one, so a layer badge never reads as
 * success or danger.
 */

export const DETECTION_LAYERS = [
  "building",
  "constructions",
  "greenery",
  "lands",
  "road",
  "safety",
] as const;

export type DetectionLayer = (typeof DETECTION_LAYERS)[number];

const LABELS: Record<DetectionLayer, string> = {
  building: "Building",
  constructions: "Constructions",
  greenery: "Greenery",
  lands: "Lands",
  road: "Road",
  safety: "Safety",
};

export interface DetectionBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  layer: DetectionLayer;
  /** Overrides the default label. The layer still drives the colour. */
  children?: React.ReactNode;
}

export function DetectionBadge({
  layer,
  className,
  children,
  ...props
}: DetectionBadgeProps) {
  return (
    <span
      data-layer={layer}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[var(--radius-control)] border px-2 py-0.5",
        "text-[var(--text-body-xs-size)] font-medium leading-[var(--text-body-xs-line)]",
        className
      )}
      style={{
        background: "var(--layer-" + layer + "-surface)",
        borderColor: "var(--layer-" + layer + "-border)",
        color: "var(--layer-" + layer + "-fg)",
      }}
      {...props}
    >
      {children ?? LABELS[layer]}
    </span>
  );
}
