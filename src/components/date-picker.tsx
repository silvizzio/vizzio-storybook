"use client";

import { useState } from "react";
import { DayPicker, type DateRange } from "react-day-picker";
import { Popover as PopoverPrimitive } from "radix-ui";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

/**
 * A date or date range, chosen from a calendar.
 *
 * A calendar is the right tool when the day of the week or the position in a
 * month matters. For a birth date or any date far from today, typing is
 * faster and a text input is kinder.
 */

const cell =
  "h-8 w-8 rounded-[var(--radius-field)] text-[var(--text-body-sm-size)] tabular-nums transition-colors";

/** Shared calendar, usable on its own or inside the picker below. */
export function Calendar_({
  className,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      className={cn("p-3", className)}
      components={{
        Chevron: ({ orientation }) =>
          orientation === "left" ? (
            <ChevronLeft size={15} aria-hidden="true" />
          ) : (
            <ChevronRight size={15} aria-hidden="true" />
          ),
      }}
      classNames={{
        months: "flex flex-col gap-4",
        month: "flex flex-col gap-3",
        month_caption: "flex h-8 items-center justify-center",
        caption_label:
          "text-[var(--text-body-sm-size)] font-medium text-[var(--color-fg)]",
        nav: "flex items-center gap-1",
        button_previous:
          "inline-flex h-7 w-7 items-center justify-center rounded-[var(--radius-field)] text-[var(--color-muted)] hover:bg-[var(--color-hover)] hover:text-[var(--color-fg)] disabled:opacity-40",
        button_next:
          "inline-flex h-7 w-7 items-center justify-center rounded-[var(--radius-field)] text-[var(--color-muted)] hover:bg-[var(--color-hover)] hover:text-[var(--color-fg)] disabled:opacity-40",
        month_grid: "w-full border-collapse",
        weekdays: "flex",
        weekday:
          "w-8 text-[var(--text-body-xs-size)] font-normal text-[var(--color-muted)]",
        week: "mt-1 flex w-full",
        day: cn(cell, "p-0 text-center text-[var(--color-body)]"),
        day_button: cn(
          cell,
          "hover:bg-[var(--color-hover)] hover:text-[var(--color-fg)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted)]"
        ),
        selected:
          "bg-[var(--color-accent)] text-[var(--color-on-accent)] hover:bg-[var(--color-accent)]",
        range_middle:
          "bg-[var(--color-accent-soft)] text-[var(--color-accent-fg)] rounded-none",
        today: "font-semibold text-[var(--color-accent-fg)]",
        outside: "text-[var(--color-muted)] opacity-50",
        disabled: "opacity-40",
        hidden: "invisible",
      }}
      {...props}
    />
  );
}

function format(date: Date) {
  return date.toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export interface DatePickerProps {
  /** Visible label. Required, since the trigger alone has no name. */
  label: string;
  /** One date, or a start and end. */
  mode?: "single" | "range";
  value?: Date | DateRange;
  onValueChange?: (value: Date | DateRange | undefined) => void;
  /** Shown before anything is chosen. Say the expected format. */
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function DatePicker({
  label,
  mode = "single",
  value,
  onValueChange,
  placeholder = "Choose a date",
  disabled,
  className,
}: DatePickerProps) {
  const [open, setOpen] = useState(false);

  const display =
    value instanceof Date
      ? format(value)
      : value && "from" in value && value.from
        ? value.to
          ? format(value.from) + " to " + format(value.to)
          : format(value.from)
        : null;

  return (
    <div className={cn("w-full", className)}>
      <span className="mb-1.5 block text-[var(--text-body-sm-size)] font-medium text-[var(--color-fg)]">
        {label}
      </span>

      <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
        <PopoverPrimitive.Trigger
          disabled={disabled}
          // The value is part of the name, so the current selection is
          // announced without opening the calendar.
          aria-label={label + ", " + (display ?? "no date chosen")}
          className={cn(
            "flex h-9 w-full items-center gap-2 rounded-[var(--radius-field)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3",
            "text-left text-[var(--text-body-sm-size)] transition-colors",
            "hover:bg-[var(--color-hover)]",
            "focus-visible:outline-none focus-visible:border-[var(--color-fg)] focus-visible:ring-2 focus-visible:ring-[var(--color-muted)]",
            "disabled:cursor-not-allowed disabled:opacity-50",
            display ? "text-[var(--color-fg)]" : "text-[var(--color-muted)]"
          )}
        >
          <Calendar size={15} aria-hidden="true" className="shrink-0 text-[var(--color-muted)]" />
          {display ?? placeholder}
        </PopoverPrimitive.Trigger>

        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            align="start"
            sideOffset={6}
            className="z-50 rounded-[var(--radius-overlay)] border border-[var(--color-border)] bg-[var(--color-bg)] shadow-lg"
          >
            {mode === "range" ? (
              <Calendar_
                mode="range"
                selected={value as DateRange | undefined}
                onSelect={(next) => onValueChange?.(next)}
              />
            ) : (
              <Calendar_
                mode="single"
                selected={value as Date | undefined}
                onSelect={(next) => {
                  onValueChange?.(next);
                  setOpen(false);
                }}
              />
            )}
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    </div>
  );
}

export { Calendar_ as CalendarView };
export type { DateRange };
