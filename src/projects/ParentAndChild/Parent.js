import React, { useState } from 'react';
import Child from './Child';
import { Button } from 'react-bootstrap';

export const Parent = () => {
  console.log('Parent');
  const [number, setNumber] = useState(2);
  return (
    <div>
      <Child />
      {number}
      <Button onClick={() => setNumber((number) => number + 1)}>Click</Button>
    </div>
  );
};

export default Parent;
