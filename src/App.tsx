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
import { TeslaModelS } from "./projects/typeScriptOOP/TeslaModelS";
import { AccordionDemo } from "./projects/accordion/components/AccordionDemo";
import CarouselDemo from "./projects/carousel/components/CarouselDemo";
import {
  countryCodeMap,
  PhoneNumberInput,
} from './projects/dropdown/phoneNumberInput';
import {run} from "./projects/env";
import {App2} from "./ClassComponent";
import Menu from "./projects/menuCategory/components/Menu";

function App() {
  run();
  return (
    <div className="App">
      <Menu />
    </div>
  );
}

export default App;
