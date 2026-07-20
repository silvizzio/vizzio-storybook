import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

export const inputVariants = cva(
  "w-full border bg-[var(--color-bg)] text-[var(--color-fg)] transition-colors outline-none placeholder:text-[var(--color-muted)] disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-8 px-2.5 text-[13px]",
        md: "h-9 px-3 text-[14px]",
        lg: "h-10 px-3.5 text-[15px]",
      },
      invalid: {
        false:
          "border-[var(--color-border)] focus:border-[var(--color-fg)] focus:ring-2 focus:ring-[var(--color-muted)] focus:ring-offset-1 focus:ring-offset-[var(--color-bg)]",
        true: "border-[var(--color-danger-border)] focus:ring-2 focus:ring-[var(--color-danger-border)] focus:ring-offset-1 focus:ring-offset-[var(--color-bg)]",
      },
    },
    defaultVariants: { size: "md", invalid: false },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  /** Visible label. Required, because placeholder text is not a label. */
  label: string;
  /** Shown under the field. Announced when invalid is set. */
  hint?: string;
}

export function Input({
  className,
  size,
  invalid,
  label,
  hint,
  id,
  ...props
}: InputProps) {
  const inputId = id ?? "input-" + label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const hintId = hint ? inputId + "-hint" : undefined;

  return (
    <div className="w-full">
      <label
        htmlFor={inputId}
        className="mb-1.5 block text-[13px] font-medium text-[var(--color-fg)]"
      >
        {label}
      </label>
      <input
        id={inputId}
        aria-invalid={invalid ? true : undefined}
        aria-describedby={hintId}
        className={cn(inputVariants({ size, invalid }), className)}
        {...props}
      />
      {hint ? (
        <p
          id={hintId}
          role={invalid ? "alert" : undefined}
          className={cn(
            "mt-1.5 text-[12px]",
            invalid ? "text-[var(--color-danger)]" : "text-[var(--color-muted)]"
          )}
        >
          {hint}
        </p>
      ) : null}
    </div>
  );
}
