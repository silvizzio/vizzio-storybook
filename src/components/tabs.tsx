"use client";

import { Tabs as TabsPrimitive } from "radix-ui";
import { cn } from "../lib/utils";

/**
 * Tabs, built on the Radix primitive so roving focus, arrow key navigation,
 * and the tab/tabpanel relationship come from a maintained implementation
 * rather than being approximated here.
 */
export const Tabs = TabsPrimitive.Root;

export function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      className={cn(
        "flex items-center gap-0 border-b border-[var(--color-border)]",
        className
      )}
      {...props}
    />
  );
}

export function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        "-mb-px inline-flex items-center border-b-2 border-transparent px-4 py-2.5 text-[var(--text-body-sm-size)] text-[var(--color-muted)] transition-colors",
        "hover:text-[var(--color-fg)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--color-bg)]",
        "disabled:pointer-events-none disabled:opacity-50",
        "data-[state=active]:border-[var(--color-accent)] data-[state=active]:font-medium data-[state=active]:text-[var(--color-fg)]",
        className
      )}
      {...props}
    />
  );
}

export function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      className={cn(
        "pt-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted)]",
        className
      )}
      {...props}
    />
  );
}
