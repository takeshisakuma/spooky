import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Spinner } from "./Spinner";
import { spinnerType } from "./spinnerType";

export default {
  title: "Atom/Spinner",
  component: Spinner,
} as Meta;

const Template: Story<spinnerType> = (args: spinnerType) => (
  <Spinner {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  img: "circle",
  size: "large",
  backgroundColor: "#636e72",
};
