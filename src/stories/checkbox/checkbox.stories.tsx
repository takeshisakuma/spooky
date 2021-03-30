import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Checkbox } from "./checkbox";
import { checkboxType } from "./checkboxType";

export default {
  title: "Atom/Checkbox",
  component: Checkbox,
} as Meta;

const Template: Story<checkboxType> = (args) => <Checkbox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  name: "selectGroup",
  items: [
    { value: "item1", display: "ITEM1", checked: false },
    { value: "item2", display: "ITEM2", checked: true },
    { value: "item3", display: "ITEM3", checked: false },
  ],
};
