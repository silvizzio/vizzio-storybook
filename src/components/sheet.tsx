"use client";

import { Dialog as SheetPrimitive } from "radix-ui";
import { X } from "lucide-react";
import { cn } from "../lib/utils";

/**
 * A panel that slides in from an edge.
 *
 * Mechanically a dialog: modal, focus trapped, dismissible. The edge anchor
 * is what makes it suit content that belongs beside the page rather than
 * over it, such as filters or a detail panel.
 *
 * It is still an interruption. Where the content can sit inline, it should.
 */

export const Sheet = SheetPrimitive.Root;
export const SheetTrigger = SheetPrimitive.Trigger;
export const SheetClose = SheetPrimitive.Close;

const SIDES = {
  right: "inset-y-0 right-0 h-full w-full max-w-md border-l",
  left: "inset-y-0 left-0 h-full w-full max-w-md border-r",
  top: "inset-x-0 top-0 w-full border-b",
  bottom: "inset-x-0 bottom-0 w-full border-t",
} as const;

export interface SheetContentProps
  extends React.ComponentProps<typeof SheetPrimitive.Content> {
  side?: keyof typeof SIDES;
  /** Hides the close button. Escape and the overlay still dismiss. */
  showClose?: boolean;
}

export function SheetContent({
  side = "right",
  showClose = true,
  className,
  children,
  ...props
}: SheetContentProps) {
  return (
    <SheetPrimitive.Portal>
      <SheetPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50" />
      <SheetPrimitive.Content
        className={cn(
          "fixed z-50 flex flex-col gap-4 overflow-y-auto bg-[var(--color-bg)] p-6 shadow-lg",
          "border-[var(--color-border)] focus:outline-none",
          SIDES[side],
          className
        )}
        {...props}
      >
        {children}

        {showClose ? (
          <SheetPrimitive.Close
            aria-label="Close"
            className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-[var(--radius-control)] text-[var(--color-muted)] transition-colors hover:bg-[var(--color-hover)] hover:text-[var(--color-fg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted)]"
          >
            <X size={16} aria-hidden="true" />
          </SheetPrimitive.Close>
        ) : null}
      </SheetPrimitive.Content>
    </SheetPrimitive.Portal>
  );
}

export function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      className={cn(
        "pr-10 text-[var(--text-h4-size)] font-[var(--text-h4-weight)] leading-[var(--text-h4-line)] text-[var(--color-fg)]",
        className
      )}
      {...props}
    />
  );
}

export function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      className={cn(
        "-mt-2 text-[var(--text-body-sm-size)] leading-[var(--text-body-sm-line)] text-[var(--color-body)]",
        className
      )}
      {...props}
    />
  );
}

export function SheetFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mt-auto flex flex-col-reverse gap-2 pt-4 sm:flex-row sm:justify-end", className)}
      {...props}
    />
  );
}
