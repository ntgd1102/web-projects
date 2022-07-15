import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {run} from './projects/env'; // eslint-disable-next-line max-len
import {MovieListContainer} from './projects/MovieList/containers/MovieListContainer';

const App = () => {
  run();
  return (
    <div className="App">
      <MovieListContainer />
    </div>
  );
};

export default App;
