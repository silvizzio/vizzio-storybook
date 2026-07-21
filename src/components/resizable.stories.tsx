import type { Meta, StoryObj } from "@storybook/react-vite";
import { ResizableGroup, ResizablePanel, ResizableHandle } from "./resizable";

const meta: Meta<typeof ResizableGroup> = {
  title: "Components/Resizable",
  component: ResizableGroup,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof ResizableGroup>;

const pane = {
  display: "flex",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "var(--text-body-sm-size)",
  color: "var(--color-body)",
} as const;

const frame = {
  height: "16rem",
  width: "38rem",
  border: "1px solid var(--color-border)",
  borderRadius: "var(--radius-surface)",
  overflow: "hidden",
} as const;

export const Horizontal: Story = {
  render: () => (
    <div style={frame}>
      <ResizableGroup orientation="horizontal">
        <ResizablePanel defaultSize="60%" minSize="25%">
          <div style={pane}>Map</div>
        </ResizablePanel>
        <ResizableHandle withGrip />
        <ResizablePanel minSize="25%">
          <div style={pane}>Detection list</div>
        </ResizablePanel>
      </ResizableGroup>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={frame}>
      <ResizableGroup orientation="vertical">
        <ResizablePanel defaultSize="65%" minSize="20%">
          <div style={pane}>Imagery</div>
        </ResizablePanel>
        <ResizableHandle orientation="vertical" withGrip />
        <ResizablePanel minSize="20%">
          <div style={pane}>Metadata</div>
        </ResizablePanel>
      </ResizableGroup>
    </div>
  ),
};

export const ThreePanes: Story = {
  render: () => (
    <div style={frame}>
      <ResizableGroup orientation="horizontal">
        <ResizablePanel defaultSize="25%" minSize="15%">
          <div style={pane}>Filters</div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize="50%" minSize="25%">
          <div style={pane}>Map</div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel minSize="15%">
          <div style={pane}>Details</div>
        </ResizablePanel>
      </ResizableGroup>
    </div>
  ),
};
