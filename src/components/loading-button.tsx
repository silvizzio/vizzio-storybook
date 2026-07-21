"use client";

import { Button, type ButtonProps } from "./button";
import { Spinner } from "./spinner";
import { cn } from "../lib/utils";

/**
 * A button that shows work in progress.
 *
 * It keeps its label while loading. Swapping the label for a bare spinner
 * loses what the button was doing, which is the one thing a user waiting on it
 * wants to know.
 */

export interface LoadingButtonProps extends ButtonProps {
  loading?: boolean;
  /** Replaces the label while loading. Prefer the present participle. */
  loadingLabel?: string;
}

export function LoadingButton({
  loading = false,
  loadingLabel,
  disabled,
  className,
  children,
  ...props
}: LoadingButtonProps) {
  return (
    <Button
      // Disabled while running, so the action cannot be fired twice.
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cn("gap-2", className)}
      {...props}
    >
      {loading ? <Spinner size="sm" label={null} /> : null}
      {loading && loadingLabel ? loadingLabel : children}
    </Button>
  );
}
