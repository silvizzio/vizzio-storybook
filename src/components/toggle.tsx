"use client";

import { Toggle as TogglePrimitive, ToggleGroup as ToggleGroupPrimitive } from "radix-ui";
import { cn } from "../lib/utils";

/**
 * A button that stays pressed.
 *
 * Unlike a Switch, a toggle is a control in a toolbar rather than a setting in
 * a form. Unlike a Checkbox, it carries no label of its own, so it needs one
 * supplied.
 */

const base =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-control)] text-[var(--text-body-sm-size)] font-medium transition-colors " +
  "hover:bg-[var(--color-hover)] " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] " +
  "disabled:pointer-events-none disabled:opacity-50 " +
  "data-[state=on]:bg-[var(--color-active)] data-[state=on]:text-[var(--color-fg)]";

const SIZES = {
  sm: "h-8 min-w-8 px-2",
  md: "h-9 min-w-9 px-3",
} as const;

export interface ToggleProps
  extends React.ComponentProps<typeof TogglePrimitive.Root> {
  /** Accessible name. Required when the content is an icon. */
  label: string;
  size?: keyof typeof SIZES;
}

export function Toggle({
  label,
  size = "md",
  className,
  children,
  ...props
}: ToggleProps) {
  return (
    <TogglePrimitive.Root
      aria-label={label}
      className={cn(base, SIZES[size], "text-[var(--color-body)]", className)}
      {...props}
    >
      {children}
    </TogglePrimitive.Root>
  );
}

export type ToggleGroupProps = React.ComponentProps<
  typeof ToggleGroupPrimitive.Root
> & {
  /** Names the group, so the set is announced before its members. */
  label: string;
};

export function ToggleGroup({
  label,
  className,
  ...props
}: ToggleGroupProps) {
  return (
    <ToggleGroupPrimitive.Root
      aria-label={label}
      className={cn(
        "inline-flex items-center gap-1 rounded-[var(--radius-control)] border border-[var(--color-border)] p-1",
        className
      )}
      {...props}
    />
  );
}

export type ToggleGroupItemProps = React.ComponentProps<
  typeof ToggleGroupPrimitive.Item
> & {
  label: string;
  size?: keyof typeof SIZES;
};

export function ToggleGroupItem({
  label,
  size = "md",
  className,
  children,
  ...props
}: ToggleGroupItemProps) {
  return (
    <ToggleGroupPrimitive.Item
      aria-label={label}
      className={cn(base, SIZES[size], "text-[var(--color-body)]", className)}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
}
