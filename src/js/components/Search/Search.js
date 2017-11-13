import React, { Component } from "react";
import reactAlgoliaSearchHelper, {
  Provider,
  connect
} from "react-algoliasearch-helper";

import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";
import { withStyles } from "material-ui/styles";
import { grey } from "material-ui/colors";
import Drawer from "material-ui/Drawer";
import Button from "material-ui/Button";
import List, { ListItem } from "material-ui/List";
import SearchIcon from "material-ui-icons/Search";
import IconButton from "material-ui/IconButton";
import Hidden from "material-ui/Hidden";
import Divider from "material-ui/Divider";
import MenuIcon from "material-ui-icons/Menu";
import SearchResults from "../SearchResults/SearchResults";
import SearchFilters from "../SearchFilters/SearchFilters";

import { Collapse } from "react-collapse";

const accent = grey["50"];
const drawerWidth = 240;

const styles = theme => ({
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
  },
  container: {
    flexGrow: 1,
    position: "relative",
    paddingTop: "10px"
  },
  searchField: {
    width: "100%"
  },
  filtersButton: {
    color: "blue"
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
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  drawerHeader: theme.mixins.toolbar,
  drawerPaper: {
    position: "relative",
    width: 240,
    maxHeight: "80%",
    overflow: "auto"
  },
  filtersDrawer: {
    width: "25%",
    display: "inline-block",
    maxHeight: "100",
    borderRight: "1px solid",
    borderColor: "#E7E7E7",
    padding: "20px 0 20px",
    verticalAlign: "top"
  }
});

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpened: false, mobileOpen: false };

    //this.handleClick.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(e) {
    this.props.helper.setQuery(e.target.value).search();
  }

  handleClick() {
    this.setState({ isOpened: !this.state.isOpened });
  }

  handleDrawerToggle() {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }

  render() {
    const { classes, theme } = this.props;

    const currentHits = this.props.searching ? [] : this.props.currentHits;

    const resultList = [];

    if (this.props.currentHits && this.props.currentHits.length > 0) {
      const result = currentHits.map(result => {
        return <li key={result.objectID}>{result.name}</li>;
      });
      resultList.push(result);
    }

    return (
      <div className={this.props.classes.root}>
        <AppBar color="default" className={this.props.classes.appBar}>
          <Toolbar color="default">
            <div className={this.props.classes.container}>
              <div className="searchContainer">
                <TextField
                  autoFocus={true}
                  className={this.props.classes.searchField}
                  placeholder="Search for restaurants by Name, Cuisine, Location"
                  onChange={e => this.handleSearchChange(e)}
                />
              </div>

              <Collapse isOpened={this.state.isOpened}>
                <div className={this.props.classes.filtersContainer}>
                  <div>Cuisine Type</div>
                  <div>Ratings</div>
                  <div>Price</div>
                  <div>Payment Options</div>
                </div>
              </Collapse>
            </div>
          </Toolbar>
        </AppBar>
        <div className={this.props.classes.appFrame}>
          <div className={this.props.classes.filtersDrawer}>
            <SearchFilters />
          </div>
          <SearchResults />
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const SearchService = connect(state => ({
  searching: state.searching,
  currentPage: state.searchParameters.page,
  result: state.searchResults,
  currentHits: state.searchResults && state.searchResults.hits
}))(Search);

export default withStyles(styles, { withTheme: true })(SearchService);
