"use client";

import { Check } from "lucide-react";
import { cn } from "../lib/utils";

/**
 * Selectable report template card in the report builder.
 *
 * A card that behaves like a radio, so it renders as one. The whole card is
 * the target rather than a small control in a corner, which is the point of
 * using a card instead of a list.
 */

export interface ReportSelectionProps
  extends Omit<React.HTMLAttributes<HTMLLabelElement>, "onChange" | "onSelect"> {
  /** Shared across the group. Selection is single choice. */
  name: string;
  value: string;
  selected?: boolean;
  onSelect?: (value: string) => void;
  title: string;
  description?: string;
  /** Optional thumbnail or icon. */
  media?: React.ReactNode;
  disabled?: boolean;
}

export function ReportSelection({
  name,
  value,
  selected = false,
  onSelect,
  title,
  description,
  media,
  disabled,
  className,
  ...props
}: ReportSelectionProps) {
  return (
    <label
      data-state={selected ? "selected" : "default"}
      className={cn(
        "group relative flex cursor-pointer flex-col gap-3 rounded-[var(--radius-surface)] border p-4 transition-colors",
        "has-[:focus-visible]:outline-none has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[var(--color-muted)] has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-[var(--color-bg)]",
        selected
          ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)]"
          : "border-[var(--color-border)] bg-[var(--color-bg)] hover:border-[var(--color-muted)]",
        disabled && "pointer-events-none opacity-50",
        className
      )}
      {...props}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={selected}
        disabled={disabled}
        onChange={() => onSelect?.(value)}
        // Visually hidden rather than display none, so it stays focusable
        // and keeps the native radio group keyboard behaviour.
        className="sr-only"
      />

      {media ? (
        <div className="flex h-24 items-center justify-center overflow-hidden rounded-[var(--radius-field)] bg-[var(--color-panel)] text-[var(--color-muted)]">
          {media}
        </div>
      ) : null}

      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="m-0 text-[var(--text-body-sm-size)] font-medium leading-[var(--text-body-sm-line)] text-[var(--color-fg)]">
            {title}
          </p>
          {description ? (
            <p className="mt-1 mb-0 text-[var(--text-body-xs-size)] leading-[var(--text-body-xs-line)] text-[var(--color-muted)]">
              {description}
            </p>
          ) : null}
        </div>

        <span
          aria-hidden="true"
          className={cn(
            "mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-[var(--radius-full)] border transition-colors",
            selected
              ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-on-accent)]"
              : "border-[var(--color-border)]"
          )}
        >
          {selected ? <Check size={10} strokeWidth={3} /> : null}
        </span>
      </div>
    </label>
  );
}
