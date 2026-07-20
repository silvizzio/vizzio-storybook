import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card, CardTitle, CardBody } from "./card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <div style={{ width: "22rem" }}>
      <Card>
        <CardTitle>Design tokens</CardTitle>
        <CardBody>
          Color, type, spacing, and motion values shared across every product.
        </CardBody>
      </Card>
    </div>
  ),
};

export const Linked: Story = {
  render: () => (
    <div style={{ width: "22rem" }}>
      <Card href="#">
        <CardTitle>Components</CardTitle>
        <CardBody>Interactive elements documented across four tabs.</CardBody>
      </Card>
    </div>
  ),
};

export const Grid: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "1rem",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        width: "42rem",
      }}
    >
      <Card href="#">
        <CardTitle>Elements</CardTitle>
        <CardBody>The token layer.</CardBody>
      </Card>
      <Card href="#">
        <CardTitle>Patterns</CardTitle>
        <CardBody>Compositions that solve recurring problems.</CardBody>
      </Card>
    </div>
  ),
};
