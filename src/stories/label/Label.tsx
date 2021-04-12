import React, { FC } from "react";
import { labelType } from "./labelType";

//import "./label.scss";
import Styles from "./label.module.scss";
export const Label: FC<labelType> = ({ text, color, htmlFor, ajustClass }) => {
  return (
    <>
      <label
        className={[Styles.label, Styles.labelColorDark, ajustClass].join(" ")}
        htmlFor={htmlFor}>
        {text}
      </label>
    </>
  );
};
