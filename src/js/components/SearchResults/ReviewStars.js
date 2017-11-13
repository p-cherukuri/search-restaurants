import React, { Component } from "react";

const ReviewStars = props => {
  let val = parseFloat(props.rating);
  let test = { width: Math.max(0, Math.min(5, val)) * 18 };
  //test.width = size;
  return (
    <div className="Stars">
      <div className="blankStar" />
      <div className="fullStar" style={test} />
    </div>
  );
};

export default ReviewStars;
