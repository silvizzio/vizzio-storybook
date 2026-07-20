import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

/**
 * Manager chrome, themed to match the docs site.
 *
 * The manager cannot use currentColor, it loads brandImage as a plain URL,
 * so light and dark need separate files. Both live in public/ and are served
 * by staticDirs.
 *
 * Colour values mirror the BRAND and surface tokens in src/styles/tokens.css.
 * When those change, change them here too. There is no shared source, because
 * the manager runs outside the preview iframe and cannot read the CSS.
 */

const shared = {
  brandTitle: "Vizzio Design System",
  brandTarget: "_self",
  fontBase: '"Inter", ui-sans-serif, system-ui, sans-serif',
  fontCode: "ui-monospace, SFMono-Regular, Menlo, monospace",
  appBorderRadius: 0,
  inputBorderRadius: 0,
};

const light = create({
  ...shared,
  base: "light",
  brandImage: "./logo.svg",

  colorPrimary: "#2563eb",
  colorSecondary: "#2563eb",

  appBg: "#fafafa",
  appContentBg: "#ffffff",
  appPreviewBg: "#ffffff",
  appBorderColor: "#e5e5e5",

  textColor: "#0a0a0a",
  textMutedColor: "#737373",
  textInverseColor: "#ffffff",

  barBg: "#ffffff",
  barTextColor: "#737373",
  barSelectedColor: "#2563eb",
  barHoverColor: "#0a0a0a",

  inputBg: "#ffffff",
  inputBorder: "#e5e5e5",
  inputTextColor: "#0a0a0a",
});

const dark = create({
  ...shared,
  base: "dark",
  brandImage: "./logo-white.svg",

  colorPrimary: "#60a5fa",
  colorSecondary: "#60a5fa",

  appBg: "#141414",
  appContentBg: "#0a0a0a",
  appPreviewBg: "#0a0a0a",
  appBorderColor: "#2e2e2e",

  textColor: "#fafafa",
  textMutedColor: "#a3a3a3",
  textInverseColor: "#0a0a0a",

  barBg: "#0a0a0a",
  barTextColor: "#a3a3a3",
  barSelectedColor: "#60a5fa",
  barHoverColor: "#fafafa",

  inputBg: "#0a0a0a",
  inputBorder: "#2e2e2e",
  inputTextColor: "#fafafa",
});

const prefersDark =
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

addons.setConfig({
  theme: prefersDark ? dark : light,
  sidebar: { showRoots: true },
});
