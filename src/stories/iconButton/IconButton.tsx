import React, { FC } from "react";
import { iconButtonType } from "./iconButtonType";
import { Button } from "../button/Button";
import { Icon } from "../icon/Icon";

import Styles from "./iconButton.module.scss";
//import "./iconButton.scss";

export const IconButton: FC<iconButtonType> = ({
  roll = "normal",
  size = "medium",
  label,
  img = "search",
  abled = true,
  children,
  adjustClass,
}) => {
  return (
    <>
      <Button
        adjustClass={Styles.adjustInput}
        roll={roll}
        abled={abled ? true : false}
        label={label}
        size={size}>
        <Icon adjustClass={Styles.adjustIcon} img={img} color={"white"} />
      </Button>
    </>
  );
};
