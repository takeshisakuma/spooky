import React, { FC, useState } from "react";
import { accordionType } from "./accordionType";

import Styles from "./accordion.module.scss";

export const Accordion: FC<accordionType> = ({
  adjustClass,
  accordions,
  children = " ",
}) => {
  const toggleActive = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.classList.toggle(Styles.active);
    e.currentTarget.nextElementSibling?.classList.toggle(Styles.show);
  };

  return (
    <>
      <div className={[Styles.accordion, adjustClass].join(" ")}>
        {accordions.map((accordion, index) => (
          <div key={accordion.id} className={Styles.accordionUnit}>
            <button
              className={[
                Styles.accordionHeader,
                accordion.activate === true ? Styles.active : Styles.hide,
              ].join(" ")}
              onClick={toggleActive}
              value={accordion.id}>
              {accordion.title}
            </button>

            <div
              className={[
                Styles.accordionBody,
                accordion.activate === true ? Styles.show : Styles.hide,
              ].join(" ")}>
              {accordion.content}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
