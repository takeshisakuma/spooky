import React, { FC } from "react";
import { radioButtonType } from "./radioButtonType";

import "./radioButton.scss";

/**
 * Primary UI component for user interaction
 */
export const RadioButton: FC<radioButtonType> = ({
  checked,
  id,
  item,
  value,
  ...props
}) => {
  return (
    <>
      <input
        type='radio'
        id={id}
        checked={checked ? true : false}
        value={value}
        {...props}></input>
      <label htmlFor={id}>{item}</label>
    </>
  );
};
