import type { ReactNode } from 'react';
import React from 'react';

export interface TabProps {
  /**
   * Tab content to be rendered
   */
  children: ReactNode;
  /**
   * The title of the tab
   */
  title: ReactNode;
  /**
   * Class name for tab content
   */
  className?: string;
}

export const Tab: React.FC<TabProps> = (children, className) => {
  // eslint-disable-next-line react/jsx-filename-extension
  return <div className={className}>{children}</div>;
};

export default Tab;
