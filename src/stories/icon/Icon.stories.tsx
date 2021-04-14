import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Icon } from "./Icon";
import { iconType } from "./iconType";

export default {
  title: "Atom/Icon",
  component: Icon,
} as Meta;

const Template: Story<iconType> = (args: iconType) => <Icon {...args} />;

export const Search = Template.bind({});
Search.args = {
  img: "search",
  color: "red",
};

export const Externallink = Template.bind({});
Externallink.args = {
  img: "externallink",
  color: "red",
};

export const Internallink = Template.bind({});
Internallink.args = {
  img: "internallink",
  color: "red",
};

export const Telephone = Template.bind({});
Telephone.args = {
  img: "tel",
  color: "red",
};

export const Mail = Template.bind({});
Mail.args = {
  img: "mail",
  color: "red",
};
export const Up = Template.bind({});
Up.args = {
  img: "up",
  color: "red",
};
export const Down = Template.bind({});
Down.args = {
  img: "down",
  color: "red",
};
