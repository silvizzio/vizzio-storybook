"use client";

import { RadioGroup as RadioGroupPrimitive } from "radix-ui";
import { cn } from "../lib/utils";

/**
 * One choice from a visible set.
 *
 * Radios show every option at once, which is their advantage over a Select
 * and the reason they stop working past about six. Selection follows focus,
 * so arrow keys both move and choose.
 */

export function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2.5", className)}
      {...props}
    />
  );
}

export interface RadioProps
  extends React.ComponentProps<typeof RadioGroupPrimitive.Item> {
  /** Visible label. Required, since a bare radio has no accessible name. */
  label: string;
  description?: string;
}

export function Radio({
  label,
  description,
  className,
  id,
  value,
  ...props
}: RadioProps) {
  const controlId = id ?? "radio-" + value;
  const descriptionId = description ? controlId + "-description" : undefined;

  return (
    <div className={cn("flex items-start gap-2.5", className)}>
      <RadioGroupPrimitive.Item
        id={controlId}
        value={value}
        aria-describedby={descriptionId}
        className={cn(
          "peer mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-[var(--radius-full)] border border-[var(--color-border)] bg-[var(--color-bg)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "data-[state=checked]:border-[var(--color-accent)] data-[state=checked]:bg-[var(--color-accent)]"
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="block h-1.5 w-1.5 rounded-[var(--radius-full)] bg-[var(--color-on-accent)]" />
      </RadioGroupPrimitive.Item>

      <div className="min-w-0">
        <label
          htmlFor={controlId}
          className="cursor-pointer text-[var(--text-body-sm-size)] leading-[var(--text-body-sm-line)] text-[var(--color-fg)] peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
        >
          {label}
        </label>
        {description ? (
          <p
            id={descriptionId}
            className="mt-0.5 mb-0 text-[var(--text-body-xs-size)] leading-[var(--text-body-xs-line)] text-[var(--color-muted)]"
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
