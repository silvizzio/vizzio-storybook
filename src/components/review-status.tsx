import { cn } from "../lib/utils";

/**
 * Analyst verification state of a detection. Drives the review queue.
 *
 * Status is a state rather than a category, so it uses the semantic token
 * range. A row commonly shows both a layer and a status, and the two must
 * not read as the same kind of information.
 */

export const REVIEW_STATUSES = [
  "needs-review",
  "edit-required",
  "approved",
  "rejected",
] as const;

export type ReviewStatusValue = (typeof REVIEW_STATUSES)[number];

const LABELS: Record<ReviewStatusValue, string> = {
  "needs-review": "Needs review",
  "edit-required": "Edit required",
  approved: "Approved",
  rejected: "Rejected",
};

export interface ReviewStatusProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  status: ReviewStatusValue;
  children?: React.ReactNode;
}

export function ReviewStatus({
  status,
  className,
  children,
  ...props
}: ReviewStatusProps) {
  return (
    <span
      data-status={status}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[var(--radius-control)] border px-2 py-0.5",
        "text-[var(--text-body-xs-size)] font-medium leading-[var(--text-body-xs-line)]",
        className
      )}
      style={{
        background: "var(--status-" + status + "-surface)",
        borderColor: "var(--status-" + status + "-border)",
        color: "var(--status-" + status + "-fg)",
      }}
      {...props}
    >
      <span
        aria-hidden="true"
        className="inline-block h-1.5 w-1.5 shrink-0 rounded-[var(--radius-full)]"
        style={{ background: "currentColor" }}
      />
      {children ?? LABELS[status]}
    </span>
  );
}
