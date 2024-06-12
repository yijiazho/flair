import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { SearchBarComponent } from 'src/component/asset/search-bar/search-bar.component';
import { sampleAssets } from 'src/data/sample.data';
import { AssetGridComponent } from 'src/component/asset/grid/asset-grid.component';
import { SearchFilters } from 'src/data/search-filters';
import { Asset } from './data/asset';
import MainComponent from './component/main.component';
import SearchBar from './component/company/search-bar/search-bar.component';

interface AppState {
  filters: SearchFilters;
  filteredAssets: Asset[];
}


class App extends Component<{}, AppState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      filters: {
        query: '',
        dateRange: { start: 0, end: Date.now() },
        tags: '',
        description: '',
      },
      filteredAssets: sampleAssets
    };
  }

  // setFilters = (filters: SearchFilters) => {
  //   this.setState({ filters }, this.applyFilters);
  // };

  // applyFilters = () => {
  //   const filteredAssets = filterAssets(sampleAssets, this.state.filters);
  //   this.setState({ filteredAssets });
  // };

  render() {
    const { filters, filteredAssets } = this.state;

    return (
      <div className="App">
        
        <SearchBar />
        
        <MainComponent/>


      </div>
    );
  }
}

export default App;
