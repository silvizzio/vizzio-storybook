import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar, AvatarGroup } from "./avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: { layout: "centered" },
  args: { name: "Silvia Arianti" },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
      <Avatar name="Silvia Arianti" size="sm" />
      <Avatar name="Silvia Arianti" size="md" />
      <Avatar name="Silvia Arianti" size="lg" />
    </div>
  ),
};

export const Fallback: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
      <Avatar name="Silvia Arianti" />
      <Avatar name="Jon" />
      <Avatar name="Red Sea Global" />
    </div>
  ),
};

export const BrokenImage: Story = {
  render: () => (
    <Avatar name="Silvia Arianti" src="/does-not-exist.png" size="lg" />
  ),
};

export const Group: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar name="Silvia Arianti" />
      <Avatar name="Jon Lee" />
      <Avatar name="Amira Hassan" />
      <Avatar name="Tom Becker" />
    </AvatarGroup>
  ),
};
