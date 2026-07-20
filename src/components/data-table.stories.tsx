import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "./data-table";
import { Badge } from "./badge";
import { Checkbox } from "./checkbox";

type Detection = {
  id: string;
  site: string;
  type: string;
  confidence: number;
  status: "review" | "confirmed" | "dismissed";
};

const DATA: Detection[] = [
  { id: "d-1041", site: "Port of Rotterdam", type: "New structure", confidence: 0.94, status: "confirmed" },
  { id: "d-1042", site: "Jebel Ali", type: "Vessel", confidence: 0.71, status: "review" },
  { id: "d-1043", site: "Singapore", type: "Land clearing", confidence: 0.88, status: "confirmed" },
  { id: "d-1044", site: "Busan", type: "New structure", confidence: 0.62, status: "review" },
  { id: "d-1045", site: "Los Angeles", type: "Vessel", confidence: 0.55, status: "dismissed" },
  { id: "d-1046", site: "Hamburg", type: "Land clearing", confidence: 0.81, status: "confirmed" },
  { id: "d-1047", site: "Antwerp", type: "Vessel", confidence: 0.77, status: "review" },
  { id: "d-1048", site: "Shanghai", type: "New structure", confidence: 0.91, status: "confirmed" },
];

const columns: ColumnDef<Detection>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "site", header: "Site" },
  { accessorKey: "type", header: "Type" },
  {
    accessorKey: "confidence",
    header: "Confidence",
    cell: (info) => Math.round((info.getValue() as number) * 100) + "%",
  },
  {
    accessorKey: "status",
    header: "Status",
    enableSorting: false,
    cell: (info) => {
      const value = info.getValue() as Detection["status"];
      return (
        <Badge
          variant={
            value === "confirmed"
              ? "accent"
              : value === "dismissed"
                ? "outline"
                : "neutral"
          }
        >
          {value}
        </Badge>
      );
    },
  },
];

const meta: Meta<typeof DataTable> = {
  title: "Components/Data Table",
  component: DataTable,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const Default: Story = {
  render: () => (
    <div style={{ width: "56rem", maxWidth: "100%" }}>
      <DataTable
        columns={columns}
        data={DATA}
        caption="Detections by site, sortable by column"
      />
    </div>
  ),
};

export const Paginated: Story = {
  render: () => (
    <div style={{ width: "56rem", maxWidth: "100%" }}>
      <DataTable
        columns={columns}
        data={DATA}
        pageSize={4}
        caption="Detections by site, four per page"
      />
    </div>
  ),
};

export const WithSelection: Story = {
  render: () => {
    const withSelect: ColumnDef<Detection>[] = [
      {
        id: "select",
        enableSorting: false,
        header: "",
        cell: ({ row }) => (
          <Checkbox
            label={"Select " + row.original.id}
            checked={row.getIsSelected()}
            onChange={(event) => row.toggleSelected(event.target.checked)}
            className="sr-only-label"
          />
        ),
      },
      ...columns,
    ];

    return (
      <div style={{ width: "56rem", maxWidth: "100%" }}>
        <DataTable
          columns={withSelect}
          data={DATA}
          enableSelection
          pageSize={5}
          caption="Detections by site, selectable"
        />
      </div>
    );
  },
};

export const Empty: Story = {
  render: () => (
    <div style={{ width: "56rem", maxWidth: "100%" }}>
      <DataTable
        columns={columns}
        data={[]}
        caption="Detections by site"
        emptyMessage="No detections match the current filters."
      />
    </div>
  ),
};
