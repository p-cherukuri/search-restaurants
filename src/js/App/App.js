import React, { Component } from "react";
import RestaurantSearch from "./components/RestaurantSearch/RestaurantSearch";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import { customBlue } from "../../styles/colors/customPrimary";

// Custom Material UI theme using a similar blue to the mockup as the primary color
const theme = createMuiTheme({
  palette: {
    primary: customBlue
  },
  status: {
    danger: "orange"
  }
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="mainWrapper">
          <RestaurantSearch />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
