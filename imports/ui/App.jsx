import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import "typeface-roboto";

// App component - represents the whole app
export default class App extends Component {
  state = {
    exercises: [],
    title: "",
  };

  render() {
    return (
      <Typography variant="display1" align="center" gutterBottom>
        Exercises
      </Typography>
    );
  }
}
