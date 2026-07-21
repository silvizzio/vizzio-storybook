import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { InputOTP } from "./input-otp";

const meta: Meta<typeof InputOTP> = {
  title: "Components/Input OTP",
  component: InputOTP,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof InputOTP>;

export const Default: Story = {
  render: () => <InputOTP label="Verification code" />,
};

export const FourDigits: Story = {
  render: () => <InputOTP label="Verification code" maxLength={4} />,
};

export const Controlled: Story = {
  render: () => {
    function Demo() {
      const [value, setValue] = useState("");
      return (
        <div style={{ display: "grid", gap: "0.75rem", justifyItems: "center" }}>
          <InputOTP label="Verification code" value={value} onChange={setValue} />
          <p
            style={{
              margin: 0,
              fontSize: "var(--text-body-xs-size)",
              color: "var(--color-muted)",
            }}
          >
            {value.length} of 6 entered
          </p>
        </div>
      );
    }
    return <Demo />;
  },
};
