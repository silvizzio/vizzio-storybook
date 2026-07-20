import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { TopTabBar, TopTab, TopTabAction } from "./top-tab";

const meta: Meta<typeof TopTabBar> = {
  title: "Components/Top Tab",
  component: TopTabBar,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof TopTabBar>;

const APPS = ["Detections", "Imagery", "Reports"];

function Strip({ closable = true }: { closable?: boolean }) {
  const [open, setOpen] = useState(APPS);
  const [active, setActive] = useState(APPS[0]);

  return (
    <div>
      <TopTabBar>
        {open.map((app) => (
          <TopTab
            key={app}
            selected={app === active}
            controls={"panel-" + app}
            onClick={() => setActive(app)}
            onClose={
              closable
                ? () => setOpen((list) => list.filter((x) => x !== app))
                : undefined
            }
          >
            {app}
          </TopTab>
        ))}
      </TopTabBar>

      <div
        id={"panel-" + active}
        role="tabpanel"
        style={{
          padding: "1.5rem",
          fontSize: "var(--text-body-sm-size)",
          color: "var(--color-body)",
        }}
      >
        {active} panel
      </div>
    </div>
  );
}

export const Default: Story = { render: () => <Strip /> };
export const NotClosable: Story = { render: () => <Strip closable={false} /> };

export const WithActions: Story = {
  render: () => (
    <TopTabBar>
      <TopTab selected controls="panel-a">
        Detections
      </TopTab>
      <TopTab controls="panel-b">Imagery</TopTab>
    </TopTabBar>
  ),
};

export const ActionsOutsideTablist: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
        borderBottom: "1px solid var(--color-border)",
        background: "var(--color-panel)",
        paddingLeft: "0.5rem",
      }}
    >
      <div role="tablist" aria-label="Open apps" style={{ display: "flex", gap: "0.25rem" }}>
        <TopTab selected controls="p1">
          Detections
        </TopTab>
        <TopTab controls="p2">Imagery</TopTab>
      </div>
      <div style={{ display: "flex", alignItems: "center", marginLeft: "0.25rem" }}>
        <TopTabAction action="add" />
        <TopTabAction action="app-store" />
      </div>
    </div>
  ),
};

export const LongLabel: Story = {
  render: () => (
    <TopTabBar>
      <TopTab selected controls="p1">
        Quarterly detection summary for the northern district
      </TopTab>
      <TopTab controls="p2">Imagery</TopTab>
    </TopTabBar>
  ),
};
