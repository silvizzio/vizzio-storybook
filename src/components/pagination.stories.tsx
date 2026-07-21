import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Pagination } from "./pagination";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

function Demo({ pageCount, start = 1 }: { pageCount: number; start?: number }) {
  const [page, setPage] = useState(start);
  return <Pagination page={page} pageCount={pageCount} onPageChange={setPage} />;
}

export const Short: Story = { render: () => <Demo pageCount={5} /> };
export const Long: Story = { render: () => <Demo pageCount={42} start={12} /> };
export const FirstPage: Story = { render: () => <Demo pageCount={42} /> };
export const LastPage: Story = { render: () => <Demo pageCount={42} start={42} /> };
