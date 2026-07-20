"use client";

import { createContext, useContext, useId } from "react";
import { ResponsiveContainer, Tooltip } from "recharts";
import { cn } from "../lib/utils";

/**
 * Chart theming layer over Recharts.
 *
 * Recharts takes colours as props, not from CSS, so a chart cannot read
 * tokens the way every other component does. ChartContainer bridges that by
 * declaring a series config once and emitting scoped custom properties that
 * both the chart and the legend read.
 */

export type ChartConfig = Record<
  string,
  {
    label: string;
    /** Any CSS colour. Prefer a token reference. */
    color: string;
  }
>;

const ChartContext = createContext<ChartConfig | null>(null);

export function useChartConfig() {
  const context = useContext(ChartContext);
  if (!context) {
    throw new Error("useChartConfig must be used inside a ChartContainer");
  }
  return context;
}

export interface ChartContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  config: ChartConfig;
  /**
   * A text description of what the chart shows. Required, because a chart is
   * an image to anyone who cannot see it and Recharts provides no equivalent.
   */
  description: string;
  height?: number;
  /** Renders a legend from config below the chart. */
  legend?: boolean;
  children: React.ReactElement;
}

export function ChartContainer({
  config,
  description,
  height = 280,
  legend = false,
  className,
  children,
  ...props
}: ChartContainerProps) {
  const id = useId().replace(/:/g, "");
  const vars = Object.fromEntries(
    Object.entries(config).map(([key, value]) => ["--chart-" + key, value.color])
  ) as React.CSSProperties;

  return (
    <ChartContext.Provider value={config}>
      <div
        data-chart={id}
        className={cn("w-full", className)}
        style={vars}
        {...props}
      >
        <figure className="m-0">
          <div style={{ height }} role="img" aria-label={description}>
            <ResponsiveContainer width="100%" height="100%">
              {children}
            </ResponsiveContainer>
          </div>
          <figcaption className="sr-only">{description}</figcaption>
          {legend ? <ChartLegend /> : null}
        </figure>
      </div>
    </ChartContext.Provider>
  );
}

/** Legend rendered from the config, so it cannot disagree with the series. */
export function ChartLegend({ className }: { className?: string }) {
  const config = useChartConfig();

  return (
    <ul
      className={cn(
        "mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5",
        className
      )}
    >
      {Object.entries(config).map(([key, value]) => (
        <li
          key={key}
          className="flex items-center gap-1.5 text-[var(--text-body-xs-size)] text-[var(--color-muted)]"
        >
          <span
            aria-hidden="true"
            className="inline-block h-2.5 w-2.5 shrink-0 rounded-[var(--radius-xs)]"
            style={{ background: value.color }}
          />
          {value.label}
        </li>
      ))}
    </ul>
  );
}

/** Tooltip preset bound to our surface tokens. */
export function ChartTooltip(
  props: React.ComponentProps<typeof Tooltip>
) {
  return (
    <Tooltip
      cursor={{ fill: "var(--color-hover)" }}
      contentStyle={{
        background: "var(--color-bg)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-surface)",
        fontSize: "var(--text-body-xs-size)",
        color: "var(--color-fg)",
        boxShadow: "0 4px 12px var(--shadow-color)",
      }}
      labelStyle={{ color: "var(--color-fg)", fontWeight: 600 }}
      itemStyle={{ color: "var(--color-body)" }}
      {...props}
    />
  );
}

/** Axis and grid presets, spread onto the Recharts elements. */
export const chartAxisProps = {
  stroke: "var(--color-muted)",
  fontSize: 12,
  tickLine: false,
  axisLine: false,
} as const;

export const chartGridProps = {
  stroke: "var(--color-border-subtle)",
  strokeDasharray: "3 3",
  vertical: false,
} as const;
