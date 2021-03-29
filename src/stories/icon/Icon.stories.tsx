import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Icon } from "./Icon";
import { iconType } from "./iconType";

export default {
  title: "Atom/Icon",
  component: Icon,
} as Meta;

const Template: Story<iconType> = (args) => <Icon {...args} />;

export const Search = Template.bind({});
Search.args = {
  img: "search",
  size: "medium",
  backgroundColor: "#636e72",
};

export const Externallink = Template.bind({});
Externallink.args = {
  img: "externallink",
  size: "medium",
  backgroundColor: "#636e72",
};
