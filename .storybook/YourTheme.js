import { create } from "@storybook/theming";
import brandLogo from "../src/stories/assets/img/brandLogo.svg";

export default create({
  base: "light",

  colorPrimary: "black",
  colorSecondary: "#ff7675",

  // UI
  appBg: "#efefef",
  appContentBg: "white",
  appBorderColor: "white",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "black",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "#636e72",
  barSelectedColor: "#ff7675",
  barBg: "#dfe6e9",

  // Form colors
  inputBg: "white",
  inputBorder: "#dfe6e9",
  inputTextColor: "#636e72",
  inputBorderRadius: 8,

  brandTitle: "Spooky",
  brandUrl: "/",
  brandImage: brandLogo,
});
