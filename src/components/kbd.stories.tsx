import type { Meta, StoryObj } from "@storybook/react-vite";
import { Kbd } from "./kbd";

const meta: Meta<typeof Kbd> = {
  title: "Components/Kbd",
  component: Kbd,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Kbd>;

const text = { fontSize: "var(--text-body-sm-size)", color: "var(--color-body)" };

export const Single: Story = { render: () => <Kbd>/</Kbd> };

export const Combination: Story = {
  render: () => (
    <span style={{ ...text, display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
      <Kbd>&#8984;</Kbd>
      <Kbd>K</Kbd>
    </span>
  ),
};

export const InSentence: Story = {
  render: () => (
    <p style={{ ...text, margin: 0 }}>
      Press <Kbd>/</Kbd> to search, or <Kbd>Esc</Kbd> to dismiss.
    </p>
  ),
};
