import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./carousel";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const tile = {
  display: "flex",
  height: "8rem",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "var(--radius-surface)",
  background: "var(--color-active)",
  fontSize: "var(--text-body-sm-size)",
  color: "var(--color-body)",
} as const;

export const Default: Story = {
  render: () => (
    <div style={{ width: "36rem" }}>
      <Carousel label="Recent captures">
        <CarouselContent>
          {Array.from({ length: 8 }, (_, index) => (
            <CarouselItem key={index}>
              <div style={tile}>Capture {index + 1}</div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div style={{ marginTop: "0.75rem", display: "flex", gap: "0.5rem" }}>
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  ),
};
