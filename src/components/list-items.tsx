import { ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

/**
 * A list of records, each a row with optional leading and trailing content.
 *
 * Use it where a table would be too heavy: the row is scanned as a whole
 * rather than compared column by column. Where users compare values across
 * rows, a DataTable is the better tool.
 */

export function ListItems({
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className={cn(
        "m-0 flex list-none flex-col divide-y divide-[var(--color-border-subtle)] p-0",
        className
      )}
      {...props}
    />
  );
}

export interface ListItemProps {
  title: string;
  description?: string;
  /** Icon, avatar, or badge shown before the text. */
  leading?: React.ReactNode;
  /** Metadata or an action shown after the text. */
  trailing?: React.ReactNode;
  /** Renders the whole row as a link and adds a chevron. */
  href?: string;
  className?: string;
}

export function ListItem({
  title,
  description,
  leading,
  trailing,
  href,
  className,
}: ListItemProps) {
  const body = (
    <>
      {leading ? <span className="shrink-0">{leading}</span> : null}

      <span className="min-w-0 flex-1">
        <span className="block truncate text-[var(--text-body-sm-size)] text-[var(--color-fg)]">
          {title}
        </span>
        {description ? (
          <span className="mt-0.5 block truncate text-[var(--text-body-xs-size)] text-[var(--color-muted)]">
            {description}
          </span>
        ) : null}
      </span>

      {trailing ? (
        <span className="shrink-0 text-[var(--text-body-xs-size)] text-[var(--color-muted)]">
          {trailing}
        </span>
      ) : null}

      {href ? (
        <ChevronRight
          size={14}
          aria-hidden="true"
          className="shrink-0 text-[var(--color-muted)]"
        />
      ) : null}
    </>
  );

  const shared = "flex w-full items-center gap-3 px-3 py-3 text-left";

  return (
    <li className={className}>
      {href ? (
        <a
          href={href}
          className={cn(
            shared,
            "no-underline transition-colors hover:bg-[var(--color-hover)]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted)] focus-visible:ring-inset"
          )}
        >
          {body}
        </a>
      ) : (
        <div className={shared}>{body}</div>
      )}
    </li>
  );
}
