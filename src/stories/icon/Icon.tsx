import React, { FC } from "react";
import { iconType } from "./iconType";

import Styles from "./icon.module.scss";

export const Icon: FC<iconType> = ({
  img,
  size = "large",
  color,
  ajustClass,
}) => {
  return (
    <>
      <div
        className={[
          Styles.icon,

          size === "large"
            ? Styles.iconSizeLarge
            : size === "medium"
            ? Styles.iconSizeMedium
            : Styles.iconSizeSmall,

          img === "search"
            ? Styles.iconSearch
            : img === "externallink"
            ? Styles.iconExternallink
            : img === "internallink"
            ? Styles.iconInternallink
            : Styles.iconNone,

          color === "red"
            ? Styles.iconColorRed
            : color === "blue"
            ? Styles.iconColorBlue
            : Styles.iconColorWhite,

          ajustClass,
        ].join(" ")}
      />
    </>
  );
};
