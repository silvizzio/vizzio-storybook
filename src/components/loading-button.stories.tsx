import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { LoadingButton } from "./loading-button";

const meta: Meta<typeof LoadingButton> = {
  title: "Components/Loading Button",
  component: LoadingButton,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof LoadingButton>;

export const Idle: Story = {
  render: () => <LoadingButton variant="primary">Save</LoadingButton>,
};

export const Loading: Story = {
  render: () => (
    <LoadingButton variant="primary" loading>
      Save
    </LoadingButton>
  ),
};

export const WithLoadingLabel: Story = {
  render: () => (
    <LoadingButton variant="primary" loading loadingLabel="Saving">
      Save
    </LoadingButton>
  ),
};

export const Interactive: Story = {
  render: () => {
    function Demo() {
      const [loading, setLoading] = useState(false);
      return (
        <LoadingButton
          variant="primary"
          loading={loading}
          loadingLabel="Generating"
          onClick={() => {
            setLoading(true);
            window.setTimeout(() => setLoading(false), 2000);
          }}
        >
          Generate report
        </LoadingButton>
      );
    }
    return <Demo />;
  },
};
