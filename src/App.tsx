import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeatMap from "./projects/heatmap/scripts/containers/HeatMap";
import SearchBar from "./projects/searchBar/components/SearchBar";

function App() {
  return (
    <div className="App">
        <SearchBar />
    </div>
  );
}

export default App;
