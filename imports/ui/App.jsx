/* eslint-disable arrow-parens, object-curly-newline */
import React, { Component } from "react";
import {
  Typography,
  Button,
  Paper,
  TextField,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import "typeface-roboto";

// App component - represents the whole app
export default class App extends Component {
  state = {
    exercises: [
      { id: 1, title: "Bench Press" },
      { id: 2, title: "Deadlift" },
      { id: 3, title: "Squats" },
    ],
    title: "",
  };

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  handleCreate = e => {
    e.preventDefault();

    if (this.state.title) {
      this.setState(({ exercises, title }) => ({
        exercises: [
          ...exercises,
          {
            title,
            id: Date.now(),
          },
        ],
        title: "",
      }));
    }
  };

  render() {
    const { title, exercises } = this.state;

    return (
      <Paper>
        <Typography variant="display1" align="center" gutterBottom>
          Exercises
        </Typography>
        <form onSubmit={this.handleCreate}>
          <TextField
            name="title"
            label="Exercise"
            value={title}
            onChange={this.handleChange}
            margin="normal"
          />
          <Button type="submit" color="primary" variant="raised">
            Create
          </Button>
        </form>
        <List>
          {exercises.map(({ id, title }) => (
            <ListItem key={id}>
              <ListItemText primary={title} />
            </ListItem>
          ))}
        </List>
      </Paper>
    );
  }
}
