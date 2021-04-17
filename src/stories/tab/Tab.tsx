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
            <button
              className={[
                Styles.tabSelecterItem,
                selected === tabs[0].id ? Styles.selected : Styles.unSelected,
              ].join(" ")}
              onClick={switchContent}
              value={tabs[0].id}>
              {tabs[0].title}
            </button>
            <button
              className={[
                Styles.tabSelecterItem,
                selected === tabs[1].id ? Styles.selected : Styles.unSelected,
              ].join(" ")}
              onClick={switchContent}
              value={tabs[1].id}>
              {tabs[1].title}
            </button>
            <button
              className={[
                Styles.tabSelecterItem,
                selected === tabs[2].id ? Styles.selected : Styles.unSelected,
              ].join(" ")}
              onClick={switchContent}
              value={tabs[2].id}>
              {tabs[2].title}
            </button>
          </div>
        </div>
        <div>
          <div className={Styles.tabContentGroup}>
            <div
              className={[
                Styles.tabContentItem,
                selected === tabs[0].id ? Styles.show : Styles.hide,
              ].join(" ")}>
              {tabs[0].content}
            </div>
            <div
              className={[
                Styles.tabContentItem,
                selected === tabs[1].id ? Styles.show : Styles.hide,
              ].join(" ")}>
              {tabs[1].content}
            </div>
            <div
              className={[
                Styles.tabContentItem,
                selected === tabs[2].id ? Styles.show : Styles.hide,
              ].join(" ")}>
              {tabs[2].content}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
