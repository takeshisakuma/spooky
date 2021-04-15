import React, { FC } from "react";
import { Input } from "../input/Input";
import { Label } from "../label/Label";
import { inputWithLabelType } from "./inputWithLabelType";

//import "./inputWithLabel.scss";
import Styles from "./inputWithLabel.module.scss";
export const InputWithLabel: FC<inputWithLabelType> = ({
  type,
  maxLength,
  required = false,
  name,
  text,
  placeholder,
  pattern,
  labelId,
  inputId,
  adjustClass,
  id,
  color,
  children,
}) => {
  return (
    <>
      <Label
        adjustClass={Styles.adjustLabel}
        htmlFor={inputId}
        color={color}
        text={text}></Label>

      <Input
        adjustClass={Styles.adjustInput}
        type={type}
        maxLength={maxLength}
        required={required}
        placeholder='&nbsp;'
        pattern={pattern}
        id={inputId}></Input>
    </>
  );
};
