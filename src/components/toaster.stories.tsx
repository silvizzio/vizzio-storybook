import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";
import { Toaster, toast } from "./toaster";

const meta: Meta<typeof Toaster> = {
  title: "Components/Toaster",
  component: Toaster,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: () => (
    <>
      <Toaster />
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <Button variant="outline" onClick={() => toast("Project saved")}>
          Neutral
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.success("Report generated")}
        >
          Success
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.error("Upload failed")}
        >
          Error
        </Button>
      </div>
    </>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <>
      <Toaster />
      <Button
        variant="outline"
        onClick={() =>
          toast("Export started", {
            description: "You will get an email when the file is ready.",
          })
        }
      >
        Show toast
      </Button>
    </>
  ),
};

export const WithAction: Story = {
  render: () => (
    <>
      <Toaster />
      <Button
        variant="outline"
        onClick={() =>
          toast("Project archived", {
            action: { label: "Undo", onClick: () => toast("Restored") },
          })
        }
      >
        Archive
      </Button>
    </>
  ),
};

// Named PromiseToast rather than Promise, which would shadow the global and
// make the constructor below unusable.
export const PromiseToast: Story = {
  render: () => (
    <>
      <Toaster />
      <Button
        variant="outline"
        onClick={() =>
          toast.promise(
            new Promise<void>((resolve) => window.setTimeout(() => resolve(), 1800)),
            {
              loading: "Generating report",
              success: "Report ready",
              error: "Could not generate report",
            }
          )
        }
      >
        Generate report
      </Button>
    </>
  ),
};
