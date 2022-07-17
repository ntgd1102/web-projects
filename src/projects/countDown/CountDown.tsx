import React, { useEffect, useState } from 'react';

export const CountDown: React.FC = () => {
  const [count, setCount] = useState(10);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((count) => count - 1);
    }, 1000);
    if (count === 0) {
      clearTimeout(timer);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [count]);
  return <div>{count}</div>;
};
