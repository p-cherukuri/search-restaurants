// Unfinished

// Price filter to sort by "price" facet value and display corresponding "price_range" value
import React, { Component } from "react";
import ReviewStars from "../SearchResults/ReviewStars";
import List, { ListItem } from "material-ui/List";
import AttachMoneyIcon from "material-ui-icons/AttachMoney";
import Checkbox from "material-ui/Checkbox";

class Prices extends Component {
  togglePrice(val) {
    this.props.handlePriceToggle(val);
  }

  render() {
    return (
      <div className="priceFilterContainer">
        <List className="priceFilter">
          <ListItem dense button>
            <Checkbox disableRipple />
            <AttachMoneyIcon />
            <AttachMoneyIcon />
          </ListItem>
          <ListItem dense button>
            <Checkbox disableRipple />
            <AttachMoneyIcon />
            <AttachMoneyIcon />
            <AttachMoneyIcon />
          </ListItem>
          <ListItem dense button>
            <Checkbox disableRipple />
            <AttachMoneyIcon />
            <AttachMoneyIcon />
            <AttachMoneyIcon />
            <AttachMoneyIcon />
          </ListItem>
        </List>
      </div>
    );
  }
}
export default Prices;
