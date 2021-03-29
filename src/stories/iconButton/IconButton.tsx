import React, { FC } from "react";
import { iconButtonType } from "./iconButtonType";
import { Button } from "../button/Button";
import { Icon } from "../icon/Icon";
import "./iconButton.scss";

/**
 * Primary UI component for user interaction
 */
export const IconButton: FC<iconButtonType> = ({
  roll = "normal",
  size = "medium",
  label,
  img = "search",
  abled = true,
  children,
  ...props
}) => {
  return (
    <>
      <Button
        roll={roll}
        abled={abled ? true : false}
        label={label}
        size={size}>
        <Icon img={img} size={size} />
      </Button>
    </>
  );
};
