import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "./label";
import { Textarea } from "./textarea";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof Label>;

const wrap = { width: "24rem", display: "grid", gap: "0.5rem" } as const;

export const Default: Story = {
  render: () => (
    <div style={wrap}>
      <Label htmlFor="note">Review note</Label>
      <Textarea id="note" placeholder="Add a note" />
    </div>
  ),
};

export const Optional: Story = {
  render: () => (
    <div style={wrap}>
      <Label htmlFor="context" optional>
        Additional context
      </Label>
      <Textarea id="context" placeholder="Anything else worth recording" />
    </div>
  ),
};

/** Most library controls take a label prop. Label is for the ones that do not. */
export const WithANativeControl: Story = {
  render: () => (
    <div style={wrap}>
      <Label htmlFor="range">Capture window</Label>
      <input
        id="range"
        type="date"
        style={{
          height: "2.25rem",
          padding: "0 0.75rem",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-field)",
          background: "var(--color-bg)",
          color: "var(--color-fg)",
          fontSize: "var(--text-body-sm-size)",
        }}
      />
    </div>
  ),
};
