import React, { Component } from "react";

import { withStyles } from "material-ui/styles";
import Card, { CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";
import Paper from "material-ui/Paper";
import Result from "./Result";

const styles = theme => ({
  card: {
    display: "flex",
    width: "100%",
    border: 0
  },
  details: {
    display: "flex",
    flexDirection: "row"
  },
  content: {
    flex: "1 0 auto"
  },
  restaurantPic: {
    width: 85,
    height: 85,
    borderRadius: 5
  },
  searchResultsContainer: {
    width: "100%",
    position: "relative",
    maxHeight: "100",
    [theme.breakpoints.up("sm")]: {
      marginTop: 5
    },
    overflow: "auto"
  },
  searchMetricsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  searchMetrics: {
    paddingLeft: 10
  },
  resultsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxHeight: "100"
  },
  picContainer: {
    paddingLeft: 10,
    padding: 10,
    paddingRight: 0
  },
  searchStats: {
    backgroundColor: "#fff",
    paddingTop: 27
  }
});

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.classes.searchResultsContainer}>
        <div className={this.props.classes.searchMetricsContainer}>
          <Paper className={this.props.classes.searchMetrics}>
            <div className={this.props.classes.searchStats}>
              <Typography type="body1" component="p" color="secondary">
                34 results found in 0.002 seconds
              </Typography>
            </div>
          </Paper>
        </div>
        <div className={this.props.classes.resultsContainer}>
          <Result />
          <Result />
          <Result />
          <Result />
          <Result />
          <Result />
          <Result />
          <Result />
          <Result />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SearchResults);
