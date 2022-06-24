import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeatMap from "./projects/heatmap/scripts/containers/HeatMap";
import SearchBar from "./projects/searchBar/components/SearchBar";
import TodoApp from './projects/todoList/TodoList';
import Tabs from './projects/tabs/components/Tabs';
import Tab from './projects/tabs/components/Tab';
import TabsDemo from './projects/tabs/components/TabsDemo';
import { MediaCardDemo } from "./projects/mediaCard/components/MediaCardDemo";
import { StarRating } from './projects/starRating/components/StarRating';

function App() {
  return (
    <div className="App">
      <StarRating />
    </div>
  );
}

export default App;
