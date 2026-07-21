import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "./sheet";

const meta: Meta<typeof Sheet> = {
  title: "Components/Sheet",
  component: Sheet,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Sheet>;

function Demo({ side }: { side: "right" | "left" | "top" | "bottom" }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open from {side}</Button>
      </SheetTrigger>
      <SheetContent side={side}>
        <SheetTitle>Filters</SheetTitle>
        <SheetDescription>
          Narrow the detection queue. Changes apply as you make them.
        </SheetDescription>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="ghost">Clear all</Button>
          </SheetClose>
          <SheetClose asChild>
            <Button variant="primary">Done</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export const FromRight: Story = { render: () => <Demo side="right" /> };
export const FromLeft: Story = { render: () => <Demo side="left" /> };
export const FromBottom: Story = { render: () => <Demo side="bottom" /> };
