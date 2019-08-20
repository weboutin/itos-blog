import React from 'react';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import "./articleEditor.css";
import axios from 'axios';

export default class ArticleEditor extends React.Component {
  constructor() {
    super();
    this.state = {
      article: {
        title: "",
        summary: "",
        content: "",
      }
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:4000/v1/article/1').then((response) => {
      const article = response.data;
      this.setState({
        article
      })
    })
  }

  handleChange(value) {
    this.setState({ mdeValue: value });
  }

  render() {
    return <div className="wrap">
      <SimpleMDE className="editor"
        onChange={() => this.handleChange}
        value={this.state.article.content}
        options={{
          spellChecker: false
        }}
      />
    </div>;
  }
}
