import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

export const badgeVariants = cva(
  "inline-flex items-center gap-1.5 whitespace-nowrap px-2 py-0.5 text-[12px] font-medium leading-5",
  {
    variants: {
      variant: {
        neutral:
          "bg-[var(--color-active)] text-[var(--color-fg)]",
        accent:
          "bg-[var(--color-accent-soft)] text-[var(--color-accent-fg)]",
        outline:
          "border border-[var(--color-border)] text-[var(--color-body)]",
        danger:
          "bg-[var(--color-danger-border)] text-[var(--color-on-danger)]",
        warn: "border border-[var(--color-warn)] text-[var(--color-warn)]",
      },
      shape: { square: "", round: "rounded-full px-2.5" },
    },
    defaultVariants: { variant: "neutral", shape: "square" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /** Renders a leading dot. The label still carries the meaning. */
  dot?: boolean;
}

export function Badge({
  className,
  variant,
  shape,
  dot,
  children,
  ...props
}: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, shape }), className)} {...props}>
      {dot ? (
        <span
          aria-hidden="true"
          className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-current"
        />
      ) : null}
      {children}
    </span>
  );
}
