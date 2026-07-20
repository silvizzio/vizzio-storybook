"use client";

import { Select as SelectPrimitive } from "radix-ui";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "../lib/utils";

/**
 * Select on the Radix primitive. Renders a custom listbox rather than a
 * native select, which buys consistent styling at the cost of reimplementing
 * typeahead, positioning, and the collapsed value display. The primitive
 * supplies all three.
 */

export const Select = SelectPrimitive.Root;
export const SelectGroup = SelectPrimitive.Group;
export const SelectValue = SelectPrimitive.Value;

export function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
  return (
    <SelectPrimitive.Trigger
      className={cn(
        "flex h-9 w-full items-center justify-between gap-2 rounded-[var(--radius-field)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3",
        "text-[var(--text-body-sm-size)] text-[var(--color-fg)]",
        "data-[placeholder]:text-[var(--color-muted)]",
        "focus:border-[var(--color-fg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-muted)] focus:ring-offset-1 focus:ring-offset-[var(--color-bg)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-[invalid]:border-[var(--color-danger-border)]",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown
          size={14}
          aria-hidden="true"
          className="shrink-0 text-[var(--color-muted)]"
        />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

export function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        position={position}
        className={cn(
          "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-[var(--radius-surface)] border border-[var(--color-border)] bg-[var(--color-bg)] shadow-lg",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1 w-[var(--radix-select-trigger-width)]",
          className
        )}
        {...props}
      >
        <SelectPrimitive.ScrollUpButton className="flex h-6 items-center justify-center text-[var(--color-muted)]">
          <ChevronUp size={14} aria-hidden="true" />
        </SelectPrimitive.ScrollUpButton>

        <SelectPrimitive.Viewport className="p-1">
          {children}
        </SelectPrimitive.Viewport>

        <SelectPrimitive.ScrollDownButton className="flex h-6 items-center justify-center text-[var(--color-muted)]">
          <ChevronDown size={14} aria-hidden="true" />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

export function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      className={cn(
        "px-2 py-1.5 text-[var(--text-body-xs-size)] font-medium uppercase tracking-wider text-[var(--color-muted)]",
        className
      )}
      {...props}
    />
  );
}

export function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      className={cn(
        "relative flex cursor-pointer select-none items-center gap-2 rounded-[var(--radius-field)] py-1.5 pl-2 pr-8",
        "text-[var(--text-body-sm-size)] text-[var(--color-fg)] outline-none",
        "data-[highlighted]:bg-[var(--color-hover)]",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <span className="absolute right-2 flex items-center">
        <SelectPrimitive.ItemIndicator>
          <Check
            size={14}
            aria-hidden="true"
            className="text-[var(--color-accent)]"
          />
        </SelectPrimitive.ItemIndicator>
      </span>
    </SelectPrimitive.Item>
  );
}

export function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      className={cn("my-1 h-px bg-[var(--color-border-subtle)]", className)}
      {...props}
    />
  );
}
