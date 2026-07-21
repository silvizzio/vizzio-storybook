import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bold, Italic, Underline, Map, List, Columns2 } from "lucide-react";
import { Toggle, ToggleGroup, ToggleGroupItem } from "./toggle";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Single: Story = {
  render: () => (
    <Toggle label="Bold">
      <Bold size={16} aria-hidden="true" />
    </Toggle>
  ),
};

export const Pressed: Story = {
  render: () => (
    <Toggle label="Bold" defaultPressed>
      <Bold size={16} aria-hidden="true" />
    </Toggle>
  ),
};

export const WithText: Story = {
  render: () => <Toggle label="Show rejected">Show rejected</Toggle>,
};

export const MultipleGroup: Story = {
  render: () => (
    <ToggleGroup label="Text formatting" type="multiple" defaultValue={["bold"]}>
      <ToggleGroupItem value="bold" label="Bold">
        <Bold size={16} aria-hidden="true" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" label="Italic">
        <Italic size={16} aria-hidden="true" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" label="Underline">
        <Underline size={16} aria-hidden="true" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const SingleGroup: Story = {
  render: () => (
    <ToggleGroup label="View" type="single" defaultValue="map">
      <ToggleGroupItem value="map" label="Map view">
        <Map size={16} aria-hidden="true" />
      </ToggleGroupItem>
      <ToggleGroupItem value="list" label="List view">
        <List size={16} aria-hidden="true" />
      </ToggleGroupItem>
      <ToggleGroupItem value="split" label="Split view">
        <Columns2 size={16} aria-hidden="true" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};
