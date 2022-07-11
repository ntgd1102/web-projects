import React, { useState, useCallback } from "react";

import HomePage from './HomePage';
import CategoryPage from './CategoryPage';

enum Page {
  Home = "home",
  Category = "Category",
}

export const Menu: React.FC = () => {
  const [page, setPage] = useState<Page>(Page.Category);
  const handleClickGenerator = useCallback((value: Page) => () => {
    setPage(value);
  }, []);
  return (
    <div>
      <h1>1. Welcome to Chef Chu&rsquo;s Restaurant</h1>
      <button onClick={handleClickGenerator(Page.Home)}>Home</button>
      <button onClick={handleClickGenerator(Page.Category)}>Category</button>
      <hr />
      <h4>Streamlinity UI test assignment starts be  low this line..</h4>
      <hr />
      {page === Page.Home ? <HomePage /> : <CategoryPage />}
    </div>
  );
};

export default Menu;
