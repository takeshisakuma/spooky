import React, { FC } from "react";
import { buttonGroupType } from "./buttonGroupType";

import { Button } from "../button/Button";
//import { iconButton } from "../iconButton/IconButton";

import Styles from "./buttonGroup.module.scss";

export const ButtonGroup: FC<buttonGroupType> = ({
  buttons,
  position = "center",
  size,
}) => {
  return (
    <>
      <div
        className={[
          Styles.buttonGroup,

          position === "left"
            ? Styles.buttonGroupPositionLeft
            : position === "right"
            ? Styles.buttonGroupPositionRight
            : Styles.buttonGroupPositionCenter,
        ].join(" ")}>
        {buttons.map((button: any) => (
          <Button
            adjustClass={Styles.adjustButton}
            roll={button.roll}
            abled={button.abled ? true : false}
            label={button.label}
            size={size}></Button>
        ))}
      </div>
    </>
  );
};
