import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Heading2 } from "./Heading2";
import { heading2Type } from "./heading2Type";

export default {
  title: "Atom/Heading2",
  component: Heading2,
} as Meta;

const Template: Story<heading2Type> = (args: heading2Type) => (
  <Heading2 {...args} />
);

export const Simple = Template.bind({});
Simple.args = {
  text: "Heading1",
  size: "medium",
  color: "dark",
  decoration: "none",
};
export const Underline = Template.bind({});
Underline.args = {
  text: "Heading1",
  size: "medium",
  color: "dark",
  decoration: "underline",
};
