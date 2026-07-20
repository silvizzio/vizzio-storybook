"use client";

import { NavigationMenu as NavigationMenuPrimitive } from "radix-ui";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

/**
 * Site level navigation with optional dropdown panels, on the Radix
 * primitive. Renders a nav element with the correct list semantics, and
 * handles pointer intent so a panel does not close while the cursor is
 * travelling toward it.
 */

export function NavigationMenu({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root>) {
  return (
    <NavigationMenuPrimitive.Root
      className={cn("relative flex max-w-max flex-1 items-center", className)}
      {...props}
    >
      {children}
      <NavigationMenuViewport />
    </NavigationMenuPrimitive.Root>
  );
}

export function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      className={cn("flex flex-1 list-none items-center gap-1", className)}
      {...props}
    />
  );
}

export const NavigationMenuItem = NavigationMenuPrimitive.Item;

const triggerClasses =
  "inline-flex items-center gap-1 rounded-[var(--radius-control)] px-3 py-2 text-[var(--text-body-sm-size)] text-[var(--color-body)] transition-colors hover:bg-[var(--color-hover)] hover:text-[var(--color-fg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted)] disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-[var(--color-hover)] data-[state=open]:text-[var(--color-fg)]";

export function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      className={cn(triggerClasses, className)}
      {...props}
    >
      {children}
      <ChevronDown
        size={14}
        aria-hidden="true"
        className="transition-transform duration-150 group-data-[state=open]:rotate-180"
      />
    </NavigationMenuPrimitive.Trigger>
  );
}

export function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      className={cn("left-0 top-0 w-full p-3 md:absolute md:w-auto", className)}
      {...props}
    />
  );
}

export function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      className={cn(
        "block select-none rounded-[var(--radius-field)] px-3 py-2 text-[var(--text-body-sm-size)] leading-[var(--text-body-sm-line)] text-[var(--color-body)] transition-colors",
        "hover:bg-[var(--color-hover)] hover:text-[var(--color-fg)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted)]",
        "data-[active]:font-medium data-[active]:text-[var(--color-fg)]",
        className
      )}
      {...props}
    />
  );
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div className="absolute left-0 top-full flex justify-center">
      <NavigationMenuPrimitive.Viewport
        className={cn(
          "relative mt-1.5 w-full overflow-hidden rounded-[var(--radius-surface)] border border-[var(--color-border)] bg-[var(--color-bg)] shadow-lg md:w-[var(--radix-navigation-menu-viewport-width)]",
          "h-[var(--radix-navigation-menu-viewport-height)] origin-top-center",
          className
        )}
        {...props}
      />
    </div>
  );
}
