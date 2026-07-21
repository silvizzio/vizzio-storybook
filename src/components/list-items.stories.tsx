import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListItems, ListItem } from "./list-items";
import { Avatar } from "./avatar";
import { Badge } from "./badge";

const meta: Meta<typeof ListItems> = {
  title: "Components/List Items",
  component: ListItems,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof ListItems>;

const wrap = {
  width: "30rem",
  border: "1px solid var(--color-border)",
  borderRadius: "var(--radius-surface)",
  overflow: "hidden",
} as const;

export const Default: Story = {
  render: () => (
    <div style={wrap}>
      <ListItems>
        <ListItem title="Shura Island" description="Red Sea Global" trailing="41 detections" />
        <ListItem title="Northern district" description="Red Sea Global" trailing="12 detections" />
        <ListItem title="Coastal zone" description="Red Sea Global" trailing="8 detections" />
      </ListItems>
    </div>
  ),
};

export const Linked: Story = {
  render: () => (
    <div style={wrap}>
      <ListItems>
        <ListItem href="#" title="Shura Island" description="Updated 2 hours ago" />
        <ListItem href="#" title="Northern district" description="Updated yesterday" />
        <ListItem href="#" title="Coastal zone" description="Updated last week" />
      </ListItems>
    </div>
  ),
};

export const WithLeading: Story = {
  render: () => (
    <div style={wrap}>
      <ListItems>
        <ListItem
          leading={<Avatar name="Silvia Arianti" size="sm" />}
          title="Silvia Arianti"
          description="Reviewed 41 detections"
          trailing={<Badge variant="accent">Active</Badge>}
        />
        <ListItem
          leading={<Avatar name="Jon Lee" size="sm" />}
          title="Jon Lee"
          description="Reviewed 12 detections"
          trailing={<Badge variant="accent">Active</Badge>}
        />
        <ListItem
          leading={<Avatar name="Amira Hassan" size="sm" />}
          title="Amira Hassan"
          description="No activity this week"
          trailing={<Badge variant="neutral">Idle</Badge>}
        />
      </ListItems>
    </div>
  ),
};
