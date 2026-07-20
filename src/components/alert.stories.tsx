import * as React from "react";
import type { Meta, StoryObj } from from "@storybook/react-vite";
import { Alert } from "./alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  parameters: { layout: "padded" },
  argTypes: {
    tone: { control: "select", options: ["info", "success", "warn", "danger"] },
    live: { control: "boolean" },
  },
  args: {
    title: "Note",
    children: "Tokens are resolved at build time and cannot change at runtime.",
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {};
export const Success: Story = {
  args: { tone: "success", title: "Saved", children: "Your changes are live." },
};
export const Warn: Story = {
  args: {
    tone: "warn",
    title: "Caution",
    children: "This action affects every consuming product.",
  },
};
export const Danger: Story = {
  args: {
    tone: "danger",
    title: "Known issue",
    children: "Light mode is unfinished and should not be built against.",
  },
};

export const AllTones: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1rem", width: "34rem" }}>
      <Alert tone="info" title="Note">Informational context.</Alert>
      <Alert tone="success" title="Saved">The operation completed.</Alert>
      <Alert tone="warn" title="Caution">Review before proceeding.</Alert>
      <Alert tone="danger" title="Known issue">Something is broken.</Alert>
    </div>
  ),
};
