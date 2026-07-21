"use client";

import { useRef, useState } from "react";
import { Upload, X, File as FileIcon } from "lucide-react";
import { cn } from "../lib/utils";

/**
 * File selection.
 *
 * The native input is kept and visually hidden rather than replaced, so
 * keyboard activation, the file picker, and form submission all keep working.
 * A div with a click handler loses every one of those.
 */

export interface InputFileProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
  /** Visible label. Required, since a hidden input has no visible name. */
  label: string;
  /** Says what is acceptable, in words rather than MIME types. */
  hint?: string;
  onFilesChange?: (files: File[]) => void;
}

export function InputFile({
  label,
  hint,
  multiple,
  onFilesChange,
  className,
  id,
  ...props
}: InputFileProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);

  const controlId = id ?? "file-" + label.toLowerCase().replace(/\s+/g, "-");
  const hintId = hint ? controlId + "-hint" : undefined;

  function update(next: File[]) {
    setFiles(next);
    onFilesChange?.(next);
  }

  return (
    <div className={cn("w-full", className)}>
      <label
        htmlFor={controlId}
        className="mb-1.5 block text-[var(--text-body-sm-size)] font-medium text-[var(--color-fg)]"
      >
        {label}
      </label>

      <input
        ref={inputRef}
        id={controlId}
        type="file"
        multiple={multiple}
        aria-describedby={hintId}
        onChange={(event) => update(Array.from(event.target.files ?? []))}
        // Visually hidden rather than display none, so it stays focusable.
        className="peer sr-only"
        {...props}
      />

      <label
        htmlFor={controlId}
        className={cn(
          "flex cursor-pointer items-center justify-center gap-2 rounded-[var(--radius-field)] border border-dashed border-[var(--color-border)] px-4 py-6",
          "text-[var(--text-body-sm-size)] text-[var(--color-body)] transition-colors",
          "hover:border-[var(--color-muted)] hover:bg-[var(--color-hover)]",
          "peer-focus-visible:border-[var(--color-fg)] peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--color-muted)]"
        )}
      >
        <Upload size={16} aria-hidden="true" />
        {multiple ? "Choose files" : "Choose a file"}
      </label>

      {hint ? (
        <p
          id={hintId}
          className="mt-1.5 mb-0 text-[var(--text-body-xs-size)] text-[var(--color-muted)]"
        >
          {hint}
        </p>
      ) : null}

      {files.length > 0 ? (
        <ul className="mt-3 flex list-none flex-col gap-1.5 p-0">
          {files.map((file) => (
            <li
              key={file.name}
              className="flex items-center gap-2 rounded-[var(--radius-field)] bg-[var(--color-panel)] px-3 py-2 text-[var(--text-body-xs-size)] text-[var(--color-body)]"
            >
              <FileIcon size={14} aria-hidden="true" className="shrink-0 text-[var(--color-muted)]" />
              <span className="min-w-0 flex-1 truncate">{file.name}</span>
              <button
                type="button"
                aria-label={"Remove " + file.name}
                onClick={() => {
                  const next = files.filter((f) => f !== file);
                  update(next);
                  // Clearing the input lets the same file be picked again.
                  if (next.length === 0 && inputRef.current) {
                    inputRef.current.value = "";
                  }
                }}
                className="shrink-0 rounded-[var(--radius-field)] p-0.5 text-[var(--color-muted)] hover:bg-[var(--color-hover)] hover:text-[var(--color-fg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted)]"
              >
                <X size={13} aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
