import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "./spinner";
import { Button } from "./button";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", color: "var(--color-accent)" }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        color: "var(--color-body)",
        fontSize: "var(--text-body-sm-size)",
      }}
    >
      <Spinner size="sm" label={null} />
      Generating report
    </span>
  ),
};

export const InAButton: Story = {
  render: () => (
    <Button variant="primary" disabled>
      <Spinner size="sm" label={null} />
      Saving
    </Button>
  ),
};
