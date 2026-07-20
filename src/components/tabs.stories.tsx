import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const body = {
  fontSize: "var(--text-body-sm-size)",
  lineHeight: "var(--text-body-sm-line)",
  color: "var(--color-body)",
  margin: 0,
};

export const Default: Story = {
  render: () => (
    <div style={{ width: "34rem" }}>
      <Tabs defaultValue="usage">
        <TabsList>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="style">Style</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="usage">
          <p style={body}>When to reach for this component, and when not to.</p>
        </TabsContent>
        <TabsContent value="style">
          <p style={body}>Sizes, states, and the tokens behind them.</p>
        </TabsContent>
        <TabsContent value="code">
          <p style={body}>Implementation and the full props table.</p>
        </TabsContent>
      </Tabs>
    </div>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <div style={{ width: "34rem" }}>
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="billing" disabled>
            Billing
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <p style={body}>Arrow keys move between tabs. Disabled tabs are skipped.</p>
        </TabsContent>
        <TabsContent value="activity">
          <p style={body}>Recent activity.</p>
        </TabsContent>
      </Tabs>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ width: "34rem" }}>
      <Tabs defaultValue="one" orientation="vertical">
        <TabsList>
          <TabsTrigger value="one">First</TabsTrigger>
          <TabsTrigger value="two">Second</TabsTrigger>
        </TabsList>
        <TabsContent value="one">
          <p style={body}>
            Orientation changes which arrow keys navigate, up and down rather
            than left and right.
          </p>
        </TabsContent>
        <TabsContent value="two">
          <p style={body}>Second panel.</p>
        </TabsContent>
      </Tabs>
    </div>
  ),
};
