import { cn } from "../lib/utils";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** Visible label. The whole label is the click target. */
  label: string;
  hint?: string;
}

export function Checkbox({
  className,
  label,
  hint,
  id,
  ...props
}: CheckboxProps) {
  const boxId = id ?? "checkbox-" + label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const hintId = hint ? boxId + "-hint" : undefined;

  return (
    <div className="flex gap-2.5">
      <input
        id={boxId}
        type="checkbox"
        aria-describedby={hintId}
        className={cn(
          "mt-0.5 h-4 w-4 shrink-0 cursor-pointer appearance-none border border-[var(--color-border)] bg-[var(--color-bg)]",
          "checked:border-[var(--color-accent)] checked:bg-[var(--color-accent)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--color-bg)]",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "bg-[length:100%_100%] bg-center bg-no-repeat checked:bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22 fill=%22none%22 stroke=%22white%22 stroke-width=%222.5%22><path d=%22M3.5 8.5l3 3 6-6%22/></svg>')]",
          className
        )}
        {...props}
      />
      <div>
        <label
          htmlFor={boxId}
          className="cursor-pointer text-[14px] leading-5 text-[var(--color-fg)]"
        >
          {label}
        </label>
        {hint ? (
          <p id={hintId} className="mt-0.5 text-[12px] text-[var(--color-muted)]">
            {hint}
          </p>
        ) : null}
      </div>
    </div>
  );
}
