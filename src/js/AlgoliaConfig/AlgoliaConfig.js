import AlgoliaSearch from "algoliasearch";
import AlgoliaSearchHelper from "algoliasearch-helper";

// Algolia config variables
const API_KEY = "03ebf82e65496027603c02d07b36327e";
const APP_ID = "QMOG2R87CW";
const index = "restaurants";
const client = AlgoliaSearch(APP_ID, API_KEY);

// Setting search config
export const helper = AlgoliaSearchHelper(client, index, {
  hitsPerPage: 5,
  facets: ["food_type", "payment_options"],
  disjunctiveFacets: ["stars_count", "price"],
  maxValuesPerFacet: 10
});

console.log("helper", helper);
