import React from "react";
import PropTypes from "prop-types";
import List, { ListItem, ListItemText } from "material-ui/List";
import ListSubheader from "material-ui/List/ListSubheader";
import { withStyles } from "material-ui/styles";
import Checkbox from "material-ui/Checkbox";
import Cuisines from "./Cuisines";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    background: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: 500
  },
  listSection: {
    background: "inherit"
  }
});

const SearchFilters = props => {
  const { classes } = props;

  return (
    <List className={classes.root} subheader>
      <div className={classes.listSection}>
        <ListSubheader>Cuisine/Food Type</ListSubheader>
        <Cuisines />
      </div>
      <div className={classes.listSection}>
        <ListSubheader>Rating</ListSubheader>
        <Cuisines />
      </div>
      <div className={classes.listSection}>
        <ListSubheader>Payment Options</ListSubheader>
        <Cuisines />
      </div>
      <div className={classes.listSection}>
        <ListSubheader>Prices</ListSubheader>
        <Cuisines />
      </div>
    </List>
  );
};

SearchFilters.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchFilters);
