import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { DetectionList, type DetectionGroup } from "./detection-list";

const meta: Meta<typeof DetectionList> = {
  title: "Components/Detection List",
  component: DetectionList,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof DetectionList>;

const GROUPS: DetectionGroup[] = [
  {
    id: "g1",
    name: "Northern district",
    detections: [
      { id: "d-1041", label: "Unpermitted structure", layer: "building", status: "needs-review", confidence: 0.94 },
      { id: "d-1042", label: "Cleared vegetation", layer: "greenery", status: "edit-required", confidence: 0.81 },
      { id: "d-1043", label: "Access road extension", layer: "road", status: "approved", confidence: 0.77 },
    ],
  },
  {
    id: "g2",
    name: "Coastal district",
    detections: [
      { id: "d-2011", label: "Temporary works", layer: "constructions", status: "needs-review", confidence: 0.88 },
      { id: "d-2012", label: "Barrier missing", layer: "safety", status: "rejected", confidence: 0.62 },
    ],
  },
];

const frame = {
  width: "24rem",
  height: "22rem",
  overflowY: "auto",
  border: "1px solid var(--color-border)",
  borderRadius: "var(--radius-surface)",
} as const;

export const Default: Story = {
  render: () => (
    <div style={frame}>
      <DetectionList groups={GROUPS} />
    </div>
  ),
};

export const Selectable: Story = {
  render: () => {
    function Demo() {
      const [selected, setSelected] = useState("d-1042");
      return (
        <div style={frame}>
          <DetectionList groups={GROUPS} selectedId={selected} onSelect={setSelected} />
        </div>
      );
    }
    return <Demo />;
  },
};

export const ZoneClassA: Story = {
  render: () => (
    <div style={frame}>
      <DetectionList
        level="zone-a"
        groups={[
          { ...GROUPS[0], name: "Shura North A1" },
          { ...GROUPS[1], name: "Shura Coast A2" },
        ]}
      />
    </div>
  ),
};
