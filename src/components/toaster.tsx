"use client";

import { Toaster as SonnerToaster, toast } from "sonner";

/**
 * Toast host. Mount once, near the root of the app.
 *
 * Sonner owns the queue, stacking, timing, and the live region. This wrapper
 * exists only to bind its CSS variables to our tokens, so toasts match the
 * active theme rather than carrying their own palette.
 */

export type ToasterProps = React.ComponentProps<typeof SonnerToaster>;

export function Toaster({ position = "bottom-right", ...props }: ToasterProps) {
  return (
    <SonnerToaster
      position={position}
      // Theme follows the document attribute the docs site and app already set.
      toastOptions={{
        classNames: {
          toast:
            "!rounded-[var(--radius-surface)] !border !border-[var(--color-border)] !bg-[var(--color-panel)] !text-[var(--color-fg)] !shadow-lg",
          title: "!text-[var(--text-body-sm-size)] !font-medium",
          description: "!text-[var(--text-body-xs-size)] !text-[var(--color-muted)]",
          actionButton:
            "!rounded-[var(--radius-control)] !bg-[var(--color-accent)] !text-[var(--color-on-accent)]",
          cancelButton:
            "!rounded-[var(--radius-control)] !bg-[var(--color-active)] !text-[var(--color-fg)]",
          error: "!text-[var(--color-danger)]",
          success: "!text-[var(--color-accent-fg)]",
          warning: "!text-[var(--color-warn)]",
        },
      }}
      {...props}
    />
  );
}

export { toast };
