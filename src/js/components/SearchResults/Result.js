import React from "react";
import PropTypes from "prop-types";
import ReviewStars from "./ReviewStars";
import Card, { CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";

import { withStyles } from "material-ui/styles";

const styles = {
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
    width: 95,
    height: 95,
    borderRadius: 5
  },
  picContainer: {
    paddingLeft: 10,
    padding: 10,
    paddingRight: 0
  },
  ratingContainer: { display: "flex", flexDirection: "row" },
  starCount: {
    color: "#FFC08C",
    position: "relative"
  },
  starContainer: {
    paddingLeft: 15,
    paddingRight: 15
  }
};

const Result = ({
  name,
  reviews_count,
  stars_count,
  neighborhood,
  food_type,
  price_range,
  image_url
}) => {
  //const { classes } = props;

  return (
    <Card style={styles.card}>
      <div style={styles.details}>
        <div style={styles.picContainer}>
          <CardMedia
            image={image_url}
            style={styles.restaurantPic}
            title="Picture from OpenTable"
          />
        </div>
        <CardContent style={styles.content}>
          <Typography type="title">{name}</Typography>
          <p style={styles.ratingContainer}>
            <Typography
              className="Hit__restaurant-star-count"
              style={styles.starCount}
            >
              {stars_count}
            </Typography>
            <span
              className="Hit__restaurant-star-container"
              style={styles.starContainer}
            >
              <ReviewStars rating={stars_count} />
            </span>
            <Typography className="Hit__restaurant-review-count">
              ({reviews_count} reviews)
            </Typography>
          </p>
          <Typography type="subheading" color="secondary">
            {food_type} | {neighborhood} | {price_range}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

/*Result.propTypes = {
  classes: PropTypes.object.isRequired
};*/

export default Result;
