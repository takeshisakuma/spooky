import React, { FC } from "react";
import { buttonType } from "./buttonType";

import "./button.scss";

export const Button: FC<buttonType> = ({
  roll = "normal",
  size = "large",
  label,
  abled = true,
  children,
}) => {
  return (
    <button
      type='button'
      className={["button", `buttonSize--${size}`, `buttonColor--${roll}`].join(
        " "
      )}
      disabled={abled ? false : true}>
      {label}
      {children}
    </button>
  );
};
