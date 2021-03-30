import React, { FC } from "react";
import { selectboxType } from "./selectboxType";

import "./selectbox.scss";

/**
 * Primary UI component for user interaction
 */
export const Selectbox: FC<selectboxType> = ({ name, items, ...props }) => {
  return (
    <>
      <select name={name} className='selectbox'>
        {items.map((item) => (
          <option key={item.value} value={item.value} selected={item.selected}>
            {item.display}
          </option>
        ))}
      </select>
    </>
  );
};
