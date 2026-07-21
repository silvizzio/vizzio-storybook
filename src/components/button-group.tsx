import { cn } from "../lib/utils";

/**
 * Related buttons joined into one control.
 *
 * Joining implies the actions belong to one decision. Buttons that merely sit
 * near each other should be spaced, not joined, or the grouping claims a
 * relationship that is not there.
 */

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Names the group. Required, since a bare row of buttons has no context. */
  label: string;
  orientation?: "horizontal" | "vertical";
}

export function ButtonGroup({
  label,
  orientation = "horizontal",
  className,
  children,
  ...props
}: ButtonGroupProps) {
  return (
    <div
      role="group"
      aria-label={label}
      className={cn(
        "inline-flex",
        orientation === "vertical" ? "flex-col" : "flex-row",
        // Collapse the shared edge and square off the inner corners, so the
        // group reads as one control rather than buttons pushed together.
        orientation === "horizontal"
          ? "[&>*:not(:first-child)]:-ml-px [&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none"
          : "[&>*:not(:first-child)]:-mt-px [&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none",
        // The focused button has to sit above its neighbours or the ring is
        // clipped by the overlapping edge.
        "[&>*:focus-visible]:relative [&>*:focus-visible]:z-10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
