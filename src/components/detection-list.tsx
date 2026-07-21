"use client";

import { DetectionBadge, type DetectionLayer } from "./detection-badge";
import { ReviewStatus, type ReviewStatusValue } from "./review-status";
import { cn } from "../lib/utils";

/**
 * Detections grouped by area, for review beside a map.
 *
 * Granularity is a prop rather than a state, so district and zone class are
 * levels the same list renders at rather than modes it switches between. That
 * keeps the row identical whichever level is in view.
 */

export const DETECTION_LEVELS = ["district", "zone-a", "zone-b"] as const;
export type DetectionLevel = (typeof DETECTION_LEVELS)[number];

const LEVEL_LABELS: Record<DetectionLevel, string> = {
  district: "District",
  "zone-a": "Zone Class A",
  "zone-b": "Zone Class B",
};

export interface Detection {
  id: string;
  /** What was detected, shown as the row title. */
  label: string;
  layer: DetectionLayer;
  status: ReviewStatusValue;
  /** Model score, 0 to 1. Shown as a percentage. */
  confidence?: number;
}

export interface DetectionGroup {
  id: string;
  /** The area name at whichever level is in view. */
  name: string;
  detections: Detection[];
}

export interface DetectionListProps {
  groups: DetectionGroup[];
  /** Which level the group names refer to. Named in the group heading. */
  level?: DetectionLevel;
  /** The row currently shown on the map. */
  selectedId?: string;
  onSelect?: (id: string) => void;
  className?: string;
}

export function DetectionList({
  groups,
  level = "district",
  selectedId,
  onSelect,
  className,
}: DetectionListProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      {groups.map((group) => (
        <section key={group.id}>
          <h3
            className={cn(
              "sticky top-0 z-10 m-0 flex items-baseline gap-2 border-b border-[var(--color-border-subtle)]",
              "bg-[var(--color-panel)] px-3 py-2"
            )}
          >
            <span className="text-[var(--text-body-sm-size)] font-medium text-[var(--color-fg)]">
              {group.name}
            </span>
            <span className="text-[var(--text-body-xs-size)] font-normal text-[var(--color-muted)]">
              {LEVEL_LABELS[level]}, {group.detections.length}
            </span>
          </h3>

          <ul className="m-0 flex list-none flex-col p-0">
            {group.detections.map((detection) => {
              const selected = detection.id === selectedId;
              return (
                <li key={detection.id}>
                  <button
                    type="button"
                    // Selection is a pressed state, not a link. The row shows
                    // the detection on the map rather than navigating away.
                    aria-pressed={selected}
                    onClick={() => onSelect?.(detection.id)}
                    className={cn(
                      "flex w-full items-center gap-3 border-b border-[var(--color-border-subtle)] px-3 py-2.5 text-left transition-colors",
                      "hover:bg-[var(--color-hover)]",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted)] focus-visible:ring-inset",
                      selected && "bg-[var(--color-active)]"
                    )}
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[var(--text-body-sm-size)] text-[var(--color-fg)]">
                        {detection.label}
                      </span>
                      <span className="mt-1 flex items-center gap-1.5">
                        <DetectionBadge layer={detection.layer} />
                        <ReviewStatus status={detection.status} />
                      </span>
                    </span>

                    {typeof detection.confidence === "number" ? (
                      <span className="shrink-0 text-[var(--text-body-xs-size)] tabular-nums text-[var(--color-muted)]">
                        {Math.round(detection.confidence * 100)}%
                      </span>
                    ) : null}
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
