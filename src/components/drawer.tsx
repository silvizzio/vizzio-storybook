"use client";

import { Drawer as DrawerPrimitive } from "vaul";
import { cn } from "../lib/utils";

/**
 * A panel dragged up from the bottom edge.
 *
 * The difference from Sheet is the drag. On touch, dragging to dismiss is
 * faster and more discoverable than finding a close button, which is why this
 * is a mobile pattern. On a pointer device Sheet is the better choice.
 */

export const Drawer = DrawerPrimitive.Root;
export const DrawerTrigger = DrawerPrimitive.Trigger;
export const DrawerClose = DrawerPrimitive.Close;

export function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return (
    <DrawerPrimitive.Portal>
      <DrawerPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50" />
      <DrawerPrimitive.Content
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 mt-24 flex max-h-[85vh] flex-col",
          "rounded-t-[var(--radius-overlay)] border-t border-[var(--color-border)] bg-[var(--color-bg)]",
          className
        )}
        {...props}
      >
        {/* The grabber. Decorative, since dragging is not the only way out. */}
        <div
          aria-hidden="true"
          className="mx-auto mt-3 h-1 w-10 shrink-0 rounded-[var(--radius-full)] bg-[var(--color-border)]"
        />
        <div className="min-h-0 flex-1 overflow-y-auto p-6">{children}</div>
      </DrawerPrimitive.Content>
    </DrawerPrimitive.Portal>
  );
}

export function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      className={cn(
        "text-[var(--text-h4-size)] font-[var(--text-h4-weight)] leading-[var(--text-h4-line)] text-[var(--color-fg)]",
        className
      )}
      {...props}
    />
  );
}

export function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      className={cn(
        "mt-2 text-[var(--text-body-sm-size)] leading-[var(--text-body-sm-line)] text-[var(--color-body)]",
        className
      )}
      {...props}
    />
  );
}

export function DrawerFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)}
      {...props}
    />
  );
}
