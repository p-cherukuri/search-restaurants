import React, { Component } from "react";
import algoliasearch from "algoliasearch";
import Search from "./components/Search/Search";
import SearchResults from "./components/SearchResults/SearchResults";

const client = algoliasearch("QMOG2R87CW", "03ebf82e65496027603c02d07b36327e");
const index = "restaurants";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="appContainer">
        <div className="searchBar">
          <Search />
        </div>
        <div className="resultsList" />
        <SearchResults />
      </div>
    );
  }
}

export default App;
