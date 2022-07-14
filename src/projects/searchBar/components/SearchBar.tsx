import React, {useState} from 'react';
import {STATES} from '../data/state';

import './SearchBar.css';

const STATES_ARRAY = Object.values(STATES);

const getFilteredResult = (input?: string) => {
  if (!input || !input.length || input.trim() === '') {
    return STATES_ARRAY;
  }

  return STATES_ARRAY.filter((state) => {
    return state.toLowerCase().includes(input.toLowerCase());
  });
};

const renderFilteredResults = (input?: string | null) => {
  const processedInput = input?.trim();
  const filteredResult = getFilteredResult(processedInput);
  return (
    <div className='filtered-result-list'>
      {
        filteredResult.map((state) => {
          if (!processedInput || !processedInput.length) {
            return (
              <span>{state}</span>
            );
          }
          const startIndex = state.toLocaleLowerCase().indexOf(processedInput?.toLowerCase());
          const matchedString = state.substring(startIndex, startIndex + processedInput.length);
          const leading = state.substring(0, startIndex);
          const trailing = state.substring(startIndex + processedInput.length, state.length);
          return (
            <div>
              <span>{leading}</span>
              <span className='matched-string'>{matchedString}</span>
              <span>{trailing}</span>
            </div>);
        })
      }
    </div>
  );
};

export const SearchBar: React.FC = () => {
  const [input, setInput] = useState<string|null>(null);
  return (
    <div className='search-bar'>
      <input type='search' onChange={(event) => {
        setInput(event.target.value);
      }}/>
      {renderFilteredResults(input)}
    </div>
  );
};

export default SearchBar;
