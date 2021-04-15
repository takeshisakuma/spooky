import React, { FC } from "react";
import { Input } from "../input/Input";
import { floatingInputType } from "./floatingInputType";

import Styles from "./floatingInput.module.scss";

export const FloatingInput: FC<floatingInputType> = ({
  type,
  maxLength,
  required = false,
  name,
  display,
  placeholder,
  pattern,
  id,
  adjustClass,
}) => {
  return (
    <label className={Styles.adjustLabel}>
      <Input
        adjustClass={Styles.adjustInput}
        type={type}
        maxLength={maxLength}
        required={required}
        placeholder='&nbsp;'
        pattern={pattern}
        id={id}></Input>
      <span className={Styles.labeltext}>{display}</span>
    </label>
  );
};
