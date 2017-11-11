import React, { Component } from "react";

import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import TextField from "material-ui/TextField";
import { withStyles } from "material-ui/styles";
import { grey } from "material-ui/colors";
import Button from "material-ui/Button";
import SearchIcon from "material-ui-icons/Search";

import { Collapse } from "react-collapse";

const accent = grey["50"];

const styles = theme => ({
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
  }
});

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpened: false };

    //this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isOpened: !this.state.isOpened });
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar color="default">
          <Toolbar>
            <div className={this.props.classes.container}>
              <TextField
                autoFocus={true}
                className={this.props.classes.searchField}
                placeholder="Search for restaurants by Name, Cuisine, Location"
              />
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
          <Button
            className={this.props.classes.filtersButton}
            onClick={this.handleClick.bind(this)}
          >
            Search Filters
          </Button>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Search);
