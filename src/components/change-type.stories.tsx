import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChangeType, CHANGE_TYPES } from "./change-type";
import { DetectionBadge } from "./detection-badge";
import { ReviewStatus } from "./review-status";

const meta: Meta<typeof ChangeType> = {
  title: "Components/Change Type",
  component: ChangeType,
  parameters: { layout: "centered" },
  args: { change: "demolition" },
};

export default meta;
type Story = StoryObj<typeof ChangeType>;

export const Default: Story = {};

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
      {CHANGE_TYPES.map((change) => (
        <ChangeType key={change} change={change} />
      ))}
    </div>
  ),
};

/** The three read together on a real row, which is the test that matters. */
export const TogetherOnARow: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.75rem 1rem",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-surface)",
        background: "var(--color-bg)",
      }}
    >
      <span
        style={{
          fontSize: "var(--text-body-sm-size)",
          color: "var(--color-fg)",
          fontWeight: 500,
          marginRight: "0.5rem",
        }}
      >
        d-1041
      </span>
      <DetectionBadge layer="building" />
      <ChangeType change="violation" />
      <ReviewStatus status="needs-review" />
    </div>
  ),
};
