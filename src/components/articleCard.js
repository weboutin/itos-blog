
import React from 'react';
import { Link } from "react-router-dom";
import './articleCard.css';

export default class ArticleCard extends React.Component {
  render() {
    return <Link className="article" to={{
      pathname: `/article/${this.props.article.articleId}`,
    }}>
      <div className="article-title">{this.props.article.title}</div>
      <div className="aritcle-summary">{this.props.article.summary}</div>
      <div className="aritcle-content">{this.props.article.content}</div>
    </Link>;
  }
}
