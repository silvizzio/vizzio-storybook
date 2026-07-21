import type { Meta, StoryObj } from "@storybook/react-vite";
import { Info } from "lucide-react";
import { Tooltip, TooltipProvider } from "./tooltip";
import { IconButton } from "./icon-button";
import { Button } from "./button";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <TooltipProvider delayDuration={200}>
        <Story />
      </TooltipProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip content="Normalised across layers">
      <IconButton label="About confidence" variant="ghost">
        <Info size={16} aria-hidden="true" />
      </IconButton>
    </Tooltip>
  ),
};

export const Sides: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.75rem" }}>
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Tooltip key={side} content={"Shown on the " + side} side={side}>
          <Button variant="outline" size="sm">
            {side}
          </Button>
        </Tooltip>
      ))}
    </div>
  ),
};
