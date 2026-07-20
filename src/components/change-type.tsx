import { cn } from "../lib/utils";

/**
 * Classifies what changed between two captures of the same area.
 *
 * Violation is treated as a category here, not a warning, so it uses the
 * categorical tokens rather than the danger range. A violation is a finding
 * to be reviewed, not an error in the interface.
 */

export const CHANGE_TYPES = ["demolition", "extended", "violation"] as const;

export type ChangeTypeValue = (typeof CHANGE_TYPES)[number];

const LABELS: Record<ChangeTypeValue, string> = {
  demolition: "Demolition",
  extended: "Extended",
  violation: "Violation",
};

export interface ChangeTypeProps extends React.HTMLAttributes<HTMLSpanElement> {
  change: ChangeTypeValue;
  children?: React.ReactNode;
}

export function ChangeType({
  change,
  className,
  children,
  ...props
}: ChangeTypeProps) {
  return (
    <span
      data-change={change}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[var(--radius-control)] border px-2 py-0.5",
        "text-[var(--text-body-xs-size)] font-medium leading-[var(--text-body-xs-line)]",
        className
      )}
      style={{
        background: "var(--change-" + change + "-surface)",
        borderColor: "var(--change-" + change + "-border)",
        color: "var(--change-" + change + "-fg)",
      }}
      {...props}
    >
      {children ?? LABELS[change]}
    </span>
  );
}
