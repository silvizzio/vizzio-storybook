import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "./drawer";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open filters</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerTitle>Filters</DrawerTitle>
        <DrawerDescription>
          Applied as you change them. Drag down or press Escape to close.
        </DrawerDescription>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="ghost">Close</Button>
          </DrawerClose>
          <Button variant="primary">Apply</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Detection details</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerTitle>Detection d-1041</DrawerTitle>
        <DrawerDescription>Shura Island, northern district.</DrawerDescription>
        <div style={{ marginTop: "1rem", display: "grid", gap: "0.75rem" }}>
          {Array.from({ length: 14 }, (_, index) => (
            <p
              key={index}
              style={{
                margin: 0,
                fontSize: "var(--text-body-sm-size)",
                color: "var(--color-body)",
              }}
            >
              Capture {index + 1}, processed and reviewed.
            </p>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  ),
};
