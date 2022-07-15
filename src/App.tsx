import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {run} from './projects/env'; // eslint-disable-next-line max-len
import MovieListContainerWithoutHook from './projects/MovieList/containers/MovieListContainerWithoutHook';

const App = () => {
  run();
  return (
    <div className="App">
      <MovieListContainerWithoutHook />
    </div>
  );
};

export default App;
