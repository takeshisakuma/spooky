import React, { FC } from "react";
import { Input } from "../input/Input";
import { floatingInputType } from "./floatingInputType";

import "./floatingInput.scss";

/**
 * Primary UI component for user interaction
 */
export const FloatingInput: FC<floatingInputType> = ({
  type,
  maxLength,
  required,
  name,
  display,
  ...props
}) => {
  return (
    <label className='floatinglabel'>
      <Input type={type} maxLength={maxLength} required={required}></Input>
      <span className='labeltext'>{display}</span>
    </label>
  );
};
