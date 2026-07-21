"use client";

import { Progress as ProgressPrimitive } from "radix-ui";
import { cn } from "../lib/utils";

/**
 * Determinate progress, for waits where the proportion done is known.
 *
 * If you cannot compute a real percentage, do not fake one. Use Spinner,
 * which promises less and therefore cannot mislead.
 */

export interface ProgressProps
  extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  /** 0 to 100. */
  value: number;
  /** Describes what is progressing. Required, since a bar alone says nothing. */
  label: string;
  /** Shows the percentage as text beside the label. */
  showValue?: boolean;
}

export function Progress({
  value,
  label,
  showValue = false,
  className,
  ...props
}: ProgressProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div className={cn("w-full", className)}>
      <div className="mb-1.5 flex items-baseline justify-between gap-4">
        <span className="text-[var(--text-body-xs-size)] text-[var(--color-body)]">
          {label}
        </span>
        {showValue ? (
          <span className="text-[var(--text-body-xs-size)] tabular-nums text-[var(--color-muted)]">
            {Math.round(clamped)}%
          </span>
        ) : null}
      </div>

      <ProgressPrimitive.Root
        value={clamped}
        aria-label={label}
        className="relative h-1.5 w-full overflow-hidden rounded-[var(--radius-full)] bg-[var(--color-active)]"
        {...props}
      >
        <ProgressPrimitive.Indicator
          className="h-full w-full bg-[var(--color-accent)] transition-transform duration-300 motion-reduce:transition-none"
          style={{ transform: "translateX(-" + (100 - clamped) + "%)" }}
        />
      </ProgressPrimitive.Root>
    </div>
  );
}
