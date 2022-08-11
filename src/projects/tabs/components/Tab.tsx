import type { ReactNode } from 'react';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

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
  const [number, setNumber] = useState(1);
  return (
    <div className={className}>
      {children}
      {number}
      <Button onClick={() => setNumber((number) => number + 1)}>NNN</Button>
    </div>
  );
};

export default Tab;
