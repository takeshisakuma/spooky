import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Tab } from "./Tab";
import { tabType } from "./tabType";

export default {
  title: "Atom/Tab",
  component: Tab,
} as Meta;

const Template: Story<tabType> = (args) => <Tab {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  tabs: [
    {
      title: "tab1",
      content: "content1",
      id: "aaa",
    },
    {
      title: "tab2",
      content: "content2",
      id: "bbb",
    },
    {
      title: "tab3",
      content: "content3",
      id: "ccc",
    },
    {
      title: "tab4",
      content: "content4",
      id: "ddd",
    },
  ],
};
