import React from "react";
import PropTypes from "prop-types";
import ReviewStars from "./ReviewStars";
import Card, { CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import { withStyles } from "material-ui/styles";

// Inline styling for specific Material UI styles
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
    paddingTop: 7,
    paddingBottom: 5,
    paddingRight: 0
  },
  ratingContainer: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 5
  },
  starCount: {
    color: "#FFC08C",
    position: "relative"
  },
  starContainer: {
    paddingLeft: 5,
    paddingRight: 5
  }
};

const Result = props => {
  // Material UI Card populated with restaurant info passed in from props
  return (
    <Card style={styles.card}>
      <div style={styles.details}>
        <div style={styles.picContainer}>
          <Button color="primary">
            <a href={props.reserve_url} target="_blank">
              <CardMedia
                image={props.image_url}
                style={styles.restaurantPic}
                title="Reserve on OpenTable"
              />
            </a>
          </Button>
        </div>
        <CardContent style={styles.content}>
          <Typography type="subheading">
            <b>{props.name}</b>
          </Typography>
          <div>
            <span style={styles.ratingContainer}>
              <Typography
                className="Hit__restaurant-star-count"
                style={styles.starCount}
              >
                {props.stars_count}
              </Typography>
              <span
                className="Hit__restaurant-star-container"
                style={styles.starContainer}
              >
                <ReviewStars rating={props.stars_count} />
              </span>
              <Typography className="Hit__restaurant-review-count">
                ({props.reviews_count} reviews)
              </Typography>
            </span>

            <Typography
              type="body2"
              color="secondary"
              className="restaurantInfo"
            >
              {props.food_type} | {props.neighborhood} | {props.price_range}
            </Typography>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

/*Result.propTypes = {
  classes: PropTypes.object.isRequired
};*/

export default Result;
