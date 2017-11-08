#!/usr/bin/env node

/*
  This script takes the restaurants_info.csv, converts it to an array of JSON objects, 
  merges it with 'restaurants_list.json', and then writes the updated restaurant information to a new JSON file
*
/*
  CSV to JSON conversion is done using the 'csvtojson' NPM package using the ';' delimiter
*/
/*
  JSON merge is done using a nested forEach loop with Object.assign() method after comparing the objectID
  of each restaurant to ensure they match up
*/
const fs = require("fs");
const csvFilePath = "./dataset/restaurants_info.csv";
const csv = require("csvtojson");
const restaurants = require("./dataset/restaurants_list.json");
const jsonArr = [];

// Converting CSV to array of JSON objects, and then converting all objectIDs in the array from string to integer
csv({ delimiter: ";" })
  .fromFile(csvFilePath)
  .on("json", jsonObj => {
    jsonArr.push(jsonObj);

    jsonArr.forEach((itm, i) => {
      itm.objectID = parseInt(itm.objectID);
    });
  })
  // When conversion is finished, merge with original restaurants list array, stringify, and write to new JSON file
  .on("done", error => {
    console.log(
      "Updating restaurants list with 'restaurants_info.csv' information..."
    );

    jsonArr.forEach((obj, i) => {
      restaurants.forEach((rest, j) => {
        if (restaurants[j].objectID == jsonArr[i].objectID) {
          try {
            Object.assign(restaurants[j], jsonArr[i]);
          } catch (e) {
            console.log("Error: " + e);
          }
        }
      });
    });

    let data = JSON.stringify(restaurants);
    fs.writeFileSync("./dataset/updated_restaurants_list.json", data);
    console.log(
      "*** Updated restaurants list saved in new file 'dataset/updated_restaurants_list.json' ***"
    );
  });
