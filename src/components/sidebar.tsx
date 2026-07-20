"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { PanelLeft } from "lucide-react";
import { cn } from "../lib/utils";

/**
 * Application sidebar.
 *
 * State lives in a provider rather than in the Sidebar itself, because the
 * toggle usually sits in a header outside the sidebar, and the main content
 * needs to know the width to offset against.
 */

type SidebarContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggle: () => void;
};

const SidebarContext = createContext<SidebarContextValue | null>(null);

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used inside a SidebarProvider");
  }
  return context;
}

export function SidebarProvider({
  defaultOpen = true,
  open: controlledOpen,
  onOpenChange,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const [uncontrolled, setUncontrolled] = useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolled;

  const setOpen = useCallback(
    (next: boolean) => {
      if (!isControlled) setUncontrolled(next);
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange]
  );

  const toggle = useCallback(() => setOpen(!open), [open, setOpen]);

  // Ctrl or Cmd plus backslash, the conventional sidebar shortcut.
  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "\\" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggle();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [toggle]);

  const value = useMemo(
    () => ({ open, setOpen, toggle }),
    [open, setOpen, toggle]
  );

  return (
    <SidebarContext.Provider value={value}>
      <div
        data-sidebar-open={open || undefined}
        className={cn("flex min-h-screen w-full", className)}
        {...props}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  );
}

export function Sidebar({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const { open } = useSidebar();

  return (
    <aside
      // Hidden from assistive technology when collapsed, so its links are not
      // reachable by tab while invisible.
      aria-hidden={!open || undefined}
      inert={!open ? true : undefined}
      data-state={open ? "expanded" : "collapsed"}
      className={cn(
        "flex shrink-0 flex-col overflow-hidden border-r border-[var(--color-border)] bg-[var(--color-panel)]",
        "transition-[width] duration-200 ease-out",
        open ? "w-64" : "w-0",
        className
      )}
      {...props}
    >
      <div className="flex w-64 flex-1 flex-col overflow-y-auto">{children}</div>
    </aside>
  );
}

export function SidebarTrigger({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { open, toggle } = useSidebar();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-expanded={open}
      aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
      title={open ? "Collapse sidebar" : "Expand sidebar"}
      className={cn(
        "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--radius-field)] text-[var(--color-muted)] transition-colors",
        "hover:bg-[var(--color-hover)] hover:text-[var(--color-fg)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted)]",
        className
      )}
      {...props}
    >
      <PanelLeft size={16} aria-hidden="true" />
    </button>
  );
}

export function SidebarHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex h-14 shrink-0 items-center gap-2 border-b border-[var(--color-border)] px-4",
        className
      )}
      {...props}
    />
  );
}

export function SidebarContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex-1 overflow-y-auto py-2", className)} {...props} />;
}

export function SidebarFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "shrink-0 border-t border-[var(--color-border)] p-3",
        className
      )}
      {...props}
    />
  );
}

export function SidebarGroup({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-3 py-2", className)} {...props} />;
}

export function SidebarGroupLabel({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "mb-1 px-2 text-[var(--text-body-xs-size)] font-medium uppercase tracking-wider text-[var(--color-muted)]",
        className
      )}
      {...props}
    />
  );
}

export function SidebarMenu({
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) {
  return <ul className={cn("flex flex-col gap-0.5", className)} {...props} />;
}

export function SidebarMenuItem({
  className,
  ...props
}: React.LiHTMLAttributes<HTMLLIElement>) {
  return <li className={cn("list-none", className)} {...props} />;
}

export function SidebarMenuButton({
  className,
  active,
  asChild,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
  /** Render the child instead of a button, for router links. */
  asChild?: boolean;
}) {
  const classes = cn(
    "flex w-full items-center gap-2.5 rounded-[var(--radius-field)] px-2 py-1.5 text-left",
    "text-[var(--text-body-sm-size)] text-[var(--color-body)] transition-colors",
    "hover:bg-[var(--color-hover)] hover:text-[var(--color-fg)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted)]",
    "[&_svg]:size-4 [&_svg]:shrink-0",
    active && "bg-[var(--color-active)] font-medium text-[var(--color-fg)]",
    className
  );

  if (asChild) {
    return <span className={classes}>{children}</span>;
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}

export function SidebarInset({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return <main className={cn("min-w-0 flex-1", className)} {...props} />;
}
