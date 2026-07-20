"use client";

import { Plus, Store, X } from "lucide-react";
import { cn } from "../lib/utils";

/**
 * Application level tab strip. Each open app occupies one tab.
 *
 * Figma flattens three things into one Property 1 axis: App, Add, and App
 * Store. Only App is a tab. Add and App Store are actions that happen to sit
 * in the same strip, so they ship as a separate component and live outside
 * the tablist. Putting a button that opens a picker inside a tablist tells
 * screen reader users it will switch panels, which it does not.
 */

export function TopTabBar({
  className,
  children,
  label = "Open apps",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  /** Names the strip. Required when a page has more than one. */
  label?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-stretch gap-1 border-b border-[var(--color-border)] bg-[var(--color-panel)] px-2",
        className
      )}
      {...props}
    >
      <div role="tablist" aria-label={label} className="flex items-stretch gap-1">
        {children}
      </div>
    </div>
  );
}

export interface TopTabProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onSelect"> {
  selected?: boolean;
  /** Id of the panel this tab controls. */
  controls?: string;
  /** Renders a close control. Omit for tabs that cannot be closed. */
  onClose?: () => void;
  children: React.ReactNode;
}

export function TopTab({
  selected = false,
  controls,
  onClose,
  className,
  children,
  ...props
}: TopTabProps) {
  return (
    <div className="relative flex items-stretch">
      <button
        type="button"
        role="tab"
        aria-selected={selected}
        aria-controls={controls}
        // Only the selected tab is in the tab order. Arrow keys move between
        // them, which is the tablist keyboard contract.
        tabIndex={selected ? 0 : -1}
        data-state={selected ? "selected" : "unselected"}
        className={cn(
          "flex h-10 items-center gap-2 rounded-t-[var(--radius-control)] px-3",
          "text-[var(--text-body-sm-size)] transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--color-muted)]",
          selected
            ? "bg-[var(--color-bg)] font-medium text-[var(--color-fg)]"
            : "text-[var(--color-muted)] hover:bg-[var(--color-hover)] hover:text-[var(--color-body)]",
          onClose && "pr-8",
          className
        )}
        {...props}
      >
        <span className="max-w-[12rem] truncate">{children}</span>
      </button>

      {onClose ? (
        <button
          type="button"
          // Outside the tab button, because a button inside a button is
          // invalid and breaks the tablist keyboard model.
          onClick={onClose}
          aria-label={"Close " + (typeof children === "string" ? children : "tab")}
          className="absolute right-1.5 top-1/2 inline-flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-[var(--radius-tick)] text-[var(--color-muted)] transition-colors hover:bg-[var(--color-active)] hover:text-[var(--color-fg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted)]"
        >
          <X size={12} aria-hidden="true" />
        </button>
      ) : null}
    </div>
  );
}

export interface TopTabActionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  action: "add" | "app-store";
}

/** Add and App Store. Actions in the strip, deliberately not tabs. */
export function TopTabAction({
  action,
  className,
  ...props
}: TopTabActionProps) {
  const label = action === "add" ? "Open a new app" : "Browse the app store";
  const Icon = action === "add" ? Plus : Store;

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex h-10 w-9 shrink-0 items-center justify-center self-center rounded-[var(--radius-control)]",
        "text-[var(--color-muted)] transition-colors",
        "hover:bg-[var(--color-hover)] hover:text-[var(--color-fg)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted)]",
        className
      )}
      {...props}
    >
      <Icon size={16} aria-hidden="true" />
    </button>
  );
}
