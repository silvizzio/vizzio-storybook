import type { Meta, StoryObj } from "@storybook/react-vite";
import { Separator } from "./separator";

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof Separator>;

const text = {
  fontSize: "var(--text-body-sm-size)",
  color: "var(--color-body)",
};

export const Horizontal: Story = {
  render: () => (
    <div style={{ width: "24rem" }}>
      <p style={{ ...text, margin: 0 }}>Detections</p>
      <Separator className="my-3" />
      <p style={{ ...text, margin: 0 }}>Imagery</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", height: "1.5rem" }}>
      <span style={text}>Draft</span>
      <Separator orientation="vertical" />
      <span style={text}>Edited 2h ago</span>
      <Separator orientation="vertical" />
      <span style={text}>3 members</span>
    </div>
  ),
};
