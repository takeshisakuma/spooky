import React, { FC } from "react";
import { textareaType } from "./textareaType";

import "./textarea.scss";

export const Textarea: FC<textareaType> = ({ name, cols, rows, ...props }) => {
  return (
    <>
      <textarea
        className='textarea'
        rows={rows}
        cols={cols}
        name={name}></textarea>
    </>
  );
};
