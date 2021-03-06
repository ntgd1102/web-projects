import type { ReactComponentElement } from 'react';
import React, { Children, useState } from 'react';

import Tab from './Tab';

import './Tabs.css';

export interface TabsProps {
  defaultTabIndex?: number;
  /**
   * The Tab components to be rendered by Tabs
   */
  children?:
    | Array<ReactComponentElement<typeof Tab> | null | undefined>
    | ReactComponentElement<typeof Tab>;
}

export const Tabs: React.FC<TabsProps> = ({ children, defaultTabIndex }) => {
  const [activeTab, setActiveTab] = useState<number | undefined>(
      defaultTabIndex,
  );
  const tabs = Children.map(
      children,
      (
          child: ReactComponentElement<typeof Tab> | null | undefined,
          index: number,
      ) => {
        if (!child) {
          return null;
        }

        return (
          <div
            className={`tab__label${
            activeTab === index ? ' tab__label--selected' : ''
            }`}
            onClick={() => setActiveTab(index)}
          >
            {child.props.title}
          </div>
        );
      },
  );

  const tabContent = Children.map(
      children,
      (
          child: ReactComponentElement<typeof Tab> | null | undefined,
          index: number,
      ) => {
        if (!child) {
          return undefined;
        }

        return index === activeTab ? child.props.children : undefined;
      },
  );
  return (
    <div className="tabs">
      <div className="tabs__list">{tabs}</div>
      <div className="tabs__content">{tabContent}</div>
    </div>
  );
};

export default Tabs;
