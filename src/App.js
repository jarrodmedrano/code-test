import React, { Component } from "react";
import "./App.css";
import Editor from "./components/Editor";
import "semantic-ui-css/semantic.min.css";
import { Grid } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Grid columns={2}>
        <Grid.Column>
          <Editor />
        </Grid.Column>
        <Grid.Column />
      </Grid>
    );
  }
}

export default App;
