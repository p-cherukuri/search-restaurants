import React, { Component } from "react";
import algoliasearch from "algoliasearch";

const client = algoliasearch("QMOG2R87CW", "03ebf82e65496027603c02d07b36327e");
const index = "restaurants";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="example">Hello</div>;
  }
}

export default App;
