import * as React from "react";
import type { Preview } from "@storybook/react-vite";
import "../src/styles/index.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
    backgrounds: { disable: true },
    controls: { expanded: true },
    a11y: { test: "todo" },
  },
  globalTypes: {
    theme: {
      description: "Theme",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { theme: "light" },
  decorators: [
    (Story, context) => {
      const theme = (context.globals as { theme?: string }).theme ?? "light";
      React.useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
      }, [theme]);
      return (
        <div style={{ background: "var(--color-bg)", padding: "2rem" }}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
