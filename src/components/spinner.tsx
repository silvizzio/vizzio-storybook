import { cn } from "../lib/utils";

/**
 * Indeterminate loading indicator, for waits of unknown length.
 *
 * A spinner says only that something is happening. Where the shape of the
 * result is known, Skeleton says more; where the proportion done is known,
 * Progress says more still.
 */

const SIZES = { sm: 14, md: 18, lg: 24 } as const;

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: keyof typeof SIZES;
  /**
   * Announced to assistive technology. Pass null when a visible label
   * already describes the wait, so it is not read twice.
   */
  label?: string | null;
}

export function Spinner({
  size = "md",
  label = "Loading",
  className,
  ...props
}: SpinnerProps) {
  const px = SIZES[size];

  return (
    <span
      role={label ? "status" : undefined}
      className={cn("inline-flex items-center", className)}
      {...props}
    >
      <svg
        width={px}
        height={px}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="animate-spin motion-reduce:animate-none"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2.5"
          opacity="0.2"
        />
        <path
          d="M12 2a10 10 0 0 1 10 10"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      {label ? <span className="sr-only">{label}</span> : null}
    </span>
  );
}
