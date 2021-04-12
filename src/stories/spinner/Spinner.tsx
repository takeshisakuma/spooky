import React, { FC } from "react";
import { spinnerType } from "./spinnerType";

import Styles from "./spinner.module.scss";

export const Spinner: FC<spinnerType> = ({
  img,
  size = "large",
  backgroundColor,
}) => {
  return (
    <>
      <div
        className={Styles.spinnerWrapper}
        style={{ backgroundColor: `${backgroundColor}` }}>
        <div
          className={[
            Styles.spinner,

            size === "large"
              ? Styles.spinnerSizeLarge
              : size === "small"
              ? Styles.spinnerSizeSmall
              : Styles.spinnerSizeMedium,

            img === "circle" ? Styles.spinnerImgCircle : Styles.spinnerImgNone,
          ].join(" ")}
        />
      </div>
    </>
  );
};
