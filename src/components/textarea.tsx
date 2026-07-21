import { cn } from "../lib/utils";

/** Multi line text input. Matches Input, with the height freed. */

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

export function Textarea({ invalid, className, ...props }: TextareaProps) {
  return (
    <textarea
      aria-invalid={invalid || undefined}
      className={cn(
        "w-full min-h-24 rounded-[var(--radius-field)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2",
        "text-[var(--text-body-sm-size)] leading-[var(--text-body-sm-line)] text-[var(--color-fg)]",
        "placeholder:text-[var(--color-muted)]",
        "focus:border-[var(--color-fg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-muted)] focus:ring-offset-1 focus:ring-offset-[var(--color-bg)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "read-only:bg-[var(--color-panel)] read-only:text-[var(--color-body)]",
        invalid && "border-[var(--color-danger-border)]",
        className
      )}
      {...props}
    />
  );
}
