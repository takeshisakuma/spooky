import React, { FC } from "react";
import { selectboxType } from "./selectboxType";

import "./selectbox.scss";

/**
 * Primary UI component for user interaction
 */
export const Selectbox: FC<selectboxType> = ({
  name,
  items,
  selected,
  ...props
}) => {
  return (
    <>
      <select name={name} className='selectbox'>
        {items.map((item, index: number) => (
          <option
            key={item.value}
            value={item.value}
            selected={selected === index ? true : false}>
            {item.display}
          </option>
        ))}
      </select>
    </>
  );
};
