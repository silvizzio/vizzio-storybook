"use client";

import { createContext, useContext, useId } from "react";
import { cn } from "../lib/utils";

/**
 * Field owns the relationships a form control needs: label association,
 * description and error wiring through aria-describedby, and aria-invalid.
 *
 * Controls read them from context rather than each reimplementing the same
 * id juggling, which is where these relationships usually break.
 */

type FieldContextValue = {
  id: string;
  descriptionId: string;
  errorId: string;
  invalid: boolean;
  hasDescription: boolean;
  hasError: boolean;
};

const FieldContext = createContext<FieldContextValue | null>(null);

export function useField() {
  const context = useContext(FieldContext);
  if (!context) {
    throw new Error("useField must be used inside a Field");
  }
  return context;
}

/** Props to spread onto the control itself. */
export function useFieldControl() {
  const { id, descriptionId, errorId, invalid, hasDescription, hasError } =
    useField();
  const described = [
    hasDescription ? descriptionId : null,
    hasError ? errorId : null,
  ].filter(Boolean);

  return {
    id,
    "aria-invalid": invalid || undefined,
    "aria-describedby": described.length > 0 ? described.join(" ") : undefined,
  } as const;
}

export function Field({
  className,
  invalid = false,
  description,
  error,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  invalid?: boolean;
  description?: React.ReactNode;
  error?: React.ReactNode;
}) {
  const base = useId();
  const value: FieldContextValue = {
    id: base + "-control",
    descriptionId: base + "-description",
    errorId: base + "-error",
    invalid: invalid || Boolean(error),
    hasDescription: Boolean(description),
    hasError: Boolean(error),
  };

  return (
    <FieldContext.Provider value={value}>
      <div className={cn("w-full", className)} {...props}>
        {children}
        {description ? (
          <p
            id={value.descriptionId}
            className="mt-1.5 text-[var(--text-body-xs-size)] leading-[var(--text-body-xs-line)] text-[var(--color-muted)]"
          >
            {description}
          </p>
        ) : null}
        {error ? (
          <p
            id={value.errorId}
            role="alert"
            className="mt-1.5 text-[var(--text-body-xs-size)] leading-[var(--text-body-xs-line)] text-[var(--color-danger)]"
          >
            {error}
          </p>
        ) : null}
      </div>
    </FieldContext.Provider>
  );
}

export function FieldLabel({
  className,
  children,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  const { id } = useField();
  return (
    <label
      htmlFor={id}
      className={cn(
        "mb-1.5 block text-[var(--text-body-sm-size)] font-medium text-[var(--color-fg)]",
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
}
