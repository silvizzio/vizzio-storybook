import type { Meta, StoryObj } from "@storybook/react-vite";
import { Search, Trash2, Settings, Plus } from "lucide-react";
import { IconButton } from "./icon-button";

const meta: Meta<typeof IconButton> = {
  title: "Components/Icon Button",
  component: IconButton,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "destructive"],
    },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
  },
  args: { label: "Search", variant: "ghost", size: "md" },
  render: (args) => (
    <IconButton {...args}>
      <Search />
    </IconButton>
  ),
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Ghost: Story = {};
export const Primary: Story = { args: { variant: "primary", label: "Add item" } };
export const Outline: Story = { args: { variant: "outline", label: "Settings" } };
export const Destructive: Story = {
  args: { variant: "destructive", label: "Delete" },
};
export const Disabled: Story = { args: { disabled: true } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
      <IconButton variant="primary" label="Add">
        <Plus />
      </IconButton>
      <IconButton variant="secondary" label="Settings">
        <Settings />
      </IconButton>
      <IconButton variant="outline" label="Search">
        <Search />
      </IconButton>
      <IconButton variant="ghost" label="Search again">
        <Search />
      </IconButton>
      <IconButton variant="destructive" label="Delete">
        <Trash2 />
      </IconButton>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
      <IconButton size="sm" variant="outline" label="Small">
        <Search />
      </IconButton>
      <IconButton size="md" variant="outline" label="Medium">
        <Search />
      </IconButton>
      <IconButton size="lg" variant="outline" label="Large">
        <Search />
      </IconButton>
    </div>
  ),
};
