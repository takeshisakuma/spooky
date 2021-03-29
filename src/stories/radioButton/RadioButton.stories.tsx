import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { RadioButton } from "./RadioButton";
import { radioButtonType } from "./radioButtonType";

export default {
  title: "Atom/Radio",
  component: RadioButton,
} as Meta;

const Template: Story<radioButtonType> = (args) => <RadioButton {...args} />;

export const Unchecked = Template.bind({});
Unchecked.args = {
  checked: false,
  name: "choiceGroup",
  id: "item1",
  item: "item1",
  value: "item1",
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  name: "choiceGroup",
  id: "item2",
  item: "item2",
  value: "item2",
};
