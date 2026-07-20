import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from "./select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => (
    <div style={{ width: "16rem" }}>
      <Select>
        <SelectTrigger aria-label="Region">
          <SelectValue placeholder="Select a region" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="eu-west">Europe, west</SelectItem>
          <SelectItem value="us-east">US, east</SelectItem>
          <SelectItem value="ap-southeast">Asia Pacific, southeast</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const Grouped: Story = {
  render: () => (
    <div style={{ width: "16rem" }}>
      <Select defaultValue="eu-west">
        <SelectTrigger aria-label="Region">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Europe</SelectLabel>
            <SelectItem value="eu-west">Europe, west</SelectItem>
            <SelectItem value="eu-north">Europe, north</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Americas</SelectLabel>
            <SelectItem value="us-east">US, east</SelectItem>
            <SelectItem value="us-west">US, west</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const WithDisabledItem: Story = {
  render: () => (
    <div style={{ width: "16rem" }}>
      <Select>
        <SelectTrigger aria-label="Plan">
          <SelectValue placeholder="Select a plan" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="starter">Starter</SelectItem>
          <SelectItem value="team">Team</SelectItem>
          <SelectItem value="enterprise" disabled>
            Enterprise, contact sales
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ width: "16rem" }}>
      <Select disabled defaultValue="eu-west">
        <SelectTrigger aria-label="Region">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="eu-west">Europe, west</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};
