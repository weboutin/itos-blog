import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import './articleDetail.css'

const serverHost = process.env.REACT_APP_SERVER_HOST

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
    const articleId = this.props.match.params.articleId;
    axios.get(`${serverHost}/article/${articleId}`).then((response) => {
      const article = response.data;
      this.setState({
        article
      })
    })
  }

  render() {
    return <div className="detail-wrap">
      <div className="detail-mdWrap">
      <ReactMarkdown source={this.state.article.content} />
      </div>
    </div>;
  }
}
