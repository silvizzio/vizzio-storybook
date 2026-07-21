"use client";

import { Slider as SliderPrimitive } from "radix-ui";
import { cn } from "../lib/utils";

/**
 * Choosing a value along a range.
 *
 * A slider trades precision for speed. Use it where approximate is fine and
 * the effect is visible immediately. Where an exact number matters, pair it
 * with a number input or use one instead.
 */

export interface SliderProps
  extends React.ComponentProps<typeof SliderPrimitive.Root> {
  /** Visible label. Required, since a bare track has no accessible name. */
  label: string;
  /** Shows the current value beside the label. */
  showValue?: boolean;
  /** Appended to the displayed value, such as a percent sign. */
  unit?: string;
}

export function Slider({
  label,
  showValue = true,
  unit = "",
  className,
  value,
  defaultValue,
  ...props
}: SliderProps) {
  const current = value ?? defaultValue ?? [0];

  return (
    <div className={cn("w-full", className)}>
      <div className="mb-2 flex items-baseline justify-between gap-4">
        <span className="text-[var(--text-body-sm-size)] text-[var(--color-fg)]">
          {label}
        </span>
        {showValue ? (
          <span className="text-[var(--text-body-xs-size)] tabular-nums text-[var(--color-muted)]">
            {current.join(" to ")}
            {unit}
          </span>
        ) : null}
      </div>

      <SliderPrimitive.Root
        value={value}
        defaultValue={defaultValue}
        aria-label={label}
        className="relative flex w-full touch-none select-none items-center"
        {...props}
      >
        <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-[var(--radius-full)] bg-[var(--color-active)]">
          <SliderPrimitive.Range className="absolute h-full bg-[var(--color-accent)]" />
        </SliderPrimitive.Track>

        {current.map((_, index) => (
          <SliderPrimitive.Thumb
            key={index}
            className={cn(
              "block h-4 w-4 rounded-[var(--radius-full)] border-2 border-[var(--color-accent)] bg-[var(--color-bg)] shadow",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]",
              "disabled:pointer-events-none disabled:opacity-50"
            )}
          />
        ))}
      </SliderPrimitive.Root>
    </div>
  );
}
