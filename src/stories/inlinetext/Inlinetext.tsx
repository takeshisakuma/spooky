import React, { FC } from "react";
import { inlinetextType } from "./inlinetextType";

import Styles from "./inlinetext.module.scss";

export const Inlinetext: FC<inlinetextType> = ({
  text,
  size,
  color,
  bold = false,
  italic = false,
  decoration = "none",
}) => {
  return (
    <>
      <span
        className={[
          Styles.span,

          size === "small"
            ? Styles.inlinetextSizeSmall
            : size === "large"
            ? Styles.inlinetextSizeLarge
            : size === "xtraLarge"
            ? Styles.inlinetextSizeXtraLarge
            : Styles.inlinetextSizeMedium,

          color === "light"
            ? Styles.inlinetextColorLight
            : color === "silver"
            ? Styles.inlinetextColorSilver
            : color === "black"
            ? Styles.inlinetextColorBlack
            : color === "white"
            ? Styles.inlinetextColorWhite
            : color === "ash"
            ? Styles.inlinetextColorAsh
            : Styles.inlinetextColorDark,

          bold === true ? Styles.inlinetextBold : "",

          italic === true ? Styles.inlinetextItalic : "",

          decoration === "lineThrough"
            ? Styles.inlinetextLineThrough
            : decoration === "underline"
            ? Styles.inlinetextUnderline
            : Styles.inlinetextNone,
        ].join(" ")}>
        {text}
      </span>
    </>
  );
};
