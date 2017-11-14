# Algolia SE Assignment

[Link](https://p-cherukuri.github.io/search-restaurants/)

This is a simple Material Design UI that allows you to search for restaurants by Restaurant Name, Cuisine Type, or Location.

The UI is built in React/ES6 with Webpack, and the search engine is powered by Algolia, using the JS Helper library.

## Details
- Clone the repository and run `npm install` to install dependencies and run locally using `npm start`
- I made two scripts for data manipulation and importing respectively - running `merge` imports and parses a .csv file, then merges it with the .json file of restaurant objects and outputs it as a new file, `updated_restaurants_list.json`. Then, running `import` reads in the new .json file of restaurants, and sends the data to the Algolia index `restaurants`.
- The design is using React's `material-ui`, which is based on Google's Material Design layout.
- The layout accounts for mobile by dynamically rendering the container elements based on the screen size. On smaller screen sizes, the Filters sidebar is hidden and a Filters button with a dropdown menu is rendered instead.
- The search results change as the user types, and the results are ordered based on the user's browser location, with the closest restaurants being highest in the search results list. If the user did not grant location permissions, the location is calculated from the user's IP address to order the search results.
- Every result displays the name of the restaurant, rating via number of stars using an exact calculation, the number of reviews, type of cuisine, neighborhood, and price range.
- Clicking the "Show More" button shows the next three search results.
- Clicking on the restaurant's thumbnail picture provides a direct reservation link to OpenTable. If the user is on a mobile device, the mobile reservation link will be provided instead.
- The number of results found and the time it took to complete the search are displayed at the top of the search results list.
- On desktop, the Filters sidebar has a sticky subheader as you scroll through each filter.

## Issues
- Search Filters are not working (Cuisines and Payment Options are not rendering, Rating and Price Filters show 0 results always)
- Mobile formatting needs work with font and resource resizing, and the "Show More" button doesn't disappear when all results are shown

## Other features I'd like to add
- Highlight search results while searching
- Show how many miles away each restaurant is
- Be able to search for restaurants around a location of choice
- Integrate Google Maps to view locations on map as well
- Autocomplete search results

## Communication Solutions

My answers to the example customer questions are in this [.txt file](https://github.com/p-cherukuri/search-restaurants/blob/master/customer-solutions.txt).  



