#!/usr/bin/env node

/*
  This script takes the restaurants_info.csv, converts it to an array of JSON objects, 
  merges it with the array of 'restaurants_list.json', and then writes the updated restaurant information to a new JSON file.
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
const restaurantsList = require("./dataset/restaurants_list.json");
const jsonArr = [];
const updatedRestaurantsList = [];

let removePaymentMethod = paymentMethods => {
  let newPaymentMethods = paymentMethods.slice();
  let findBadPaymentMethods = ["Carte Blanche", "Diners Club"];
  findBadPaymentMethods.forEach(paymentMethod => {
    if (newPaymentMethods.includes(paymentMethod)) {
      let i = newPaymentMethods.indexOf(paymentMethod);
      newPaymentMethods.splice(i, 1);
      if (!newPaymentMethods.includes("Discover")) {
        newPaymentMethods.push("Discover");
      }
    }
  });

  let goodPaymentMethods = ["AMEX", "Visa", "Discover", "MasterCard"];
  newPaymentMethods = newPaymentMethods.filter(paymentMethod =>
    goodPaymentMethods.includes(paymentMethod)
  );
  return newPaymentMethods;
};

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
      restaurantsList.forEach((rest, j) => {
        if (restaurantsList[j].objectID == jsonArr[i].objectID) {
          try {
            Object.assign(restaurantsList[j], jsonArr[i]);
          } catch (e) {
            console.log("Error: " + e);
          }
        }
      });
    });

    restaurantsList.forEach(restaurant => {
      let updatedPaymentMethod = removePaymentMethod(
        restaurant.payment_options
      );
      updatedRestaurantsList.push(
        Object.assign({}, restaurant, { updatedPaymentMethod })
      );
    });

    let data = JSON.stringify(updatedRestaurantsList);
    fs.writeFileSync("./updated_restaurants_list.json", data);
    console.log(
      "*** Updated restaurants list saved in new file 'dataset/updated_restaurants_list.json' ***"
    );
  });
