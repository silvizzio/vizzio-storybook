import type { Meta, StoryObj } from "@storybook/react-vite";
import { Field, FieldLabel, useFieldControl } from "./field";

const meta: Meta<typeof Field> = {
  title: "Components/Field",
  component: Field,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof Field>;

/** A control that reads its wiring from Field rather than managing ids. */
function TextControl(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const control = useFieldControl();
  return (
    <input
      type="text"
      {...control}
      {...props}
      className="w-full rounded-[var(--radius-field)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-[var(--text-body-sm-size)] text-[var(--color-fg)] outline-none focus:border-[var(--color-fg)] aria-[invalid]:border-[var(--color-danger-border)]"
    />
  );
}

export const Default: Story = {
  render: () => (
    <div style={{ width: "22rem" }}>
      <Field>
        <FieldLabel>Project name</FieldLabel>
        <TextControl placeholder="atlas-web" />
      </Field>
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div style={{ width: "22rem" }}>
      <Field description="Lowercase, no spaces. Used in the project URL.">
        <FieldLabel>Project name</FieldLabel>
        <TextControl placeholder="atlas-web" />
      </Field>
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div style={{ width: "22rem" }}>
      <Field
        description="Lowercase, no spaces."
        error="That name is already taken."
      >
        <FieldLabel>Project name</FieldLabel>
        <TextControl defaultValue="atlas" />
      </Field>
    </div>
  ),
};

export const Stacked: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1.25rem", width: "22rem" }}>
      <Field description="Shown on your public profile.">
        <FieldLabel>Display name</FieldLabel>
        <TextControl />
      </Field>
      <Field error="Enter a valid email address.">
        <FieldLabel>Email</FieldLabel>
        <TextControl defaultValue="not-an-email" />
      </Field>
    </div>
  ),
};
