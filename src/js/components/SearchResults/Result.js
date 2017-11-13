import React, { PropTypes, Component } from "react";
import ReviewStars from "./ReviewStars";
import Card, { CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";

import { withStyles } from "material-ui/styles";

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
  picContainer: {
    paddingLeft: 10,
    padding: 10,
    paddingRight: 0
  }
});

class Result extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card className={this.props.classes.card}>
        <div className={this.props.classes.details}>
          <div className={this.props.classes.picContainer}>
            <CardMedia
              className={this.props.classes.restaurantPic}
              image="../../../images/download.jpeg"
              title="Live from space album cover"
            />
          </div>
          <CardContent className={this.props.classes.content}>
            <Typography type="title">Restaurant Name</Typography>
            <Typography type="subheading" color="secondary">
              Star Rating (# of reviews)
            </Typography>
            <Typography type="subheading" color="secondary">
              Cuisine Type | Neighborhood | Price
            </Typography>
          </CardContent>
        </div>
      </Card>
    );
  }
}

export default withStyles(styles)(Result);
