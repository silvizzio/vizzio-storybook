import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { BarChart3, FileText, Map } from "lucide-react";
import { ReportSelection } from "./report-selection";

const meta: Meta<typeof ReportSelection> = {
  title: "Components/Report Selection",
  component: ReportSelection,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof ReportSelection>;

const TEMPLATES = [
  {
    value: "summary",
    title: "Summary report",
    description: "Counts by layer and change type, one page.",
    media: <FileText size={28} aria-hidden="true" />,
  },
  {
    value: "map",
    title: "Map report",
    description: "Detections plotted over the latest capture.",
    media: <Map size={28} aria-hidden="true" />,
  },
  {
    value: "trend",
    title: "Trend report",
    description: "Change over time, by month and district.",
    media: <BarChart3 size={28} aria-hidden="true" />,
  },
];

function Group({ disabled }: { disabled?: boolean }) {
  const [value, setValue] = useState("summary");

  return (
    <fieldset style={{ border: 0, margin: 0, padding: 0 }}>
      <legend
        style={{
          fontSize: "var(--text-body-sm-size)",
          fontWeight: 500,
          color: "var(--color-fg)",
          marginBottom: "0.75rem",
          padding: 0,
        }}
      >
        Choose a report template
      </legend>

      <div
        style={{
          display: "grid",
          gap: "0.75rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
        }}
      >
        {TEMPLATES.map((template) => (
          <ReportSelection
            key={template.value}
            name="report-template"
            value={template.value}
            selected={value === template.value}
            onSelect={setValue}
            title={template.title}
            description={template.description}
            media={template.media}
            disabled={disabled && template.value === "trend"}
          />
        ))}
      </div>
    </fieldset>
  );
}

export const Default: Story = { render: () => <Group /> };
export const WithDisabledOption: Story = { render: () => <Group disabled /> };

export const WithoutMedia: Story = {
  render: () => {
    function Plain() {
      const [value, setValue] = useState("summary");
      return (
        <div style={{ display: "grid", gap: "0.75rem", maxWidth: "22rem" }}>
          <ReportSelection
            name="plain"
            value="summary"
            selected={value === "summary"}
            onSelect={setValue}
            title="Summary report"
            description="Counts by layer and change type."
          />
          <ReportSelection
            name="plain"
            value="map"
            selected={value === "map"}
            onSelect={setValue}
            title="Map report"
            description="Detections plotted over the latest capture."
          />
        </div>
      );
    }
    return <Plain />;
  },
};
