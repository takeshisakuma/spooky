import React, { FC } from "react";
import { inputType } from "./inputType";

import Styles from "./input.module.scss";
export const Input: FC<inputType> = ({
  type,
  maxLength,
  required = false,
  name,
  children,
  placeholder,
  pattern,
  id,
  ajustClass,
}) => {
  return (
    <input
      type={type}
      className={[
        Styles.inputLetter,

        type === "password"
          ? Styles.inputPassword
          : type === "number"
          ? Styles.inputNumber
          : type === "email"
          ? Styles.inputEmail
          : type === "tel"
          ? Styles.inputTel
          : Styles.inputText,

        ajustClass,
      ].join(" ")}
      maxLength={maxLength}
      required={required ? false : true}
      pattern={pattern}
      placeholder={placeholder}
      id={id}>
      {children}
    </input>
  );
};
