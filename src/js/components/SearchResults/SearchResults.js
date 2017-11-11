import React, { Component } from "react";

import { withStyles } from "material-ui/styles";
import Card, { CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";

const styles = theme => ({
  card: {
    display: "flex",
    width: "100%"
  },
  details: {
    display: "flex",
    flexDirection: "row"
  },
  content: {
    flex: "1 0 auto"
  },
  restaurantPic: {
    width: 110,
    height: 110,
    alignSelf: "flex-start"
  },
  resultsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 110,
    width: "95%"
  }
});

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.classes.resultsContainer}>
        <Card className={this.props.classes.card}>
          <div className={this.props.classes.details}>
            <CardMedia
              className={this.props.classes.restaurantPic}
              image="../../../images/download.jpeg"
              title="Live from space album cover"
            />
            <CardContent className={this.props.classes.content}>
              <Typography type="headline">Restaurant Name</Typography>
              <Typography type="subheading" color="secondary">
                Star Rating (# of reviews)
              </Typography>
              <Typography type="subheading" color="secondary">
                Cuisine Type | Neighborhood | Price
              </Typography>
            </CardContent>
          </div>
        </Card>

        <Card className={this.props.classes.card}>
          <div className={this.props.classes.details}>
            <CardMedia
              className={this.props.classes.restaurantPic}
              image="../../../images/download.jpeg"
              title="Live from space album cover"
            />
            <CardContent className={this.props.classes.content}>
              <Typography type="headline">Restaurant Name</Typography>
              <Typography type="subheading" color="secondary">
                Star Rating (# of reviews)
              </Typography>
              <Typography type="subheading" color="secondary">
                Cuisine Type | Neighborhood | Price
              </Typography>
            </CardContent>
          </div>
        </Card>

        <Card className={this.props.classes.card}>
          <div className={this.props.classes.details}>
            <CardMedia
              className={this.props.classes.restaurantPic}
              image="../../../images/download.jpeg"
              title="Live from space album cover"
            />
            <CardContent className={this.props.classes.content}>
              <Typography type="headline">Restaurant Name</Typography>
              <Typography type="subheading" color="secondary">
                Star Rating (# of reviews)
              </Typography>
              <Typography type="subheading" color="secondary">
                Cuisine Type | Neighborhood | Price
              </Typography>
            </CardContent>
          </div>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(SearchResults);
