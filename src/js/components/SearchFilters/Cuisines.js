import React, { Component } from "react";
import PropTypes from "prop-types";
import List, { ListItem, ListItemText } from "material-ui/List";
import { withStyles } from "material-ui/styles";
import Checkbox from "material-ui/Checkbox";

class Cuisines extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false
    };

    this.handleToggle.bind(this);
  }

  handleToggle(e) {
    //const { checked } = this.state;
    this.setState({ isChecked: !e.target.checked });
    console.log(this.state.isChecked);
  }

  render() {
    return (
      <div>
        {[0, 1, 2, 3].map(value => (
          <ListItem key={value} dense button onClick={e => this.handleToggle}>
            <Checkbox
              checked={this.state.checked}
              tabIndex={-1}
              disableRipple
            />
            <ListItemText primary={`Line item ${value + 1}`} />
          </ListItem>
        ))}
      </div>
    );
  }
}

export default Cuisines;
