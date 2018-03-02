import React, { Component } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/jsx/jsx";
import * as actions from "../redux/actions";
import { connect } from "react-redux";

class Editor extends Component {
  onCodeChange(code) {
    this.props.updateCode(code);
  }

  render() {
    return (
      <CodeMirror
        value={this.props.code}
        options={{
          mode: "javascript",
          theme: "material",
          lineNumbers: true
        }}
        onBeforeChange={(editor, data, value) => {
          this.onCodeChange({ value });
        }}
        onChange={(editor, data, value) => {}}
      />
    );
  }
}

function mapStateToProps({ code }) {
  return { code };
}

export default connect(mapStateToProps, actions)(Editor);
