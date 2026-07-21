"use client";

import { Tooltip as TooltipPrimitive } from "radix-ui";
import { cn } from "../lib/utils";

/**
 * A short label revealed on hover or focus.
 *
 * A tooltip is supplementary by definition. It is unreachable on touch, it
 * requires a pointer or focus to appear, and it disappears on the way to
 * being read. Nothing a user needs belongs in one.
 */

export const TooltipProvider = TooltipPrimitive.Provider;

export interface TooltipProps {
  /** The text shown. Keep it to a few words. */
  content: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  /** The trigger. Must be focusable, or the tooltip is pointer only. */
  children: React.ReactElement;
}

export function Tooltip({ content, side = "top", children }: TooltipProps) {
  return (
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          side={side}
          sideOffset={6}
          className={cn(
            "z-50 max-w-56 rounded-[var(--radius-field)] border border-[var(--color-border)] bg-[var(--color-bg)] px-2.5 py-1.5 shadow-lg",
            "text-[var(--text-body-xs-size)] leading-[var(--text-body-xs-line)] text-[var(--color-fg)]"
          )}
        >
          {content}
          <TooltipPrimitive.Arrow className="fill-[var(--color-border)]" />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
}
