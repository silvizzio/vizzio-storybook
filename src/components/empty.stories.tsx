import type { Meta, StoryObj } from "@storybook/react-vite";
import { Inbox, SearchX } from "lucide-react";
import { Empty } from "./empty";
import { Button } from "./button";

const meta: Meta<typeof Empty> = {
  title: "Components/Empty",
  component: Empty,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof Empty>;

const frame = {
  width: "34rem",
  border: "1px solid var(--color-border)",
  borderRadius: "var(--radius-surface)",
};

export const NothingYet: Story = {
  render: () => (
    <div style={frame}>
      <Empty
        media={<Inbox size={28} />}
        title="No detections yet"
        description="Detections appear here once the first capture has been processed."
        action={<Button variant="primary">Upload imagery</Button>}
      />
    </div>
  ),
};

export const NothingFound: Story = {
  render: () => (
    <div style={frame}>
      <Empty
        media={<SearchX size={28} />}
        title="No detections match these filters"
        description="Try widening the confidence range, or clear the filters to start again."
        action={<Button variant="outline">Clear all filters</Button>}
      />
    </div>
  ),
};

export const TitleOnly: Story = {
  render: () => (
    <div style={frame}>
      <Empty title="No comments" />
    </div>
  ),
};
