import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {run} from './projects/env'; // eslint-disable-next-line max-len
import MovieListContainerWithClass from './projects/MovieList/containers/MovieListContainerWithClass';

const App = () => {
  run();
  return (
    <div className="App">
      <MovieListContainerWithClass />
    </div>
  );
};

export default App;
