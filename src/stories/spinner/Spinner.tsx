import React, { FC } from "react";
import { spinnerType } from "./spinnerType";

import "./spinner.scss";

/**
 * Primary UI component for user interaction
 */
export const Spinner: FC<spinnerType> = ({
  img,
  size = "large",
  backgroundColor,
  ...props
}) => {
  return (
    <>
      <div
        className='spinner--wrapper'
        style={{ backgroundColor: `${backgroundColor}` }}>
        <div
          className={[
            "spinner",
            `spinnerSize--${size}`,
            `spinner--${img}`,
          ].join(" ")}
        />
      </div>
    </>
  );
};