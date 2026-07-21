import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: { layout: "padded" },
  args: { placeholder: "Add a note" },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

const wrap = { width: "28rem" };

export const Default: Story = {
  render: (args) => (
    <div style={wrap}>
      <Textarea aria-label="Note" {...args} />
    </div>
  ),
};

export const Invalid: Story = {
  render: () => (
    <div style={wrap}>
      <Textarea aria-label="Note" invalid defaultValue="Too short" />
    </div>
  ),
};

export const ReadOnly: Story = {
  render: () => (
    <div style={wrap}>
      <Textarea
        aria-label="Note"
        readOnly
        defaultValue="Reviewed by the duty analyst on 18 July."
      />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={wrap}>
      <Textarea aria-label="Note" disabled defaultValue="Not editable" />
    </div>
  ),
};
