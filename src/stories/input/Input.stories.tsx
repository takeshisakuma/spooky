import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Input } from "./Input";
import { inputType } from "./inputType";

export default {
  title: "Atom/Input",
  component: Input,
} as Meta;

const Template: Story<inputType> = (args: inputType) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  type: "text",
  maxLength: 20,
  name: "name",
};

export const Email = Template.bind({});
Email.args = {
  type: "email",
  maxLength: 20,
  required: true,
  name: "email",
};

export const Number = Template.bind({});
Number.args = {
  type: "number",
  maxLength: 20,
  name: "number",
};
export const Tel = Template.bind({});
Tel.args = {
  type: "tel",
  maxLength: 20,
  name: "tel",
};

export const Search = Template.bind({});
Search.args = {
  type: "search",
  maxLength: 20,
};
export const Password = Template.bind({});
Password.args = {
  type: "password",
  maxLength: 20,
};
