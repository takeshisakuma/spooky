import React, { FC } from "react";
import { Input } from "../input/Input";
import { floatingInputType } from "./floatingInputType";

import "./floatingInput.scss";

export const FloatingInput: FC<floatingInputType> = ({
  type,
  maxLength,
  required = false,
  name,
  display,
  placeholder,
  pattern,
  id,
}) => {
  return (
    <label className='floatinglabel'>
      <Input
        type={type}
        maxLength={maxLength}
        required={required}
        placeholder='&nbsp;'
        pattern={pattern}
        id={id}></Input>
      <span className='labeltext'>{display}</span>
    </label>
  );
};
