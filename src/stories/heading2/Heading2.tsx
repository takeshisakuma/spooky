import React, { FC } from "react";
import { heading2Type } from "./heading2Type";

import Styles from "./heading2.module.scss";

export const Heading2: FC<heading2Type> = ({
  text,
  size,
  color,
  decoration = "none",
}) => {
  return (
    <>
      <h2
        className={[
          Styles.heading2,

          size === "small"
            ? Styles.heading2SizeSmall
            : size === "large"
            ? Styles.heading2SizeLarge
            : size === "xtraSmall"
            ? Styles.heading2SizeXtraSmall
            : size === "xtraLarge"
            ? Styles.heading2SizeXtraLarge
            : Styles.heading2SizeMedium,

          color === "light"
            ? Styles.paragraphColorLight
            : color === "silver"
            ? Styles.paragraphColorSilver
            : color === "black"
            ? Styles.paragraphColorBlack
            : color === "white"
            ? Styles.paragraphColorWhite
            : color === "ash"
            ? Styles.paragraphColorAsh
            : Styles.paragraphColorDark,

          decoration === "underline"
            ? Styles.heading2DecorationUnderline
            : Styles.heading2DecorationNone,
        ].join(" ")}>
        {text}
      </h2>
    </>
  );
};
