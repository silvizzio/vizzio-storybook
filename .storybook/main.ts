import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  framework: { name: "@storybook/react-vite", options: {} },
  // Serves the manager brand images.
  staticDirs: ["../public"],

  async viteFinal(config) {
    // Radix ships "use client" directives that the bundler cannot act on and
    // warns about for every file. The warnings are noise, not a defect.
    config.build = config.build ?? {};
    const rollup = (config.build.rollupOptions ?? {}) as {
      onwarn?: (warning: { code?: string }, warn: (w: unknown) => void) => void;
    };
    const previous = rollup.onwarn;
    rollup.onwarn = (warning, warn) => {
      if (warning.code === "MODULE_LEVEL_DIRECTIVE") return;
      if (previous) previous(warning, warn);
      else warn(warning);
    };
    config.build.rollupOptions = rollup;
    return config;
  },
};

export default config;
