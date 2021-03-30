import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Textarea } from "./Textarea";
import { textareaType } from "./textareaType";

export default {
  title: "Atom/Textarea",
  component: Textarea,
} as Meta;

const Template: Story<textareaType> = (args) => <Textarea {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  name: "mainText",
  rows: 10,
  cols: 60,
};
