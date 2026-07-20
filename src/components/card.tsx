import { cn } from "../lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Renders the card as a link and adds hover affordance. */
  href?: string;
}

export function Card({ className, href, children, ...props }: CardProps) {
  const classes = cn(
    "block rounded-[var(--radius-surface)] border border-[var(--color-border)] bg-[var(--color-panel)] p-5",
    href &&
      "transition-colors hover:border-[var(--color-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted)]",
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "mb-2 text-[16px] font-semibold text-[var(--color-fg)]",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardBody({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("text-[14px] leading-6 text-[var(--color-body)]", className)}
      {...props}
    >
      {children}
    </div>
  );
}
