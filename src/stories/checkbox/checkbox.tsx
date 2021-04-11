import React, { FC } from "react";
import { checkboxType } from "./checkboxType";

import "./checkbox.scss";

export const Checkbox: FC<checkboxType> = ({ name, items }) => {
  return (
    <>
      {items.map((item) => (
        <div>
          <input
            type='checkbox'
            className='checkbox'
            name={name}
            key={item.value}
            id={item.value}
            value={item.value}
            defaultChecked={item.checked}
          />
          <label className='checkboxLabel' htmlFor={item.value}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              viewBox='0 0 64 64'>
              <path d='M18 4l-6 42s66-68 74-40' />
            </svg>
            {item.display}
          </label>
        </div>
      ))}
    </>
  );
};
