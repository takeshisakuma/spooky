import React, { FC, useState } from "react";
import { tabType } from "./tabType";

import Styles from "./tab.module.scss";

export const Tab: FC<tabType> = ({ tabs }) => {
  const [selected, setSelected] = useState(tabs[0].id);
  const switchContent = (e: React.MouseEvent<HTMLButtonElement>) => {
    // setSelected(e.currentTarget.dataset.selecterid!);
    setSelected(e.currentTarget.value);
    console.log(selected);
  };

  return (
    <>
      <div className={Styles.tab}>
        <div>
          <div className={Styles.tabSelecterGroup}>
            {tabs.map((tab) => (
              <button
                className={[
                  Styles.tabSelecterItem,
                  selected === tab.id ? Styles.selected : Styles.unSelected,
                ].join(" ")}
                onClick={switchContent}
                value={tab.id}>
                {tab.title}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className={Styles.tabContentGroup}>
            {tabs.map((tab) => (
              <div
                className={[
                  Styles.tabContentItem,
                  selected === tab.id ? Styles.show : Styles.hide,
                ].join(" ")}>
                {tab.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
