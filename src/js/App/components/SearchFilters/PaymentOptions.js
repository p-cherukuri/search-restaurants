// List of valid payment options as a list to filter search results by
// Haven't gotten this to render yet along with Cuisines.js despite trying various methods and re-writes...

import React, { Component } from "react";
import PropTypes from "prop-types";
import List, { ListItem, ListItemText } from "material-ui/List";
import { withStyles } from "material-ui/styles";
import Checkbox from "material-ui/Checkbox";

const PaymentOptions = props => {
  let activePaymentItem = props.activePaymentItem;
  // The only payment options we want to filter by are Visa, MasterCard, American Express, and Discover
  let validPaymentOptions = ["Visa", "MasterCard", "AMEX", "Discover"];

  return (
    <div>
      {props.data.facets &&
        props.data.getFacetValues("payment_options").map((payment, index) => {
          if (validPayments.includes(payment.name)) {
            return (
              <ListItem
                key={index}
                name={payment.name}
                active={activePaymentItem === payment.name}
                dense
                button
                onClick={() =>
                  props.handlePaymentClick(payment.name, "payment_options")}
              >
                <Checkbox
                  checked={this.state.isCheckedAmex}
                  tabIndex={-1}
                  disableRipple
                />
                <ListItemText primary={payment.name} />
              </ListItem>
            );
          }
        })}
    </div>
  );
};

export default PaymentOptions;
