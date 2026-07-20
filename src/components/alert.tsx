import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

export const alertVariants = cva(
  "overflow-hidden rounded-[var(--radius-control)] border-l-2 bg-[var(--color-panel)] p-4",
  {
  variants: {
    tone: {
      info: "border-l-[var(--color-border)]",
      success: "border-l-[var(--color-accent)]",
      warn: "border-l-[var(--color-warn)]",
      danger: "border-l-[var(--color-danger-border)]",
    },
  },
  defaultVariants: { tone: "info" },
});

const TONE_TEXT: Record<string, string> = {
  info: "text-[var(--color-muted)]",
  success: "text-[var(--color-accent-fg)]",
  warn: "text-[var(--color-warn)]",
  danger: "text-[var(--color-danger)]",
};

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title: string;
  /**
   * Set when the alert appears in response to a user action, so assistive
   * technology announces it. Leave off for alerts present on load.
   */
  live?: boolean;
}

export function Alert({
  className,
  tone = "info",
  title,
  live,
  children,
  ...props
}: AlertProps) {
  return (
    <div
      role={live ? "alert" : undefined}
      className={cn(alertVariants({ tone }), className)}
      {...props}
    >
      <p
        className={cn(
          "mb-1 text-[11px] font-semibold uppercase tracking-wider",
          TONE_TEXT[tone ?? "info"]
        )}
      >
        {title}
      </p>
      <div className="text-[14px] leading-6 text-[var(--color-body)]">
        {children}
      </div>
    </div>
  );
}
