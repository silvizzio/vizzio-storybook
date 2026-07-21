"use client";

import { Switch as SwitchPrimitive } from "radix-ui";
import { cn } from "../lib/utils";

/**
 * Immediate on or off.
 *
 * A switch takes effect the moment it is flipped. A checkbox stages a change
 * that a submit commits. Choosing wrongly makes users press a submit button
 * that does nothing, or wonder why nothing saved.
 */

export interface SwitchProps
  extends React.ComponentProps<typeof SwitchPrimitive.Root> {
  /** Visible label. Required, since a bare switch has no accessible name. */
  label: string;
  description?: string;
}

export function Switch({
  label,
  description,
  className,
  id,
  ...props
}: SwitchProps) {
  const controlId = id ?? "switch-" + label.toLowerCase().replace(/\s+/g, "-");
  const descriptionId = description ? controlId + "-description" : undefined;

  return (
    <div className={cn("flex items-start gap-3", className)}>
      <SwitchPrimitive.Root
        id={controlId}
        aria-describedby={descriptionId}
        className={cn(
          "peer mt-0.5 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-[var(--radius-full)] border-2 border-transparent transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "data-[state=checked]:bg-[var(--color-accent)] data-[state=unchecked]:bg-[var(--color-border)]"
        )}
        {...props}
      >
        <SwitchPrimitive.Thumb className="pointer-events-none block h-4 w-4 rounded-[var(--radius-full)] bg-[var(--color-bg)] shadow transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0 motion-reduce:transition-none" />
      </SwitchPrimitive.Root>

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
