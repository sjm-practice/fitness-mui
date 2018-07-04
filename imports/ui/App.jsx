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
  IconButton,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import "typeface-roboto";

const styles = ({ spacing: { unit } }) => ({
  root: {
    margin: unit,
    padding: unit * 3,
    maxWidth: 400,
  },
  form: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-evenly",
  },
});

// App component - represents the whole app
export default withStyles(styles)(
  class App extends Component {
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

    handleDelete = id =>
      this.setState(({ exercises }) => ({
        exercises: exercises.filter(ex => ex.id !== id),
      }));

    render() {
      const { title, exercises } = this.state;
      const { classes } = this.props;

      return (
        <Paper className={classes.root}>
          <Typography variant="display1" align="center" gutterBottom>
            Exercises
          </Typography>
          <form className={classes.form} onSubmit={this.handleCreate}>
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
                <IconButton color="primary" onClick={() => this.handleDelete(id)}>
                  <Delete />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </Paper>
      );
    }
  },
);
