import React from 'react';
import Tabs from './Tabs';
import Tab from './Tab';

export const TabsDemo: React.FC = () => {
  const getContent = (index: number) => {
    return (
      <section>
        <h1>Hello from content {index}</h1>
        <div>
          React is a declarative, efficient, and flexible JavaScript library for
          building user interfaces.
        </div>
      </section>
    );
  };

  return (
    <div className="App">
      <Tabs defaultTabIndex={1}>
        <Tab title="hello1">{getContent(1)}</Tab>
        <Tab title="hello2">{getContent(2)}</Tab>
        <Tab title="hello3">{getContent(3)}</Tab>
      </Tabs>
    </div>
  );
};

export default TabsDemo;
