"use client";

import { Group, Panel, Separator } from "react-resizable-panels";
import { cn } from "../lib/utils";

/**
 * Panels a user can resize.
 *
 * Worth it where the right split genuinely varies by task, such as a map
 * beside a list. Where one arrangement suits everyone, a fixed layout is
 * simpler and one less thing to get wrong.
 */

export type ResizableGroupProps = React.ComponentProps<typeof Group>;

export function ResizableGroup({
  className,
  orientation = "horizontal",
  ...props
}: ResizableGroupProps) {
  return (
    <Group
      orientation={orientation}
      className={cn("h-full w-full", className)}
      {...props}
    />
  );
}

export const ResizablePanel = Panel;

export type ResizableHandleProps = React.ComponentProps<typeof Separator> & {
  /** Must match the group. Decides which axis the handle sits on. */
  orientation?: "horizontal" | "vertical";
  /** Shows a grip, which makes the handle easier to find. */
  withGrip?: boolean;
};

export function ResizableHandle({
  orientation = "horizontal",
  withGrip = false,
  className,
  ...props
}: ResizableHandleProps) {
  return (
    <Separator
      className={cn(
        "relative flex shrink-0 items-center justify-center bg-[var(--color-border)] transition-colors",
        "hover:bg-[var(--color-muted)] active:bg-[var(--color-accent)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted)]",
        // The visible line is 1px, but the hit area is padded well past it.
        orientation === "horizontal"
          ? "w-px cursor-col-resize after:absolute after:inset-y-0 after:-left-1.5 after:w-3 after:content-['']"
          : "h-px w-full cursor-row-resize after:absolute after:inset-x-0 after:-top-1.5 after:h-3 after:content-['']",
        className
      )}
      {...props}
    >
      {withGrip ? (
        <span
          aria-hidden="true"
          className={cn(
            "z-10 rounded-[var(--radius-full)] border border-[var(--color-border)] bg-[var(--color-bg)]",
            orientation === "horizontal" ? "h-6 w-1.5" : "h-1.5 w-6"
          )}
        />
      ) : null}
    </Separator>
  );
}
