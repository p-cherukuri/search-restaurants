// List of 5 Rating options that correspond to 1 - 5 stars to filter search results by reviews
// The bug I am working on - on toggle, no results are shown no matter which is selected

import React, { Component } from "react";
import ReviewStars from "../SearchResults/ReviewStars";
import List, { ListItem } from "material-ui/List";
import Checkbox from "material-ui/Checkbox";

class Ratings extends Component {
  // Handle the active state of each filter
  toggleRating(val) {
    this.props.handleRatingToggle(val);
  }

  render() {
    return (
      <div className="ratingsFilterContainer">
        <List className="ratingsFilter">
          <ListItem dense button>
            <Checkbox
              value={"1"}
              onChange={() => this.toggleRating("1")}
              checked={this.props.ratingObj[this.props.value]}
              disableRipple
            />
            <ReviewStars className="ratingStar" rating={1} />
          </ListItem>
          <ListItem dense button>
            <Checkbox
              value={"2"}
              onChange={() => this.toggleRating("2")}
              checked={this.props.ratingObj[this.props.value]}
              disableRipple
            />
            <ReviewStars className="ratingStar" rating={2} />
          </ListItem>
          <ListItem dense button>
            <Checkbox
              value={"3"}
              onChange={() => this.toggleRating("3")}
              checked={this.props.ratingObj[this.props.value]}
              disableRipple
            />
            <ReviewStars className="ratingStar" rating={3} />
          </ListItem>
          <ListItem dense button>
            <Checkbox
              value={"4"}
              onChange={() => this.toggleRating("4")}
              checked={this.props.ratingObj[this.props.value]}
              disableRipple
            />
            <ReviewStars className="ratingStar" rating={4} />
          </ListItem>
          <ListItem dense button>
            <Checkbox
              value={"5"}
              onChange={() => this.toggleRating("5")}
              checked={this.props.ratingObj[this.props.value]}
              disableRipple
            />
            <ReviewStars className="ratingStar" rating={5} />
          </ListItem>
        </List>
      </div>
    );
  }
}
export default Ratings;
