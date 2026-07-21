import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const ITEMS = [
  {
    value: "confidence",
    question: "How is confidence calculated?",
    answer:
      "Confidence is the model score for the detection, normalised across layers so values are comparable between them.",
  },
  {
    value: "capture",
    question: "How often is imagery captured?",
    answer:
      "Capture frequency depends on the site. Most sites are captured monthly, with priority sites weekly.",
  },
  {
    value: "retention",
    question: "How long are detections retained?",
    answer:
      "Detections are retained for the life of the project, including those rejected during review.",
  },
];

export const Single: Story = {
  render: () => (
    <div style={{ width: "34rem" }}>
      <Accordion type="single" collapsible>
        {ITEMS.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div style={{ width: "34rem" }}>
      <Accordion type="multiple" defaultValue={["confidence"]}>
        {ITEMS.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  ),
};
