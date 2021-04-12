import React, { FC } from "react";
import { listType } from "./listType";

import Styles from "./list.module.scss";

export const List: FC<listType> = ({
  lists,
  size = "medium",
  color,
  type = "unOrdered",
}) => {
  return (
    <>
      {type === "unOrdered" ? (
        <ul
          className={[
            Styles.listGroup,
            Styles.listGroupTypeUnOrdered,

            size === "small"
              ? Styles.listGroupSizeSmall
              : size === "large"
              ? Styles.listGroupSizeLarge
              : Styles.listGroupSizeMedium,

            color === "light"
              ? Styles.listGroupColorLight
              : color === "silver"
              ? Styles.listGroupColorSilver
              : color === "black"
              ? Styles.listGroupColorBlack
              : color === "white"
              ? Styles.listGroupColorWhite
              : color === "ash"
              ? Styles.listGroupColorAsh
              : Styles.listGroupColorDark,
          ].join(" ")}>
          {lists.map((list) => (
            <li
              className={[
                Styles.listItem,

                size === "small"
                  ? Styles.listItemSizeSmall
                  : size === "large"
                  ? Styles.listItemSizeLarge
                  : Styles.listItemSizeMedium,
              ].join(" ")}>
              {list}
            </li>
          ))}
        </ul>
      ) : (
        <ol
          className={[
            Styles.listGroup,
            Styles.listGroupTypeUnOrdered,
            size === "small"
              ? Styles.listGroupSizeSmall
              : size === "large"
              ? Styles.listGroupSizeLarge
              : Styles.listGroupSizeMedium,

            color === "light"
              ? Styles.listGroupColorLight
              : color === "silver"
              ? Styles.listGroupColorSilver
              : color === "black"
              ? Styles.listGroupColorBlack
              : color === "white"
              ? Styles.listGroupColorWhite
              : color === "ash"
              ? Styles.listGroupColorAsh
              : Styles.listGroupColorDark,
          ].join(" ")}>
          {lists.map((list) => (
            <li
              className={[
                Styles.listItem,

                size === "small"
                  ? Styles.listItemSizeSmall
                  : size === "large"
                  ? Styles.listItemSizeLarge
                  : Styles.listItemSizeMedium,
              ].join(" ")}>
              {list}
            </li>
          ))}
        </ol>
      )}
    </>
  );
};
