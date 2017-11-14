import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Paper from "material-ui/Paper";
import Result from "./Result";
import Button from "material-ui/Button";

// Checking if the user is on a mobile or desktop device
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const SearchResults = props => {
  const resultList = [];
  const hit = props.results.map((result, i) => {
    console.log(props.resultCt);
    // Passing in the necessary props to populate each search result with information
    // Passing in a mobile friendly URL for OpenTable reservations based on the user device
    if (isMobile) {
      return (
        <Result
          key={result.objectID}
          {...hit}
          name={result.name}
          neighborhood={result.neighborhood}
          reviews_count={result.reviews_count}
          food_type={result.food_type}
          price_range={result.price_range}
          image_url={result.image_url}
          stars_count={result.stars_count}
          reserve_url={result.mobile_reserve_url}
        />
      );
    } else {
      return (
        <Result
          key={result.objectID}
          {...hit}
          name={result.name}
          neighborhood={result.neighborhood}
          reviews_count={result.reviews_count}
          food_type={result.food_type}
          price_range={result.price_range}
          image_url={result.image_url}
          stars_count={result.stars_count}
          reserve_url={result.reserve_url}
        />
      );
    }
  });
  // Display a "Show More" button only if there's more than 3 search results to show
  const page = (
    <div className="showMoreContainer">
      {props.count > 3 ? (
        <Button
          color="primary"
          className="showMoreButton"
          onClick={props.onShowMoreButtonClick}
        >
          Show More
        </Button>
      ) : null}
    </div>
  );
  resultList.push(hit, page);
  console.log(resultList);

  return (
    <div className="searchResultsContainer">
      <div className="searchMetricsContainer">
        <Paper className="searchMetrics">
          <div className="searchStats">
            <Typography type="body1" component="p" color="secondary">
              <b>{props.count} results found</b> in {props.time / 1000} seconds
            </Typography>
          </div>
        </Paper>
      </div>
      <div className="resultsContainer">{resultList}</div>
    </div>
  );
};

export default SearchResults;
