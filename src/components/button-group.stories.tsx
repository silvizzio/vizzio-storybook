import type { Meta, StoryObj } from "@storybook/react-vite";
import { AlignLeft, AlignCenter, AlignRight } from "lucide-react";
import { ButtonGroup } from "./button-group";
import { Button } from "./button";
import { IconButton } from "./icon-button";

const meta: Meta<typeof ButtonGroup> = {
  title: "Components/Button Group",
  component: ButtonGroup,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  render: () => (
    <ButtonGroup label="Export format">
      <Button variant="outline">CSV</Button>
      <Button variant="outline">GeoJSON</Button>
      <Button variant="outline">PDF</Button>
    </ButtonGroup>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <ButtonGroup label="Text alignment">
      <IconButton label="Align left" variant="outline">
        <AlignLeft size={16} aria-hidden="true" />
      </IconButton>
      <IconButton label="Align centre" variant="outline">
        <AlignCenter size={16} aria-hidden="true" />
      </IconButton>
      <IconButton label="Align right" variant="outline">
        <AlignRight size={16} aria-hidden="true" />
      </IconButton>
    </ButtonGroup>
  ),
};

export const Vertical: Story = {
  render: () => (
    <ButtonGroup label="Layer order" orientation="vertical">
      <Button variant="outline">Bring forward</Button>
      <Button variant="outline">Send backward</Button>
    </ButtonGroup>
  ),
};
