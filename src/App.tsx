import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HeatMap from "./projects/heatmap/scripts/containers/HeatMap";
import SearchBar from "./projects/searchBar/components/SearchBar";
import TodoApp from "./projects/todoList/TodoList";
import Tabs from "./projects/tabs/components/Tabs";
import Tab from "./projects/tabs/components/Tab";
import TabsDemo from "./projects/tabs/components/TabsDemo";
import { MediaCardDemo } from "./projects/mediaCard/components/MediaCardDemo";
import { StarRating } from "./projects/starRating/components/StarRating";
import Carousel from "./projects/carousel/components/Carousel";
import SortableTable, {
  SortableTableDemo,
} from "./projects/sortableTable/components/SortableTable";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  filter,
  filterWithoutThis,
} from "./projects/implementationsForJSApi/filter";
import { map } from "./projects/implementationsForJSApi/map";
import { observerDemo } from "./projects/observerDesignPattern/demo";
import { demo } from "./projects/eventEmitter/eventEmitter";
import { Singleton } from "./projects/singleton/singleton";

function App() {  

  const value = new Singleton('msg3');
  const sdsd = new Singleton('msg2');


  console.log(sdsd.print());

  return (
    <div className="App">
      <SortableTableDemo />
    </div>
  );
}

export default App;
