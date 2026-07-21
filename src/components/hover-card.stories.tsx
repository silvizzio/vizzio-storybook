import type { Meta, StoryObj } from "@storybook/react-vite";
import { HoverCard } from "./hover-card";
import { Avatar } from "./avatar";

const meta: Meta<typeof HoverCard> = {
  title: "Components/Hover Card",
  component: HoverCard,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  render: () => (
    <HoverCard
      content={
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <Avatar name="Silvia Arianti" size="lg" />
          <div>
            <p style={{ margin: 0, fontWeight: 500, color: "var(--color-fg)" }}>
              Silvia Arianti
            </p>
            <p style={{ margin: "0.25rem 0 0", color: "var(--color-muted)" }}>
              Reviewed 41 detections this week.
            </p>
          </div>
        </div>
      }
    >
      <a
        href="#"
        style={{ color: "var(--color-accent)", fontSize: "var(--text-body-sm-size)" }}
      >
        Silvia Arianti
      </a>
    </HoverCard>
  ),
};

export const OnADefinition: Story = {
  render: () => (
    <HoverCard
      side="top"
      content="Confidence is the model score for a detection, normalised across layers so values are comparable between them."
    >
      <button
        type="button"
        style={{
          background: "none",
          border: 0,
          padding: 0,
          borderBottom: "1px dotted var(--color-muted)",
          color: "var(--color-fg)",
          fontSize: "var(--text-body-sm-size)",
          cursor: "help",
        }}
      >
        confidence
      </button>
    </HoverCard>
  ),
};
