import React, { FC } from "react";
import { inputType } from "./inputType";

import "./input.scss";

export const Input: FC<inputType> = ({
  type,
  maxLength,
  required = false,
  name,
  children,
  placeholder,
  pattern,
  id,
}) => {
  return (
    <input
      type={type}
      className={["input--letter", `input--${type}`].join(" ")}
      maxLength={maxLength}
      required={required ? false : true}
      pattern={pattern}
      placeholder={placeholder}
      id={id}>
      {children}
    </input>
  );
};
