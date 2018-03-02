import React, { Component } from "react";
import "./App.css";
import Editor from "./components/Editor";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import { Grid, Image } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column>
          <Editor />
        </Grid.Column>
        <Grid.Column />
      </Grid>
    );
  }
}

export default App;
