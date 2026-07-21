import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect, useState } from "react";
import { Progress } from "./progress";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof Progress>;

const wrap = { width: "28rem" };

export const Default: Story = {
  render: () => (
    <div style={wrap}>
      <Progress label="Generating report" value={42} showValue />
    </div>
  ),
};

export const WithoutValue: Story = {
  render: () => (
    <div style={wrap}>
      <Progress label="Uploading imagery" value={68} />
    </div>
  ),
};

export const Running: Story = {
  render: () => {
    function Live() {
      const [value, setValue] = useState(0);
      useEffect(() => {
        const id = window.setInterval(
          () => setValue((v) => (v >= 100 ? 0 : v + 4)),
          300
        );
        return () => window.clearInterval(id);
      }, []);
      return (
        <div style={wrap}>
          <Progress label="Processing detections" value={value} showValue />
        </div>
      );
    }
    return <Live />;
  },
};
