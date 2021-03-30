import React, { FC } from "react";
import { radioButtonType } from "./radioButtonType";

import "./radioButton.scss";

/**
 * Primary UI component for user interaction
 */
export const RadioButton: FC<radioButtonType> = ({ name, items, ...props }) => {
  return (
    <>
      {items.map((item) => (
        <div key={item.value}>
          <input name={name} type='radio' id={item.value} />
          <label htmlFor={item.value}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              viewBox='0 0 64 64'>
              <path d='M21.184 54.944c-9.963-.554-17.871-8.793-17.871-18.88 0-10.442 8.479-18.909 18.938-18.909s18.938 8.466 18.938 18.909-8.479 18.91-18.938 18.91' />
            </svg>

            {item.display}
          </label>
        </div>
      ))}
    </>
  );
};
