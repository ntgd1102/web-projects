import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

export const Child = () => {
  console.log('Child');
  const [number, setNumber] = useState(2);
  return (
    <div>
      {number}{' '}
      <Button onClick={() => setNumber((number) => number + 1)}>Click</Button>
    </div>
  );
};

export default React.memo(Child);
