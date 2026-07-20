import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Combobox, type ComboboxOption } from "./combobox";

const meta: Meta<typeof Combobox> = {
  title: "Components/Combobox",
  component: Combobox,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Combobox>;

const REGIONS: ComboboxOption[] = [
  { value: "eu-west", label: "Europe, west" },
  { value: "eu-north", label: "Europe, north" },
  { value: "eu-central", label: "Europe, central" },
  { value: "us-east", label: "US, east" },
  { value: "us-west", label: "US, west" },
  { value: "ap-southeast", label: "Asia Pacific, southeast" },
  { value: "ap-northeast", label: "Asia Pacific, northeast" },
  { value: "sa-east", label: "South America, east" },
  { value: "af-south", label: "Africa, south" },
  { value: "me-central", label: "Middle East, central" },
];

function Demo(props: { disabled?: boolean; initial?: string }) {
  const [value, setValue] = useState(props.initial ?? "");
  return (
    <div style={{ width: "18rem" }}>
      <Combobox
        aria-label="Region"
        options={REGIONS}
        value={value}
        onValueChange={setValue}
        placeholder="Select a region"
        searchPlaceholder="Search regions"
        disabled={props.disabled}
      />
    </div>
  );
}

export const Default: Story = { render: () => <Demo /> };
export const WithSelection: Story = { render: () => <Demo initial="ap-southeast" /> };
export const Disabled: Story = { render: () => <Demo disabled initial="us-east" /> };

export const LongList: Story = {
  render: () => {
    const many: ComboboxOption[] = Array.from({ length: 60 }, (_, index) => ({
      value: "zone-" + index,
      label: "Availability zone " + (index + 1),
    }));
    return (
      <div style={{ width: "18rem" }}>
        <Combobox
          aria-label="Zone"
          options={many}
          placeholder="Select a zone"
          searchPlaceholder="Search 60 zones"
        />
      </div>
    );
  },
};
