import React, { FC } from "react";
import { paragraphType } from "./paragraphType";

import "./paragraph.scss";

export const Paragraph: FC<paragraphType> = ({ text, size, color }) => {
  return (
    <>
      <p
        className={[
          "paragraph",
          `paragraphSize--${size}`,
          `paragraphColor--${color}`,
        ].join(" ")}>
        {text}
      </p>
    </>
  );
};
