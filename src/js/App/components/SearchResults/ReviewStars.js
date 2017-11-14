// Component that calculates how full the star ratings should be based on the "rating" facet value
import React, { Component } from "react";

const ReviewStars = props => {
  let val = parseFloat(props.rating);
  let size = Math.max(0, Math.min(5, val)) * 18;
  var test = { width: size };
  return (
    <div className="Stars">
      <div className="blankStar" />
      <div className="fullStar" style={test} />
    </div>
  );
};

export default ReviewStars;
