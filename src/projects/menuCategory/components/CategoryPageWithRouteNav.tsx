import React, { useEffect, useState } from 'react';
import './CategoryPage.css';
import { Link, Outlet } from 'react-router-dom';

interface Category {
  name: string;
  shortName: string;
}

export const CategoryPageWithRouteNav: React.FC = () => {
  const [categories, setCategories] = useState<Array<Category>>([]);
  useEffect(() => {
    fetch('https://stream-restaurant-menu-svc.herokuapp.com/category')
        .then((res) => res.json())
        .then((data) => {
          const categories = data.map(
              (category: { name: string; short_name: string }) => ({
                name: category.name,
                shortName: category.short_name,
              }),
          );
          setCategories(categories);
        });
  }, []);
  return (
    <div className="category-page">
      <nav className="category-page__list">
        {categories.map((category, index) => (
          <Link
            key={index}
            className="category-page__category-item"
            to={`./${category.shortName}`}
          >{`${category.name} - ${category.shortName}`}</Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default CategoryPageWithRouteNav;
