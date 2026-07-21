import type { Meta, StoryObj } from "@storybook/react-vite";
import { ScrollArea } from "./scroll-area";

const meta: Meta<typeof ScrollArea> = {
  title: "Components/Scroll Area",
  component: ScrollArea,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

const SITES = Array.from({ length: 30 }, (_, index) => "Site " + (index + 1));

export const Vertical: Story = {
  render: () => (
    <ScrollArea
      className="rounded-[var(--radius-surface)] border border-[var(--color-border)]"
      style={{ height: "14rem", width: "18rem" }}
    >
      <div style={{ padding: "0.75rem" }}>
        {SITES.map((site) => (
          <p
            key={site}
            style={{
              margin: 0,
              padding: "0.4rem 0",
              fontSize: "var(--text-body-sm-size)",
              color: "var(--color-body)",
            }}
          >
            {site}
          </p>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea
      orientation="horizontal"
      className="rounded-[var(--radius-surface)] border border-[var(--color-border)]"
      style={{ width: "22rem" }}
    >
      <div style={{ display: "flex", gap: "0.75rem", padding: "0.75rem" }}>
        {SITES.slice(0, 12).map((site) => (
          <div
            key={site}
            style={{
              flex: "0 0 auto",
              width: "7rem",
              height: "4.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "var(--radius-control)",
              background: "var(--color-active)",
              fontSize: "var(--text-body-xs-size)",
              color: "var(--color-body)",
            }}
          >
            {site}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};
