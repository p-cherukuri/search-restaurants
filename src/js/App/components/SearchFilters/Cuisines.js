// List of cuisine types as a list to filter search results by
// Haven't gotten this to render yet along with PaymentOptions.js despite trying various methods and re-writes...

import React, { Component } from "react";
import PropTypes from "prop-types";
import List, { ListItem, ListItemText } from "material-ui/List";
import { withStyles } from "material-ui/styles";
import Checkbox from "material-ui/Checkbox";
import { helper } from "../../../AlgoliaConfig/AlgoliaConfig";

const Cuisines = props => {
  let activeCuisine = props.activeCuisine;
  // An issue with getFacetValues? Or possibly mapping
  return (
    <div>
      <List>
        {props.data.facets &&
          props.data.getFacetValues("food_type").map((cuisine, index) => {
            return (
              <ListItem
                name={name}
                key={index}
                active={activeCuisine === cuisine}
                onClick={() => props.onFilterClick(cuisine, "food_type")}
              >
                <Checkbox
                  checked={this.state.isChecked}
                  tabIndex={-1}
                  disableRipple
                />
                <ListItemText primary={name} />
                <ListItemText primary={foodType.count} />
              </ListItem>
            );
          })}
      </List>
    </div>
  );
};

export default Cuisines;
