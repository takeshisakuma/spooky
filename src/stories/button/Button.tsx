import React, { FC } from "react";
import { buttonType } from "./buttonType";

import "./button.scss";

/**
 * Primary UI component for user interaction
 */
export const Button: FC<buttonType> = ({
  roll = "normal",
  size = "large",
  label,
  abled = true,
  children,
  ...props
}) => {
  return (
    <button
      type='button'
      className={["button", `buttonSize--${size}`, `buttonColor--${roll}`].join(
        " "
      )}
      disabled={abled ? false : true}
      {...props}>
      {label}
      {children}
    </button>
  );
};
