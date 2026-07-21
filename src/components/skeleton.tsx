import { cn } from "../lib/utils";

/**
 * Placeholder for content that is loading.
 *
 * Use it when the shape of the result is known, so the layout does not jump
 * when real content arrives. When the shape is unknown, a Spinner is honest
 * and a skeleton is a guess.
 */

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Renders a stack of lines, the last one short, like a paragraph. */
  lines?: number;
}

export function Skeleton({ lines, className, ...props }: SkeletonProps) {
  if (lines && lines > 1) {
    return (
      <div className="flex flex-col gap-2" {...props}>
        {Array.from({ length: lines }, (_, index) => (
          <div
            key={index}
            className={cn(
              "h-4 animate-pulse rounded-[var(--radius-field)] bg-[var(--color-active)] motion-reduce:animate-none",
              index === lines - 1 && "w-3/5",
              className
            )}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "h-4 w-full animate-pulse rounded-[var(--radius-field)] bg-[var(--color-active)] motion-reduce:animate-none",
        className
      )}
      {...props}
    />
  );
}
