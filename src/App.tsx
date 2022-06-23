import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeatMap from "./projects/heatmap/scripts/containers/HeatMap";
import SearchBar from "./projects/searchBar/components/SearchBar";
import TodoApp from './projects/todoList/TodoList';
import Tabs from './projects/tabs/components/Tabs';
import Tab from './projects/tabs/components/Tab';
import TabsDemo from './projects/tabs/components/TabsDemo';
import { AccordionDemo } from "./projects/accordion/components/AccordionDemo";

function App() {
  return (<div className="App"><AccordionDemo /></div>);
}

export default App;
