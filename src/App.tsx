import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { run } from './projects/env'; // eslint-disable-next-line max-len
import { MediaCardDemo } from './projects/mediaCard/components/MediaCardDemo';

const App = () => {
  run();
  return (
    <div className="App">
      <MediaCardDemo />
    </div>
  );
};

export default App;
