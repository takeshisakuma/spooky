import React, { FC } from "react";
import { paragraphType } from "./paragraphType";

import "./paragraph.scss";

/**
 * Primary UI component for user interaction
 */
export const Paragraph: FC<paragraphType> = ({
  text,
  size,
  color,
  ...props
}) => {
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
