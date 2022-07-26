import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// in order to render nested route
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { run } from './projects/env';
import { css } from '@emotion/css';

const App = () => {
  run();
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
        </nav>
      </div>
      <Outlet />
    </React.Fragment>
  );
};

export default App;
