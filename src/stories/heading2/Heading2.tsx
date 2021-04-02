import React, { FC } from "react";
import { heading2Type } from "./heading2Type";

import "./heading2.scss";

/**
 * Primary UI component for user interaction
 */
export const Heading2: FC<heading2Type> = ({
  text,
  size,
  color,
  decoration = "simple",
  ...props
}) => {
  return (
    <>
      <h2
        className={[
          "heading2",
          `heading2Size--${size}`,
          `heading2Color--${color}`,
          `heading2Decoration--${decoration}`,
        ].join(" ")}>
        {text}
      </h2>
    </>
  );
};
