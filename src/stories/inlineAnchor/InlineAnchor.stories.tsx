import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { InlineAnchor } from "./InlineAnchor";
import { inlineAnchorType } from "./inlineAnchorType";

export default {
  title: "Atom/InlineAnchor",
  component: InlineAnchor,
} as Meta;

const Template: Story<inlineAnchorType> = (args: inlineAnchorType) => (
  <InlineAnchor {...args} />
);

export const exteternallink = Template.bind({});
exteternallink.args = {
  text: "externallink",
  bold: true,
  target: "external",
  url: "https://google.com",
  img: "externallink",
};

export const inteternallink = Template.bind({});
inteternallink.args = {
  text: "internallink",
  bold: true,
  target: "internal",
  url: "/",
  img: "internallink",
};
export const telllink = Template.bind({});
telllink.args = {
  text: "telllink",
  bold: true,
  target: "tel",
  url: "tel:0000-0000",
  img: "tel",
};

export const maillink = Template.bind({});
maillink.args = {
  text: "maillink",
  bold: true,
  target: "mail",
  url: "mailto:xxx@sample.com",
  img: "mail",
};

export const noIconlink = Template.bind({});
noIconlink.args = {
  text: "noIconlink",
  bold: true,
  target: "any",
  url: "xxxxx",
  img: "none",
};
