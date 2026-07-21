import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "./switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  parameters: { layout: "padded" },
  args: { label: "Email notifications" },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: "24rem" }}>
      <Switch {...args} />
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div style={{ width: "24rem" }}>
      <Switch
        label="Email notifications"
        description="Sent when a detection you follow changes status."
        defaultChecked
      />
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <div style={{ width: "24rem", display: "grid", gap: "1rem" }}>
      <Switch label="Email notifications" defaultChecked />
      <Switch label="Weekly summary" description="Every Monday morning." />
      <Switch label="Beta features" disabled description="Not available on your plan." />
    </div>
  ),
};
