import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { css } from '@emotion/css';

import { run } from './coding/codingQuestionForFEP/CodingQuestions';

const App = () => {
  run();
  // runner();
  return (
    <React.Fragment>
      <div>
        <h1>Demo</h1>
        <nav
          style={{
            borderBottom: 'solid 1px',
            paddingBottom: '1rem',
          }}
          className={css`
            a:not(:first-of-type) {
              margin-left: 20px;
            }
          `}
        >
          <Link to="/tabs">Tabs</Link>
          <Link to="/menu">Menu Category</Link>
          <Link to="/accordion">Accordion</Link>
          <Link to="/auto-complete">Auto Complete</Link>
          <Link to="/carousel">Carousel</Link>
          <Link to="/heat-map">Heat Map</Link>
          <Link to="/test">Test</Link>
        </nav>
      </div>
      <Outlet />
    </React.Fragment>
  );
};

export default App;
