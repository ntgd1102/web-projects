import React, { useCallback, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export enum Page {
  Home = 'home',
  Category = 'Category',
}

export const MenuWithNav: React.FC = () => {
  const [page, setPage] = useState<Page>(Page.Category);
  const handleClickGenerator = useCallback(
      (value: Page) => () => {
        setPage(value);
      },
      [],
  );

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <h1>1. Welcome to Chef Chu&rsquo;s Restaurant</h1>
      <button
        onClick={() => {
          navigate(`/menu`);
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          navigate(`./category`);
        }}
      >
        Category
      </button>
      <hr />
      <h4>Streamlinity UI test assignment starts be low this line..</h4>
      <hr />
      <Outlet />
    </div>
  );
};

export default MenuWithNav;
