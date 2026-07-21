import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "./alert-dialog";

const meta: Meta<typeof AlertDialog> = {
  title: "Components/Alert Dialog",
  component: AlertDialog,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

export const Destructive: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete project</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Delete this project?</AlertDialogTitle>
        <AlertDialogDescription>
          Every dataset and report in it is removed. This cannot be undone.
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant="ghost">Keep project</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button variant="destructive">Delete permanently</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

export const BulkAction: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Reject 40 detections</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Reject 40 detections?</AlertDialogTitle>
        <AlertDialogDescription>
          They close as not real and leave the review queue. Reopening them one
          by one is the only way back.
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant="ghost">Cancel</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button variant="destructive">Reject all 40</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};
