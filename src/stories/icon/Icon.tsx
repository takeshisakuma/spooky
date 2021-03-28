import React, { FC } from "react";
import { iconType } from "./iconType";
//import search from "../assets/img/icon_search.svg";
//import externallink from "../assets/img/icon_externallink.svg";
import "./icon.scss";

/**
 * Primary UI component for user interaction
 */
export const Icon: FC<iconType> = ({
  img,
  size = "medium",
  backgroundColor,
  ...props
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
