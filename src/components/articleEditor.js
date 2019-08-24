import React from 'react';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import "./articleEditor.css";
import axios from 'axios';

export default class ArticleEditor extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      summary: "",
      content: "",
    }
  }

  handleEditorChanged(value) {
    this.setState({
      content: value
    })
  }

  handleTitleChanged(e) {
    this.setState({
      title: e.target.value
    })
  }

  handleSummaryChanged(e) {
    this.setState({
      summary: e.target.value
    })
  }

  render() {
    return <div className="wrap">
      <div className="handleBox">
        <input className="title" placeholder="title" onChange={(e) => { this.handleTitleChanged(e) }} />
        <button>发布</button>
      </div>
      <textarea className="summary" placeholder="summary" onChange={(e) => { this.handleSummaryChanged(e) }} />
      <SimpleMDE className="editor"
        onChange={(value) => this.handleEditorChanged(value)}
        options={{
          spellChecker: false
        }}
      />
    </div>;
  }
}
