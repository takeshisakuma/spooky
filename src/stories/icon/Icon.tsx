import React, { FC } from "react";
import { iconType } from "./iconType";

import Styles from "./icon.module.scss";

export const Icon: FC<iconType> = ({
  img,
  color,
  ajustClass,
  children = " ",
}) => {
  return (
    <>
      <div
        className={[
          Styles.icon,

          img === "search"
            ? Styles.iconSearch
            : img === "externallink"
            ? Styles.iconExternallink
            : img === "internallink"
            ? Styles.iconInternallink
            : img === "tel"
            ? Styles.iconTelephone
            : img === "mail"
            ? Styles.iconMail
            : img === "up"
            ? Styles.iconUp
            : img === "down"
            ? Styles.iconDown
            : Styles.iconNone,

          color === "red"
            ? Styles.iconColorRed
            : color === "blue"
            ? Styles.iconColorBlue
            : color === "yellow"
            ? Styles.iconColorYellow
            : color === "green"
            ? Styles.iconColorGreen
            : color === "black"
            ? Styles.iconColorBlack
            : Styles.iconColorWhite,

          ajustClass,
        ].join(" ")}
      />
    </>
  );
};
