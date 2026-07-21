"use client";

import { Avatar as AvatarPrimitive } from "radix-ui";
import { cn } from "../lib/utils";

/**
 * A person or entity, as an image with a text fallback.
 *
 * The fallback is not optional. Images fail, and initials are the difference
 * between a broken layout and a slightly less rich one.
 */

const SIZES = {
  sm: "h-6 w-6 text-[10px]",
  md: "h-8 w-8 text-[11px]",
  lg: "h-10 w-10 text-[13px]",
} as const;

export interface AvatarProps {
  /** The person's name. Drives the fallback initials and the accessible name. */
  name: string;
  src?: string;
  size?: keyof typeof SIZES;
  className?: string;
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function Avatar({ name, src, size = "md", className }: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      className={cn(
        "relative inline-flex shrink-0 select-none items-center justify-center overflow-hidden rounded-[var(--radius-full)] bg-[var(--color-active)]",
        SIZES[size],
        className
      )}
    >
      {src ? (
        <AvatarPrimitive.Image
          src={src}
          // The name is on the fallback, so the image is decoration. An alt
          // here would announce the name twice while the image is loading.
          alt=""
          className="h-full w-full object-cover"
        />
      ) : null}

      <AvatarPrimitive.Fallback
        delayMs={src ? 300 : 0}
        className="font-medium text-[var(--color-body)]"
      >
        <span className="sr-only">{name}</span>
        <span aria-hidden="true">{initials(name)}</span>
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
}

/** Overlapping stack, for showing several people in a row. */
export function AvatarGroup({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center [&>*]:ring-2 [&>*]:ring-[var(--color-bg)] [&>*:not(:first-child)]:-ml-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
