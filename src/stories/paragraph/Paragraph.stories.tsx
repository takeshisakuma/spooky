import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Paragraph } from "./Paragraph";
import { paragraphType } from "./paragraphType";

export default {
  title: "Atom/Paragraph",
  component: Paragraph,
} as Meta;

const Template: Story<paragraphType> = (args: paragraphType) => (
  <Paragraph {...args} />
);

export const small = Template.bind({});
small.args = {
  text:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eligendi odit deleniti, obcaecati fuga reiciendis. Est dolores veritatis cum nostrum. Amet exercitationem reprehenderit illo, nobis nesciunt omnis incidunt consequatur quasi quas facere animi ab in dicta perferendis sapiente dolores, ex voluptatem ipsa quae recusandae iste sequi nisi reiciendis. Fugit, minima provident animi ipsam quas aliquam reiciendis facilis optio similique repellat est perferendis error veritatis vitae voluptas nesciunt asperiores? At, iste quo, aspernatur dolore sequi incidunt accusamus minima praesentium impedit quia similique quos molestias culpa neque fugiat temporibus odit deserunt? Blanditiis nihil cum esse expedita, neque asperiores doloremque fugit aliquam ab.",
  size: "small",
};
export const medium = Template.bind({});
medium.args = {
  text:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam assumenda consequuntur rerum, fuga unde ad rem cum saepe, voluptate deserunt tempora dicta maiores! Enim modi pariatur numquam magni quam eius, reiciendis minus ex expedita nihil vitae nostrum alias! Animi commodi sunt voluptates dolor eaque nobis expedita quisquam tenetur eos ducimus consectetur facere ipsum modi praesentium quam harum unde in aperiam laboriosam, inventore culpa obcaecati veritatis. Magnam libero, doloremque neque harum praesentium voluptatem unde autem cupiditate quo accusamus. Nostrum vitae iure excepturi dignissimos? Laborum veritatis nesciunt, magni tenetur sunt officia dolore quod saepe cupiditate omnis provident eveniet vitae eius distinctio temporibus.",
  size: "medium",
};
export const large = Template.bind({});
large.args = {
  text:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, dolore. Quis, doloremque architecto iure quos maiores est nisi ad distinctio ab vitae earum numquam, saepe quidem sit commodi eum veritatis in deserunt ullam eius obcaecati velit incidunt. Aut, vero? Dolores odio laudantium voluptas expedita libero corporis deserunt optio cum pariatur perferendis. Voluptatum, necessitatibus sint quibusdam sunt eaque quos officiis et magni excepturi debitis dolorem natus repellendus ea adipisci aperiam iure neque ipsa molestias. Enim voluptas cupiditate facere, voluptatem sed minima? Est saepe ullam voluptate! Quo voluptatibus harum tempora quae exercitationem, facere corporis enim voluptate, numquam alias odit aspernatur voluptatem autem.",
  size: "large",
};
export const xtraLarge = Template.bind({});
xtraLarge.args = {
  text:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel eum repellendus dicta id asperiores nam sunt libero, quia inventore deserunt culpa ipsam minus hic quisquam quo corporis obcaecati. Odio porro tempora cupiditate reprehenderit impedit a enim velit pariatur delectus est laborum fugit natus, autem quas nemo dolore ex eveniet totam! Minus, ut maxime. Vel delectus dolorum totam recusandae possimus. Itaque minima iste voluptatum molestiae impedit pariatur officia, exercitationem ad quis praesentium voluptatem ex adipisci, temporibus consequatur eum atque sunt! Veniam quibusdam cupiditate iusto cumque eos, ea ipsa mollitia qui, molestias neque est, officiis odio! Eaque exercitationem corporis ad consectetur quibusdam!",
  size: "xtraLarge",
};
