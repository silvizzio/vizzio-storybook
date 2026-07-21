"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

/**
 * Page navigation for a long result set.
 *
 * Pages are worth it when a user needs to return to a known position, or
 * when the set is too large to load at once. Where neither is true, showing
 * everything and letting the user scroll is simpler.
 */

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  /** Names the landmark. Needed when a page has more than one. */
  label?: string;
}

/** Page numbers around the current one, with gaps marked as null. */
function pageWindow(page: number, pageCount: number): (number | null)[] {
  if (pageCount <= 7) {
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }

  const window: (number | null)[] = [1];
  const start = Math.max(2, page - 1);
  const end = Math.min(pageCount - 1, page + 1);

  if (start > 2) window.push(null);
  for (let index = start; index <= end; index += 1) window.push(index);
  if (end < pageCount - 1) window.push(null);

  window.push(pageCount);
  return window;
}

export function Pagination({
  page,
  pageCount,
  onPageChange,
  label = "Pagination",
  className,
  ...props
}: PaginationProps) {
  if (pageCount <= 1) return null;

  const step =
    "inline-flex h-8 min-w-8 items-center justify-center rounded-[var(--radius-field)] px-2 text-[var(--text-body-sm-size)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted)] disabled:pointer-events-none disabled:opacity-40";

  return (
    <nav aria-label={label} className={cn("flex items-center gap-1", className)} {...props}>
      <button
        type="button"
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
        aria-label="Previous page"
        className={cn(step, "text-[var(--color-body)] hover:bg-[var(--color-hover)]")}
      >
        <ChevronLeft size={14} aria-hidden="true" />
      </button>

      {pageWindow(page, pageCount).map((entry, index) =>
        entry === null ? (
          <span
            key={"gap-" + index}
            aria-hidden="true"
            className="px-1 text-[var(--text-body-sm-size)] text-[var(--color-muted)]"
          >
            &#8230;
          </span>
        ) : (
          <button
            key={entry}
            type="button"
            onClick={() => onPageChange(entry)}
            aria-label={"Page " + entry}
            aria-current={entry === page ? "page" : undefined}
            className={cn(
              step,
              entry === page
                ? "bg-[var(--color-active)] font-medium text-[var(--color-fg)]"
                : "text-[var(--color-body)] hover:bg-[var(--color-hover)]"
            )}
          >
            {entry}
          </button>
        )
      )}

      <button
        type="button"
        onClick={() => onPageChange(page + 1)}
        disabled={page >= pageCount}
        aria-label="Next page"
        className={cn(step, "text-[var(--color-body)] hover:bg-[var(--color-hover)]")}
      >
        <ChevronRight size={14} aria-hidden="true" />
      </button>
    </nav>
  );
}
