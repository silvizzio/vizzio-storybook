import * as React from "react";
import type { Meta, StoryObj } from from "@storybook/react-vite";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    invalid: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: { label: "Project name", placeholder: "Enter a name", size: "md" },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};
export const WithHint: Story = {
  args: { hint: "Used in the project URL. Lowercase, no spaces." },
};
export const Invalid: Story = {
  args: { invalid: true, hint: "Name is already taken.", defaultValue: "atlas" },
};
export const Disabled: Story = { args: { disabled: true, defaultValue: "Locked" } };

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1rem", width: "20rem" }}>
      <Input size="sm" label="Small" placeholder="Small" />
      <Input size="md" label="Medium" placeholder="Medium" />
      <Input size="lg" label="Large" placeholder="Large" />
    </div>
  ),
};
