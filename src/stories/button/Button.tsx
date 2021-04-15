import React, { FC } from "react";
import { buttonType } from "./buttonType";

import Styles from "./button.module.scss";
//import "./button.scss";

export const Button: FC<buttonType> = ({
  roll = "normal",
  size = "large",
  label,
  abled = true,
  adjustClass,
  children,
}) => {
  return (
    <button
      type='button'
      className={[
        Styles.button,

        size === "large"
          ? Styles.buttonSizeLarge
          : size === "medium"
          ? Styles.buttonSizeMedium
          : Styles.buttonSizeSmall,

        roll === "danger"
          ? Styles.buttonColorDanger
          : roll === "submit"
          ? Styles.buttonColorSubmit
          : Styles.buttonColorNormal,

        adjustClass,
      ].join(" ")}
      disabled={abled ? false : true}>
      {label}
      {children}
    </button>
  );
};
