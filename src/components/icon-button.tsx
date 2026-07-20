import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

export const iconButtonVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-[var(--radius-control)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-accent)] text-[var(--color-on-accent)] hover:opacity-90",
        secondary:
          "bg-[var(--color-active)] text-[var(--color-fg)] hover:bg-[var(--color-hover)]",
        outline:
          "border border-[var(--color-border)] bg-transparent text-[var(--color-fg)] hover:bg-[var(--color-hover)]",
        ghost: "bg-transparent text-[var(--color-muted)] hover:bg-[var(--color-hover)] hover:text-[var(--color-fg)]",
        destructive:
          "bg-[var(--color-danger-border)] text-[var(--color-on-danger)] hover:opacity-90",
      },
      size: {
        sm: "h-8 w-8 [&_svg]:size-4",
        md: "h-9 w-9 [&_svg]:size-4",
        lg: "h-10 w-10 [&_svg]:size-5",
      },
    },
    defaultVariants: { variant: "ghost", size: "md" },
  }
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  /**
   * Accessible name. Required, because an icon alone has none. This becomes
   * both the aria-label and the native tooltip.
   */
  label: string;
}

export function IconButton({
  className,
  variant,
  size,
  label,
  children,
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={cn(iconButtonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
