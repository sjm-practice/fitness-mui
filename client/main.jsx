import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

import App from "../imports/ui/App";

const theme = createMuiTheme({
  palette: {
    primary: orange,
  },
});

Meteor.startup(() => {
  render(
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>,
    document.getElementById("render-target"),
  );
});
