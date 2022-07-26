import React, { useEffect, useState } from 'react';

import './CategoryItems.css';
import { useParams } from 'react-router-dom';

interface Item {
  name: string;
  description: string;
}

export const CategoryItems: React.FC = () => {
  const [items, setItems] = useState<Array<Item>>([]);
  const { categoryId } = useParams();
  useEffect(() => {
    fetch(
        `https://stream-restaurant-menu-svc.herokuapp.com/item?category=${categoryId}`,
    )
        .then((data) => data.json())
        .then((data) => {
          const itemsList = data.map(
              (item: { name: string; description: string }) => ({
                name: item.name,
                description: item.description,
              }),
          );
          setItems(itemsList);
        });
  }, [categoryId]);

  if (!categoryId) {
    return null;
  }

  return items.length === 0 ? null : (
    <div className="category-items">
      <h3>
        Items in category:
        {categoryId}
      </h3>
      <table>
        <thead>
          <tr>
            <th>
              <b>Name</b>
            </th>
            <th>
              <b>Description</b>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryItems;
