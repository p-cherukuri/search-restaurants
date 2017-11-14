// Main component where all other components come together

import React, { Component } from "react";
import PropTypes from "prop-types";

import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import FilterListIcon from "material-ui-icons/FilterList";
import Tooltip from "material-ui/Tooltip";
import List, { ListItem } from "material-ui/List";
import ListSubheader from "material-ui/List/ListSubheader";
import Hidden from "material-ui/Hidden";

import { Collapse } from "react-collapse";

import SearchResults from "../SearchResults/SearchResults";
import Cuisines from "../SearchFilters/Cuisines";
import PaymentOptions from "../SearchFilters/PaymentOptions";
import Ratings from "../SearchFilters/Ratings";
import Prices from "../SearchFilters/Prices";

import update from "immutability-helper";

import { helper } from "../../../AlgoliaConfig/AlgoliaConfig";

//Grav the user's location fron browser if possible
let geo = window.userLocation || null;

// Inline styling for some specific Material UI styles
const styles = {
  root: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    backgroundColor: "#fff",
    width: "80%",
    height: 600,
    overflow: "hidden",
    zIndex: 1
  },
  appFrame: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: 500
  },
  appBar: {
    position: "static"
    //padding
  },
  container: {
    flexGrow: 1,
    position: "relative",
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingRight: "20px"
  },
  searchField: {
    width: "100%",
    backgroundColor: "#fff",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingBottom: "5px"
  },
  filtersContainer: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "10px",
    paddingBottom: "10px"
  },
  searchContainer: {
    backgroundColor: "#fff"
  },
  filtersDrawer: {
    width: "25%",
    display: "inline-block",
    maxHeight: "100",
    borderRight: "1px solid",
    borderColor: "#E7E7E7",
    padding: "20px 0 20px",
    verticalAlign: "top"
  },
  filtersList: {
    width: "100%",
    background: "#fff",
    maxWidth: 360,
    position: "relative",
    overflow: "auto",
    maxHeight: 500
  }
};

class RestaurantSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
      searchTerm: "",
      results: [],
      data: [],
      foodTypes: [],
      page: null,
      activeCuisine: null,
      activePaymentItem: null,
      ratings: { "1": false, "2": false, "3": false, "4": false, "5": false }
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.onShowMoreButtonClick = this.onShowMoreButtonClick.bind(this);
    this.onFilterClick = this.onFilterClick.bind(this);
    this.handleRatingToggle = this.handleRatingToggle.bind(this);
  }

  handleSearchChange(e) {
    helper.setQuery(e.target.value).search();
  }

  onFilterClick(value, facet) {
    if (facet === "food_type") {
      let isCuisineActive = this.state.activeCuisine === val ? null : val;
      this.setState({ activeCuisine: isCuisineActive });
    } else {
      this.setState({ activeCuisine: null });
    }

    helper.toggleFacetRefinement(facet, val).search();
  }

  onShowMoreButtonClick() {
    let totalHits = this.state.data.hitsPerPage;
    helper.setQueryParameter("hitsPerPage", totalHits + 3).search();
  }

  handleRatingToggle(key) {
    console.log(key);
    var newVal = !this.state.ratings[key];
    var ratingNum = key;
    var oldKeyArr = Object.values(this.state.ratings);

    if (oldKeyArr.includes(true) && newVal === true) {
      helper.clearRefinements("stars_count");
      var lowerBound = oldKeyArr.indexOf(true) + 1;
      helper.addNumericRefinement(
        "stars_count",
        ">=",
        Math.min(lowerBound, Number(ratingNum))
      );
      helper.addNumericRefinement(
        "stars_count",
        "<",
        Math.max(lowerBound, Number(ratingNum))
      );
    } else if (!oldKeyArr.includes(true) && newVal === true) {
      helper.clearRefinements("stars_count");

      helper.addNumericRefinement("stars_count", ">=", Number(ratingNum));
      helper.addNumericRefinement("stars_count", "<", Number(ratingNum) + 1);
    } else {
      helper.removeNumericRefinement("stars_count", ">=", Number(ratingNum));
      helper.removeNumericRefinement("stars_count", "<", Number(ratingNum) + 1);
      helper.clearRefinements("stars_count");
    }

    helper.search();

    this.setState(previousState =>
      update(previousState, { ratings: { [ratingNum]: { $set: newVal } } })
    );
  }

  handlePaymentClick(val, facet) {
    //handle payment options
    if (facet === "payment_options") {
      var isPaymentActive = this.state.activePaymentItem === val ? null : val;
      this.setState({ activePaymentItem: isPaymentActive });
    } else {
      this.setState({ activePaymentItem: null });
    }

    helper.toggleFacetRefinement(facet, val).search();
  }

  handleMobileDropdownClick() {
    this.setState({ isOpened: !this.state.isOpened });
  }

  componentDidMount() {
    if (geo) {
      let geoLatLong =
        geo.coords.lat.toString() + "," + geoLoc.coords.long.toString();
      helper.setQueryParameter("aroundLatLng", geoLatLong).search();
    } else {
      helper.setQueryParameter("aroundLatLngViaIP", true).search();
    }

    // initial search on page load, set initial page #
    helper.on("result", data => {
      console.log("data", data);
      this.setState({
        page: 1,
        results: data.hits,
        resultCt: data.nbHits,
        processingTime: data.processingTimeMS,
        data: data
      });
    });
  }

  render() {
    let currentHitsPerPage = helper.getQueryParameter("hitsPerPage");

    const currentHits = this.props.searching ? [] : this.props.currentHits;

    const resultList = [];

    if (this.props.currentHits && this.props.currentHits.length > 0) {
      const result = currentHits.map(result => {
        return <li key={result.objectID}>{result.name}</li>;
      });
      resultList.push(result);
    }

    return (
      <div className="root">
        <AppBar color="primary" style={styles.appBar}>
          <Toolbar color="default">
            <div style={styles.container}>
              <div className="searchContainer">
                <TextField
                  autoFocus={true}
                  style={styles.searchField}
                  placeholder="Search for restaurants by Name, Cuisine, Location"
                  onChange={this.handleSearchChange}
                />
              </div>
            </div>
            <div className="filterButton">
              <Tooltip
                id="tooltip-icon"
                title="Search Filters"
                placement="bottom"
              >
                <IconButton
                  color="contrast"
                  aria-label="Search Filters"
                  onClick={this.handleMobileDropdownClick.bind(this)}
                >
                  <FilterListIcon />
                </IconButton>
              </Tooltip>
            </div>
          </Toolbar>
        </AppBar>

        <Collapse className="mobileDropdown" isOpened={this.state.isOpened}>
          <div style={styles.filtersContainer}>
            <div className="listSection">
              <ListSubheader>Cuisine/Food Type</ListSubheader>
              <Cuisines
                onFilterClick={this.onFilterClick}
                activeCuisine={this.state.activeCuisine}
                data={this.state.data}
              />
            </div>
            <div className="listSection">
              <ListSubheader>Rating</ListSubheader>
              <Ratings
                ratingObj={this.state.ratings}
                handleRatingToggle={this.handleRatingToggle}
                data={this.state.data}
              />
            </div>
            <div className="listSection">
              <ListSubheader>Payment Options</ListSubheader>
            </div>
            <div className="listSection">
              <ListSubheader>Prices</ListSubheader>
              <Prices />
            </div>
          </div>
        </Collapse>

        <div className="appFrame" style={styles.appFrame}>
          <div className="filtersDrawer">
            <List className="filtersList" style={styles.filtersList} subheader>
              <div className="listSection">
                <ListSubheader>Cuisine/Food Type</ListSubheader>
                <Cuisines
                  onFilterClick={this.onFilterClick}
                  activeCuisine={this.state.activeCuisine}
                  data={this.state.data}
                />
              </div>
              <div className="listSection">
                <ListSubheader>Rating</ListSubheader>
                <Ratings
                  ratingObj={this.state.ratings}
                  handleRatingToggle={this.handleRatingToggle}
                  data={this.state.data}
                />
              </div>
              <div className="listSection">
                <ListSubheader>Payment Options</ListSubheader>
              </div>
              <div className="listSection">
                <ListSubheader>Prices</ListSubheader>
                <Prices />
              </div>
            </List>
          </div>
          <SearchResults
            count={this.state.resultCt}
            time={this.state.processingTime}
            onShowMoreButtonClick={this.onShowMoreButtonClick}
            results={this.state.results}
            data={this.state.data}
          />
        </div>
      </div>
    );
  }
}

export default RestaurantSearch;
