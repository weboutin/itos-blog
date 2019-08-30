import React from 'react';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import "./articleEditor.css";
import axios from 'axios';

const serverHost = process.env.REACT_APP_SERVER_HOST

export default class ArticleEditor extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      summary: "",
      content: "",
      link: "",
    }
  }

  handleLinkChanged(e) {
    this.setState({
      link: e.target.value
    })
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

  handleDeploy() {
    const article = this.state;
    axios.post(`${serverHost}/article`, {
      article
    }).then(() => {
      this.props.history.push('/');
    })
  }

  render() {
    return <div className="wrap">
      <div className="handleBox">
        <input className="title" placeholder="title" onChange={(e) => { this.handleTitleChanged(e) }} />
        <button onClick={() => this.handleDeploy()}>发布</button>
      </div>
      <input className="link" placeholder="link" onChange={(e) => { this.handleLinkChanged(e) }} />
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
