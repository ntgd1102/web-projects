import React, { useState, Children } from "react";
import type { ReactComponentElement } from 'react'; 


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
    defaultTabIndex
  );
  const tabs = Children.map(
    children,
    (child: ReactComponentElement<typeof Tab> | null | undefined, index: number) => {
      if (!child) {
        return null;
      }

      return (
        <div className={`tab-label${ activeTab === index ?  ' tab-label--selected' : ''}`} onClick={() => setActiveTab(index)}>
          {child.props.title}
        </div>
      )
    }
  );

  const tabContent = Children.map(children, (child: ReactComponentElement<typeof Tab> | null | undefined, index: number) => {
    if (!child) {
      return undefined;
    }

    return index === activeTab ? child.props.children : undefined;
  })
  return (
    <div className="tabs">
      <div className="tab-list">{tabs}</div>
      <div className="tab-content">{tabContent}</div>
    </div>
  );
};

export default Tabs;