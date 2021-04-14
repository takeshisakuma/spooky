import React, { FC } from "react";
import { inlineAnchorType } from "./inlineAnchorType";
import { Icon } from "../icon/Icon";

import Styles from "./inlineAnchor.module.scss";

export const InlineAnchor: FC<inlineAnchorType> = ({
  text,
  target,
  url,
  bold = false,
  italic = false,
  decoration = "none",
  img,
  color = "blue",
  ajustClass,
}) => {
  return (
    <>
      <a
        href={url}
        target={target === "external" ? "_blank" : ""}
        className={[
          Styles.anchor,

          bold === true ? Styles.inlinetextBold : "",

          italic === true ? Styles.inlinetextItalic : "",

          decoration === "lineThrough"
            ? Styles.inlinetextLineThrough
            : decoration === "underline"
            ? Styles.inlinetextUnderline
            : Styles.inlinetextNone,
        ].join(" ")}
        rel='noreferrer'>
        {text}
        <Icon ajustClass={Styles.ajustIcon} img={img} color={color} />
      </a>
    </>
  );
};
