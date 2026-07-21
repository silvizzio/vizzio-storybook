import type { Meta, StoryObj } from "@storybook/react-vite";
import { AspectRatio } from "./aspect-ratio";

const meta: Meta<typeof AspectRatio> = {
  title: "Components/Aspect Ratio",
  component: AspectRatio,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

const fill = {
  display: "flex",
  height: "100%",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "var(--radius-surface)",
  background: "var(--color-active)",
  color: "var(--color-muted)",
  fontSize: "var(--text-body-xs-size)",
} as const;

export const Widescreen: Story = {
  render: () => (
    <div style={{ width: "22rem" }}>
      <AspectRatio ratio={16 / 9}>
        <div style={fill}>16 to 9</div>
      </AspectRatio>
    </div>
  ),
};

export const Square: Story = {
  render: () => (
    <div style={{ width: "14rem" }}>
      <AspectRatio ratio={1}>
        <div style={fill}>1 to 1</div>
      </AspectRatio>
    </div>
  ),
};

export const Portrait: Story = {
  render: () => (
    <div style={{ width: "12rem" }}>
      <AspectRatio ratio={3 / 4}>
        <div style={fill}>3 to 4</div>
      </AspectRatio>
    </div>
  ),
};
