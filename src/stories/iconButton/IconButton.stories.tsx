import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { IconButton } from "./IconButton";
import { iconButtonType } from "./iconButtonType";

export default {
  title: "Molecule/IconButton",
  component: IconButton,
} as Meta;

const Template: Story<iconButtonType> = (args: iconButtonType) => (
  <IconButton {...args} />
);

export const SearchButton = Template.bind({});
SearchButton.args = {
  roll: "normal",
  label: "Search",
  img: "search",
  size: "large",
};

export const ExternallinkButton = Template.bind({});
ExternallinkButton.args = {
  roll: "normal",
  label: "Externallink",
  img: "externallink",
  size: "large",
};

export const InternallinkButton = Template.bind({});
InternallinkButton.args = {
  roll: "normal",
  label: "Internallink",
  img: "internallink",
  size: "large",
};
