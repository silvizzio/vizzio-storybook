import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Slider } from "./slider";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof Slider>;

const wrap = { width: "24rem" };

export const Default: Story = {
  render: () => {
    function Demo() {
      const [value, setValue] = useState([60]);
      return (
        <div style={wrap}>
          <Slider
            label="Minimum confidence"
            unit="%"
            value={value}
            onValueChange={setValue}
            max={100}
            step={1}
          />
        </div>
      );
    }
    return <Demo />;
  },
};

export const Range: Story = {
  render: () => {
    function Demo() {
      const [value, setValue] = useState([40, 85]);
      return (
        <div style={wrap}>
          <Slider
            label="Confidence range"
            unit="%"
            value={value}
            onValueChange={setValue}
            max={100}
            step={1}
          />
        </div>
      );
    }
    return <Demo />;
  },
};

export const Stepped: Story = {
  render: () => (
    <div style={wrap}>
      <Slider label="Opacity" unit="%" defaultValue={[50]} max={100} step={25} />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={wrap}>
      <Slider label="Minimum confidence" unit="%" defaultValue={[60]} max={100} disabled />
    </div>
  ),
};
