"use client";

import { OTPInput, OTPInputContext } from "input-otp";
import { useContext } from "react";
import { cn } from "../lib/utils";

/**
 * A one time code, entered as separate boxes.
 *
 * Behind the boxes is a single input, so paste, autofill, and the browser's
 * own SMS code suggestion all work. Rendering one input per digit breaks every
 * one of those and is the usual reason these feel hostile.
 */

function Slot({ index }: { index: number }) {
  const context = useContext(OTPInputContext);
  const slot = context.slots[index];

  return (
    <div
      className={cn(
        "relative flex h-11 w-10 items-center justify-center",
        "rounded-[var(--radius-field)] border border-[var(--color-border)] bg-[var(--color-bg)]",
        "text-[var(--text-body-size)] tabular-nums text-[var(--color-fg)] transition-colors",
        slot?.isActive && "border-[var(--color-fg)] ring-2 ring-[var(--color-muted)]"
      )}
    >
      {slot?.char}
      {slot?.hasFakeCaret ? (
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="h-5 w-px animate-pulse bg-[var(--color-fg)] motion-reduce:animate-none" />
        </span>
      ) : null}
    </div>
  );
}

export type InputOTPProps = Omit<
  React.ComponentProps<typeof OTPInput>,
  "render" | "children" | "maxLength"
> & {
  /** Accessible name. Required, since the boxes carry no label. */
  label: string;
  /** Number of digits. Six is the usual length. */
  maxLength?: number;
};

export function InputOTP({
  label,
  maxLength = 6,
  className,
  ...props
}: InputOTPProps) {
  return (
    <OTPInput
      maxLength={maxLength}
      aria-label={label}
      // Lets the browser and iOS offer the code from a message.
      autoComplete="one-time-code"
      inputMode="numeric"
      containerClassName={cn("flex items-center gap-2", className)}
      render={({ slots }) => (
        <>
          {slots.map((_, index) => (
            <Slot key={index} index={index} />
          ))}
        </>
      )}
      {...props}
    />
  );
}
