"use client";

import { useState } from "react";
import { Popover as PopoverPrimitive } from "radix-ui";
import { Command as CommandPrimitive } from "cmdk";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "../lib/utils";

/**
 * Combobox: a filterable select.
 *
 * Select and Combobox are separate components rather than one with a
 * searchable flag, because they answer different questions. Select asks
 * "which of these", Combobox asks "find the one you mean". The difference
 * shows up in the keyboard model and in what an empty result means.
 *
 * Composed from Radix Popover for positioning and cmdk for filtering and
 * list navigation.
 */

export type ComboboxOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export interface ComboboxProps {
  options: ComboboxOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  /** Shown on the trigger when nothing is selected. */
  placeholder?: string;
  /** Shown in the filter field. */
  searchPlaceholder?: string;
  /** Shown when filtering matches nothing. */
  emptyMessage?: string;
  disabled?: boolean;
  className?: string;
  /** Accessible name, when no visible label is associated. */
  "aria-label"?: string;
}

export function Combobox({
  options,
  value,
  onValueChange,
  placeholder = "Select an option",
  searchPlaceholder = "Search",
  emptyMessage = "No results",
  disabled,
  className,
  ...props
}: ComboboxProps) {
  const [open, setOpen] = useState(false);
  const selected = options.find((option) => option.value === value);

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger asChild>
        <button
          type="button"
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
          className={cn(
            "flex h-9 w-full items-center justify-between gap-2 rounded-[var(--radius-field)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3",
            "text-[var(--text-body-sm-size)] text-[var(--color-fg)]",
            "focus:border-[var(--color-fg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-muted)] focus:ring-offset-1 focus:ring-offset-[var(--color-bg)]",
            "disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          {...props}
        >
          <span
            className={cn(
              "truncate",
              !selected && "text-[var(--color-muted)]"
            )}
          >
            {selected ? selected.label : placeholder}
          </span>
          <ChevronsUpDown
            size={14}
            aria-hidden="true"
            className="shrink-0 text-[var(--color-muted)]"
          />
        </button>
      </PopoverPrimitive.Trigger>

      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          align="start"
          sideOffset={4}
          className="z-50 w-[var(--radix-popover-trigger-width)] overflow-hidden rounded-[var(--radius-surface)] border border-[var(--color-border)] bg-[var(--color-bg)] shadow-lg"
        >
          <CommandPrimitive>
            <div className="border-b border-[var(--color-border)] px-3">
              <CommandPrimitive.Input
                placeholder={searchPlaceholder}
                className="h-9 w-full bg-transparent text-[var(--text-body-sm-size)] text-[var(--color-fg)] outline-none placeholder:text-[var(--color-muted)]"
              />
            </div>

            <CommandPrimitive.List className="max-h-64 overflow-y-auto p-1">
              <CommandPrimitive.Empty className="px-2 py-6 text-center text-[var(--text-body-sm-size)] text-[var(--color-muted)]">
                {emptyMessage}
              </CommandPrimitive.Empty>

              {options.map((option) => (
                <CommandPrimitive.Item
                  key={option.value}
                  value={option.label}
                  disabled={option.disabled}
                  onSelect={() => {
                    onValueChange?.(option.value);
                    setOpen(false);
                  }}
                  className={cn(
                    "relative flex cursor-pointer select-none items-center gap-2 rounded-[var(--radius-field)] py-1.5 pl-2 pr-8",
                    "text-[var(--text-body-sm-size)] text-[var(--color-fg)] outline-none",
                    "data-[selected=true]:bg-[var(--color-hover)]",
                    "data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50"
                  )}
                >
                  <span className="truncate">{option.label}</span>
                  {option.value === value ? (
                    <Check
                      size={14}
                      aria-hidden="true"
                      className="absolute right-2 text-[var(--color-accent)]"
                    />
                  ) : null}
                </CommandPrimitive.Item>
              ))}
            </CommandPrimitive.List>
          </CommandPrimitive>
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}
