import { cn } from "../lib/utils";

/**
 * The layout for a region with nothing in it.
 *
 * The component is a container. What makes an empty state work is the words,
 * and specifically whether they distinguish nothing yet from nothing found.
 * See the Empty states pattern.
 */

export interface EmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Says what is absent, in the user's terms. */
  title: string;
  /** Says what would change it. */
  description?: string;
  /** An icon or illustration. Decorative, so hide it from assistive tech. */
  media?: React.ReactNode;
  /** The action that resolves the state, where one exists. */
  action?: React.ReactNode;
}

export function Empty({
  title,
  description,
  media,
  action,
  className,
  ...props
}: EmptyProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center px-6 py-12 text-center",
        className
      )}
      {...props}
    >
      {media ? (
        <div aria-hidden="true" className="mb-4 text-[var(--color-muted)]">
          {media}
        </div>
      ) : null}

      <p className="mb-0 text-[var(--text-body-size)] font-medium text-[var(--color-fg)]">
        {title}
      </p>

      {description ? (
        <p className="mb-0 mt-1.5 max-w-sm text-[var(--text-body-sm-size)] leading-[var(--text-body-sm-line)] text-[var(--color-muted)]">
          {description}
        </p>
      ) : null}

      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}
