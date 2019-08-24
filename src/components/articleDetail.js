import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

export default class ArticleDetail extends React.Component {
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
    const articleId =  this.props.match.params.articleId;
    axios.get(`http://127.0.0.1:4000/article/${articleId}`).then((response) => {
      const article = response.data;
      this.setState({
        article
      })
    })
  }

  render() {
    return <div>
      <div>{this.state.article.title}</div>
      <ReactMarkdown source={this.state.article.content} />
    </div>;
  }
}
