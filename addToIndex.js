#!/usr/bin/env node

/*
  This script reads in a JSON list of restaurants, parses the objects into an array,
  and then adds all the objects to the 'restaurants' index using the Algolia REST API.
*/

const fs = require("fs");
const algoliasearch = require("algoliasearch");

// Initializing Algolia client and 'restaurants' index
// Replace <your application ID> and <your admin API key> with credentials found in Algolia account
const client = algoliasearch("<your application ID>", "<your admin API key>");
const index = client.initIndex("restaurants");

const updatedRestaurantData = fs.readFileSync(
  "./dataset/updated_restaurants_list.json"
);
const updatedRestaurantsList = JSON.parse(updatedRestaurantData);

// Add the list of restaurant objects to the 'restaurants' index in the Algolia account
index.addObjects(updatedRestaurantsList, (err, content) => {
  console.log(content);
  console.log("'restaurants' index populated in Algolia account");
});
