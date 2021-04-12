import React, { FC } from "react";
import { selectboxType } from "./selectboxType";

import Styles from "./selectbox.module.scss";

export const Selectbox: FC<selectboxType> = ({ name, items, selected }) => {
  return (
    <>
      <select name={name} className={Styles.selectbox}>
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
