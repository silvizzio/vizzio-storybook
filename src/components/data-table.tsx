"use client";

import { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
  type RowSelectionState,
} from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ChevronsUpDown } from "lucide-react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "./table";
import { Button } from "./button";
import { cn } from "../lib/utils";

/**
 * Sortable, selectable, paginated table on TanStack Table.
 *
 * The library owns row models and state; this component owns markup and the
 * accessibility of sorting, which is the part most implementations miss.
 */

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  /** Rows per page. Omit to render every row without pagination. */
  pageSize?: number;
  /** Enables the selection column and the selected count. */
  enableSelection?: boolean;
  /** Describes the table for assistive technology. Strongly recommended. */
  caption?: string;
  emptyMessage?: string;
  className?: string;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  pageSize,
  enableSelection = false,
  caption,
  emptyMessage = "No results",
  className,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const table = useReactTable({
    data,
    columns,
    state: { sorting, rowSelection },
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    enableRowSelection: enableSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    ...(pageSize
      ? {
          getPaginationRowModel: getPaginationRowModel(),
          initialState: { pagination: { pageSize } },
        }
      : {}),
  });

  const selectedCount = Object.keys(rowSelection).length;
  const rows = table.getRowModel().rows;

  return (
    <div className={cn("w-full", className)}>
      <div className="overflow-hidden rounded-[var(--radius-surface)] border border-[var(--color-border)]">
        <Table>
          {caption ? (
            <caption className="sr-only">{caption}</caption>
          ) : null}

          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="hover:bg-transparent">
                {headerGroup.headers.map((header) => {
                  const sortable = header.column.getCanSort();
                  const direction = header.column.getIsSorted();

                  return (
                    <TableHead
                      key={header.id}
                      // Communicates sort state to assistive technology.
                      aria-sort={
                        !sortable
                          ? undefined
                          : direction === "asc"
                            ? "ascending"
                            : direction === "desc"
                              ? "descending"
                              : "none"
                      }
                      className={sortable ? "p-0" : undefined}
                    >
                      {header.isPlaceholder ? null : sortable ? (
                        <button
                          type="button"
                          onClick={header.column.getToggleSortingHandler()}
                          className="flex h-10 w-full items-center gap-1.5 px-4 text-left font-semibold transition-colors hover:bg-[var(--color-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--color-muted)]"
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {direction === "asc" ? (
                            <ArrowUp size={13} aria-hidden="true" />
                          ) : direction === "desc" ? (
                            <ArrowDown size={13} aria-hidden="true" />
                          ) : (
                            <ChevronsUpDown
                              size={13}
                              aria-hidden="true"
                              className="text-[var(--color-muted)]"
                            />
                          )}
                        </button>
                      ) : (
                        flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {rows.length === 0 ? (
              <TableRow className="hover:bg-transparent">
                <TableCell
                  colSpan={columns.length}
                  className="py-10 text-center text-[var(--color-muted)]"
                >
                  {emptyMessage}
                </TableCell>
              </TableRow>
            ) : (
              rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-selected={row.getIsSelected() || undefined}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {(pageSize || enableSelection) && (
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <p
            // Announced when the selection count changes.
            role="status"
            className="text-[var(--text-body-xs-size)] text-[var(--color-muted)]"
          >
            {enableSelection
              ? selectedCount + " of " + data.length + " selected"
              : null}
          </p>

          {pageSize ? (
            <div className="flex items-center gap-3">
              <span className="text-[var(--text-body-xs-size)] text-[var(--color-muted)]">
                Page {table.getState().pagination.pageIndex + 1} of{" "}
                {table.getPageCount()}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
