import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {run} from './projects/env';
import Menu from './projects/menuCategory/components/Menu';

const App = () => {
  run();
  return (
    <div className="App">
      <Menu />
    </div>
  );
};

export default App;
