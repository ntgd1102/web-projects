import React, {useCallback, useEffect, useState} from 'react';
import lodash from 'lodash';
import axios from 'axios';

import './AutoComplete.css';

export default function AutoComplete() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
        .get('https://stream-restaurant-menu-svc.herokuapp.com/item?')
        .then((response) => {
          const {data} = response;
          const items = data.map((item: { name: string }) => item.name);
          setItems(items);
        });
  }, []);

  const handledInputChange = useCallback(
      lodash.debounce((e) => {
        setInput(e.target.value);
      }, 500),
      [],
  );

  const filteredItems = items.filter((item: string) => item.includes(input));

  return (
    <div className="wrapper">
      <div className="control">
        <input type="text" className="input" onChange={handledInputChange} />
      </div>
      <div className="list is-hoverable">
        {filteredItems.map((item, index) => (
          <a key={index} className="list-item">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}
