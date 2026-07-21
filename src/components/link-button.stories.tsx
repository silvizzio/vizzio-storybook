import type { Meta, StoryObj } from "@storybook/react-vite";
import { LinkButton } from "./link-button";

const meta: Meta<typeof LinkButton> = {
  title: "Components/Link Button",
  component: LinkButton,
  parameters: { layout: "centered" },
  args: { href: "#", children: "View report" },
};

export default meta;
type Story = StoryObj<typeof LinkButton>;

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
      <LinkButton href="#">Primary</LinkButton>
      <LinkButton href="#" variant="outline">
        Outline
      </LinkButton>
      <LinkButton href="#" variant="ghost">
        Ghost
      </LinkButton>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
      <LinkButton href="#" size="sm">
        Small
      </LinkButton>
      <LinkButton href="#" size="md">
        Medium
      </LinkButton>
      <LinkButton href="#" size="lg">
        Large
      </LinkButton>
    </div>
  ),
};

export const External: Story = {
  render: () => (
    <LinkButton href="https://example.com" variant="outline" external>
      Open Storybook
    </LinkButton>
  ),
};
