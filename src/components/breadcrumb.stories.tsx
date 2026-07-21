import type { Meta, StoryObj } from "@storybook/react-vite";
import { Breadcrumb } from "./breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  render: () => (
    <Breadcrumb
      items={[
        { label: "Projects", href: "#" },
        { label: "Shura Island", href: "#" },
        { label: "Detections" },
      ]}
    />
  ),
};

export const TwoLevels: Story = {
  render: () => (
    <Breadcrumb
      items={[{ label: "Projects", href: "#" }, { label: "Shura Island" }]}
    />
  ),
};

export const Deep: Story = {
  render: () => (
    <Breadcrumb
      items={[
        { label: "Projects", href: "#" },
        { label: "Shura Island", href: "#" },
        { label: "Detections", href: "#" },
        { label: "Northern district", href: "#" },
        { label: "d-1041" },
      ]}
    />
  ),
};
