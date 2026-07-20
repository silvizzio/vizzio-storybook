import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: { disabled: { control: "boolean" }, checked: { control: "boolean" } },
  args: { label: "Email me about releases" },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};
export const Checked: Story = { args: { defaultChecked: true } };
export const WithHint: Story = {
  args: { hint: "At most one message per release. Unsubscribe anytime." },
};
export const Disabled: Story = { args: { disabled: true, defaultChecked: true } };

export const Group: Story = {
  render: () => (
    <fieldset style={{ display: "grid", gap: "0.75rem", border: 0, padding: 0 }}>
      <legend
        style={{ marginBottom: "0.5rem", fontSize: 13, fontWeight: 600 }}
      >
        Notifications
      </legend>
      <Checkbox label="Releases" defaultChecked />
      <Checkbox label="Breaking changes" defaultChecked />
      <Checkbox label="Weekly digest" />
    </fieldset>
  ),
};
