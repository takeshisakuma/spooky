import React, { FC } from "react";
import { inputType } from "./inputType";

import "./input.scss";

/**
 * Primary UI component for user interaction
 */
export const Input: FC<inputType> = ({
  type,
  maxLength,
  required,
  name,
  ...props
}) => {
  return (
    <input
      type={type}
      className={["input--letter", `input--${type}`].join(" ")}
      maxLength={maxLength}
      required={required ? false : true}
      {...props}></input>
  );
};
