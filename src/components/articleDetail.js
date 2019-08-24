import React from 'react';
import axios from 'axios';

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
      <div>{this.state.article.summary}</div>
      <div>{this.state.article.content}</div>
    </div>;
  }
}
