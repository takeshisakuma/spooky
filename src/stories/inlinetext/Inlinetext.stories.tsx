import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Inlinetext } from "./Inlinetext";
import { inlinetextType } from "./inlinetextType";

export default {
  title: "Atom/Inlinetext",
  component: Inlinetext,
} as Meta;

const Template: Story<inlinetextType> = (args: inlinetextType) => (
  <Inlinetext {...args} />
);

export const bold = Template.bind({});
bold.args = {
  text: "bold",
  size: "medium",
  bold: true,
};

export const italic = Template.bind({});
italic.args = {
  text: "italic",
  size: "medium",
  italic: true,
};

export const underline = Template.bind({});
underline.args = {
  text: "underline",
  size: "medium",
  decoration: "underline",
};
export const lineThrough = Template.bind({});
lineThrough.args = {
  text: "linethrough",
  size: "medium",
  decoration: "lineThrough",
};
