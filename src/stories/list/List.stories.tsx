import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { List } from "./List";
import { listType } from "./listType";

export default {
  title: "Atom/List",
  component: List,
} as Meta;

const Template: Story<listType> = (args: listType) => <List {...args} />;

export const orderedLarge = Template.bind({});
orderedLarge.args = {
  lists: ["item1", "item2", "item3"],
  size: "large",
  type: "ordered",
  color: "dark",
};

export const unOrderedMedium = Template.bind({});
unOrderedMedium.args = {
  lists: ["item1", "item2", "item3"],
  size: "medium",
  type: "unOrdered",
  color: "dark",
};
