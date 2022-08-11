import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TabsDemo from './projects/tabs/components/TabsDemo';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccordionDemo from './projects/accordion/components/AccordionDemo';
import App from './App';
import AutoComplete from './projects/autoComplete/AutoComplete';
import CarouselDemo from './projects/carousel/components/CarouselDemo';
import HeatMap from './projects/heatmap/scripts/containers/HeatMap';
import HomePage from './projects/menuCategory/components/HomePage';
import MenuWithNav from './projects/menuCategory/components/MenuWithNav';
import CategoryItems from './projects/menuCategory/components/CategoryItems';
import CategoryPageWithRouteNav
  from './projects/menuCategory/components/CategoryPageWithRouteNav';
import Parent from './projects/ParentAndChild/Parent';

// const App = React.lazy(() => import('./App'));

// const App = React.lazy(() => import('./App'));

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="tabs" element={<TabsDemo />} />
          <Route path="menu" element={<MenuWithNav />}>
            <Route index element={<HomePage />} />
            <Route path="category" element={<CategoryPageWithRouteNav />}>
              <Route path=":categoryId" element={<CategoryItems />} />
            </Route>
          </Route>
          <Route path="accordion" element={<AccordionDemo />} />
          <Route path="auto-complete" element={<AutoComplete />} />
          <Route path="carousel" element={<CarouselDemo />} />
          <Route path="heat-map" element={<HeatMap />} />
          <Route path="test" element={<Parent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
