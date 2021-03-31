import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Button } from "./Button";
import { buttonType } from "./buttonType";

export default {
  title: "Atom/Button",
  component: Button,
} as Meta;

const Template: Story<buttonType> = (args: buttonType) => <Button {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  roll: "normal",
  label: "Normal",
};

export const Danger = Template.bind({});
Danger.args = {
  roll: "danger",
  label: "Danger",
};

export const Submit = Template.bind({});
Submit.args = {
  roll: "submit",
  label: "Submit",
};

export const Disabled = Template.bind({});
Disabled.args = {
  roll: "normal",
  label: "Disabled",
  abled: false,
};
