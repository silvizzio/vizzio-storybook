import type { Meta, StoryObj } from "@storybook/react-vite";
import { Skeleton } from "./skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: () => (
    <div style={{ width: "28rem" }}>
      <Skeleton />
    </div>
  ),
};

export const Paragraph: Story = {
  render: () => (
    <div style={{ width: "28rem" }}>
      <Skeleton lines={4} />
    </div>
  ),
};

export const MatchingLayout: Story = {
  render: () => (
    <div style={{ width: "28rem", display: "grid", gap: "1rem" }}>
      <Skeleton className="h-6 w-1/3" />
      <Skeleton lines={3} />
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <Skeleton className="h-9 w-24" />
        <Skeleton className="h-9 w-24" />
      </div>
    </div>
  ),
};
