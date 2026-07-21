import { cn } from "../lib/utils";

/**
 * A keyboard key, shown inline.
 *
 * Only worth showing for shortcuts a user might actually adopt. A key
 * rendered beside every control is decoration that makes the real shortcuts
 * harder to spot.
 */

export function Kbd({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <kbd
      className={cn(
        "inline-flex min-w-5 items-center justify-center rounded-[var(--radius-field)] border border-[var(--color-border)] bg-[var(--color-panel)] px-1.5 py-px",
        "font-mono text-[11px] leading-5 text-[var(--color-body)]",
        className
      )}
      {...props}
    >
      {children}
    </kbd>
  );
}
