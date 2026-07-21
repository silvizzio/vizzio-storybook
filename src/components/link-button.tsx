import { ExternalLink } from "lucide-react";
import { cn } from "../lib/utils";

/**
 * A link styled as a button.
 *
 * It navigates, so it renders an anchor. Anything that acts on the current
 * page is a Button instead. Getting this wrong breaks middle click, open in
 * new tab, and the browser status bar, none of which a button provides.
 */

const VARIANTS = {
  primary:
    "bg-[var(--color-accent)] text-[var(--color-on-accent)] hover:opacity-90",
  outline:
    "border border-[var(--color-border)] text-[var(--color-fg)] hover:bg-[var(--color-hover)]",
  ghost: "text-[var(--color-fg)] hover:bg-[var(--color-hover)]",
} as const;

const SIZES = {
  sm: "h-8 px-3 text-[var(--text-body-xs-size)]",
  md: "h-9 px-4 text-[var(--text-body-sm-size)]",
  lg: "h-11 px-6 text-[var(--text-body-size)]",
} as const;

export interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  /** Opens in a new tab and appends an icon saying so. */
  external?: boolean;
}

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  external = false,
  className,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[var(--radius-control)] font-medium no-underline transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]",
        VARIANTS[variant],
        SIZES[size],
        className
      )}
      {...props}
    >
      {children}
      {external ? (
        <>
          <ExternalLink size={13} aria-hidden="true" className="shrink-0" />
          <span className="sr-only">, opens in a new tab</span>
        </>
      ) : null}
    </a>
  );
}
