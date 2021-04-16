import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { ButtonGroup } from "./ButtonGroup";
import { buttonGroupType } from "./buttonGroupType";

export default {
  title: "Molecule/ButtonGroup",
  component: ButtonGroup,
} as Meta;

const Template: Story<buttonGroupType> = (args: buttonGroupType) => (
  <ButtonGroup {...args} />
);

export const Center = Template.bind({});
Center.args = {
  position: "center",
  size: "large",
  buttons: [
    {
      label: "1st button",
      roll: "submit",
      abled: true,
    },
    {
      label: "2nd button",
      roll: "danger",
      abled: true,
    },
    {
      label: "3rd button",
      roll: "normal",
      abled: true,
    },
  ],
};

export const Right = Template.bind({});
Right.args = {
  position: "right",
  size: "medium",
  buttons: [
    {
      label: "1st button",
      roll: "normal",
      abled: true,
    },
    {
      label: "2nd button",
      roll: "danger",
      abled: true,
    },
    {
      label: "3rd button",
      roll: "submit",
      abled: true,
    },
  ],
};

export const Left = Template.bind({});
Left.args = {
  position: "left",
  size: "small",
  buttons: [
    {
      label: "1st button",
      roll: "submit",
      abled: true,
    },
    {
      label: "2nd button",
      roll: "normal",
      abled: true,
    },
    {
      label: "3rd button",
      roll: "danger",
      abled: true,
    },
  ],
};
