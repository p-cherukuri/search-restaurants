import React, { Component } from "react";
import algoliasearch from "algoliasearch";
import algoliasearchHelper from "algoliasearch-helper";
import reactAlgoliaSearchHelper, {
  Provider,
  connect
} from "react-algoliasearch-helper";
import Search from "./components/Search/Search";
import SearchResults from "./components/SearchResults/SearchResults";

const client = algoliasearch("QMOG2R87CW", "03ebf82e65496027603c02d07b36327e");
const index = "restaurants";

const helper = algoliasearchHelper(client, index, {
  disjunctiveFacets: [
    "food_type",
    "payment_options",
    "stars_count",
    "price_range"
  ],
  hitsPerPage: 3,
  maxValuesPerFacet: 100
});

helper.setQueryParameter("aroundLatLngViaIP", true).search();

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider helper={helper}>
        <div>
          <Search />
        </div>
      </Provider>
    );
  }
}

export default App;
