import React, { Component } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/jsx/jsx";

class Editor extends Component {
  state = {
    code: "//I ♥ react-codemirror2\n"
  };

  updateCode(newCode) {
    this.setState({
      code: newCode
    });
  }

  render() {
    return (
      <CodeMirror
        autoFocus={true}
        value={this.state.code}
        options={{
          mode: "javascript",
          theme: "material",
          lineNumbers: true
        }}
        onBeforeChange={(editor, data, value) => {
          this.updateCode({ value });
        }}
        onChange={(editor, data, value) => {}}
      />
    );
  }
}

export default Editor;
