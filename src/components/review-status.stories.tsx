import type { Meta, StoryObj } from "@storybook/react-vite";
import { ReviewStatus, REVIEW_STATUSES } from "./review-status";

const meta: Meta<typeof ReviewStatus> = {
  title: "Components/Review Status",
  component: ReviewStatus,
  parameters: { layout: "centered" },
  args: { status: "needs-review" },
};

export default meta;
type Story = StoryObj<typeof ReviewStatus>;

export const Default: Story = {};

export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
      {REVIEW_STATUSES.map((status) => (
        <ReviewStatus key={status} status={status} />
      ))}
    </div>
  ),
};
