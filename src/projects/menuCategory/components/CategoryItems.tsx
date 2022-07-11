import React, { useEffect, useState } from 'react';

import './CategoryItems.css';

interface Item {
  name: string;
  description: string;
}

interface OwnProps {
  selectedCategory?: string;
}

export const CategoryItems: React.FC<OwnProps> = ({
  selectedCategory
}) => {
  const [items, setItems] = useState<Array<Item>>([]);
  useEffect(() => {
    fetch(
      `https://stream-restaurant-menu-svc.herokuapp.com/item?category=${selectedCategory}`
    ).then(data => data.json()).then(data => {
      const items = data.map((item: { name: string, description: string}) => ({ name: item.name, description: item.description}));
      setItems(items);
    });
  }, [selectedCategory]);

  return items.length === 0 ? null : (
    <div className="category-items">
      <h3>Items in category: {selectedCategory}</h3>
      {
        <table>
          <tr>
            <th>
              <b>Name</b>
            </th>
            <th>
              <b>Description</b>
            </th>
          </tr>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </table>
      }
    </div>
  );
}

export default CategoryItems;