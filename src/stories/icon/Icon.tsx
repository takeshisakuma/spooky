import React, { FC } from "react";
import { iconType } from "./iconType";

import "./icon.scss";

export const Icon: FC<iconType> = ({
  img,
  size = "large",
  backgroundColor,
}) => {
  return (
    <>
      <div
        className={["icon", `iconSize--${size}`, `icon--${img}`].join(" ")}
        style={{ backgroundColor: `${backgroundColor}` }}
      />
    </>
  );
};
