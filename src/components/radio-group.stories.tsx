import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioGroup, Radio } from "./radio-group";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/Radio Group",
  component: RadioGroup,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <fieldset style={{ border: 0, margin: 0, padding: 0, width: "24rem" }}>
      <legend
        style={{
          fontSize: "var(--text-body-sm-size)",
          fontWeight: 500,
          color: "var(--color-fg)",
          marginBottom: "0.75rem",
          padding: 0,
        }}
      >
        Default sort
      </legend>
      <RadioGroup defaultValue="confidence">
        <Radio value="confidence" label="Confidence" />
        <Radio value="site" label="Site" />
        <Radio value="date" label="Capture date" />
      </RadioGroup>
    </fieldset>
  ),
};

export const WithDescriptions: Story = {
  render: () => (
    <fieldset style={{ border: 0, margin: 0, padding: 0, width: "26rem" }}>
      <legend
        style={{
          fontSize: "var(--text-body-sm-size)",
          fontWeight: 500,
          color: "var(--color-fg)",
          marginBottom: "0.75rem",
          padding: 0,
        }}
      >
        Review order
      </legend>
      <RadioGroup defaultValue="highest">
        <Radio
          value="highest"
          label="Highest confidence first"
          description="Clears the obvious cases quickly."
        />
        <Radio
          value="lowest"
          label="Lowest confidence first"
          description="Surfaces model problems sooner."
        />
        <Radio value="oldest" label="Oldest first" disabled description="Needs a capture date on every detection." />
      </RadioGroup>
    </fieldset>
  ),
};
