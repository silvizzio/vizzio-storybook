import type { Meta, StoryObj } from "@storybook/react-vite";
import { Home, Layers, Map, Settings, FileText, Users } from "lucide-react";
import {
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from "./sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const body = {
  fontSize: "var(--text-body-sm-size)",
  lineHeight: "var(--text-body-sm-line)",
  color: "var(--color-body)",
};

function Shell({ defaultOpen = true }: { defaultOpen?: boolean }) {
  return (
    <SidebarProvider defaultOpen={defaultOpen} style={{ minHeight: "26rem" }}>
      <Sidebar>
        <SidebarHeader>
          <span
            style={{
              fontSize: "var(--text-body-sm-size)",
              fontWeight: 600,
              color: "var(--color-fg)",
            }}
          >
            Atlas
          </span>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton active>
                  <Home />
                  Overview
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Layers />
                  Datasets
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Map />
                  Detections
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Account</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <FileText />
                  Reports
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Users />
                  Members
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenuButton>
            <Settings />
            Settings
          </SidebarMenuButton>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <header
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            height: "3.5rem",
            padding: "0 1rem",
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          <SidebarTrigger />
          <span style={{ ...body, color: "var(--color-fg)", fontWeight: 500 }}>
            Overview
          </span>
        </header>
        <div style={{ padding: "1.5rem" }}>
          <p style={{ ...body, margin: 0 }}>
            The trigger sits in the header rather than the sidebar, which is why
            the open state lives in a provider. Cmd or Ctrl plus backslash also
            toggles it.
          </p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export const Default: Story = { render: () => <Shell /> };
export const Collapsed: Story = { render: () => <Shell defaultOpen={false} /> };
