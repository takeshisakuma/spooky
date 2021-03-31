import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { RadioButton } from "./RadioButton";
import { radioButtonType } from "./radioButtonType";

export default {
  title: "Atom/RadioButton",
  component: RadioButton,
} as Meta;

const Template: Story<radioButtonType> = (args: radioButtonType) => (
  <RadioButton {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  name: "choiceGroup",
  items: [
    { value: "item1", display: "ITEM1" },
    { value: "item2", display: "ITEM2" },
    { value: "item3", display: "ITEM3" },
  ],
};
