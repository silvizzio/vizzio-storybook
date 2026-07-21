import { Separator as SeparatorPrimitive } from "radix-ui";
import { cn } from "../lib/utils";

/**
 * A rule between sections.
 *
 * Decorative by default, which is almost always right: a line is a visual
 * grouping cue, and announcing one to a screen reader adds nothing. Set
 * decorative false only when the separation itself carries meaning that is
 * not already expressed by headings or landmarks.
 */

export function Separator({
  orientation = "horizontal",
  decorative = true,
  className,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      orientation={orientation}
      decorative={decorative}
      className={cn(
        "shrink-0 bg-[var(--color-border)]",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className
      )}
      {...props}
    />
  );
}
