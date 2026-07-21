"use client";

import { ScrollArea as ScrollAreaPrimitive } from "radix-ui";
import { cn } from "../lib/utils";

/**
 * A scrolling region with a consistent scrollbar.
 *
 * Use it where a native scrollbar would be inconsistent across platforms, or
 * where one needs to sit inside a bordered surface. It is presentation only,
 * so keyboard scrolling and wheel behaviour stay native.
 */

export interface ScrollAreaProps
  extends React.ComponentProps<typeof ScrollAreaPrimitive.Root> {
  orientation?: "vertical" | "horizontal";
}

export function ScrollArea({
  orientation = "vertical",
  className,
  children,
  ...props
}: ScrollAreaProps) {
  return (
    <ScrollAreaPrimitive.Root
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
        {children}
      </ScrollAreaPrimitive.Viewport>

      <ScrollAreaPrimitive.Scrollbar
        orientation={orientation}
        className={cn(
          "flex touch-none select-none bg-transparent p-0.5 transition-colors",
          orientation === "vertical" ? "w-2" : "h-2 flex-col"
        )}
      >
        <ScrollAreaPrimitive.Thumb className="relative flex-1 rounded-[var(--radius-full)] bg-[var(--color-border)]" />
      </ScrollAreaPrimitive.Scrollbar>

      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}
