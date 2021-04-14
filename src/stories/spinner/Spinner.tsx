import React, { FC } from "react";
import { spinnerType } from "./spinnerType";

import Styles from "./spinner.module.scss";

export const Spinner: FC<spinnerType> = ({ img, color }) => {
  return (
    <>
      <div className={Styles.spinnerWrapper}>
        <div
          className={[
            Styles.spinner,

            color === "red"
              ? Styles.spinnerColorRed
              : color === "blue"
              ? Styles.spinnerColorBlue
              : color === "yellow"
              ? Styles.spinnerColorYellow
              : color === "green"
              ? Styles.spinnerColorGreen
              : color === "black"
              ? Styles.spinnerColorBlack
              : Styles.spinnerColorWhite,

            img === "circle" ? Styles.spinnerImgCircle : Styles.spinnerImgNone,
          ].join(" ")}
        />
      </div>
    </>
  );
};
