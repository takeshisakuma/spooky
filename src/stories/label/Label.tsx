import React, { FC } from "react";
import { labelType } from "./labelType";

import Styles from "./label.module.scss";
export const Label: FC<labelType> = ({ text, color, htmlFor, ajustClass }) => {
  return (
    <>
      <label
        className={[
          Styles.label,

          color === "light"
            ? Styles.labelColorLight
            : color === "silver"
            ? Styles.labelColorSilver
            : color === "black"
            ? Styles.labelColorBlack
            : color === "white"
            ? Styles.labelColorWhite
            : color === "ash"
            ? Styles.labelColorAsh
            : Styles.labelColorDark,

          ajustClass,
        ].join(" ")}
        htmlFor={htmlFor}>
        {text}
      </label>
    </>
  );
};
