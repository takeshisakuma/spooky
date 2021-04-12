import React, { FC } from "react";
import { labelType } from "./labelType";

import "./label.scss";

export const Label: FC<labelType> = ({ text, color, htmlFor, ajustClass }) => {
  return (
    <>
      <label
        className={["label", `labelColor--${color}`, ajustClass].join(" ")}
        htmlFor={htmlFor}>
        {text}
      </label>
    </>
  );
};
