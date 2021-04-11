import React, { FC } from "react";
import { labelType } from "./labelType";

import "./label.scss";

export const Label: FC<labelType> = ({ text, color, htmlFor }) => {
  return (
    <>
      <label
        className={["label", `labelColor--${color}`].join(" ")}
        htmlFor={htmlFor}>
        {text}
      </label>
    </>
  );
};
