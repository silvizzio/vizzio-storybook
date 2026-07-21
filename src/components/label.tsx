"use client";

import { Label as LabelPrimitive } from "radix-ui";
import { cn } from "../lib/utils";

/**
 * A form label.
 *
 * Most controls in this library take a label prop and render this internally.
 * Reach for it directly only when composing a control the library does not
 * cover, or when the label sits somewhere the component cannot place it.
 */

export interface LabelProps
  extends React.ComponentProps<typeof LabelPrimitive.Root> {
  /** Marks the field optional in the label itself. */
  optional?: boolean;
}

export function Label({ optional, className, children, ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      className={cn(
        "inline-flex items-baseline gap-1.5 text-[var(--text-body-sm-size)] font-medium leading-[var(--text-body-sm-line)] text-[var(--color-fg)]",
        "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
      {optional ? (
        <span className="text-[var(--text-body-xs-size)] font-normal text-[var(--color-muted)]">
          optional
        </span>
      ) : null}
    </LabelPrimitive.Root>
  );
}
