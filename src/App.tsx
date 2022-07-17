import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { run } from './projects/env'; // eslint-disable-next-line max-len
import { CountDown } from './projects/countDown/CountDown';

const App = () => {
  run();
  return (
    <div className="App">
      <CountDown />
    </div>
  );
};

export default App;
