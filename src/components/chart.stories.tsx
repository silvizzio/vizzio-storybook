import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  chartAxisProps,
  chartGridProps,
  type ChartConfig,
} from "./chart";

const meta: Meta<typeof ChartContainer> = {
  title: "Components/Chart",
  component: ChartContainer,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof ChartContainer>;

const MONTHLY = [
  { month: "Jan", confirmed: 186, review: 80 },
  { month: "Feb", confirmed: 305, review: 120 },
  { month: "Mar", confirmed: 237, review: 96 },
  { month: "Apr", confirmed: 273, review: 142 },
  { month: "May", confirmed: 209, review: 88 },
  { month: "Jun", confirmed: 314, review: 130 },
];

const config: ChartConfig = {
  confirmed: { label: "Confirmed", color: "var(--color-accent)" },
  review: { label: "In review", color: "var(--color-muted)" },
};

export const Bars: Story = {
  render: () => (
    <div style={{ width: "44rem", maxWidth: "100%" }}>
      <ChartContainer
        config={config}
        description="Detections by month. Confirmed peaks in June at 314, in review peaks in April at 142."
      >
        <BarChart data={MONTHLY}>
          <CartesianGrid {...chartGridProps} />
          <XAxis dataKey="month" {...chartAxisProps} />
          <YAxis {...chartAxisProps} />
          <ChartTooltip />
          <Bar dataKey="confirmed" fill="var(--chart-confirmed)" radius={2} />
          <Bar dataKey="review" fill="var(--chart-review)" radius={2} />
        </BarChart>
      </ChartContainer>
    </div>
  ),
};

export const BarsWithLegend: Story = {
  render: () => (
    <div style={{ width: "44rem", maxWidth: "100%" }}>
      <ChartContainer
        config={config}
        legend
        description="Detections by month, confirmed and in review, January through June."
      >
        <BarChart data={MONTHLY}>
          <CartesianGrid {...chartGridProps} />
          <XAxis dataKey="month" {...chartAxisProps} />
          <YAxis {...chartAxisProps} />
          <ChartTooltip />
          <Bar dataKey="confirmed" fill="var(--chart-confirmed)" radius={2} />
          <Bar dataKey="review" fill="var(--chart-review)" radius={2} />
        </BarChart>
      </ChartContainer>
    </div>
  ),
};

export const Lines: Story = {
  render: () => (
    <div style={{ width: "44rem", maxWidth: "100%" }}>
      <ChartContainer
        config={config}
        description="Detection trend by month. Confirmed rises from 186 in January to 314 in June."
        height={260}
      >
        <LineChart data={MONTHLY}>
          <CartesianGrid {...chartGridProps} />
          <XAxis dataKey="month" {...chartAxisProps} />
          <YAxis {...chartAxisProps} />
          <ChartTooltip />
          <Line
            dataKey="confirmed"
            stroke="var(--chart-confirmed)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            dataKey="review"
            stroke="var(--chart-review)"
            strokeWidth={2}
            strokeDasharray="4 4"
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  ),
};

export const SingleSeries: Story = {
  render: () => (
    <div style={{ width: "44rem", maxWidth: "100%" }}>
      <ChartContainer
        config={{ confirmed: config.confirmed }}
        description="Confirmed detections by month, rising from 186 in January to 314 in June."
        height={220}
      >
        <BarChart data={MONTHLY}>
          <CartesianGrid {...chartGridProps} />
          <XAxis dataKey="month" {...chartAxisProps} />
          <YAxis {...chartAxisProps} />
          <ChartTooltip />
          <Bar dataKey="confirmed" fill="var(--chart-confirmed)" radius={2} />
        </BarChart>
      </ChartContainer>
    </div>
  ),
};
