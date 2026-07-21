import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { DatePicker, CalendarView, type DateRange } from "./date-picker";

const meta: Meta<typeof DatePicker> = {
  title: "Components/Date Picker",
  component: DatePicker,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

const wrap = { width: "20rem" };

export const Single: Story = {
  render: () => {
    function Demo() {
      const [value, setValue] = useState<Date | undefined>();
      return (
        <div style={wrap}>
          <DatePicker
            label="Capture date"
            value={value}
            onValueChange={(next) => setValue(next as Date | undefined)}
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
      const [value, setValue] = useState<DateRange | undefined>();
      return (
        <div style={wrap}>
          <DatePicker
            label="Capture window"
            mode="range"
            placeholder="Choose a start and end"
            value={value}
            onValueChange={(next) => setValue(next as DateRange | undefined)}
          />
        </div>
      );
    }
    return <Demo />;
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={wrap}>
      <DatePicker label="Capture date" disabled />
    </div>
  ),
};

export const CalendarOnly: Story = {
  render: () => {
    function Demo() {
      const [value, setValue] = useState<Date | undefined>(new Date());
      return (
        <div
          style={{
            display: "inline-block",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-surface)",
          }}
        >
          <CalendarView mode="single" selected={value} onSelect={setValue} />
        </div>
      );
    }
    return <Demo />;
  },
};
