import * as React from "react";
import type { Meta, StoryObj } from from "@storybook/react-vite";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: "select",
      options: ["neutral", "accent", "outline", "danger", "warn"],
    },
    shape: { control: "inline-radio", options: ["square", "round"] },
    dot: { control: "boolean" },
  },
  args: { children: "Stable", variant: "neutral" },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Neutral: Story = {};
export const Accent: Story = { args: { variant: "accent", children: "New" } };
export const Outline: Story = { args: { variant: "outline", children: "Draft" } };
export const Danger: Story = { args: { variant: "danger", children: "Deprecated" } };
export const WithDot: Story = {
  args: { variant: "accent", dot: true, children: "Live" },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="accent">Accent</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="warn">Warn</Badge>
    </div>
  ),
};
