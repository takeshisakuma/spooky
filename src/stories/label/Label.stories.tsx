import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Label } from "./Label";
import { labelType } from "./labelType";

export default {
  title: "Atom/Label",
  component: Label,
} as Meta;

const Template: Story<labelType> = (args: labelType) => <Label {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  text: "Normal",
  color: "dark",
};
