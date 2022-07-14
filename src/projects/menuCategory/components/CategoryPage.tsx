import React, {useCallback, useEffect, useState} from 'react';
import CategoryItems from './CategoryItems';
import './CategoryPage.css';

interface Category {
  name: string;
  shortName: string;
}

export const CategoryPage: React.FC = () => {
  const [categories, setCategories] = useState<Array<Category>>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
      undefined,
  );
  const onClickHandlerGenerator = useCallback(
      (val: string) => () => {
        setSelectedCategory(val);
      },
      [],
  );
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
      <ul className="category-page__list">
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={onClickHandlerGenerator(category.shortName)}
            className="category-page__category-item"
          >{`${category.name} - ${category.shortName}`}</li>
        ))}
      </ul>
      {selectedCategory && (
        <CategoryItems selectedCategory={selectedCategory} />
      )}
    </div>
  );
};

export default CategoryPage;
