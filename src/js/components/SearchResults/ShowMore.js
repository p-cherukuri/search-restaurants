import React, { Component } from "react";
import reactAlgoliaSearchHelper, { connect } from "react-algoliasearch-helper";
import Button from "material-ui/Button";

const styles = {
  showMore: {
    justifyContent: "center"
  }
};

const ShowMore = ({ page, nbPages, helper, handleClick }) => {
  return (
    <div
      className={"ShowMore__container" + (page + 1 >= nbPages ? "--hide" : "")}
    >
      <Button
        raised
        color="primary"
        className="ShowMore__button"
        style={styles.showMore}
        onClick={handleClick}
      >
        Show More
      </Button>
    </div>
  );
};

const ShowMoreButton = connect(
  ({ searchResults }) =>
    searchResults === null
      ? { page: 0, nbPages: 0 }
      : { page: searchResults.page, nbPages: searchResults.nbPages }
)(ShowMore);

export default ShowMoreButton;
