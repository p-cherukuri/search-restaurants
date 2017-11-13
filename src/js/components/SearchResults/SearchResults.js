import React, { Component } from "react";
import PropTypes from "prop-types";
import reactAlgoliaSearchHelper, {
  Provider,
  connect
} from "react-algoliasearch-helper";
import { withStyles } from "material-ui/styles";
import Card, { CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";
import Paper from "material-ui/Paper";
import Result from "./Result";
import ShowMoreButton from "./ShowMore";

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

    this.state = {
      loadedResults: []
    };

    this.onShowMoreButtonClick = this.onShowMoreButtonClick.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.currentPage === 0) {
      this.setState({
        loadedResults: []
      });
    } else if (props.currentPage !== this.props.currentPage) {
      this.setState({
        loadedResults: this.state.loadedResults.concat(this.props.currentHits)
      });
    }
  }

  onShowMoreButtonClick() {
    this.props.helper
      .setQueryParameter("hitsPerPage", 20)
      .setPage(this.props.currentPage + 1)
      .search();
  }

  render() {
    const currentHits = this.props.searching ? [] : this.props.currentHits;
    const hits = this.state.loadedResults.concat(currentHits);
    const resultList = [];
    if (this.props.currentHits && this.props.currentHits.length > 0) {
      const hit = hits.map(hit => {
        return <Result key={hit.objectID} {...hit} />;
      });
      const page = <ShowMoreButton handleClick={this.onShowMoreButtonClick} />;
      resultList.push(hit, page);
      console.log(resultList);
    }

    return (
      this.props.currentHits && (
        <div className={this.props.classes.searchResultsContainer}>
          <div className={this.props.classes.searchMetricsContainer}>
            <Paper className={this.props.classes.searchMetrics}>
              <div className={this.props.classes.searchStats}>
                <Typography type="body1" component="p" color="secondary">
                  {this.props.result.nbHits} in{" "}
                  {this.props.result.processingTimeMS / 1000} seconds
                </Typography>
              </div>
            </Paper>
          </div>
          <div className={this.props.classes.resultsContainer}>
            {resultList}
          </div>
        </div>
      )
    );
  }
}

SearchResults.PropTypes = {
  helper: PropTypes.object.isRequired,
  searching: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  currentHits: PropTypes.array
};

const SearchResultsList = connect(state => ({
  searching: state.searching,
  currentPage: state.searchParameters.page,
  result: state.searchResults,
  currentHits: state.searchResults && state.searchResults.hits
}))(SearchResults);

export default withStyles(styles)(SearchResultsList);
