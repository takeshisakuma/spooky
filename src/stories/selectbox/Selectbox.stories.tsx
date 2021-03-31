import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Selectbox } from "./Selectbox";
import { selectboxType } from "./selectboxType";

export default {
  title: "Atom/Selectbox",
  component: Selectbox,
} as Meta;

const Template: Story<selectboxType> = (args: selectboxType) => (
  <Selectbox {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  name: "selectGroup",
  items: [
    { value: "item1", display: "ITEM1" },
    { value: "item2", display: "ITEM2" },
    { value: "item3", display: "ITEM3" },
  ],
  selected: 2,
};
