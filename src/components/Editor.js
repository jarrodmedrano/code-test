import React, { Component } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/jsx/jsx";

class Editor extends Component {
  state = {
    value: "I ♥ react-codemirror2"
  };

  render() {
    return (
      <CodeMirror
        value={this.state.value}
        options={{
          mode: "javascript",
          theme: "material",
          lineNumbers: true
        }}
        onChange={(editor, data, value) => {
          this.setState({ value });
        }}
      />
    );
  }
}

export default Editor;
