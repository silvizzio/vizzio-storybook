"use client";

import { AlertDialog as AlertDialogPrimitive } from "radix-ui";
import { cn } from "../lib/utils";

/**
 * A dialog that must be answered.
 *
 * The difference from Dialog is not visual. An alert dialog has no close
 * control and no overlay dismissal, because the whole point is that the user
 * makes a choice rather than making the question go away.
 *
 * Reserve it for irreversible actions. For anything undoable, acting
 * immediately with an undo is better than asking first.
 */

export const AlertDialog = AlertDialogPrimitive.Root;
export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
export const AlertDialogAction = AlertDialogPrimitive.Action;
export const AlertDialogCancel = AlertDialogPrimitive.Cancel;

export function AlertDialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  return (
    <AlertDialogPrimitive.Portal>
      <AlertDialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50" />
      <AlertDialogPrimitive.Content
        className={cn(
          "fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2",
          "rounded-[var(--radius-overlay)] border border-[var(--color-border)] bg-[var(--color-bg)] p-6 shadow-lg",
          "focus:outline-none",
          className
        )}
        {...props}
      >
        {children}
      </AlertDialogPrimitive.Content>
    </AlertDialogPrimitive.Portal>
  );
}

export function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      className={cn(
        "text-[var(--text-h4-size)] font-[var(--text-h4-weight)] leading-[var(--text-h4-line)] text-[var(--color-fg)]",
        className
      )}
      {...props}
    />
  );
}

export function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      className={cn(
        "mt-2 text-[var(--text-body-sm-size)] leading-[var(--text-body-sm-line)] text-[var(--color-body)]",
        className
      )}
      {...props}
    />
  );
}

export function AlertDialogFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  );
}
