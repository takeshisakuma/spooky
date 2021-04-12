import React, { FC } from "react";
import { textareaType } from "./textareaType";

import Styles from "./textarea.module.scss";

export const Textarea: FC<textareaType> = ({ name, cols, rows }) => {
  return (
    <>
      <textarea
        className={Styles.textarea}
        rows={rows}
        cols={cols}
        name={name}></textarea>
    </>
  );
};
