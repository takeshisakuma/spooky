import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { FloatingInput } from "./FloatingInput";
import { floatingInputType } from "./floatingInputType";

export default {
  title: "Molecule/FloatingInput",
  component: FloatingInput,
} as Meta;

const Template: Story<floatingInputType> = (args: floatingInputType) => (
  <FloatingInput {...args} />
);

export const Text = Template.bind({});
Text.args = {
  type: "text",
  maxLength: 20,
  name: "name",
  display: "text",
};

export const Number = Template.bind({});
Number.args = {
  type: "number",
  maxLength: 20,
  name: "number",
  display: "number",
};
export const Tel = Template.bind({});
Tel.args = {
  type: "tel",
  maxLength: 20,
  name: "tel",
  display: "tel",
};

export const Search = Template.bind({});
Search.args = {
  type: "search",
  maxLength: 20,
  display: "search",
};
export const Password = Template.bind({});
Password.args = {
  type: "password",
  maxLength: 20,
  display: "password",
};
