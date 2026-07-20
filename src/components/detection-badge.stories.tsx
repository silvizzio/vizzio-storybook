import type { Meta, StoryObj } from "@storybook/react-vite";
import { DetectionBadge, DETECTION_LAYERS } from "./detection-badge";

const meta: Meta<typeof DetectionBadge> = {
  title: "Components/Detection Badge",
  component: DetectionBadge,
  parameters: { layout: "centered" },
  args: { layer: "building" },
};

export default meta;
type Story = StoryObj<typeof DetectionBadge>;

export const Default: Story = {};

export const AllLayers: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
      {DETECTION_LAYERS.map((layer) => (
        <DetectionBadge key={layer} layer={layer} />
      ))}
    </div>
  ),
};

export const CustomLabel: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <DetectionBadge layer="building">Building A</DetectionBadge>
      <DetectionBadge layer="road">Road, arterial</DetectionBadge>
    </div>
  ),
};
