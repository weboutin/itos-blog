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
    axios.get('http://192.168.1.220:4000/v1/article/1').then((response) => {
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
