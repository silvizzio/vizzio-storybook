import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputFile } from "./input-file";

const meta: Meta<typeof InputFile> = {
  title: "Components/Input File",
  component: InputFile,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof InputFile>;

const wrap = { width: "26rem" };

export const Default: Story = {
  render: () => (
    <div style={wrap}>
      <InputFile label="Capture imagery" />
    </div>
  ),
};

export const WithHint: Story = {
  render: () => (
    <div style={wrap}>
      <InputFile
        label="Capture imagery"
        hint="GeoTIFF or JPEG, up to 200 MB each."
        accept=".tif,.tiff,.jpg,.jpeg"
      />
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div style={wrap}>
      <InputFile
        label="Supporting documents"
        hint="PDF only. Add as many as you need."
        accept=".pdf"
        multiple
      />
    </div>
  ),
};
