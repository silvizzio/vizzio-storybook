import { ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

/**
 * The path to the current page.
 *
 * Breadcrumbs describe hierarchy, not history. A breadcrumb showing where a
 * user has been rather than where the page sits is a back button wearing a
 * costume.
 */

export interface BreadcrumbItem {
  label: string;
  /** Omit on the last item, which is the current page. */
  href?: string;
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  /** Names the landmark. Only needed when a page has more than one. */
  label?: string;
}

export function Breadcrumb({
  items,
  label = "Breadcrumb",
  className,
  ...props
}: BreadcrumbProps) {
  return (
    <nav aria-label={label} className={className} {...props}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => {
          const last = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {item.href && !last ? (
                <a
                  href={item.href}
                  className="text-[var(--text-body-sm-size)] text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)] hover:underline hover:underline-offset-[3px]"
                >
                  {item.label}
                </a>
              ) : (
                <span
                  aria-current={last ? "page" : undefined}
                  className={cn(
                    "text-[var(--text-body-sm-size)]",
                    last
                      ? "font-medium text-[var(--color-fg)]"
                      : "text-[var(--color-muted)]"
                  )}
                >
                  {item.label}
                </span>
              )}

              {last ? null : (
                <ChevronRight
                  size={13}
                  aria-hidden="true"
                  className="shrink-0 text-[var(--color-muted)]"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
