"use client";

import { Accordion as AccordionPrimitive } from "radix-ui";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

/**
 * Progressive disclosure for a list of sections.
 *
 * Radix supplies the keyboard model and the expanded state wiring. What it
 * cannot supply is the judgement about whether content should be hidden at
 * all, which is the harder question.
 */

export const Accordion = AccordionPrimitive.Root;

export function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      className={cn("border-b border-[var(--color-border)]", className)}
      {...props}
    />
  );
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "group flex flex-1 items-center justify-between gap-4 py-4 text-left",
          "text-[var(--text-body-sm-size)] font-medium text-[var(--color-fg)] transition-colors",
          "hover:text-[var(--color-accent-fg)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted)]",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown
          size={16}
          aria-hidden="true"
          className="shrink-0 text-[var(--color-muted)] transition-transform duration-200 group-data-[state=open]:rotate-180 motion-reduce:transition-none"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      className="vds-collapsible overflow-hidden"
      {...props}
    >
      <div
        className={cn(
          "pb-4 text-[var(--text-body-sm-size)] leading-[var(--text-body-sm-line)] text-[var(--color-body)]",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}
