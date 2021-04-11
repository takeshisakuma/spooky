import React, { FC } from "react";
import { Input } from "../input/Input";
import { inputWithLabelType } from "./inputWithLabelType";

import "./inputWithLabel.scss";

export const InputWithLabel: FC<inputWithLabelType> = ({
  type,
  maxLength,
  required = false,
  name,
  display,
  placeholder,
  pattern,
  labelId,
  inputId,
}) => {
  return (
    <>
      <label className='normalLabel' htmlFor={inputId} id={labelId}>
        {display}
      </label>

      <Input
        type={type}
        maxLength={maxLength}
        required={required}
        placeholder='&nbsp;'
        pattern={pattern}
        id={inputId}></Input>
    </>
  );
};
