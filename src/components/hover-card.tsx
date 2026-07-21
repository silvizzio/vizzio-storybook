"use client";

import { HoverCard as HoverCardPrimitive } from "radix-ui";
import { cn } from "../lib/utils";

/**
 * A preview shown on hover.
 *
 * Like Tooltip, it is unreachable on touch and cannot hold anything a user
 * needs. Unlike Tooltip, its content can be reached with a pointer, so a link
 * inside is clickable. It is still supplementary.
 */

export const HoverCardRoot = HoverCardPrimitive.Root;

export interface HoverCardProps {
  /** The preview. Everything in it must exist elsewhere too. */
  content: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  /** The trigger. Must be focusable. */
  children: React.ReactElement;
  openDelay?: number;
}

export function HoverCard({
  content,
  side = "bottom",
  openDelay = 300,
  children,
}: HoverCardProps) {
  return (
    <HoverCardPrimitive.Root openDelay={openDelay} closeDelay={150}>
      <HoverCardPrimitive.Trigger asChild>{children}</HoverCardPrimitive.Trigger>
      <HoverCardPrimitive.Portal>
        <HoverCardPrimitive.Content
          side={side}
          sideOffset={8}
          className={cn(
            "z-50 w-72 rounded-[var(--radius-overlay)] border border-[var(--color-border)] bg-[var(--color-bg)] p-4 shadow-lg",
            "text-[var(--text-body-sm-size)] leading-[var(--text-body-sm-line)] text-[var(--color-body)]"
          )}
        >
          {content}
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Portal>
    </HoverCardPrimitive.Root>
  );
}
