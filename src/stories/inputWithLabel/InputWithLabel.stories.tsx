import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { InputWithLabel } from "./InputWithLabel";
import { inputWithLabelType } from "./inputWithLabelType";

export default {
  title: "Molecule/Input with Label",
  component: InputWithLabel,
} as Meta;

const Template: Story<inputWithLabelType> = (args: inputWithLabelType) => (
  <InputWithLabel {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  type: "text",
  maxLength: 20,
  name: "name",
  text: "text",
  inputId: "myText",
};

export const Number = Template.bind({});
Number.args = {
  type: "number",
  maxLength: 20,
  name: "number",
  text: "number",
  inputId: "myNumber",
};
export const Tel = Template.bind({});
Tel.args = {
  type: "tel",
  maxLength: 20,
  name: "tel",
  text: "tel",
  inputId: "myTel",
};

export const Search = Template.bind({});
Search.args = {
  type: "search",
  maxLength: 20,
  text: "search",
  inputId: "mySearch",
};
export const Password = Template.bind({});
Password.args = {
  type: "password",
  maxLength: 20,
  text: "password",
  inputId: "myPassword",
};
