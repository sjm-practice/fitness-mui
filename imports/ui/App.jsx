import React, { Component } from "react";
import "typeface-roboto";

// App component - represents the whole app
export default class App extends Component {
  state = {
    exercises: [],
    title: "",
  };

  render() {
    return <h1>Exercises</h1>;
  }
}
