import React, { FC } from "react";
import { listType } from "./listType";

import "./list.scss";

/**
 * Primary UI component for user interaction
 */
export const List: FC<listType> = ({
  lists,
  size = "medium",
  color,
  type = "unOrdered",
  ...props
}) => {
  return (
    <>
      {type === "unOrdered" ? (
        <ul
          className={[
            "listGroup",
            `listGroupType--${type}`,
            `listGroupSize--${size}`,
            `listGroupColor--${color}`,
          ].join(" ")}>
          {lists.map((list) => (
            <li className={["listItem", `listItemSize--${size}`].join(" ")}>
              {list}
            </li>
          ))}
        </ul>
      ) : (
        <ol
          className={[
            "listGroup",
            `listGroupType--${type}`,
            `listGroupSize--${size}`,
            `listGroupColor--${color}`,
          ].join(" ")}>
          {lists.map((list) => (
            <li className={["listItem", `listItemSize--${size}`].join(" ")}>
              {list}
            </li>
          ))}
        </ol>
      )}
    </>
  );
};
