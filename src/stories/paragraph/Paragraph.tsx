import React, { FC } from "react";
import { paragraphType } from "./paragraphType";

import Styles from "./paragraph.module.scss";

export const Paragraph: FC<paragraphType> = ({ text, size, color }) => {
  return (
    <>
      <p
        className={[
          Styles.paragraph,

          size === "small"
            ? Styles.paragraphSizeSmall
            : size === "large"
            ? Styles.paragraphSizeLarge
            : size === "xtraLarge"
            ? Styles.paragraphSizeXtraLarge
            : Styles.paragraphSizeMedium,

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
        ].join(" ")}>
        {text}
      </p>
    </>
  );
};
